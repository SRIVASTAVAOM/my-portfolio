import React, { useState } from "react";
import { ExternalLink, Github, Smartphone, Sparkles, ShieldCheck, Layers, Bot, Car, ArrowUpRight } from "lucide-react";
import portfolioData from "../../data/portfolioData";

export default function Projects() {
  const [activeDevMotorsTab, setActiveDevMotorsTab] = useState("architecture");

  return (
    <section id="projects" className="space-y-12 scroll-mt-28">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <span className="font-mono text-xs text-neutral-400 font-semibold tracking-wider uppercase">
            // SELECTED PRODUCTION SYSTEMS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-1">
            Featured Projects
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-neutral-400 max-w-md font-mono">
          Production-grade applications, AI platforms, and mobile ecosystems with live demos.
        </p>
      </div>

      {/* PROJECT 1: Dev Motors (Major Production Milestone) */}
      <div className="rounded-2xl bg-[#0a0a0a] border border-white/10 p-6 sm:p-10 relative overflow-hidden group hover:border-white/20 transition-all">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
              <span className="px-2.5 py-1 rounded-full bg-white/10 border border-white/15 text-white flex items-center gap-1.5">
                <Car size={13} /> Enterprise Dealership Ecosystem
              </span>
              <span className="text-neutral-500">Live in Physical Branches</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Dev Motors — End-to-End Expense Management Platform
            </h3>

            <p className="text-neutral-300 leading-relaxed text-sm sm:text-base">
              Engineered and deployed across physical automobile dealership branches to replace paper approval chains. Handles multi-branch expenses, multi-level hierarchical approvals, and instant cash disbursements with strict financial integrity.
            </p>

            {/* Architecture Tabs */}
            <div className="flex flex-wrap gap-2 pt-1 font-mono">
              <button
                onClick={() => setActiveDevMotorsTab("architecture")}
                className={`px-3 py-1.5 rounded-md text-xs transition-colors ${
                  activeDevMotorsTab === "architecture"
                    ? "bg-white text-black font-semibold"
                    : "bg-neutral-900 text-neutral-400 hover:text-white"
                }`}
              >
                Technical Stack
              </button>
              <button
                onClick={() => setActiveDevMotorsTab("security")}
                className={`px-3 py-1.5 rounded-md text-xs transition-colors ${
                  activeDevMotorsTab === "security"
                    ? "bg-white text-black font-semibold"
                    : "bg-neutral-900 text-neutral-400 hover:text-white"
                }`}
              >
                Security & Approvals
              </button>
            </div>

            {activeDevMotorsTab === "architecture" ? (
              <div className="p-4 rounded-xl bg-black border border-white/10 text-xs font-mono text-neutral-300 space-y-2">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <ShieldCheck size={14} /> Serverless PostgreSQL on Neon Cloud via Prisma ORM
                </div>
                <div className="text-neutral-400">
                  ▹ Modular Feature-First Domain Architecture (Auth, Expenses, Approvals, Reports)
                </div>
                <div className="text-neutral-400">
                  ▹ Native Multi-Platform iOS & Android CI/CD pipelines
                </div>
              </div>
            ) : (
              <div className="p-4 rounded-xl bg-black border border-white/10 text-xs font-mono text-neutral-300 space-y-2">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <Layers size={14} /> End-to-End TLS 1.3 & JWT Bearer Role-Guards
                </div>
                <div className="text-neutral-400">
                  ▹ 4 Distinct Role Hierarchies: Employee, Manager, Cashier, Owner
                </div>
                <div className="text-neutral-400">
                  ▹ Real-time ledger audit trail with zero regression
                </div>
              </div>
            )}

            {/* Action Links */}
            <div className="flex flex-wrap items-center gap-3 pt-2 font-mono text-xs">
              <a
                href="https://lnkd.in/dY35DGKK"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white text-black font-semibold hover:bg-neutral-200 transition-colors"
              >
                <Github size={14} /> Frontend Codebase
              </a>
              <a
                href="https://lnkd.in/dN7GRA6N"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-white/10 text-white transition-colors"
              >
                <Smartphone size={14} /> Play Store Testing <ArrowUpRight size={13} />
              </a>
            </div>
          </div>

          {/* Right Visual: Architecture Spec Box */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm rounded-2xl p-5 bg-black border border-white/15 space-y-4 font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-neutral-400 font-bold uppercase text-[11px]">System Specs</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px]">
                  Production Active
                </span>
              </div>

              <div className="space-y-2.5 text-neutral-300">
                <div className="flex justify-between p-2 rounded bg-neutral-900/60 border border-white/5">
                  <span className="text-neutral-500">DATABASE</span>
                  <span className="text-white font-medium">PostgreSQL (Neon)</span>
                </div>
                <div className="flex justify-between p-2 rounded bg-neutral-900/60 border border-white/5">
                  <span className="text-neutral-500">ORM</span>
                  <span className="text-white font-medium">Prisma (Type-Safe)</span>
                </div>
                <div className="flex justify-between p-2 rounded bg-neutral-900/60 border border-white/5">
                  <span className="text-neutral-500">MOBILE</span>
                  <span className="text-white font-medium">iOS + Android</span>
                </div>
                <div className="flex justify-between p-2 rounded bg-neutral-900/60 border border-white/5">
                  <span className="text-neutral-500">DEPLOYMENT</span>
                  <span className="text-white font-medium">Multi-Branch Dealerships</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PROJECT 2 & 3: GRID (HireLens AI + GreenTrack App) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Project 2: HireLens AI */}
        <div className="rounded-2xl bg-[#0a0a0a] border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-all">
          <div className="space-y-4">
            <div className="flex items-center justify-between font-mono text-xs">
              <span className="px-2.5 py-1 rounded-full bg-white/10 border border-white/15 text-white flex items-center gap-1.5">
                <Bot size={13} /> Full-Stack AI Platform
              </span>
              <span className="text-neutral-500">Production Deployed</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white">
              HireLens AI — Resume ATS & Career Prep
            </h3>

            <p className="text-neutral-300 text-sm leading-relaxed">
              AI-powered platform designed for students and job seekers with automated Resume ATS analysis, an AI career chatbot, analysis history dashboard, and secure authentication.
            </p>

            <div className="p-4 rounded-xl bg-black border border-white/10 space-y-2 font-mono">
              <div className="text-[10px] text-neutral-500 uppercase tracking-wider mb-1">
                Core Stack:
              </div>
              <div className="flex flex-wrap gap-1.5 text-[10px]">
                {["React.js", "Node.js", "Express", "PostgreSQL", "Prisma", "Groq AI", "Vercel", "Render"].map((t) => (
                  <span key={t} className="px-2 py-1 rounded bg-neutral-900 border border-white/10 text-neutral-200">
                    {t}
                  </span>
                ))}
              </div>
              <p className="text-[11px] text-neutral-400 pt-2">
                ▹ Full-stack REST APIs with Groq AI integration and persistent analytics.
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 flex items-center justify-between mt-6 font-mono text-xs">
            <a
              href="https://lnkd.in/grs5u-Uk"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors"
            >
              <Github size={15} /> Source Code
            </a>

            <a
              href="https://lnkd.in/gHrq7PzU"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white text-black font-semibold hover:bg-neutral-200 transition-colors"
            >
              <span>Live Demo</span>
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>

        {/* Project 3: GreenTrack App */}
        <div className="rounded-2xl bg-[#0a0a0a] border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-all">
          <div className="space-y-4">
            <div className="flex items-center justify-between font-mono text-xs">
              <span className="px-2.5 py-1 rounded-full bg-white/10 border border-white/15 text-white flex items-center gap-1.5">
                <Smartphone size={13} /> Native Android
              </span>
              <span className="text-neutral-500">Android Studio</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white">
              GreenTrack App — Eco Sustainability Tracker
            </h3>

            <p className="text-neutral-300 text-sm leading-relaxed">
              Android application built in Kotlin to help users track and manage daily sustainable habits and eco-friendly activities with modular architecture and clean responsive UI.
            </p>

            <div className="p-4 rounded-xl bg-black border border-white/10 space-y-2 font-mono">
              <div className="text-[10px] text-neutral-500 uppercase tracking-wider mb-1">
                Core Stack & Features:
              </div>
              <div className="flex flex-wrap gap-1.5 text-[10px]">
                {["Kotlin", "Android Studio", "Material Design", "Firebase", "Modular Architecture"].map((t) => (
                  <span key={t} className="px-2 py-1 rounded bg-neutral-900 border border-white/10 text-neutral-200">
                    {t}
                  </span>
                ))}
              </div>
              <p className="text-[11px] text-neutral-400 pt-2">
                ▹ Daily sustainability activity logging, clean UX, and local/cloud persistence.
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 flex items-center justify-between mt-6 font-mono text-xs">
            <a
              href="https://lnkd.in/gcwY2Tdt"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors"
            >
              <Github size={15} /> Source Code
            </a>

            <a
              href="https://lnkd.in/gcwY2Tdt"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-neutral-900 border border-white/10 text-white hover:bg-neutral-800 transition-colors"
            >
              <span>Repository</span>
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
