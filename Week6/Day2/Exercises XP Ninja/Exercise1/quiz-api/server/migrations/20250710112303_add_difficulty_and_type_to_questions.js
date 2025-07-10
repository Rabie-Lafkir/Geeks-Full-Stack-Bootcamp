/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
    await knex.schema.alterTable('questions', (t) => {
        t.enum('difficulty', ['easy', 'medium', 'hard']).defaultTo('easy');
        t.enum('qtype', ['mcq', 'boolean', 'fill']).defaultTo('mcq');
    });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
    await knex.schema.alterTable('questions', (t) => {
        t.dropColumn('difficulty');
        t.dropColumn('qtype');
    });
}
