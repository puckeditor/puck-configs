import * as React from "react";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">Puck Registry</h1>
        <p className="text-muted-foreground">
          A shadcn registry for distributing puck configs.
        </p>
      </header>
      <main className="flex flex-col flex-1 gap-8">
        TODO: Add registry docs
      </main>
    </div>
  );
}
