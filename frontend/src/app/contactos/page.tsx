"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { images } from "@/lib/images";
import { submitContact } from "@/lib/api";
import type { ContactPayload } from "@/lib/types";
import {
  IconMapPin,
  IconPhone,
  IconMail,
  IconClock,
  IconWhatsapp,
  IconPaperclip,
  IconArrowRight,
  IconShield,
  IconCalendar,
  IconUsers,
  IconStar,
} from "@/components/icons";

const badges = [
  {
    icon: <IconShield />,
    title: "Orçamento Gratuito",
    text: "Sem compromisso e sem custos adicionais.",
  },
  {
    icon: <IconClock />,
    title: "Resposta Rápida",
    text: "Entramos em contacto no prazo de 24h.",
  },
  {
    icon: <IconUsers />,
    title: "Equipa Especializada",
    text: "Profissionais experientes e dedicados.",
  },
  {
    icon: <IconStar />,
    title: "Qualidade Garantida",
    text: "Acabamentos de excelência em todos os projetos.",
  },
];

export default function ContactosPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const data = new FormData(e.currentTarget);
    const payload: ContactPayload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      location: String(data.get("location") ?? ""),
      service: String(data.get("service") ?? ""),
      message: String(data.get("message") ?? ""),
    };
    setLoading(true);
    try {
      await submitContact(payload);
      setSent(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Não foi possível enviar o pedido.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Início", href: "/" }, { label: "Contactos" }]}
        title="Fale connosco. Estamos prontos para o seu próximo projeto."
        subtitle="Conte-nos o que tem em mente. A nossa equipa irá analisar o seu pedido e responder o mais brevemente possível."
        image={images.contactosHero}
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[0.9fr_1.3fr_0.9fr] gap-10">
          <div>
            <p className="eyebrow text-xs text-gold-dark tracking-[0.2em] mb-4">
              INFORMAÇÕES DE CONTACTO
            </p>
            <ul className="space-y-6">
              <li className="flex gap-3">
                <span className="text-gold shrink-0 mt-0.5">
                  <IconMapPin />
                </span>
                <div>
                  <p className="text-sm">Morada</p>
                  <p className="text-sm text-stone">
                    Rua das Acácias, n.º 123
                    <br />
                    4100-012 Porto, Portugal
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-gold shrink-0 mt-0.5">
                  <IconPhone />
                </span>
                <div>
                  <p className="text-sm">Telefone</p>
                  <p className="text-sm text-stone">
                    +351 912 345 678
                    <br />
                    (Chamada para a rede móvel nacional)
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-gold shrink-0 mt-0.5">
                  <IconMail />
                </span>
                <div>
                  <p className="text-sm">Email</p>
                  <p className="text-sm text-stone">
                    geral@amandotower-remodelacoes.pt
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-gold shrink-0 mt-0.5">
                  <IconClock />
                </span>
                <div>
                  <p className="text-sm">Horário</p>
                  <p className="text-sm text-stone">
                    Segunda a Sexta: 08h00 – 18h00
                    <br />
                    Sábado: 09h00 – 13h00
                  </p>
                </div>
              </li>
            </ul>
            <a
              href="https://wa.me/351912345678"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex items-center gap-3 bg-ink text-white px-5 py-4 hover:bg-ink-2 transition-colors"
            >
              <IconWhatsapp className="w-5 h-5 text-gold" />
              <span className="text-sm">Envie-nos uma mensagem</span>
            </a>
          </div>

          <div>
            <p className="eyebrow text-xs text-gold-dark tracking-[0.2em] mb-2">
              SOLICITE UM ORÇAMENTO
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl mb-6">
              Preencha o formulário e conte-nos o que precisa.
            </h2>

            {sent ? (
              <div className="border border-gold/40 bg-cream-2 p-6 text-sm">
                Obrigado pelo seu pedido! A nossa equipa irá entrar em contacto
                em breve.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-stone mb-1.5">
                      Nome completo *
                    </label>
                    <input
                      required
                      name="name"
                      type="text"
                      placeholder="Ex: João Silva"
                      className="w-full border border-black/10 bg-white px-4 py-2.5 text-sm focus:outline-none focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-stone mb-1.5">
                      Email *
                    </label>
                    <input
                      required
                      name="email"
                      type="email"
                      placeholder="Ex: exemplo@email.pt"
                      className="w-full border border-black/10 bg-white px-4 py-2.5 text-sm focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-stone mb-1.5">
                      Telefone *
                    </label>
                    <input
                      required
                      name="phone"
                      type="tel"
                      placeholder="Ex: 912 345 678"
                      className="w-full border border-black/10 bg-white px-4 py-2.5 text-sm focus:outline-none focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-stone mb-1.5">
                      Localização da obra *
                    </label>
                    <select
                      required
                      name="location"
                      defaultValue=""
                      className="w-full border border-black/10 bg-white px-4 py-2.5 text-sm focus:outline-none focus:border-gold"
                    >
                      <option value="" disabled>
                        Ex: Porto
                      </option>
                      <option>Porto</option>
                      <option>Lisboa</option>
                      <option>Braga</option>
                      <option>Aveiro</option>
                      <option>Outra</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-stone mb-1.5">
                    Tipo de serviço pretendido *
                  </label>
                  <select
                    required
                    name="service"
                    defaultValue=""
                    className="w-full border border-black/10 bg-white px-4 py-2.5 text-sm focus:outline-none focus:border-gold"
                  >
                    <option value="" disabled>
                      Selecione o serviço
                    </option>
                    <option>Pintura</option>
                    <option>Pladur</option>
                    <option>Carpintaria</option>
                    <option>Cerâmicas e Revestimentos</option>
                    <option>Construção Civil</option>
                    <option>Remodelação Integral</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-stone mb-1.5">
                    Descreva o seu projeto ou necessidade *
                  </label>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    placeholder="Conte-nos o máximo de detalhes possível sobre o seu projeto..."
                    className="w-full border border-black/10 bg-white px-4 py-2.5 text-sm focus:outline-none focus:border-gold"
                  />
                </div>
                <div className="flex items-center justify-between border border-black/10 px-4 py-3">
                  <span className="flex items-center gap-2 text-xs text-stone">
                    <IconPaperclip className="w-4 h-4" />
                    Anexar ficheiros (opcional)
                  </span>
                  <label className="text-xs text-gold-dark border border-gold px-3 py-1.5 cursor-pointer hover:bg-gold hover:text-ink transition-colors">
                    ESCOLHER FICHEIRO
                    <input type="file" className="hidden" />
                  </label>
                </div>
                <label className="flex items-start gap-2 text-xs text-stone">
                  <input required type="checkbox" className="mt-0.5" />
                  Aceito a política de privacidade e autorizo o tratamento dos
                  meus dados para efeitos de contacto e resposta ao meu pedido
                </label>
                {error && <p className="text-xs text-red-600">{error}</p>}
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 bg-gold text-ink text-sm tracking-wide px-6 py-3.5 hover:bg-gold-dark transition-colors disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed"
                >
                  {loading ? "A ENVIAR..." : "ENVIAR PEDIDO DE ORÇAMENTO"}{" "}
                  <IconArrowRight />
                </button>
              </form>
            )}
          </div>

          <div className="relative hidden lg:block min-h-105">
            <Image
              src={images.contactosSide}
              alt=""
              fill
              className="object-cover"
              sizes="30vw"
            />
            <div className="absolute inset-0 bg-ink/40 flex items-end p-6">
              <p className="font-serif text-white text-xl leading-snug">
                Transformamos ideias em espaços extraordinários.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 bg-cream-2 p-8">
          {badges.map((b) => (
            <div key={b.title} className="flex items-start gap-3">
              <span className="text-gold shrink-0">{b.icon}</span>
              <div>
                <h3 className="text-sm tracking-wide mb-1">
                  {b.title.toUpperCase()}
                </h3>
                <p className="text-xs text-stone leading-relaxed">{b.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
