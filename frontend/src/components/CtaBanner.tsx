import Link from "next/link";
import { IconClipboard, IconArrowRight, IconPhone } from "./icons";

type CtaBannerProps = {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  href?: string;
  icon?: "clipboard" | "phone";
};

export default function CtaBanner({
  title = "Tem um projeto em mente?",
  subtitle = "Fale connosco e receba um orçamento personalizado e sem compromisso.",
  buttonText = "PEDIR ORÇAMENTO",
  href = "/contactos",
  icon = "clipboard",
}: CtaBannerProps) {
  return (
    <section className="bg-ink">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4 text-center sm:text-left">
          <span className="hidden sm:flex w-11 h-11 items-center justify-center rounded-full bg-white/10 text-gold shrink-0">
            {icon === "phone" ? <IconPhone /> : <IconClipboard />}
          </span>
          <div>
            <p className="text-white font-serif text-lg">{title}</p>
            <p className="text-white/60 text-sm">{subtitle}</p>
          </div>
        </div>
        <Link
          href={href}
          className="inline-flex items-center gap-2 bg-gold text-ink text-sm tracking-wide px-6 py-3 hover:bg-gold-dark transition-colors shrink-0"
        >
          {buttonText} <IconArrowRight />
        </Link>
      </div>
    </section>
  );
}
