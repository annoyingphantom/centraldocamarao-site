import { businessFacts, company } from "@/data/company";
import { SectionHeading } from "@/components/SectionHeading";

export function BusinessInfo() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Informações legais e comerciais"
            title="Dados oficiais da empresa."
            text="Informações úteis para compradores, parceiros e relacionamento comercial."
          />

          <div className="mt-8 rounded-brand border border-brand-gold/40 bg-brand-cream p-5 text-sm leading-7 text-brand-ink/72">
            <p>
              <strong className="text-brand-ink">Marca pública:</strong> {company.publicBrand}
            </p>
            <p>
              <strong className="text-brand-ink">Razão social:</strong> {company.legalName}
            </p>
            <p>
              <strong className="text-brand-ink">Nome fantasia no CNPJ:</strong> {company.tradeName}
            </p>
            <p>
              <strong className="text-brand-ink">CNPJ:</strong> {company.cnpj}
            </p>
            <p>
              <strong className="text-brand-ink">Domínio oficial:</strong> {company.domain}
            </p>
            <p>
              <strong className="text-brand-ink">E-mail:</strong> {company.email}
            </p>
            <p>
              <strong className="text-brand-ink">WhatsApp:</strong> {company.whatsapp}
            </p>
            <p>
              <strong className="text-brand-ink">Google Maps:</strong>{" "}
              <a href={company.googleBusinessProfileUrl} target="_blank" rel="noreferrer" className="font-bold text-brand-navy transition hover:text-brand-orange">
                Ver no Google Maps
              </a>
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {businessFacts.map((fact) => {
            const Icon = fact.icon;
            return (
              <article key={fact.label} className="rounded-brand border border-brand-navy/10 bg-brand-cream p-5 shadow-soft">
                <Icon className="h-6 w-6 text-brand-orange" aria-hidden="true" />
                <p className="mt-4 text-sm font-bold uppercase tracking-[0.16em] text-brand-gold">{fact.label}</p>
                <p className="mt-2 text-base font-semibold leading-7 text-brand-ink">{fact.value}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
