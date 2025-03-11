export default function FaqSection() {
  const faqs = [
    {
      question: "¿Compran raquetas usadas?",
      answer: "Sí, compramos raquetas usadas en buen estado. Evaluamos cada raqueta individualmente en función de su estado, marca y modelo para ofrecer un precio justo."
    },
    {
      question: "¿Cuánto demora el servicio de encordado?",
      answer: "Generalmente, el servicio de encordado se realiza en 24-48 horas, dependiendo de la demanda. Para casos urgentes, consulta por nuestro servicio express."
    },
    {
      question: "¿Tienen envío a domicilio?",
      answer: "Realizamos envíos a todo el país a través de Mercado Libre. Para consultas sobre envíos directos, contactanos por WhatsApp o en nuestras redes sociales."
    },
    {
      question: "¿Ofrecen garantía en productos usados?",
      answer: "Sí, todos nuestros productos usados pasan por un control de calidad y ofrecemos garantía sobre posibles defectos no declarados en el momento de la compra."
    },
    {
      question: "¿Aceptan medios de pago electrónicos?",
      answer: "Aceptamos tarjetas de crédito, débito, transferencias bancarias y efectivo. En nuestras ventas por Mercado Libre podés utilizar todos los medios de pago disponibles en la plataforma."
    },
    {
      question: "¿Cuál es el tiempo de entrega?",
      answer: "Nuestros envíos a Capital Federal y Gran Buenos Aires se realizan en 24-48 horas hábiles. Para el resto del país, el tiempo estimado es de 3-5 días hábiles."
    },
    {
      question: "¿Puedo cambiar o devolver un producto?",
      answer: "Sí, tenés 10 días desde la recepción para cambiar o devolver cualquier producto. El artículo debe estar en perfectas condiciones y con su embalaje original."
    },
    {
      question: "¿Ofrecen asesoramiento personalizado?",
      answer: "Sí, nuestro equipo está compuesto por profesionales del tenis que pueden asesorarte en la elección de tu equipamiento. Contactanos por WhatsApp o acercate a nuestra tienda física."
    },
    {
      question: "¿Realizan envíos internacionales?",
      answer: "No se realizan envios al exterior."
    }
  ];

  return (
    <section id="preguntas-frecuentes" className="py-12 md:py-16 pb-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center text-black">Preguntas Frecuentes</h2>
      <p className="text-gray-700 mb-8 text-center max-w-2xl mx-auto">
        Respuestas a las consultas más habituales de nuestros clientes.
      </p>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="px-4 mb-6 border-b border-gray-200 pb-6 last:border-b-0">
            <h3 className="text-xl font-semibold mb-2 text-[#0B315B]">{faq.question}</h3>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  )
}