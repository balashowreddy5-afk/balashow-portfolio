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
    title: "Database & Production",
    description:
      "Working with persistent application data, version control and production deployment workflows.",
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
      "A full-stack compliance management application built to help organizations manage obligations, risks, tasks, evidence, reviews, frameworks, reporting and team activity from one centralized workspace.",

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

    highlights: [
      "Built a centralized compliance dashboard with status metrics and priority actions",
      "Implemented workflows for obligations, risks, tasks, evidence and reviews",
      "Added authentication and role-based access for protected application areas",
      "Used PostgreSQL and Prisma for persistent application data",
      "Deployed the full application to a live production environment",
    ],

    stack: "React · Node.js · PostgreSQL · Prisma",
    liveUrl: "https://regulyn.onrender.com/home",
  },

  {
    id: "registry-connect",
    type: "BUSINESS PLATFORM",
    title: "Registry Connect",
    status: "Live Project",
    image: registryConnectHome,
    alt: "Registry Connect homepage",

    description:
      "A business registry and compliance platform built to provide a responsive public experience for company management, documents, compliance requirements and business records.",

    features: [
      "Responsive UI",
      "Multi-Page Experience",
      "Authentication",
      "SEO Optimization",
      "SSR / Prerendering",
      "Secure Headers",
      "Production Deployment",
    ],

    highlights: [
      "Built responsive public pages and authenticated application areas",
      "Implemented company, compliance and document-management workflows",
      "Added route-specific SEO metadata and prerendered HTML",
      "Configured security headers and search-engine controls for private routes",
      "Deployed the frontend and production application infrastructure on Render",
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
              I'm Balashow Reddy Basani, a full-stack web developer focused on building
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
                I build modern full-stack web applications focused on clean interfaces, practical functionality and real-world business needs.
              </p>

              <p>
               My experience includes building responsive React interfaces, developing backend functionality with Node.js, working with REST APIs, PostgreSQL and Prisma, and implementing authentication, role-based access and CRUD workflows.
              </p>

              <p>
                I've built and deployed two substantial projects — Regulyn, a compliance management platform, and Registry Connect, a business registry platform — taking them from initial concept through development and production deployment.
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

<div className="project-highlights">
  <p className="project-highlights-title">WHAT I BUILT</p>

  <ul>
    {project.highlights.map((highlight) => (
      <li key={highlight}>{highlight}</li>
    ))}
  </ul>
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
               I'm available for remote full-stack development opportunities, freelance projects and collaborations with clients and teams worldwide.
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