"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import { images } from "@/lib/images";
import { fetchProjects } from "@/lib/api";
import type { Project } from "@/lib/types";
import { IconArrowRight } from "@/components/icons";

const categories = [
  "Todos os Projetos",
  "Remodelação Total",
  "Cozinha",
  "Casa de Banho",
  "Interiores",
  "Exteriores",
  "Espaços Comerciais",
];

const stats = [
  { value: "120+", label: "Projetos concluídos" },
  { value: "98%", label: "Clientes satisfeitos" },
  { value: "8+", label: "Anos de experiência" },
  { value: "100%", label: "Compromisso com a qualidade" },
];

export default function ProjetosPage() {
  const [active, setActive] = useState("Todos os Projetos");
  const [projects, setProjects] = useState<Project[]>(images.projetos);

  useEffect(() => {
    fetchProjects().then((data) => {
      if (data && data.length > 0) {
        setProjects(
          data.map((p) => ({
            title: p.title,
            cat: p.category,
            year: p.year,
            img: p.image,
          })),
        );
      }
    });
  }, []);

  const filtered =
    active === "Todos os Projetos"
      ? projects
      : projects.filter((p) => p.cat === active);

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Início", href: "/" }, { label: "Projetos" }]}
        title="Projetos que falam por nós"
        subtitle="Cada projeto é o reflexo do nosso compromisso com a qualidade, os detalhes e a satisfação dos nossos clientes."
        image={images.projetosHero}
      >
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl bg-ink/60 border border-white/10 p-6">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-serif text-2xl sm:text-3xl text-gold">
                {s.value}
              </p>
              <p className="text-xs text-white/60 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </PageHero>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`text-xs tracking-wide px-4 py-2.5 border transition-colors ${
                  active === c
                    ? "bg-gold border-gold text-ink"
                    : "border-black/10 text-stone hover:border-gold hover:text-gold-dark"
                }`}
              >
                {c.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((p) => (
              <div
                key={p.title}
                className="group bg-white border border-black/5 overflow-hidden"
              >
                <div className="relative h-44">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(min-width: 1024px) 25vw, 90vw"
                  />
                  <span className="absolute top-3 left-3 bg-gold text-ink text-[10px] tracking-wide px-2.5 py-1">
                    {p.cat.toUpperCase()}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-sm mb-1">{p.title}</h3>
                  <p className="text-xs text-stone">{p.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Tem um espaço para transformar?"
        subtitle="Fale connosco e descubra como podemos tornar o seu projeto realidade."
      />
    </>
  );
}
