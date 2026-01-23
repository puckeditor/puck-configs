import { ComponentConfig } from "@puckeditor/core";

export type FooterProps = {
  sections: { title: string; links: { label: string; href: string }[] }[];
};

const conf: ComponentConfig<FooterProps> = {
  fields: {
    sections: {
      type: "array",
      arrayFields: {
        title: { type: "text" },
        links: {
          type: "array",
          arrayFields: {
            label: { type: "text" },
            href: { type: "text" },
          },
          defaultItemProps: { label: "Link", href: "#" },
        },
      },
      defaultItemProps: {
        title: "Section",
        links: [{ label: "Link", href: "#" }],
      },
    },
  },
  defaultProps: {
    sections: [{ title: "Section", links: [{ label: "Link 1", href: "#" }] }],
  },
  render: ({ sections }) => (
    <footer className="pt-32">
      <div className="footer bg-neutral text-neutral-content p-10">
        {sections.map((section, idx) => (
          <nav key={idx}>
            <h6 className="footer-title">{section.title}</h6>
            {section.links.map((link, idx) => (
              <a key={idx} className="link link-hover">
                {link.label}
              </a>
            ))}
          </nav>
        ))}
      </div>
    </footer>
  ),
};

export default conf;
