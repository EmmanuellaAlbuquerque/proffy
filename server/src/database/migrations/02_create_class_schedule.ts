import Knex from 'knex';

// alterações a serem realizar no banco de dados
export async function up(knex: Knex) {
  return knex.schema.createTable('class_schedule', table => {
    table.increments('id').primary();

    table.integer('week_day').notNullable();
    table.integer('from').notNullable();
    table.integer('to').notNullable();

    // Chave estrageira
    table.integer('class_id')
      .notNullable()
      .references('id')
      .inTable('classes')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  })
}

// voltar para uma alteração anterior
export async function down(knex: Knex) {
  return knex.schema.dropTable('class_schedule');
}
