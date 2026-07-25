import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CaseritoAI | El asistente digital para tu bodega',
  description: 'Lleva el control de tus fiados, ventas, compras y stock hablando — como si le dictaras a un cuaderno, pero sin errores, sin olvidos y sin cuentas que no cuadran.',
  keywords: ['bodega', 'perú', 'app', 'ventas', 'inteligencia artificial', 'control de stock'],
  viewport: 'width=device-width, initial-scale=1.0',
  authors: [{ name: 'CaseritoAI Team' }],
  openGraph: {
    title: 'CaseritoAI | El asistente digital para tu bodega',
    description: 'Gestión inteligente de bodegas en Perú',
    url: 'https://caseritoai.hameraidata.com',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CaseritoAI',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </head>
      <body className="bg-slate-50 text-slate-900 antialiased" style={{ fontFamily: "'Inter', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
