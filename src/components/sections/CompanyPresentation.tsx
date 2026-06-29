import Image from "next/image";
import { company } from "@/data/company";
import { MotionReveal } from "@/components/MotionReveal";
import { SectionHeading } from "@/components/SectionHeading";

export function CompanyPresentation() {
  return (
    <section id="sobre" className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <MotionReveal>
          <div className="overflow-hidden rounded-brand bg-brand-mist shadow-premium">
            <Image
              src="/images/drive/drive-20.jpg"
              alt="Produto real da Central do Camarão"
              width={900}
              height={1200}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </MotionReveal>

        <MotionReveal delay={0.1}>
          <SectionHeading
            eyebrow="Sobre a empresa"
            title="Distribuidora brasileira de camarão salgado para o mercado B2B."
            text="A Central do Camarão atua com fornecimento em volume para empresas que precisam de regularidade, atendimento direto e produto consistente."
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-brand border border-brand-navy/10 bg-brand-cream p-6">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-gold">Marca pública</p>
              <p className="mt-3 text-2xl font-bold text-brand-navy">{company.publicBrand}</p>
              <p className="mt-3 text-sm leading-6 text-brand-ink/68">
                Nome usado na comunicação institucional, nos canais oficiais e no relacionamento com compradores.
              </p>
            </div>
            <div className="rounded-brand border border-brand-navy/10 bg-white p-6 shadow-soft">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-gold">Identificação legal</p>
              <p className="mt-3 text-lg font-bold text-brand-navy">{company.legalName}</p>
              <p className="mt-3 text-sm leading-6 text-brand-ink/68">
                CNPJ {company.cnpj}, nome fantasia {company.tradeName}, abertura em {company.openingDate}.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-brand bg-brand-deep p-6 text-white">
            <p className="font-serif text-2xl font-bold">Atuação</p>
            <p className="mt-3 leading-8 text-white/76">
              {company.businessDescription} O atendimento é comercial, com análise de região, volume, disponibilidade e
              logística antes da confirmação do pedido.
            </p>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
