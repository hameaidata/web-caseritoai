'use client';

import { Check, Smartphone, Users, Building2, Store } from 'lucide-react';

const PLANS = [
  {
    name: 'Bodega Familiar',
    price: '40',
    devices: 1,
    icon: Smartphone,
    features: [
      'Clientes y fiados ilimitados',
      'Proveedores y compras ilimitadas',
      'Operaciones por voz con IA',
      'Reportes PDF y Excel ejecutivos',
    ],
    highlighted: true,
  },
  {
    name: 'Local (3 dispositivos)',
    price: '100',
    devices: 3,
    icon: Users,
    features: [
      'Clientes y fiados ilimitados',
      'Proveedores y compras ilimitadas',
      'Operaciones por voz con IA',
      'Reportes PDF y Excel ejecutivos',
      'Gestión de usuarios por rol',
      'Soporte prioritario',
    ],
  },
  {
    name: 'Local (5 dispositivos)',
    price: '160',
    devices: 5,
    icon: Building2,
    features: [
      'Clientes y fiados ilimitados',
      'Proveedores y compras ilimitadas',
      'Operaciones por voz con IA',
      'Reportes PDF y Excel ejecutivos',
      'Gestión de usuarios por rol',
      'Personalización (logo/colores)',
    ],
  },
  {
    name: 'Empresa',
    price: '290',
    devices: 10,
    icon: Store,
    features: [
      'Clientes y fiados ilimitados',
      'Proveedores y compras ilimitadas',
      'Operaciones por voz con IA',
      'Reportes PDF y Excel ejecutivos',
      'Analytics avanzado',
      'Soporte VIP 24/7',
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Elige tu plan</h2>
          <p className="text-slate-600">Un precio por mes · Cancela cuando quieras</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {PLANS.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.name}
                className={`rounded-2xl p-6 border-2 transition-all ${
                  plan.highlighted
                    ? 'border-emerald-600 bg-white shadow-lg'
                    : 'border-slate-200 bg-white'
                }`}
              >
                <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-slate-700" />
                </div>

                <h3 className="text-lg font-bold mb-2">{plan.name}</h3>
                <p className="text-xs text-slate-500 mb-4">{plan.devices} celular{plan.devices > 1 ? 'es' : ''}</p>

                <div className="mb-6">
                  <span className="text-3xl font-extrabold">S/{plan.price}</span>
                  <span className="text-slate-600 text-sm">/mes</span>
                </div>

                <a
                  href={`/checkout?plan=${plan.name.toLowerCase().replace(/\s+/g, '_')}`}
                  className={`w-full py-2.5 rounded-lg font-bold mb-6 transition-colors text-sm block text-center ${
                    plan.highlighted
                      ? 'bg-[#2C4257] text-white hover:bg-opacity-90'
                      : 'border border-[#E5E3DF] text-[#0F172A] hover:border-[#2C4257]'
                  }`}
                >
                  Elegir plan
                </a>

                <ul className="space-y-2.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-slate-600">
                      <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200 text-center mb-8">
          <p className="text-slate-700">
            <strong>Bodega Familiar · 1 dispositivo(s) · S/39.90/mes</strong>
          </p>
          <p className="text-sm text-slate-500 mt-2">
            Primer mes con descuento. Cancela cuando quieras.
          </p>
        </div>

        <div className="text-center text-sm text-slate-600">
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
