import React, { useState, useEffect } from "react";
import "./index.css";
import portfolioData from "./data/portfolioData";

function App() {
  // Default = Light Mode
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
    }
  }, [darkMode]);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">{portfolioData.name}</div>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <button
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀ Light" : "🌙 Dark"}
        </button>
      </nav>

      <main>
        {/* Hero */}
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="intro">Hello, I'm</p>

            <h1>{portfolioData.name}</h1>

            <h2>{portfolioData.title}</h2>

            <p className="tagline">{portfolioData.tagline}</p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-btn">
                View My Work
              </a>

              <a
                href={portfolioData.resume}
                download
                className="secondary-btn"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="hero-image">
            <img src="/profile.jpg" alt="Om Kumar" />
          </div>
        </section>

        {/* About */}
        <section id="about" className="section">
          <h3>About Me</h3>
          <p>{portfolioData.about}</p>
        </section>

        {/* Projects */}
        <section id="projects" className="section">
          <h3>Projects</h3>

          {portfolioData.projects.map((project, index) => (
            <div key={index} className="project-card">
              <h4>{project.title}</h4>
              <p>{project.tech}</p>
              <p>{project.description}</p>
            </div>
          ))}
        </section>

        {/* Skills */}
        <section id="skills" className="section">
          <h3>Skills</h3>

          {Object.entries(portfolioData.skills).map(([category, skills]) => (
            <div key={category} className="skill-box">
              <h4>{category}</h4>
              <p>{skills.join(" • ")}</p>
            </div>
          ))}
        </section>

        {/* Contact */}
        <section id="contact" className="section">
          <h3>Contact Me</h3>

          <form
            className="contact-form"
            action="https://formspree.io/f/mykladno"
            method="POST"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              required
            ></textarea>

            <button type="submit" className="primary-btn">
              Send Message
            </button>
          </form>

          <div className="social-links">
            <a
              href={portfolioData.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href={portfolioData.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </section>

        <footer className="footer">
  <h3>{portfolioData.name}</h3>

  <p>Software Developer | Full Stack & Cloud Enthusiast</p>

  <div className="footer-links">
    <a
      href={portfolioData.github}
      target="_blank"
      rel="noreferrer"
    >
      GitHub
    </a>

    <a
      href={portfolioData.linkedin}
      target="_blank"
      rel="noreferrer"
    >
      LinkedIn
    </a>
  </div>

  <p className="copyright">
    © 2026 Om Kumar. All Rights Reserved.
  </p>
</footer>
      </main>
    </>
  );
}

export default App;