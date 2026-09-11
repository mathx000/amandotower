// Rich news article content used by the homepage news cards and individual article pages
const img = (id: number, w = 1200, h = 800): string =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&h=${h}&fit=crop`;

export type NewsArticle = {
  slug: string;
  date: string;
  category: "Amado Tower" | "Setor";
  title: string;
  excerpt: string;
  img: string;
  body: string[];
};

export const newsArticles: NewsArticle[] = [
  {
    slug: "tendencias-remodelacao-2026",
    date: "Agosto 2026",
    category: "Amado Tower",
    title: "Tendências de remodelação para 2026",
    excerpt:
      "Tons neutros, materiais naturais e iluminação integrada dominam os projetos que temos vindo a desenvolver este ano.",
    img: img(7546323, 1600, 1000),
    body: [
      "Ao longo dos últimos meses, a equipa da Amado Tower tem acompanhado de perto uma mudança clara nas preferências dos clientes portugueses: menos ornamentação, mais luz natural e materiais que envelhecem bem.",
      "Os tons neutros — bege, cinza-quente e branco-osso — continuam a ser a escolha dominante para paredes e tetos, servindo de tela para peças de madeira maciça e elementos em pedra natural que trazem textura ao espaço sem sobrecarregar visualmente o ambiente.",
      "A iluminação integrada, escondida em roços de pladur ou embutida em mobiliário de carpintaria, tem sido outro dos pedidos mais frequentes. Permite criar cenas de luz distintas para o dia a dia sem depender de um único ponto de luz central.",
      "Do lado dos materiais, temos visto um crescimento no interesse por cerâmicas de grande formato com poucas juntas, que transmitem uma sensação de continuidade e são mais fáceis de manter limpas — um critério cada vez mais valorizado pelos nossos clientes.",
      "Para 2026, a nossa equipa vai continuar a apostar nestas soluções, sempre adaptadas ao orçamento e ao estilo de vida de cada família, mantendo o rigor técnico que nos carateriza em todas as fases da obra.",
    ],
  },
  {
    slug: "parceria-fornecedores-ceramica-premium",
    date: "Julho 2026",
    category: "Amado Tower",
    title: "Nova parceria com fornecedores de cerâmica premium",
    excerpt:
      "Reforçámos a nossa rede de fornecedores para garantir ainda mais qualidade e variedade nos revestimentos dos nossos projetos.",
    img: img(7045352, 1600, 1000),
    body: [
      "A Amado Tower Remodelações anuncia uma nova parceria com fornecedores nacionais e europeus especializados em cerâmica e porcelanato de grande formato, alargando o catálogo de materiais disponíveis para os nossos clientes.",
      "Esta parceria permite-nos aceder a coleções exclusivas de mármores, travertinos e porcelanatos técnicos, com prazos de entrega mais curtos e um controlo de qualidade reforçado em cada lote recebido em obra.",
      "Um dos objetivos desta aproximação foi também garantir maior disponibilidade de peças de reposição — algo fundamental em projetos de reabilitação onde é necessário igualar revestimentos existentes.",
      "Os primeiros projetos a beneficiar desta nova rede de fornecedores já estão em curso, incluindo remodelações de casas de banho e cozinhas em Lisboa, Porto e Cascais, com resultados que reforçam o nosso compromisso com a qualidade em cada detalhe.",
    ],
  },
  {
    slug: "120-projetos-concluidos-sucesso",
    date: "Junho 2026",
    category: "Amado Tower",
    title: "120 projetos concluídos com sucesso",
    excerpt:
      "Celebramos mais um marco: já são mais de 120 projetos entregues com a qualidade e o rigor que nos caracterizam.",
    img: img(8143668, 1600, 1000),
    body: [
      "Celebramos esta semana um novo marco na história da Amado Tower Remodelações: a marca de 120 projetos concluídos, entre remodelações totais, cozinhas, casas de banho e obras de construção civil um pouco por todo o país.",
      "Este número representa mais de oito anos de trabalho contínuo, com uma equipa que cresceu a par da confiança dos nossos clientes, muitos dos quais nos voltaram a contactar para novos projetos ou nos recomendaram a familiares e amigos.",
      "Por trás de cada um destes projetos está um processo cuidadosamente planeado: desde a primeira visita técnica, passando pelo orçamento detalhado, até à entrega final da obra, com acompanhamento próximo em cada etapa.",
      "Agradecemos a confiança de todos os clientes que tornaram este marco possível e reiteramos o nosso compromisso: continuar a transformar espaços com o mesmo rigor, qualidade e atenção ao detalhe dos primeiros dias.",
    ],
  },
  {
    slug: "tinta-seca-5-minutos-china",
    date: "Maio 2026",
    category: "Setor",
    title: "Equipas chinesas desenvolvem tinta que seca em apenas 5 minutos",
    excerpt:
      "Nova fórmula promete reduzir drasticamente o tempo de espera entre demãos, acelerando obras de pintura em todo o mundo.",
    img: img(6474135, 1600, 1000),
    body: [
      "Investigadores de um centro tecnológico chinês anunciaram o desenvolvimento de uma nova fórmula de tinta acrílica capaz de secar ao toque em cerca de cinco minutos, uma fração do tempo habitualmente necessário nas tintas convencionais.",
      "Segundo os responsáveis pelo projeto, a fórmula recorre a uma combinação de resinas de secagem rápida e aditivos que aceleram a evaporação da água sem comprometer a aderência ou a durabilidade da película de tinta.",
      "Se confirmada em testes independentes e adaptada às normas europeias, esta tecnologia pode representar uma mudança significativa na forma como se planeiam obras de pintura, permitindo aplicar múltiplas demãos no mesmo dia e reduzir os prazos de entrega.",
      "Na Amado Tower, seguimos com atenção este tipo de inovação, sempre com o cuidado de validar a qualidade e a segurança dos materiais antes de os incorporar nos nossos projetos, mantendo o equilíbrio entre rapidez de execução e durabilidade do acabamento.",
    ],
  },
  {
    slug: "ceramica-nanotecnologia-autolimpante",
    date: "Abril 2026",
    category: "Setor",
    title: "Cerâmicas com nanotecnologia autolimpante ganham espaço na Europa",
    excerpt:
      "Revestimentos com superfície antibacteriana e repelente de sujidade estão a tornar-se tendência em cozinhas e casas de banho.",
    img: img(7214163, 1600, 1000),
    body: [
      "Fabricantes europeus de cerâmica têm vindo a lançar novas linhas de revestimentos com tratamentos de superfície baseados em nanotecnologia, capazes de repelir gordura, água e proliferação bacteriana sem necessidade de produtos de limpeza agressivos.",
      "Esta tecnologia funciona através de uma camada microscópica aplicada durante o processo de fabrico, que reduz a aderência de sujidade à superfície da cerâmica e facilita a sua remoção apenas com água.",
      "O interesse por este tipo de solução tem crescido sobretudo em cozinhas e casas de banho, espaços onde a humidade e a gordura são desafios constantes de manutenção, e onde a durabilidade do acabamento é particularmente valorizada.",
      "Estas cerâmicas já começam a estar disponíveis através da nossa rede de fornecedores, sendo uma opção que temos vindo a apresentar aos clientes que procuram um equilíbrio entre estética, higiene e facilidade de manutenção a longo prazo.",
    ],
  },
  {
    slug: "construcao-modular-portugal",
    date: "Março 2026",
    category: "Setor",
    title: "Portugal aposta em construção modular para reduzir prazos de obra",
    excerpt:
      "Estudos do setor apontam para um crescimento da construção modular, capaz de reduzir em até 40% o tempo de execução de uma obra.",
    img: img(37627540, 1600, 1000),
    body: [
      "Diversos estudos do setor da construção em Portugal têm vindo a apontar para um crescimento sustentado da construção modular, um método que consiste em produzir grande parte dos elementos estruturais em fábrica antes de os montar em obra.",
      "Esta abordagem permite reduzir significativamente o tempo total de execução — em alguns casos até 40%, segundo dados citados pelo setor — além de diminuir o desperdício de materiais e a exposição da obra a condições climatéricas adversas.",
      "Em Portugal, o método tem sido usado sobretudo em moradias unifamiliares e pequenos edifícios, mas começa também a ganhar espaço em projetos de reabilitação, onde a rapidez de execução é especialmente valorizada pelos proprietários.",
      "Na Amado Tower continuamos a acompanhar de perto esta evolução, avaliando caso a caso onde faz sentido integrar soluções pré-fabricadas nos nossos projetos de construção civil, sem nunca comprometer o acabamento personalizado que os nossos clientes esperam.",
    ],
  },
];

export function getNewsBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find((n) => n.slug === slug);
}
