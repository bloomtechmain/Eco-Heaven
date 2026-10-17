"use client";

import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";

type ContactState = { ok: boolean; message: string } | null;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CONTACT_TO_EMAIL = "info@smartecoheaven.com";
const SEND_FAILED = `Sorry, we couldn't send your message. Please try again or email ${CONTACT_TO_EMAIL}.`;

type Field = { name: string; label: string; type: string; placeholder: string; required?: boolean };

const homeFields: Field[] = [
  { name: "name", label: "name", type: "text", placeholder: "e.g. Oliver Spiteri", required: true },
  { name: "phone", label: "phone", type: "tel", placeholder: "e.g. (555) 123-4567" },
  { name: "email", label: "email", type: "email", placeholder: "example@email.com", required: true },
];

const pageFields: Field[] = [
  { name: "name", label: "Name", type: "text", placeholder: "e.g. Oliver Spiteri", required: true },
  { name: "phone", label: "Phone", type: "tel", placeholder: "(555) 123-4567" },
  { name: "email", label: "Email", type: "email", placeholder: "info@example.com", required: true },
];

export function ContactForm({ variant = "home" }: { variant?: "home" | "page" }) {
  const [state, setState] = useState<ContactState>(null);
  const [pending, setPending] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setState({ ok: false, message: "Please fill in your name, email and message." });
      return;
    }
    if (!EMAIL_RE.test(email)) {
      setState({ ok: false, message: "Please enter a valid email address." });
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (!serviceId || !templateId || !publicKey) {
      console.error("[contact] EmailJS environment variables are not configured");
      setState({ ok: false, message: SEND_FAILED });
      return;
    }

    setPending(true);
    setState(null);
    try {
      await emailjs.send(
        serviceId,
        templateId,
        { name, phone: phone || "Not provided", email, message, to_email: CONTACT_TO_EMAIL, reply_to: email },
        { publicKey },
      );
      form.reset();
      setState({ ok: true, message: "Thank you for your message. It has been sent." });
    } catch (err) {
      console.error("[contact] EmailJS request failed", err);
      setState({ ok: false, message: SEND_FAILED });
    } finally {
      setPending(false);
    }
  }
  const page = variant === "page";
  const fields = page ? pageFields : homeFields;

  const input = page
    ? "w-full border-b border-[#ced3ca] bg-transparent py-2.5 font-albert text-base leading-7 text-white outline-none placeholder:text-white focus:border-white"
    : "w-full border-b-2 border-white bg-transparent py-2.5 font-sans text-base leading-7 text-white outline-none placeholder:text-[#888] focus:border-white/60";
  const label = "block font-sans text-sm font-semibold tracking-[1.5px] uppercase";

  return (
    <form onSubmit={onSubmit}className={page ? "space-y-12" : "space-y-[22px]"}>
      {fields.map((f) => (
        <label key={f.name} className="block">
          <span className={page ? "sr-only" : label}>{f.label}</span>
          <input name={f.name} type={f.type} required={f.required} placeholder={f.placeholder} className={input} />
        </label>
      ))}
      <label className="block">
        <span className={page ? "sr-only" : label}>message</span>
        <textarea
          name="message"
          required
          rows={2}
          placeholder={page ? "Write your message here..." : "write your message here"}
          className={`${input} min-h-[70px]`}
        />
      </label>

      <div className={`flex flex-wrap items-center gap-5 ${page ? "!mt-8" : "!mt-[66px]"}`}>
        {page ? (
          <button
            type="submit"
            disabled={pending}
            className="inline-flex items-center gap-3 rounded-[30px] bg-wine px-8 py-[18px] font-grotesk text-base leading-6 font-medium text-white uppercase transition-colors hover:bg-rose disabled:opacity-60"
          >
            {pending ? "Sending..." : "submit now"}
            <svg width="18" height="14" viewBox="0 0 18 14" fill="currentColor" aria-hidden><path d="M11 0 18 7l-7 7-1.4-1.4L14.2 8H0V6h14.2L9.6 1.4Z" /></svg>
          </button>
        ) : (
          <button
            type="submit"
            disabled={pending}
            className="ml-4 border border-royal bg-white px-[30px] py-2.5 font-albert text-[17px] leading-[25.5px] font-medium text-ink transition-colors hover:bg-wine hover:text-white disabled:opacity-60"
          >
            {pending ? "Sending..." : "Submit Now"}
          </button>
        )}
        {state && (
          <p role="status" className={state.ok ? "text-emerald-300" : "text-red-300"}>
            {state.message}
          </p>
        )}
      </div>
    </form>
  );
}
