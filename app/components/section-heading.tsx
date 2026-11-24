type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  id?: string;
  compact?: boolean;
};

export function SectionHeading({ eyebrow, title, id, compact = false }: SectionHeadingProps) {
  return (
    <div className={`section-heading${compact ? " section-heading--compact" : ""}`}>
      <p className="section-heading__eyebrow">{eyebrow}</p>
      <h2 className="section-heading__title" id={id}>
        {title}
      </h2>
    </div>
  );
}
