import Link from "next/link";

const subNavLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Materiais", href: "#materiais" },
  { label: "Contacto", href: "#contacto" },
];

// Secondary sticky nav that anchors within the Construção Civil hub, sits below the global site header
export default function ConstructionSubNav() {
  return (
    <div className="sticky top-20 z-40 bg-ink-2/95 backdrop-blur border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center gap-6 overflow-x-auto text-xs tracking-[0.15em] text-white/60 h-12">
        {subNavLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="shrink-0 hover:text-gold transition-colors"
          >
            {link.label.toUpperCase()}
          </Link>
        ))}
      </nav>
    </div>
  );
}
