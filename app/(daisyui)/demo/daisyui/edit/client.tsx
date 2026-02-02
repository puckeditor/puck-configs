"use client";

import conf from "@/registry/daisyui/puck/configs";

import LocalStorageEditor from "@/components/local-storage-editor";

export default function Editor() {
  return (
    <LocalStorageEditor
      pageUrl="/demo/daisyui"
      config={conf}
      dataKey="daisyui-puck-data"
      overrides={{
        fieldTypes: {
          richtext: ({ children }) => {
            return <div className="prose">{children}</div>;
          },
        },
      }}
    />
  );
}
