import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import "./globals.css";
import CustomCursor from "@/app/components/CustomCursor";
import ScrollProgress from "@/app/components/ScrollProgress";

export const metadata: Metadata = {
  title: "GermaninTech | Portfolio",
  description: "Desarrollador Backend & Frontend especializado en sistemas robustos.",
  // Configuración de la imagen que aparecerá al compartir el enlace
  openGraph: {
    title: "GermaninTech | Portfolio",
    description: "Desarrollador Backend & Frontend especializado en sistemas robustos.",
    url: 'https://Portfolio-Germanin-Tech.vercel.app', // Cambia esto por tu URL real cuando la tengas
    siteName: 'GermaninTech',
    images: [
      {
        url: '/opengraph-image.png', // Debe estar en la carpeta /public
        width: 1200,
        height: 630,
        alt: 'GermaninTech Portfolio Preview',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico', 
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body 
        className="bg-gray-950 text-white antialiased selection:bg-emerald-500/30 cursor-none scroll-smooth"
        suppressHydrationWarning
      >
        <ThemeProvider 
          attribute="class" 
          defaultTheme="dark" 
          forcedTheme="dark"
        >
          {/* Componentes Globales */}
          <ScrollProgress />
          <CustomCursor />
          
          <main className="min-h-screen">
            {children}
          </main>
          
          <Toaster 
            richColors 
            position="bottom-right" 
            toastOptions={{
              style: { 
                background: '#050505', 
                border: '1px solid #10b981', 
                color: '#10b981' 
              }
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}