// Curated Pexels photos matched to each section's real theme (painting, drywall, carpentry, tiles, construction)
const img = (
  id: number,
  w = 1200,
  h = 800,
  format: "jpeg" | "png" = "jpeg",
): string =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.${format}?auto=compress&cs=tinysrgb&w=${w}&h=${h}&fit=crop`;

export const images = {
  homeHero: img(8143671, 1600, 1100),
  homePintura: img(8092437, 700, 600),
  homePladur: img(8082551, 700, 600),
  homeCarpintaria: img(6790066, 700, 600),
  homeCeramicas: img(7045352, 700, 600),

  servicoPintura: img(6474135, 700, 600),
  servicoPladur: img(11427405, 700, 600),
  servicoCarpintaria: img(37162555, 700, 600),
  servicoCeramicas: img(6903205, 700, 600),
  servicoRemodelacao: img(7546323, 700, 600),
  servicoAcabamentos: img(36777559, 700, 600),

  jardinagemHero: img(29137614, 1600, 1100),
  jardinagemMain: img(33162373, 900, 700),
  jardinagemSide1: img(8143668, 600, 500),
  jardinagemSide2: img(29137614, 600, 500),
  jardinagemGallery: [
    img(33162373, 500, 400),
    img(8143668, 500, 400),
    img(29137614, 500, 400),
  ],

  pinturaHero: img(33529507, 1600, 1100),
  pinturaMain: img(36121750, 900, 700),
  pinturaSide1: img(31213888, 600, 500),
  pinturaSide2: img(37653245, 600, 500),
  pinturaGallery: [
    img(8092431, 500, 400),
    img(6957083, 500, 400),
    img(8092437, 500, 400),
    img(2029685, 500, 400),
    img(28678990, 500, 400),
    img(7166933, 500, 400),
  ],

  pladurHero: img(23916869, 1600, 1100, "png"),
  pladurMain: img(20418771, 900, 700),
  pladurSide1: img(19840855, 600, 500),
  pladurSide2: img(31564207, 600, 500),
  pladurGallery: [
    img(34277709, 500, 400),
    img(13573493, 500, 400),
    img(6283965, 500, 400),
    img(7166931, 500, 400),
    img(7195895, 500, 400),
    img(8089185, 500, 400),
  ],

  carpintariaHero: img(28256945, 1600, 1100),
  carpintariaMain: img(9720711, 900, 700),
  carpintariaSide1: img(6580395, 600, 500),
  carpintariaSide2: img(35021550, 600, 500),
  carpintariaGallery: [
    img(6207951, 500, 400),
    img(16501692, 500, 400),
    img(7166636, 500, 400),
    img(207909, 500, 400),
    img(37797447, 500, 400, "png"),
    img(14975208, 500, 400),
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

  construcaoHero: img(28678990, 1600, 1100),
  construcaoMain: img(7108783, 900, 900),
  construcaoObra: [
    img(36797579, 500, 400),
    img(14546924, 500, 400),
    img(29404039, 500, 400),
    img(7108784, 500, 400),
  ],

  contactosHero: img(7031412, 1600, 1100),
  contactosForm: img(245219, 900, 1100),
  contactosSide: img(7166632, 700, 900),

  sobreHero: img(8143668, 1600, 1100),
  sobreMain: img(5493654, 900, 900),
};
