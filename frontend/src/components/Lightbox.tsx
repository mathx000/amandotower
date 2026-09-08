"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { IconArrowRight, IconClose } from "./icons";

type LightboxProps = {
  images: string[];
  alt?: string;
  children: (open: (index: number) => void) => ReactNode;
};

// Shared fullscreen viewer: click a thumbnail to enlarge, then arrow-navigate or swipe through the same set
export default function Lightbox({
  images,
  alt = "",
  children,
}: LightboxProps) {
  const [index, setIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const close = () => setIndex(null);
  const prev = () =>
    setIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length));
  const next = () =>
    setIndex((i) => (i === null ? i : (i + 1) % images.length));

  useEffect(() => {
    if (index === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index]);

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }
  function onTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 50) prev();
    else if (delta < -50) next();
    touchStartX.current = null;
  }

  return (
    <>
      {children((i) => setIndex(i))}

      {index !== null && (
        <div
          className="fixed inset-0 z-100 bg-ink/95 flex items-center justify-center"
          onClick={close}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <button
            aria-label="Fechar"
            onClick={close}
            className="absolute top-5 right-5 text-white/80 hover:text-gold transition-colors cursor-pointer"
          >
            <IconClose className="w-7 h-7" />
          </button>

          <span className="absolute top-5 left-5 text-white/60 text-xs tracking-wide">
            {index + 1} / {images.length}
          </span>

          {images.length > 1 && (
            <button
              aria-label="Imagem anterior"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-2 sm:left-6 text-white/80 hover:text-gold transition-colors p-2 cursor-pointer"
            >
              <span className="rotate-180 inline-flex">
                <IconArrowRight className="w-6 h-6 sm:w-8 sm:h-8" />
              </span>
            </button>
          )}

          <div
            className="relative w-[90vw] h-[75vh] sm:w-[80vw] sm:h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[index]}
              alt={alt}
              fill
              className="object-contain select-none"
              sizes="90vw"
              priority
            />
          </div>

          {images.length > 1 && (
            <button
              aria-label="Próxima imagem"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-2 sm:right-6 text-white/80 hover:text-gold transition-colors p-2 cursor-pointer"
            >
              <IconArrowRight className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
          )}
        </div>
      )}
    </>
  );
}
