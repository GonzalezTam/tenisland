"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative bg-white shadow-md" aria-label="Navegación principal">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center"
            aria-label="Ir a la página principal"
          >
            <Image
              src="/logo.png"
              alt="Logo TenisLand"
              width={70}
              height={70}
              className="mr-2"
            />
            <span className="text-xl font-bold text-[#0B315B]">TenisLand</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <Link
              href="/"
              className="text-gray-800 hover:text-[#0B315B] transition px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              aria-current="page"
            >
              Inicio
            </Link>
            <Link
              href="/ubicacion"
              className="text-gray-800 hover:text-[#0B315B] transition px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Ubicación
            </Link>
            <Link
              href="/contacto"
              className="text-gray-800 hover:text-[#0B315B] transition px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Contacto
            </Link>
            <Link
              passHref={true}
              href="https://tenisland.mercadoshops.com.ar/"
              target="_blank"
              className="bg-[#0B315B] text-white px-4 py-1 rounded-md hover:bg-blue-800 transition focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Tienda Online
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center p-2 rounded-md text-gray-800 hover:text-[#0B315B] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-300"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </nav>
  );
}
