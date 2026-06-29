import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";

const gallery = [
  { src: "/images/camarao-salgado-real.jpg", alt: "Camarão salgado da Central do Camarão" },
  { src: "/images/drive/drive-18.jpg", alt: "Produto preparado para fornecimento em volume" },
  { src: "/images/drive/drive-22.jpg", alt: "Camarão salgado para atendimento no atacado" },
  { src: "/images/drive/drive-03.jpg", alt: "Camarão salgado em caixas para distribuição" },
];

export function RealGallery() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Galeria"
          title="Produto e rotina de fornecimento."
          text="Alguns registros do camarão salgado preparado para atendimento no atacado."
          align="center"
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((item) => (
            <div key={item.src} className="overflow-hidden rounded-brand border border-brand-navy/10 bg-brand-cream shadow-soft">
              <Image
                src={item.src}
                alt={item.alt}
                width={900}
                height={1200}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
