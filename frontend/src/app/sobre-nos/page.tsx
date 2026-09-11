import Image from "next/image";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import { images } from "@/lib/images";
import {
  IconShield,
  IconUsers,
  IconCalendar,
  IconStar,
} from "@/components/icons";

export const metadata = { title: "Sobre Nós | Amado Tower Remodelações" };

const values = [
  {
    icon: <IconShield />,
    title: "Qualidade",
    text: "Materiais e mão de obra de excelência em cada projeto.",
  },
  {
    icon: <IconUsers />,
    title: "Equipa",
    text: "Profissionais experientes e apaixonados pelo que fazem.",
  },
  {
    icon: <IconCalendar />,
    title: "Compromisso",
    text: "Cumprimos prazos e mantemos total transparência.",
  },
  {
    icon: <IconStar />,
    title: "Detalhe",
    text: "Perfeição em cada acabamento, do início ao fim.",
  },
];

export default function SobreNosPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Início", href: "/" }, { label: "Sobre Nós" }]}
        title="Uma equipa apaixonada por transformar espaços"
        subtitle="Há mais de 8 anos a construir e remodelar com rigor, qualidade e atenção a cada detalhe."
        image={images.sobreHero}
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="eyebrow text-xs text-gold-dark tracking-[0.2em] mb-3">
              A NOSSA HISTÓRIA
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl mb-4">
              Excelência em cada detalhe
            </h2>
            <span className="block w-14 h-0.5 bg-gold mb-6" />
            <p className="text-stone leading-relaxed">
              A Amado Tower Remodelações nasceu da paixão por transformar
              espaços em ambientes únicos. Ao longo dos anos, construímos uma
              reputação assente na qualidade dos acabamentos, no rigor da
              execução e na proximidade com cada cliente, entregando projetos
              que superam expectativas.
            </p>
          </div>
          <div className="relative h-72 lg:h-105">
            <Image
              src={images.sobreMain}
              alt=""
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 90vw"
            />
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 bg-cream-2 p-10">
          {values.map((v) => (
            <div key={v.title}>
              <span className="text-gold mb-3 block">{v.icon}</span>
              <h3 className="text-sm tracking-wide mb-2">
                {v.title.toUpperCase()}
              </h3>
              <p className="text-sm text-stone leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
