'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Coffee } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-[#8B0000] to-[#A52A2A] text-white py-4 shadow-lg">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold flex items-center group">
            <Coffee className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
            <span className="bg-gradient-to-r from-white to-[#FFE4E1] bg-clip-text text-transparent">
              Café Pivaral
            </span>
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link
              href="/"
              className="hover:text-[#FFE4E1] transition-colors duration-300"
            >
              Inicio
            </Link>
            <Link
              href="/cafe-en-grano"
              className="hover:text-[#FFE4E1] transition-colors duration-300"
            >
              Café en Grano
            </Link>
            <Link
              href="/cafe-molido"
              className="hover:text-[#FFE4E1] transition-colors duration-300"
            >
              Café Molido
            </Link>
            <Link
              href="/accesorios"
              className="hover:text-[#FFE4E1] transition-colors duration-300"
            >
              Accesorios
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link
              href="/iniciar-sesion"
              className="bg-[#6B0F1A] hover:bg-[#800000] px-4 py-2 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Iniciar Sesión
            </Link>
            <Link
              href="/registrarse"
              className="bg-[#4A0404] hover:bg-[#590404] px-4 py-2 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg border border-[#FFE4E1]/20"
            >
              Registrarse
            </Link>
          </div>
          <button
            className="md:hidden text-white hover:text-[#FFE4E1] transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        {isMenuOpen && (
          <div className="mt-4 md:hidden bg-[#8B0000]/95 rounded-lg p-4 shadow-xl border border-[#FFE4E1]/10">
            <Link
              href="/"
              className="block py-2 hover:text-[#FFE4E1] transition-colors duration-300"
            >
              Inicio
            </Link>
            <Link
              href="/cafe-en-grano"
              className="block py-2 hover:text-[#FFE4E1] transition-colors duration-300"
            >
              Café en Grano
            </Link>
            <Link
              href="/cafe-molido"
              className="block py-2 hover:text-[#FFE4E1] transition-colors duration-300"
            >
              Café Molido
            </Link>
            <Link
              href="/accesorios"
              className="block py-2 hover:text-[#FFE4E1] transition-colors duration-300"
            >
              Accesorios
            </Link>
            <div className="border-t border-[#FFE4E1]/10 my-2"></div>
            <Link
              href="/iniciar-sesion"
              className="block py-2 hover:text-[#FFE4E1] transition-colors duration-300"
            >
              Iniciar Sesión
            </Link>
            <Link
              href="/registrarse"
              className="block py-2 hover:text-[#FFE4E1] transition-colors duration-300"
            >
              Registrarse
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
