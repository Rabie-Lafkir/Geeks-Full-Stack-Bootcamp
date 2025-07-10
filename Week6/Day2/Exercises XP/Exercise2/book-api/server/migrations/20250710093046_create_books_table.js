/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
    await knex.schema.createTable('books', (table) => {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.string('author').notNullable();
        table.integer('publishedYear').notNullable();
    });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
    await knex.schema.dropTableIfExists('books');
}
