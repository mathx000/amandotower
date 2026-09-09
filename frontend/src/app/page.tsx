import Image from "next/image";
import Link from "next/link";
import CtaBanner from "@/components/CtaBanner";
import HeroSlider from "@/components/HeroSlider";
import { images } from "@/lib/images";
import { newsArticles } from "@/lib/news";
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
  IconCheckCircle,
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
  {
    icon: <IconHome />,
    title: "Construção Civil",
    text: "Obras de raiz, ampliações e reabilitação com rigor técnico.",
    href: "/servicos/construcao-civil",
    img: images.construcaoHero,
  },
];

const materials = [
  {
    icon: <IconPaintRoller />,
    title: "Tintas Premium",
    text: "Tintas de marcas reconhecidas, com maior cobertura, durabilidade e resistência à humidade.",
    img: images.homePintura,
    items: ["Tinta Acrílica", "Tinta Látex", "Tinta Epóxi", "Primário Selador"],
  },
  {
    icon: <IconTile />,
    title: "Cerâmicas e Revestimentos",
    text: "Cerâmicas de grande formato e mármores selecionados para acabamentos duradouros.",
    img: images.homeCeramicas,
    items: [
      "Cerâmica Retificada",
      "Porcelanato Grês",
      "Mármore Travertino",
      "Rejunte Epóxi",
    ],
  },
  {
    icon: <IconHammer />,
    title: "Madeiras Nobres",
    text: "Madeiras maciças e lacadas, trabalhadas à medida para cada projeto.",
    img: images.homeCarpintaria,
    items: [
      "Carvalho Maciço",
      "Contraplacado Marítimo",
      "Verniz Poliuretano",
      "Martelo de Aço",
    ],
  },
  {
    icon: <IconLayers />,
    title: "Placas de Pladur",
    text: "Placas técnicas com isolamento térmico e acústico de marcas líderes de mercado.",
    img: images.homePladur,
    items: [
      "Gesso Cartonado",
      "Perfis de Aço Galvanizado",
      "Lã Mineral",
      "Massa para Juntas",
    ],
  },
];

const construcaoCivilHighlights = [
  "Fundações e estruturas",
  "Alvenaria e rebocos",
  "Ampliações e construção de raiz",
  "Reabilitação estrutural",
];

const testimonials = [
  {
    name: "Marta Oliveira",
    location: "Cascais",
    rating: 5,
    text: "Equipa extremamente profissional. A remodelação da nossa cozinha ficou exatamente como imaginávamos, com um acabamento impecável e prazos cumpridos à risca.",
  },
  {
    name: "Ricardo Fonseca",
    location: "Lisboa",
    rating: 5,
    text: "Contratámos a Amando Tower para a pintura e pladur de todo o apartamento. Trabalho rigoroso, limpo e com atenção a cada detalhe. Recomendo sem hesitar.",
  },
  {
    name: "Inês Carvalho",
    location: "Sintra",
    rating: 5,
    text: "Desde o primeiro contacto até à entrega da obra, sentimos total confiança na equipa. O resultado superou as nossas expectativas.",
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

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="eyebrow text-xs text-gold-dark tracking-[0.2em] mb-3">
              MATERIAIS QUE UTILIZAMOS
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl mb-4">
              Qualidade que começa na escolha dos materiais
            </h2>
            <span className="block w-14 h-0.5 bg-gold mx-auto" />
          </div>

          <div className="bg-cream-2 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 p-10">
            {materials.map((m) => (
              <div key={m.title}>
                <div className="relative h-28 mb-5 overflow-hidden">
                  <Image
                    src={m.img}
                    alt={m.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 20vw, 45vw"
                  />
                </div>
                <span className="text-gold mb-3 block">{m.icon}</span>
                <h3 className="text-sm tracking-wide mb-2">
                  {m.title.toUpperCase()}
                </h3>
                <p className="text-sm text-stone leading-relaxed mb-4">
                  {m.text}
                </p>
                <div className="flex flex-wrap gap-2">
                  {m.items.map((it) => (
                    <span
                      key={it}
                      className="border border-gold-dark/40 text-gold-dark text-[11px] tracking-wide px-2.5 py-1"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-ink text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-72 lg:h-104 order-2 lg:order-1">
            <Image
              src={images.construcaoMain}
              alt="Construção Civil"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="eyebrow text-xs text-gold tracking-[0.2em] mb-3">
              CONSTRUÇÃO CIVIL
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl mb-4">
              Obras com solidez, do projeto à entrega
            </h2>
            <p className="text-white/70 leading-relaxed mb-6">
              Executamos obras de raiz, ampliações e reabilitações estruturais
              com rigor técnico, cumprindo prazos e assegurando total segurança
              em cada fase da construção.
            </p>
            <ul className="space-y-3 mb-8">
              {construcaoCivilHighlights.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-white/85"
                >
                  <span className="text-gold shrink-0">
                    <IconCheckCircle />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/servicos/construcao-civil"
              className="inline-flex items-center gap-2 bg-gold text-ink text-sm tracking-wide px-6 py-3.5 hover:bg-gold-dark transition-colors"
            >
              VER CONSTRUÇÃO CIVIL <IconArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream-2">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="eyebrow text-xs text-gold-dark tracking-[0.2em] mb-3">
              AVALIAÇÕES
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl mb-4">
              O que dizem os nossos clientes
            </h2>
            <span className="block w-14 h-0.5 bg-gold mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white border border-black/5 p-8">
                <div className="flex gap-1 text-gold mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <IconStar key={i} className="w-4 h-4" />
                  ))}
                </div>
                <p className="text-sm text-stone leading-relaxed mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-ink text-gold flex items-center justify-center text-xs tracking-wide shrink-0">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                  <div>
                    <p className="text-sm">{t.name}</p>
                    <p className="text-xs text-stone">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" id="noticias">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="eyebrow text-xs text-gold-dark tracking-[0.2em] mb-3">
              NOTÍCIAS E NOVIDADES
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl mb-4">
              O que se passa na Amando Tower
            </h2>
            <span className="block w-14 h-0.5 bg-gold mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsArticles.map((n) => (
              <Link
                key={n.slug}
                href={`/noticias/${n.slug}`}
                className="group block bg-white border border-black/5 hover:shadow-xl transition-shadow"
              >
                <div className="relative h-44">
                  <Image
                    src={n.img}
                    alt={n.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(min-width: 1024px) 33vw, 90vw"
                  />
                  <span className="absolute top-3 left-3 bg-gold text-ink text-[10px] tracking-wide px-2.5 py-1">
                    {n.category.toUpperCase()}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-xs text-gold-dark tracking-wide mb-2">
                    {n.date.toUpperCase()}
                  </p>
                  <h3 className="text-sm mb-2 leading-snug">{n.title}</h3>
                  <p className="text-sm text-stone leading-relaxed mb-4">
                    {n.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs tracking-wide text-gold-dark group-hover:gap-2 transition-all">
                    LER MAIS <IconArrowRight className="w-3.5 h-3.5" />
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
