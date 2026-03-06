"use client";
import { motion } from "framer-motion";

const projects = [
  { title: "Ktor Secure API", desc: "Backend robusto con Kotlin.", tags: ["Ktor", "Kotlin"] },
  { title: "Green Portfolio", desc: "Diseño optimizado en verde.", tags: ["Next.js", "Tailwind"] },
];

export default function Projects() {
  return (
    <section id="proyectos" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="p-8 bg-gray-900/50 border border-emerald-500/10 rounded-3xl hover:border-emerald-500/50 transition-all cursor-default group"
          >
            <div className="w-12 h-1 bg-emerald-500 mb-6 group-hover:w-full transition-all duration-500" />
            <h3 className="text-2xl font-bold mb-2 group-hover:text-emerald-400">{project.title}</h3>
            <p className="text-gray-400 mb-6">{project.desc}</p>
            <div className="flex gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs font-bold text-emerald-500 uppercase tracking-widest">{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}