'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Reembolsos() {
  return (
    <div className="min-h-screen bg-[#FAFAF9] pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-2 text-[#2C4257] hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" /> Volver al inicio
        </Link>

        <h1 className="text-4xl font-bold mb-4 text-[#0F172A]">Política de Reembolsos y Cancelación</h1>
        <p className="text-[#64748B] mb-8">Última actualización: julio 2026</p>

        <section className="bg-blue-50 p-4 rounded-lg mb-6 border border-blue-200">
          <h3 className="font-bold text-lg mb-2">Información de Contacto para Disputas</h3>
          <ul className="space-y-1 text-sm">
            <li><strong>Email:</strong> hameaidata@gmail.com</li>
            <li><strong>Empresa:</strong> hameraidata (RUC: 10481247387)</li>
            <li><strong>Procesador de Pagos:</strong> Culqi</li>
          </ul>
        </section>

        <div className="prose prose-sm max-w-none space-y-6 text-[#0F172A]">
          <section>
            <h2 className="text-2xl font-bold mb-3">1. Período de Prueba Gratuita</h2>
            <p>
              Los 14 días de prueba gratuita no generan cobro alguno. Puedes cancelar en cualquier momento sin consecuencias.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">2. Cancelación de Suscripción</h2>
            <p>
              Puedes cancelar tu suscripción en cualquier momento directamente desde la app, sin necesidad de contactarnos. La cancelación evita cobros futuros.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">3. Sin Reembolso de Períodos Iniciados</h2>
            <p>
              Por ser un servicio de suscripción mensual de acceso continuo, los pagos realizados por un período en curso no son reembolsables, salvo error de cobro.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">4. Errores de Cobro</h2>
            <p>
              Si detectas un cobro duplicado, monto incorrecto, o cobro posterior a cancelación, contáctanos a <a href="mailto:hameaidata@gmail.com" className="text-[#2C4257] hover:underline">hameaidata@gmail.com</a> con el comprobante. Evaluaremos y procesaremos la devolución correspondiente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">5. Suspensión por Falta de Pago</h2>
            <p>
              Si un cobro de renovación no puede procesarse, el servicio se suspenderá hasta regularizar el pago. Tus datos se conservan de acuerdo con nuestra Política de Privacidad.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">6. Método de Pago</h2>
            <p>
              Aceptamos tarjetas de crédito y débito a través de Culqi, la pasarela de pagos más segura del Perú.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">7. Disputas y Contracargos</h2>
            <p>
              Antes de iniciar un contracargo con tu banco, contacta primero a hameaidata@gmail.com para resolver rápidamente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">8. Cambios de Precio</h2>
            <p>
              Notificaremos cambios de precio con al menos 30 días de anticipación. Tienes derecho a cancelar si no aceptas los nuevos precios.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
