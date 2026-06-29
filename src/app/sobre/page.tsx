import type { Metadata } from "next";
import Image from "next/image";
import { BusinessInfo } from "@/components/sections/BusinessInfo";
import { BusinessNumbers } from "@/components/sections/BusinessNumbers";
import { Highlights } from "@/components/sections/Highlights";
import { OurStructure } from "@/components/sections/OurStructure";
import { company } from "@/data/company";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça a Central do Camarão, marca pública da CAOA R F CAMARAO NO ATACADO EIRELI, CNPJ 35.590.632/0001-37.",
  alternates: {
    canonical: absoluteUrl("/sobre"),
  },
};

export default function AboutPage() {
  return (
    <main>
      <section className="bg-brand-deep py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-gold">Sobre</p>
            <h1 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-5xl">{company.publicBrand}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/76">
              {company.businessDescription} A empresa opera desde {company.foundingYear}, com CNPJ aberto em {company.openingDate}.
            </p>
            <div className="mt-8 rounded-brand border border-brand-gold/30 bg-white/8 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-gold">Identificação legal</p>
              <p className="mt-3 text-xl font-bold">{company.legalName}</p>
              <p className="mt-2 text-white/72">CNPJ {company.cnpj} • Nome fantasia {company.tradeName}</p>
            </div>
          </div>
          <Image
            src="/images/drive/drive-22.jpg"
            alt="Imagem real do produto Central do Camarão"
            width={900}
            height={1200}
            className="rounded-brand object-cover shadow-premium"
          />
        </div>
      </section>
      <BusinessNumbers />
      <Highlights />
      <OurStructure />
      <BusinessInfo />
    </main>
  );
}
