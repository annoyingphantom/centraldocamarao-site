import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="bg-brand-deep px-4 py-24 text-white">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-gold">404</p>
        <h1 className="mt-4 font-serif text-5xl font-bold">Página não encontrada</h1>
        <p className="mt-5 text-white/72">
          O endereço acessado não existe ou foi movido. Volte para a página inicial para continuar navegando.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-gold px-6 py-3 text-sm font-bold text-brand-deep transition hover:bg-white"
        >
          <Home className="h-4 w-4" aria-hidden="true" />
          Voltar ao início
        </Link>
      </div>
    </main>
  );
}
