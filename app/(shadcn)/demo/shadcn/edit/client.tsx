"use client";

import { emptyData } from "@/lib/puck-data/empty-data";

import conf from "@/registry/shadcn/puck/configs";
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
