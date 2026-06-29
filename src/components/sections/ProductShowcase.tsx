import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { company, products } from "@/data/company";
import { MotionReveal } from "@/components/MotionReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { cn } from "@/lib/utils";

export function ProductShowcase() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Produtos"
            title="Linha de camarão salgado para atacado."
            text={`${company.mainProduct}. Atendimento profissional para restaurantes, buffets, mercados, distribuidores e revendedores.`}
          />
          <Link
            href="/produtos#regioes"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-navy transition hover:text-brand-orange"
          >
            Ver regiões atendidas
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product, index) => (
            <MotionReveal key={product.caliber} delay={index * 0.04}>
              <article
                className={cn(
                  "h-full overflow-hidden rounded-brand border bg-white shadow-soft",
                  product.featured ? "border-brand-gold shadow-premium" : "border-brand-navy/10",
                )}
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute left-3 top-3 rounded-full bg-brand-gold px-3 py-1 text-sm font-bold text-brand-deep">
                    {product.caliber}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-brand-ink">{product.title}</h3>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-brand-gold">
                    {product.packageInfo}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-brand-ink/64">{product.description}</p>
                  <a
                    href={company.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-navy transition hover:text-brand-orange"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    Solicitar cotação
                  </a>
                </div>
              </article>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
