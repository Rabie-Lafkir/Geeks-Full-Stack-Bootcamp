import db from '../config/knex.js';

/* always select qtype + difficulty */
export const getById = (id) =>
  db('questions')
    .select('id', 'question', 'correct_answer', 'qtype', 'difficulty')
    .where({ id })
    .first();

/* same but with difficulty filter */
export const getByIdWithDifficulty = (id, difficulty) =>
  db('questions')
    .select('id', 'question', 'correct_answer', 'qtype', 'difficulty')
    .where({ id, difficulty })
    .first();

/* options for MCQ only */
export const getOptionsForQuestion = (id) =>
  db('options')
    .join('questions_options', 'options.id', 'questions_options.option_id')
    .where('questions_options.question_id', id)
    .select('options.id', 'options.option');
