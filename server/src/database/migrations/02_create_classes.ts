import Knex from 'knex';

// alterações a serem realizar no banco de dados
export async function up(knex: Knex) {
  return knex.schema.createTable('classes', table => {
    table.increments('id').primary();
    table.string('subject').notNullable();
    table.decimal('cost').notNullable();

    // Chave estrageira
    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  })
}

// voltar para uma alteração anterior
export async function down(knex: Knex) {
  return knex.schema.dropTable('classes');
}
