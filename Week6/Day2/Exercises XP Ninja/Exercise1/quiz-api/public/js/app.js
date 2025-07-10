/* ========== CONFIG ========== */
const SECONDS = 15;          // per question

/* ========== STATE ========== */
let currentId = 1;
let score     = 0;
let timer     = null;

/* ========== DOM ========== */
const diffSel  = document.getElementById('difficulty');
const timeEl   = document.getElementById('time');
const qEl      = document.getElementById('question');
const listEl   = document.getElementById('options');
const fillEl   = document.getElementById('fillInput');
const nextBtn  = document.getElementById('nextBtn');
const scoreEl  = document.getElementById('score');

/* ========== TIMER ========== */
function startTimer(onTimeout) {
  clearInterval(timer);
  let t = SECONDS;
  timeEl.textContent = t;
  timer = setInterval(() => {
    t--;
    timeEl.textContent = t;
    if (t === 0) {
      clearInterval(timer);
      onTimeout();
    }
  }, 1000);
}

/* ========== API HELPERS ========== */
async function fetchQuestion(id) {
  const diff = diffSel.value;
  const res  = await fetch(`/api/quiz/${id}?difficulty=${diff}`);
  return res.ok ? res.json() : null;
}

async function postAnswer(questionId, answer) {
  const res = await fetch('/api/quiz/answer', {
    method : 'POST',
    headers: { 'Content-Type': 'application/json' },
    body   : JSON.stringify({ questionId, answer })
  });
  const data = await res.json();
  return data.correct;
}

/* ========== RENDERERS ========== */
async function renderQuestion() {
  const data = await fetchQuestion(currentId);
  if (!data) return finishQuiz();

  const { id, question, options, qtype } = data;

  qEl.textContent  = question;
  listEl.innerHTML = '';
  fillEl.hidden    = qtype !== 'fill';
  fillEl.value     = '';

  if (qtype === 'mcq') {
    options.forEach(o => addLi(o.option, id, qtype));
  } else if (qtype === 'boolean') {
    ['True', 'False'].forEach(txt => addLi(txt, id, qtype));
  }

  nextBtn.hidden = true;
  startTimer(() => handleSubmit(id, null, null, qtype)); // auto on timeout
}

function addLi(text, questionId, qtype) {
  const li = document.createElement('li');
  li.textContent = text;
  li.onclick     = () => handleSubmit(questionId, text, li, qtype);
  listEl.appendChild(li);
}

/* ========== ANSWER FLOW ========== */
async function handleSubmit(questionId, answer, li, qtype) {
  if (qtype === 'fill') answer = fillEl.value.trim();
  const correct = await postAnswer(questionId, answer);

  clearInterval(timer);

  if (qtype === 'fill') {
    fillEl.classList.add(correct ? 'correct' : 'wrong');
  } else if (li) {
    li.classList.add(correct ? 'correct' : 'wrong');
  }

  if (correct) score++;
  nextBtn.hidden = false;
}

/* ========== QUIZ LIFECYCLE ========== */
function nextQuestion() {
  currentId++;
  renderQuestion();
}

function finishQuiz() {
  qEl.textContent   = 'Quiz finished!';
  listEl.innerHTML  = '';
  fillEl.hidden     = true;
  nextBtn.hidden    = true;
  timeEl.textContent = '--';
  scoreEl.textContent = `Score : ${score}`;
}

/* ========== EVENTS ========== */
nextBtn.addEventListener('click', nextQuestion);
diffSel.addEventListener('change', () => {
  currentId = 1;
  score     = 0;
  scoreEl.textContent = '';
  renderQuestion();
});

/* ========== INIT ========== */
renderQuestion();
