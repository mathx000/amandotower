import Image from "next/image";
import Link from "next/link";
import { projectsDetail } from "@/lib/projects";
import { IconArrowRight } from "@/components/icons";

const featuredSlugs = [
  "apartamento-t3-lisboa",
  "moradia-belas-clube-sintra",
  "clinica-privada-lisboa",
  "apartamento-duplex-oeiras",
  "moradia-ilhavo-aveiro",
  "moradia-ericeira-ericeira",
];

const featuredProjects = featuredSlugs
  .map((slug) => projectsDetail.find((p) => p.slug === slug))
  .filter((p): p is (typeof projectsDetail)[number] => Boolean(p));

// Asymmetric masonry-style grid: first and fourth items span two columns
export default function ConstructionProjects() {
  return (
    <section id="projetos" className="py-20 bg-cream-2">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-14">
          <p className="eyebrow text-xs text-gold-dark tracking-[0.2em] mb-3">
            PROJETOS
          </p>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl mb-4 tracking-tight">
            Projetos que falam por nós.
          </h2>
          <span className="block w-14 h-0.5 bg-gold" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((p, i) => (
            <Link
              key={p.slug}
              href={`/projetos/${p.slug}`}
              className={`group relative block overflow-hidden bg-ink ${
                i === 0 || i === 3 ? "sm:col-span-2 h-96" : "h-72"
              }`}
            >
              <Image
                src={p.img}
                alt={p.title}
                fill
                className="object-cover opacity-80 group-hover:opacity-95 group-hover:scale-105 transition-all duration-500"
                sizes="(min-width: 1024px) 40vw, 90vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-ink/90 via-ink/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="inline-block bg-gold text-ink text-[10px] tracking-wide px-2.5 py-1 mb-3">
                  {p.cat.toUpperCase()}
                </span>
                <h3 className="font-serif text-xl mb-1">{p.title}</h3>
                <p className="text-xs text-white/60 mb-3">{p.location}</p>
                <span className="inline-flex items-center gap-1 text-xs tracking-wide text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                  VER PROJETO <IconArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
