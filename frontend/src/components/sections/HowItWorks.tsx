'use client';

const STEPS = [
  {
    number: 1,
    title: 'Descarga',
    description: 'Inicia tu prueba gratuita de 14 días, sin tarjeta requerida.',
  },
  {
    number: 2,
    title: 'Registra',
    description: 'Añade tu negocio, tus productos y clientes habituales.',
  },
  {
    number: 3,
    title: 'Habla',
    description:
      'Usa el botón de voz para registrar fiados, ventas y compras al instante.',
  },
  {
    number: 4,
    title: 'Revisa',
    description:
      'Mira tus reportes y el estado de tus cuentas desde cualquier lugar.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">¿Cómo funciona?</h2>
          <p className="text-emerald-100">
            100% en español, pensado para el día a día real de una bodega peruana.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 text-center">
          {STEPS.map((step) => (
            <div key={step.number}>
              <div className="w-16 h-16 rounded-full bg-emerald-800 border border-emerald-700 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h4 className="font-bold mb-2">{step.title}</h4>
              <p className="text-sm text-emerald-200">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
