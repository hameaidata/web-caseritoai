'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { Checkout } from '@/components/Checkout';

const PLANS = {
  bodega_familiar: {
    name: 'Bodega Familiar',
    price: 40,
    description: 'Para bodegueros que operan solos',
    devices: '1 celular',
    features: [
      'Clientes y fiados ilimitados',
      'Proveedores y compras ilimitadas',
      'Operaciones por voz con IA',
      'Reportes PDF y Excel ejecutivos',
    ],
  },
  local_3_dispositivos: {
    name: 'Local (3 dispositivos)',
    price: 100,
    description: 'Para tiendas con pequeño equipo',
    devices: '3 celulares',
    features: [
      'Clientes y fiados ilimitados',
      'Proveedores y compras ilimitadas',
      'Operaciones por voz con IA',
      'Reportes PDF y Excel ejecutivos',
      'Gestión de usuarios por rol',
      'Soporte prioritario',
    ],
  },
  local_5_dispositivos: {
    name: 'Local (5 dispositivos)',
    price: 160,
    description: 'Para tiendas medianas',
    devices: '5 celulares',
    features: [
      'Clientes y fiados ilimitados',
      'Proveedores y compras ilimitadas',
      'Operaciones por voz con IA',
      'Reportes PDF y Excel ejecutivos',
      'Gestión de usuarios por rol',
      'Personalización (logo/colores)',
    ],
  },
  empresa: {
    name: 'Empresa',
    price: 290,
    description: 'Para mercados y negocios grandes',
    devices: '10 celulares',
    features: [
      'Clientes y fiados ilimitados',
      'Proveedores y compras ilimitadas',
      'Operaciones por voz con IA',
      'Reportes PDF y Excel ejecutivos',
      'Analytics avanzado',
      'Soporte VIP 24/7',
    ],
  },
};

function CheckoutContent() {
  const searchParams = useSearchParams();
  const planParam = searchParams.get('plan') || 'bodega_familiar';

  const planData = (PLANS as any)[planParam];

  if (!planData) {
    return (
      <div className="min-h-screen bg-[#FAFAF9] flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#0F172A] mb-4">Plan no encontrado</h1>
          <a href="/" className="text-[#2C4257] hover:underline">
            Volver a inicio
          </a>
        </div>
      </div>
    );
  }

  return (
    <Checkout
      plan={planParam as any}
      planData={planData}
      onBack={() => window.history.back()}
    />
  );
}

function CheckoutFallback() {
  return (
    <div className="min-h-screen bg-[#FAFAF9] flex items-center justify-center px-4 pt-20">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="text-6xl mb-4">📱</div>
          <h1 className="text-3xl font-bold text-[#0F172A] mb-4">
            Paga desde la app
          </h1>
          <p className="text-[#64748B] mb-8">
            Para tu seguridad y mejor experiencia, los pagos se realizan exclusivamente desde la aplicación móvil CaseritoAI.
          </p>
        </div>

        <a
          href="https://play.google.com/store/apps/details?id=com.caseritoai.app"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-[#2C4257] text-white py-4 rounded-lg font-bold hover:bg-opacity-90 transition-all mb-4"
        >
          Descargar en Play Store
        </a>

        <a
          href="/"
          className="block w-full bg-white border border-[#E5E3DF] text-[#0F172A] py-4 rounded-lg font-bold hover:bg-[#FAFAF9] transition-all"
        >
          Volver al inicio
        </a>

        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-[#0F172A]">
            <strong>¿Problemas?</strong><br />
            Contacta a soporte: hameaidata@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}

function CheckoutHeader() {
  return (
    <div className="bg-gradient-to-b from-[#2C4257] to-[#1E2E3D] text-white py-12 mb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h1 className="text-3xl font-bold mb-2">CaseritoAI</h1>
            <p className="text-[#A97A35] text-sm">
              Ayudando a las bodegas del Perú a dejar el cuaderno atrás
            </p>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-bold mb-3 text-lg">Contacto</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>📧 hameaidata@gmail.com</li>
              <li>📱 +51 975682160</li>
              <li>🌐 caseritoai.hameraidata.com</li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="font-bold mb-3 text-lg">Empresa</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>hameraidata</li>
              <li>RUC: 10481247387</li>
              <li>Operaciones: Online</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      <CheckoutHeader />
      <Suspense fallback={<CheckoutFallback />}>
        <CheckoutContent />
      </Suspense>

      {/* Planes disponibles */}
      <div className="bg-white py-12 border-t border-[#E5E3DF]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0F172A] mb-8 text-center">
            O elige otro plan
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {Object.entries(PLANS).map(([key, plan]) => (
              <a
                key={key}
                href={`/checkout?plan=${key}`}
                className="p-6 border border-[#E5E3DF] rounded-lg hover:border-[#2C4257] hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-[#0F172A] mb-2">{plan.name}</h3>
                <p className="text-2xl font-bold text-[#2C4257] mb-4">S/ {plan.price}</p>
                <p className="text-sm text-[#64748B]">{plan.devices}</p>
                <button className="w-full mt-4 py-2 border border-[#2C4257] text-[#2C4257] rounded-lg font-semibold hover:bg-[#2C4257] hover:text-white transition-all text-sm">
                  Seleccionar
                </button>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Legal */}
      <div className="bg-[#2C4257] text-slate-300 py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm">
          <p className="mb-4">&copy; 2026 CaseritoAI. Todos los derechos reservados.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/terminos" className="hover:text-white">Términos</a>
            <span>·</span>
            <a href="/privacidad" className="hover:text-white">Privacidad</a>
            <span>·</span>
            <a href="/reembolsos" className="hover:text-white">Reembolsos</a>
            <span>·</span>
            <a href="/reclamaciones" className="hover:text-white">Reclamaciones</a>
          </div>
        </div>
      </div>
    </div>
  );
}
