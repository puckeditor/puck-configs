import { ComponentConfig, RichTextMenu } from "@puckeditor/core";
import "@puckeditor/ai-types";

import sectionTextField from "../../fields/section-text";
import Timeline, { TimelineProps } from "./timeline";

export type { TimelineProps };

const defaultEvent: TimelineProps["events"][number] = {
  label: "Event",
  description: "Event description",
  date: "1990",
};

const timelineConfig: ComponentConfig<TimelineProps> = {
  ai: {
    instructions:
      "Use Timeline to convey a timeline of events, leading to the present.",
  },
  fields: {
    ...sectionTextField.objectFields,
    events: {
      type: "array",
      min: 1,
      max: 5,
      arrayFields: {
        label: {
          type: "text",
          contentEditable: true,
          ai: {
            instructions: "Keep this value under 4 words.",
          },
        },
        description: {
          type: "richtext",
          contentEditable: true,
          options: {
            heading: false,
            textAlign: false,
            blockquote: false,
            listItem: false,
            orderedList: false,
            bulletList: false,
          },
          renderMenu: () => {
            return (
              <RichTextMenu>
                <RichTextMenu.Bold />
                <RichTextMenu.Italic />
                <RichTextMenu.Underline />
              </RichTextMenu>
            );
          },
          ai: {
            instructions:
              "A short description of the event, keep under 60 words.",
          },
        },
        date: {
          type: "text",
          contentEditable: true,
          ai: {
            instructions:
              'The date of the event, like "1994", "3rd May" or "Now"',
          },
        },
      },
      defaultItemProps: defaultEvent,
    },
  },
  defaultProps: {
    title: "Timeline",
    description: "Description",
    events: Array.from({ length: 3 }).map(() => defaultEvent),
  },
  render: Timeline,
};

export default timelineConfig;
