import { RootConfig } from "@puckeditor/core";
import "@puckeditor/ai-types";

const rootConfig: RootConfig = {
  ai: {
    defaultZone: { disallow: ["ProductCard"] },
  },
  render: ({ children }) => {
    return (
      <div
        className="overflow-auto min-h-[100dvh] [&>*]:!h-[100%] [&>*]:!min-h-[100dvh]"
        data-theme="nord"
      >
        {children}
      </div>
    );
  },
};

export default rootConfig;
