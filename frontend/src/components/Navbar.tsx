'use client';

import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center shadow-lg relative">
              <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="white" strokeWidth="1.5">
                {/* Candado trapezoidal */}
                <path d="M7 11h10V9c0-1.5.5-3 3-3s3 1.5 3 3v2h1c1 0 1 1 1 2v7c0 1-1 1-1 1H6c-1 0-1 0-1-1v-7c0-1 0-2 1-2h1zm2-2V9c0-1 .5-2.5 2-2.5s2 1.5 2 2.5v2z" />
                {/* Asa */}
                <circle cx="12" cy="8" r="2" fill="white" />
                {/* WiFi en esquina superior derecha */}
                <path d="M18 6c.5.5 1 1 1.5 1.5M18 7c.3.3.6.6 1 1" strokeLinecap="round" />
              </svg>
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-800">
              Caserito<span className="text-blue-700">AI</span>
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
