import express from 'express';
import quizRouter from './routes/quiz.js';

const app = express();
const PORT = 3000;
app.use(express.json());
app.use('/quiz', quizRouter);

app.listen(PORT, () => {
    console.log(`🎮 Server is running on http://localhost:${PORT}`);
});
