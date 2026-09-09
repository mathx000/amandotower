"use client";

import { useState } from "react";
import { IconChevronDown } from "@/components/icons";

const faqs = [
  {
    q: "Que tipos de obras realizam?",
    a: "Realizamos trabalhos de escavação, terraplanagem, fundações, estruturas em betão armado, alvenaria, coberturas e demolições.",
  },
  {
    q: "Trabalham com projetos residenciais?",
    a: "Sim, trabalhamos com projetos residenciais e também com espaços comerciais.",
  },
  {
    q: "Também realizam reabilitação?",
    a: "Sim, a reabilitação de edifícios existentes é uma das nossas áreas de atuação, respeitando as características originais do imóvel.",
  },
  {
    q: "É possível solicitar apenas determinados serviços?",
    a: "Sim, pode contratar serviços específicos, como estruturas, fachadas ou acabamentos, sem necessidade de uma obra completa.",
  },
  {
    q: "Trabalham com fornecimento de materiais?",
    a: "Sim, trabalhamos com cimento, betão, tijolo, brita, areia, ferro e demais materiais de obra. Contacte-nos para validar disponibilidade e especificações.",
  },
  {
    q: "Como posso solicitar um orçamento?",
    a: "Pode preencher o formulário de contacto nesta página ou falar diretamente com a nossa equipa por telefone, email ou WhatsApp.",
  },
  {
    q: "Em que zonas de Portugal trabalham?",
    a: "Contacte-nos com a localização do seu projeto para confirmarmos a disponibilidade da nossa equipa na sua zona.",
  },
];

export default function ConstructionFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="eyebrow text-xs text-gold-dark tracking-[0.2em] mb-3">
            FAQ
          </p>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl mb-4 tracking-tight">
            Perguntas frequentes
          </h2>
          <span className="block w-14 h-0.5 bg-gold mx-auto" />
        </div>

        <div className="divide-y divide-black/10 border-y border-black/10">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-medium">
                    {item.q}
                  </span>
                  <span
                    className={`text-gold-dark shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  >
                    <IconChevronDown />
                  </span>
                </button>
                {isOpen && (
                  <p className="text-sm text-stone leading-relaxed pb-5 pr-8">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
