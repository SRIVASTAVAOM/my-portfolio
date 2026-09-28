import React, { useState } from "react";
import { Terminal, CornerDownLeft } from "lucide-react";
import portfolioData from "../../data/portfolioData";

export default function InteractiveTerminal() {
  const initialHistory = [
    {
      type: "system",
      text: "OM-CLI [Version 2.4.0] (c) 2026 Om Kumar. Type 'help' or click commands below.",
    },
    {
      type: "command",
      text: "skills --summary",
    },
    {
      type: "output",
      text: "• Frontend: React.js, HTML5, CSS3, Tailwind CSS, Redux\n• Backend: Node.js, Express.js, REST APIs, JWT\n• Mobile: Kotlin, Android Studio, Material Design\n• Databases: MongoDB, MySQL, Firebase Firestore\n• Cloud & Tools: AWS, Git, Postman, npm",
    },
  ];

  const [history, setHistory] = useState(initialHistory);
  const [inputVal, setInputVal] = useState("");

  const handleCommand = (cmdText) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    let response = "";

    switch (trimmed) {
      case "help":
        response = "Available commands: 'about', 'skills', 'projects', 'experience', 'contact', 'clear'";
        break;
      case "about":
        response = `${portfolioData.name}: ${portfolioData.about}`;
        break;
      case "skills":
        response = Object.entries(portfolioData.skills)
          .map(([category, list]) => `[${category}]: ${list.join(", ")}`)
          .join("\n");
        break;
      case "projects":
        response = portfolioData.projects
          .map((p) => `▸ ${p.title} (${p.tech}): ${p.description}`)
          .join("\n\n");
        break;
      case "experience":
        response = portfolioData.experience
          .map((e) => `▸ ${e.role} @ ${e.company} (${e.duration})\n  ${e.points.join("\n  ")}`)
          .join("\n\n");
        break;
      case "contact":
        response = `Email: ${portfolioData.email}\nPhone: ${portfolioData.phone}\nLocation: ${portfolioData.location}\nGitHub: ${portfolioData.github}\nLinkedIn: ${portfolioData.linkedin}`;
        break;
      case "clear":
        setHistory([]);
        setInputVal("");
        return;
      default:
        response = `Command not recognized: '${cmdText}'. Type 'help' for available commands.`;
    }

    setHistory((prev) => [
      ...prev,
      { type: "command", text: cmdText },
      { type: "output", text: response },
    ]);
    setInputVal("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCommand(inputVal);
  };

  return (
    <section id="terminal" className="space-y-6 scroll-mt-28">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <span className="font-mono text-xs text-neutral-400 font-semibold tracking-wider uppercase">
            // INTERACTIVE CLI
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-1">
            Developer Terminal
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-neutral-400 font-mono">
          Query background, stack, and milestones directly via simulated shell.
        </p>
      </div>

      {/* Terminal Frame */}
      <div className="rounded-2xl bg-black border border-white/10 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
        <div className="flex items-center justify-between px-4 py-3 bg-[#0a0a0a] border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-600 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-600 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-600 inline-block" />
            <span className="ml-2 text-xs text-neutral-400 hidden sm:inline">
              guest@om-terminal:~
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            {["skills", "projects", "experience", "contact", "clear"].map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleCommand(cmd)}
                className="px-2 py-1 rounded bg-neutral-900 hover:bg-neutral-800 text-[11px] text-neutral-300 hover:text-white transition-colors"
              >
                {cmd}
              </button>
            ))}
          </div>
        </div>

        <div className="p-5 sm:p-6 min-h-[260px] max-h-[420px] overflow-y-auto space-y-4 text-neutral-200 bg-black">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              {item.type === "system" && (
                <p className="text-neutral-500 leading-relaxed">{item.text}</p>
              )}
              {item.type === "command" && (
                <div className="flex items-center gap-2 text-white font-semibold">
                  <span className="text-neutral-500">om:~$</span>
                  <span>{item.text}</span>
                </div>
              )}
              {item.type === "output" && (
                <pre className="text-neutral-300 whitespace-pre-wrap pl-4 border-l border-neutral-800 font-mono text-xs sm:text-sm leading-relaxed">
                  {item.text}
                </pre>
              )}
            </div>
          ))}

          <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-2 text-white">
            <span className="text-neutral-500 shrink-0">om:~$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Type 'help', 'skills', or 'contact'..."
              className="flex-1 bg-transparent text-white placeholder:text-neutral-700 focus:outline-none font-mono text-xs sm:text-sm"
              autoComplete="off"
              spellCheck="false"
            />
            <button
              type="submit"
              className="p-1 text-neutral-500 hover:text-white transition-colors"
              aria-label="Submit command"
            >
              <CornerDownLeft size={15} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
