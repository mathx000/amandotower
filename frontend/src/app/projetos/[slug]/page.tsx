import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import { getProjectBySlug, projectsDetail } from "@/lib/projects";
import {
  IconMapPin,
  IconCalendar,
  IconLayers,
  IconRuler,
  IconArrowRight,
} from "@/components/icons";

export function generateStaticParams() {
  return projectsDetail.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  return {
    title: project ? `${project.title} | Amando Tower Remodelações` : "Projeto",
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Início", href: "/" },
          { label: "Projetos", href: "/projetos" },
          { label: project.title },
        ]}
        title={project.title}
        subtitle={project.description}
        image={project.img}
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            <div className="flex items-center gap-3">
              <span className="text-gold shrink-0">
                <IconMapPin />
              </span>
              <div>
                <p className="text-xs text-stone">Localização</p>
                <p className="text-sm">{project.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gold shrink-0">
                <IconCalendar />
              </span>
              <div>
                <p className="text-xs text-stone">Ano</p>
                <p className="text-sm">{project.year}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gold shrink-0">
                <IconLayers />
              </span>
              <div>
                <p className="text-xs text-stone">Categoria</p>
                <p className="text-sm">{project.cat}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gold shrink-0">
                <IconRuler />
              </span>
              <div>
                <p className="text-xs text-stone">Serviço</p>
                <p className="text-sm">Remodelação à medida</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-14 mb-16">
            <div>
              <p className="eyebrow text-xs text-gold-dark tracking-[0.2em] mb-3">
                SOBRE O PROJETO
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl mb-4">
                Detalhes da intervenção
              </h2>
              <span className="block w-14 h-0.5 bg-gold mb-6" />
              <p className="text-stone leading-relaxed">
                {project.description}
              </p>
            </div>
            <div className="bg-cream-2 p-8 space-y-6">
              <div>
                <h3 className="text-sm tracking-wide mb-2">
                  MATERIAIS UTILIZADOS
                </h3>
                <p className="text-sm text-stone leading-relaxed">
                  {project.material}
                </p>
              </div>
              <div>
                <h3 className="text-sm tracking-wide mb-2">TÉCNICA APLICADA</h3>
                <p className="text-sm text-stone leading-relaxed">
                  {project.tecnica}
                </p>
              </div>
            </div>
          </div>

          <p className="eyebrow text-xs text-gold-dark tracking-[0.2em] mb-6 text-center">
            FOTOS DO TRABALHO REALIZADO
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {project.gallery.map((src, i) => (
              <div key={i} className="relative h-48 sm:h-56">
                <Image
                  src={src}
                  alt={`${project.title} - foto ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 25vw, 45vw"
                />
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/projetos"
              className="inline-flex items-center gap-2 text-sm tracking-wide text-gold-dark hover:text-gold transition-colors"
            >
              <span className="rotate-180 inline-flex">
                <IconArrowRight />
              </span>
              VER TODOS OS PROJETOS
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Gostou deste projeto?"
        subtitle="Fale connosco e vamos transformar o seu espaço com o mesmo cuidado e qualidade."
      />
    </>
  );
}
