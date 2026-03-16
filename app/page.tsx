import Link from "next/link";
import {
  workExperience,
  projects,
  socialLinks,
} from "./data/content";

const skills = [
  { name: "React", highlight: true },
  { name: "Next.js", highlight: true },
  { name: "TypeScript", highlight: true },
  { name: "JavaScript", highlight: false },
  { name: "HTML / CSS", highlight: false },
  { name: "Tailwind CSS", highlight: false },
  { name: "Node.js", highlight: false },
  { name: "Python", highlight: false },
  { name: "Django", highlight: false },
  { name: "Supabase", highlight: false },
  { name: "Git", highlight: false },
  { name: "REST APIs", highlight: false },
];

export default function Home() {
  const recentWork = workExperience.slice(0, 2);
  const recentProjects = projects.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <h1 className="hero-greeting">Pranav Shukla</h1>
        <p className="hero-bio">
          Frontend Engineer focused on building high-quality, performant, and
          inclusive web applications. I specialize in React, Next.js, and
          TypeScript, with a strong emphasis on clean code and exceptional user
          experience. Open source contributor and lifelong learner.
        </p>
        <div className="hero-actions">
          <a
            href={socialLinks.resume}
            className="resume-btn-hero"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </div>
      </section>


      {/* Skills */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Tech Stack</h2>
        </div>
        <div className="skills-grid">
          {skills.map((skill) => (
            <span
              key={skill.name}
              className={`skill-tag ${skill.highlight ? "highlight" : ""}`}
            >
              {skill.name}
            </span>
          ))}
        </div>
      </section>

      {/* Work Experience */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Experience</h2>
          <Link href="/work" className="section-link">
            View all →
          </Link>
        </div>
        <div className="work-list">
          {recentWork.map((work, i) => (
            <div key={i} className="work-card">
              <span className="work-date">{work.dateRange}</span>
              <div className="work-info">
                <span className="work-company">
                  {work.company}
                  {work.org && (
                    <span style={{ color: "var(--text-muted)" }}>
                      {" "}
                      {work.org}
                    </span>
                  )}
                </span>
                <span className="work-role">{work.role}</span>
                <p className="work-desc">{work.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <Link href="/projects" className="section-link">
            View all →
          </Link>
        </div>
        <div className="project-list">
          {recentProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="project-card"
            >
              <div className="project-title">{project.title}</div>
              <div className="project-desc">{project.description}</div>
              {project.tags && (
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
      </section>

      {/* Connect */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
        </div>
        <p className="connect-text">
          I&apos;m always open to discussing new projects, frontend engineering
          opportunities, or just chatting about the latest in web development.
          Feel free to reach out via any of the channels below.
        </p>
        <ul className="social-links">
          <li>
            <a
              href={socialLinks.github}
              className="social-link-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href={socialLinks.x}
              className="social-link-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              X (Twitter)
            </a>
          </li>
          <li>
            <a href={socialLinks.email} className="social-link-btn">
              Email
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}
