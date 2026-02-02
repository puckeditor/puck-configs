"use client";

import conf from "@/registry/react-email/puck/config";

import LocalStorageEditor from "@/components/local-storage-editor";

export default function Editor() {
  return (
    <LocalStorageEditor
      pageUrl="/demo/react-email"
      config={conf}
      dataKey="react-email-puck-data"
    />
  );
}
