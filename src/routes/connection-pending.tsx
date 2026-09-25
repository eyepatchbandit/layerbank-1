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
    <main className="grid min-h-screen place-items-center bg-background px-6 text-foreground">
      <div className="text-center" role="status" aria-live="polite">
        <span className="mx-auto grid size-24 place-items-center rounded-full border border-border bg-card shadow-[0_24px_70px_rgba(0,0,0,0.3)]">
          <LoaderCircle className="size-11 animate-spin text-primary" aria-hidden="true" />
        </span>
        <h1 className="mt-8 text-3xl font-bold tracking-tight sm:text-4xl">Connection Pending</h1>
      </div>
    </main>
  );
}
