"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
      {/* Aura Verde de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[130px] rounded-full -z-10" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl md:text-9xl font-black tracking-tighter">
          <span className="bg-gradient-to-b from-white to-emerald-500 bg-clip-text text-transparent">
            GermaninTech
          </span>
        </h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
        >
          Construyendo el futuro con <span className="text-emerald-400 font-mono">Kotlin</span> y <span className="text-emerald-400 font-mono">Next.js</span>.
        </motion.p>

        <motion.div className="mt-10 flex gap-4 justify-center">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#proyectos" 
            className="px-8 py-3 bg-emerald-500 text-black font-bold rounded-full shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] transition-all"
          >
            Explorar Trabajo
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}