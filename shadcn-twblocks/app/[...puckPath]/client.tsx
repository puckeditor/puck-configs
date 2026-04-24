"use client";

import type { Data } from "@puckeditor/core";
import { Render } from "@puckeditor/core";
import config from "../../puck";

export function Client({ data }: { data: Data }) {
  return <Render config={config} data={data} />;
}
