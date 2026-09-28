import React from "react";
import { ArrowDownRight, Compass, Cpu, FileCode2, Terminal } from "lucide-react";
import portfolioData from "../../data/portfolioData";

export default function Hero() {
  return (
    <section id="home" className="min-h-[88vh] flex flex-col justify-center pt-10">
      {/* Engineering Status Chip */}
      <div className="flex flex-wrap items-center gap-2.5 mb-8 text-xs font-mono">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-white/10 text-neutral-300">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span>STATUS: AVAILABLE FOR FULL-STACK & ANDROID ROLES</span>
        </div>

        <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900/60 border border-neutral-800 text-neutral-400">
          <Compass size={13} />
          <span>PUNJAB, INDIA</span>
        </div>
      </div>

      {/* Main Headline & Identity */}
      <div className="max-w-4xl space-y-4 mb-8">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.05]">
          Engineering robust web platforms and native mobile apps.
        </h1>

        <p className="text-lg sm:text-xl text-neutral-400 max-w-2xl leading-relaxed pt-2">
          I'm <span className="text-white font-medium">{portfolioData.name}</span> — a software developer specializing in Kotlin, React, Node.js, and Cloud services with a strong focus on clean architecture.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-4 mb-14">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white text-black font-semibold hover:bg-neutral-200 active:scale-[0.99] transition-all"
        >
          <span>View Projects</span>
          <ArrowDownRight size={17} />
        </a>

        <a
          href="#terminal"
          className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-white/10 text-white font-mono text-xs active:scale-[0.99] transition-all"
        >
          <Terminal size={15} />
          <span>Launch Dev Terminal</span>
        </a>

        <a
          href={portfolioData.resume}
          download
          className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg border border-neutral-800 hover:border-neutral-600 text-neutral-400 hover:text-white text-xs font-mono transition-all"
        >
          <FileCode2 size={15} />
          <span>Resume.pdf</span>
        </a>
      </div>

      {/* Monochrome Spec Matrix */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/10 max-w-3xl font-mono">
        <div className="p-3.5 rounded-xl bg-neutral-950 border border-white/5">
          <span className="text-[10px] text-neutral-500 uppercase block">Focus</span>
          <span className="text-xs font-medium text-neutral-200">Full-Stack & Android</span>
        </div>
        <div className="p-3.5 rounded-xl bg-neutral-950 border border-white/5">
          <span className="text-[10px] text-neutral-500 uppercase block">Core Tech</span>
          <span className="text-xs font-medium text-neutral-200">Kotlin • React • Node</span>
        </div>
        <div className="p-3.5 rounded-xl bg-neutral-950 border border-white/5">
          <span className="text-[10px] text-neutral-500 uppercase block">Database</span>
          <span className="text-xs font-medium text-neutral-200">MongoDB • Firebase</span>
        </div>
        <div className="p-3.5 rounded-xl bg-neutral-950 border border-white/5">
          <span className="text-[10px] text-neutral-500 uppercase block">Availability</span>
          <span className="text-xs font-medium text-white">Immediate</span>
        </div>
      </div>
    </section>
  );
}
