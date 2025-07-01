const COLS = 48;
const ROWS = 24;

const board   = document.getElementById('board');
const palette = document.getElementById('palette');
const clearBtn = document.getElementById('clearBtn');

for (let i = 0; i < COLS * ROWS; i++) {
  const cell = document.createElement('div');
  cell.classList.add('pixel');
  board.appendChild(cell);
}

let currentColour = '#f00';
let isDrawing     = false;

palette.addEventListener('click', e => {
  if (!e.target.classList.contains('swatch')) return;
  currentColour = window.getComputedStyle(e.target).backgroundColor;
});

board.addEventListener('mousedown', e => {
  if (!e.target.classList.contains('pixel')) return;
  isDrawing = true;
  e.target.style.backgroundColor = currentColour;
});

board.addEventListener('mouseover', e => {
  if (!isDrawing || !e.target.classList.contains('pixel')) return;
  e.target.style.backgroundColor = currentColour;
});

window.addEventListener('mouseup', () => {
  isDrawing = false;
});

clearBtn.addEventListener('click', () => {
  document.querySelectorAll('.pixel').forEach(cell => {
    cell.style.backgroundColor = '#fff';
  });
});
