"use client";
import React from "react";
import Link from "next/link";

interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: (state: boolean) => void;
}

export default function MobileMenu({ isOpen, toggleMenu }: MobileMenuProps) {
  if (!isOpen) return null;
  return (
    <div
      className="md:hidden bg-white border-t border-gray-200"
      id="mobile-menu"
    >
      <div className="flex flex-col px-4 pt-2 pb-4 space-y-1">
        <Link
          href="/"
          onClick={() => toggleMenu(false)}
          className="text-gray-800 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium transition"
        >
          Inicio
        </Link>
        <Link
          href="/ubicacion"
          onClick={() => toggleMenu(false)}
          className="text-gray-800 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium transition"
        >
          Ubicación
        </Link>
        <Link
          href="/contacto"
          onClick={() => toggleMenu(false)}
          className="text-gray-800 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium transition"
        >
          Contacto
        </Link>
        <Link
          passHref
          href="https://tenisland.mercadoshops.com.ar/"
          target="_blank"
          className="bg-[#0B315B] text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800 transition"
        >
          Tienda Online
        </Link>
      </div>
    </div>
  );
}
