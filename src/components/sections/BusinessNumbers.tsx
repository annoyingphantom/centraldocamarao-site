import { businessNumbers } from "@/data/company";
import { MotionReveal } from "@/components/MotionReveal";
import { SectionHeading } from "@/components/SectionHeading";

export function BusinessNumbers() {
  return (
    <section className="bg-brand-cream py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Operação em números"
          title="Atacado de camarão salgado desde 2019."
          text="Alguns dados simples sobre atuação, volume mensal, produto principal e regiões atendidas."
          align="center"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {businessNumbers.map((item, index) => (
            <MotionReveal key={item.label} delay={index * 0.05}>
              <article className="h-full rounded-brand border border-brand-navy/10 bg-white p-6 shadow-soft">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-gold">{item.label}</p>
                <p className="mt-4 font-serif text-4xl font-bold text-brand-navy">{item.value}</p>
                <p className="mt-3 text-sm leading-6 text-brand-ink/64">{item.note}</p>
              </article>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
