import React, { useState } from "react";
import portfolioData from "../../data/portfolioData";

export default function Skills() {
  const [filter, setFilter] = useState("all");

  const categories = ["all", "Frontend", "Backend", "Database", "Tools", "Programming"];

  const getFilteredSkills = () => {
    if (filter === "all") {
      return Object.entries(portfolioData.skills);
    }
    return Object.entries(portfolioData.skills).filter(
      ([cat]) => cat.toLowerCase() === filter.toLowerCase()
    );
  };

  return (
    <section id="skills" className="space-y-8 scroll-mt-28">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <span className="font-mono text-xs text-neutral-400 font-semibold tracking-wider uppercase">
            // TECHNICAL MATRIX
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-1">
            Skills & Ecosystem
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-1 p-1 rounded-lg bg-neutral-900 border border-white/10 font-mono">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1.5 rounded text-xs capitalize transition-all ${
                filter === cat
                  ? "bg-white text-black font-semibold"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {getFilteredSkills().map(([category, skillList]) => (
          <div
            key={category}
            className="rounded-2xl bg-[#0a0a0a] border border-white/10 p-6 space-y-4 hover:border-white/20 transition-all font-mono"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs font-bold text-white tracking-wider">
                {category.toUpperCase()}
              </span>
              <span className="text-[11px] text-neutral-500">
                {skillList.length} Items
              </span>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {skillList.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded bg-black border border-white/10 text-xs text-neutral-300 hover:border-white hover:text-white transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
