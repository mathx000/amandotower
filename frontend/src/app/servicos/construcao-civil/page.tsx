import Link from "next/link";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import {
  ConstrucaoMainPhoto,
  ConstrucaoObraGallery,
} from "@/components/ConstrucaoGallery";
import { images } from "@/lib/images";
import {
  IconArrowRight,
  IconShield,
  IconUsers,
  IconCalendar,
  IconRuler,
  IconHammer,
  IconLayers,
  IconTile,
  IconHome,
  IconPaintRoller,
} from "@/components/icons";

export const metadata = {
  title: "Construção Civil | Amando Tower Remodelações",
};

const otherServices = [
  "Alvenaria",
  "Demolições",
  "Fundações",
  "Estruturas",
  "Rebocos",
  "Impermeabilização",
  "Isolamento",
  "Coberturas",
  "Pavimentos",
  "Construção / Ampliação",
  "Reabilitação Estrutural",
  "Preparação de Obra",
];

const process = [
  {
    n: "01",
    title: "Planeamento",
    text: "Análise do projeto e definição de necessidades.",
  },
  {
    n: "02",
    title: "Preparação da obra",
    text: "Organização do espaço, equipamentos e materiais.",
  },
  {
    n: "03",
    title: "Execução",
    text: "Desenvolvimento dos trabalhos com qualidade.",
  },
  {
    n: "04",
    title: "Controlo e acompanhamento",
    text: "Monitorização contínua da obra.",
  },
  {
    n: "05",
    title: "Acabamentos",
    text: "Detalhes que fazem toda a diferença.",
  },
  { n: "06", title: "Entrega", text: "Obra concluída com total satisfação." },
];

const team = [
  { icon: <IconHome />, label: "Construção" },
  { icon: <IconLayers />, label: "Remodelação" },
  { icon: <IconPaintRoller />, label: "Pintura" },
  { icon: <IconRuler />, label: "Pladur" },
  { icon: <IconHammer />, label: "Carpintaria" },
  { icon: <IconTile />, label: "Cerâmicas" },
];

