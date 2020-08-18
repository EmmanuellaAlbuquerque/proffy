import Knex from "knex";

// alterações a serem realizar no banco de dados
export async function up(knex: Knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("email").notNullable();
    table.string("encryptedPassword").notNullable();
    table.string("avatar").notNullable();
    table.string("whatsapp").notNullable();
    table.string("bio").notNullable();
  });
}

// voltar para uma alteração anterior
export async function down(knex: Knex) {
  return knex.schema.dropTable("users");
}
