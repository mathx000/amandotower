// Curated Pexels photos matched to each section's real theme (painting, drywall, carpentry, tiles, construction)
const img = (id: number, w = 1200, h = 800): string =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&h=${h}&fit=crop`;

export const images = {
  homeHero: img(8143668, 1600, 1100),
  homePintura: img(8092437, 700, 600),
  homePladur: img(8082551, 700, 600),
  homeCarpintaria: img(6790066, 700, 600),
  homeCeramicas: img(7045352, 700, 600),

  servicosHero: img(31737859, 1600, 1100),
  servicoPintura: img(6474135, 700, 600),
  servicoPladur: img(11427405, 700, 600),
  servicoCarpintaria: img(37162555, 700, 600),
  servicoCeramicas: img(6903205, 700, 600),
  servicoRemodelacao: img(7546323, 700, 600),
  servicoAcabamentos: img(36777559, 700, 600),

  pinturaHero: img(8092437, 1600, 1100),
  pinturaMain: img(6474135, 900, 700),
  pinturaSide1: img(34046207, 600, 500),
  pinturaSide2: img(31608472, 600, 500),
  pinturaGallery: [
    img(6474135, 500, 400),
    img(34046207, 500, 400),
    img(31608472, 500, 400),
    img(35419407, 500, 400),
    img(8146336, 500, 400),
    img(6615806, 500, 400),
  ],

  pladurHero: img(8082551, 1600, 1100),
  pladurMain: img(11427405, 900, 700),
  pladurSide1: img(6474313, 600, 500),
  pladurSide2: img(5493675, 600, 500),
  pladurGallery: [
    img(11427405, 500, 400),
    img(6474313, 500, 400),
    img(5493675, 500, 400),
    img(7166931, 500, 400),
    img(7195895, 500, 400),
    img(8089185, 500, 400),
  ],

  carpintariaHero: img(37162555, 1600, 1100),
  carpintariaMain: img(6790066, 900, 700),
  carpintariaSide1: img(30907890, 600, 500),
  carpintariaSide2: img(7109997, 600, 500),
  carpintariaGallery: [
    img(5974325, 500, 400),
    img(5974272, 500, 400),
    img(6232443, 500, 400),
    img(7109995, 500, 400),
    img(15209792, 500, 400),
    img(6580395, 500, 400),
    img(34574592, 500, 400),
  ],

  ceramicasHero: img(6903205, 1600, 1100),
  ceramicasMain: img(7045352, 900, 700),
  ceramicasSide1: img(8134780, 600, 500),
  ceramicasSide2: img(7214163, 600, 500),
  ceramicasGallery: [
    img(6899450, 500, 400),
    img(7018379, 500, 400),
    img(8135116, 500, 400),
    img(7587747, 500, 400),
    img(20771873, 500, 400),
  ],

  construcaoHero: img(34891691, 1600, 1100),
  construcaoMain: img(37627540, 900, 900),
  construcaoObra: [
    img(38210392, 500, 400),
    img(37627682, 500, 400),
    img(39151690, 500, 400),
    img(4642437, 500, 400),
  ],

  projetosHero: img(31737859, 1600, 1100),
  projetos: [
    { title: "Apartamento T3 – Lisboa", cat: "Remodelação Total", year: "2024", img: img(7546323, 700, 560) },
    { title: "Moradia S. João – Cascais", cat: "Cozinha", year: "2024", img: img(36777559, 700, 560) },
    { title: "Apartamento Páteo – Porto", cat: "Casa de Banho", year: "2024", img: img(12119354, 700, 560) },
    { title: "Moradia Belas Clube – Sintra", cat: "Exteriores", year: "2024", img: img(7031604, 700, 560) },
    { title: "Moradia Ílhavo – Aveiro", cat: "Interiores", year: "2024", img: img(27164969, 700, 560) },
    { title: "Apartamento Duplex – Oeiras", cat: "Remodelação Total", year: "2023", img: img(8082551, 700, 560) },
    { title: "Clínica Privada – Lisboa", cat: "Espaços Comerciais", year: "2023", img: img(33827309, 700, 560) },
    { title: "Moradia Ericeira – Ericeira", cat: "Casa de Banho", year: "2023", img: img(8134780, 700, 560) },
  ],

  contactosHero: img(7031412, 1600, 1100),
  contactosForm: img(245219, 900, 1100),
  contactosSide: img(7166632, 700, 900),

  sobreHero: img(8143668, 1600, 1100),
  sobreMain: img(5493654, 900, 900),
};
