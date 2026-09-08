"use client";

import Image from "next/image";
import Lightbox from "./Lightbox";

type Props = { main: string; obra: string[] };

// Main hero-style photo of the construction service, sharing one lightbox set with the "obra" gallery below
export function ConstrucaoMainPhoto({ main, obra }: Props) {
  const all = [main, ...obra];
  return (
    <Lightbox images={all}>
      {(open) => (
        <button
          type="button"
          onClick={() => open(0)}
          className="group relative w-full h-full overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
        >
          <Image
            src={main}
            alt=""
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(min-width: 1024px) 40vw, 90vw"
          />
        </button>
      )}
    </Lightbox>
  );
}

export function ConstrucaoObraGallery({ main, obra }: Props) {
  const all = [main, ...obra];
  return (
    <Lightbox images={all}>
      {(open) =>
        obra.map((src, i) => (
          <button
            type="button"
            key={i}
            onClick={() => open(1 + i)}
            className="group relative h-36 sm:h-44 overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
          >
            <Image
              src={src}
              alt=""
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="25vw"
            />
          </button>
        ))
      }
    </Lightbox>
  );
}
