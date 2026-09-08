// Rich project detail content used by the projects list and individual project pages
const img = (id: number, w = 1200, h = 800): string =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&h=${h}&fit=crop`;

export type ProjectDetail = {
  slug: string;
  title: string;
  cat: string;
  year: string;
  location: string;
  img: string;
  description: string;
  material: string;
  tecnica: string;
  gallery: string[];
};

export function slugify(title: string): string {
  return title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const projectsDetail: ProjectDetail[] = [
  {
    slug: "apartamento-t3-lisboa",
    title: "Apartamento T3 – Lisboa",
    cat: "Remodelação Total",
    year: "2024",
    location: "Lisboa",
    img: img(7546323, 700, 560),
    description:
      "Remodelação integral de um apartamento T3 no centro de Lisboa, unindo sala, cozinha e zona de refeições num conceito aberto e luminoso. O projeto envolveu todas as especialidades, da pintura à carpintaria, garantindo um resultado coerente do início ao fim.",
    material: "Tintas premium, placas de pladur, revestimentos cerâmicos e mobiliário lacado por medida.",
    tecnica: "Coordenação integral de pintura, pladur, carpintaria e revestimentos, com planeamento elétrico e de iluminação renovado.",
    gallery: [
      img(7546323, 700, 560),
      img(27164969, 700, 560),
      img(8082551, 700, 560),
      img(7195895, 700, 560),
    ],
  },
  {
    slug: "moradia-s-joao-cascais",
    title: "Moradia S. João – Cascais",
    cat: "Cozinha",
    year: "2024",
    location: "Cascais",
    img: img(36777559, 700, 560),
    description:
      "Reconversão total da cozinha desta moradia em Cascais, com ilha central em mármore, iluminação embutida e armários lacados até ao teto, criando um espaço funcional e elegante para o dia a dia da família.",
    material: "Bancada em mármore natural, armários em madeira lacada e eletrodomésticos encastrados de gama alta.",
    tecnica: "Desenho de cozinha à medida com ilha central, iluminação LED integrada e canalizações e redes elétricas totalmente renovadas.",
    gallery: [
      img(36777559, 700, 560),
      img(35189709, 700, 560),
      img(6538939, 700, 560),
      img(7005291, 700, 560),
    ],
  },
  {
    slug: "apartamento-pateo-porto",
    title: "Apartamento Páteo – Porto",
    cat: "Casa de Banho",
    year: "2024",
    location: "Porto",
    img: img(12119354, 700, 560),
    description:
      "Casa de banho totalmente reformulada com duche walk-in, revestimento cerâmico de grande formato e móvel suspenso, resultando num ambiente spa moderno e de fácil manutenção.",
    material: "Cerâmica de grande formato, mármore e torneiras em latão escovado.",
    tecnica: "Impermeabilização técnica completa, aplicação de revestimento de grande formato com juntas mínimas e duche walk-in embutido.",
    gallery: [
      img(12119354, 700, 560),
      img(7214163, 700, 560),
      img(8134780, 700, 560),
      img(6899450, 700, 560),
    ],
  },
  {
    slug: "moradia-belas-clube-sintra",
    title: "Moradia Belas Clube – Sintra",
    cat: "Exteriores",
    year: "2024",
    location: "Sintra",
    img: img(7031604, 700, 560),
    description:
      "Requalificação exterior de moradia em Sintra: fachada renovada, terraço impermeabilizado e jardim reorganizado, criando espaços exteriores de convívio alinhados com o estilo contemporâneo da casa.",
    material: "Pedra natural, caixilharia de alumínio de corte térmico e deck exterior em madeira composta.",
    tecnica: "Isolamento térmico pelo exterior (ETICS) e impermeabilização de terraços e varandas.",
    gallery: [
      img(7031604, 700, 560),
      img(39011061, 700, 560),
      img(7061676, 700, 560),
      img(26595553, 700, 560),
    ],
  },
  {
    slug: "moradia-ilhavo-aveiro",
    title: "Moradia Ílhavo – Aveiro",
    cat: "Interiores",
    year: "2024",
    location: "Aveiro",
    img: img(27164969, 700, 560),
    description:
      "Renovação completa dos interiores desta moradia em Aveiro, com pavimento em madeira, painéis de carpintaria decorativos e paleta de cores neutras que valorizam a luz natural da casa.",
    material: "Pavimento em madeira maciça, pintura acetinada e painéis de carpintaria em MDF lacado.",
    tecnica: "Design de interiores integrado com iluminação indireta, roupeiros por medida e acabamentos uniformizados em todas as divisões.",
    gallery: [
      img(27164969, 700, 560),
      img(7166931, 700, 560),
      img(7195895, 700, 560),
      img(30211378, 700, 560),
    ],
  },
  {
    slug: "apartamento-duplex-oeiras",
    title: "Apartamento Duplex – Oeiras",
    cat: "Remodelação Total",
    year: "2023",
    location: "Oeiras",
    img: img(8082551, 700, 560),
    description:
      "Remodelação total de duplex em Oeiras, com fusão da cozinha e sala num conceito open-space, novos tetos falsos em pladur e esquema de pintura em tons neutros que unifica os dois pisos.",
    material: "Placas de pladur com isolamento acústico, pintura premium e revestimentos cerâmicos de grande formato.",
    tecnica: "Demolição parcial de paredes não estruturais, criação de open-space e instalação de tetos técnicos em pladur.",
    gallery: [
      img(8082551, 700, 560),
      img(7546323, 700, 560),
      img(8089185, 700, 560),
      img(7195873, 700, 560),
    ],
  },
  {
    slug: "clinica-privada-lisboa",
    title: "Clínica Privada – Lisboa",
    cat: "Espaços Comerciais",
    year: "2023",
    location: "Lisboa",
    img: img(33827309, 700, 560),
    description:
      "Adaptação de espaço comercial em Lisboa para uma clínica privada, com compartimentação técnica, isolamento acústico entre gabinetes e acabamentos que transmitem confiança e profissionalismo.",
    material: "Painéis acústicos, placas de pladur técnico e revestimentos vinílicos de uso hospitalar.",
    tecnica: "Compartimentação com isolamento acústico reforçado, circuitos elétricos dedicados por gabinete e sinalética integrada.",
    gallery: [
      img(33827309, 700, 560),
      img(32334283, 700, 560),
      img(35203647, 700, 560),
      img(34549315, 700, 560),
    ],
  },
  {
    slug: "moradia-ericeira-ericeira",
    title: "Moradia Ericeira – Ericeira",
    cat: "Casa de Banho",
    year: "2023",
    location: "Ericeira",
    img: img(8134780, 700, 560),
    description:
      "Casa de banho principal remodelada com duplo lavatório, revestimento em tons escuros e mobiliário suspenso, criando um ambiente sofisticado com vista para o exterior.",
    material: "Cerâmica premium em grande formato, mármore natural e mobiliário suspenso lacado.",
    tecnica: "Revestimento cerâmico com juntas mínimas, iluminação embutida e sistema de ventilação forçada.",
    gallery: [
      img(8134780, 700, 560),
      img(6899450, 700, 560),
      img(7018379, 700, 560),
      img(8135116, 700, 560),
    ],
  },
];

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return projectsDetail.find((p) => p.slug === slug);
}
