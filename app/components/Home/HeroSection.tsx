import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 pt-2">
      <div className="flex flex-col items-center md:flex-row gap-8 w-full">
        <div className="md:w-1/2 px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-black">
            Bienvenidos a <span className="text-[#0B315B]">TenisLand</span>
          </h1>
          <p className="text-lg mb-6 text-gray-800">
            Somos tu tienda especializada en productos para tenis, pádel y
            deportes de raqueta en San Isidro.
          </p>
          <p className="text-md mb-8 text-gray-700">
            Ofrecemos una amplia variedad de artículos nuevos y usados con
            garantía, asesoramiento personalizado y los mejores precios del
            mercado.
          </p>
          <div className="flex flex-wrap gap-4 ">
            <Link
              href="/ubicacion"
              className="px-6 py-3 bg-[#0B315B] text-white rounded-md hover:bg-blue-800 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              aria-label="Ver ubicación de la tienda"
            >
              Visitanos
            </Link>
            <Link
              href="/contacto"
              className="px-6 py-3 border border-[#0B315B] text-[#0B315B] rounded-md hover:bg-blue-50 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              aria-label="Contactar a TenisLand"
            >
              Contactanos
            </Link>
          </div>
        </div>
        {/* Contenedor de la imagen con altura mínima */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <div className="relative w-full h-64 min-h-[200px] md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/hero-image.jpg"
              alt="Tienda TenisLand con raquetas y productos deportivos"
              width={600}
              height={400}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
