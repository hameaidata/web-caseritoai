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

export default function CheckoutPage() {
  return (
    <Suspense fallback={<CheckoutFallback />}>
      <CheckoutContent />
    </Suspense>
  );
}
