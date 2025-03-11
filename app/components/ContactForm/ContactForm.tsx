/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Validación básica
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        error: true,
      });
      return;
    }

    // Aquí iría la lógica para enviar el formulario a un backend
    // Por ejemplo, usando fetch para una API

    // Simulamos éxito
    setFormStatus({
      submitted: true,
      error: false,
    });

    // Reseteamos el formulario después de 3 segundos
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setTimeout(() => {
      setFormStatus({
        submitted: false,
        error: false,
      });
    }, 6000);
  };

  return (
    <div className="contact-form">
      {formStatus.submitted && !formStatus.error ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          <p className="font-medium">¡Mensaje enviado con éxito!</p>
          <p>Nos pondremos en contacto con vos lo antes posible</p>
        </div>
      ) : null}

      {formStatus.submitted && formStatus.error ? (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <p className="font-medium">Error al enviar el mensaje</p>
          <p>Por favor completa todos los campos requeridos.</p>
        </div>
      ) : null}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-2"
          >
            Nombre <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0B315B] focus:border-transparent"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0B315B] focus:border-transparent"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-gray-700 font-medium mb-2"
          >
            Teléfono
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0B315B] focus:border-transparent"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="subject"
            className="block text-gray-700 font-medium mb-2"
          >
            Asunto
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0B315B] focus:border-transparent"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-gray-700 font-medium mb-2"
          >
            Mensaje <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0B315B] focus:border-transparent resize-none"
            required
          ></textarea>
        </div>

        <div className="flex items-center">
          <button
            type="submit"
            className="px-6 py-2 bg-[#0B315B] text-white font-medium rounded-md hover:bg-[#072444] transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0B315B]"
          >
            Enviar mensaje
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
