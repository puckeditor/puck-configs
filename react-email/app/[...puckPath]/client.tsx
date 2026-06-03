"use client";

import type { Data } from "@puckeditor/core";
import { Render } from "@puckeditor/core";
import conf from "@/puck";

export function Client({ data }: { data: Data }) {
  return <Render config={conf} data={data} />;
}
