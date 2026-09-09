import Image from "next/image";
import { images } from "@/lib/images";
import {
  IconClipboard,
  IconUsers,
  IconHome,
  IconStar,
} from "@/components/icons";

const stats = [
  { icon: <IconHome />, label: "Obras concluídas" },
  { icon: <IconClipboard />, label: "Anos de experiência" },
  { icon: <IconUsers />, label: "Equipas em obra" },
  { icon: <IconStar />, label: "Máquinas em operação" },
];

export default function ConstructionAbout() {
  return (
    <section id="sobre" className="py-20 bg-ink-2 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative h-72 lg:h-104 order-2 lg:order-1">
          <Image
            src={images.construcaoMain}
            alt="Obra de construção civil da Amando Tower"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
        <div className="order-1 lg:order-2">
          <p className="eyebrow text-xs text-gold tracking-[0.2em] mb-3">
            CONSTRUÇÃO CIVIL
          </p>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl mb-4 tracking-tight">
            Mais do que construir. Trabalhamos a obra bruta.
          </h2>
          <span className="block w-14 h-0.5 bg-gold mb-6" />
          <p className="text-white/70 leading-relaxed mb-10">
            A Amando Tower executa os trabalhos que dão corpo a qualquer
            projeto: escavação, terraplanagem, fundações e estruturas em betão
            armado, com máquinas próprias e materiais de obra como cimento,
            brita, areia, tijolo e ferro.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label}>
                <span className="text-gold mb-2 block">{s.icon}</span>
                <p className="font-sans font-extrabold text-2xl">—</p>
                <p className="text-xs text-white/50 tracking-wide mt-1">
                  {s.label.toUpperCase()}
                </p>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-white/40 mt-6 italic">
            * Valores a confirmar com a equipa Amando Tower.
          </p>
        </div>
      </div>
    </section>
  );
}
