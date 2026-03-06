"use client";
import { toast } from "sonner";
import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xqeykakd", {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        toast.success("Señal enviada correctamente", {
          description: "Conexión establecida con GermaninTech",
          style: { 
            background: '#050505', 
            color: '#10b981', 
            border: '1px solid #10b981' 
          }
        });
        form.reset();
      } else {
        throw new Error();
      }
    } catch (error) {
      toast.error("Error en la transmisión", {
        description: "Inténtalo de nuevo, agente.",
        style: { background: '#050505', color: '#ef4444', border: '1px solid #ef4444' }
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contacto" className="py-24 px-4 relative overflow-hidden">
      {/* Luz de fondo verde sutil */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-emerald-500/5 blur-[120px] -z-10" />
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto bg-gray-900/40 border border-emerald-500/20 p-8 md:p-12 rounded-3xl backdrop-blur-sm shadow-2xl"
      >
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-white mb-2 tracking-tighter">¿Tienes un proyecto?</h2>
          <p className="text-emerald-500/60 font-mono text-sm uppercase tracking-widest animate-pulse">
            Inicia una nueva conexión_
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="space-y-2">
            <label className="text-xs font-mono text-emerald-500/50 ml-1 uppercase">Identidad</label>
            <input 
              name="name" 
              placeholder="Tu Nombre" 
              required 
              className="w-full p-4 bg-black/50 border border-gray-800 rounded-xl outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/30 transition-all text-white placeholder:text-gray-700"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-mono text-emerald-500/50 ml-1 uppercase">Canal de comunicación</label>
            <input 
              name="email" 
              type="email" 
              placeholder="tu@email.com" 
              required 
              className="w-full p-4 bg-black/50 border border-gray-800 rounded-xl outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/30 transition-all text-white placeholder:text-gray-700"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-mono text-emerald-500/50 ml-1 uppercase">Datos del mensaje</label>
            <textarea 
              name="message" 
              placeholder="Escribe tu propuesta..." 
              rows={5} 
              required 
              className="w-full p-4 bg-black/50 border border-gray-800 rounded-xl outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/30 transition-all text-white placeholder:text-gray-700 resize-none"
            />
          </div>

          <motion.button 
            whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(16, 185, 129, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            disabled={isSending}
            className="w-full py-4 bg-emerald-500 text-black font-black uppercase tracking-widest rounded-xl hover:bg-emerald-400 disabled:opacity-50 transition-all flex justify-center items-center gap-2"
          >
            {isSending ? (
              <>
                <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                Transmitiendo...
              </>
            ) : "Establecer Conexión"}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}