import "@puckeditor/core/puck.css";
import Editor from "./client";

export const metadata = {
  title: "React Email Puck Editor Demo",
  description: "Demo of the Puck editor using React Email components to build emails.",
};

export default function Page() {
  return <Editor />;
}
