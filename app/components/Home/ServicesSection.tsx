import Image from "next/image";

export default function ServicesSection() {
  const services = [
    {
      title: "Encordado de Raquetas",
      description:
        "Servicio profesional con diferentes opciones de tensión y tipos de cuerdas.",
      imageSrc: "/images/services/stringing.jpg",
      imageAlt: "Encordado profesional de raquetas",
    },
    {
      title: "Peso y Balanceo",
      description:
        "Ajuste de peso y balance a demanda o segun caracteristicas del jugador.",
      imageSrc: "/images/services/balancing.jpg",
      imageAlt: "Servicio de peso y balanceo de raquetas",
    },
    {
      title: "Reparación de Fisuras",
      description:
        "Reparamos fisuras y daños en el marco de tu raqueta (sujeto a evaluación previa).",
      imageSrc: "/images/services/repairing.jpg",
      imageAlt: "Reparación de fisuras en raquetas",
    },
    {
      title: "Asesoramiento Personalizado",
      description:
        "Te ayudamos a elegir el equipamiento ideal según tu nivel y estilo de juego.",
      imageSrc: "/images/services/consultancy.jpg",
      imageAlt:
        "Asesoramiento personalizado para compra de artículos deportivos",
    },
  ];

  return (
    <section
      id="servicios"
      className="py-8 md:py-16 bg-gray-50 border-gray-200"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center text-black">
          Nuestros Servicios
        </h2>
        <p className="text-gray-700 mb-8 text-center max-w-2xl mx-auto">
          Además de productos de calidad, ofrecemos servicios especializados
          para deportistas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row hover:shadow-lg transition"
            >
              <div className="relative w-full md:w-1/3 h-48 md:h-auto">
                <Image
                  src={service.imageSrc}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4 md:w-2/3">
                <h3 className="text-xl font-semibold mb-2 text-[#0B315B]">
                  {service.title}
                </h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
