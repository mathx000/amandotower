import { Playfair_Display, Inter } from "next/font/google";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Amando Tower Remodelações | Remodelações e Construção Civil",
  description:
    "Especialistas em remodelações de interiores e construção civil, com foco em acabamentos de excelência. Peça o seu orçamento sem compromisso.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="pt-PT"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink font-sans">
        <Header />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
