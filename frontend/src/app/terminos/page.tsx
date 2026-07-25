'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Terminos() {
  return (
    <div className="min-h-screen bg-[#FAFAF9] pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-2 text-[#2C4257] hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" /> Volver al inicio
        </Link>

        <h1 className="text-4xl font-bold mb-4 text-[#0F172A]">Términos y Condiciones</h1>
        <p className="text-[#64748B] mb-8">Última actualización: julio 2026</p>

        <div className="prose prose-sm max-w-none space-y-6 text-[#0F172A]">
          <section>
            <h2 className="text-2xl font-bold mb-3">1. Aceptación de los Términos</h2>
            <p>
              Al registrarte y utilizar la aplicación CaseritoAI, operada por <strong>hameraidata</strong>, aceptas quedar vinculado por estos Términos y Condiciones. Si no estás de acuerdo, no debes utilizar el servicio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">2. Descripción del Servicio</h2>
            <p>
              CaseritoAI es una aplicación móvil de gestión comercial dirigida a bodegas y pequeños negocios en el Perú, que permite registrar ventas, fiados, compras y control de inventario, incluyendo el registro por reconocimiento de voz.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">3. Período de Prueba Gratuita</h2>
            <p>
              Ofrecemos 14 días de prueba gratuita sin necesidad de tarjeta de crédito. Al finalizar, se requiere una suscripción paga.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">4. Suscripción y Precio</h2>
            <p>
              Los planes varían desde S/ 40 (Bodega Familiar) hasta S/ 290 (Empresa) mensuales. El precio incluye impuestos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">5. Renovación Automática</h2>
            <p>
              La suscripción se renueva automáticamente cada mes. Puedes cancelar en cualquier momento desde la app, sin penalizaciones.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">6. Responsabilidad del Usuario</h2>
            <p>
              Eres responsable de mantener la confidencialidad de tu cuenta y de toda actividad realizada. No usarás la app para actividades ilícitas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">7. Disponibilidad del Servicio</h2>
            <p>
              Hacemos esfuerzos para mantener el servicio disponible, pero no garantizamos 100% de uptime debido a dependencias externas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">8. Limitación de Responsabilidad</h2>
            <p>
              CaseritoAI no será responsable por pérdidas indirectas o decisiones comerciales basadas en datos de la app. El usuario es responsable de verificar la exactitud de los datos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">9. Modificaciones</h2>
            <p>
              Podemos actualizar estos términos en cualquier momento. Los cambios se notificarán dentro de la app o por correo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">10. Ley Aplicable</h2>
            <p>
              Estos términos se rigen por las leyes de la República del Perú. Cualquier disputa se someterá a los juzgados peruanos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">11. Contacto</h2>
            <p>
              Para consultas: <a href="mailto:hameaidata@gmail.com" className="text-[#2C4257] hover:underline">hameaidata@gmail.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
