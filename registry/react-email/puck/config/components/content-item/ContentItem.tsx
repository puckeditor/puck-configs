import CardInternal, { CardType, CardVariant } from "../../../components/card";
import { LinkFieldProps } from "../../fields/rich-link";
import { ImageFieldProps } from "../../fields/image-url";

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
