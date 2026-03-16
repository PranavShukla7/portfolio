import Link from "next/link";
import { projects } from "../../data/content";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);
    if (!project) return { title: "Not Found" };

    return {
        title: `${project.title} | Pranav Shukla`,
        description: project.description,
    };
}

export default async function ProjectDetail({ params }: PageProps) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    const renderContent = (content: string) => {
        const lines = content.trim().split("\n");
        const elements: React.ReactNode[] = [];
        let currentParagraph: string[] = [];

        const flushParagraph = () => {
            if (currentParagraph.length > 0) {
                elements.push(
                    <p key={elements.length}>{currentParagraph.join(" ")}</p>
                );
                currentParagraph = [];
            }
        };

        lines.forEach((line) => {
            const trimmed = line.trim();
            if (trimmed.startsWith("## ")) {
                flushParagraph();
                elements.push(
                    <h2 key={elements.length}>{trimmed.replace("## ", "")}</h2>
                );
            } else if (trimmed.startsWith("- ")) {
                flushParagraph();
                elements.push(
                    <p key={elements.length} style={{ paddingLeft: "16px" }}>
                        • {trimmed.replace("- ", "")}
                    </p>
                );
            } else if (trimmed === "") {
                flushParagraph();
            } else {
                currentParagraph.push(trimmed);
            }
        });
        flushParagraph();

        return elements;
    };

    return (
        <div className="fade-in">
            <Link href="/projects" className="detail-back">
                ← Back to projects
            </Link>
            <h1 className="detail-title">{project.title}</h1>
            {project.tags && (
                <div className="project-tags" style={{ marginBottom: "20px" }}>
                    {project.tags.map((tag) => (
                        <span key={tag} className="project-tag">
                            {tag}
                        </span>
                    ))}
                </div>
            )}
            <div className="detail-meta">
                {project.demoUrl && (
                    <a
                        href={project.demoUrl}
                        className="detail-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Live Demo ↗
                    </a>
                )}
                {project.repoUrl && (
                    <a
                        href={project.repoUrl}
                        className="detail-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Source Code ↗
                    </a>
                )}
            </div>
            <div className="detail-content">{renderContent(project.content)}</div>
        </div>
    );
}
