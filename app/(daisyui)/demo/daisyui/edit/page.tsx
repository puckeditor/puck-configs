import "@puckeditor/core/puck.css";
import Editor from "./client";

export const metadata = {
  title: "DaisyUI Puck Editor Demo",
  description: "Demo of the Puck editor using DaisyUI components to build pages.",
};

export default function Page() {
  return <Editor />;
}
