import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import "./globals.css";

// IMPORTANTE: Esto es lo que hace que tu página tenga nombre en la pestaña
export const metadata = {
  title: "GermaninTech | Portfolio",
  description: "Desarrollador Backend & Frontend especializado en sistemas robustos.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="bg-gray-950 text-white antialiased selection:bg-emerald-500/30">
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
          {/* El main no debe tener pt-20 aquí si tu Navbar es fixed */}
          <main className="min-h-screen">
            {children}
          </main>
          
          <Toaster 
            richColors 
            position="bottom-right" 
            toastOptions={{
              style: { background: '#050505', border: '1px solid #10b981', color: '#10b981' }
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}