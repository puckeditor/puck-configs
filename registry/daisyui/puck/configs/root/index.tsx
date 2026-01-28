import { RootConfig } from "@puckeditor/core";
import "@puckeditor/ai-types";

import { THEME } from "./theme";

const rootConfig: RootConfig = {
  fields: {
    title: { type: "text" },
    theme: {
      type: "select",
      options: THEME.map((theme) => ({ label: theme, value: theme })),
    },
  },
  ai: {
    defaultZone: { disallow: ["ProductCard"] },
  },
  render: ({ children, theme }) => {
    return (
      <div
        className="overflow-auto min-h-[100dvh] [&>*]:!h-[100%] [&>*]:!min-h-[100dvh]"
        data-theme={theme}
      >
        {children}
      </div>
    );
  },
};

export default rootConfig;
