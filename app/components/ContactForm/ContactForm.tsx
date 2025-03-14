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

  const [formErrors, setFormErrors] = useState({
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

  const validateField = (name: string, value: string) => {
    if (
      value.trim() === "" &&
      ["name", "email", "subject", "message"].includes(name)
    ) {
      return "Este campo es obligatorio.";
    }

    switch (name) {
      case "name":
        return /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value)
          ? ""
          : "Solo se permiten letras y espacios.";
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ""
          : "Ingrese un email válido.";
      case "phone":
        return value === "" || /^[0-9]+$/.test(value)
          ? ""
          : "Ingrese solo números.";
      case "subject":
        return /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value)
          ? ""
          : "Solo se permiten letras y espacios.";
      default:
        return "";
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, value),
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const errors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      phone: validateField("phone", formData.phone),
      subject: validateField("subject", formData.subject),
      message: validateField("message", formData.message),
    };

    setFormErrors(errors);

    if (Object.values(errors).some((error) => error)) {
      setFormStatus({ submitted: true, error: true });
      return;
    }

    setFormStatus({ submitted: true, error: false });

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setFormStatus({ submitted: false, error: false });
    }, 6000);
  };

  return (
    <div className="contact-form">
      {formStatus.submitted && !formStatus.error && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          <p className="font-medium">¡Mensaje enviado con éxito!</p>
          <p>Nos pondremos en contacto con vos lo antes posible</p>
        </div>
      )}

      {formStatus.submitted && formStatus.error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <p className="font-medium">Error al enviar el mensaje</p>
          <p>Por favor completa todos los campos requeridos correctamente.</p>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {[
          { label: "Nombre", name: "name", type: "text", required: true },
          { label: "Email", name: "email", type: "email", required: true },
          { label: "Teléfono", name: "phone", type: "tel", required: false },
          { label: "Asunto", name: "subject", type: "text", required: true },
        ].map(({ label, name, type, required }) => (
          <div key={name} className="mb-4">
            <label
              htmlFor={name}
              className="block text-gray-700 font-medium mb-2"
            >
              {label} {required && <span className="text-red-500">*</span>}
            </label>
            <input
              type={type}
              id={name}
              name={name}
              value={formData[name as keyof typeof formData]}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                formErrors[name as keyof typeof formErrors]
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-[#0B315B]"
              }`}
              required={required}
            />
            {formErrors[name as keyof typeof formErrors] && (
              <p className="text-red-500 text-sm mt-1">
                {formErrors[name as keyof typeof formErrors]}
              </p>
            )}
          </div>
        ))}

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
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 resize-none ${
              formErrors.message
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-[#0B315B]"
            }`}
            required
          ></textarea>
          {formErrors.message && (
            <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>
          )}
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
