import Image from "next/image";
import { company } from "@/data/company";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-deep text-white lg:bg-[linear-gradient(90deg,rgba(0,16,32,0.98)_0%,rgba(0,16,32,0.88)_50%,rgba(0,48,64,0.40)_100%),url('/images/hero-camarao-lcp.jpg')] lg:bg-cover lg:bg-center">
      <div className="relative mx-auto grid min-h-[620px] max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:min-h-[680px] lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-gold">
            Fornecedor B2B de camarão salgado • Desde {company.foundingYear}
          </p>
          <h1 className="mt-6 font-serif text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
            {company.publicBrand}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/84">{company.businessDescription}</p>
          <div className="mt-8 grid max-w-2xl gap-3 text-sm text-white/76 sm:grid-cols-2">
            <div className="rounded-brand border border-white/14 bg-white/8 p-4 backdrop-blur">
              <span className="block text-xs font-bold uppercase tracking-[0.18em] text-brand-gold">Razão social</span>
              <strong className="mt-2 block text-white">{company.legalName}</strong>
            </div>
            <div className="rounded-brand border border-white/14 bg-white/8 p-4 backdrop-blur">
              <span className="block text-xs font-bold uppercase tracking-[0.18em] text-brand-gold">CNPJ</span>
              <strong className="mt-2 block text-white">{company.cnpj}</strong>
            </div>
          </div>
        </div>

        <aside className="rounded-brand border border-brand-gold/30 bg-brand-deep/84 p-5 shadow-premium backdrop-blur">
          <Image
            src="/images/logo-central-camarao.jpeg"
            alt="Logo Central do Camarão"
            width={140}
            height={140}
            priority
            quality={70}
            sizes="112px"
            className="mx-auto h-28 w-28 rounded-full border border-brand-gold/40 object-cover"
          />
          <div className="mt-6 divide-y divide-white/10 text-sm">
            <div className="py-4">
              <span className="text-white/56">Produto principal</span>
              <p className="mt-1 font-semibold text-white">{company.mainProduct}</p>
            </div>
            <div className="py-4">
              <span className="text-white/56">Distribuição mensal</span>
              <p className="mt-1 font-semibold text-white">{company.operationVolume}</p>
            </div>
            <div className="py-4">
              <span className="text-white/56">Regiões atendidas</span>
              <p className="mt-1 font-semibold text-white">
                Pará, Santa Catarina, São Paulo e outros estados sob consulta
              </p>
            </div>
            <div className="pt-4">
              <span className="text-white/56">Contato oficial</span>
              <p className="mt-1 font-semibold text-white">{company.whatsapp}</p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
