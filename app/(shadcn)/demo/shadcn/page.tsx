import Renderer from "./client";

export const metadata = {
  title: "shadcn Puck Render Demo",
  description: "Demo of a page with shadcn/ui components built using Puck.",
};

export default function Page() {
  return (
    <>
      <Renderer />
    </>
  );
}
