import { ComponentConfig } from "@puckeditor/core";

import Content from "../../../components/content";

export type RichTextProps = {
  body: string;
};

const richTextConfig: ComponentConfig<RichTextProps> = {
  fields: {
    body: { type: "richtext", contentEditable: true },
  },
  defaultProps: {
    body: "<h1>Rich Text</h1><p>Some text...</p>",
  },
  render: ({ body }) => (
    <Content>
      <div className="sm:px-0 md:px-6">{body}</div>
    </Content>
  ),
};

export default richTextConfig;
