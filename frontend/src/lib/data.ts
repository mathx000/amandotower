export type NavLink = { name: string; href: string };

export const services: NavLink[] = [
  { name: "Pintura", href: "/servicos/pintura" },
  { name: "Pladur", href: "/servicos/pladur" },
  { name: "Carpintaria", href: "/servicos/carpintaria" },
  { name: "Cerâmicas e Revestimentos", href: "/servicos/ceramicas-e-revestimentos" },
  { name: "Jardinagem e Paisagismo", href: "/servicos/jardinagem-e-paisagismo" },
];

export const navLinks: NavLink[] = [
  { name: "Início", href: "/" },
  { name: "Serviços", href: "/servicos" },
  { name: "Sobre Nós", href: "/sobre-nos" },
  { name: "Contactos", href: "/contactos" },
];
