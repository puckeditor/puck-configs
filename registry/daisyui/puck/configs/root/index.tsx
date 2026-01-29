import { RootConfig, DropZone } from "@puckeditor/core";
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
  render: ({ theme }) => {
    return (
      <div className="min-h-[100dvh] flex flex-col" data-theme={theme}>
        <DropZone zone="default-zone" className="flex-1" />
      </div>
    );
  },
};

export default rootConfig;
