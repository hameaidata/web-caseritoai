'use client';

import { Mail, Phone, Globe } from 'lucide-react';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8 border-b border-slate-800 pb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 bg-[#2C4257] rounded-full flex items-center justify-center shadow-lg">
                <svg viewBox="0 0 100 120" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Candado trapezoidal */}
                  {/* Asa superior */}
                  <path d="M 35 35 Q 35 20 50 20 Q 65 20 65 35" stroke="#E7EBEE" strokeWidth="6" fill="none" strokeLinecap="round"/>
                  {/* Cuerpo trapezoidal */}
                  <path d="M 30 40 L 25 55 Q 25 85 50 90 Q 75 85 75 55 L 70 40 Z" fill="#E7EBEE"/>
                  {/* Línea horizontal divisoria */}
                  <line x1="28" y1="60" x2="72" y2="60" stroke="#2C4257" strokeWidth="4" strokeLinecap="round"/>
                  {/* WiFi dorado en esquina superior derecha */}
                  <path d="M 65 25 Q 68 22 71 25" stroke="#A97A35" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  <path d="M 62 28 Q 67 20 72 28" stroke="#A97A35" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  <path d="M 59 31 Q 66 18 73 31" stroke="#A97A35" strokeWidth="3" fill="none" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="font-bold text-xl text-white">
                Caserito<span className="text-[#A97A35]">AI</span>
              </span>
            </div>
            <p className="text-sm text-slate-400">
              Ayudando a las bodegas del Perú a dejar el cuaderno atrás, sin perder la confianza de sus clientes.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" /> hameaidata@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> <span className="missing-data">[Teléfono]</span>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-4 h-4" /> caseritoai.hameraidata.com
              </li>
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h4 className="text-white font-bold mb-4">
              Información de la Empresa{' '}
              <span className="text-xs font-normal text-emerald-400">(Req. Culqi)</span>
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <strong>Razón Social:</strong>{' '}
                <span className="missing-data">[Razón Social]</span>
              </li>
              <li>
                <strong>RUC:</strong> <span className="missing-data">[RUC]</span>
              </li>
              <li>
                <strong>Domicilio Fiscal:</strong>{' '}
                <span className="missing-data">[Domicilio]</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <div className="mb-4 md:mb-0">
            &copy; {year} CaseritoAI. Todos los derechos reservados.
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/terminos"
              className="hover:text-white transition-colors"
            >
              Términos y Condiciones
            </a>
            <a
              href="/privacidad"
              className="hover:text-white transition-colors"
            >
              Política de Privacidad
            </a>
            <a
              href="/reembolsos"
              className="hover:text-white transition-colors"
            >
              Política de Reembolsos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
