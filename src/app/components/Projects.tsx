"use client";
import { motion } from "framer-motion";

const projects = [
  { title: "Proyecto Alpha", desc: "Backend Ktor + Ngrok Tunnel", col: "md:col-span-2" },
  { title: "Proyecto Beta", desc: "Next.js Portfolio", col: "md:col-span-1" },
  { title: "Proyecto Gamma", desc: "Sistema de Auth", col: "md:col-span-1" },
  { title: "Proyecto Delta", desc: "Dashboard Visual", col: "md:col-span-2" },
];

export default function Projects() {
  return (
    <section id="proyectos" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-black text-center mb-12">Proyectos Destacados</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className={`${p.col} p-8 rounded-3xl bg-gray-900/40 border border-gray-800 hover:border-emerald-500/50 transition-all cursor-pointer`}
          >
            <h3 className="text-xl font-bold">{p.title}</h3>
            <p className="text-emerald-400 text-sm mt-2">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}