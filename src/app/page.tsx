import { BusinessInfo } from "@/components/sections/BusinessInfo";
import { BusinessNumbers } from "@/components/sections/BusinessNumbers";
import { CompanyPresentation } from "@/components/sections/CompanyPresentation";
import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import { Highlights } from "@/components/sections/Highlights";
import { MapAndContact } from "@/components/sections/MapAndContact";
import { OurStructure } from "@/components/sections/OurStructure";
import { PickupLocation } from "@/components/sections/PickupLocation";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { RegionsServed } from "@/components/sections/RegionalPricing";
import { RealGallery } from "@/components/sections/SocialProof";

export default function Home() {
  return (
    <main>
      <Hero />
      <CompanyPresentation />
      <ProductShowcase />
      <BusinessNumbers />
      <RegionsServed />
      <Highlights />
      <OurStructure />
      <RealGallery />
      <PickupLocation />
      <BusinessInfo />
      <Faq />
      <MapAndContact />
    </main>
  );
}
