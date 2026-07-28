import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { plan, token, email, amount } = body;

    if (!plan || !token || !email || !amount) {
      return NextResponse.json(
        { error: 'Faltan datos requeridos' },
        { status: 400 }
      );
    }

    // Validar que el plan existe
    const validPlans = ['familiar', 'local', 'empresa'];
    if (!validPlans.includes(plan)) {
      return NextResponse.json(
        { error: 'Plan inválido' },
        { status: 400 }
      );
    }

    // Obtener credenciales de Culqi desde variables de entorno
    const culqiSecretKey = process.env.CULQI_SECRET_KEY;

    if (!culqiSecretKey) {
      console.error('CULQI_SECRET_KEY no configurado');
      return NextResponse.json(
        { error: 'Error de configuración del servidor' },
        { status: 500 }
      );
    }

    // Hacer cargo a Culqi
    const culqiResponse = await fetch('https://api.culqi.com/v2/charges', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${culqiSecretKey}`,
      },
      body: JSON.stringify({
        amount: Math.round(amount * 100), // En centavos
        currency_code: 'PEN',
        source_id: token,
        description: `Suscripción CaseritoAI - Plan ${plan}`,
        metadata: {
          plan,
          email,
        },
      }),
    });

    const chargeData = await culqiResponse.json();

    // Verificar resultado de Culqi
    if (chargeData.outcome === 'venta_exitosa') {
      // ✅ Pago exitoso
      // Aquí idealmente enviarías la información a tu backend
      // para registrar la suscripción en la BD

      // Ejemplo: llamar a tu backend en AWS Lambda
      try {
        const backendUrl = process.env.NEXT_PUBLIC_API_URL || 'https://caseritoai.hameraidata.com';

        await fetch(`${backendUrl}/api/v1/suscripcion/pagar`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            plan,
            email,
            token,
            charge_id: chargeData.id,
          }),
        }).catch(err => {
          // Log pero no bloquea - el pago ya se procesó en Culqi
          console.error('Error notificando al backend:', err);
        });
      } catch (err) {
        console.error('Error enviando a backend:', err);
      }

      return NextResponse.json(
        {
          success: true,
          plan,
          message: 'Pago procesado exitosamente',
          charge_id: chargeData.id,
        },
        { status: 200 }
      );
    } else {
      // ❌ Pago rechazado
      return NextResponse.json(
        {
          success: false,
          error: chargeData.outcome || 'El pago fue rechazado',
          message: chargeData.user_message || 'Intenta con otra tarjeta',
        },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Error en checkout:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Error procesando el pago',
        message: error instanceof Error ? error.message : 'Error desconocido',
      },
      { status: 500 }
    );
  }
}
