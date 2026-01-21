"use client";

import { Render } from "@puckeditor/core";
import conf from "@/registry/react-email/puck/configs";

export default function Renderer() {
  return <Render config={conf} data={{}} />;
}
