const baseUrl = 'http://localhost:3000/api'

const emojiEl = document.getElementById('emoji');
const optionsEl = document.getElementById('options');
const feedbackEl = document.getElementById('feedback');
const leaderboardEl = document.getElementById('leaderboard');

let currentQuizId = null;
const playerName = prompt('Enter your name') || 'Anonymous';


async function loadLeaderboard() {
    const data = await fetch(`${baseUrl}/leaderboard`).then(r => r.json());
    leaderboardEl.innerHTML = data
        .map(e => `<li>${e.player}: ${e.score}</li>`)
        .join('');
}

async function newQuiz() {
    feedbackEl.textContent = '';
    const { id, emoji, options } = await fetch(`${baseUrl}/quiz`).then(r => r.json());
    currentQuizId = id;
    emojiEl.textContent = emoji;
    optionsEl.innerHTML = options
        .map(opt => `<button class="option">${opt}</button>`)
        .join('');
    document.querySelectorAll('button.option').forEach(btn =>
        btn.addEventListener('click', () => submitGuess(btn.textContent))
    );
}

async function submitGuess(name) {
    const res = await fetch(`${baseUrl}/guess`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: currentQuizId, name, player: playerName })
    }).then(r => r.json());

    feedbackEl.textContent = res.correct
        ? '✅ Correct!'
        : `❌ Oops… it was "${res.answer}".`;
    await loadLeaderboard();
    setTimeout(newQuiz, 1500);
}

loadLeaderboard().then(newQuiz);
