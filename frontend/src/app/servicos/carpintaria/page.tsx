import ServiceTemplate from "@/components/ServiceTemplate";
import { images } from "@/lib/images";
import {
  IconRuler,
  IconShield,
  IconStar,
  IconCalendar,
} from "@/components/icons";

export const metadata = { title: "Carpintaria | Amado Tower Remodelações" };

export default function CarpintariaPage() {
  return (
    <ServiceTemplate
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Serviços" },
        { label: "Carpintaria" },
      ]}
      title="Carpintaria"
      subtitle="Soluções em madeira à medida que combinam funcionalidade, beleza e acabamentos de excelência."
      heroImage={images.carpintariaHero}
      sectionEyebrow="Madeira que valoriza"
      sectionTitle="Carpintaria personalizada para cada detalhe"
      sectionText="Trabalhamos com madeiras de qualidade superior e técnicas avançadas para criar soluções únicas e duradouras, adaptadas ao seu estilo e às suas necessidades."
      features={[
        "Mobiliário por medida",
        "Roupeiros e closets",
        "Portas interiores e exteriores",
        "Revestimentos e painéis decorativos",
        "Escadas e guardas",
        "Acabamentos personalizados",
      ]}
      sectionImage={[
        images.carpintariaMain,
        images.carpintariaSide1,
        images.carpintariaSide2,
      ]}
      advantages={[
        {
          icon: <IconRuler />,
          title: "Soluções à Medida",
          text: "Projetos personalizadas que se adaptam ao seu espaço e ao seu estilo de vida.",
        },
        {
          icon: <IconShield />,
          title: "Madeiras de Qualidade",
          text: "Selecionamos madeiras nobres e materiais resistentes para garantir durabilidade e beleza.",
        },
        {
          icon: <IconStar />,
          title: "Acabamentos Premium",
          text: "Atenção ao detalhe em cada peça, para um resultado elegante e sofisticado.",
        },
        {
          icon: <IconCalendar />,
          title: "Cumprimos Prazos",
          text: "Planeamento eficiente e equipa experiente para entregas no prazo acordado.",
        },
      ]}
      materials={[
        "Madeira de Carvalho Maciço",
        "Contraplacado Marítimo",
        "Verniz Poliuretano",
        "Dobradiças de Aço Inox",
        "Martelo de Aço",
        "Serra Circular",
        "Lixadeira Orbital",
      ]}
      gallery={images.carpintariaGallery}
      cta={{
        title: "Tem um projeto em mente?",
        subtitle:
          "Fale connosco e receba um orçamento gratuito e sem compromisso.",
      }}
    />
  );
}
