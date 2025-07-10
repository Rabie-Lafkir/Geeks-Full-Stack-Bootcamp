/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
    await knex.schema.createTable('users', (t) => {
      t.increments('id').primary();
      t.string('username').notNullable().unique();
      t.string('email').notNullable().unique();
      t.string('password').notNullable();
    });
  
    await knex.schema.createTable('scores', (t) => {
      t.increments('id').primary();
      t.integer('user_id').references('id').inTable('users').onDelete('CASCADE');
      t.integer('score').notNullable();
      t.timestamp('created_at').defaultTo(knex.fn.now());
    });
  }

  /**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
  export async function down(knex) {
    await knex.schema.dropTableIfExists('scores');
    await knex.schema.dropTableIfExists('users');
  }
  