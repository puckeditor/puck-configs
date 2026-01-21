import CardInternal, { CardType, CardVariant } from "@/registry/react-email/components/card";
import { LinkFieldProps } from "@/registry/react-email/puck/config/fields/link";
import { ImageFieldProps } from "@/registry/react-email/puck/config/fields/image";

export type ContentItemProps = {
  type: CardType;
  image: ImageFieldProps;
  title: string;
  description: string;
  tag: string;
  price?: string;
  button: LinkFieldProps;
  variant: CardVariant;
};

const ContentItem = (props: ContentItemProps) => {
  return (
    <CardInternal
      type={props.type}
      variant={props.variant}
      image={{ src: props.image.src, alt: props.image.alt }}
      tag={props.tag}
      title={props.title}
      description={props.description}
      price={props.price}
      button={{
        href: props.button.href,
        label: props.button.label,
        icon: props.button.icon,
      }}
    />
  );
};

export default ContentItem;
