"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Backend Developer",
    company: "GermaninTech Labs",
    period: "2024 - Presente",
    description: "Desarrollo de APIs robustas usando Kotlin y Ktor. Gestión de túneles seguros con Ngrok para despliegues rápidos.",
  },
  {
    title: "Frontend Architect",
    company: "Freelance Projects",
    period: "2023 - 2024",
    description: "Creación de interfaces inmersivas con Next.js, Tailwind CSS y animaciones avanzadas con Framer Motion.",
  }
];

export default function Experience() {
  return (
    <section id="experiencia" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-black text-center mb-12 bg-gradient-to-r from-white to-emerald-500 bg-clip-text text-transparent">
        Experiencia Profesional
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            className="group relative p-8 rounded-3xl bg-gray-900/40 border border-gray-800 backdrop-blur-xl hover:border-emerald-500/50 transition-all duration-300"
          >
            {/* Efecto de brillo sutil en el borde */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
            <p className="text-emerald-400 font-mono text-sm mb-4">{exp.company} | {exp.period}</p>
            <p className="text-gray-400 leading-relaxed">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}