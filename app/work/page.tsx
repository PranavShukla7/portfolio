import { workExperience } from "../data/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Work | Pranav Shukla",
    description: "Where I have worked and what I have done.",
};

export default function WorkPage() {
    return (
        <div className="fade-in">
            <h1 className="page-title">Experience</h1>
            <p className="page-subtitle">
                My professional experience and contributions.
            </p>
            <div className="work-list">
                {workExperience.map((work, i) => (
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
        </div>
    );
}
