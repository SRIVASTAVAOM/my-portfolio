import React, { useState } from "react";
import { Send, Github, Linkedin, Copy, Check } from "lucide-react";
import portfolioData from "../../data/portfolioData";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="space-y-10 scroll-mt-28 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="text-center space-y-3">
        <span className="font-mono text-xs text-neutral-400 font-semibold tracking-wider uppercase">
          // INITIATE CONTACT
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
          Let's Work Together.
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
          Open for full-stack, Android, or cloud engineering roles. Dispatch a message directly below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Info Sidebar */}
        <div className="lg:col-span-5 rounded-2xl bg-[#0a0a0a] border border-white/10 p-6 sm:p-8 space-y-6 font-mono">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">Direct Channels</h3>
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          </div>

          <div className="space-y-3 text-xs">
            {/* Email Card with 1-click copy */}
            <div className="p-3.5 rounded-xl bg-black border border-white/5 space-y-1.5">
              <span className="text-[10px] text-neutral-500 uppercase block">Email</span>
              <div className="flex items-center justify-between gap-2">
                <a
                  href={`mailto:${portfolioData.email}`}
                  className="text-white hover:underline truncate"
                >
                  {portfolioData.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copied ? <Check size={13} className="text-white" /> : <Copy size={13} />}
                </button>
              </div>
            </div>

            {/* Phone */}
            <div className="p-3.5 rounded-xl bg-black border border-white/5 space-y-1">
              <span className="text-[10px] text-neutral-500 uppercase block">Phone</span>
              <a href={`tel:${portfolioData.phone}`} className="text-white block hover:underline">
                {portfolioData.phone}
              </a>
            </div>

            {/* Location */}
            <div className="p-3.5 rounded-xl bg-black border border-white/5 space-y-1">
              <span className="text-[10px] text-neutral-500 uppercase block">Location</span>
              <span className="text-white block">{portfolioData.location}</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="pt-2 flex items-center gap-3">
            <a
              href={portfolioData.github}
              target="_blank"
              rel="noreferrer"
              className="flex-1 py-2.5 px-3 rounded-lg bg-black hover:bg-neutral-900 border border-white/10 flex items-center justify-center gap-2 text-white text-xs transition-colors"
            >
              <Github size={14} /> GitHub
            </a>
            <a
              href={portfolioData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex-1 py-2.5 px-3 rounded-lg bg-black hover:bg-neutral-900 border border-white/10 flex items-center justify-center gap-2 text-white text-xs transition-colors"
            >
              <Linkedin size={14} /> LinkedIn
            </a>
          </div>
        </div>

        {/* Message Form */}
        <div className="lg:col-span-7 rounded-2xl bg-[#0a0a0a] border border-white/10 p-6 sm:p-8 font-mono">
          <form
            action="https://formspree.io/f/mykladno"
            method="POST"
            className="space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] text-neutral-400 mb-1.5 uppercase">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 text-white placeholder:text-neutral-700 text-xs focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] text-neutral-400 mb-1.5 uppercase">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="your.email@company.com"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 text-white placeholder:text-neutral-700 text-xs focus:outline-none focus:border-white transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] text-neutral-400 mb-1.5 uppercase">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                placeholder="Role Discussion / Project Scope"
                required
                className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 text-white placeholder:text-neutral-700 text-xs focus:outline-none focus:border-white transition-colors"
              />
            </div>

            <div>
              <label className="block text-[11px] text-neutral-400 mb-1.5 uppercase">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Hello Om, let's discuss..."
                required
                className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 text-white placeholder:text-neutral-700 text-xs focus:outline-none focus:border-white transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-white hover:bg-neutral-200 text-black font-semibold active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer text-xs uppercase tracking-wider"
            >
              <span>Dispatch Message</span>
              <Send size={13} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
