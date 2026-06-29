import { ArrowRight, MapPin, MessageCircle, Truck } from "lucide-react";
import { businessAdvantages, company, regionsServed } from "@/data/company";
import { MotionReveal } from "@/components/MotionReveal";

export function RegionsServed() {
  return (
    <section id="regioes" className="scroll-mt-24 bg-brand-deep py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-gold">Regiões atendidas</p>
            <h2 className="mt-3 font-serif text-3xl font-bold leading-tight sm:text-4xl">
              Atendimento B2B para Pará, Santa Catarina e São Paulo.
            </h2>
            <p className="mt-4 text-base leading-8 text-white/72">
              Outros estados podem ser avaliados sob consulta. A confirmação comercial considera região, volume, rota,
              disponibilidade e prazo de compra.
            </p>
          </div>
          <a
            href={company.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-gold/50 px-5 py-3 text-sm font-bold text-brand-gold transition hover:bg-brand-gold hover:text-brand-deep"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Cotação pelo WhatsApp
          </a>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {regionsServed.map((region, index) => (
            <MotionReveal key={region.name} delay={index * 0.06}>
              <article className="h-full rounded-brand border border-white/12 bg-white/[0.06] p-6 shadow-premium backdrop-blur">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-gold text-brand-deep">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-2xl font-bold text-white">{region.name}</h3>
                <p className="mt-4 text-sm leading-7 text-white/72">{region.description}</p>
                <p className="mt-4 rounded-brand border border-brand-gold/25 bg-brand-gold/10 p-4 text-sm leading-7 text-white/82">
                  {region.detail}
                </p>
              </article>
            </MotionReveal>
          ))}
        </div>

        <div className="mt-10 grid gap-4 rounded-brand border border-white/12 bg-white/[0.06] p-5 sm:grid-cols-2 lg:grid-cols-4">
          {businessAdvantages.map((advantage) => (
            <div key={advantage} className="flex items-center gap-3 text-sm font-semibold text-white/82">
              <Truck className="h-5 w-5 shrink-0 text-brand-gold" aria-hidden="true" />
              {advantage}
            </div>
          ))}
        </div>

        <a
          href={company.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-brand-gold transition hover:text-white"
        >
          Falar com atendimento comercial
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
