import { RootConfig } from "@puckeditor/core";

const rootConfig: RootConfig = {
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
