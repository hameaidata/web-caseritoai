'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ_ITEMS = [
  {
    question: '¿Necesito internet para usar la app?',
    answer:
      'Sí. CaseritoAI funciona conectada a internet para mantener tu información segura y sincronizada entre dispositivos.',
  },
  {
    question: '¿Mis datos están seguros?',
    answer:
      'Sí. Tu información se almacena cifrada en servidores seguros. Puedes ver el detalle en nuestra Política de Privacidad.',
  },
  {
    question: '¿Puedo cancelar cuando quiera?',
    answer:
      'Sí, puedes cancelar tu suscripción en cualquier momento desde la misma app, sin llamadas ni papeleo.',
  },
  {
    question: '¿Cómo pago mi suscripción?',
    answer:
      'Con tarjeta de crédito o débito, de forma segura, a través de la pasarela de pagos Culqi.',
  },
  {
    question: '¿Necesito saber de tecnología para usarla?',
    answer:
      'No. CaseritoAI está diseñada para bodegueros sin experiencia previa con aplicaciones — todo se hace hablando o con pocos toques en pantalla.',
  },
];

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-slate-50 p-6 rounded-2xl">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left"
      >
        <h4 className="font-bold text-lg">{question}</h4>
        <ChevronDown
          className={`w-5 h-5 transition-transform ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && <p className="text-slate-600 mt-4">{answer}</p>}
    </div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Preguntas frecuentes
        </h2>
        <div className="space-y-6">
          {FAQ_ITEMS.map((item) => (
            <FAQItem key={item.question} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
