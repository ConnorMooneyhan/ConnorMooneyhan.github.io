// -------------
// -- Globals --
// -------------
let booksData, selectedBookData, selectedBook, selectedChapter, selectedSection;
const bookSelect = document.querySelector("#book-select");
const chapterSelect = document.querySelector("#chapter-select");
const sectionSelect = document.querySelector("#section-select");
// const exerciseSelect = document.querySelector("#exercise-select");
const generationButton = document.querySelector("#generationButton");
const exercisesContainer = document.querySelector("#exercises");

// -------------
// -- Helpers --
// -------------
const latexToMathjax = (str) => {
  if (typeof str !== "string") return;

  // clean string
  str = str
    .trim()
    .replace(/^\\\s*\\/, "\\")
    .replaceAll(
      "\\begin{enumerate}[label=(\\alph*)]",
      '<ol class="alpha-with-parentheses">',
    )
    .replaceAll(
      "\\begin{enumerate}[label=\\textbf{\\alph*.}]",
      '<ol class="alpha--bold">',
    )
    .replaceAll("\\begin{itemize}", "<ul>")
    .replaceAll("\\end{enumerate}", "</li></ol>")
    .replaceAll("\\end{itemize}", "</li></ul>")
    .replaceAll(/\\textbf{([^}]+)}/g, "<strong>$1</strong>")
    .replaceAll(/\\textit{([^}]+)}/g, "<em>$1</em>")
    .split("\\item ")
    .reduce((prev, cur, index) =>
      index === 1 ? `${prev}<li>${cur}` : `${prev}</li><li>${cur}`,
    )
    .replaceAll(/\\dd(?=\W)/g, "\\mathop{}\\!\\mathrm{d}")
    .replaceAll("\\S", "§")
    .replaceAll("\\lbrack", "[")
    .replaceAll("\\rbrack", "]")
    .replaceAll("\\coloneq", ":=")

  // dollar sign delimiters to mathjax equivalents
  let newStr = "";
  let opener = true;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char !== "$") {
      newStr += char;
      continue;
    }

    const prevChar = str[i - 1] || "";
    const nextChar = str[i + 1] || "";

    if (prevChar === "$") continue;

    if (opener) {
      if (nextChar === "$") {
        newStr += "\\[";
      } else {
        newStr += "\\(";
      }
    } else {
      if (nextChar === "$") {
        newStr += "\\]";
      } else {
        newStr += "\\)";
      }
    }

    opener = !opener;
  }

  return newStr;
};

const typeset = () => {
  if (typeof MathJax !== "undefined") MathJax.typeset();
};

// -------------
// -- Getters --
// -------------
const getBooks = async () => {
  const res = await fetch(
    "https://g2f6530af77760f-problemset.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/books/",
  ).then((r) => r.json());

  booksData = res.items.map((item) => ({
    ...item,
    // title: latexToMathJax(item.title),
    // chapters: item.chapters?.map((chapter) => ({
    //   ...chapter,
    //   title: latexToMathJax(chapter.title),
    // })),
    // sections: item.sections?.map((section) => ({
    //   ...section,
    //   title: latexToMathJax(section.title),
    // })),
    titleWithAuthors: `${item.title} by ${item.authors.map((author) => author.split(", ").toReversed().join(" ")).join(" & ")}`,
  }));
  const books = booksData.map((item) => item.titleWithAuthors);

  const booksFragment = document.createDocumentFragment();
  for (const book of books) {
    const el = document.createElement("option");
    el.innerHTML = book;
    booksFragment.appendChild(el);
  }
  bookSelect.appendChild(booksFragment);
  bookSelect.removeAttribute("disabled");
};

const getExercises = async () => {
  const params = {
    book: selectedBook,
    chapter: selectedChapter,
    section: selectedSection,
  };
  const res = await fetch(
    `https://g2f6530af77760f-problemset.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/exercises/?q=${encodeURIComponent(JSON.stringify(params))}`,
  ).then((r) => r.json());

  const items = res.items
    .map((item) => ({
      ...item,
      title: latexToMathjax(item.title),
      body: latexToMathjax(item.body),
      hint: latexToMathjax(item.hint),
      solution: latexToMathjax(item.solution),
    }))
    .sort((a, b) =>
      Number(a.exercise.match(/\d+$/)[0]) < Number(b.exercise.match(/\d+$/)[0])
        ? -1
        : 1,
    );

  return items;
};

// ---------------
// -- Listeners --
// ---------------
generationButton.addEventListener("click", async (e) => {
  e.preventDefault();

  const exercises = await getExercises();

  const fragment = document.createDocumentFragment();

  for (const exercise of exercises) {
    const el = document.createElement("div");
    el.innerHTML = `
      ${exercise.title ? `<h2>${exercise.exercise} ${exercise.title}</h2>` : ""}
      <p>${exercise.title ? "" : `<strong class="exercise-number--inline">${exercise.exercise}.</strong>`}${exercise.body}</p>
      ${exercise.hint ? `<details class="hint"><summary>Hint</summary>${exercise.hint}</details>` : ""}
      ${exercise.solution ? `<details class="solution"><summary>Solution</summary>${exercise.solution}</details>` : ""}
    `;
    fragment.appendChild(el);
  }

  exercisesContainer.replaceChildren(fragment);
  generationButton.setAttribute("disabled", "");
  typeset();
});

bookSelect.addEventListener("change", (e) => {
  selectedBook = e.target.value.split(" by")[0];
  selectedBookData = booksData.find(
    (book) => e.target.value === book.titleWithAuthors,
  );

  const chaptersFragment = document.createDocumentFragment();
  const selectAChapter = document.createElement("option");
  selectAChapter.innerHTML = "Select a chapter";
  chaptersFragment.appendChild(selectAChapter);
  for (const chapter of selectedBookData.chapters) {
    const el = document.createElement("option");
    el.innerHTML = `${chapter.number}. ${chapter.title}`;
    chaptersFragment.appendChild(el);
  }
  chapterSelect.replaceChildren(chaptersFragment);
  chapterSelect.removeAttribute("disabled");

  const selectASection = document.createElement("option");
  selectASection.innerHTML = "Select a section";
  sectionSelect.replaceChildren(selectASection);
  sectionSelect.setAttribute("disabled", "");
});

chapterSelect.addEventListener("change", (e) => {
  selectedChapter = e.target.value.split(".")[0];
  const sectionsFragment = document.createDocumentFragment();
  const selectASection = document.createElement("option");
  selectASection.innerHTML = "Select a section";
  sectionsFragment.appendChild(selectASection);
  for (const section of selectedBookData.sections) {
    if (section.chapter !== selectedChapter) continue;

    const el = document.createElement("option");
    el.innerHTML = `§${section.number} ${section.title}`;
    sectionsFragment.appendChild(el);
  }
  sectionSelect.replaceChildren(sectionsFragment);
  sectionSelect.removeAttribute("disabled");
});

sectionSelect.addEventListener("change", (e) => {
  selectedSection = e.target.value.split(/[§ ]/)[1];
  generationButton.removeAttribute("disabled");
});

// --------------------
// -- Initialization --
// --------------------
getBooks();
