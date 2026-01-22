import {
  Container,
  ContainerProps,
} from "@/registry/shadcn/components/container";

interface Link {
  label: string;
  url: string;
}

interface PrimaryLinks extends Omit<Link, "url"> {
  url?: string;
  items: Link[];
}

export interface FooterProps {
  companyName: string;
  tagLine?: string;
  padding: ContainerProps["padding"];
  address?: string;
  legalLinks: Link[];
  navigation: PrimaryLinks[];
}

export const Footer = (props: FooterProps) => {
  return (
    <Container
      padding={props.padding}
      className="bg-foreground text-background"
    >
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="flex gap-8 flex-col items-start">
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
              {props.companyName}
            </h2>
            <p className="text-lg max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
              {props.tagLine}
            </p>
          </div>
          <div className="flex gap-20 flex-row">
            <div className="flex flex-col text-sm max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
              {/* I'm not sure why, but Tailwind's "whitespace-pre-line" doesn't work here */}
              <p style={{ whiteSpace: "pre-line" }}>{props.address}</p>
            </div>
            <div className="flex flex-col text-sm max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
              {props.legalLinks.map((link, index) => (
                <a key={index} href={link.url}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          {props.navigation?.map((item, index) => (
            <div
              key={index}
              className="flex text-base gap-1 flex-col items-start"
            >
              <div className="flex flex-col gap-2">
                {item.url ? (
                  <a
                    href={item.url}
                    className="flex justify-between items-center"
                  >
                    <span className="text-xl">{item.label}</span>
                  </a>
                ) : (
                  <p className="text-xl">{item.label}</p>
                )}
                {item?.items?.map((subItem, index) => (
                  <a
                    key={index}
                    href={subItem.url}
                    className="flex justify-between items-center"
                  >
                    <span className="text-background/75">{subItem.label}</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
