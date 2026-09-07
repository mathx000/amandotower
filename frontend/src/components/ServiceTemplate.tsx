import Image from "next/image";
import type { ReactNode } from "react";
import PageHero from "./PageHero";
import CtaBanner from "./CtaBanner";
import { IconCheckCircle, IconArrowRight } from "./icons";
import Link from "next/link";

type Breadcrumb = { label: string; href?: string };
type Advantage = { icon: ReactNode; title: string; text: string };
type Cta = { title?: string; subtitle?: string };

type ServiceTemplateProps = {
  breadcrumbs: Breadcrumb[];
  title: string;
  subtitle: string;
  heroImage: string;
  sectionEyebrow: string;
  sectionTitle: string;
  sectionText: string;
  features: string[];
  sectionImage: [string, string, string];
  advantages: Advantage[];
  gallery?: string[];
  cta?: Cta;
};

export default function ServiceTemplate({
  breadcrumbs,
  title,
  subtitle,
  heroImage,
  sectionEyebrow,
  sectionTitle,
  sectionText,
  features,
  sectionImage,
  advantages,
  gallery,
  cta,
}: ServiceTemplateProps) {
  return (
    <>
      <PageHero
        breadcrumbs={breadcrumbs}
        title={title}
        subtitle={subtitle}
        image={heroImage}
      >
        <Link
          href="/contactos"
          className="mt-8 inline-flex items-center gap-2 bg-gold text-ink text-sm tracking-wide px-6 py-3 hover:bg-gold-dark transition-colors"
        >
          PEDIR ORÇAMENTO <IconArrowRight />
        </Link>
      </PageHero>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="eyebrow text-xs text-gold-dark tracking-[0.2em] mb-3">
              {sectionEyebrow.toUpperCase()}
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl mb-4">
              {sectionTitle}
            </h2>
            <span className="block w-14 h-0.5 bg-gold mb-6" />
            <p className="text-stone leading-relaxed mb-8">{sectionText}</p>
            <ul className="space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm">
                  <span className="text-gold shrink-0">
                    <IconCheckCircle />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative col-span-2 h-56 sm:h-64">
              <Image
                src={sectionImage[0]}
                alt=""
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 90vw"
              />
            </div>
            <div className="relative h-40 sm:h-48">
              <Image
                src={sectionImage[1]}
                alt=""
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 20vw, 45vw"
              />
            </div>
            <div className="relative h-40 sm:h-48">
              <Image
                src={sectionImage[2]}
                alt=""
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 20vw, 45vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="bg-cream-2 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 p-10">
            {advantages.map((a) => (
              <div key={a.title}>
                <span className="text-gold mb-3 block">{a.icon}</span>
                <h3 className="text-sm tracking-wide mb-2">
                  {a.title.toUpperCase()}
                </h3>
                <p className="text-sm text-stone leading-relaxed">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {gallery && (
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <p className="eyebrow text-xs text-gold-dark tracking-[0.2em] mb-3 text-center">
              INSPIRAÇÃO PARA O SEU PROJETO
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-6">
              {gallery.map((src, i) => (
                <div key={i} className="relative h-32 sm:h-40">
                  <Image
                    src={src}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="20vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBanner title={cta?.title} subtitle={cta?.subtitle} icon="phone" />
    </>
  );
}
