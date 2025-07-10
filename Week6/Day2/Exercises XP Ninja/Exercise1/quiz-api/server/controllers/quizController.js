import * as Q from '../models/questionModel.js';

/* ========== GET /api/quiz/:id?difficulty=easy|medium|hard ========== */
export const getQuestion = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { difficulty } = req.query;

    const question = difficulty
      ? await Q.getByIdWithDifficulty(id, difficulty)
      : await Q.getById(id);

    if (!question)
      return res.status(404).json({ error: 'Question not found' });

    const options =
      question.qtype === 'mcq'
        ? await Q.getOptionsForQuestion(id)
        : [];

    res.json({ ...question, options });
  } catch (err) {
    next(err);
  }
};

/* ========== POST /api/quiz/answer  { questionId, answer } ========== */
export const submitAnswer = async (req, res, next) => {
  try {
    const { questionId, answer } = req.body;
    const question = await Q.getById(questionId);

    if (!question)
      return res.status(404).json({ error: 'Question not found' });

    let correct = false;

    if (answer == null || answer === '') {
      correct = false;
    } else if (question.qtype === 'fill') {
      correct =
        answer.trim().toLowerCase() ===
        question.correct_answer.trim().toLowerCase();
    } else if (question.qtype === 'boolean') {
      correct =
        String(answer).toLowerCase() ===
        String(question.correct_answer).toLowerCase();
    } else { // mcq
      correct = answer === question.correct_answer;
    }

    res.json({ correct });
  } catch (err) {
    next(err);
  }
};
