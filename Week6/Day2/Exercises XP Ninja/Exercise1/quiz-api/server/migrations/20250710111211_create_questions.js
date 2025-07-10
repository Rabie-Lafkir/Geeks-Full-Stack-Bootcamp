/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
    await knex.schema.createTable('questions', (t) => {
      t.increments('id').primary();
      t.string('question').notNullable();
      t.string('correct_answer').notNullable();
    });
  }

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
    await knex.schema.dropTableIfExists('questions');
  }
