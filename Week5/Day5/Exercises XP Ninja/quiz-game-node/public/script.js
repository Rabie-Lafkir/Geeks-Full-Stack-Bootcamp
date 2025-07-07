const API_URL = "http://localhost:5000/api/questions";
const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");
const nextBtn = document.getElementById("next-btn");
const quizBox = document.getElementById("quiz-box");
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const feedbackEl = document.getElementById("feedback");
const startScreen = document.getElementById("start-screen");
const resultScreen = document.getElementById("result-screen");
const scoreEl = document.getElementById("score");
const totalEl = document.getElementById("total");

let questions = [];
let current = 0;
let score = 0;

startBtn.addEventListener("click", initGame);
restartBtn.addEventListener("click", initGame);
nextBtn.addEventListener("click", () => showQuestion(++current));

async function initGame() {
    questions = await fetch(API_URL).then(r => r.json());
    totalEl.textContent = questions.length;
    score = current = 0;
    startScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");
    quizBox.classList.remove("hidden");
    showQuestion(current);
}

function showQuestion(idx) {
    // out of questions -> finish
    if (idx >= questions.length) return endGame();

    const q = questions[idx];
    questionEl.textContent = q.text;
    answersEl.innerHTML = "";

    feedbackEl.textContent = "";
    feedbackEl.className = "feedback";
    nextBtn.classList.add("hidden");

    q.answers.forEach((answer, i) => {
        const li = document.createElement("li");
        const btn = document.createElement("button");
        btn.textContent = answer;
        btn.onclick = () => selectAnswer(i === q.correctIndex);
        li.appendChild(btn);
        answersEl.appendChild(li);
    });
}

function selectAnswer(correct) {
    Array.from(answersEl.querySelectorAll("button")).forEach(b => b.disabled = true);
    if (correct) {
        score++;
        feedbackEl.textContent = "Correct ✅";
        feedbackEl.classList.add("correct");
    } else {
        feedbackEl.textContent = "Wrong ❌";
        feedbackEl.classList.add("wrong");
    }
    nextBtn.classList.remove("hidden");
}

function endGame() {
    quizBox.classList.add("hidden");
    scoreEl.textContent = score;
    resultScreen.classList.remove("hidden");
}
