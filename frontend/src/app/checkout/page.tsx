'use client';

import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Checkout } from '@/components/Checkout';

export default function CheckoutPage() {
  const [selectedPlan, setSelectedPlan] = useState<'familiar' | 'local' | 'empresa'>('familiar');
  const [showCheckout, setShowCheckout] = useState(false);

  const plans = {
    familiar: {
      name: 'Bodega Familiar',
      price: 29.90,
      description: 'Para bodegueros que operan solos',
      devices: '1 dispositivo',
      features: [
        'Registro de ventas sin límite',
        'Gestión de fiados completa',
        'Inventario automático',
        'Reportes PDF/Excel',
        'Soporte por email',
      ],
    },
    local: {
      name: 'Local',
      price: 49.90,
      description: 'Para tiendas con pequeño equipo',
      devices: '3-5 dispositivos',
      features: [
        'Todo de Bodega Familiar',
        'Gestión de usuarios por rol',
        'Alertas de stock en tiempo real',
        'Personalización (logo/colores)',
        'Soporte prioritario',
      ],
    },
    empresa: {
      name: 'Empresa',
      price: 79.90,
      description: 'Para mercados y negocios grandes',
      devices: '10 dispositivos',
      features: [
        'Todo de Local',
        'Analytics avanzado',
        'Reportes personalizados',
        'API para integraciones',
        'Soporte VIP 24/7',
      ],
    },
  };

  const currentPlan = plans[selectedPlan];

  if (showCheckout) {
    return (
      <>
        <Navbar />
        <Checkout
          plan={selectedPlan}
          planData={currentPlan}
          onBack={() => setShowCheckout(false)}
        />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-20 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Elige tu plan
            </h1>
            <p className="text-xl text-slate-600">
              Todos los planes incluyen 14 días de prueba gratis
            </p>
          </div>

          {/* Plans Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {Object.entries(plans).map(([key, plan]) => (
              <div
                key={key}
                className={`rounded-lg border-2 p-8 transition-all cursor-pointer ${
                  selectedPlan === key
                    ? 'border-blue-500 bg-blue-50 shadow-lg'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
                onClick={() => setSelectedPlan(key as 'familiar' | 'local' | 'empresa')}
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-slate-600 text-sm mb-4">{plan.description}</p>

                <div className="mb-6">
                  <div className="text-4xl font-bold text-blue-600">
                    S/ {plan.price.toFixed(2)}
                  </div>
                  <div className="text-sm text-slate-600 mt-2">/mes • {plan.devices}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-green-500 mr-3">✓</span>
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    selectedPlan === key
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                  }`}
                  onClick={() => {
                    setSelectedPlan(key as 'familiar' | 'local' | 'empresa');
                    setShowCheckout(true);
                  }}
                >
                  {selectedPlan === key ? 'Plan seleccionado' : 'Seleccionar'}
                </button>
              </div>
            ))}
          </div>

          {/* Confirmation Section */}
          {selectedPlan && (
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Resumen del pedido
              </h2>
              <p className="text-slate-600 mb-6">
                Has seleccionado <strong>{currentPlan.name}</strong>
              </p>
              <div className="bg-white rounded-lg p-6 mb-6 inline-block">
                <p className="text-slate-600 mb-2">Precio mensual</p>
                <p className="text-3xl font-bold text-blue-600">
                  S/ {currentPlan.price.toFixed(2)}
                </p>
              </div>
              <button
                onClick={() => setShowCheckout(true)}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all"
              >
                💳 Continuar con el pago
              </button>
            </div>
          )}

          {/* Info Box */}
          <div className="mt-16 bg-amber-50 border-l-4 border-amber-500 p-6 rounded">
            <h3 className="font-semibold text-amber-900 mb-2">ℹ️ Información importante</h3>
            <ul className="text-amber-800 text-sm space-y-2">
              <li>✓ Todos los planes incluyen 14 días de prueba gratis</li>
              <li>✓ Sin necesidad de tarjeta de crédito para el trial</li>
              <li>✓ Puedes cancelar en cualquier momento</li>
              <li>✓ La suscripción se activa en tu app CaseritoAI</li>
              <li>✓ Soporte 24/7 disponible para todas las preguntas</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
