"use client";

import { Data, Puck } from "@puckeditor/core";

import conf from "@/registry/react-email/puck/configs";
import { useLocalStorageJson } from "@/hooks/use-local-storage-json";
import LoadingIndicator from "@/components/loading-indicator";

import { emptyData } from "@/lib/puck-data/empty-data";

export default function Editor() {
  const [initialData, saveData] = useLocalStorageJson<Data>(
    "react-email-puck-data",
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
