import { ReactNode } from "react";
import { PuckComponent } from "@puckeditor/core";

import Content, { ContentProps } from "../../../components/content";

export type TimelineProps = {
  events: { label: ReactNode; description: ReactNode; date: string }[];
} & ContentProps;

const Timeline: PuckComponent<TimelineProps> = ({
  title,
  description,
  events,
}) => {
  const eventItems = events.map((event, idx) => (
    <li key={idx}>
      {idx !== 0 && <hr />}
      <div className="timeline-middle">
        <div className="bg-neutral rounded-full h-5 w-5" />
      </div>
      <div className="timeline-start max-w-md mb-10 md:text-end">
        {event.date && <time className="font-mono italic">{event.date}</time>}
        {event.label && <div className="text-lg font-black">{event.label}</div>}
        {event.description}
      </div>
      {idx < events.length - 1 && <hr />}
    </li>
  ));

  return (
    <Content title={title} description={description} textAlign="center">
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical not-prose">
        {eventItems}
      </ul>
    </Content>
  );
};

export default Timeline;
