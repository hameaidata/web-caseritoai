'use client';

import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#2C4257] rounded-full flex items-center justify-center shadow-lg relative">
              <svg viewBox="0 0 100 120" className="w-7 h-7" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Candado trapezoidal */}
                {/* Asa superior */}
                <path d="M 35 35 Q 35 20 50 20 Q 65 20 65 35" stroke="#E7EBEE" strokeWidth="6" fill="none" strokeLinecap="round"/>
                {/* Cuerpo trapezoidal */}
                <path d="M 30 40 L 25 55 Q 25 85 50 90 Q 75 85 75 55 L 70 40 Z" fill="#E7EBEE"/>
                {/* Línea horizontal divisoria */}
                <line x1="28" y1="60" x2="72" y2="60" stroke="#2C4257" strokeWidth="4" strokeLinecap="round"/>
                {/* WiFi dorado en esquina superior derecha */}
                <path d="M 65 25 Q 68 22 71 25" stroke="#A97A35" strokeWidth="3" fill="none" strokeLinecap="round"/>
                <path d="M 62 28 Q 67 20 72 28" stroke="#A97A35" strokeWidth="3" fill="none" strokeLinecap="round"/>
                <path d="M 59 31 Q 66 18 73 31" stroke="#A97A35" strokeWidth="3" fill="none" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="font-bold text-xl tracking-tight text-[#0F172A]">
              Caserito<span className="text-[#2C4257]">AI</span>
            </span>
          </Link>

          <div className="hidden md:flex space-x-8">
            <a
              href="#features"
              className="text-slate-600 hover:text-emerald-600 font-medium transition-colors"
            >
              Funcionalidades
            </a>
            <a
              href="#pricing"
              className="text-slate-600 hover:text-emerald-600 font-medium transition-colors"
            >
              Precios
            </a>
            <a
              href="#faq"
              className="text-slate-600 hover:text-emerald-600 font-medium transition-colors"
            >
              FAQ
            </a>
          </div>

          <a
            href="#pricing"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-full font-semibold transition-colors shadow-sm text-sm"
          >
            Prueba gratis 14 días
          </a>
        </div>
      </div>
    </nav>
  );
}
