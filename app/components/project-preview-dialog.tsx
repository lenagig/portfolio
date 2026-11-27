"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { Project } from "../data/projects";
import { CloseIcon, NextIcon, PlayerPlayIcon, PreviousIcon } from "./icons";

type ProjectPreviewDialogProps = {
  project: Project | null;
  onClose: () => void;
  onNavigate: (direction: -1 | 1) => void;
  canNavigate: boolean;
};

export function ProjectPreviewDialog({ project, onClose, onNavigate, canNavigate }: ProjectPreviewDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const storyRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (project && dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
    }
    if (project && storyRef.current) {
      storyRef.current.scrollTop = 0;
    }
  }, [project]);

  function closeDialog() {
    dialogRef.current?.close();
  }

  return (
    <dialog
      className="project-dialog"
      ref={dialogRef}
      onClick={(event) => {
        if (event.target === dialogRef.current) closeDialog();
      }}
      onClose={onClose}
      onKeyDown={(event) => {
        if (!event.currentTarget.open || !canNavigate || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
        if (event.target instanceof HTMLElement && event.target.closest("input, textarea, select, [contenteditable]")) return;
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          onNavigate(event.key === "ArrowLeft" ? -1 : 1);
        }
      }}
      aria-label={project ? `${project.name} のプレビュー` : undefined}
    >
      {project && (
        <>
          <div className="project-dialog__mobile-bar">
            <button className="project-dialog__mobile-close" onClick={closeDialog} type="button" aria-label="閉じる">
              <CloseIcon />
            </button>
            <p>作品プレビュー</p>
            <span aria-hidden="true" />
          </div>

          <section className="project-dialog__player" aria-label={`${project.name} のプレビュー画面`}>
            <p className="project-dialog__player-eyebrow">
              {project.number} <span aria-hidden="true">/</span> {project.name}
            </p>

            <div className="project-dialog__cover-slot" style={{ backgroundColor: project.cover.backgroundColor }}>
              {project.cover.backgroundImage && (
                <Image
                  className="project-dialog__cover-background"
                  src={project.cover.backgroundImage}
                  alt=""
                  fill
                  sizes="(max-width: 820px) 354px, 356px"
                />
              )}
              <Image
                className="project-dialog__cover-image"
                src={project.cover.src}
                alt={project.cover.alt}
                fill
                sizes="(max-width: 820px) 354px, 356px"
              />
            </div>

            <div className="project-dialog__track-info">
              <p className="project-dialog__track-title" aria-live="polite" aria-atomic="true">{project.name}</p>
              <p className="project-dialog__player-summary">{project.summary}</p>
            </div>

            <div className="project-dialog__progress" aria-hidden="true">
              <span />
            </div>
            <div className="project-dialog__times" aria-hidden="true">
              <span>00:00</span>
              <span>--:--</span>
            </div>

            <div className="project-dialog__controls" role="group" aria-label="作品切り替えとプレビュー再生">
              <button
                className="project-dialog__control project-dialog__control--secondary"
                type="button"
                onClick={() => onNavigate(-1)}
                disabled={!canNavigate}
                aria-label="前の作品"
              >
                <PreviousIcon />
              </button>
              <button className="project-dialog__control project-dialog__control--play" type="button" disabled aria-label="再生（音源準備中）">
                <PlayerPlayIcon />
              </button>
              <button
                className="project-dialog__control project-dialog__control--secondary"
                type="button"
                onClick={() => onNavigate(1)}
                disabled={!canNavigate}
                aria-label="次の作品"
              >
                <NextIcon />
              </button>
            </div>
          </section>

          <section className="project-dialog__story" ref={storyRef} aria-label="作品概要">
            <div className="project-dialog__story-heading">
              <h2 className="project-dialog__eyebrow">
                <span className="project-dialog__desktop-label">作品概要</span>
                <span className="project-dialog__mobile-label">ABOUT THIS PROJECT</span>
              </h2>
              <button className="project-dialog__close" onClick={closeDialog} type="button" aria-label="閉じる">
                <CloseIcon />
              </button>
            </div>

            <h3 className="project-dialog__mobile-story-title">作品紹介</h3>
            <p className="project-dialog__summary">{project.summary}</p>
            <p className="project-dialog__description">{project.description}</p>
            <div className="project-dialog__divider" />

            <dl className="project-dialog__details">
              <div>
                <dt>使用技術</dt>
                <dd>{project.stack}</dd>
              </div>
              <div>
                <dt>役割</dt>
                <dd>{project.role}</dd>
              </div>
            </dl>

            <a className="project-dialog__cta" href={project.protopediaUrl} target="_blank" rel="noopener noreferrer">
              <span>詳細を見る</span>
              <span aria-hidden="true">↗</span>
            </a>
            <p className="project-dialog__mobile-sound">SOUND OFF · PAUSED</p>
          </section>
        </>
      )}
    </dialog>
  );
}
