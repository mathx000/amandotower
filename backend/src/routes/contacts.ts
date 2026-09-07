import type { FastifyInstance } from "fastify";
import { db } from "../db.js";
import type { Contact, ContactInput } from "../types.js";

export async function contactRoutes(app: FastifyInstance) {
  app.get("/api/contacts", async () => {
    return db.prepare("SELECT * FROM contacts ORDER BY id DESC").all() as Contact[];
  });

  app.post("/api/contacts", async (req, reply) => {
    const body = req.body as Partial<ContactInput>;
    const { name, email, phone, location, service, message } = body;
    if (!name || !email || !phone || !location || !service || !message) {
      return reply.code(400).send({ error: "Campos obrigatórios em falta" });
    }
    const createdAt = new Date().toISOString();
    const result = db
      .prepare(
        "INSERT INTO contacts (name, email, phone, location, service, message, createdAt) VALUES (?, ?, ?, ?, ?, ?, ?)"
      )
      .run(name, email, phone, location, service, message, createdAt);
    const contact = db.prepare("SELECT * FROM contacts WHERE id = ?").get(result.lastInsertRowid) as Contact;
    return reply.code(201).send(contact);
  });

  app.delete("/api/contacts/:id", async (req, reply) => {
    const { id } = req.params as { id: string };
    const result = db.prepare("DELETE FROM contacts WHERE id = ?").run(id);
    if (result.changes === 0) return reply.code(404).send({ error: "Pedido não encontrado" });
    return reply.code(204).send();
  });
}
