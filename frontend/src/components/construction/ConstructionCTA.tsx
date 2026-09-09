import Link from "next/link";
import { IconArrowRight, IconWhatsapp } from "@/components/icons";

export default function ConstructionCTA() {
  return (
    <section className="bg-ink py-20">
      <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center text-white">
        <h2 className="font-sans font-extrabold text-3xl sm:text-4xl mb-4 tracking-tight">
          Tem um projeto em mente?
        </h2>
        <p className="text-white/60 leading-relaxed mb-8">
          Fale com a nossa equipa e descubra como podemos transformar a sua
          ideia em realidade.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#contacto"
            className="inline-flex items-center gap-2 bg-gold text-ink text-sm font-semibold tracking-wide px-6 py-3.5 hover:bg-gold-dark transition-colors"
          >
            SOLICITAR ORÇAMENTO <IconArrowRight />
          </Link>
          <a
            href="https://wa.me/351912345678"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/30 text-white text-sm tracking-wide px-6 py-3.5 hover:border-gold hover:text-gold transition-colors"
          >
            <IconWhatsapp className="w-4 h-4" /> FALAR CONNOSCO
          </a>
        </div>
      </div>
    </section>
  );
}
