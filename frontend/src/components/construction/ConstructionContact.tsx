"use client";

import { useState, type FormEvent } from "react";
import { submitContact } from "@/lib/api";
import type { ContactPayload } from "@/lib/types";
import {
  IconMapPin,
  IconPhone,
  IconMail,
  IconClock,
  IconWhatsapp,
} from "@/components/icons";

export default function ConstructionContact() {
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
      service: String(data.get("projectType") ?? ""),
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
    <section id="contacto" className="py-20 bg-cream-2">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[0.8fr_1.2fr] gap-14">
        <div>
          <p className="eyebrow text-xs text-gold-dark tracking-[0.2em] mb-3">
            CONTACTO
          </p>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl mb-4 tracking-tight">
            Vamos falar sobre o seu projeto?
          </h2>
          <span className="block w-14 h-0.5 bg-gold mb-8" />

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
                <p className="text-sm text-stone">+351 912 345 678</p>
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
            <IconWhatsapp className="text-gold" />
            <span className="text-sm">Envie-nos uma mensagem</span>
          </a>
        </div>

        <div>
          {sent ? (
            <div className="border border-gold/40 bg-white p-6 text-sm">
              Obrigado pelo seu pedido! A nossa equipa irá entrar em contacto em
              breve.
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
                    Localização do projeto *
                  </label>
                  <input
                    required
                    name="location"
                    type="text"
                    placeholder="Ex: Porto"
                    className="w-full border border-black/10 bg-white px-4 py-2.5 text-sm focus:outline-none focus:border-gold"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-stone mb-1.5">
                  Tipo de projeto *
                </label>
                <select
                  required
                  name="projectType"
                  defaultValue=""
                  className="w-full border border-black/10 bg-white px-4 py-2.5 text-sm focus:outline-none focus:border-gold"
                >
                  <option value="" disabled>
                    Selecione o tipo de projeto
                  </option>
                  <option>Construção</option>
                  <option>Reabilitação</option>
                  <option>Remodelação</option>
                  <option>Materiais</option>
                  <option>Outro</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-stone mb-1.5">
                  Mensagem *
                </label>
                <textarea
                  required
                  name="message"
                  rows={4}
                  placeholder="Conte-nos mais sobre o seu projeto..."
                  className="w-full border border-black/10 bg-white px-4 py-2.5 text-sm focus:outline-none focus:border-gold resize-none"
                />
              </div>

              {error && <p className="text-sm text-red-600">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 bg-gold text-ink text-sm font-semibold tracking-wide px-6 py-3.5 hover:bg-gold-dark transition-colors disabled:opacity-60 cursor-pointer"
              >
                {loading ? "A ENVIAR..." : "SOLICITAR ORÇAMENTO"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
