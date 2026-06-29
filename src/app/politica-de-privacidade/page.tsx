import type { Metadata } from "next";
import { company } from "@/data/company";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: `Política de Privacidade da ${company.publicBrand}, marca de ${company.legalName}.`,
  alternates: {
    canonical: absoluteUrl("/politica-de-privacidade"),
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-brand-cream py-20">
      <article className="mx-auto max-w-4xl rounded-brand bg-white px-5 py-10 shadow-premium sm:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-gold">Legal</p>
        <h1 className="mt-4 font-serif text-4xl font-bold text-brand-ink">Política de Privacidade</h1>
        <div className="mt-8 space-y-6 text-sm leading-8 text-brand-ink/72">
          <p>
            Esta Política de Privacidade se aplica ao site oficial da marca pública {company.publicBrand}, operada pela
            empresa {company.legalName}, CNPJ {company.cnpj}, nome fantasia {company.tradeName}.
          </p>
          <p>
            Podemos coletar informações fornecidas voluntariamente em formulários e canais de contato, como nome,
            telefone, e-mail, região de atendimento, volume de compra e mensagem comercial.
          </p>
          <p>
            Os dados são usados para responder solicitações, organizar cotações, registrar histórico básico de atendimento
            e manter comunicação comercial com compradores profissionais.
          </p>
          <p>
            Este site usa cookies essenciais para funcionamento e pode usar cookies não essenciais somente mediante
            consentimento, conforme a Lei Geral de Proteção de Dados Pessoais (LGPD).
          </p>
          <p>
            Não vendemos dados pessoais. Dados podem ser compartilhados apenas quando necessário para atendimento,
            cumprimento legal, segurança, operação do site ou execução de solicitações do próprio usuário.
          </p>
          <p>
            Para exercer direitos relacionados à LGPD, entre em contato pelo e-mail {company.email} ou pelo WhatsApp
            oficial {company.whatsapp}.
          </p>
          <p>Última atualização: 28 de junho de 2026.</p>
        </div>
      </article>
    </main>
  );
}
