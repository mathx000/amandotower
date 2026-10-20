"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";
import { IconArrowRight } from "@/components/icons";

const slides = [
  {
    eyebrow: "REMODELAMOS. CONSTRUÍMOS. TRANSFORMAMOS.",
    title: "Remodelações com detalhe.",
    highlight: "Obra com elegância.",
    text: "Especialistas em remodelações de interiores e construção civil, com foco em acabamentos de excelência.",
    img: images.homeHero,
  },
  {
    eyebrow: "CONSTRUÇÃO CIVIL DE RAIZ E AMPLIAÇÕES",
    title: "Construção civil com solidez.",
    highlight: "Do projeto à entrega.",
    text: "Fundações, estruturas, alvenaria e reabilitação com rigor técnico e cumprimento de prazos.",
    img: images.construcaoHero,
  },
];

const SLIDE_DURATION = 6000;

export default function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => clearInterval(id);
  }, []);

  const goToPrev = () =>
    setActive((i) => (i - 1 + slides.length) % slides.length);
  const goToNext = () => setActive((i) => (i + 1) % slides.length);

  return (
    <section className="relative bg-ink text-white overflow-hidden">
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <div
            key={slide.img}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.img}
              alt=""
              fill
              priority={i === 0}
              className="object-cover opacity-75"
              sizes="100vw"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-linear-to-r from-ink/80 via-ink/55 to-ink/15" />
      </div>

      <button
        type="button"
        onClick={goToPrev}
        aria-label="Slide anterior"
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 p-2 text-white/70 hover:text-gold transition-colors cursor-pointer"
      >
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M15 6l-6 6 6 6" />
        </svg>
      </button>
      <button
        type="button"
        onClick={goToNext}
        aria-label="Próximo slide"
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 p-2 text-white/70 hover:text-gold transition-colors cursor-pointer"
      >
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-24 lg:pt-24 lg:pb-32">
        <p className="eyebrow text-xs text-gold tracking-[0.25em] mb-5">
          {slides[active].eyebrow}
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl max-w-xl leading-tight">
          {slides[active].title}{" "}
          <span className="text-gold">{slides[active].highlight}</span>
        </h1>
        <p className="max-w-lg text-white/70 text-base sm:text-lg mt-6 leading-relaxed">
          {slides[active].text}
        </p>
        <div className="flex flex-wrap gap-4 mt-9">
          <Link
            href="/contactos"
            className="inline-flex items-center gap-2 bg-gold text-ink text-sm tracking-wide px-6 py-3.5 hover:bg-gold-dark transition-colors"
          >
            PEDIR ORÇAMENTO
          </Link>
        </div>

        <div className="flex gap-2 mt-10">
          {slides.map((slide, i) => (
            <button
              key={slide.img}
              type="button"
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                i === active ? "w-8 bg-gold" : "w-3 bg-white/30"
              }`}
              aria-label={`Ir para o slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
