'use client';

import Link from 'next/link';
import { ArrowLeft, Mail, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export default function Reclamaciones() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    tipoReclamacion: 'producto',
    descripcion: '',
    fechaHecho: '',
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // En producción, enviar a backend
    console.log('Reclamación:', formData);
    setEnviado(true);
    setTimeout(() => setEnviado(false), 5000);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9] pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-2 text-[#2C4257] hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" /> Volver al inicio
        </Link>

        <h1 className="text-4xl font-bold mb-4 text-[#0F172A]">Libro de Reclamaciones</h1>
        <p className="text-[#64748B] mb-8">
          Conforme a los requisitos de INDECOPI, pone a tu disposición este medio para registrar reclamaciones sobre nuestros productos y servicios.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-8">
          <h2 className="text-lg font-bold mb-4">Información de la Empresa</h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-[#64748B]">Razón Social</p>
              <p className="font-bold">hameraidata</p>
            </div>
            <div>
              <p className="text-[#64748B]">RUC</p>
              <p className="font-bold">10481247387</p>
            </div>
            <div>
              <p className="text-[#64748B]">Domicilio</p>
              <p className="font-bold">Empresa Virtual - Operaciones Online</p>
            </div>
            <div>
              <p className="text-[#64748B]">Email</p>
              <p className="font-bold">hameaidata@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 mb-8">
          <h2 className="text-lg font-bold mb-2">Procedimiento de Reclamación</h2>
          <ol className="space-y-2 text-sm list-decimal list-inside text-[#0F172A]">
            <li>Completa el formulario con tus datos y descripción de la reclamación</li>
            <li>Recibirás una confirmación por email dentro de 24 horas</li>
            <li>Nuestro equipo evaluará tu reclamación en un plazo de 30 días hábiles</li>
            <li>Te contactaremos para resolver o explicar la decisión</li>
          </ol>
        </div>

        <div className="bg-white border border-[#E5E3DF] rounded-lg p-8">
          {enviado ? (
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="text-xl font-bold text-green-700 mb-2">Reclamación Registrada</h3>
              <p className="text-[#64748B]">
                Hemos recibido tu reclamación. Te contactaremos pronto a través del email o teléfono proporcionado.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-2xl font-bold text-[#0F172A]">Formulario de Reclamación</h2>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-[#E5E3DF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C4257]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-[#E5E3DF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C4257]"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-[#E5E3DF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C4257]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                    Fecha del Hecho *
                  </label>
                  <input
                    type="date"
                    name="fechaHecho"
                    value={formData.fechaHecho}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-[#E5E3DF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C4257]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                  Tipo de Reclamación *
                </label>
                <select
                  name="tipoReclamacion"
                  value={formData.tipoReclamacion}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-[#E5E3DF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C4257]"
                >
                  <option value="producto">Sobre el Producto/Servicio</option>
                  <option value="pago">Sobre Pago</option>
                  <option value="calidad">Sobre Calidad</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                  Descripción de la Reclamación *
                </label>
                <textarea
                  name="descripcion"
                  value={formData.descripcion}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-[#E5E3DF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C4257]"
                  placeholder="Describe detalladamente tu reclamación..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#2C4257] text-white py-3 rounded-lg font-bold hover:bg-opacity-90 transition-colors"
              >
                Enviar Reclamación
              </button>
            </form>
          )}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg border border-[#E5E3DF]">
            <div className="flex items-center gap-3 mb-3">
              <Mail className="w-5 h-5 text-[#2C4257]" />
              <h3 className="font-bold">Contacto por Email</h3>
            </div>
            <p className="text-sm text-[#64748B]">hameaidata@gmail.com</p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-[#E5E3DF]">
            <div className="flex items-center gap-3 mb-3">
              <MessageSquare className="w-5 h-5 text-[#2C4257]" />
              <h3 className="font-bold">Teléfono de Contacto</h3>
            </div>
            <p className="text-sm text-[#64748B]">+51 975682160</p>
          </div>
        </div>
      </div>
    </div>
  );
}
