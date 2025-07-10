/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
    await knex.schema.createTable('questions_options', (t) => {
      t.integer('question_id').references('id').inTable('questions').onDelete('CASCADE');
      t.integer('option_id').references('id').inTable('options').onDelete('CASCADE');
      t.primary(['question_id','option_id']);
    });
  }

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
    await knex.schema.dropTableIfExists('questions_options');
  }
