"use server";

export type ContactState = { ok: boolean; message: string } | null;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CONTACT_TO_EMAIL = "info@smartecoheaven.com";
const SEND_FAILED = `Sorry, we couldn't send your message. Please try again or email ${CONTACT_TO_EMAIL}.`;

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

  const serviceId = process.env.EMAILJS_SERVICE_ID;
  const templateId = process.env.EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.EMAILJS_PUBLIC_KEY;
  const privateKey = process.env.EMAILJS_PRIVATE_KEY;

  if (!serviceId || !templateId || !publicKey || !privateKey) {
    console.error("[contact] EmailJS environment variables are not configured");
    return { ok: false, message: SEND_FAILED };
  }

  try {
    const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        accessToken: privateKey,
        template_params: {
          name,
          phone: phone || "Not provided",
          email,
          message,
          to_email: CONTACT_TO_EMAIL,
          reply_to: email,
        },
      }),
    });
    if (!res.ok) {
      console.error("[contact] EmailJS error", res.status, await res.text());
      return { ok: false, message: SEND_FAILED };
    }
  } catch (err) {
    console.error("[contact] EmailJS request failed", err);
    return { ok: false, message: SEND_FAILED };
  }

  return { ok: true, message: "Thank you for your message. It has been sent." };
}
