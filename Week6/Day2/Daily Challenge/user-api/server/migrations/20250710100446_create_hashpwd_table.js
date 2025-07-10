/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
    await knex.schema.createTable('hashpwd', (table) => {
        table.increments('id').primary();
        table.string('username').notNullable().references('username').inTable('users').onDelete('CASCADE');
        table.string('password').notNullable();
    });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
    await knex.schema.dropTableIfExists('hashpwd');
}
