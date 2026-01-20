import { ComponentConfig } from "@puckeditor/core";
import {
  padding,
  image,
  paddingDefaults,
  heading,
} from "@/registry/shadcn/configs/fields";

import { Testimonials, TestimonialsProps } from "./testimonials";

export type { TestimonialsProps };

const defaultTestimonial = {
  title: "Best decision ever",
  quote:
    "Our goal was to streamline SMB trade, making it easier and faster than ever and we did it together.",
  author: {
    name: `Jane Janson`,
    image: {
      src: "https://github.com/shadcn.png",
      alt: "",
    },
  },
};

export const conf: ComponentConfig<TestimonialsProps> = {
  fields: {
    heading,
    testimonials: {
      type: "array",
      max: 10,
      getItemSummary: (
        item: TestimonialsProps["testimonials"][number],
        index = 0
      ) => item.author.name || `Testimonial ${index + 1}`,
      arrayFields: {
        title: { type: "text" },
        quote: { type: "textarea" },
        author: {
          type: "object",
          objectFields: {
            name: { type: "text" },
            image,
          },
        },
      },
      defaultItemProps: defaultTestimonial,
      ai: {
        instructions: "Generate at least 3 testimonials",
      },
    },
    padding,
  },
  defaultProps: {
    padding: paddingDefaults,
    heading: "Trusted by hundreds of businesses worldwide",
    testimonials: Array.from({ length: 5 }).map((_, index) => ({
      ...defaultTestimonial,
      title: `Best decision ${index}`,
    })),
  },
  render: Testimonials,
};

export default conf;
