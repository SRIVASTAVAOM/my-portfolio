import React, { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, FileDown } from "lucide-react";
import portfolioData from "../../data/portfolioData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Terminal", href: "#terminal" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-[#050505]/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Monospaced Identifier */}
        <a
          href="#home"
          className="flex items-center gap-2.5 font-mono text-xs font-semibold text-white tracking-widest uppercase hover:text-neutral-300 transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span>OM.SRIVASTAVA</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 font-mono text-xs text-neutral-400">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="h-4 w-[1px] bg-white/10" />

          {/* Social Links & Resume Button */}
          <div className="flex items-center gap-2">
            <a
              href={portfolioData.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-900 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={16} />
            </a>
            <a
              href={portfolioData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-900 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={portfolioData.resume}
              download
              className="ml-2 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-black bg-white hover:bg-neutral-200 rounded-md font-semibold transition-all"
            >
              <FileDown size={13} />
              <span>Resume</span>
            </a>
          </div>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-neutral-300 hover:text-white"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-b border-white/10 px-6 py-5 space-y-4 font-mono text-sm">
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-neutral-300 hover:text-white"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="pt-3 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href={portfolioData.github}
                target="_blank"
                rel="noreferrer"
                className="text-neutral-400 hover:text-white"
              >
                <Github size={18} />
              </a>
              <a
                href={portfolioData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-neutral-400 hover:text-white"
              >
                <Linkedin size={18} />
              </a>
            </div>
            <a
              href={portfolioData.resume}
              download
              className="px-3 py-1 text-xs text-black bg-white font-semibold rounded"
            >
              Resume.pdf
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
