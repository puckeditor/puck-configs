import { Data } from "@puckeditor/core";

/** Empty Puck data */
export const emptyData = {
  root: { props: { title: "" } },
  content: [],
} as const satisfies Data;
