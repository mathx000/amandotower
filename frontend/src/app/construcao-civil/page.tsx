import type { Metadata } from "next";
import ConstructionHero from "@/components/construction/ConstructionHero";
import ConstructionSubNav from "@/components/construction/ConstructionSubNav";
import ConstructionServices from "@/components/construction/ConstructionServices";
import ConstructionMaterials from "@/components/construction/ConstructionMaterials";
import ConstructionGallery from "@/components/construction/ConstructionGallery";
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
      <ConstructionServices />
      <ConstructionMaterials />
      <ConstructionGallery />
      <ConstructionContact />
    </>
  );
}
