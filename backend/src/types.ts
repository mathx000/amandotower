export type Project = {
  id: number;
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
};

export type ProjectInput = Omit<Project, "id">;

export type Contact = {
  id: number;
  name: string;
  email: string;
  phone: string;
  location: string;
  service: string;
  message: string;
  createdAt: string;
};

export type ContactInput = Omit<Contact, "id" | "createdAt">;
