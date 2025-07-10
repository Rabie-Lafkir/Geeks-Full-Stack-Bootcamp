export async function seed(knex) {
    // wipe
    await knex('questions_options').del();
    await knex('options').del();
    await knex('questions').del();
  
    /* ── Question 1 : MCQ ────────────────────────── */
    const [q1] = await knex('questions')
      .insert({
        question       : 'Capital of France?',
        correct_answer : 'Paris',
        qtype          : 'mcq',
        difficulty     : 'easy'
      })
      .returning('id');
  
    const opts1 = await knex('options')
      .insert([
        { option: 'Paris' },
        { option: 'Rome' },
        { option: 'Berlin' },
        { option: 'Madrid' }
      ])
      .returning('id');
  
    await knex('questions_options').insert(
      opts1.map(o => ({ question_id: q1.id, option_id: o.id }))
    );
  
    /* ── Question 2 : BOOLEAN ────────────────────── */
    await knex('questions').insert({
      question       : 'The Earth is flat.',
      correct_answer : 'False',
      qtype          : 'boolean',
      difficulty     : 'easy'
    });
  
    /* ── Question 3 : FILL ───────────────────────── */
    await knex('questions').insert({
      question       : '2 + 2 = ___',
      correct_answer : '4',
      qtype          : 'fill',
      difficulty     : 'easy'
    });
  
    /* ── Question 4 : MCQ – medium ───────────────── */
    const [q4] = await knex('questions')
      .insert({
        question       : 'Which planet is known as the Red Planet?',
        correct_answer : 'Mars',
        qtype          : 'mcq',
        difficulty     : 'medium'
      })
      .returning('id');
  
    const opts4 = await knex('options')
      .insert([
        { option: 'Jupiter' },
        { option: 'Mars' },
        { option: 'Venus' },
        { option: 'Saturn' }
      ])
      .returning('id');
  
    await knex('questions_options').insert(
      opts4.map(o => ({ question_id: q4.id, option_id: o.id }))
    );
  
    /* ── Question 5 : BOOLEAN – hard ─────────────── */
    await knex('questions').insert({
      question       : 'Light travels faster than sound.',
      correct_answer : 'True',
      qtype          : 'boolean',
      difficulty     : 'hard'
    });
  }
  