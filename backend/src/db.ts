import { DatabaseSync } from "node:sqlite";
import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dataDir = join(__dirname, "..", "data");
mkdirSync(dataDir, { recursive: true });

export const db = new DatabaseSync(join(dataDir, "app.db"));

db.exec(`
  CREATE TABLE IF NOT EXISTS projects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    location TEXT NOT NULL,
    year TEXT NOT NULL,
    image TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    location TEXT NOT NULL,
    service TEXT NOT NULL,
    message TEXT NOT NULL,
    createdAt TEXT NOT NULL
  );
`);

const seedImg = (seed: string, w = 700, h = 560) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

const seedProjects = [
  { title: "Apartamento T3 – Lisboa", category: "Remodelação Total", location: "Lisboa", year: "2024", image: seedImg("atelier-proj-1") },
  { title: "Moradia S. João – Cascais", category: "Cozinha", location: "Cascais", year: "2024", image: seedImg("atelier-proj-2") },
  { title: "Apartamento Páteo – Porto", category: "Casa de Banho", location: "Porto", year: "2024", image: seedImg("atelier-proj-3") },
  { title: "Moradia Belas Clube – Sintra", category: "Exteriores", location: "Sintra", year: "2024", image: seedImg("atelier-proj-4") },
  { title: "Moradia Ílhavo – Aveiro", category: "Interiores", location: "Aveiro", year: "2024", image: seedImg("atelier-proj-5") },
  { title: "Apartamento Duplex – Oeiras", category: "Remodelação Total", location: "Oeiras", year: "2023", image: seedImg("atelier-proj-6") },
  { title: "Clínica Privada – Lisboa", category: "Espaços Comerciais", location: "Lisboa", year: "2023", image: seedImg("atelier-proj-7") },
  { title: "Moradia Ericeira – Ericeira", category: "Casa de Banho", location: "Ericeira", year: "2023", image: seedImg("atelier-proj-8") },
];

const projectCount = db.prepare("SELECT COUNT(*) as count FROM projects").get() as { count: number };
if (projectCount.count === 0) {
  const insert = db.prepare(
    "INSERT INTO projects (title, category, location, year, image) VALUES (@title, @category, @location, @year, @image)"
  );
  for (const row of seedProjects) insert.run(row);
}
