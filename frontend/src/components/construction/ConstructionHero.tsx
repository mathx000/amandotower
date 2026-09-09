import Link from "next/link";
import Image from "next/image";
import { images } from "@/lib/images";

const trustIndicators = [
  "Escavação",
  "Terraplanagem",
  "Betão Armado",
  "Alvenaria",
];

export default function ConstructionHero() {
  return (
    <section className="relative bg-ink-2 text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={images.construcaoHero}
          alt=""
          fill
          priority
          className="object-cover opacity-60"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink-2 via-ink-2/70 to-ink-2/20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <p className="eyebrow text-xs text-gold tracking-[0.3em] mb-6">
          AMANDO TOWER · CONSTRUÇÃO CIVIL
        </p>
        <h1 className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-6xl max-w-2xl leading-[1.05] tracking-tight">
          Trabalho pesado. Fundações sólidas.
        </h1>
        <p className="max-w-xl text-white/70 text-base sm:text-lg mt-6 leading-relaxed">
          Escavação, terraplanagem, betão armado e alvenaria. Trabalhamos com
          tratores, retroescavadoras e betoneiras, aplicando cimento, tijolo,
          brita e ferro para dar solidez ao seu projeto desde o primeiro dia.
        </p>
        <div className="flex flex-wrap gap-4 mt-9">
          <Link
            href="#contacto"
            className="inline-flex items-center gap-2 bg-gold text-ink text-sm font-semibold tracking-wide px-6 py-3.5 hover:bg-gold-dark transition-colors"
          >
            SOLICITAR ORÇAMENTO
          </Link>
          <Link
            href="#projetos"
            className="inline-flex items-center gap-2 border border-white/30 text-white text-sm tracking-wide px-6 py-3.5 hover:border-gold hover:text-gold transition-colors"
          >
            VER PROJETOS
          </Link>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-10 text-xs tracking-[0.15em] text-white/50">
          {trustIndicators.map((item, i) => (
            <span key={item} className="flex items-center gap-x-5">
              {i > 0 && <span className="text-gold/50">•</span>}
              {item.toUpperCase()}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
