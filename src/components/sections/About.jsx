import React from "react";
import { Code2, Cpu, Server } from "lucide-react";
import portfolioData from "../../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="space-y-10 scroll-mt-28">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <span className="font-mono text-xs text-neutral-400 font-semibold tracking-wider uppercase">
            // PROFILE & PHILOSOPHY
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-1">
            Engineering Background
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-neutral-400 max-w-md font-mono">
          Focusing on full-stack web and native Android architecture with clean code.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Main Narrative */}
        <div className="lg:col-span-7 rounded-2xl bg-[#0a0a0a] border border-white/10 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
          <div className="space-y-4 text-neutral-300 leading-relaxed text-base">
            <p className="text-lg text-white font-medium">
              Developing practical software that pairs high technical reliability with clean interfaces.
            </p>
            <p>
              {portfolioData.about}
            </p>
            <p className="text-neutral-400 text-sm">
              My core focus is understanding the entire lifecycle of an application — from structuring clean relational & NoSQL schemas to authoring modular Kotlin code for Android and building responsive React user experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-white/10 text-xs font-mono">
            <div className="p-3 rounded-xl bg-black border border-white/5">
              <span className="text-neutral-500 block mb-1">LOCATION</span>
              <span className="text-white font-medium">{portfolioData.location}</span>
            </div>
            <div className="p-3 rounded-xl bg-black border border-white/5">
              <span className="text-neutral-500 block mb-1">EMAIL</span>
              <span className="text-white truncate block">{portfolioData.email}</span>
            </div>
            <div className="p-3 rounded-xl bg-black border border-white/5">
              <span className="text-neutral-500 block mb-1">PHONE</span>
              <span className="text-white font-medium">{portfolioData.phone}</span>
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div className="lg:col-span-5 grid grid-cols-1 gap-4">
          <div className="rounded-xl bg-[#0a0a0a] border border-white/10 p-5 hover:border-white/20 transition-all">
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-white/10 text-white shrink-0">
                <Code2 size={18} />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white">Full-Stack Web Engineering</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  React.js component trees, modern Tailwind CSS, and Node.js / Express REST APIs with JWT security.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-[#0a0a0a] border border-white/10 p-5 hover:border-white/20 transition-all">
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-white/10 text-white shrink-0">
                <Cpu size={18} />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white">Native Android & Kotlin</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Building Android Studio applications using modern MVVM principles, Kotlin coroutines, and Firebase.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-[#0a0a0a] border border-white/10 p-5 hover:border-white/20 transition-all">
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-white/10 text-white shrink-0">
                <Server size={18} />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white">Data Persistence & Cloud</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Designing MongoDB & MySQL data models, AWS cloud fundamentals, and scalable asset pipelines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
