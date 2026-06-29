import { highlights } from "@/data/company";
import { MotionReveal } from "@/components/MotionReveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Highlights() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Por que escolher"
          title="Critérios que importam para compra profissional."
          text="A proposta institucional é simples: fornecimento regular, atendimento direto, qualidade consistente e informações comerciais claras."
          align="center"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <MotionReveal key={item.title} delay={index * 0.05}>
                <article className="h-full rounded-brand border border-brand-navy/10 bg-brand-cream p-6 shadow-soft">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-navy text-brand-gold">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-brand-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-brand-ink/66">{item.text}</p>
                </article>
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
