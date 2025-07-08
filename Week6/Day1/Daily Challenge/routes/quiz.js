import { Router } from 'express';

const quizRouter = Router();

// Hardcoded questions
const triviaQuestions = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "Which planet is known as the Red Planet?", answer: "Mars" },
    { question: "What is the largest mammal in the world?", answer: "Blue whale" }
];

// Temporary in-memory quiz state
let quizState = {
    currentQuestion: 0,
    score: 0,
    completed: false
};

// GET /quiz – start or continue the quiz
quizRouter.get('/', (req, res) => {
    if (quizState.completed) {
        return res.json({ message: "Quiz completed! Go to /quiz/score to see your result." });
    }

    const current = triviaQuestions[quizState.currentQuestion];
    if (!current) {
        quizState.completed = true;
        return res.json({ message: "Quiz finished! Go to /quiz/score to see your result." });
    }

    res.json({ questionNumber: quizState.currentQuestion + 1, question: current.question });
});

// POST /quiz – submit answer and go to next question
quizRouter.post('/', (req, res) => {
    const { answer } = req.body;
    const current = triviaQuestions[quizState.currentQuestion];

    if (!answer) {
        return res.status(400).json({ error: "Answer is required" });
    }

    if (!current) {
        return res.status(400).json({ message: "Quiz already finished." });
    }

    const isCorrect = current.answer.toLowerCase() === answer.trim().toLowerCase();

    if (isCorrect) quizState.score++;

    quizState.currentQuestion++;

    if (quizState.currentQuestion >= triviaQuestions.length) {
        quizState.completed = true;
        return res.json({
            correct: isCorrect,
            message: "That was the last question. Go to /quiz/score to see your result."
        });
    }

    const nextQuestion = triviaQuestions[quizState.currentQuestion];
    res.json({
        correct: isCorrect,
        nextQuestion: {
            questionNumber: quizState.currentQuestion + 1,
            question: nextQuestion.question
        }
    });
});

// GET /quiz/score – display final score
quizRouter.get('/score', (req, res) => {
    if (!quizState.completed) {
        return res.json({ message: "You haven't finished the quiz yet!" });
    }

    const score = quizState.score;
    const total = triviaQuestions.length;

    // Reset for demo replay (remove if real per-user session is used)
    quizState = { currentQuestion: 0, score: 0, completed: false };

    res.json({ message: `🎉 Your final score is ${score} out of ${total}` });
});

export default quizRouter;