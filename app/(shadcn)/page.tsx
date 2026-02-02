import * as React from "react";
import { libraries } from "@/lib/constants/libraries";

export default function Home() {
  const libraryLinks = libraries.map((lib) => (
    <li key={lib.href}>
      <a
        href={`/demo/${lib.href}/edit`}
        className="text-sky-800 hover:underline font-semibold"
      >
        {lib.label}
      </a>
    </li>
  ));

  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-4">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">Puck Registry</h1>
        <p className="text-muted-foreground">
          A shadcn registry for distributing Puck components.
        </p>
      </header>
      <hr />
      <main className="flex flex-col flex-1 gap-1">
        <p>
          Try out the demo for each library below, or visit the{" "}
          <a
            href="https://puckeditor.com/docs"
            rel="noopener noreferrer"
            className="text-sky-800 hover:underline font-semibold"
          >
            docs
          </a>{" "}
          to get started.
        </p>
        <ul className="list-disc list-inside flex flex-col">{libraryLinks}</ul>
      </main>
    </div>
  );
}
