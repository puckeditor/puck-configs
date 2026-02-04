import Editor from "./client";
import "@puckeditor/core/puck.css";

export const metadata = {
  title: "shadcn Puck Editor Demo",
  description:
    "A demo of the Puck editor using shadcn/ui components to build pages.",
};

export default function Page() {
  return <Editor />;
}
