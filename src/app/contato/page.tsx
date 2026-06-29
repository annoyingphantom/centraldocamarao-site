import type { Metadata } from "next";
import { BusinessInfo } from "@/components/sections/BusinessInfo";
import { MapAndContact } from "@/components/sections/MapAndContact";
import { PickupLocation } from "@/components/sections/PickupLocation";
import { company } from "@/data/company";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Contato oficial da Central do Camarão: WhatsApp, e-mail, redes sociais e ponto de retirada em Ananindeua/PA.",
  alternates: {
    canonical: absoluteUrl("/contato"),
  },
};

export default function ContactPage() {
  return (
    <main>
      <section className="bg-brand-deep px-4 py-20 text-center text-white sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-gold">Contato</p>
        <h1 className="mx-auto mt-4 max-w-4xl font-serif text-4xl font-bold leading-tight sm:text-5xl">
          Canais oficiais da {company.publicBrand}.
        </h1>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/72">
          Atendimento comercial para compradores profissionais. Informe região, volume e prazo de compra para cotação pelo WhatsApp.
        </p>
      </section>
      <MapAndContact />
      <PickupLocation />
      <BusinessInfo />
    </main>
  );
}
