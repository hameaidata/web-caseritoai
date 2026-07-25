'use client';

import { Smartphone, PlayCircle } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
        El asistente digital <br className="hidden md:block" />
        <span className="gradient-text">para tu bodega</span>
      </h1>

      <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
        Lleva el control de tus fiados, ventas, compras y stock hablando — como si le dictaras a un cuaderno, pero sin errores, sin olvidos y sin cuentas que no cuadran.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
        <a
          href="#pricing"
          className="btn-primary flex items-center justify-center gap-2"
        >
          <Smartphone className="w-5 h-5" /> Prueba gratis 14 días
        </a>
        <a
          href="#how-it-works"
          className="btn-secondary flex items-center justify-center gap-2"
        >
          <PlayCircle className="w-5 h-5 text-emerald-600" /> Ver cómo funciona
        </a>
      </div>
    </section>
  );
}
