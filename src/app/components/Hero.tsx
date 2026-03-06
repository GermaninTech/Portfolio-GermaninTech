"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      {/* Aura Verde de fondo */}
      {/* Reduje el tamaño del aura para que no se desborde en móviles pequeños */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-emerald-500/10 blur-[100px] rounded-full -z-10" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-full max-w-4xl" // Limitamos el ancho para que no se estire demasiado
      >
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter break-words leading-[0.9]">
          <span className="bg-gradient-to-b from-white to-emerald-500 bg-clip-text text-transparent">
            GermaninTech
          </span>
        </h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-base md:text-xl text-gray-400 max-w-lg mx-auto px-2"
        >
          Construyendo el futuro con <span className="text-emerald-400 font-mono">Kotlin</span> y <span className="text-emerald-400 font-mono">Next.js</span>.
        </motion.p>

        <motion.div className="mt-10 flex gap-4 justify-center">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#proyectos" 
            className="px-8 py-3 bg-emerald-500 text-black font-bold rounded-full shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all hover:bg-emerald-400"
          >
            Explorar Trabajo
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}