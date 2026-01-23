import { ComponentConfig } from "@puckeditor/core";

export type AccordionProps = {
  title: string;
  items: { title: string; body: string }[];
};

const conf: ComponentConfig<AccordionProps> = {
  fields: {
    title: { type: "text" },
    items: {
      type: "array",
      arrayFields: {
        title: { type: "text" },
        body: { type: "textarea" },
      },
      defaultItemProps: {
        title: "Accordion item",
        body: "",
      },
    },
  },
  defaultProps: {
    title: "Accordion",
    items: [{ title: "Accordion item", body: "Body" }],
  },
  render: ({ title, items }) => (
    <div className="flex flex-col gap-4 max-w-7xl mx-auto py-16 px-4 prose">
      <h2 className="text-center">{title}</h2>
      {items.map((item, idx) => (
        <div key={idx} className="collapse bg-base-200">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-xl font-medium">{item.title}</div>
          <div className="collapse-content">
            <p>{item.body}</p>
          </div>
        </div>
      ))}
    </div>
  ),
};

export default conf;
