import { PuckComponent } from "@puckeditor/core";
import {
  ArticleCard as CompoundArticleCard,
  ArticleCardProps,
} from "../../../../components/article-card";

export const ArticleCard: PuckComponent<ArticleCardProps> = ({
  puck,
  ...props
}) => (
  <CompoundArticleCard
    {...props}
    button={
      props.button
        ? { ...props.button, disableNavigation: puck.isEditing }
        : undefined
    }
  />
);

export type { ArticleCardProps };
