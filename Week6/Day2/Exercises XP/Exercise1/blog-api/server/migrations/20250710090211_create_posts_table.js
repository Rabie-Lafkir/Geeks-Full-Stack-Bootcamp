/**
 * 
 * @param {*} knex 
 */
export async function up(knex) {
    await knex.schema.createTable('posts', (table) => {
      table.increments('id').primary();
      table.string('title').notNullable();
      table.text('content').notNullable();
      table.timestamps(true, true);
    });
  }
  /**
   * 
   * @param {*} knex 
   */
  export async function down(knex) {
    await knex.schema.dropTableIfExists('posts');
  }
  