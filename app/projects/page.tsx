import Link from "next/link";
import { projects, ossContributions } from "../data/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects | Pranav Shukla",
    description: "A collection of my projects, with links to repositories and demos.",
};

export default function ProjectsPage() {
    return (
        <div className="fade-in">
            <h1 className="page-title">Projects</h1>
            <p className="page-subtitle">
                A selection of projects I&apos;ve built — from full-stack apps to open source contributions.
            </p>
            <div className="project-list">
                {projects.map((project) => (
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

            {/* Open Source Contributions */}
            <div className="oss-section fade-in-delay-1">
                <h2 className="oss-title">Open Source Contributions</h2>
                <div className="oss-list">
                    {ossContributions.map((oss, i) => (
                        <a
                            key={i}
                            href={oss.url}
                            className="oss-card"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ display: "block", textDecoration: "none" }}
                        >
                            <h3 className="oss-name">{oss.name}</h3>
                            <p className="oss-desc">{oss.description}</p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
