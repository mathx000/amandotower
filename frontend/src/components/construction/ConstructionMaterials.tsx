import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";
import { IconArrowRight } from "@/components/icons";

// `slug` is reserved for future dedicated pages at /construcao-civil/materiais/[slug]
const materialCategories = [
  {
    slug: "cimento-argamassas",
    title: "Cimento e Argamassas",
    text: "Bases sólidas para fundações e alvenaria de qualidade.",
    img: images.construcaoObra[0],
  },
  {
    slug: "betao",
    title: "Betão",
    text: "Betão dosado e betonado em obra, com o rigor técnico exigido.",
    img: images.construcaoMain,
  },
  {
    slug: "aco-ferragens",
    title: "Aço e Ferragens",
    text: "Vergalhões e armaduras que garantem a resistência do betão armado.",
    img: images.construcaoObra[1],
  },
  {
    slug: "tijolo-bloco",
    title: "Tijolo e Bloco de Betão",
    text: "Materiais de alvenaria para o levantamento de paredes e muros.",
    img: images.construcaoObra[2],
  },
  {
    slug: "brita-areia-inertes",
    title: "Brita, Areia e Inertes",
    text: "Agregados para betão, argamassas e preparação de terreno.",
    img: images.construcaoObra[3],
  },
  {
    slug: "isolamento-termico",
    title: "Isolamento Térmico",
    text: "Conforto térmico e eficiência energética em cada divisão.",
    img: images.pladurMain,
  },
  {
    slug: "impermeabilizacao",
    title: "Impermeabilização",
    text: "Proteção contra a humidade em coberturas, terraços e fundações.",
    img: images.construcaoHero,
  },
  {
    slug: "madeira-cofragem",
    title: "Madeira para Cofragem",
    text: "Estruturas provisórias em madeira para moldar o betão em obra.",
    img: images.carpintariaMain,
  },
  {
    slug: "equipamento-maquinaria",
    title: "Equipamento e Maquinaria",
    text: "Tratores, retroescavadoras e betoneiras ao serviço da obra.",
    img: images.construcaoObra[0],
  },
  {
    slug: "ferramentas-obra",
    title: "Ferramentas de Obra",
    text: "Equipamento manual e elétrico para cada fase da construção.",
    img: images.construcaoObra[1],
  },
];

export default function ConstructionMaterials() {
  return (
    <section id="materiais" className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-14">
          <p className="eyebrow text-xs text-gold-dark tracking-[0.2em] mb-3">
            MATERIAIS
          </p>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl mb-4 tracking-tight">
            Materiais e equipamento que sustentam a obra.
          </h2>
          <span className="block w-14 h-0.5 bg-gold" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {materialCategories.map((m) => (
            <div
              key={m.slug}
              className="group bg-white border border-black/5 hover:shadow-xl transition-shadow"
            >
              <div className="relative h-36">
                <Image
                  src={m.img}
                  alt={m.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(min-width: 1024px) 20vw, 45vw"
                />
              </div>
              <div className="p-5">
                <h3 className="text-sm tracking-wide mb-2 font-semibold">
                  {m.title.toUpperCase()}
                </h3>
                <p className="text-xs text-stone leading-relaxed mb-4">
                  {m.text}
                </p>
                <Link
                  href="#contacto"
                  className="inline-flex items-center gap-1 text-xs tracking-wide text-gold-dark group-hover:gap-2 transition-all"
                >
                  VER MATERIAIS <IconArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
