import {
  IconClipboard,
  IconShield,
  IconCheckCircle,
  IconUsers,
  IconCalendar,
  IconStar,
} from "@/components/icons";

const benefits = [
  {
    icon: <IconClipboard />,
    title: "Planeamento",
    text: "Cada projeto começa com organização e planeamento.",
  },
  {
    icon: <IconShield />,
    title: "Qualidade",
    text: "Materiais e execução orientados para resultados duradouros.",
  },
  {
    icon: <IconCheckCircle />,
    title: "Transparência",
    text: "Comunicação clara durante todas as etapas.",
  },
  {
    icon: <IconUsers />,
    title: "Profissionalismo",
    text: "Uma equipa preparada para acompanhar cada fase.",
  },
  {
    icon: <IconCalendar />,
    title: "Compromisso",
    text: "Cumprimos o que foi planeado.",
  },
  {
    icon: <IconStar />,
    title: "Segurança",
    text: "Normas de segurança aplicadas em cada fase da obra, com equipamento e maquinaria adequados.",
  },
];

export default function ConstructionBenefits() {
  return (
    <section className="py-20 bg-ink-2 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="eyebrow text-xs text-gold tracking-[0.2em] mb-3">
            DIFERENCIAIS
          </p>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl mb-4 tracking-tight">
            Por que escolher a Amado Tower?
          </h2>
          <span className="block w-14 h-0.5 bg-gold mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b) => (
            <div key={b.title} className="flex items-start gap-4">
              <span className="text-gold shrink-0 mt-0.5">{b.icon}</span>
              <div>
                <h3 className="text-sm tracking-wide mb-1.5 font-semibold">
                  {b.title.toUpperCase()}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {b.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
