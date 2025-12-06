import { Knex } from "knex";
import bcrypt from "bcryptjs";

export async function seed(knex: Knex): Promise<void> {
  const senhaHash = await bcrypt.hash("admin123", 10);

  await knex("usuarios").insert({
    nome: "Administrador",
    email: "admin@sistema.com",
    senha: senhaHash,
    tipo: "admin",
  });
}
