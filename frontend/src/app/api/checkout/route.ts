import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { plan, token, email, amount } = await request.json();

    // Validar datos
    if (!token || !email || !amount || !plan) {
      return NextResponse.json(
        { success: false, error: 'Datos incompletos' },
        { status: 400 }
      );
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Procesar pago con Culqi
    const culqiSecretKey = process.env.CULQI_SECRET_KEY;

    if (!culqiSecretKey) {
      console.error('CULQI_SECRET_KEY no está configurada');
      return NextResponse.json(
        { success: false, error: 'Error en la configuración del servidor' },
        { status: 500 }
      );
    }

    // Crear cargo en Culqi
    const chargeResponse = await fetch('https://api.culqi.com/v2/charges', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${culqiSecretKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: Math.round(amount * 100), // En centavos
        currency_code: 'PEN',
        email,
        source_id: token,
        description: `Suscripción CaseritoAI - ${plan}`,
        metadata: {
          plan,
          email,
          timestamp: new Date().toISOString(),
        },
      }),
    });

    const chargeData = await chargeResponse.json();

    if (!chargeResponse.ok) {
      console.error('Culqi error:', chargeData);
      return NextResponse.json(
        {
          success: false,
          error: chargeData.merchant_message || 'Error procesando el pago',
        },
        { status: 400 }
      );
    }

    // Si el pago fue exitoso
    if (chargeData.object === 'charge' && chargeData.status === 'paid') {
      // TODO: Aquí guardar la suscripción en tu base de datos
      // - Crear registro de usuario
      // - Registrar suscripción
      // - Enviar email de confirmación

      return NextResponse.json(
        {
          success: true,
          message: 'Pago procesado exitosamente',
          chargeId: chargeData.id,
          plan,
          email,
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: 'El pago no fue procesado. Intenta de nuevo.',
      },
      { status: 400 }
    );
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Error desconocido',
      },
      { status: 500 }
    );
  }
}
