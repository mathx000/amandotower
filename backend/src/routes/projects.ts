import type { FastifyInstance } from "fastify";
import { db } from "../db.js";
import type { Project, ProjectInput } from "../types.js";

export async function projectRoutes(app: FastifyInstance) {
  app.get("/api/projects", async () => {
    return db.prepare("SELECT * FROM projects ORDER BY id DESC").all() as Project[];
  });

  app.get("/api/projects/:id", async (req, reply) => {
    const { id } = req.params as { id: string };
    const project = db.prepare("SELECT * FROM projects WHERE id = ?").get(id) as Project | undefined;
    if (!project) return reply.code(404).send({ error: "Projeto não encontrado" });
    return project;
  });

  app.post("/api/projects", async (req, reply) => {
    const body = req.body as Partial<ProjectInput>;
    const { title, category, location, year, image } = body;
    if (!title || !category || !location || !year || !image) {
      return reply.code(400).send({ error: "Campos obrigatórios em falta" });
    }
    const result = db
      .prepare("INSERT INTO projects (title, category, location, year, image) VALUES (?, ?, ?, ?, ?)")
      .run(title, category, location, year, image);
    const project = db.prepare("SELECT * FROM projects WHERE id = ?").get(result.lastInsertRowid) as Project;
    return reply.code(201).send(project);
  });

  app.put("/api/projects/:id", async (req, reply) => {
    const { id } = req.params as { id: string };
    const existing = db.prepare("SELECT * FROM projects WHERE id = ?").get(id) as Project | undefined;
    if (!existing) return reply.code(404).send({ error: "Projeto não encontrado" });

    const body = req.body as Partial<ProjectInput>;
    const updated: ProjectInput = {
      title: body.title ?? existing.title,
      category: body.category ?? existing.category,
      location: body.location ?? existing.location,
      year: body.year ?? existing.year,
      image: body.image ?? existing.image,
    };
    db.prepare(
      "UPDATE projects SET title = ?, category = ?, location = ?, year = ?, image = ? WHERE id = ?"
    ).run(updated.title, updated.category, updated.location, updated.year, updated.image, id);
    return db.prepare("SELECT * FROM projects WHERE id = ?").get(id) as Project;
  });

  app.delete("/api/projects/:id", async (req, reply) => {
    const { id } = req.params as { id: string };
    const result = db.prepare("DELETE FROM projects WHERE id = ?").run(id);
    if (result.changes === 0) return reply.code(404).send({ error: "Projeto não encontrado" });
    return reply.code(204).send();
  });
}
