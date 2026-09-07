import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";
import { images } from "@/lib/images";
import {
  IconArrowRight,
  IconPaintRoller,
  IconLayers,
  IconHammer,
  IconTile,
  IconHome,
  IconStar,
} from "@/components/icons";

export const metadata = {
  title: "Serviços | Amando Tower Remodelações",
};

const servicesList = [
  {
    icon: <IconPaintRoller />,
    title: "Pintura",
    text: "Acabamentos interiores e exteriores com tintas de alta qualidade. Ambientes renovados com perfeição e durabilidade.",
    href: "/servicos/pintura",
  },
  {
    icon: <IconLayers />,
    title: "Pladur",
    text: "Soluções em pladur para paredes, tetos e divisórias. Versatilidade, isolamento e acabamento de excelência.",
    href: "/servicos/pladur",
  },
  {
    icon: <IconHammer />,
    title: "Carpintaria",
    text: "Carpintaria personalizada que valoriza cada detalhe. Soluções à medida em madeira para interiores exclusivos.",
    href: "/servicos/carpintaria",
  },
  {
    icon: <IconTile />,
    title: "Cerâmicas",
    text: "Aplicação de cerâmicas e revestimentos com precisão e acabamento superior. Beleza e resistência.",
    href: "/servicos/ceramicas-e-revestimentos",
  },
  {
    icon: <IconHome />,
    title: "Remodelação Integral",
    text: "Remodelações completas do início ao fim. Planeamento, execução e acabamentos com rigor absoluto.",
    href: "/servicos/construcao-civil",
  },
  {
    icon: <IconStar />,
    title: "Acabamentos",
    text: "Atenção ao detalhe em cada acabamento. Perfeição que se vê e qualidade que se sente.",
    href: "/servicos/ceramicas-e-revestimentos",
  },
];

export default function ServicosPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Início", href: "/" }, { label: "Serviços" }]}
        title="Os nossos serviços"
        subtitle="Soluções completas em remodelações e construção civil, com foco na qualidade, nos acabamentos e na satisfação de cada cliente."
        image={images.servicosHero}
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHeading
            eyebrow="Excelência em cada detalhe"
            title="Transformamos espaços em ambientes únicos"
            subtitle="Cada projeto é executado com rigor, materiais de qualidade e uma equipa especializada, garantindo acabamentos impecáveis e resultados que superam expectativas."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="group bg-white border border-black/5 p-7 hover:shadow-xl transition-shadow"
              >
                <span className="text-gold block mb-4">{s.icon}</span>
                <h3 className="text-sm tracking-wide mb-2">
                  {s.title.toUpperCase()}
                </h3>
                <p className="text-sm text-stone leading-relaxed mb-5">
                  {s.text}
                </p>
                <span className="inline-flex items-center gap-1 text-xs tracking-wide text-gold-dark group-hover:gap-2 transition-all">
                  SABER MAIS <IconArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
