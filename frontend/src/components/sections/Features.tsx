'use client';

import {
  Mic,
  PackageSearch,
  FileBarChart2,
  QrCode,
  Users,
  Bell,
} from 'lucide-react';

const FEATURES = [
  {
    icon: Mic,
    title: 'Registro por voz',
    description:
      'Registro de fiados y ventas por voz, sin necesidad de escribir. Habla con naturalidad y la app hace el resto.',
  },
  {
    icon: PackageSearch,
    title: 'Control de stock',
    description:
      'Inventario actualizado con alertas automáticas cuando un producto está por acabarse.',
  },
  {
    icon: FileBarChart2,
    title: 'Reportes claros',
    description:
      'Reportes de ventas diarios, semanales y mensuales, fácilmente descargables en PDF y Excel.',
  },
  {
    icon: QrCode,
    title: 'Cobros con QR',
    description:
      'Cobro con código QR (Yape/Plin) integrado directamente en la aplicación.',
  },
  {
    icon: Users,
    title: 'Gestión de clientes',
    description:
      'Historial completo de clientes y proveedores. Nunca más olvides quién te debe.',
  },
  {
    icon: Bell,
    title: 'Sincronización total',
    description:
      'Notificaciones en tiempo real si un empleado registra una venta. Varios usuarios y dispositivos soportados.',
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Todo lo que necesitas, en tu celular
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            CaseritoAI transcribe y organiza todo automáticamente usando inteligencia artificial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
