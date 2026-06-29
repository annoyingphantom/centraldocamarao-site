import { faqs } from "@/data/company";
import { SectionHeading } from "@/components/SectionHeading";

export function Faq() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Perguntas frequentes"
          text="Respostas diretas para compradores que precisam de confiança antes de entrar em contato."
          align="center"
        />

        <div className="mt-10 grid gap-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-brand border border-brand-navy/10 bg-brand-cream p-5 shadow-soft"
            >
              <summary className="cursor-pointer list-none text-base font-bold text-brand-ink">
                {faq.question}
                <span className="float-right text-brand-gold transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-sm leading-7 text-brand-ink/68">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
