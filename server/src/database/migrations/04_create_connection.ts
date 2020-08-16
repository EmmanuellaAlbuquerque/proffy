import Knex from 'knex';

// alterações a serem realizar no banco de dados
export async function up(knex: Knex) {
  return knex.schema.createTable('connections', table => {
    table.increments('id').primary();

    // conexão com professor
    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

    // horário que o registro está sendo criado
    table.timestamp('created_at')
      .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
      .notNullable();
  })
}

// voltar para uma alteração anterior
export async function down(knex: Knex) {
  return knex.schema.dropTable('connections');
}
