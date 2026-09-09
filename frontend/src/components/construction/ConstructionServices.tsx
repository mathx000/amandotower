import {
  IconHome,
  IconShield,
  IconRuler,
  IconLayers,
  IconTile,
  IconClipboard,
  IconStar,
  IconHammer,
} from "@/components/icons";

const services = [
  {
    number: "01",
    icon: <IconRuler />,
    title: "Escavação e terraplanagem",
    text: "Preparação do terreno com maquinaria pesada: escavadoras, retroescavadoras e niveladoras.",
  },
  {
    number: "02",
    icon: <IconShield />,
    title: "Fundações",
    text: "Sapatas, vigas de fundação e maciços em betão armado, a base de qualquer construção sólida.",
  },
  {
    number: "03",
    icon: <IconLayers />,
    title: "Estruturas em betão armado",
    text: "Pilares, vigas e lajes betonadas com rigor técnico e ferragens dimensionadas.",
  },
  {
    number: "04",
    icon: <IconTile />,
    title: "Alvenaria",
    text: "Levantamento de paredes em tijolo e bloco de betão, com argamassas de qualidade.",
  },
  {
    number: "05",
    icon: <IconHammer />,
    title: "Betão e betonagem",
    text: "Produção e aplicação de betão em obra, com recurso a betoneiras e equipamento próprio.",
  },
  {
    number: "06",
    icon: <IconHome />,
    title: "Coberturas",
    text: "Estruturas de madeira ou metálicas e telhas, com estanquidade garantida.",
  },
  {
    number: "07",
    icon: <IconClipboard />,
    title: "Rebocos e impermeabilização",
    text: "Rebocos tradicionais e impermeabilização de fundações, contra a humidade.",
  },
  {
    number: "08",
    icon: <IconStar />,
    title: "Demolições",
    text: "Demolição controlada de estruturas e remoção de entulho, preparando o terreno.",
  },
];

export default function ConstructionServices() {
  return (
    <section id="servicos" className="py-20 bg-cream-2">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-14">
          <p className="eyebrow text-xs text-gold-dark tracking-[0.2em] mb-3">
            SERVIÇOS
          </p>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl mb-4 tracking-tight">
            Trabalho de obra, do terreno à estrutura.
          </h2>
          <span className="block w-14 h-0.5 bg-gold" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/5">
          {services.map((s) => (
            <div
              key={s.number}
              className="group bg-cream-2 hover:bg-white p-8 transition-colors border-t-2 border-transparent hover:border-gold"
            >
              <p className="font-sans font-extrabold text-3xl text-black/10 group-hover:text-gold/30 transition-colors mb-4">
                {s.number}
              </p>
              <span className="text-gold-dark mb-4 block transition-transform group-hover:-translate-y-0.5">
                {s.icon}
              </span>
              <h3 className="text-sm tracking-wide mb-2 font-semibold">
                {s.title.toUpperCase()}
              </h3>
              <p className="text-sm text-stone leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
