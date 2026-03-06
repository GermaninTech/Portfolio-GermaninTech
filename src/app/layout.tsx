import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import "./globals.css";
import CustomCursor from "@/app/components/CustomCursor";
import ScrollProgress from "@/app/components/ScrollProgress"; // Importamos la barra

export const metadata: Metadata = {
  title: "GermaninTech | Portfolio",
  description: "Desarrollador Backend & Frontend especializado en sistemas robustos.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      {/* Añadimos scroll-smooth aquí para asegurar que los enlaces 
        internos (#proyectos, etc.) se desplacen suavemente.
      */}
      <body className="bg-gray-950 text-white antialiased selection:bg-emerald-500/30 cursor-none scroll-smooth">
        <ThemeProvider 
          attribute="class" 
          defaultTheme="dark" 
          forcedTheme="dark"
        >
          {/* Componentes visuales globales */}
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