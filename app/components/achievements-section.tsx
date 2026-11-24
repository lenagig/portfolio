import { achievementGroups } from "../data/portfolio-content";
import { BulletIcon } from "./icons";
import { SectionHeading } from "./section-heading";

function AchievementYear({ year, entries }: { year: string; entries: string[] }) {
  return (
    <section className="achievement-year" aria-label={`${year}年の実績`}>
      <h3 className="achievement-year__title">{year}</h3>
      <ul className="achievement-list">
        {entries.map((entry) => (
          <li className="achievement-list__item" key={entry}>
            <BulletIcon />
            <span>{entry}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function AchievementsSection() {
  return (
    <section className="achievements-section" id="achievements" aria-labelledby="achievements-title">
      <div className="section-inner">
        <SectionHeading eyebrow="AWARDS & ACTIVITIES" title="実績・活動" id="achievements-title" />
        <div className="achievements-grid">
          {achievementGroups.map((group) => (
            <AchievementYear key={group.year} {...group} />
          ))}
        </div>
      </div>
    </section>
  );
}
