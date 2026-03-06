"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="sobre-mi" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-black text-center mb-12">Sobre mí</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto md:h-[400px]">
        {/* Tarjeta Principal */}
        <motion.div className="md:col-span-2 p-8 rounded-3xl bg-gray-900/40 border border-gray-800 backdrop-blur-xl flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-4 text-emerald-400">GermaninTech</h3>
          <p className="text-gray-400 leading-relaxed text-lg">
            Soy un desarrollador apasionado por crear sistemas eficientes. Mi enfoque combina la robustez del Backend con interfaces minimalistas y modernas.
          </p>
        </motion.div>
        {/* Tarjeta Secundaria */}
        <div className="p-8 rounded-3xl bg-gray-900/40 border border-gray-800 backdrop-blur-xl flex items-center justify-center">
          <p className="text-gray-500 font-mono text-center">Basado en <br/><span className="text-white text-xl">Andorra</span></p>
        </div>
      </div>
    </section>
  );
}