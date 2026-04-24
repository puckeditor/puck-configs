import { ObjectField } from "@puckeditor/core";

export type SectionTextFieldProps = {
  tag: string;
  title: string;
  description: string;
};

export const defaultSectionTextValue: SectionTextFieldProps = {
  tag: "Tagline",
  title: "Title",
  description: "Description",
};

const sectionTextField: ObjectField<SectionTextFieldProps> = {
  type: "object",
  objectFields: {
    tag: {
      type: "text",
      contentEditable: true,
      ai: {
        instructions:
          "Don't use sample content unless asked explicitly by the user",
      },
    },
    title: {
      type: "text",
      contentEditable: true,
      ai: {
        instructions:
          "Don't use sample content unless asked explicitly by the user",
      },
    },
    description: {
      type: "textarea",
      contentEditable: true,
      ai: {
        instructions:
          "Don't use sample content unless asked explicitly by the user",
      },
    },
  },
};

export default sectionTextField;
