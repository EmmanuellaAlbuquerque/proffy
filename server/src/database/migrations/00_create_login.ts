import Knex from 'knex';

// alterações a serem realizar no banco de dados
export async function up(knex: Knex) {
  return knex.schema.createTable('login', table => {
    table.string('name').notNullable();
    table.string('email').primary();
    table.string('password').notNullable();
  })
}

// voltar para uma alteração anterior
export async function down(knex: Knex) {
  return knex.schema.dropTable('login');
}
