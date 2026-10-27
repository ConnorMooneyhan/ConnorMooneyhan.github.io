(() => {
  'use strict';

  const STORAGE_KEY = 'random-phrase-groups';
  const MAX_UNDO = 50;

  const groupsEl = document.getElementById('groups');
  const template = document.getElementById('group-template');
  const phraseEl = document.getElementById('phrase');
  const copyBtn = document.getElementById('copy-btn');
  const undoBtn = document.getElementById('undo-btn');
  const redoBtn = document.getElementById('redo-btn');

  // Each group: { id, name, words: string[] }
  let groups = load();

  // Snapshots of `groups`, newest last. A new change clears the redo stack.
  const undoStack = [];
  const redoStack = [];

  function pushSnapshot(stack) {
    stack.push(JSON.stringify(groups));
    if (stack.length > MAX_UNDO) stack.shift();
  }

  function updateHistoryButtons() {
    undoBtn.disabled = !undoStack.length;
    redoBtn.disabled = !redoStack.length;
  }

  function recordUndo() {
    pushSnapshot(undoStack);
    redoStack.length = 0;
    updateHistoryButtons();
  }

  function stepHistory(from, to) {
    if (!from.length) return;
    pushSnapshot(to);
    groups = JSON.parse(from.pop());
    updateHistoryButtons();
    save();
    render();
  }

  const undo = () => stepHistory(undoStack, redoStack);
  const redo = () => stepHistory(redoStack, undoStack);

  function load() {
    try {
      const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (Array.isArray(data)) return data;
    } catch (_) { /* storage unavailable or corrupt */ }
    return [1, 2, 3].map(() => ({ id: newId(), name: '', words: [] }));
  }

  function save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(groups));
    } catch (_) { /* ignore */ }
  }

  function newId() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
  }

  function render() {
    groupsEl.replaceChildren(...groups.map((group, i) => renderGroup(group, i)));
  }

  function renderGroup(group, index) {
    const el = template.content.firstElementChild.cloneNode(true);
    el.dataset.id = group.id;
    el.querySelector('.group-number').textContent = index + 1;

    const nameInput = el.querySelector('.group-name');
    nameInput.value = group.name;
    // One undo step per editing session, not per keystroke
    let nameEditRecorded = false;
    nameInput.addEventListener('focus', () => { nameEditRecorded = false; });
    nameInput.addEventListener('input', () => {
      if (!nameEditRecorded) {
        recordUndo();
        nameEditRecorded = true;
      }
      group.name = nameInput.value;
      save();
    });

    el.querySelector('.move-up').disabled = index === 0;
    el.querySelector('.move-down').disabled = index === groups.length - 1;
    el.querySelector('.move-up').addEventListener('click', () => moveGroup(index, -1));
    el.querySelector('.move-down').addEventListener('click', () => moveGroup(index, 1));
    el.querySelector('.delete-group').addEventListener('click', () => deleteGroup(index));
    el.querySelector('.drag-handle').addEventListener('pointerdown', (e) => startDrag(e, el));

    const wordsEl = el.querySelector('.words');
    group.words.forEach((word, wi) => {
      const li = document.createElement('li');
      li.className = 'word';
      const span = document.createElement('span');
      span.textContent = word;
      const remove = document.createElement('button');
      remove.type = 'button';
      remove.textContent = '✕';
      remove.setAttribute('aria-label', `Remove "${word}"`);
      remove.addEventListener('click', () => {
        recordUndo();
        group.words.splice(wi, 1);
        save();
        render();
      });
      li.append(span, remove);
      wordsEl.append(li);
    });

    const form = el.querySelector('.add-word');
    const input = el.querySelector('.word-input');
    // Words are separated by any whitespace (including newlines) or commas
    function addWords(text) {
      const added = text.split(/[\s,]+/).filter(Boolean);
      if (!added.length) return;
      recordUndo();
      group.words.push(...added);
      save();
      render();
      // Keep focus in this group's input so several words can be added quickly
      groupsEl.querySelector(`[data-id="${group.id}"] .word-input`).focus();
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      addWords(input.value);
    });

    // A single-line input strips pasted newlines, which would glue words together,
    // so paste with all whitespace collapsed to single spaces instead
    input.addEventListener('paste', (e) => {
      const pasted = e.clipboardData && e.clipboardData.getData('text');
      if (!pasted || !/[\r\n\t]/.test(pasted)) return;
      e.preventDefault();
      const text = pasted.trim().replace(/\s+/g, ' ');
      // execCommand keeps the browser's own Ctrl+Z working for the paste
      if (!document.execCommand('insertText', false, text)) {
        input.setRangeText(text, input.selectionStart, input.selectionEnd, 'end');
      }
    });

    return el;
  }

  function moveGroup(index, delta) {
    const target = index + delta;
    if (target < 0 || target >= groups.length) return;
    recordUndo();
    [groups[index], groups[target]] = [groups[target], groups[index]];
    save();
    render();
    const btn = groupsEl.children[target].querySelector(delta < 0 ? '.move-up' : '.move-down');
    (btn.disabled ? groupsEl.children[target].querySelector('.group-name') : btn).focus();
  }

  // Drag-and-drop reordering with pointer events, so it works for mouse and touch.
  // The DOM is reordered live while dragging; `groups` is updated once on drop.
  function startDrag(e, el) {
    if (e.button !== 0) return;
    e.preventDefault();
    // Listen on window rather than using pointer capture: moving `el` in the DOM
    // would release the capture and the drag would stop receiving events
    const pointerId = e.pointerId;

    const startOrder = groups.map((g) => g.id).join();
    const grabOffset = e.clientY - el.getBoundingClientRect().top;
    let pointerY = e.clientY;
    let scrollFrame = null;

    el.classList.add('dragging');
    document.body.classList.add('is-dragging');

    // Uses offsetTop (unaffected by transforms) so animating siblings don't skew the math
    function followPointer() {
      const naturalTop = groupsEl.getBoundingClientRect().top + el.offsetTop;
      el.style.transform = `translateY(${pointerY - grabOffset - naturalTop}px)`;
    }

    function reorder() {
      const listTop = groupsEl.getBoundingClientRect().top;
      const siblings = [...groupsEl.children].filter((c) => c !== el);
      const ref = siblings.find((c) => pointerY < listTop + c.offsetTop + c.offsetHeight / 2) || null;
      if (ref === el.nextElementSibling) return;

      // FLIP: slide the displaced groups into their new spots
      const before = new Map(siblings.map((c) => [c, c.offsetTop]));
      groupsEl.insertBefore(el, ref);
      siblings.forEach((c) => {
        const delta = before.get(c) - c.offsetTop;
        if (!delta) return;
        c.style.transition = 'none';
        c.style.transform = `translateY(${delta}px)`;
        requestAnimationFrame(() => {
          c.style.transition = 'transform 150ms ease';
          c.style.transform = '';
        });
      });
    }

    // Scroll the page when dragging near the sticky top bar or the bottom action bar
    function autoScroll() {
      const top = document.querySelector('.result').getBoundingClientRect().bottom + 40;
      const bottom = document.querySelector('.action-bar').getBoundingClientRect().top - 40;
      let dy = 0;
      if (pointerY < top) dy = -Math.min(20, (top - pointerY) / 3);
      else if (pointerY > bottom) dy = Math.min(20, (pointerY - bottom) / 3);
      if (dy) {
        window.scrollBy(0, dy);
        reorder();
        followPointer();
      }
      scrollFrame = requestAnimationFrame(autoScroll);
    }

    function onMove(ev) {
      if (ev.pointerId !== pointerId) return;
      pointerY = ev.clientY;
      reorder();
      followPointer();
    }

    function onEnd(ev) {
      if (ev.pointerId !== pointerId) return;
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onEnd);
      window.removeEventListener('pointercancel', onEnd);
      cancelAnimationFrame(scrollFrame);
      document.body.classList.remove('is-dragging');

      const newOrder = [...groupsEl.children].map((c) => c.dataset.id);
      if (newOrder.join() !== startOrder) {
        recordUndo();
        groups = newOrder.map((id) => groups.find((g) => g.id === id));
        save();
      }
      render();
    }

    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onEnd);
    window.addEventListener('pointercancel', onEnd);
    scrollFrame = requestAnimationFrame(autoScroll);
  }

  function deleteGroup(index) {
    recordUndo();
    groups.splice(index, 1);
    save();
    render();
  }

  function addGroup() {
    recordUndo();
    groups.push({ id: newId(), name: '', words: [] });
    save();
    render();
    const input = groupsEl.lastElementChild.querySelector('.word-input');
    input.scrollIntoView({ behavior: 'smooth', block: 'center' });
    input.focus({ preventScroll: true });
  }

  function randomItem(arr) {
    const buf = new Uint32Array(1);
    crypto.getRandomValues(buf);
    return arr[buf[0] % arr.length];
  }

  function generate() {
    const words = groups.filter((g) => g.words.length).map((g) => randomItem(g.words));
    if (!words.length) {
      showPhrase("These aren't the words you're looking for. Add some first.", true);
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

  undoBtn.addEventListener('click', undo);
  redoBtn.addEventListener('click', redo);
  document.addEventListener('keydown', (e) => {
    // Leave shortcuts inside text fields to the browser's own text undo/redo
    if (e.target instanceof Element && e.target.matches('input, textarea')) return;
    if (!(e.ctrlKey || e.metaKey)) return;
    const key = e.key.toLowerCase();
    if (key === 'z' && !e.shiftKey) {
      e.preventDefault();
      undo();
    } else if ((key === 'z' && e.shiftKey) || key === 'y') {
      e.preventDefault();
      redo();
    }
  });

  document.getElementById('add-group-btn').addEventListener('click', addGroup);
  document.getElementById('generate-btn').addEventListener('click', generate);

  render();
})();
