import { ReactNode } from "react";
import { ObjectField, RichTextMenu } from "@puckeditor/core";
import "@puckeditor/ai-types";

export type SectionTextFieldProps = {
  title: ReactNode;
  description: ReactNode;
};

export const defaultSectionTextValue: SectionTextFieldProps = {
  title: "Title",
  description: "Description",
};

const sectionTextField: ObjectField<SectionTextFieldProps> = {
  type: "object",
  objectFields: {
    title: {
      type: "text",
      contentEditable: true,
      ai: {
        instructions:
          "Don't use sample content unless asked explicitly by the user",
      },
    },
    description: {
      type: "richtext",
      contentEditable: true,
      options: {
        heading: false,
        textAlign: false,
        blockquote: false,
        codeBlock: false,
        listItem: false,
        bulletList: false,
        orderedList: false,
      },
      renderMenu: () => {
        return (
          <RichTextMenu>
            <RichTextMenu.Group>
              <RichTextMenu.Bold />
              <RichTextMenu.Italic />
              <RichTextMenu.Underline />
            </RichTextMenu.Group>
          </RichTextMenu>
        );
      },
      ai: {
        instructions:
          "Don't use sample content unless asked explicitly by the user",
      },
    },
  },
};

export default sectionTextField;
