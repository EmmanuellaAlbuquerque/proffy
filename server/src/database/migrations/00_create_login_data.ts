import Knex from "knex";

// alterações a serem realizar no banco de dados
export async function up(knex: Knex) {
  return knex.schema.createTable("login_data", (table) => {
    table.increments("id").primary();
    table.string("fullname").notNullable();
    table.string("email").notNullable();
    table.string("encryptedPassword").notNullable();
  });
}

// voltar para uma alteração anterior
export async function down(knex: Knex) {
  return knex.schema.dropTable("login_data");
}
