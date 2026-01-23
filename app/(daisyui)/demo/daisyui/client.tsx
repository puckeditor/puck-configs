"use client";

import { Render } from "@puckeditor/core";

import conf from "@/registry/daisyui/puck/configs";
import { useLocalStorageJson } from "@/hooks/use-local-storage-json";
import LoadingIndicator from "@/components/loading-indicator";
import FloatingButton from "@/components/floating-button";
import { emptyData } from "@/lib/puck-data/empty-data";

export default function Renderer() {
  const [data] = useLocalStorageJson("daisyui-puck-data", emptyData);

  if (!data) {
    return <LoadingIndicator />;
  }

  return (
    <>
      <Render config={conf} data={data} />
      <FloatingButton href="/demo/daisyui/edit">Edit Page</FloatingButton>
    </>
  );
}
