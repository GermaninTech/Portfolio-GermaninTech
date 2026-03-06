"use client";
import { motion } from "framer-motion";

const projects = [
  { 
    title: "Portfolio Web", 
    desc: "Next.js, Tailwind, Framer Motion", 
    col: "md:col-span-2",
    details: "Desarrollo de mi marca personal con animaciones avanzadas y SEO técnico optimizado." 
  },
  { 
    title: "Calculadora C++", 
    desc: "C++ (Lógica de bajo nivel)", 
    col: "md:col-span-1",
    details: "Motor de cálculo para números reales y enteros con manejo eficiente de memoria." 
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-black text-center mb-12">Proyectos Destacados</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className={`${p.col} p-8 rounded-3xl bg-gray-900/40 border border-gray-800 hover:border-emerald-500/50 transition-all group`}
          >
            <h3 className="text-2xl font-bold text-white mb-2">{p.title}</h3>
            <span className="text-emerald-400 font-mono text-sm block mb-4">{p.desc}</span>
            <p className="text-gray-400 leading-relaxed">{p.details}</p>
            <div className="mt-6">
              <a href="#" className="text-sm border-b border-transparent hover:border-emerald-500 transition-colors">
                Ver repositorio →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}