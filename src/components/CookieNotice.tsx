"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const storageKey = "central-camarao-lgpd-consent";

export function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(window.localStorage.getItem(storageKey) == null);
  }, []);

  function saveConsent(value: "accepted" | "rejected") {
    window.localStorage.setItem(storageKey, value);
    setVisible(false);
  }

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-4xl rounded-brand border border-brand-gold/30 bg-white p-4 text-brand-ink shadow-premium">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <p className="text-sm leading-6 text-brand-ink/78">
          Usamos cookies essenciais para funcionamento do site e, quando autorizados, dados de navegação para melhorar a
          experiência, conforme a LGPD. Leia a nossa{" "}
          <Link href="/politica-de-privacidade" className="font-bold text-brand-navy underline decoration-brand-gold underline-offset-4">
            Política de Privacidade
          </Link>
          .
        </p>
        <div className="flex flex-col gap-2 sm:flex-row">
          <button
            type="button"
            className="rounded-full border border-brand-navy/16 px-5 py-2.5 text-sm font-bold text-brand-navy transition hover:bg-brand-cream"
            onClick={() => saveConsent("rejected")}
          >
            Rejeitar não essenciais
          </button>
          <button
            type="button"
            className="rounded-full bg-brand-navy px-5 py-2.5 text-sm font-bold text-white transition hover:bg-brand-orange"
            onClick={() => saveConsent("accepted")}
          >
            Aceitar cookies
          </button>
        </div>
      </div>
    </div>
  );
}
