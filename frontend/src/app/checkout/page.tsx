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

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FAFAF9]" />}>
      <CheckoutContent />
    </Suspense>
  );
}
