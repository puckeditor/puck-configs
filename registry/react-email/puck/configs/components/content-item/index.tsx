import { ComponentConfig } from "@puckeditor/core";

import cardField, {
  defaultCardProps,
  resolveCardFields,
} from "@/registry/react-email/puck/configs/fields/card-content";

import ContentItem, { ContentItemProps } from "./ContentItem";

export type { ContentItemProps };

const contentItemConfig: ComponentConfig<ContentItemProps> = {
  ai: {
    instructions:
      "A card component for emails. use it to display a summary of content and a link to it. you can use this to display products, articles, or any other type of content. the featured variant makes it more prominent, so use it to highlight important content.",
  },
  fields: cardField.objectFields,
  resolveFields: (data, params) => {
    return resolveCardFields(data.props, { fields: params.fields });
  },
  defaultProps: defaultCardProps,
  render: ContentItem,
};

export default contentItemConfig;
