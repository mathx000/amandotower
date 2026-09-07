import type { ContactPayload } from "./types";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";

export type ApiProject = {
  id: number;
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
};

export async function submitContact(payload: ContactPayload) {
  const res = await fetch(`${API_URL}/api/contacts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const body = await res.json().catch(() => null);
    throw new Error(body?.error ?? "Não foi possível enviar o pedido.");
  }
  return res.json();
}

export async function fetchProjects(): Promise<ApiProject[] | null> {
  try {
    const res = await fetch(`${API_URL}/api/projects`, { cache: "no-store" });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}
