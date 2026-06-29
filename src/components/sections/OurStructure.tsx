import Image from "next/image";
import { structureItems } from "@/data/company";
import { SectionHeading } from "@/components/SectionHeading";

const photos = [
  { src: "/images/drive/drive-19.jpg", alt: "Produto para distribuição da Central do Camarão" },
  { src: "/images/drive/drive-21.jpg", alt: "Camarão salgado preparado para fornecimento" },
  { src: "/images/camarao-close-real.jpg", alt: "Detalhe do camarão salgado" },
];

export function OurStructure() {
  return (
    <section className="bg-brand-cream py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Nossa operação"
            title="Atendimento direto, retirada local e canais oficiais."
            text="A Central do Camarão trabalha com fornecimento em volume, comunicação direta e retirada em Ananindeua/PA para clientes atendidos na região."
          />
          <div className="mt-8 grid gap-4">
            {structureItems.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-brand border border-brand-navy/10 bg-white p-5 shadow-soft">
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-navy text-brand-gold">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-ink">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-brand-ink/66">{item.text}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <Image
              src={photos[0].src}
              alt={photos[0].alt}
              width={900}
              height={1200}
              className="aspect-[4/5] rounded-brand object-cover shadow-soft"
            />
            <Image
              src={photos[2].src}
              alt={photos[2].alt}
              width={900}
              height={700}
              className="aspect-[4/3] rounded-brand object-cover shadow-soft"
            />
          </div>
          <div className="pt-10">
            <Image
              src={photos[1].src}
              alt={photos[1].alt}
              width={900}
              height={1300}
              className="aspect-[4/6] rounded-brand object-cover shadow-premium"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
