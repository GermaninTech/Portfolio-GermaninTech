"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }}
      className="py-20 max-w-4xl mx-auto px-4 text-center"
    >
      <h2 className="text-3xl font-bold mb-4">Sobre Mí</h2>
      <p className="text-gray-400">Desarrollador enfocado en soluciones eficientes y escalables.</p>
    </motion.section>
  );
}