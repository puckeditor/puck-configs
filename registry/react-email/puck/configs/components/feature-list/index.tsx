import { ComponentConfig } from "@puckeditor/core";

import FeatureList, { FeatureListProps } from "./FeatureList";
import sectionTextField, {
  defaultSectionTextValue,
} from "@/registry/react-email/puck/configs/fields/section-text";
import createSummaryFunc from "@/registry/lib/create-summary-func";

export type { FeatureListProps };

const featureListConfig: ComponentConfig<{ props: FeatureListProps }> = {
  fields: {
    ...sectionTextField.objectFields,
    features: {
      type: "array",
      max: 4,
      arrayFields: {
        title: { type: "text", contentEditable: true },
        description: { type: "textarea", contentEditable: true },
      },
      getItemSummary: createSummaryFunc((item) => item.title),
      defaultItemProps: {
        title: "Title",
        description: "Feature description.",
      },
    },
  },
  defaultProps: {
    ...defaultSectionTextValue,
    features: [
      {
        title: "Title",
        description: "Feature description.",
      },
      {
        title: "Title",
        description: "Feature description.",
      },
      {
        title: "Title",
        description: "Feature description.",
      },
      {
        title: "Title",
        description: "Feature description.",
      },
    ],
  },
  render: FeatureList,
};

export default featureListConfig;
