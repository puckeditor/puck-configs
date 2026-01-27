import { ComponentConfig } from "@puckeditor/core";

export type CardProps = {
  title: string;
  body: string;
  img: { src: string; alt: string };
  cta: { label: string; href: string };
};

const conf: ComponentConfig<CardProps> = {
  fields: {
    title: { type: "text" },
    body: { type: "text" },
    cta: {
      type: "object",
      objectFields: {
        label: { type: "text" },
        href: { type: "text" },
      },
    },
    img: {
      type: "object",
      objectFields: {
        src: { type: "text" },
        alt: { type: "text" },
      },
    },
  },
  defaultProps: {
    title: "Title",
    body: "",
    img: { src: "", alt: "" },
    cta: { href: "#", label: "Learn more" },
  },
  render: ({ title, body, img, cta }) => (
    <div className="card bg-base-100 w-full shadow-sm">
      {img.src && img.alt && (
        <figure>
          <img className="w-full" src={img.src} alt={img.alt} />
        </figure>
      )}
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{body}</p>
        <div className="card-actions justify-end">
          <a className="btn btn-primary" href={cta.href}>
            {cta.label}
          </a>
        </div>
      </div>
    </div>
  ),
};

export default conf;
