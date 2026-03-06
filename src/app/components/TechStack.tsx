"use client";
import { motion } from "framer-motion";

const stack = [
  { category: "Backend & Lenguajes", skills: ["Python", "PHP", "Node.js", "SQL", "Kotlin", "C#", "C++"] },
  { category: "Frontend & Diseño", skills: ["HTML", "CSS", "React", "Next.js", "TailwindCSS", "Flutter"] }
];

export default function TechStack() {
  return (
    <section id="stack" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-black text-center mb-12">Tech Stack</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {stack.map((group) => (
          <div key={group.category} className="p-8 rounded-3xl bg-gray-900/20 border border-gray-800">
            <h3 className="text-xl font-bold text-emerald-500 mb-6">{group.category}</h3>
            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(16, 185, 129, 0.1)" }}
                  className="px-4 py-2 bg-gray-950 border border-gray-800 rounded-full text-sm cursor-default transition-colors hover:border-emerald-500/50"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}