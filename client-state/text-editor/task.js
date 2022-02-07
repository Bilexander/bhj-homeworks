'use strict';

const editor = document.getElementById('editor');

editor.addEventListener('input', () => {
  localStorage.setItem('value', editor.value)
});

editor.value = localStorage.getItem('value');