'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Privacidad() {
  return (
    <div className="min-h-screen bg-[#FAFAF9] pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-2 text-[#2C4257] hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" /> Volver al inicio
        </Link>

        <h1 className="text-4xl font-bold mb-4 text-[#0F172A]">Política de Privacidad</h1>
        <p className="text-[#64748B] mb-8">Última actualización: julio 2026</p>

        <div className="prose prose-sm max-w-none space-y-6 text-[#0F172A]">
          <section>
            <h2 className="text-2xl font-bold mb-3">1. Responsable del Tratamiento</h2>
            <p>
              <strong>hameraidata</strong> es responsable del tratamiento de tus datos personales, conforme a la Ley N° 29733 de Protección de Datos Personales del Perú.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">2. Datos que Recopilamos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Datos de registro (nombre, email, celular)</li>
              <li>Datos del negocio (nombre, productos, clientes, proveedores)</li>
              <li>Grabaciones de voz (procesadas y descartadas inmediatamente)</li>
              <li>Datos técnicos (ID dispositivo, logs de errores)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">3. Finalidad del Tratamiento</h2>
            <p>
              Usamos tus datos para: prestar el servicio, procesar pagos, brindar soporte técnico, enviar notificaciones relacionadas al servicio, y mejorar la calidad y seguridad de la app.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">4. Base Legal</h2>
            <p>
              El tratamiento se basa en tu consentimiento expreso al aceptar esta política y en la necesidad de ejecutar nuestro contrato de servicio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">5. Terceros que Procesan tus Datos</h2>
            <p>
              Compartimos datos estrictamente necesarios con:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Culqi</strong> - procesamiento de pagos</li>
              <li><strong>OpenAI</strong> - transcripción de voz</li>
              <li><strong>Amazon Web Services</strong> - alojamiento</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">6. Conservación de Datos</h2>
            <p>
              Los datos de tu negocio se conservan mientras tu cuenta esté activa. Las grabaciones de voz se descartan inmediatamente después de procesarse. Puedes solicitar la eliminación total de tu cuenta en cualquier momento.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">7. Tus Derechos ARCO</h2>
            <p>
              Tienes derecho a Acceder, Rectificar, Cancelar u Oponer el tratamiento de tus datos. Contacta a: <a href="mailto:hameaidata@gmail.com" className="text-[#2C4257] hover:underline">hameaidata@gmail.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">8. Seguridad</h2>
            <p>
              Implementamos cifrado en tránsito y en reposo, control de acceso y autenticación para proteger tus datos contra acceso no autorizado.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">9. Menores de Edad</h2>
            <p>
              El servicio está dirigido a mayores de 18 años. No recopilamos intencionalmente datos de menores.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">10. Cambios a esta Política</h2>
            <p>
              Podemos actualizar esta política en cualquier momento. Los cambios se notificarán dentro de la app.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">11. Autoridad de Control</h2>
            <p>
              Si tienes reclamos sobre tus derechos, puedes contactar a la Autoridad Nacional de Protección de Datos Personales del Perú.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