export default function ConstrucaoCivilPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Início", href: "/" },
          { label: "Construção Civil" },
        ]}
        title="Construímos com rigor. Transformamos com propósito."
        subtitle="Soluções completas de construção e execução de obra, com qualidade, precisão e atenção a cada detalhe."
        image={images.construcaoHero}
      >
        <Link
          href="/contactos"
          className="mt-8 inline-flex items-center gap-2 bg-gold text-ink text-sm tracking-wide px-6 py-3 hover:bg-gold-dark transition-colors"
        >
          PEDIR ORÇAMENTO <IconArrowRight />
        </Link>
      </PageHero>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="eyebrow text-xs text-gold-dark tracking-[0.2em] mb-3">
              CONSTRUÇÃO CIVIL
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl mb-4">
              Da estrutura ao acabamento.
            </h2>
            <span className="block w-14 h-0.5 bg-gold mb-6" />
            <p className="text-stone leading-relaxed mb-8">
              Somos especialistas em construção civil e executamos todas as
              etapas da obra, desde a preparação do terreno até aos acabamentos
              finais. Com uma equipa qualificada e materiais de qualidade,
              garantimos um resultado sólido, seguro e duradouro.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <span className="text-gold shrink-0">
                  <IconShield />
                </span>
                <p className="text-sm">Qualidade em cada etapa</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gold shrink-0">
                  <IconUsers />
                </span>
                <p className="text-sm">Equipa especializada</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gold shrink-0">
                  <IconCalendar />
                </span>
                <p className="text-sm">Cumprimento de prazos</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gold shrink-0">
                  <IconRuler />
                </span>
                <p className="text-sm">Soluções personalizadas</p>
              </div>
            </div>
          </div>
          <div className="relative h-72 lg:h-105">
            <ConstrucaoMainPhoto
              main={images.construcaoMain}
              obra={images.construcaoObra}
            />
            <div className="absolute bottom-4 left-4 right-4 bg-ink/90 text-white text-xs p-4">
              Do projeto à entrega, acompanhamos todo o processo da sua obra.
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-12">
            <p className="eyebrow text-xs text-gold tracking-[0.2em] mb-3">
              OUTROS SERVIÇOS
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl mb-4">
              Outros serviços de construção
            </h2>
            <span className="block w-14 h-0.5 bg-gold mb-6" />
            <p className="text-white/60 leading-relaxed">
              Além dos serviços de remodelação e acabamentos, também realizamos
              uma vasta gama de trabalhos de construção civil.
            </p>
            <Link
              href="/contactos"
              className="mt-6 inline-flex items-center gap-2 bg-gold text-ink text-sm tracking-wide px-6 py-3 hover:bg-gold-dark transition-colors"
            >
              SOLICITAR ORÇAMENTO <IconArrowRight />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-white/10">
            {otherServices.map((s) => (
              <div
                key={s}
                className="bg-ink p-6 flex items-center gap-3 min-w-0"
              >
                <span className="text-gold shrink-0">
                  <IconHome className="w-5 h-5" />
                </span>
                <span className="text-sm wrap-break-word min-w-0">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="eyebrow text-xs text-gold-dark tracking-[0.2em] mb-3 text-center">
            MATERIAIS E FERRAMENTAS
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl mb-8 text-center">
            O que utilizamos neste serviço
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Cimento Portland",
              "Betão Armado",
              "Blocos de Betão",
              "Aço para Armaduras",
              "Tijolo Cerâmico",
              "Argamassa de Reboco",
              "Betoneira",
            ].map((m) => (
              <span
                key={m}
                className="border border-gold-dark/40 text-gold-dark text-xs tracking-wide px-4 py-2"
              >
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow text-xs text-gold-dark tracking-[0.2em] mb-3">
              NOSSO PROCESSO
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl mb-4">
              Da ideia à realidade
            </h2>
            <span className="block w-14 h-0.5 bg-gold mb-6" />
            <p className="text-stone leading-relaxed">
              Seguimos um processo estruturado para garantir que cada obra seja
              executada com eficiência, segurança e total transparência.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-8">
            {process.map((p) => (
              <div key={p.n}>
                <span className="font-serif text-2xl text-gold-dark">
                  {p.n}
                </span>
                <h3 className="text-sm tracking-wide mt-2 mb-2">
                  {p.title.toUpperCase()}
                </h3>
                <p className="text-xs text-stone leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-10">
            <p className="eyebrow text-xs text-gold tracking-[0.2em] mb-3">
              CONSTRUÇÃO + ACABAMENTOS
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl">
              Uma única equipa para todo o projeto.
            </h2>
            <span className="block w-14 h-0.5 bg-gold my-6" />
            <p className="text-white/60 leading-relaxed">
              Da construção aos acabamentos, oferecemos um serviço completo e
              integrado, com a mesma qualidade e atenção ao detalhe em todas as
              fases.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {team.map((t, i) => (
              <span
                key={t.label}
                className="flex items-center gap-2 text-sm text-white/80"
              >
                <span className="text-gold">{t.icon}</span>
                {t.label}
                {i < team.length - 1 && (
                  <IconArrowRight className="w-3.5 h-3.5 text-gold ml-6" />
                )}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="eyebrow text-xs text-gold-dark tracking-[0.2em] mb-3">
              EM AÇÃO
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl mb-4">
              Veja o nosso trabalho em obra
            </h2>
            <span className="block w-14 h-0.5 bg-gold mb-6" />
            <p className="text-stone leading-relaxed mb-6">
              Acompanhe de perto alguns dos nossos projetos e veja como
              transformamos espaços com qualidade, segurança e profissionalismo.
            </p>
            <Link
              href="/projetos"
              className="inline-flex items-center gap-2 bg-gold text-ink text-sm tracking-wide px-6 py-3 hover:bg-gold-dark transition-colors"
            >
              VER GALERIA <IconArrowRight />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <ConstrucaoObraGallery
              main={images.construcaoMain}
              obra={images.construcaoObra}
            />
          </div>
        </div>
      </section>

      <CtaBanner
        title="Tem uma obra em mente?"
        subtitle="Fale connosco e descubra como podemos transformar o seu projeto em realidade."
      />
    </>
  );
}
