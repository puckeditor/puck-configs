"use client";

import { Render } from "@puckeditor/core";

import conf from "@/registry/shadcn/puck/config";
import { useLocalStorageJson } from "@/hooks/use-local-storage-json";
import LoadingIndicator from "@/components/loading-indicator";
import FloatingButton from "@/components/floating-button";
import { emptyData } from "@/lib/puck-data/empty-data";

export default function Renderer() {
  const [data] = useLocalStorageJson("shadcn-puck-data", emptyData);

  if (!data) {
    return <LoadingIndicator />;
  }

  return (
    <>
      <Render config={conf} data={data} />
      <FloatingButton href="/demo/shadcn/edit">Edit Page</FloatingButton>
    </>
  );
}
