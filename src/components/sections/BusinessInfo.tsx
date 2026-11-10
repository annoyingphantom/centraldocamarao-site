import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Building2,
  CalendarDays,
  Fish,
  Globe2,
  Mail,
  PackageCheck,
  Phone,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { company } from "@/data/company";
import { SectionHeading } from "@/components/SectionHeading";

type BusinessInfoItem = {
  icon: LucideIcon;
  label: string;
  value: ReactNode;
};

const businessInfoItems: BusinessInfoItem[] = [
  { icon: Building2, label: "Marca pública", value: company.publicBrand },
  { icon: ShieldCheck, label: "Razão Social", value: company.legalName },
  { icon: BadgeCheck, label: "Nome Fantasia", value: company.tradeName },
  { icon: PackageCheck, label: "CNPJ", value: company.cnpj },
  { icon: CalendarDays, label: "Data de abertura", value: company.openingDate },
  { icon: Globe2, label: "Domínio oficial", value: company.domain },
  { icon: Fish, label: "Produto principal", value: company.mainProduct },
  {
    icon: Truck,
    label: "Volume mensal",
    value: (
      <>
        Em média <strong className="font-bold text-brand-ink">60 toneladas</strong> distribuídas mensalmente.
      </>
    ),
  },
  { icon: Phone, label: "WhatsApp", value: company.whatsapp },
  {
    icon: Mail,
    label: "E-mail",
    value: (
      <a href={`mailto:${company.email}`} className="font-bold text-brand-navy transition hover:text-brand-orange">
        {company.email}
      </a>
    ),
  },
];

export function BusinessInfo() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeading
              eyebrow="Informações legais e comerciais"
              title="Dados oficiais da empresa."
              text="Informações úteis para clientes, parceiros comerciais e processos de verificação institucional."
            />

            <div className="mt-8 rounded-brand border border-brand-gold/40 bg-brand-cream p-5 text-sm leading-7 text-brand-ink/72">
              {businessInfoItems.map((item) => (
                <p key={item.label}>
                  <strong className="text-brand-ink">{item.label}:</strong> {item.value}
                </p>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {businessInfoItems.map((fact) => {
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

        <p className="mt-6 rounded-brand border border-brand-navy/10 bg-brand-cream p-5 text-sm leading-7 text-brand-ink/64">
          <strong className="text-brand-ink">Observação:</strong> As informações acima representam os dados institucionais oficiais da empresa utilizados para relacionamento comercial e processos de verificação.
        </p>
      </div>
    </section>
  );
}
