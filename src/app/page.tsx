import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    // Usamos un div contenedor con scroll-smooth explícito por seguridad
    <div className="flex flex-col min-h-screen bg-gray-950 text-white selection:bg-emerald-500/30">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Projects />
        <About />
        <TechStack />
        <ContactForm />
      </main>
      
      <Footer />
    </div>
  );
}