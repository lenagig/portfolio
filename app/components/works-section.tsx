import { projects } from "../data/portfolio-content";
import { ProjectGallery } from "./project-gallery";
import { SectionHeading } from "./section-heading";

export function WorksSection() {
  return (
    <section className="works-section" id="works" aria-labelledby="works-title">
      <div className="section-inner">
        <SectionHeading eyebrow="WORKS" title="作品一覧" id="works-title" compact />
        <ProjectGallery projects={projects} />
      </div>
    </section>
  );
}
