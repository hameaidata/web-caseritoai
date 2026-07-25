'use client';

import { Check } from 'lucide-react';

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Planes y precios</h2>
          <p className="text-slate-600">Transparencia total. Sin costos ocultos.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Trial */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-bold mb-2">Prueba gratuita</h3>
            <div className="text-4xl font-extrabold mb-6">
              14 días <span className="text-lg text-slate-500 font-normal">gratis</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-slate-700">
                <Check className="text-emerald-600 flex-shrink-0" />
                Sin necesidad de ingresar tarjeta
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <Check className="text-emerald-600 flex-shrink-0" />
                Hasta 10 operaciones por día
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <Check className="text-emerald-600 flex-shrink-0" />
                Acceso a funcionalidades básicas
              </li>
            </ul>
            <button className="w-full py-3 rounded-xl font-bold border-2 border-slate-200 text-slate-700 hover:border-emerald-600 hover:text-emerald-600 transition-colors">
              Iniciar prueba
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-emerald-600 rounded-3xl p-8 border border-emerald-500 shadow-xl text-white relative transform md:-translate-y-4">
            <div className="absolute top-0 right-6 transform -translate-y-1/2 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              Recomendado
            </div>
            <h3 className="text-2xl font-bold mb-2 text-emerald-50">Plan Pro</h3>
            <div className="text-4xl font-extrabold mb-6">
              S/ 29.00{' '}
              <span className="text-lg text-emerald-200 font-normal">/mes por disp.</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <Check className="text-yellow-400 flex-shrink-0" />
                Operaciones ilimitadas
              </li>
              <li className="flex items-center gap-3">
                <Check className="text-yellow-400 flex-shrink-0" />
                Todos los reportes incluidos
              </li>
              <li className="flex items-center gap-3">
                <Check className="text-yellow-400 flex-shrink-0" />
                Soporte técnico incluido
              </li>
            </ul>
            <button className="w-full py-3 rounded-xl font-bold bg-white text-emerald-700 hover:bg-emerald-50 transition-colors shadow-md">
              Suscribirse ahora
            </button>
          </div>
        </div>

        <div className="text-center mt-8 text-sm text-slate-500">
          ¿Tienes varios locales o empleados? Tenemos precios preferenciales.{' '}
          <a
            href="mailto:hameaidata@gmail.com"
            className="text-emerald-600 font-semibold underline hover:no-underline"
          >
            Escríbenos para una cotización
          </a>
          .
        </div>
      </div>
    </section>
  );
}
