'use client';

interface CheckoutProps {
  plan: string;
  planData: {
    name: string;
    price: number;
    description: string;
    devices: string;
    features: string[];
  };
  onBack: () => void;
}

export function Checkout({ planData, onBack }: CheckoutProps) {
  return (
    <div className="max-w-md mx-auto px-4 py-12">
      {/* Plan Info */}
      <div className="mb-8 p-6 bg-white rounded-lg border border-[#E5E3DF]">
        <h2 className="text-xl font-bold text-[#0F172A] mb-2">{planData.name}</h2>
        <p className="text-3xl font-bold text-[#2C4257] mb-4">S/ {planData.price}</p>
        <p className="text-sm text-[#64748B]">{planData.devices}</p>
      </div>

      {/* CTA */}
      <div className="space-y-4">
        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg text-center mb-6">
          <p className="text-sm font-semibold text-[#0F172A]">
            💳 Los pagos se realizan en la app
          </p>
          <p className="text-xs text-[#64748B] mt-2">
            Para mayor seguridad y mejor experiencia, los pagos se procesan exclusivamente en CaseritoAI.
          </p>
        </div>

        <a
          href="https://play.google.com/store/apps/details?id=com.caseritoai.app"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-[#2C4257] text-white py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all text-center"
        >
          📱 Descargar en Play Store
        </a>
      </div>

      {/* Info */}
      <div className="mt-8 space-y-4">
        <div className="p-4 bg-green-50 rounded-lg">
          <p className="text-xs font-semibold text-[#3F6F56] mb-1">✅ PLAN: {planData.name}</p>
          <p className="text-xs text-[#64748B]">
            S/ {planData.price}/mes · {planData.devices}
          </p>
        </div>

        <div className="p-4 bg-slate-50 rounded-lg">
          <p className="text-xs font-semibold text-[#0F172A] mb-1">❓ ¿PREGUNTAS?</p>
          <p className="text-xs text-[#64748B]">
            Contacta a soporte: hameaidata@gmail.com
          </p>
        </div>
      </div>

      <button
        onClick={onBack}
        className="w-full mt-6 text-center text-sm text-[#64748B] hover:text-[#0F172A]"
      >
        ← Atrás
      </button>
    </div>
  );
}
