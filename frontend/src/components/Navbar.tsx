'use client';

import Link from 'next/link';
import Image from 'next/image';

export function Navbar() {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo-sm.png"
              alt="CaseritoAI"
              width={48}
              height={48}
              className="w-12 h-12"
              priority
            />
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
