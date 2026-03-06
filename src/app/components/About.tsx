"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="sobre-mi" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-black text-center mb-12">Sobre mí</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto">
        {/* Tarjeta Principal */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="md:col-span-2 p-8 rounded-3xl bg-gray-900/40 border border-gray-800 backdrop-blur-xl transition-all duration-300 hover:border-emerald-500/50"
        >
          <h3 className="text-2xl font-bold mb-4 text-emerald-400">GermaninTech</h3>
          <p className="text-gray-400 leading-relaxed text-lg">
            Estudiante de <strong>Ingeniería Informática en Andorra</strong>, con un Bachillerato Profesional en Desarrollo de Aplicaciones Web y Móviles. 
            Me especializo en crear sistemas robustos y escalables. Mi enfoque técnico combina la solidez del backend con interfaces modernas y eficientes.
          </p>
        </motion.div>

        {/* Tarjeta Secundaria */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="p-8 rounded-3xl bg-gray-900/40 border border-gray-800 backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-300 hover:border-emerald-500/50"
        >
          <p className="text-gray-500 font-mono text-center text-sm uppercase tracking-widest mb-2">Ubicación</p>
          <span className="text-white text-2xl font-bold">Andorra</span>
          <p className="text-emerald-500 mt-4 text-xs font-mono bg-emerald-500/10 px-3 py-1 rounded-full">
            Estudiante de Ingeniería Informatica
          </p>
        </motion.div>
      </div>
    </section>
  );
}