import ServiceTemplate from "@/components/ServiceTemplate";
import { images } from "@/lib/images";
import {
  IconShield,
  IconLayers,
  IconStar,
  IconCalendar,
} from "@/components/icons";

export const metadata = { title: "Pintura | Amando Tower Remodelações" };

export default function PinturaPage() {
  return (
    <ServiceTemplate
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Serviços", href: "/servicos" },
        { label: "Pintura" },
      ]}
      title="Pintura"
      subtitle="Acabamentos impecáveis que elevam cada espaço. Utilizamos materiais premium e técnicas profissionais para garantir durabilidade, beleza e perfeição em cada detalhe."
      heroImage={images.pinturaHero}
      sectionEyebrow="O que fazemos"
      sectionTitle="Pintura interior e exterior com qualidade superior"
      sectionText="Desde a preparação das superfícies à aplicação final, cuidamos de todo o processo para garantir um acabamento uniforme, resistente e esteticamente perfeito."
      features={[
        "Preparação e tratamento de superfícies",
        "Pintura interior de paredes e tetos",
        "Pintura exterior de fachadas e muros",
        "Aplicação de tintas decorativas e efeitos",
        "Acabamentos lisos, acetinados ou mate",
        "Materiais premium e ecológicos",
      ]}
      sectionImage={[
        images.pinturaMain,
        images.pinturaSide1,
        images.pinturaSide2,
      ]}
      materials={[
        "Tinta Acrílica Premium",
        "Tinta Látex Fosca",
        "Tinta Epóxi para Exteriores",
        "Primário Selador",
        "Massa Acrílica",
        "Rolos de Microfibra",
        "Fita Crepe Profissional",
      ]}
      gallery={images.pinturaGallery}
      advantages={[
        {
          icon: <IconStar />,
          title: "Acabamentos Perfeitos",
          text: "Execução rigorosa e atenção ao detalhe para um resultado impecável.",
        },
        {
          icon: <IconShield />,
          title: "Materiais de Qualidade",
          text: "Tintas premium que garantem durabilidade, resistência e cores mais bonitas por mais tempo.",
        },
        {
          icon: <IconLayers />,
          title: "Soluções Saudáveis",
          text: "Materiais ecológicos e seguros para o bem-estar da sua família.",
        },
        {
          icon: <IconCalendar />,
          title: "Cumprimos Prazos",
          text: "Planeamento eficiente e equipa dedicada para entregas no prazo acordado.",
        },
      ]}
      cta={{
        title: "Vamos transformar o seu espaço?",
        subtitle:
          "Peça o seu orçamento gratuito e receba aconselhamento personalizado.",
      }}
    />
  );
}
