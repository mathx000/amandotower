// Consistent placeholder imagery (seeded so each slot always returns the same photo)
const img = (seed: string, w = 1200, h = 800): string =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const images = {
  homeHero: img("atelier-home-hero", 1600, 1100),
  homePintura: img("atelier-home-pintura", 700, 600),
  homePladur: img("atelier-home-pladur", 700, 600),
  homeCarpintaria: img("atelier-home-carpintaria", 700, 600),
  homeCeramicas: img("atelier-home-ceramicas", 700, 600),

  servicosHero: img("atelier-servicos-hero", 1600, 1100),
  servicoPintura: img("atelier-servico-pintura", 700, 600),
  servicoPladur: img("atelier-servico-pladur", 700, 600),
  servicoCarpintaria: img("atelier-servico-carpintaria", 700, 600),
  servicoCeramicas: img("atelier-servico-ceramicas", 700, 600),
  servicoRemodelacao: img("atelier-servico-remodelacao", 700, 600),
  servicoAcabamentos: img("atelier-servico-acabamentos", 700, 600),

  pinturaHero: img("atelier-pintura-hero", 1600, 1100),
  pinturaMain: img("atelier-pintura-main", 900, 700),
  pinturaSide1: img("atelier-pintura-side1", 600, 500),
  pinturaSide2: img("atelier-pintura-side2", 600, 500),

  pladurHero: img("atelier-pladur-hero", 1600, 1100),
  pladurMain: img("atelier-pladur-main", 900, 700),
  pladurSide1: img("atelier-pladur-side1", 600, 500),
  pladurSide2: img("atelier-pladur-side2", 600, 500),

  carpintariaHero: img("atelier-carpintaria-hero", 1600, 1100),
  carpintariaMain: img("atelier-carpintaria-main", 900, 700),
  carpintariaSide1: img("atelier-carpintaria-side1", 600, 500),
  carpintariaSide2: img("atelier-carpintaria-side2", 600, 500),
  carpintariaGallery: [
    img("atelier-carp-g1", 500, 400),
    img("atelier-carp-g2", 500, 400),
    img("atelier-carp-g3", 500, 400),
    img("atelier-carp-g4", 500, 400),
    img("atelier-carp-g5", 500, 400),
  ],

  ceramicasHero: img("atelier-ceramicas-hero", 1600, 1100),
  ceramicasMain: img("atelier-ceramicas-main", 900, 700),
  ceramicasSide1: img("atelier-ceramicas-side1", 600, 500),
  ceramicasSide2: img("atelier-ceramicas-side2", 600, 500),
  ceramicasGallery: [
    img("atelier-cer-g1", 500, 400),
    img("atelier-cer-g2", 500, 400),
    img("atelier-cer-g3", 500, 400),
    img("atelier-cer-g4", 500, 400),
    img("atelier-cer-g5", 500, 400),
  ],

  construcaoHero: img("atelier-construcao-hero", 1600, 1100),
  construcaoMain: img("atelier-construcao-main", 900, 900),
  construcaoObra: [
    img("atelier-obra-1", 500, 400),
    img("atelier-obra-2", 500, 400),
    img("atelier-obra-3", 500, 400),
    img("atelier-obra-4", 500, 400),
  ],

  projetosHero: img("atelier-projetos-hero", 1600, 1100),
  projetos: [
    { title: "Apartamento T3 – Lisboa", cat: "Remodelação Total", year: "2024", img: img("atelier-proj-1", 700, 560) },
    { title: "Moradia S. João – Cascais", cat: "Cozinha", year: "2024", img: img("atelier-proj-2", 700, 560) },
    { title: "Apartamento Páteo – Porto", cat: "Casa de Banho", year: "2024", img: img("atelier-proj-3", 700, 560) },
    { title: "Moradia Belas Clube – Sintra", cat: "Exteriores", year: "2024", img: img("atelier-proj-4", 700, 560) },
    { title: "Moradia Ílhavo – Aveiro", cat: "Interiores", year: "2024", img: img("atelier-proj-5", 700, 560) },
    { title: "Apartamento Duplex – Oeiras", cat: "Remodelação Total", year: "2023", img: img("atelier-proj-6", 700, 560) },
    { title: "Clínica Privada – Lisboa", cat: "Espaços Comerciais", year: "2023", img: img("atelier-proj-7", 700, 560) },
    { title: "Moradia Ericeira – Ericeira", cat: "Casa de Banho", year: "2023", img: img("atelier-proj-8", 700, 560) },
  ],

  contactosHero: img("atelier-contactos-hero", 1600, 1100),
  contactosForm: img("atelier-contactos-form", 900, 1100),
  contactosSide: img("atelier-contactos-side", 700, 900),

  sobreHero: img("atelier-sobre-hero", 1600, 1100),
  sobreMain: img("atelier-sobre-main", 900, 900),
};
