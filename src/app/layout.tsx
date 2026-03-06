import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="bg-gray-950 text-white antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark">
          <main className="pt-20">{children}</main>
          <Toaster richColors position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}