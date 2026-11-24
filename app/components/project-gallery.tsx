"use client";

import { useState } from "react";
import type { Project } from "../data/portfolio-content";
import { PreviewPlayIcon } from "./icons";
import { ProjectPreviewDialog } from "./project-preview-dialog";

function ProjectCard({ project, onPreview }: { project: Project; onPreview: (project: Project) => void }) {
  return (
    <article className="project-card">
      <div className="project-preview">
        <p className="project-preview__number">{project.number}</p>
        <button
          className="project-preview__play"
          onClick={() => onPreview(project)}
          type="button"
          aria-label={`${project.name} のプレビューを開く`}
          aria-haspopup="dialog"
        >
          <span className="project-preview__label">PLAY PREVIEW</span>
          <span className="project-preview__button" aria-hidden="true">
            <PreviewPlayIcon />
          </span>
        </button>
      </div>
      <h3 className="project-card__title">{project.name}</h3>
      <p className="project-card__summary">{project.summary}</p>
    </article>
  );
}

export function ProjectGallery({ projects }: { projects: Project[] }) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.number} project={project} onPreview={setSelectedProject} />
        ))}
      </div>
      <ProjectPreviewDialog project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}
