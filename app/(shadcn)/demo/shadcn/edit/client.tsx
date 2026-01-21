"use client";

import { Puck } from "@puckeditor/core";
import conf from "@/registry/shadcn/configs";

export default function Editor() {
  return <Puck config={conf} data={{}} />;
}
