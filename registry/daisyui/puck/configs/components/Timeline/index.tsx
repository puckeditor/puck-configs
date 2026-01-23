import { ComponentConfig } from "@puckeditor/core";

export type TimelineProps = {
  title: string;
  timeline: { label: string; date: string }[];
};

const conf: ComponentConfig<TimelineProps> = {
  metadata: {
    ai: {
      instructions:
        "Use Timeline to convey a timeline of events, leading to the present. Don't add more than 5 events.",
    },
  },
  fields: {
    title: { type: "text" },
    timeline: {
      type: "array",
      arrayFields: {
        label: {
          type: "text",
          metadata: {
            ai: {
              instructions: "Keep under 15 characters",
            },
          },
        },
        date: {
          type: "text",
          metadata: {
            ai: {
              instructions:
                'The date of the event, like "1994", "3rd May" or "Now"',
            },
          },
        },
      },
      defaultItemProps: {
        label: "Event",
        date: "1990",
      },
    },
  },
  defaultProps: {
    title: "Timeline",
    timeline: [{ label: "Event", date: "1990" }],
  },
  render: ({ title, timeline }) => (
    <div className="flex items-center flex-col gap-4 max-w-7xl mx-auto my-16 px-4">
      {title && (
        <div className="prose">
          <h2 className="text-center">{title}</h2>
        </div>
      )}
      <ul className="timeline">
        {timeline.map((item, idx) => (
          <li key={idx}>
            {idx > 0 && <hr />}
            <div className="timeline-start">{item.date}</div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <div className="timeline-end timeline-box">{item.label}</div>
            {idx < timeline.length - 1 && <hr />}
          </li>
        ))}
      </ul>
    </div>
  ),
};

export default conf;
