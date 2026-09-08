import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import { getNewsBySlug, newsArticles } from "@/lib/news";
import { IconArrowRight, IconCalendar, IconLayers } from "@/components/icons";

export function generateStaticParams() {
  return newsArticles.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getNewsBySlug(slug);
  return {
    title: article ? `${article.title} | Amando Tower Remodelações` : "Notícia",
  };
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getNewsBySlug(slug);
  if (!article) notFound();

  const related = newsArticles
    .filter((n) => n.slug !== article.slug)
    .slice(0, 3);

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Início", href: "/" },
          { label: "Notícias", href: "/#noticias" },
          { label: article.title },
        ]}
        title={article.title}
        subtitle={article.excerpt}
        image={article.img}
      />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-6 mb-10 text-xs text-stone">
            <span className="flex items-center gap-2">
              <span className="text-gold">
                <IconCalendar className="w-4 h-4" />
              </span>
              {article.date}
            </span>
            <span className="flex items-center gap-2">
              <span className="text-gold">
                <IconLayers className="w-4 h-4" />
              </span>
              {article.category === "Setor"
                ? "Notícia do Setor"
                : "Amando Tower"}
            </span>
          </div>

          <div className="relative h-64 sm:h-96 mb-10">
            <Image
              src={article.img}
              alt={article.title}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 60vw, 90vw"
            />
          </div>

          <div className="space-y-5">
            {article.body.map((p, i) => (
              <p key={i} className="text-stone leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <div className="mt-14">
            <Link
              href="/#noticias"
              className="inline-flex items-center gap-2 text-sm tracking-wide text-gold-dark hover:text-gold transition-colors"
            >
              <span className="rotate-180 inline-flex">
                <IconArrowRight />
              </span>
              VER TODAS AS NOTÍCIAS
            </Link>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <p className="eyebrow text-xs text-gold-dark tracking-[0.2em] mb-8 text-center">
              LEIA TAMBÉM
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((n) => (
                <Link
                  key={n.slug}
                  href={`/noticias/${n.slug}`}
                  className="group block bg-white border border-black/5 hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-40">
                    <Image
                      src={n.img}
                      alt={n.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(min-width: 1024px) 33vw, 90vw"
                    />
                    <span className="absolute top-3 left-3 bg-gold text-ink text-[10px] tracking-wide px-2.5 py-1">
                      {n.category.toUpperCase()}
                    </span>
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-gold-dark tracking-wide mb-2">
                      {n.date.toUpperCase()}
                    </p>
                    <h3 className="text-sm leading-snug">{n.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBanner
        title="Tem um projeto em mente?"
        subtitle="Fale connosco e receba um orçamento gratuito e sem compromisso."
      />
    </>
  );
}
