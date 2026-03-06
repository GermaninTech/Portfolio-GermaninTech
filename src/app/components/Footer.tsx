"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-emerald-500/10 bg-black/40 py-12 px-6 overflow-hidden">
      {/* Luz ambiental verde en el fondo */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/5 blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Lado Izquierdo: Marca */}
        <div className="flex flex-col items-center md:items-start">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 mb-4 cursor-default"
          >
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_8px_#10b981]" />
            <span className="text-xl font-black tracking-tighter text-white">
              GERMANIN<span className="text-emerald-500">TECH</span>
            </span>
          </motion.div>
          <p className="text-gray-500 text-sm max-w-xs text-center md:text-left font-medium">
            Desarrollando soluciones backend robustas y experiencias digitales de alto impacto.
          </p>
        </div>

        {/* Centro: Enlaces rápidos con hover verde */}
        <div className="flex gap-8 text-sm font-bold text-gray-400">
          {["Proyectos", "Stack", "Contacto"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="hover:text-emerald-400 transition-colors uppercase tracking-widest"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Lado Derecho: Estado del Sistema / Redes */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="px-4 py-2 bg-emerald-500/5 border border-emerald-500/20 rounded-full flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-tighter">
              System Online: 2026_
            </span>
          </div>
          
          <div className="flex gap-4">
            {/* Aquí puedes poner tus links a GitHub/LinkedIn con iconos si quieres */}
            <span className="text-xs text-gray-600 font-mono italic">
              Built with Next.js & Passion
            </span>
          </div>
        </div>
      </div>

      {/* Línea final de Copyright */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-900 flex justify-center">
        <p className="text-[10px] text-gray-700 uppercase tracking-[0.3em]">
          © {new Date().getFullYear()} All Rights Reserved // GermaninTech_Terminal
        </p>
      </div>
    </footer>
  );
}