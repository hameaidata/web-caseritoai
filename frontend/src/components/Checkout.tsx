'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, Loader } from 'lucide-react';

interface CheckoutProps {
  plan: 'familiar' | 'local' | 'empresa';
  planData: {
    name: string;
    price: number;
    description: string;
    devices: string;
    features: string[];
  };
  onBack: () => void;
}

declare global {
  interface Window {
    Culqi: any;
  }
}

export function Checkout({ plan, planData, onBack }: CheckoutProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // Cargar Culqi
    const script = document.createElement('script');
    script.src = 'https://checkout.culqi.com/js/v4';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = async () => {
    if (!email) {
      setError('Por favor ingresa tu email');
      return;
    }

    if (!window.Culqi) {
      setError('Culqi no se ha cargado. Por favor intenta de nuevo.');
      return;
    }

    // Configurar Culqi
    const publicKey = process.env.NEXT_PUBLIC_CULQI_PUBLIC_KEY || 'pk_test_xxx';

    if (!publicKey || publicKey === 'pk_test_xxx') {
      setError('Error: Culqi no está configurado. Contacta a soporte.');
      return;
    }

    window.Culqi.publicKey = publicKey;

    const checkout = window.Culqi.checkout({
      title: `CaseritoAI - ${planData.name}`,
      currency: 'PEN',
      amount: Math.round(planData.price * 100), // En centavos
      description: `Suscripción mensual - ${planData.name}`,
      order: `order_${Date.now()}`,
      client_email: email,
      img: 'https://caserito.hameraidata.com/logo.png',
      modal: true,
      autoclose: false,
    });

    checkout.open();
  };

  // Escuchar respuesta de Culqi
  useEffect(() => {
    const handleCheckoutFormResponse = async (event: any) => {
      if (event.detail && event.detail.token) {
        setLoading(true);
        setError(null);

        try {
          const token = event.detail.token.id;

          // Enviar token al backend
          const response = await fetch('/api/checkout', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              plan,
              token,
              email,
              amount: planData.price,
            }),
          });

          const result = await response.json();

          if (result.success) {
            setSuccess(true);
            // Si viene desde WebView de la app
            if ((window as any).ReactNativeWebView) {
              (window as any).ReactNativeWebView.postMessage(
                JSON.stringify({
                  type: 'payment_success',
                  plan,
                  email,
                })
              );
            }
          } else {
            setError(result.error || 'Error procesando el pago');
          }
        } catch (err) {
          setError(`Error: ${err instanceof Error ? err.message : 'Error desconocido'}`);
        } finally {
          setLoading(false);
        }
      }
    };

    document.addEventListener('Culqi.CheckoutFormResponse', handleCheckoutFormResponse);

    return () => {
      document.removeEventListener('Culqi.CheckoutFormResponse', handleCheckoutFormResponse);
    };
  }, [email, plan, planData.price]);

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-8 h-8 text-green-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            ¡Pago exitoso!
          </h2>
          <p className="text-slate-600 mb-6">
            Tu suscripción al plan <strong>{planData.name}</strong> ha sido activada.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-green-800">
              ✓ Tu plan está activo por 30 días<br />
              ✓ Te hemos enviado un email de confirmación<br />
              ✓ Puedes acceder a la app inmediatamente
            </p>
          </div>
          <a
            href="https://play.google.com/store/apps/details?id=com.caseritoai.app"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            Abrir app en Play Store
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-20 pb-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Volver a planes
        </button>

        {/* Checkout Card */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Confirmar pago
          </h1>
          <p className="text-slate-600 mb-8">
            Estás a un paso de activar tu suscripción
          </p>

          {/* Plan Summary */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  {planData.name}
                </h3>
                <p className="text-slate-600 text-sm">{planData.devices}</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-blue-600">
                  S/ {planData.price.toFixed(2)}
                </p>
                <p className="text-slate-600 text-sm">por mes</p>
              </div>
            </div>
            <p className="text-sm text-slate-600 pt-4 border-t border-blue-200">
              Se cobrará automáticamente cada 30 días. Puedes cancelar en cualquier momento.
            </p>
          </div>

          {/* Email Input */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-slate-900 mb-2">
              Email de confirmación
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError(null);
              }}
              placeholder="tu@email.com"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-sm text-slate-600 mt-2">
              Usaremos este email para tu confirmación y soporte
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-8 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              <p className="font-semibold">Error</p>
              <p className="text-sm">{error}</p>
            </div>
          )}

          {/* Payment Button */}
          <button
            onClick={handlePayment}
            disabled={loading || !email}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-bold hover:from-blue-700 hover:to-blue-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading && <Loader className="w-5 h-5 animate-spin" />}
            {loading ? 'Procesando...' : '💳 Pagar ahora'}
          </button>

          {/* Security Info */}
          <div className="mt-8 text-center">
            <p className="text-sm text-slate-600 mb-3">
              🔒 Pago seguro procesado por
            </p>
            <img
              src="/culqi-logo.svg"
              alt="Culqi"
              className="h-6 mx-auto"
              onError={(e) => {
                (e.target as any).style.display = 'none';
                (e.target as any).parentElement.textContent = '🔒 Pago seguro procesado por Culqi';
              }}
            />
          </div>

          {/* FAQ */}
          <div className="mt-12 border-t border-slate-200 pt-8">
            <h3 className="text-lg font-bold text-slate-900 mb-4">
              Preguntas frecuentes
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-slate-900 text-sm">
                  ¿Es seguro pagar aquí?
                </p>
                <p className="text-slate-600 text-sm">
                  Sí, usamos Culqi, la plataforma de pagos más segura del Perú.
                  Tu tarjeta está protegida con encriptación de nivel bancario.
                </p>
              </div>
              <div>
                <p className="font-semibold text-slate-900 text-sm">
                  ¿Cómo accedo a mi suscripción?
                </p>
                <p className="text-slate-600 text-sm">
                  Después de pagar, abre la app CaseritoAI y inicia sesión.
                  Tu plan estará activo inmediatamente.
                </p>
              </div>
              <div>
                <p className="font-semibold text-slate-900 text-sm">
                  ¿Puedo cambiar de plan?
                </p>
                <p className="text-slate-600 text-sm">
                  Sí, desde la app puedes cambiar de plan en cualquier momento.
                  Se ajustará el monto de manera prorrateada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
