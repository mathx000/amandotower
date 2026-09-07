import Link from "next/link";
import { services } from "@/lib/data";
import {
  IconFacebook,
  IconInstagram,
  IconLinkedin,
  IconCalendar,
  IconArrowRight,
} from "./icons";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <span className="flex items-center gap-3 mb-4">
            <svg
              viewBox="0 0 24 24"
              className="w-8 h-8 text-gold"
              fill="currentColor"
            >
              <path d="M12 2L22 20H2L12 2z" />
              <path d="M12 8L17.5 18h-11L12 8z" fill="#111111" />
            </svg>
            <span className="font-serif text-white text-base">
              AMANDO TOWER REMODELAÇÕES
            </span>
          </span>
          <p className="text-sm leading-relaxed">
            Excelência em cada detalhe.
            <br />
            Compromisso com a qualidade.
          </p>
        </div>

        <div>
          <h4 className="text-white text-sm tracking-[0.15em] mb-4">
            SERVIÇOS
          </h4>
          <ul className="space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  className="hover:text-gold transition-colors"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm tracking-[0.15em] mb-4">
            INFORMAÇÕES
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/sobre-nos"
                className="hover:text-gold transition-colors"
              >
                Sobre Nós
              </Link>
            </li>
            <li>
              <Link
                href="/projetos"
                className="hover:text-gold transition-colors"
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link
                href="/servicos/construcao-civil"
                className="hover:text-gold transition-colors"
              >
                Processo de Trabalho
              </Link>
            </li>
            <li>
              <Link
                href="/contactos"
                className="hover:text-gold transition-colors"
              >
                Perguntas Frequentes
              </Link>
            </li>
            <li>
              <Link
                href="/contactos"
                className="hover:text-gold transition-colors"
              >
                Política de Privacidade
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm tracking-[0.15em] mb-4">
            SIGA-NOS
          </h4>
          <div className="flex gap-3 mb-6">
            <a
              href="#"
              aria-label="Facebook"
              className="w-9 h-9 flex items-center justify-center border border-white/15 rounded-full hover:border-gold hover:text-gold transition-colors"
            >
              <IconFacebook />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="w-9 h-9 flex items-center justify-center border border-white/15 rounded-full hover:border-gold hover:text-gold transition-colors"
            >
              <IconInstagram />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="w-9 h-9 flex items-center justify-center border border-white/15 rounded-full hover:border-gold hover:text-gold transition-colors"
            >
              <IconLinkedin />
            </a>
          </div>

          <div className="border border-white/15 p-4 flex items-start gap-3">
            <span className="text-gold mt-0.5">
              <IconCalendar />
            </span>
            <div>
              <p className="text-white text-sm mb-1">
                Agende uma visita técnica
              </p>
              <p className="text-xs mb-2">
                Avaliamos o seu espaço e aconselhamos a melhor solução para si.
              </p>
              <Link
                href="/contactos"
                className="inline-flex items-center gap-1 text-gold text-xs tracking-wide hover:gap-2 transition-all"
              >
                AGENDAR VISITA <IconArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row justify-between gap-2 text-xs text-white/50">
          <p>© 2026 Amando Tower Remodelações. Todos os direitos reservados.</p>
          <p>
            Desenvolvido com <span className="text-gold">♥</span> em Portugal
          </p>
        </div>
      </div>
    </footer>
  );
}
