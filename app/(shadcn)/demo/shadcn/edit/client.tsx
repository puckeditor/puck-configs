"use client";

import conf from "@/registry/shadcn/puck/config";
import LocalStorageEditor from "@/components/local-storage-editor";

export default function Editor() {
  return (
    <LocalStorageEditor
      pageUrl="/demo/shadcn"
      config={conf}
      dataKey="shadcn-puck-data"
    />
  );
}
