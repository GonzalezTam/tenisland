import HeroSection from "./components/Home/HeroSection";
import ProductsSection from "./components/Home/ProductsSection";
import ServicesSection from "./components/Home/ServicesSection";
import FaqSection from "./components/Home/FaqSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TenisLand - Artículos para Tenis, Pádel y Deportes de Raqueta",
  description:
    "Tienda especializada en venta de artículos para tenis, pádel y deportes de raqueta en San Isidro. Amplia variedad de productos nuevos y usados con asesoramiento personalizado.",
};

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <HeroSection />
      <ProductsSection />
      <ServicesSection />
      <FaqSection />
    </div>
  );
}
