import { Globe2, Instagram, Mail, MessageCircle } from "lucide-react";
import { company } from "@/data/company";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";

export function MapAndContact() {
  return (
    <section id="contato" className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Contato"
            title="Atendimento comercial direto."
            text="Para cotação, informe região, volume estimado, tipo de cliente e prazo de compra."
          />

          <div className="mt-8 grid gap-4">
            <a
              href={company.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-navy px-6 py-3 text-sm font-bold text-white shadow-soft transition hover:bg-brand-orange"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp {company.whatsapp}
            </a>
            <a
              href={`mailto:${company.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-navy/14 px-6 py-3 text-sm font-bold text-brand-navy transition hover:border-brand-gold hover:bg-brand-cream"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {company.email}
            </a>
            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href={company.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-navy/14 px-5 py-3 text-sm font-bold text-brand-navy transition hover:border-brand-gold hover:bg-brand-cream"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
                Instagram
              </a>
              <a
                href={company.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-navy/14 px-5 py-3 text-sm font-bold text-brand-navy transition hover:border-brand-gold hover:bg-brand-cream"
              >
                <Globe2 className="h-4 w-4" aria-hidden="true" />
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-brand border border-brand-navy/10 bg-brand-cream p-5 shadow-premium sm:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

