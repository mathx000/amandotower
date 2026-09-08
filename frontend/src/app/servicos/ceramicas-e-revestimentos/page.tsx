import ServiceTemplate from "@/components/ServiceTemplate";
import { images } from "@/lib/images";
import { IconTile, IconShield, IconLayers, IconStar } from "@/components/icons";

export const metadata = {
  title: "Cerâmicas e Revestimentos | Amando Tower Remodelações",
};

export default function CeramicasPage() {
  return (
    <ServiceTemplate
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Serviços", href: "/servicos" },
        { label: "Cerâmicas e Revestimentos" },
      ]}
      title="Cerâmicas e Revestimentos"
      subtitle="Revestimentos que combinam estética, resistência e funcionalidade, elevando cada ambiente ao mais alto nível."
      heroImage={images.ceramicasHero}
      sectionEyebrow="Acabamentos que fazem a diferença"
      sectionTitle="Qualidade em cada peça, beleza em cada pormenor"
      sectionText="Trabalhamos com as melhores marcas e materiais do mercado para garantir acabamentos duradouros, elegantes e adequados ao seu estilo de vida."
      features={[
        "Cerâmicas de grande formato",
        "Revestimentos para paredes e pavimentos",
        "Mosaicos e detalhes decorativos",
        "Acabamentos sofisticados e modernos",
        "Materiais resistentes e de fácil manutenção",
        "Aplicação com rigor e perfeição",
      ]}
      sectionImage={[
        images.ceramicasMain,
        images.ceramicasSide1,
        images.ceramicasSide2,
      ]}
      advantages={[
        {
          icon: <IconTile />,
          title: "Grande Formato",
          text: "Menos juntas, mais continuidade visual e ambientes amplos.",
        },
        {
          icon: <IconShield />,
          title: "Resistência e Durabilidade",
          text: "Materiais de alta qualidade que garantem desempenho e longa vida útil.",
        },
        {
          icon: <IconLayers />,
          title: "Fácil Manutenção",
          text: "Acabamentos práticos que facilitam o dia a dia e a limpeza.",
        },
        {
          icon: <IconStar />,
          title: "Diversidade de Estilos",
          text: "Cores, texturas e padrões para todos os gostos e projetos.",
        },
      ]}
      materials={[
        "Cerâmica Retificada",
        "Porcelanato Grês",
        "Mármore Travertino",
        "Argamassa Colante Flexível",
        "Rejunte Epóxi",
        "Espaçadores Niveladores",
      ]}
      gallery={images.ceramicasGallery}
      cta={{
        title: "Vamos encontrar os revestimentos ideais para o seu projeto?",
        subtitle:
          "Fale connosco e receba aconselhamento personalizado sem compromisso.",
      }}
    />
  );
}
