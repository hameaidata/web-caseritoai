'use client';

import { BookX } from 'lucide-react';

export function Problem() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-sm font-semibold mb-6">
          <BookX className="w-4 h-4" /> Dile adiós al cuaderno
        </div>

        <h2 className="text-3xl font-bold mb-6">El problema que resolvemos</h2>

        <p className="text-lg text-slate-600 leading-relaxed">
          Miles de bodegas y negocios de barrio en el Perú siguen llevando el control de fiados, ventas y stock en cuadernos, apps de notas o de memoria. Esto genera cuentas que no cuadran a fin de mes, clientes que &quot;olvidan&quot; lo que deben, productos que se acaban sin aviso, y horas perdidas haciendo cuentas a mano cada noche — tiempo que el dueño del negocio podría usar para atender más clientes.
        </p>
      </div>
    </section>
  );
}
