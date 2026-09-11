"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navLinks, services } from "@/lib/data";
import { IconChevronDown, IconMenu, IconClose } from "./icons";
import logo from "@/img/logo/logo2.png";

export default function Header() {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-ink/95 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={logo}
            alt="Amado Tower"
            className="w-16 h-16 object-contain"
            priority
          />
          <span className="leading-tight">
            <span className="block font-serif text-lg tracking-wide text-white">
              AMADO TOWER
            </span>
            <span className="block text-[10px] tracking-[0.3em] text-gold -mt-1">
              CONSTRUÇÃO
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm tracking-wide">
          {navLinks.map((link) =>
            link.name === "Serviços" ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 py-2 transition-colors cursor-pointer ${
                    isActive(link.href)
                      ? "text-gold"
                      : "text-white hover:text-gold"
                  }`}
                >
                  {link.name.toUpperCase()}
                  <IconChevronDown />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-64">
                    <div className="bg-ink-2 border border-white/10 shadow-xl py-2">
                      {services.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="block px-5 py-2.5 text-sm text-white/90 hover:text-gold hover:bg-white/5"
                        >
                          {s.name}
                        </Link>
                      ))}
                      <Link
                        href="/construcao-civil"
                        className="block px-5 py-2.5 text-sm text-gold border-t border-white/10 mt-1"
                      >
                        Área Construção Civil
                      </Link>
                      <Link
                        href="/servicos"
                        className="block px-5 py-2.5 text-sm text-gold border-t border-white/10 mt-1 pt-2.5"
                      >
                        Ver todos os serviços
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`py-2 transition-colors ${
                  isActive(link.href)
                    ? "text-gold"
                    : "text-white hover:text-gold"
                }`}
              >
                {link.name.toUpperCase()}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contactos"
            className="inline-flex items-center gap-2 border border-gold text-gold text-sm tracking-wide px-5 py-2.5 hover:bg-gold hover:text-ink transition-colors"
          >
            PEDIR ORÇAMENTO
          </Link>
        </div>

        <button
          className="lg:hidden text-white cursor-pointer"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          {mobileOpen ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden absolute inset-x-0 top-20 h-[calc(100vh-5rem)] bg-ink-2 border-t border-white/10 px-6 py-4 overflow-y-auto">
          <nav className="flex flex-col gap-1 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-2.5 text-white hover:text-gold border-b border-white/5"
              >
                {link.name.toUpperCase()}
              </Link>
            ))}
            <div className="pl-3 flex flex-col">
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-2 text-white/70 hover:text-gold text-xs tracking-wide"
                >
                  — {s.name}
                </Link>
              ))}
            </div>
            <Link
              href="/construcao-civil"
              onClick={() => setMobileOpen(false)}
              className="py-2 pl-3 text-gold text-xs tracking-wide"
            >
              — Área Construção Civil
            </Link>
            <Link
              href="/contactos"
              onClick={() => setMobileOpen(false)}
              className="mt-3 inline-flex justify-center border border-gold text-gold px-5 py-2.5 text-sm tracking-wide"
            >
              PEDIR ORÇAMENTO
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
