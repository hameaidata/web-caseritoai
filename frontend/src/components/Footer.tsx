'use client';

import Image from 'next/image';
import { Mail, Phone, Globe, Facebook, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8 border-b border-slate-800 pb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 bg-[#2C4257] rounded-full flex items-center justify-center shadow-lg p-2">
                <Image
                  src="/logo.png"
                  alt="CaseritoAI"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
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
                <Phone className="w-4 h-4" /> +51 975682160
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-4 h-4" /> caseritoai.hameraidata.com
              </li>
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h4 className="text-white font-bold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <strong>hameraidata</strong>
              </li>
              <li>
                <strong>RUC:</strong> 10481247387
              </li>
              <li>
                <strong>Operaciones:</strong> Online
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
              className="hover:text-white transition-colors text-xs"
            >
              Términos
            </a>
            <span className="text-slate-500">·</span>
            <a
              href="/privacidad"
              className="hover:text-white transition-colors text-xs"
            >
              Privacidad
            </a>
            <span className="text-slate-500">·</span>
            <a
              href="/reembolsos"
              className="hover:text-white transition-colors text-xs"
            >
              Reembolsos
            </a>
            <span className="text-slate-500">·</span>
            <a
              href="/reclamaciones"
              className="hover:text-white transition-colors text-xs"
            >
              Reclamaciones
            </a>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex justify-center gap-6">
            <a
              href="https://facebook.com/caseritoai"
              className="hover:text-white transition-colors"
              title="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/caseritoai"
              className="hover:text-white transition-colors"
              title="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/company/caseritoai"
              className="hover:text-white transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
