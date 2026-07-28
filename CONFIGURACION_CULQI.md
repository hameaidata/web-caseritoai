# CONFIGURACIÓN CULQI - CaseritoAI Landing

Archivos agregados para la integración de Culqi:

## ✅ Archivos Creados/Modificados

### Frontend (Next.js)

1. **`frontend/src/app/checkout/page.tsx`** (NUEVO)
   - Página principal del checkout
   - Muestra los 3 planes
   - Permite seleccionar plan

2. **`frontend/src/components/Checkout.tsx`** (NUEVO)
   - Componente de Culqi
   - Procesa pagos
   - Muestra pantalla de éxito

3. **`frontend/src/app/api/checkout/route.ts`** (NUEVO)
   - API Route de Next.js
   - Procesa solicitud POST con token de Culqi
   - Valida y registra pago

4. **`frontend/.env.example`** (MODIFICADO)
   - Agregados: `NEXT_PUBLIC_CULQI_PUBLIC_KEY`
   - Agregados: `CULQI_SECRET_KEY`

5. **`frontend/src/components/Navbar.tsx`** (MODIFICADO)
   - Botón "Prueba gratis" ahora apunta a `/checkout`

---

## 🔧 CONFIGURACIÓN REQUERIDA

### 1. Culqi - Obtener credenciales

1. Ir a https://culqi.com/
2. Crear cuenta o iniciar sesión
3. Ir a **Configuración → API**
4. Copiar:
   - **Public Key**: `pk_live_xxx...` o `pk_test_xxx...`
   - **Secret Key**: `sk_live_xxx...` o `sk_test_xxx...`

### 2. Variables de entorno - Frontend

Crear archivo `.env.local` en `frontend/`:

```bash
# Culqi - PUBLIC KEY (visible en cliente, segura)
NEXT_PUBLIC_CULQI_PUBLIC_KEY=pk_live_xxxxxxxxxxxxxxxxxxxx

# Culqi - SECRET KEY (SOLO EN SERVIDOR, NUNCA EN CLIENTE)
CULQI_SECRET_KEY=sk_live_xxxxxxxxxxxxxxxxxxxx

# URLs
NEXT_PUBLIC_API_URL=https://caseritoai.hameraidata.com
NEXT_PUBLIC_APP_URL=https://caseritoai.hameraidata.com
```

### 3. Variables de entorno - GitHub Actions (para deploy)

En tu repositorio GitHub, agregar secrets:

**Ubicación**: Settings → Secrets and variables → Actions

```
CULQI_PUBLIC_KEY = pk_live_xxxxxxxxxxxxxxxxxxxx
CULQI_SECRET_KEY = sk_live_xxxxxxxxxxxxxxxxxxxx
```

Luego actualizar `.github/workflows/deploy-frontend.yml` para usarlos:

```yaml
env:
  NEXT_PUBLIC_CULQI_PUBLIC_KEY: ${{ secrets.CULQI_PUBLIC_KEY }}
  CULQI_SECRET_KEY: ${{ secrets.CULQI_SECRET_KEY }}
```

---

## 🧪 TESTING LOCAL

### 1. Instalar dependencias

```bash
cd frontend
npm install
```

### 2. Crear `.env.local`

Copiar desde `.env.example` y llenar con tus keys de Culqi (usa `pk_test_` y `sk_test_` para testing)

### 3. Ejecutar servidor de desarrollo

```bash
npm run dev
```

Acceder a: http://localhost:3000/checkout

### 4. Tarjeta de prueba Culqi

```
Número: 4111 1111 1111 1111
CVV: 123
Exp: Cualquier fecha futura (ej: 12/2025)
```

---

## 📱 INTEGRACIÓN CON APP REACT NATIVE

En tu app `frontend` (la de Android), en la pantalla de suscripción:

```typescript
import { WebView } from 'react-native-webview';

export function SuscripcionScreen() {
  const [showCheckout, setShowCheckout] = useState(false);

  if (showCheckout) {
    return (
      <WebView
        source={{ uri: 'https://caserito.hameraidata.com/checkout' }}
        onMessage={async (event) => {
          const data = JSON.parse(event.nativeEvent.data);
          
          if (data.type === 'payment_success') {
            // Pago exitoso, activar suscripción
            setShowCheckout(false);
            // Refrescar estado
          }
        }}
      />
    );
  }

  return (
    // Mostrar botones de planes
    <Button onPress={() => setShowCheckout(true)}>
      Elegir plan
    </Button>
  );
}
```

---

## 🚀 FLUJO COMPLETO

```
1. Usuario va a https://caserito.hameraidata.com/checkout
   ↓
2. Selecciona plan (Familiar/Local/Empresa)
   ↓
3. Ingresa email y presiona "Pagar"
   ↓
4. Se abre formulario de Culqi (modal)
   ↓
5. Usuario ingresa datos de tarjeta
   ↓
6. Culqi procesa pago
   ↓
7. Si éxito:
   - /api/checkout recibe token
   - Valida con Culqi
   - Retorna success: true
   - Muestra pantalla de confirmación
   
8. Si viene de WebView (app):
   - Se envía mensaje a app
   - App lo recibe y activa suscripción
```

---

## 📋 CHECKLIST ANTES DE DEPLOY

- [ ] ✅ Crear cuenta en Culqi
- [ ] ✅ Obtener credenciales (Public + Secret key)
- [ ] ✅ Crear `.env.local` en frontend/
- [ ] ✅ Probar localmente con tarjeta de prueba
- [ ] ✅ Agregar secrets a GitHub Actions
- [ ] ✅ Actualizar `.github/workflows/deploy-frontend.yml` (si existe)
- [ ] ✅ Hacer push a `main` para trigger deploy
- [ ] ✅ Verificar que /checkout funciona en producción
- [ ] ✅ Enviar URL a Culqi para aprobación final

---

## 🔐 SEGURIDAD

- **Public Key** → Visible en cliente (navegador)
- **Secret Key** → NUNCA enviar al cliente, solo en servidor
- Las credenciales viven en:
  - `.env.local` (desarrollo local)
  - GitHub Secrets (para CI/CD)
  - Variables de entorno (en servidor de producción)

---

## 🆘 TROUBLESHOOTING

### "Culqi no está cargado"
- Verificar que el script se carga en el navegador (Dev Tools → Network)
- Verificar que `NEXT_PUBLIC_CULQI_PUBLIC_KEY` está configurado

### "El pago fue rechazado"
- Verificar que usas tarjeta de prueba: 4111 1111 1111 1111
- Verificar que CVV es 123
- Verificar que la fecha de vencimiento es futura

### "Error de configuración del servidor"
- Verificar que `CULQI_SECRET_KEY` está en `.env.local`
- En GitHub Actions, verificar que el secret existe

### "No aparece pantalla de éxito"
- Revisar console del navegador (F12)
- Revisar errores en Network tab
- Verificar que la respuesta de `/api/checkout` es `{ success: true }`

---

## 📞 CONTACTO CULQI

- **Sitio**: https://culqi.com/
- **Email**: support@culqi.com
- **Documentación**: https://docs.culqi.com/

---

## PRÓXIMOS PASOS

1. **Completar checklist** arriba ↑
2. **Hacer push** a GitHub (deploy automático)
3. **Probar en producción** con tarjeta de prueba
4. **Contactar a Culqi** con URL para aprobación final:
   - https://caserito.hameraidata.com/
   - https://caserito.hameraidata.com/checkout

Con esto, ¡tu integración de Culqi está lista! ✅

