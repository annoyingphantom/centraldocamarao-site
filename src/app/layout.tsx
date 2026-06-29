import type { Metadata, Viewport } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieNotice } from "@/components/CookieNotice";
import { LocalBusinessJsonLd } from "@/components/LocalBusinessJsonLd";
import { company } from "@/data/company";
import { absoluteUrl, siteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Central do Camarão | Distribuição de camarão salgado no atacado",
    template: "%s | Central do Camarão",
  },
  description:
    "Site oficial da Central do Camarão, marca de CAOA R F CAMARAO NO ATACADO EIRELI. Distribuição de camarão salgado para restaurantes, buffets, mercados, distribuidores e revendedores.",
  applicationName: company.publicBrand,
  keywords: [
    "Central do Camarão",
    "CAOA R F CAMARAO NO ATACADO EIRELI",
    "JR CAMARAO NO ATACADO",
    "camarão salgado no atacado",
    "distribuição de camarão salgado",
    "camarão salgado 12g atacado",
    "fornecedor de camarão salgado",
    "camarão Pará",
    "camarão São Paulo",
    "camarão Santa Catarina",
  ],
  authors: [{ name: company.publicBrand }],
  creator: company.publicBrand,
  publisher: company.legalName,
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: absoluteUrl("/"),
    siteName: company.publicBrand,
    title: "Central do Camarão | Distribuição de camarão salgado no atacado",
    description: company.businessDescription,
    images: [
      {
        url: absoluteUrl("/images/og-central-camarao.jpg"),
        width: 1200,
        height: 630,
        alt: "Central do Camarão - fornecedor B2B de camarão salgado desde 2019",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Central do Camarão | Camarão salgado no atacado",
    description: company.businessDescription,
    images: [absoluteUrl("/images/og-central-camarao.jpg")],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/icon-192.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#003040",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased">
        <LocalBusinessJsonLd />
        <Header />
        {children}
        <Footer />
        <CookieNotice />
      </body>
    </html>
  );
}
