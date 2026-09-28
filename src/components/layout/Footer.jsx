import React from "react";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import portfolioData from "../../data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 py-12 mt-32 bg-[#050505] font-mono text-xs text-neutral-400">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <p className="font-bold text-white uppercase tracking-wider">
            {portfolioData.name} <span className="text-neutral-500 font-normal">// SOFTWARE DEVELOPER</span>
          </p>
          <p className="text-neutral-600">
            Engineered with React, Three.js & Tailwind CSS.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <a
            href={portfolioData.github}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-white/5 text-neutral-300 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github size={15} />
          </a>
          <a
            href={portfolioData.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-white/5 text-neutral-300 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={15} />
          </a>
          <a
            href={`mailto:${portfolioData.email}`}
            className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-white/5 text-neutral-300 hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail size={15} />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-white text-black hover:bg-neutral-200 transition-colors cursor-pointer ml-2"
            aria-label="Scroll back to top"
            title="Back to Top"
          >
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
