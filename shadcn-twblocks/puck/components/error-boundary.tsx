"use client";
import { ReactNode } from "react";
import {
  ErrorBoundary as ReactErrorBoundary,
  FallbackProps,
} from "react-error-boundary";
import { Button } from "@/components/ui/button";

export function ErrorBoundary({ children }: { children: ReactNode }) {
  return (
    <ReactErrorBoundary FallbackComponent={Fallback}>
      {children}
    </ReactErrorBoundary>
  );
}

function Fallback({ error, resetErrorBoundary }: FallbackProps) {
  const message = error instanceof Error ? error.message : String(error);
  console.log("error boundary triggered", message);
  return (
    <div
      role="alert"
      className="p-6 bg-red-500 text-white rounded-md flex flex-col gap-4 items-center justify-center"
    >
      <p>Something went wrong when rendering</p>
      <pre>{message}</pre>
      <div>
        <Button onClick={() => resetErrorBoundary()}>Retry</Button>
      </div>
    </div>
  );
}
