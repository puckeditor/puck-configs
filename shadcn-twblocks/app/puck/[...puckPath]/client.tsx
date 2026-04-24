"use client";

import type { Data } from "@puckeditor/core";
import { Puck } from "@puckeditor/core";
import { createAiPlugin } from "@puckeditor/plugin-ai";
import config, { EditorModeProvider } from "@/puck";

const aiPlugin = createAiPlugin();

export function Client({ path, data }: { path: string; data: Partial<Data> }) {
  return (
    <EditorModeProvider isEditor>
      <Puck
        config={config}
        data={data}
        onPublish={async (data) => {
          await fetch("/puck/api", {
            method: "post",
            body: JSON.stringify({ data, path }),
          });
        }}
        plugins={[aiPlugin]}
      />
    </EditorModeProvider>
  );
}
