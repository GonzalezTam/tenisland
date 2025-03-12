import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ubicación",
  description:
    "Encuentra nuestra tienda de artículos deportivos para tenis, pádel y deportes de raqueta en San Isidro, Buenos Aires.",
};

export default function UbicacionPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[#0B315B] text-center md:text-left lg:text-left">
        Nuestra Ubicación
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-12">
        <div>
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Dirección</h2>
            <address className="not-italic mb-4 text-gray-700">
              <p className="mb-2">Av. Santa Fe 1676</p>
              <p className="mb-2">San Isidro, Buenos Aires</p>
              <p className="mb-2">CP 1640</p>
              <p>Argentina</p>
            </address>

            <h2 className="text-xl font-semibold mb-4 mt-6">
              Horarios de Atención
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>
                <span className="font-medium">Lunes a Viernes:</span> 9:30 -
                20:00
              </li>
              <li>
                <span className="font-medium">Sábados:</span> 9:00 - 19:00
              </li>
              <li>
                <span className="font-medium">Domingos y Feriados:</span>{" "}
                Cerrado
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Cómo Llegar</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-medium mb-2">En transporte público:</h3>
                <p>
                  Colectivos: 9, 21, 29, 60, 68, 152, 161, 203, 314, 343.
                </p>
                <p>Estacion de tren de MARTINEZ (Linea Mitre) a 500m.</p>
              </div>

              <div>
                <h3 className="font-medium mb-2">En auto:</h3>
                <p>
                  Estacionamiento disponible en la zona con parquímetros. Te
                  recomendamos utilizar el estacionamiento privado de calle
                  Cordoba 1240, a media cuadra de nuestro negocio.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-96 md:h-full min-h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3288.622858185585!2d-58.50163119999999!3d-34.4870905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb1aeb5bf226d%3A0x8bb76c90db9ebfdc!2sTenisLand!5e0!3m2!1ses-419!2sar!4v1741712009804!5m2!1ses-419!2sar"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de TenisLand en San Isidro"
            aria-label="Mapa mostrando la ubicación de TenisLand en San Isidro"
          />
        </div>
      </div>
    </div>
  );
}
