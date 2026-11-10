import ServiceTemplate from "@/components/ServiceTemplate";
import { images } from "@/lib/images";
import {
  IconCalendar,
  IconHome,
  IconRuler,
  IconShield,
} from "@/components/icons";

export const metadata = {
  title: "Jardinagem e Paisagismo | Amado Tower Remodelações",
};

export default function JardinagemEPaisagismoPage() {
  return (
    <ServiceTemplate
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Serviços" },
        { label: "Jardinagem e Paisagismo" },
      ]}
      title="Jardinagem e Paisagismo"
      subtitle="Criamos e cuidamos de espaços exteriores harmoniosos, combinando plantas, materiais e soluções práticas para valorizar a sua casa."
      heroImage={images.jardinagemHero}
      sectionEyebrow="Natureza com intenção"
      sectionTitle="Jardins pensados para viver e desfrutar"
      sectionText="Planeamos cada espaço de acordo com o terreno, a exposição solar e o seu estilo. Da preparação do solo à escolha das plantas, tratamos de cada detalhe para criar jardins bonitos, funcionais e fáceis de manter."
      features={[
        "Conceção e renovação de jardins",
        "Preparação e enriquecimento do solo",
        "Plantação de árvores, arbustos e flores",
        "Instalação e manutenção de relvados",
        "Sistemas de rega eficientes",
        "Poda, limpeza e manutenção regular",
      ]}
      sectionImage={[
        images.jardinagemMain,
        images.jardinagemSide1,
        images.jardinagemSide2,
      ]}
      materials={[
        "Plantas adaptadas ao clima",
        "Relva natural e sintética",
        "Terra vegetal e compostagem",
        "Sistemas de rega",
        "Pedra decorativa",
        "Elementos de madeira para exterior",
      ]}
      gallery={images.jardinagemGallery}
      advantages={[
        {
          icon: <IconRuler />,
          title: "Projeto à Medida",
          text: "Soluções pensadas para o espaço, o terreno e as suas preferências.",
        },
        {
          icon: <IconShield />,
          title: "Escolhas Duradouras",
          text: "Materiais e espécies selecionados para resistir e prosperar.",
        },
        {
          icon: <IconHome />,
          title: "Mais Valorização",
          text: "Espaços exteriores cuidados que dão personalidade à sua casa.",
        },
        {
          icon: <IconCalendar />,
          title: "Manutenção Planeada",
          text: "Acompanhamento regular para manter o jardim saudável e bonito.",
        },
      ]}
      cta={{
        title: "Vamos dar vida ao seu jardim?",
        subtitle:
          "Conte-nos a sua ideia e peça um orçamento para o seu espaço exterior.",
      }}
    />
  );
}
