"use client";

import { Loader2, Send } from "lucide-react";
import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    window.setTimeout(() => setStatus("sent"), 700);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-brand-ink">
          Nome
          <input
            required
            name="name"
            autoComplete="name"
            className="rounded-brand border border-brand-navy/12 bg-white px-4 py-3 outline-none transition focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/20"
            placeholder="Seu nome"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-brand-ink">
          Telefone ou WhatsApp
          <input
            required
            name="phone"
            autoComplete="tel"
            className="rounded-brand border border-brand-navy/12 bg-white px-4 py-3 outline-none transition focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/20"
            placeholder="(00) 00000-0000"
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold text-brand-ink">
        Região de atendimento
        <select
          name="region"
          className="rounded-brand border border-brand-navy/12 bg-white px-4 py-3 outline-none transition focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/20"
          defaultValue="Pará"
        >
          <option>São Paulo</option>
          <option>Santa Catarina</option>
          <option>Pará</option>
        </select>
      </label>
      <label className="grid gap-2 text-sm font-semibold text-brand-ink">
        Mensagem
        <textarea
          required
          name="message"
          rows={5}
          className="resize-none rounded-brand border border-brand-navy/12 bg-white px-4 py-3 outline-none transition focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/20"
          placeholder="Informe volume desejado, produto de interesse e prazo de compra."
        />
      </label>
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-navy px-6 py-3 text-sm font-bold text-white shadow-soft transition hover:bg-brand-orange disabled:cursor-wait disabled:opacity-70"
      >
        {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : <Send className="h-4 w-4" aria-hidden="true" />}
        {status === "sent" ? "Solicitação registrada" : "Enviar solicitação"}
      </button>
      {status === "sent" && (
        <p className="rounded-brand bg-brand-mist px-4 py-3 text-sm text-brand-navy">
          Formulário demonstrativo. Para atendimento imediato, finalize pelo WhatsApp oficial informado nesta página.
        </p>
      )}
    </form>
  );
}
