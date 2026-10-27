(() => {
  'use strict';

  const STORAGE_KEY = 'random-phrase-sets';

  const setsEl = document.getElementById('sets');
  const template = document.getElementById('set-template');
  const phraseEl = document.getElementById('phrase');
  const copyBtn = document.getElementById('copy-btn');

  // Each set: { id, name, words: string[] }
  let sets = load();

  function load() {
    try {
      const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (Array.isArray(data)) return data;
    } catch (_) { /* storage unavailable or corrupt */ }
    return [
      { id: newId(), name: '', words: ['big', 'small', 'fuzzy'] },
      { id: newId(), name: '', words: ['red', 'green', 'blue'] },
      { id: newId(), name: '', words: ['dog', 'cat', 'llama'] },
    ];
  }

  function save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(sets));
    } catch (_) { /* ignore */ }
  }

  function newId() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
  }

  function render() {
    setsEl.replaceChildren(...sets.map((set, i) => renderSet(set, i)));
  }

  function renderSet(set, index) {
    const el = template.content.firstElementChild.cloneNode(true);
    el.dataset.id = set.id;
    el.querySelector('.set-number').textContent = index + 1;

    const nameInput = el.querySelector('.set-name');
    nameInput.value = set.name;
    nameInput.addEventListener('input', () => {
      set.name = nameInput.value;
      save();
    });

    el.querySelector('.move-up').disabled = index === 0;
    el.querySelector('.move-down').disabled = index === sets.length - 1;
    el.querySelector('.move-up').addEventListener('click', () => moveSet(index, -1));
    el.querySelector('.move-down').addEventListener('click', () => moveSet(index, 1));
    el.querySelector('.delete-set').addEventListener('click', () => deleteSet(index));

    const wordsEl = el.querySelector('.words');
    set.words.forEach((word, wi) => {
      const li = document.createElement('li');
      li.className = 'word';
      const span = document.createElement('span');
      span.textContent = word;
      const remove = document.createElement('button');
      remove.type = 'button';
      remove.textContent = '✕';
      remove.setAttribute('aria-label', `Remove "${word}"`);
      remove.addEventListener('click', () => {
        set.words.splice(wi, 1);
        save();
        render();
      });
      li.append(span, remove);
      wordsEl.append(li);
    });

    const form = el.querySelector('.add-word');
    const input = el.querySelector('.word-input');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const added = input.value.split(',').map((w) => w.trim()).filter(Boolean);
      if (!added.length) return;
      set.words.push(...added);
      save();
      render();
      // Keep focus in this set's input so several words can be added quickly
      setsEl.querySelector(`[data-id="${set.id}"] .word-input`).focus();
    });

    return el;
  }

  function moveSet(index, delta) {
    const target = index + delta;
    if (target < 0 || target >= sets.length) return;
    [sets[index], sets[target]] = [sets[target], sets[index]];
    save();
    render();
    const btn = setsEl.children[target].querySelector(delta < 0 ? '.move-up' : '.move-down');
    (btn.disabled ? setsEl.children[target].querySelector('.set-name') : btn).focus();
  }

  function deleteSet(index) {
    const set = sets[index];
    if (set.words.length && !confirm(`Delete set ${index + 1}${set.name ? ` (${set.name})` : ''}?`)) return;
    sets.splice(index, 1);
    save();
    render();
  }

  function addSet() {
    const set = { id: newId(), name: '', words: [] };
    sets.push(set);
    save();
    render();
    const input = setsEl.lastElementChild.querySelector('.word-input');
    input.scrollIntoView({ behavior: 'smooth', block: 'center' });
    input.focus({ preventScroll: true });
  }

  function randomItem(arr) {
    const buf = new Uint32Array(1);
    crypto.getRandomValues(buf);
    return arr[buf[0] % arr.length];
  }

  function generate() {
    const words = sets.filter((s) => s.words.length).map((s) => randomItem(s.words));
    if (!words.length) {
      showPhrase('Add some words first', true);
      return;
    }
    const phrase = words.join(' ').toLowerCase();
    showPhrase(phrase.charAt(0).toUpperCase() + phrase.slice(1), false);
  }

  function showPhrase(text, isPlaceholder) {
    phraseEl.textContent = text;
    phraseEl.classList.toggle('placeholder', isPlaceholder);
    phraseEl.classList.remove('flash');
    void phraseEl.offsetWidth; // restart animation
    phraseEl.classList.add('flash');
    copyBtn.hidden = isPlaceholder || !navigator.clipboard;
    copyBtn.textContent = 'Copy';
  }

  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(phraseEl.textContent);
      copyBtn.textContent = 'Copied!';
    } catch (_) {
      copyBtn.textContent = 'Failed';
    }
  });

  document.getElementById('add-set-btn').addEventListener('click', addSet);
  document.getElementById('generate-btn').addEventListener('click', generate);

  render();
})();
