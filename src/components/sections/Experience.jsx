import React from "react";
import { Calendar, GitCommit } from "lucide-react";
import portfolioData from "../../data/portfolioData";

export default function Experience() {
  if (!portfolioData.experience || portfolioData.experience.length === 0) {
    return null;
  }

  return (
    <section id="experience" className="space-y-10 scroll-mt-28">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <span className="font-mono text-xs text-neutral-400 font-semibold tracking-wider uppercase">
            // MILESTONES & HISTORY
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-1">
            Experience
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-neutral-400 max-w-md font-mono">
          Development roles focused on architecture, API design, and shipping mobile & web apps.
        </p>
      </div>

      <div className="relative border-l border-white/10 ml-4 sm:ml-6 space-y-10 pl-6 sm:pl-8 font-mono">
        {portfolioData.experience.map((exp, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline Dot */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-black border-2 border-white flex items-center justify-center text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
            </div>

            <div className="rounded-2xl bg-[#0a0a0a] border border-white/10 p-6 sm:p-8 space-y-4 hover:border-white/20 transition-all font-sans">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="text-xl font-bold text-white">
                  {exp.role}{" "}
                  <span className="text-neutral-400 font-normal">@ {exp.company}</span>
                </h3>

                <div className="flex items-center gap-1.5 font-mono text-xs text-neutral-400 bg-black px-3 py-1.5 rounded-lg border border-white/5 w-fit">
                  <Calendar size={13} />
                  <span>{exp.duration}</span>
                </div>
              </div>

              <div className="space-y-2.5 pt-2">
                {exp.points.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-3 text-sm text-neutral-300">
                    <span className="text-white font-bold mt-0.5 font-mono">▹</span>
                    <span className="leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
