import Image from "next/image";
import Link from "next/link";
import CtaBanner from "@/components/CtaBanner";
import HeroSlider from "@/components/HeroSlider";
import { images } from "@/lib/images";
import {
  IconArrowRight,
  IconShield,
  IconUsers,
  IconCalendar,
  IconStar,
  IconPaintRoller,
  IconLayers,
  IconHammer,
  IconTile,
  IconHome,
} from "@/components/icons";

const differentiators = [
  {
    icon: <IconShield />,
    title: "Acabamentos Premium",
    text: "Materiais de qualidade superior e atenção ao detalhe.",
  },
  {
    icon: <IconUsers />,
    title: "Equipa Especializada",
    text: "Profissionais experientes em cada especialidade.",
  },
  {
    icon: <IconCalendar />,
    title: "Cumprimos Prazos",
    text: "Planeamento rigoroso e compromisso com os prazos acordados.",
  },
  {
    icon: <IconStar />,
    title: "Garantia de Qualidade",
    text: "Trabalho garantido para a sua total tranquilidade.",
  },
];

const specialties = [
  {
    icon: <IconPaintRoller />,
    title: "Pintura",
    text: "Acabamentos interiores e exteriores com tintas de alta qualidade.",
    href: "/servicos/pintura",
    img: images.homePintura,
  },
  {
    icon: <IconLayers />,
    title: "Pladur",
    text: "Soluções em pladur para paredes, tetos e divisórias.",
    href: "/servicos/pladur",
    img: images.homePladur,
  },
  {
    icon: <IconHammer />,
    title: "Carpintaria",
    text: "Carpintaria personalizada que valoriza cada detalhe.",
    href: "/servicos/carpintaria",
    img: images.homeCarpintaria,
  },
  {
    icon: <IconTile />,
    title: "Cerâmicas",
    text: "Revestimentos e cerâmicas com estética e durabilidade.",
    href: "/servicos/ceramicas-e-revestimentos",
    img: images.homeCeramicas,
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSlider />

      <section className="bg-ink border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentiators.map((d) => (
            <div key={d.title} className="flex items-start gap-3 text-white">
              <span className="text-gold shrink-0">{d.icon}</span>
              <div>
                <h3 className="text-sm tracking-wide">
                  {d.title.toUpperCase()}
                </h3>
                <p className="text-xs text-white/60 mt-1 leading-relaxed">
                  {d.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="eyebrow text-xs text-gold-dark tracking-[0.2em] mb-3">
              AS NOSSAS ESPECIALIDADES
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl mb-4">
              Soluções completas para a sua remodelação
            </h2>
            <span className="block w-14 h-0.5 bg-gold mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {specialties.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group block bg-white border border-black/5 hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(min-width: 1024px) 25vw, 90vw"
                  />
                  <span className="absolute -bottom-5 left-5 w-11 h-11 rounded-full bg-ink text-gold flex items-center justify-center">
                    {s.icon}
                  </span>
                </div>
                <div className="p-5 pt-8">
                  <h3 className="text-sm tracking-wide mb-2">
                    {s.title.toUpperCase()}
                  </h3>
                  <p className="text-sm text-stone leading-relaxed mb-4">
                    {s.text}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs tracking-wide text-gold-dark group-hover:gap-2 transition-all">
                    SAIBA MAIS <IconArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
