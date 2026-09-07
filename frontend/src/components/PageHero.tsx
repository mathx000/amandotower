import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";

type Breadcrumb = { label: string; href?: string };

type PageHeroProps = {
  breadcrumbs?: Breadcrumb[];
  title: string;
  subtitle?: string;
  image: string;
  children?: ReactNode;
};

export default function PageHero({
  breadcrumbs = [],
  title,
  subtitle,
  image,
  children,
}: PageHeroProps) {
  return (
    <section className="relative bg-ink text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          priority
          className="object-cover opacity-45"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/80 to-ink/30" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-14 pb-20 lg:pt-16 lg:pb-28">
        <div className="flex items-center gap-2 text-xs tracking-wide text-white/60 mb-6">
          {breadcrumbs.map((b, i) => (
            <span key={b.href || b.label} className="flex items-center gap-2">
              {i > 0 && <span>/</span>}
              {b.href ? (
                <Link
                  href={b.href}
                  className="hover:text-gold transition-colors"
                >
                  {b.label.toUpperCase()}
                </Link>
              ) : (
                <span
                  className={i === breadcrumbs.length - 1 ? "text-gold" : ""}
                >
                  {b.label.toUpperCase()}
                </span>
              )}
            </span>
          ))}
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl max-w-2xl leading-tight">
          {title}
        </h1>
        <span className="block w-16 h-0.5 bg-gold my-6" />
        {subtitle && (
          <p className="max-w-xl text-white/70 text-base sm:text-lg leading-relaxed">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
