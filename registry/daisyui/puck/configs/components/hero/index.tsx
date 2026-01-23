import { ComponentConfig } from "@puckeditor/core";

export type HeroProps = {
  title: string;
  description: string;
  cta: { label: string; href: string };
};

const conf: ComponentConfig<HeroProps> = {
  fields: {
    title: { type: "text" },
    description: { type: "textarea" },
    cta: {
      type: "object",
      objectFields: {
        label: { type: "text" },
        href: { type: "text" },
      },
    },
  },
  defaultProps: {
    title: "Title",
    description: "Lorem ipsum",
    cta: { href: "#", label: "Learn more" },
  },
  render: ({ title, description, cta }) => (
    <div className="hero bg-base-200 py-24">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="py-6">{description}</p>
          <a className="btn btn-primary" href={cta.href}>
            {cta.label}
          </a>
        </div>
      </div>
    </div>
  ),
};

export default conf;
