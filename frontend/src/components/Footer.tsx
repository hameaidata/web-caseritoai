'use client';

import { Mail, Phone, Globe, Store } from 'lucide-react';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8 border-b border-slate-800 pb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4 text-white">
              <Store className="w-6 h-6 text-emerald-500" />
              <span className="font-bold text-xl">
                Caserito<span className="text-emerald-500">AI</span>
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
