const steps = [
  {
    number: "01",
    title: "Consulta",
    text: "Ouvimos as suas necessidades e objetivos para o projeto.",
  },
  {
    number: "02",
    title: "Planeamento",
    text: "Definimos etapas, prazos e recursos necessários para a obra.",
  },
  {
    number: "03",
    title: "Orçamentação",
    text: "Apresentamos uma proposta clara e detalhada, sem surpresas.",
  },
  {
    number: "04",
    title: "Execução",
    text: "Escavação, betonagem e alvenaria avançam em obra, seguindo o planeamento definido.",
  },
  {
    number: "05",
    title: "Acompanhamento",
    text: "Monitorizamos cada fase para garantir qualidade e cumprimento de prazos.",
  },
  {
    number: "06",
    title: "Entrega",
    text: "Entregamos a obra concluída, pronta para ser vivida ou utilizada.",
  },
];

export default function ConstructionProcess() {
  return (
    <section id="processo" className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <p className="eyebrow text-xs text-gold-dark tracking-[0.2em] mb-3">
            PROCESSO DE TRABALHO
          </p>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl mb-4 tracking-tight">
            Da ideia à entrega.
          </h2>
          <span className="block w-14 h-0.5 bg-gold" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-4">
          {steps.map((s, i) => (
            <div key={s.number} className="relative flex lg:flex-col gap-4">
              <div className="flex flex-col items-center shrink-0 lg:w-full">
                <div className="w-11 h-11 rounded-full bg-ink text-gold flex items-center justify-center text-sm font-semibold shrink-0">
                  {s.number}
                </div>
                {i < steps.length - 1 && (
                  <span className="w-0.5 flex-1 lg:w-full lg:h-0.5 lg:flex-none bg-black/10 mt-2 lg:mt-5 lg:absolute lg:top-5 lg:left-1/2 lg:right-0" />
                )}
              </div>
              <div className="pb-6 lg:pb-0 lg:mt-4 lg:text-center">
                <h3 className="text-sm tracking-wide mb-1.5 font-semibold">
                  {s.title.toUpperCase()}
                </h3>
                <p className="text-xs text-stone leading-relaxed">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
