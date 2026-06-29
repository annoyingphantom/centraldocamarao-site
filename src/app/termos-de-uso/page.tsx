import type { Metadata } from "next";
import { company } from "@/data/company";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: `Termos de Uso do site ${company.publicBrand}.`,
  alternates: {
    canonical: absoluteUrl("/termos-de-uso"),
  },
};

export default function TermsPage() {
  return (
    <main className="bg-brand-cream py-20">
      <article className="mx-auto max-w-4xl rounded-brand bg-white px-5 py-10 shadow-premium sm:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-gold">Legal</p>
        <h1 className="mt-4 font-serif text-4xl font-bold text-brand-ink">Termos de Uso</h1>
        <div className="mt-8 space-y-6 text-sm leading-8 text-brand-ink/72">
          <p>
            Este site apresenta informações institucionais da marca pública {company.publicBrand}, operada por
            {" "}{company.legalName}, CNPJ {company.cnpj}, nome fantasia {company.tradeName}.
          </p>
          <p>
            As informações publicadas têm finalidade institucional e comercial. Condições de venda, disponibilidade,
            logística, volume mínimo, prazos e valores são definidos diretamente pelo atendimento oficial.
          </p>
          <p>
            O site não exibe preços públicos. Cotações devem ser solicitadas pelo WhatsApp oficial, informando região,
            volume desejado, tipo de comprador e prazo de compra.
          </p>
          <p>
            Imagens, textos, logotipo, identidade visual e materiais comerciais pertencem à marca e não podem ser copiados
            ou reutilizados sem autorização.
          </p>
          <p>
            O ponto de retirada informado é {company.address}, com horário de atendimento das {company.pickupHours}. A
            retirada deve ser confirmada previamente pelo atendimento oficial.
          </p>
          <p>
            Canais oficiais: domínio {company.domain}, e-mail {company.email}, WhatsApp {company.whatsapp}, Instagram e
            Facebook vinculados no rodapé do site.
          </p>
          <p>Última atualização: 28 de junho de 2026.</p>
        </div>
      </article>
    </main>
  );
}
