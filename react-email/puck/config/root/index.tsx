import { RootConfig } from "@puckeditor/core";
import { Container } from "@react-email/components";

import widthField, {
  defaultWidthValue,
  resolveWidthValue,
  WidthFieldProps,
} from "@/puck/config/fields/width";

export type RootProps = {
  title: string;
} & WidthFieldProps;

const rootConfig: RootConfig<RootProps> = {
  fields: {
    title: { type: "text" },
    ...widthField.objectFields,
    fullWidth: {
      label: "email width",
      ...widthField.objectFields.fullWidth,
    },
  },
  defaultProps: {
    title: "My Email",
    ...defaultWidthValue,
    fullWidth: false,
  },
  resolveFields: (data, { fields }) => {
    if (!data.props) return fields;

    return resolveWidthValue(data.props, fields);
  },
  render: ({ children, fullWidth, maxWidth, puck }) => {
    return (
      <Container
        style={{
          maxWidth: fullWidth ? undefined : maxWidth,
          // Styles for the children to take full height in editor
          height: puck.isEditing ? "1px" : undefined,
          minHeight: puck.isEditing ? "100vh" : undefined,
        }}
      >
        {children}
      </Container>
    );
  },
};

export default rootConfig;
