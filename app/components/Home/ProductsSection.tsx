import Image from "next/image";

export default function ProductsSection() {
  const products = [
    {
      title: "Raquetas",
      description: "Nuevas y usadas para tenis, pádel, etc.",
      imageSrc: "/images/products/racquets.jpg",
      imageAlt: "Variedad de raquetas de tenis y pádel",
    },
    {
      title: "Pelotas",
      description: "Para tenis, pádel y otros deportes.",
      imageSrc: "/images/products/balls.jpg",
      imageAlt: "Pelotas de tenis y otros deportes",
    },
    {
      title: "Indumentaria",
      description: "Remeras, shorts, calzas, zapatillas y más.",
      imageSrc: "/images/products/sport-wear.jpg",
      imageAlt: "Indumentaria deportiva para tenis y pádel",
    },
    {
      title: "Accesorios",
      description: "Grips, antivibradores, encordados y más.",
      imageSrc: "/images/products/grips.jpg",
      imageAlt: "Accesorios para deportes de raqueta",
    },
  ];

  return (
    <section id="productos" className="py-8 md:py-16 bg-gray-50 border-t border-gray-200">
      <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center text-black">
        Nuestros Productos
      </h2>
      <p className="text-gray-700 mb-8 text-center max-w-2xl mx-auto">
        En TenisLand encontrarás todo lo que necesitas para tu deporte favorito.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <div className="relative h-48">
              <Image
                src={product.imageSrc}
                alt={product.imageAlt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-[#0B315B]">
                {product.title}
              </h3>
              <p className="text-gray-700">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
