import { timelineEvents } from "../data/portfolio-content";
import { TimelineNodeIcon } from "./icons";
import { SectionHeading } from "./section-heading";

function TimelineEvent({ date, dateTime, title }: { date: string; dateTime?: string; title: string }) {
  return (
    <li className="timeline-event">
      {dateTime ? (
        <time className="timeline-event__date" dateTime={dateTime}>{date}</time>
      ) : (
        <span className="timeline-event__date">{date}</span>
      )}
      <span className="timeline-event__node" aria-hidden="true">
        <TimelineNodeIcon />
      </span>
      <p className="timeline-event__title">{title}</p>
    </li>
  );
}

export function HistorySection() {
  return (
    <section className="history-section" id="history" aria-labelledby="history-title">
      <div className="section-inner history-section__inner">
        <SectionHeading eyebrow="HISTORY" title="来歴" id="history-title" />
        <ol className="timeline-list">
          {timelineEvents.map((event) => (
            <TimelineEvent key={`${event.date}-${event.title}`} {...event} />
          ))}
        </ol>
      </div>
    </section>
  );
}
