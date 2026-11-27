"use client";

import Image from "next/image";
import { useState } from "react";
import type { Project } from "../data/projects";
import { PreviewPlayIcon } from "./icons";
import { ProjectPreviewDialog } from "./project-preview-dialog";

function ProjectCard({ project, onPreview }: { project: Project; onPreview: (project: Project) => void }) {
  return (
    <article className="project-card">
      <div className="project-preview" style={{ backgroundColor: project.cover.backgroundColor }}>
        {project.cover.backgroundImage && (
          <Image
            className="project-preview__background"
            src={project.cover.backgroundImage}
            alt=""
            fill
            sizes="(max-width: 620px) 100vw, (max-width: 900px) 50vw, 33vw"
          />
        )}
        <Image
          className="project-preview__image"
          src={project.cover.src}
          alt={project.cover.alt}
          fill
          sizes="(max-width: 620px) 100vw, (max-width: 900px) 50vw, 33vw"
        />
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
    </article>
  );
}

export function ProjectGallery({ projects }: { projects: Project[] }) {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const selectedProject = projects.find((project) => project.id === selectedProjectId) ?? null;

  function navigateProject(direction: -1 | 1) {
    setSelectedProjectId((currentId) => {
      const currentIndex = projects.findIndex((project) => project.id === currentId);
      if (currentIndex < 0 || projects.length < 2) return currentId;

      const nextIndex = (currentIndex + direction + projects.length) % projects.length;
      return projects[nextIndex].id;
    });
  }

  return (
    <>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onPreview={(project) => setSelectedProjectId(project.id)} />
        ))}
      </div>
      <ProjectPreviewDialog
        project={selectedProject}
        onClose={() => setSelectedProjectId(null)}
        onNavigate={navigateProject}
        canNavigate={projects.length > 1}
      />
    </>
  );
}
