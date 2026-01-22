"use client";

import { Puck } from "@puckeditor/core";

import { useLocalStorageJson } from "@/hooks/use-local-storage-json";
import LoadingIndicator from "@/components/loading-indicator";
import { emptyData } from "@/lib/puck-data/empty-data";

import conf, { Data } from "@/registry/shadcn/puck/configs";

export default function Editor() {
  const [initialData, saveData] = useLocalStorageJson<Data>(
    "shadcn-puck-data",
    emptyData,
  );

  if (!initialData) {
    return <LoadingIndicator />;
  }

  return (
    <Puck
      config={conf}
      data={initialData}
      onPublish={(data) => saveData(data)}
    />
  );
}
