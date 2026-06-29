import Image from "next/image";
import Link from "next/link";
import { Globe2, Instagram, MessageCircle } from "lucide-react";
import { company, navigation } from "@/data/company";

export function Footer() {
  return (
    <footer className="bg-brand-deep text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.9fr] lg:px-8">
        <div>
          <div className="flex items-center gap-4">
            <Image
              src="/images/logo-central-camarao.jpeg"
              alt="Logo Central do Camarão"
              width={70}
              height={70}
              className="rounded-full border border-brand-gold/40"
            />
            <div>
              <p className="text-xl font-bold">{company.publicBrand}</p>
              <p className="mt-1 text-sm text-white/64">Atacado • Qualidade garantida • Desde {company.foundingYear}</p>
            </div>
          </div>
          <div className="mt-6 space-y-2 text-sm text-white/70">
            <p>
              <span className="font-semibold text-white">Razão social:</span> {company.legalName}
            </p>
            <p>
              <span className="font-semibold text-white">Nome fantasia no CNPJ:</span> {company.tradeName}
            </p>
            <p>
              <span className="font-semibold text-white">CNPJ:</span> {company.cnpj}
            </p>
            <p>
              <span className="font-semibold text-white">Abertura:</span> {company.openingDate}
            </p>
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-gold">Navegação</p>
          <div className="mt-4 grid gap-3 text-sm">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="text-white/72 transition hover:text-white">
                {item.label}
              </Link>
            ))}
            <Link href="/politica-de-privacidade" className="text-white/72 transition hover:text-white">
              Política de Privacidade
            </Link>
            <Link href="/termos-de-uso" className="text-white/72 transition hover:text-white">
              Termos de Uso
            </Link>
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-gold">Canais oficiais</p>
          <div className="mt-4 grid gap-3 text-sm text-white/72">
            <p>Domínio: {company.domain}</p>
            <p>E-mail: {company.email}</p>
            <p>WhatsApp: {company.whatsapp}</p>
            <p>Retirada Belém/PA: {company.address}</p>
            <a href={company.googleBusinessProfileUrl} target="_blank" rel="noreferrer" className="transition hover:text-white">
              Google Maps: Ver perfil oficial
            </a>
          </div>
          <div className="mt-5 flex gap-3">
            <a
              href={company.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/16 hover:bg-white/10"
              aria-label="Contato via WhatsApp"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={company.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/16 hover:bg-white/10"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={company.facebookUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/16 hover:bg-white/10"
              aria-label="Facebook"
            >
              <Globe2 className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/58">
        © {new Date().getFullYear()} {company.publicBrand}. Todos os direitos reservados.
      </div>
    </footer>
  );
}
