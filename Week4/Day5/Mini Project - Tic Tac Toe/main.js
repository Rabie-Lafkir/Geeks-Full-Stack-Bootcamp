const board = document.querySelectorAll('.cell');
const result = document.getElementById('result');
const restartBtn = document.getElementById('restart');
const chooseX = document.getElementById('chooseX');
const chooseO = document.getElementById('chooseO');
const easyMode = document.getElementById('easyMode');
const hardMode = document.getElementById('hardMode');

let playerSymbol = 'X';
let computerSymbol = 'O';
let currentMode = 'easy';
let gameActive = false;

const gameState = Array(9).fill('');

const winCombos = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
];

// choose symbols
chooseX.addEventListener('click', () => {
  playerSymbol = 'X';
  computerSymbol = 'O';
  startGame();
});
chooseO.addEventListener('click', () => {
  playerSymbol = 'O';
  computerSymbol = 'X';
  startGame();
});

easyMode.addEventListener('click', () => {
  currentMode = 'easy';
});
hardMode.addEventListener('click', () => {
  currentMode = 'hard';
});

function startGame() {
  board.forEach(cell => {
    cell.textContent = '';
    cell.addEventListener('click', handleClick, { once: true });
  });
  gameActive = true;
  gameState.fill('');
  result.textContent = '';
  restartBtn.style.display = 'none';
}

function handleClick(e) {
  const index = +e.target.id;
  if (!gameActive || gameState[index]) return;
  makeMove(index, playerSymbol);
  if (checkWinner(playerSymbol)) endGame(`${playerSymbol} wins!`);
  else if (gameState.every(x => x)) endGame("Tie game");
  else computerMove();
}

function computerMove() {
  let index;
  if (currentMode === 'easy') {
    const emptyIndices = gameState
      .map((v,i) => v === '' ? i : null)
      .filter(v => v !== null);
    index = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
  } else {
    // hard mode - block winning move if possible
    index = findBestMove();
  }
  makeMove(index, computerSymbol);
  if (checkWinner(computerSymbol)) endGame(`${computerSymbol} wins!`);
  else if (gameState.every(x => x)) endGame("Tie game");
}

function makeMove(index, symbol) {
  gameState[index] = symbol;
  document.getElementById(index).textContent = symbol;
}

function checkWinner(symbol) {
  return winCombos.some(combo =>
    combo.every(i => gameState[i] === symbol)
  );
}

function endGame(msg) {
  result.textContent = msg;
  gameActive = false;
  restartBtn.style.display = 'inline-block';
}

restartBtn.addEventListener('click', startGame);

function findBestMove() {
  // simple block strategy
  for (let combo of winCombos) {
    const [a,b,c] = combo;
    const line = [gameState[a], gameState[b], gameState[c]];
    if (line.filter(v => v === playerSymbol).length === 2 &&
        line.includes('')) {
      return combo[line.indexOf('')];
    }
  }
  // fallback to random
  return gameState
    .map((v,i) => v === '' ? i : null)
    .filter(v => v !== null)
    [Math.floor(Math.random() * gameState.filter(v => v === '').length)];
}
