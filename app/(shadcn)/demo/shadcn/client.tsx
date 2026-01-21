"use client";

import { Render } from "@puckeditor/core";
import conf from "@/registry/shadcn/configs";

export default function Renderer() {
  return <Render config={conf} data={{}} />;
}
