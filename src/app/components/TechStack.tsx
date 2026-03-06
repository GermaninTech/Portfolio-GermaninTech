"use client";
import { motion } from "framer-motion";

const skills = ["Kotlin", "Ktor", "Next.js", "PostgreSQL", "Tailwind", "Git"];

export default function TechStack() {
  return (
    <section className="py-20 overflow-hidden">
      <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
        {skills.map((skill, i) => (
          <motion.div
            key={skill}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, delay: i * 0.3 }}
            className="px-8 py-4 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl text-emerald-400 font-bold"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}