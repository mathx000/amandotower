import Fastify from "fastify";
import cors from "@fastify/cors";
import "./db.js";
import { projectRoutes } from "./routes/projects.js";
import { contactRoutes } from "./routes/contacts.js";

const app = Fastify({ logger: true });

await app.register(cors, {
  origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
});

app.get("/api/health", async () => ({ status: "ok" }));

await app.register(projectRoutes);
await app.register(contactRoutes);

const port = Number(process.env.PORT ?? 4000);
app
  .listen({ port, host: "0.0.0.0" })
  .catch((err) => {
    app.log.error(err);
    process.exit(1);
  });
