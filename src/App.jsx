import React, { useState } from "react";
import regulynDashboard from "./assets/projects/regulyn-dashboard.png";
import registryConnectHome from "./assets/projects/registry-connect-home.png";
import "./App.css";

// Dynamic Data Configurations
const SKILLS = [
  {
    number: "01",
    title: "Frontend",
    description:
      "Building responsive, component-based user interfaces and modern web experiences.",
    tags: ["React", "JavaScript", "HTML5", "CSS3", "Vite"],
  },
  {
    number: "02",
    title: "Backend",
    description:
      "Creating application logic, APIs and server-side functionality for full-stack applications.",
    tags: ["Node.js", "REST APIs", "Authentication", "CRUD"],
  },
  {
    number: "03",
    title: "Database & Tools",
    description:
      "Working with application data, version control and production deployment workflows.",
    tags: ["PostgreSQL", "Prisma", "Git", "GitHub", "Render"],
  },
];

const PROJECTS = [
  {
    id: "regulyn",
    type: "SAAS PLATFORM",
    title: "Regulyn",
    status: "Live Project",
    image: regulynDashboard,
    alt: "Regulyn compliance dashboard",
    description:
      "A compliance management platform designed to help organizations manage obligations, risks, tasks, evidence, reviews, frameworks, reports and team activity from a central dashboard.",
    features: [
      "Compliance Dashboard",
      "Risk Management",
      "Task Management",
      "Evidence Tracking",
      "Authentication",
      "Role-Based Access",
      "PostgreSQL",
      "Prisma",
    ],
    stack: "React · Node.js · PostgreSQL · Prisma",
    liveUrl: "https://regulyn.onrender.com/login",
  },
  {
    id: "registry-connect",
    type: "BUSINESS PLATFORM",
    title: "Registry Connect",
    status: "Live Project",
    image: registryConnectHome,
    alt: "Registry Connect homepage",
    description:
      "A modern business registry platform built to provide a clean and professional experience for managing company information, compliance, documents and business records.",
    features: [
      "Responsive UI",
      "Multi-Page Experience",
      "Authentication",
      "SEO Optimization",
      "SSR / Prerendering",
      "Secure Headers",
      "Production Deployment",
    ],
    stack: "React · Vite · JavaScript · Render",
    liveUrl: "https://registry-connect.onrender.com",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="portfolio">
      <header className="navbar">
        <a
          className="logo"
          href="#home"
          aria-label="Balashow Reddy Basani — Home"
          onClick={closeMenu}
        >
          BR<span>.</span>
        </a>

        <nav
          id="primary-navigation"
          className={menuOpen ? "nav-links nav-links-open" : "nav-links"}
        >
          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>

          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>

        <a className="nav-button" href="#contact">
          Let's Talk
          </a>
   <button
  type="button"
  className="menu-button"
  aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
  aria-expanded={menuOpen}
  aria-controls="primary-navigation"
  onClick={() => setMenuOpen((open) => !open)}
>
  {menuOpen ? "✕" : "☰"}
</button>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="hero-label">FULL-STACK WEB DEVELOPER</p>

            <h1>
              Building modern
              <br />
              web applications
              <br />
              <span>that solve real problems.</span>
            </h1>

            <p className="hero-description">
              I'm Balashow Reddy Basani, a web developer focused on building
              clean, responsive and practical applications using modern web
              technologies.
            </p>

            <div className="hero-actions">
              <a className="primary-button" href="#projects">
                View My Projects
              </a>

              <a className="secondary-button" href="#contact">
                Contact Me
              </a>
            </div>

            <div className="hero-tech">
              <span>React</span>
              <span>JavaScript</span>
              <span>Node.js</span>
              <span>PostgreSQL</span>
              <span>REST APIs</span>
            </div>
          </div>

          <div className="hero-card">
            <div className="code-window">
              <div className="window-top" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="code-content">
                <p>
                  <span className="purple">const</span>{" "}
                  <span className="blue">developer</span> = {"{"}
                </p>

                <p className="indent">
                  name:{" "}
                  <span className="green">"Balashow Reddy Basani"</span>,
                </p>

                <p className="indent">
                  role: <span className="green">"Full-Stack Developer"</span>,
                </p>

                <p className="indent">
                  builds: [<span className="green">"SaaS"</span>,{" "}
                  <span className="green">"Web Apps"</span>],
                </p>

                <p className="indent">
                  focus:{" "}
                  <span className="green">"Real-world solutions"</span>
                </p>

                <p>{"};"}</p>

                <br />

                <p>
                  <span className="purple">developer</span>.
                  <span className="blue">build</span>();
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="about-section" id="about">
          <div className="section-heading">
            <p className="section-label">ABOUT ME</p>

            <h2>
              From idea to <span>working product.</span>
            </h2>
          </div>

          <div className="about-grid">
            <div className="about-content">
              <p className="about-lead">
                I build modern web applications with a focus on clean
                interfaces, practical functionality and real-world business
                needs.
              </p>

              <p>
                My development experience includes building responsive React
                applications, creating reusable components, working with APIs
                and databases, implementing authentication and CRUD
                functionality, and deploying production-ready web
                applications.
              </p>

              <p>
                I've built projects including a business registry platform and
                a compliance management application, taking them from initial
                concept through development and deployment.
              </p>
            </div>

            <div className="about-stats">
              <div className="stat-card">
                <strong>2</strong>
                <span>Major Projects</span>
              </div>

              <div className="stat-card">
                <strong>Full-Stack</strong>
                <span>Development</span>
              </div>

              <div className="stat-card">
                <strong>100%</strong>
                <span>Responsive</span>
              </div>

              <div className="stat-card">
                <strong>Live</strong>
                <span>Deployments</span>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="skills-section" id="skills">
          <div className="section-heading">
            <p className="section-label">TECHNICAL SKILLS</p>

            <h2>
              Technologies I use to <span>build.</span>
            </h2>
          </div>

          <div className="skills-grid">
            {SKILLS.map((skill) => (
              <article key={skill.number} className="skill-card">
                <p className="skill-number">{skill.number}</p>

                <h3>{skill.title}</h3>

                <p>{skill.description}</p>

                <div className="skill-tags">
                  {skill.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="projects-section" id="projects">
          <div className="section-heading">
            <p className="section-label">SELECTED PROJECTS</p>

            <h2>
              Real projects. <span>Real functionality.</span>
            </h2>
          </div>

          <div className="projects-grid">
            {PROJECTS.map((project) => (
              <article key={project.id} className="project-card">
                <div className="project-image">
                  <img
                    src={project.image}
                    alt={project.alt}
                    loading="lazy"
                  />
                </div>

                <div className="project-top">
                  <div>
                    <p className="project-type">{project.type}</p>
                    <h3>{project.title}</h3>
                  </div>

                  <span className="project-status">{project.status}</span>
                </div>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-features">
                  {project.features.map((feature) => (
                    <span key={feature}>{feature}</span>
                  ))}
                </div>

                <div className="project-footer">
                  <div className="project-stack">{project.stack}</div>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Live →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contact & Footer Section */}
        <section className="contact-section" id="contact">
          <div className="contact-card">
            <div>
              <p className="section-label">LET'S WORK TOGETHER</p>

              <h2>
                Have a project or opportunity?
                <span> Let's talk.</span>
              </h2>

              <p className="contact-description">
                I'm open to remote web development opportunities, freelance
                projects and collaborations with clients and teams worldwide.
              </p>
            </div>

            <div className="contact-actions">
              <a
                href="mailto:balashowreddy5@gmail.com"
                className="primary-button"
              >
                Email Me
              </a>

              <a
                href="https://github.com/balashowreddy5-afk"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/balashow-reddy-basani-296120219"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button"
              >
                LinkedIn
              </a>

              <a href="#projects" className="secondary-button">
                View Projects
              </a>
            </div>
          </div>

          <footer className="footer">
            <p>© 2026 Balashow Reddy Basani</p>
            <p>Full-Stack Web Developer</p>
          </footer>
        </section>
      </main>
    </div>
  );
}

export default App;