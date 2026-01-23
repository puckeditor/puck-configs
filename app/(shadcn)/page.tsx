import * as React from "react";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-4">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">Puck Registry</h1>
        <p className="text-muted-foreground">
          A shadcn registry for distributing puck configs.
        </p>
      </header>
      <hr />
      <main className="flex flex-col flex-1 gap-1">
        <p>
          This page is under construction. In the meantime, you can check out
          the{" "}
          <a
            href="https://puckeditor.com/docs"
            rel="noopener noreferrer"
            className="text-sky-800 hover:underline font-semibold"
          >
            docs
          </a>{" "}
          or demos for the distributed Puck configs:
        </p>
        <ul className="list-disc list-inside flex flex-col">
          <li>
            <a
              href="/demo/shadcn/edit"
              className="text-sky-800 hover:underline font-semibold"
            >
              Shadcn
            </a>
          </li>
          <li>
            <a
              href="/demo/react-email/edit"
              className="text-sky-800 hover:underline font-semibold"
            >
              React Email
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
}
