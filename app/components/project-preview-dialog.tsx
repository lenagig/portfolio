"use client";

import { useEffect, useRef } from "react";
import type { Project } from "../data/portfolio-content";
import { CloseIcon, NextIcon, PlayerPlayIcon, PreviousIcon } from "./icons";

type ProjectPreviewDialogProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectPreviewDialog({ project, onClose }: ProjectPreviewDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (project && dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
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

            <div className="project-dialog__cover-slot" aria-hidden="true" />

            <div className="project-dialog__track-info">
              <p className="project-dialog__track-title">{project.name}</p>
              <p className="project-dialog__track-label">CONCEPT DEMO · INTERACTIVE WEB</p>
              <p className="project-dialog__player-summary">{project.summary}</p>
            </div>

            <div className="project-dialog__progress" aria-hidden="true">
              <span />
            </div>
            <div className="project-dialog__times" aria-hidden="true">
              <span>00:12</span>
              <span>00:28</span>
            </div>

            <div className="project-dialog__controls" role="group" aria-label="プレビュー再生コントロール">
              <button className="project-dialog__control project-dialog__control--secondary" type="button" disabled aria-label="前のトラック">
                <PreviousIcon />
              </button>
              <button className="project-dialog__control project-dialog__control--play" type="button" disabled aria-label="再生（音源準備中）">
                <PlayerPlayIcon />
              </button>
              <button className="project-dialog__control project-dialog__control--secondary" type="button" disabled aria-label="次のトラック">
                <NextIcon />
              </button>
            </div>
          </section>

          <section className="project-dialog__story" aria-label="作品概要">
            <div className="project-dialog__story-heading">
              <p className="project-dialog__eyebrow">
                <span className="project-dialog__desktop-label">作品概要</span>
                <span className="project-dialog__mobile-label">ABOUT THIS PROJECT</span>
              </p>
              <button className="project-dialog__close" onClick={closeDialog} type="button" aria-label="閉じる">
                <CloseIcon />
              </button>
            </div>

            <h2 className="project-dialog__title">
              {project.name}
            </h2>
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

            <button className="project-dialog__cta" type="button" disabled aria-label="プロジェクト詳細（準備中）">
              <span>プロジェクト詳細を見る</span>
              <span aria-hidden="true">↗</span>
            </button>
            <p className="project-dialog__mobile-sound">SOUND OFF · PAUSED</p>
          </section>
        </>
      )}
    </dialog>
  );
}
