"use client";
import { motion } from "framer-motion";

export default function Navbar() {
  const navItems = [
    { name: "Proyectos", href: "#proyectos" },
    { name: "Stack", href: "#stack" },
    { name: "Sobre Mí", href: "#sobre-mi" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-emerald-500/10"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo que vuelve al inicio */}
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_#10b981]" />
          <span className="text-xl font-black tracking-tighter bg-gradient-to-r from-white to-emerald-500 bg-clip-text text-transparent group-hover:to-emerald-300 transition-all">
            GERMANINTECH
          </span>
        </div>

        {/* Menú de Navegación */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="text-sm font-medium text-gray-400 hover:text-emerald-400 transition-colors"
            >
              {item.name}
            </a>
          ))}

          {/* BOTÓN DE CONTACTO CORREGIDO */}
          <a 
            href="#contacto" 
            className="ml-4 px-6 py-2.5 bg-emerald-500 text-black text-sm font-bold rounded-full hover:bg-emerald-400 hover:scale-105 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] active:scale-95"
          >
            Contacta
          </a>
        </div>
      </div>
    </motion.nav>
  );
}