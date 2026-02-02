import { PuckComponent } from "@puckeditor/core";
import { ImageFieldProps } from "../../fields/image";

export type FooterProps = {
  sections: { title: string; links: { label: string; href: string }[] }[];
  logo: {
    companyName: string;
    tagline: string;
  } & ImageFieldProps;
  socials: { href: string; name: string; logo: ImageFieldProps }[];
};

const Footer: PuckComponent<FooterProps> = ({ sections, logo, socials }) => {
  const sectionElements = sections.map((section, idx) => {
    return (
      <nav key={idx}>
        <h6 className="footer-title">{section.title}</h6>
        {section.links.map((link, idx) => (
          <a key={idx} className="link link-hover" href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    );
  });

  const socialElements = socials.map((social, idx) => (
    <a
      className={`cursor-pointer ${social.logo.src ? "" : "link link-hover"}`}
      href={social.href}
      key={idx}
    >
      {social.logo.src ? (
        <img
          src={social.logo.src}
          alt={social.logo.alt}
          className="h-[24px] w-[24px]"
        />
      ) : (
        social.name
      )}
    </a>
  ));

  return (
    <>
      {sectionElements.length > 0 && (
        <footer className="footer sm:footer-horizontal bg-base-200 p-10">
          {sectionElements}
        </footer>
      )}
      <footer className="footer bg-base-200 border-base-300 border-t px-10 py-4">
        <aside className="grid-flow-col items-center">
          <img src={logo.src} alt={logo.alt} className="h-[24px] w-[24px]" />
          <p>
            {logo.companyName}
            <br />
            {logo.tagline}
          </p>
        </aside>
        {socialElements.length > 0 && (
          <nav className="md:place-self-center md:justify-self-end">
            <div className="grid grid-cols-1 md:grid-cols-[auto] md:grid-flow-col gap-4">
              {socialElements}
            </div>
          </nav>
        )}
      </footer>
    </>
  );
};

export default Footer;
