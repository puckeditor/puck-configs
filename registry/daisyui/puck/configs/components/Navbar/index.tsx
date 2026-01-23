import { ComponentConfig } from "@puckeditor/core";

export type NavbarProps = {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
};

const conf: ComponentConfig<NavbarProps> = {
  fields: {
    title: { type: "text" },
    links: {
      type: "array",
      arrayFields: {
        label: { type: "text" },
        href: { type: "textarea" },
      },
      defaultItemProps: { label: "Link", href: "#" },
    },
  },
  defaultProps: {
    title: "Title",
    links: [{ label: "Link", href: "#" }],
  },
  render: ({ title, links }) => {
    return (
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">{title}</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {links.map((link, idx) => (
              <li key={idx}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  },
};

export default conf;
