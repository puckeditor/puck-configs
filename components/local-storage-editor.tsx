"use client";

import { Button, Config, Data, Puck } from "@puckeditor/core";

import { emptyData } from "@/lib/puck-data/empty-data";
import { useLocalStorageJson } from "@/hooks/use-local-storage-json";

import LoadingIndicator from "./loading-indicator";

const LocalStorageEditor = ({
  config,
  dataKey,
  pageUrl,
}: {
  config: Config;
  dataKey: string;
  pageUrl?: string;
}) => {
  const [initialData, saveData] = useLocalStorageJson<Data>(dataKey, emptyData);

  if (!initialData) {
    return <LoadingIndicator />;
  }

  return (
    <Puck
      overrides={{
        headerActions: ({ children }) => {
          return (
            <>
              <Button variant="secondary" href={pageUrl}>
                View page
              </Button>
              {children}
            </>
          );
        },
      }}
      config={config}
      data={initialData}
      onPublish={(data) => saveData(data)}
    />
  );
};

export default LocalStorageEditor;
