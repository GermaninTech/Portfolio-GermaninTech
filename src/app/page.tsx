import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Projects from "@/app/components/Projects";
import About from "@/app/components/About";
import TechStack from "@/app/components/TechStack";
import ContactForm from "@/app/components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <TechStack />
        <ContactForm />
      </main>
      <Footer></Footer>
    </>
  );
}