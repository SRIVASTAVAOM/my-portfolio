import React from "react";
import InteractiveCanvas from "./components/canvas/InteractiveCanvas";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import InteractiveTerminal from "./components/sections/InteractiveTerminal";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white relative selection:bg-white/20 selection:text-white">
      {/* Chrome / Stark Kinetic 3D Mesh */}
      <InteractiveCanvas />

      {/* Floating Monospaced Navbar */}
      <Navbar />

      {/* Main Container */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 space-y-28 md:space-y-36">
        <Hero />
        <About />
        <Projects />
        <InteractiveTerminal />
        <Skills />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
