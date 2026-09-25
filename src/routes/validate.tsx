import { createFileRoute, Link } from "@tanstack/react-router";
import { AlertCircle, ArrowLeft, ArrowUpRight, CheckCircle2, LoaderCircle, ShieldCheck } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export const Route = createFileRoute("/validate")({
  head: () => ({
    meta: [
      { title: "Validate Wallet | LayerBank" },
      { name: "description", content: "Choose an EVM wallet to continue validation." },
    ],
  }),
  component: ValidateWallet,
});

const wallets = [
  { name: "MetaMask", description: "Browser extension and mobile wallet", domain: "metamask.io" },
  { name: "Coinbase Wallet", description: "Self-custody wallet by Coinbase", domain: "coinbase.com" },
  { name: "WalletConnect", description: "Connect with hundreds of mobile wallets", domain: "walletconnect.com" },
  { name: "Trust Wallet", description: "Secure multi-chain mobile wallet", domain: "trustwallet.com" },
  { name: "Rainbow", description: "Ethereum wallet for mobile and web", domain: "rainbow.me" },
  { name: "Zerion", description: "Smart wallet and portfolio manager", domain: "zerion.io" },
  { name: "Rabby Wallet", description: "Security-first wallet for EVM chains", domain: "rabby.io" },
  { name: "SafePal", description: "Software and hardware crypto wallet", domain: "safepal.com" },
  { name: "OKX Wallet", description: "Multi-chain browser and mobile wallet", domain: "okx.com" },
  { name: "Phantom", description: "Multi-chain wallet with EVM support", domain: "phantom.com" },
  { name: "Uniswap Wallet", description: "Self-custody wallet by Uniswap", domain: "uniswap.org" },
  { name: "Ledger", description: "Connect your Ledger hardware wallet", domain: "ledger.com" },
  { name: "Exodus", description: "Desktop and mobile Web3 wallet", domain: "exodus.com" },
  { name: "1inch Wallet", description: "DeFi wallet and swap experience", domain: "1inch.io" },
];

const walletIcon = (domain: string) => `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

function Logo() {
  return <img src="/logo-text.Dzhj1ci0.svg" alt="LayerBank" className="h-7 w-auto sm:h-8" />;
}

function ValidateWallet() {
  const [selected, setSelected] = useState<string | null>(null);
  const [connecting, setConnecting] = useState<string | null>(null);
  const [errorOpen, setErrorOpen] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  const connectWallet = (name: string) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setSelected(name);
    setConnecting(name);
    setErrorOpen(false);
    timerRef.current = setTimeout(() => {
      setConnecting(null);
      setErrorOpen(true);
    }, 1400);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-page-top">
        <div className="mx-auto flex h-20 max-w-[1320px] items-center px-4 sm:h-24 sm:px-10">
          <Link to="/" aria-label="Return to LayerBank markets"><Logo /></Link>
          <div className="ml-auto flex items-center gap-2 text-xs text-table sm:text-sm"><span className="size-2 rounded-full bg-primary" />EVM network</div>
        </div>
      </header>

      <main className="mx-auto max-w-[1040px] px-4 py-8 sm:px-10 sm:py-20">
        <Link to="/" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-table transition-colors hover:text-foreground sm:mb-10"><ArrowLeft className="size-4" />Back to markets</Link>

        <section className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_30px_80px_rgba(0,0,0,0.25)] sm:rounded-[28px]">
          <div className="border-b border-border px-5 py-6 sm:px-10 sm:py-10">
            <div className="mb-4 grid size-11 place-items-center rounded-xl bg-primary/10 text-primary sm:mb-5 sm:size-12 sm:rounded-2xl"><ShieldCheck className="size-6" /></div>
            <h1 className="text-2xl font-bold tracking-tight sm:text-4xl">Validate your wallet</h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-table sm:text-lg">Choose an EVM-compatible wallet to securely continue. LayerBank will never ask for your seed phrase or private key.</p>
          </div>

          <div className="grid gap-3 p-3 sm:grid-cols-2 sm:gap-4 sm:p-8">
            {wallets.map((wallet) => (
              <button
                key={wallet.name}
                type="button"
                onClick={() => connectWallet(wallet.name)}
                disabled={connecting !== null}
                className={`group flex min-h-20 items-center gap-3 rounded-xl border p-3 text-left transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:bg-row-hover focus:outline-none focus:ring-2 focus:ring-ring sm:min-h-24 sm:gap-4 sm:rounded-2xl sm:p-4 ${selected === wallet.name ? "border-primary bg-primary/5" : "border-border bg-background/40"}`}
              >
                <span className="grid size-12 shrink-0 place-items-center overflow-hidden rounded-xl bg-white p-2 shadow-sm sm:size-14 sm:rounded-2xl sm:p-2.5"><img src={walletIcon(wallet.domain)} alt={`${wallet.name} logo`} className="size-full object-contain" loading="lazy" /></span>
                <span className="min-w-0 flex-1"><span className="block text-base font-bold sm:text-lg">{wallet.name}</span><span className="mt-0.5 block text-xs leading-4 text-table sm:mt-1 sm:text-sm">{wallet.description}</span></span>
                {connecting === wallet.name ? <LoaderCircle className="size-5 shrink-0 animate-spin text-primary" /> : selected === wallet.name ? <CheckCircle2 className="size-5 shrink-0 text-primary" /> : <ArrowUpRight className="size-5 shrink-0 text-subtle transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-2 border-t border-border px-5 py-4 text-xs text-table sm:flex-row sm:items-center sm:justify-between sm:px-10 sm:py-5 sm:text-sm">
            <span>Only connect wallets you trust.</span><span className="flex items-center gap-2"><ShieldCheck className="size-4 text-primary" />Secure wallet validation</span>
          </div>
        </section>
      </main>

      <Dialog open={errorOpen} onOpenChange={setErrorOpen}>
        <DialogContent className="w-[calc(100%-2rem)] max-w-md rounded-2xl border-border bg-card p-5 sm:rounded-3xl sm:p-7">
          <DialogHeader className="items-center text-center sm:text-center">
            <span className="mb-3 grid size-14 place-items-center rounded-full bg-destructive/10 text-destructive"><AlertCircle className="size-7" /></span>
            <DialogTitle className="text-xl sm:text-2xl">Error connecting automatically</DialogTitle>
            <DialogDescription className="pt-2 text-base leading-6 text-table">We couldn’t establish a connection with {selected ?? "your wallet"}. You can report the connection issue manually.</DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-3 sm:justify-center">
            <Button asChild className="h-12 w-full rounded-xl text-base font-bold">
              <Link to="/manual-connect" search={{ wallet: selected ?? "Unknown wallet" }}>Connect Manually</Link>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
