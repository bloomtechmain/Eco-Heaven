"use server";

export type ContactState = { ok: boolean; message: string } | null;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return { ok: false, message: "Please fill in your name, email and message." };
  }
  if (!EMAIL_RE.test(email)) {
    return { ok: false, message: "Please enter a valid email address." };
  }

  // TODO: deliver the enquiry (e.g. via an email provider or CRM).
  // The WordPress site used Contact Form 7, which emailed the site admin.
  console.log("[contact]", { name, phone, email, message });

  return { ok: true, message: "Thank you for your message. It has been sent." };
}
