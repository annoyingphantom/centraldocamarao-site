"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { company, navigation } from "@/data/company";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-deep/94 text-white backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Central do Camarão - início">
          <Image
            src="/images/logo-central-camarao.jpeg"
            alt="Logo Central do Camarão"
            width={52}
            height={52}
            priority
            className="h-12 w-12 rounded-full border border-brand-gold/40 object-cover"
          />
          <div className="leading-tight">
            <span className="block text-sm font-semibold uppercase tracking-[0.28em] text-brand-gold">
              Central do Camarão
            </span>
            <span className="hidden text-xs text-white/70 sm:block">Atacado • Qualidade garantida • Desde 2019</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium text-white/78 transition hover:bg-white/10 hover:text-white",
                pathname === item.href && "bg-white/10 text-white",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={company.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-5 py-2.5 text-sm font-bold text-brand-deep shadow-soft transition hover:bg-white"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Contato comercial
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-brand-deep px-4 pb-5 lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-2 pt-3" aria-label="Navegação móvel">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-brand px-4 py-3 text-sm font-semibold text-white/82 hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={company.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-brand bg-brand-gold px-4 py-3 text-sm font-bold text-brand-deep"
              onClick={() => setOpen(false)}
            >
              Contato comercial pelo WhatsApp
            </a>
            <p className="rounded-brand border border-brand-gold/30 px-4 py-3 text-xs text-white/70">
              {company.legalName} • CNPJ {company.cnpj}
            </p>
          </nav>
        </div>
      )}
    </header>
  );
}

