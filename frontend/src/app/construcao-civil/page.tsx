import type { Metadata } from "next";
import ConstructionHero from "@/components/construction/ConstructionHero";
import ConstructionSubNav from "@/components/construction/ConstructionSubNav";
import ConstructionAbout from "@/components/construction/ConstructionAbout";
import ConstructionServices from "@/components/construction/ConstructionServices";
import ConstructionMaterials from "@/components/construction/ConstructionMaterials";
import ConstructionProjects from "@/components/construction/ConstructionProjects";
import ConstructionProcess from "@/components/construction/ConstructionProcess";
import ConstructionBenefits from "@/components/construction/ConstructionBenefits";
import ConstructionGallery from "@/components/construction/ConstructionGallery";
import ConstructionCTA from "@/components/construction/ConstructionCTA";
import ConstructionFAQ from "@/components/construction/ConstructionFAQ";
import ConstructionContact from "@/components/construction/ConstructionContact";

export const metadata: Metadata = {
  title: "Construção Civil | Amado Tower",
  description:
    "Construção civil, reabilitação, remodelação e soluções para obras. Conheça os serviços, materiais e projetos da Amado Tower.",
  openGraph: {
    title: "Construção Civil | Amado Tower",
    description:
      "Construção civil, reabilitação, remodelação e soluções para obras. Conheça os serviços, materiais e projetos da Amado Tower.",
    url: "/construcao-civil",
  },
};

export default function ConstrucaoCivilHubPage() {
  return (
    <>
      <ConstructionHero />
      <ConstructionSubNav />
      <ConstructionAbout />
      <ConstructionServices />
      <ConstructionMaterials />
      <ConstructionProjects />
      <ConstructionProcess />
      <ConstructionBenefits />
      <ConstructionGallery />
      <ConstructionCTA />
      <ConstructionFAQ />
      <ConstructionContact />
    </>
  );
}
