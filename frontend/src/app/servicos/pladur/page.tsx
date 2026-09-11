import ServiceTemplate from "@/components/ServiceTemplate";
import { images } from "@/lib/images";
import {
  IconRuler,
  IconShield,
  IconCalendar,
  IconStar,
} from "@/components/icons";

export const metadata = { title: "Pladur | Amado Tower Remodelações" };

export default function PladurPage() {
  return (
    <ServiceTemplate
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Serviços", href: "/servicos" },
        { label: "Pladur" },
      ]}
      title="Pladur"
      subtitle="Soluções inteligentes em pladur para paredes, tetos e divisórias, com acabamento impecável e máximo conforto."
      heroImage={images.pladurHero}
      sectionEyebrow="Versatilidade e acabamento"
      sectionTitle="Pladur que transforma o seu espaço"
      sectionText="Trabalhamos com materiais de alta qualidade e técnicas avançadas para garantir resultados duradouros, estéticos e funcionais em qualquer tipo de projeto."
      features={[
        "Paredes e divisórias em pladur",
        "Tetos falsos simples ou com design",
        "Isolamento térmico e acústico",
        "Acabamentos prontos a pintar",
        "Soluções personalizadas para cada espaço",
      ]}
      sectionImage={[images.pladurMain, images.pladurSide1, images.pladurSide2]}
      materials={[
        "Placas de Gesso Cartonado",
        "Perfis de Aço Galvanizado",
        "Lã Mineral Isolante",
        "Massa para Juntas",
        "Fita de Juntas",
        "Parafusos Autoperfurantes",
      ]}
      gallery={images.pladurGallery}
      advantages={[
        {
          icon: <IconRuler />,
          title: "Soluções Personalizadas",
          text: "Projetos adaptados às suas necessidades e ao estilo do seu espaço.",
        },
        {
          icon: <IconShield />,
          title: "Materiais de Qualidade",
          text: "Utilizamos placas e perfis de marcas líderes no mercado.",
        },
        {
          icon: <IconCalendar />,
          title: "Cumprimos Prazos",
          text: "Planeamento eficiente e equipa experiente para cumprir o combinado.",
        },
        {
          icon: <IconStar />,
          title: "Acabamentos Premium",
          text: "Atenção ao detalhe que garante um resultado final impecável.",
        },
      ]}
      cta={{
        title: "Precisa de soluções em pladur para o seu projeto?",
        subtitle: "Fale connosco e receba aconselhamento sem compromisso.",
      }}
    />
  );
}
