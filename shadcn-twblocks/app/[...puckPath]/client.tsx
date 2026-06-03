"use client";

import type { Data } from "@puckeditor/core";
import { Render } from "@puckeditor/core";
import config, { EditorModeProvider } from "../../puck";

export function Client({ data }: { data: Data }) {
  return (
    <EditorModeProvider isEditor={false}>
      <Render config={config} data={data} />
    </EditorModeProvider>
  );
}
