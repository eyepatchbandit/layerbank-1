import { createFileRoute } from "@tanstack/react-router";
import { LoaderCircle } from "lucide-react";

export const Route = createFileRoute("/connection-pending")({
  head: () => ({
    meta: [
      { title: "Connection Pending | LayerBank" },
      { name: "description", content: "Your wallet connection request is pending." },
    ],
  }),
  component: ConnectionPending,
});

function ConnectionPending() {
  return (
    <main className="grid min-h-[100svh] place-items-center bg-background px-4 text-foreground sm:px-6">
      <div className="text-center" role="status" aria-live="polite">
        <span className="mx-auto grid size-20 place-items-center rounded-full border border-border bg-card shadow-[0_24px_70px_rgba(0,0,0,0.3)] sm:size-24">
          <LoaderCircle className="size-9 animate-spin text-primary sm:size-11" aria-hidden="true" />
        </span>
        <h1 className="mt-6 text-2xl font-bold tracking-tight sm:mt-8 sm:text-4xl">Connection Pending</h1>
      </div>
    </main>
  );
}
