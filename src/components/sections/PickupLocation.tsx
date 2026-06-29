import { ExternalLink, MapPin } from "lucide-react";
import { company } from "@/data/company";
import { SectionHeading } from "@/components/SectionHeading";

export function PickupLocation() {
  return (
    <section id="retirada" className="bg-brand-cream py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Local de retirada"
            title="Ponto de retirada em Ananindeua/PA."
            text="Endereço informado para retirada na região de Belém/PA. As condições de entrega e retirada devem ser confirmadas pelo atendimento oficial antes do pedido."
          />
          <div className="mt-8 rounded-brand border border-brand-navy/10 bg-white p-6 shadow-soft">
            <MapPin className="h-7 w-7 text-brand-orange" aria-hidden="true" />
            <p className="mt-4 text-lg font-bold text-brand-ink">{company.address}</p>
            <p className="mt-2 text-sm leading-7 text-brand-ink/66">Horário de retirada: {company.pickupHours}</p>
            <a
              href={company.googleBusinessProfileUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-navy transition hover:text-brand-orange"
            >
              Abrir perfil no Google Maps
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <div className="mt-4 rounded-brand border border-brand-gold/30 bg-white p-5 text-sm leading-7 text-brand-ink/68">
            <strong className="text-brand-ink">Perfil no Google Maps:</strong>{" "}
            <a href={company.googleBusinessProfileUrl} target="_blank" rel="noreferrer" className="font-bold text-brand-navy transition hover:text-brand-orange">
              Ver no Google Maps
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-brand border border-brand-navy/10 bg-white shadow-premium">
          <iframe
            title="Mapa do ponto de retirada da Central do Camarão"
            src={company.googleMapsEmbedUrl}
            className="h-[460px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
