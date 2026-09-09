"use client";

import Image from "next/image";
import { images } from "@/lib/images";
import Lightbox from "@/components/Lightbox";

const galleryImages = [
  images.construcaoHero,
  images.construcaoMain,
  ...images.construcaoObra,
];

export default function ConstructionGallery() {
  return (
    <section id="galeria" className="py-20 bg-cream-2">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-14">
          <p className="eyebrow text-xs text-gold-dark tracking-[0.2em] mb-3">
            GALERIA DE OBRA
          </p>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl mb-4 tracking-tight">
            Da terraplanagem ao betão armado.
          </h2>
          <span className="block w-14 h-0.5 bg-gold" />
        </div>

        <Lightbox images={galleryImages}>
          {(open) => (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {galleryImages.map((src, i) => (
                <button
                  type="button"
                  key={src + i}
                  onClick={() => open(i)}
                  aria-label={`Ver imagem ${i + 1} em ecrã inteiro`}
                  className="group relative h-40 sm:h-52 overflow-hidden cursor-pointer"
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(min-width: 1024px) 33vw, 50vw"
                  />
                </button>
              ))}
            </div>
          )}
        </Lightbox>
      </div>
    </section>
  );
}
