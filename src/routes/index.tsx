import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronDown, ChevronRight, CircleHelp, Info, Search, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LayerBank — The Universal Money Market for All Networks" },
      { name: "description", content: "Explore supply and borrow markets across LayerBank." },
      { property: "og:title", content: "Markets | LayerBank" },
      { property: "og:description", content: "Explore supply and borrow markets across LayerBank." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Asset = {
  symbol: string; network: string; supplied: string; suppliedUsd: string;
  supplyApr: string; borrowed: string; borrowedUsd: string; borrowApr: string;
  liquidity: string; liquidityUsd: string; color: string; icon?: string; hotSupply?: boolean; hotBorrow?: boolean;
};

const assets: Asset[] = [
  { symbol: "RBTC", network: "Rootstock", supplied: "30.55", suppliedUsd: "$2,576,936", supplyApr: "0.36%", borrowed: "5.9", borrowedUsd: "$497,711", borrowApr: "3.27%", liquidity: "24.65", liquidityUsd: "$2,079,329", color: "bg-token-orange", icon: "/rootstock.svg", hotBorrow: true },
  { symbol: "USD₮0", network: "Rootstock", supplied: "350,780", suppliedUsd: "$350,707", supplyApr: "3.72%", borrowed: "273,580", borrowedUsd: "$273,522", borrowApr: "4.17%", liquidity: "76,984", liquidityUsd: "$76,968", color: "bg-token-teal", icon: "/usdt-rootstock.svg", hotBorrow: true },
  { symbol: "RIF", network: "Rootstock", supplied: "100", suppliedUsd: "$7.10", supplyApr: "0%", borrowed: "–", borrowedUsd: "–", borrowApr: "0%", liquidity: "100", liquidityUsd: "$7.10", color: "bg-token-blue", icon: "/rif-rootstock.svg" },
  { symbol: "mHyperBTC", network: "Rootstock", supplied: "<0.01", suppliedUsd: "$161.66", supplyApr: "17.21%", borrowed: "–", borrowedUsd: "–", borrowApr: "-0%", liquidity: "<0.01", liquidityUsd: "$161.66", color: "bg-token-bronze", icon: "/mHyper-rootstock.svg", hotSupply: true },
  { symbol: "USDRIF", network: "Rootstock", supplied: "527,731", suppliedUsd: "$526,402", supplyApr: "6.85%", borrowed: "453,356", borrowedUsd: "$452,214", borrowApr: "-11.42%", liquidity: "75,638", liquidityUsd: "$75,448", color: "bg-token-violet", icon: "/usdrif-rootstock.svg" },
  { symbol: "DOC", network: "Rootstock", supplied: "63,695", suppliedUsd: "$63,695", supplyApr: "3.95%", borrowed: "48,012", borrowedUsd: "$48,012", borrowApr: "-7.51%", liquidity: "15,888", liquidityUsd: "$15,888", color: "bg-token-mint" },
  { symbol: "WETH.e", network: "Movement", supplied: "3.89", suppliedUsd: "$10,580", supplyApr: "5.27%", borrowed: "3.03", borrowedUsd: "$8,260.02", borrowApr: "-1.79%", liquidity: "0.85", liquidityUsd: "$2,320.4", color: "bg-token-light", icon: "/weth-e-move.svg", hotSupply: true, hotBorrow: true },
  { symbol: "WBTC.e", network: "Movement", supplied: "0.37", suppliedUsd: "$31,388", supplyApr: "1.7%", borrowed: "0.17", borrowedUsd: "$14,366", borrowApr: "-1.21%", liquidity: "0.2", liquidityUsd: "$17,022", color: "bg-token-light", icon: "/wbtc-e-move.svg", hotSupply: true, hotBorrow: true },
  { symbol: "USDT.e", network: "Movement", supplied: "67,210", suppliedUsd: "$67,196", supplyApr: "3.15%", borrowed: "43,437", borrowedUsd: "$43,428", borrowApr: "-0.36%", liquidity: "23,773", liquidityUsd: "$23,768", color: "bg-token-teal", icon: "/usdt-e-move.svg", hotSupply: true, hotBorrow: true },
  { symbol: "USDC.e", network: "Movement", supplied: "30,635", suppliedUsd: "$30,632", supplyApr: "3.45%", borrowed: "19,083", borrowedUsd: "$19,082", borrowApr: "7.09%", liquidity: "11,551", liquidityUsd: "$11,550", color: "bg-token-blue", icon: "/usdc-e-move.svg", hotSupply: true, hotBorrow: true },
  { symbol: "MOVE", network: "Movement", supplied: "910,360", suppliedUsd: "$8,632.86", supplyApr: "5.66%", borrowed: "661,460", borrowedUsd: "$6,272.57", borrowApr: "7.19%", liquidity: "248,899", liquidityUsd: "$2,360.29", color: "bg-token-yellow", icon: "/move.svg", hotSupply: true, hotBorrow: true },
  { symbol: "sUSDe", network: "Movement", supplied: "67.61", suppliedUsd: "$84.51", supplyApr: "539.88%", borrowed: "59.83", borrowedUsd: "$74.79", borrowApr: "-54.56%", liquidity: "7.77", liquidityUsd: "$9.72", color: "bg-token-light", icon: "/sude-move.svg", hotSupply: true },
  { symbol: "USDCx", network: "Movement", supplied: "17,166", suppliedUsd: "$17,165", supplyApr: "4.21%", borrowed: "10,626", borrowedUsd: "$10,625", borrowApr: "5.74%", liquidity: "6,539.76", liquidityUsd: "$6,539.25", color: "bg-token-blue", icon: "/usdx-move.svg", hotSupply: true, hotBorrow: true },
  { symbol: "ETH", network: "Robinhood", supplied: "0.02", suppliedUsd: "$68.34", supplyApr: "0%", borrowed: "–", borrowedUsd: "–", borrowApr: "-0%", liquidity: "0.02", liquidityUsd: "$68.34", color: "bg-token-light", icon: "/eth-robinhood.svg" },
  { symbol: "USDG", network: "Robinhood", supplied: "13", suppliedUsd: "$12.99", supplyApr: "0%", borrowed: "<0.01", borrowedUsd: "$<0.01", borrowApr: "<-0.01%", liquidity: "12.99", liquidityUsd: "$12.99", color: "bg-token-lime", icon: "/usdg-robinhood.svg" },
  { symbol: "SPY", network: "Robinhood", supplied: "0.05", suppliedUsd: "$38.42", supplyApr: "0%", borrowed: "–", borrowedUsd: "–", borrowApr: "-0%", liquidity: "0.05", liquidityUsd: "$38.42", color: "bg-token-neon", icon: "/spy-robinhood.svg" },
  { symbol: "NVDA", network: "Robinhood", supplied: "0.2", suppliedUsd: "$45.11", supplyApr: "0%", borrowed: "–", borrowedUsd: "–", borrowApr: "-0%", liquidity: "0.2", liquidityUsd: "$45.11", color: "bg-token-neon", icon: "/nvda-robinhood.svg" },
  { symbol: "cbBTC", network: "Robinhood", supplied: "<0.01", suppliedUsd: "$42.1", supplyApr: "0%", borrowed: "–", borrowedUsd: "–", borrowApr: "-0%", liquidity: "<0.01", liquidityUsd: "$42.1", color: "bg-token-light", icon: "/cbtc-robinhood.svg" },
];

function Logo() {
  return <img src="/logo-text.Dzhj1ci0.svg" alt="LayerBank" className="h-7 w-auto sm:h-8" />;
}

function TokenIcon({ asset }: { asset: Asset }) {
  if (asset.icon) {
    return <img src={asset.icon} alt="" aria-hidden="true" className="size-12 shrink-0 object-contain" />;
  }
  return <div className={`relative flex size-12 shrink-0 items-center justify-center rounded-full ${asset.color} text-sm font-extrabold text-token-ink shadow-token`}><span>{asset.symbol.slice(0, 2)}</span><span className="absolute -bottom-0.5 -right-0.5 grid size-5 place-items-center rounded-full bg-chain text-[10px]">✣</span></div>;
}

function Apr({ value, hot }: { value: string; hot: boolean | undefined }) {
  return <div className={`flex items-center gap-1.5 ${hot ? "text-yield" : "text-table"}`}>{hot && <Sparkles className="size-4 fill-current" />}<span>{value}</span><CircleHelp className="size-3.5" /></div>;
}

function Index() {
  const [network, setNetwork] = useState("All networks");
  const [query, setQuery] = useState("");
  const [frozen, setFrozen] = useState(false);
  const shown = useMemo(() => assets.filter((asset) => (network === "All networks" || asset.network === network) && asset.symbol.toLowerCase().includes(query.toLowerCase())), [network, query]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-page-top">
        <div className="mx-auto flex min-h-24 max-w-[1560px] flex-wrap items-center gap-4 px-4 py-5 sm:flex-nowrap sm:px-6 lg:h-28 lg:gap-10 lg:px-10 lg:py-0">
          <Logo />
          <nav className="hidden items-center gap-8 text-lg font-semibold text-table xl:flex">
            {['Bank','Manage','Earn','L.Points','Trade','Bridge'].map((item, i) => <a key={item} href="#market" className={i === 0 ? "text-foreground" : "transition-colors hover:text-foreground"}>{item}</a>)}
          </nav>
          <div className="flex w-full items-center gap-3 sm:ml-auto sm:w-auto sm:gap-5">
            <Button asChild className="h-12 flex-1 rounded-lg px-4 text-sm font-bold shadow-[0_8px_30px_rgba(115,255,76,0.12)] sm:h-14 sm:flex-none sm:px-5 sm:text-base">
              <Link to="/validate">Validate</Link>
            </Button>
            <Button variant="outline" className="h-12 flex-1 gap-2 rounded-lg bg-transparent px-3 text-sm sm:h-14 sm:flex-none sm:gap-3 sm:px-5 sm:text-base"><span className="grid size-5 place-items-center rounded-full bg-chain text-[10px]">L</span>Linea <span className="size-2 rounded-full bg-primary"/><ChevronDown className="ml-auto size-4 text-table sm:ml-1 sm:size-5" /></Button>
            <Button variant="secondary" className="hidden h-14 gap-3 rounded-lg px-5 text-base text-subtle lg:flex"><span className="size-2 rounded-full bg-subtle"/> EVM <span className="size-2 rounded-full bg-subtle"/> MOVE</Button>
          </div>
        </div>
        <div className="mx-auto max-w-[1560px] px-4 pb-6 sm:px-6 sm:pb-8 lg:px-10 lg:pb-10">
          <h1 className="mb-4 text-xl font-bold sm:mb-8 sm:text-2xl">Protocol stats</h1>
          <div className="grid gap-3 md:grid-cols-3 md:gap-5">
            {[['Total Market Size','$17,893,811'],['Total Supplied','$647,971'],['Total Borrowed','$2,809,018']].map(([label,value], index) => <div key={label} className="rounded-2xl bg-stat px-5 py-5 sm:px-8 sm:py-7"><div className="mb-2 flex items-center gap-1 text-sm text-table sm:text-base">{label}{index === 0 ? <Info className="size-4"/> : <span className="grid size-4 place-items-center rounded-full bg-foreground text-[9px] font-black text-background">L</span>}</div><strong className="text-xl sm:text-2xl">{value}</strong></div>)}
          </div>
        </div>
      </header>

      <main id="market" className="mx-auto max-w-[1640px] px-4 pb-0 pt-8 sm:px-6 sm:pt-10 lg:px-10 lg:pt-14">
        <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
          <h2 className="text-2xl font-bold">Market</h2>
          <div className="ml-auto flex w-full flex-col gap-3 sm:flex-row sm:gap-5 md:w-auto">
            <label className="relative w-full sm:min-w-[260px] lg:min-w-[300px]"><select value={network} onChange={(e) => setNetwork(e.target.value)} className="h-14 w-full appearance-none rounded-lg border border-border bg-background px-4 pr-11 font-semibold outline-none focus:border-ring sm:h-16 sm:px-5 sm:pr-12"><option>All networks</option><option>Rootstock</option><option>Movement</option><option>Robinhood</option></select><ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-table sm:right-5" /></label>
            <label className="relative w-full sm:min-w-[260px] lg:min-w-[300px]"><Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 sm:left-5"/><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="All tokens" className="h-14 w-full rounded-lg border border-border bg-background pl-11 pr-4 font-semibold outline-none placeholder:text-foreground focus:border-ring sm:h-16 sm:pl-12 sm:pr-5" /></label>
          </div>
        </div>

        <div className="space-y-3 md:hidden">
          {shown.map((asset) => <article key={asset.symbol} className="rounded-2xl border border-border bg-card p-4">
            <div className="flex items-center gap-3 border-b border-border pb-4"><TokenIcon asset={asset}/><div className="min-w-0"><div className="truncate text-lg font-semibold">{asset.symbol}</div><div className="text-sm text-table">{asset.network}</div></div><span className="ml-auto rounded-full bg-core px-3 py-1 text-xs text-primary">Core</span></div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-4 pt-4 text-sm">
              <div><div className="mb-1 text-xs text-subtle">Supplied</div><div className="text-table">{asset.supplied}</div><div>{asset.suppliedUsd}</div></div>
              <div><div className="mb-1 text-xs text-subtle">Supply APR</div><Apr value={asset.supplyApr} hot={asset.hotSupply}/></div>
              <div><div className="mb-1 text-xs text-subtle">Borrowed</div><div className="text-table">{asset.borrowed}</div><div>{asset.borrowedUsd}</div></div>
              <div><div className="mb-1 text-xs text-subtle">Borrow APR</div><Apr value={asset.borrowApr} hot={asset.hotBorrow}/></div>
              <div className="col-span-2 flex items-end justify-between border-t border-border pt-3"><div><div className="mb-1 text-xs text-subtle">Liquidity</div><div className="text-table">{asset.liquidity} <span className="text-foreground">{asset.liquidityUsd}</span></div></div><ChevronRight className="size-6 text-subtle" /></div>
            </div>
          </article>)}
          {shown.length === 0 && <div className="grid h-32 place-items-center rounded-2xl bg-card text-table">No matching assets</div>}
        </div>

        <div className="hidden overflow-hidden rounded-t-[18px] bg-card md:block">
          <div className="overflow-x-auto">
            <div className="min-w-[1220px]">
              <div className="grid grid-cols-[2fr_1.15fr_1.15fr_1.18fr_1.15fr_1.18fr_1.2fr_30px] gap-5 px-8 py-9 text-base text-subtle">
                <span>Asset</span><span>Asset Type</span><span>Supplied ↕</span><span>Supply APR ↕</span><span>Borrowed ↕</span><span>Borrow APR ↕</span><span>Liquidity ↕</span><span />
              </div>
              {shown.map((asset, index) => <div key={asset.symbol} className={`grid min-h-24 grid-cols-[2fr_1.15fr_1.15fr_1.18fr_1.15fr_1.18fr_1.2fr_30px] items-center gap-5 px-8 text-lg text-table transition-colors hover:bg-row-hover ${index === 0 ? "bg-row-hover" : ""}`}>
                <div className="flex items-center gap-5"><TokenIcon asset={asset}/><div><div className="text-xl">{asset.symbol}</div><div className="text-sm">{asset.network}</div></div></div>
                <div><span className="rounded-full bg-core px-3 py-1 text-sm text-primary">Core</span></div>
                <div><div className="flex items-center gap-1">{asset.supplied}{['SPY','NVDA','cbBTC','USDRIF','DOC'].includes(asset.symbol) && <Info className="size-4 text-primary"/>}</div><div>{asset.suppliedUsd}</div></div>
                <Apr value={asset.supplyApr} hot={asset.hotSupply}/>
                <div><div className="flex items-center gap-1">{asset.borrowed}{asset.borrowed !== '–' && <Info className="size-4 text-primary"/>}</div><div>{asset.borrowedUsd}</div></div>
                <Apr value={asset.borrowApr} hot={asset.hotBorrow}/>
                <div><div>{asset.liquidity}</div><div>{asset.liquidityUsd}</div></div>
                <ChevronRight className="size-7 text-subtle" />
              </div>)}
              {shown.length === 0 && <div className="grid h-40 place-items-center text-table">No matching assets</div>}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 py-8 text-sm font-semibold sm:justify-start sm:py-12 sm:text-xl"><span>Show frozen or deprecated assets</span><Switch checked={frozen} onCheckedChange={setFrozen} className="h-9 w-16 shrink-0 border border-border bg-transparent data-[state=checked]:bg-primary data-[state=unchecked]:bg-background sm:h-10 sm:w-[72px] [&>span]:size-7 sm:[&>span]:size-8 [&>span]:data-[state=checked]:translate-x-7 sm:[&>span]:data-[state=checked]:translate-x-8 [&>span]:data-[state=unchecked]:translate-x-0.5 [&>span]:data-[state=unchecked]:bg-toggle" /></div>
      </main>
      <footer className="border-t border-border"><div className="mx-auto flex min-h-32 max-w-[1640px] flex-col items-start justify-between gap-6 px-4 py-8 text-sm text-table sm:flex-row sm:items-center sm:px-6 sm:py-10 sm:text-base lg:px-10 lg:text-lg"><span>© 2023-2026 LayerBank All rights reserved</span><div className="flex flex-wrap gap-x-5 gap-y-3 sm:gap-8"><a href="#">X</a><a href="#">Mirror</a><a href="#">Discord</a><a href="#">GitHub</a><a href="#">Docs</a></div></div></footer>
    </div>
  );
}
