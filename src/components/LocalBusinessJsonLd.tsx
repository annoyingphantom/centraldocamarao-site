import { company, products, regionsServed } from "@/data/company";
import { absoluteUrl } from "@/lib/site";

export function LocalBusinessJsonLd() {
  const graph = [
    {
      "@type": "Organization",
      "@id": absoluteUrl("/#organization"),
      name: company.legalName,
      alternateName: [company.publicBrand, company.tradeName],
      legalName: company.legalName,
      taxID: company.cnpj,
      foundingDate: "2019-11-22",
      url: absoluteUrl("/"),
      logo: absoluteUrl("/images/logo-central-camarao.jpeg"),
      image: absoluteUrl("/images/og-central-camarao.jpg"),
      email: company.email,
      telephone: company.phone,
      sameAs: [company.instagramUrl, company.facebookUrl, company.whatsappUrl],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: company.phone,
          contactType: "customer service",
          areaServed: "BR",
          availableLanguage: ["pt-BR"],
          url: company.whatsappUrl,
        },
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": absoluteUrl("/#localbusiness"),
      name: company.legalName,
      alternateName: [company.publicBrand, company.tradeName],
      legalName: company.legalName,
      identifier: company.cnpj,
      taxID: company.cnpj,
      url: absoluteUrl("/"),
      logo: absoluteUrl("/images/logo-central-camarao.jpeg"),
      image: [absoluteUrl("/images/og-central-camarao.jpg"), absoluteUrl("/images/hero-camarao-real.jpg")],
      description: company.businessDescription,
      telephone: company.phone,
      email: company.email,
      foundingDate: "2019-11-22",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rua Bolívia, 61",
        addressLocality: "Ananindeua",
        addressRegion: "PA",
        postalCode: "67115-120",
        addressCountry: "BR",
      },
      hasMap: company.googleMapsSearchUrl,
      openingHours: "Mo-Fr 08:00-17:00",
      areaServed: regionsServed.map((region) => region.name),
      priceRange: "Sob consulta",
      parentOrganization: {
        "@id": absoluteUrl("/#organization"),
      },
      makesOffer: {
        "@type": "OfferCatalog",
        name: "Camarão salgado no atacado",
        itemListElement: products.map((product) => ({
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "BRL",
            description: "Preço sob consulta comercial pelo WhatsApp oficial.",
          },
          itemOffered: {
            "@type": "Product",
            name: product.title,
            image: absoluteUrl(product.image),
            brand: {
              "@type": "Brand",
              name: company.publicBrand,
            },
          },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": absoluteUrl("/#website"),
      url: absoluteUrl("/"),
      name: company.publicBrand,
      publisher: {
        "@id": absoluteUrl("/#organization"),
      },
      inLanguage: "pt-BR",
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c") }}
    />
  );
}

