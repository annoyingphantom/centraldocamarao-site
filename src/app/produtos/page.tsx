import type { Metadata } from "next";
import { MapAndContact } from "@/components/sections/MapAndContact";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { RegionsServed } from "@/components/sections/RegionalPricing";
import { company } from "@/data/company";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Produtos e regiões atendidas",
  description:
    "Catálogo institucional da Central do Camarão: camarão salgado para atacado, produto principal 12g em caixas de 25kg e atendimento por região.",
  alternates: {
    canonical: absoluteUrl("/produtos"),
  },
};

export default function ProductsPage() {
  return (
    <main>
      <section className="bg-brand-deep px-4 py-20 text-center text-white sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-gold">Produtos</p>
        <h1 className="mx-auto mt-4 max-w-4xl font-serif text-4xl font-bold leading-tight sm:text-5xl">
          Camarão salgado para fornecimento no atacado.
        </h1>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/72">
          {company.mainProduct}. Condições comerciais confirmadas pelo atendimento oficial conforme região, volume e disponibilidade.
        </p>
      </section>
      <ProductShowcase />
      <RegionsServed />
      <MapAndContact />
    </main>
  );
}
