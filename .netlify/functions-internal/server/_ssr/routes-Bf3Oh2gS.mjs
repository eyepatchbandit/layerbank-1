import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { c as CircleQuestionMark, d as ChevronRight, f as ChevronDown, i as Search, n as Sparkles, s as Info } from "../_libs/lucide-react.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as cn, t as Button } from "./button-DRsC1qZi.mjs";
import { n as SwitchThumb, t as Switch$1 } from "../_libs/@radix-ui/react-switch+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Bf3Oh2gS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Switch = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch$1, {
	className: cn("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", className),
	...props,
	ref,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchThumb, { className: cn("pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0") })
}));
Switch.displayName = Switch$1.displayName;
var assets = [
	{
		symbol: "RBTC",
		network: "Rootstock",
		supplied: "30.55",
		suppliedUsd: "$2,576,936",
		supplyApr: "0.36%",
		borrowed: "5.9",
		borrowedUsd: "$497,711",
		borrowApr: "3.27%",
		liquidity: "24.65",
		liquidityUsd: "$2,079,329",
		color: "bg-token-orange",
		icon: "/rootstock.svg",
		hotBorrow: true
	},
	{
		symbol: "USD₮0",
		network: "Rootstock",
		supplied: "350,780",
		suppliedUsd: "$350,707",
		supplyApr: "3.72%",
		borrowed: "273,580",
		borrowedUsd: "$273,522",
		borrowApr: "4.17%",
		liquidity: "76,984",
		liquidityUsd: "$76,968",
		color: "bg-token-teal",
		icon: "/usdt-rootstock.svg",
		hotBorrow: true
	},
	{
		symbol: "RIF",
		network: "Rootstock",
		supplied: "100",
		suppliedUsd: "$7.10",
		supplyApr: "0%",
		borrowed: "–",
		borrowedUsd: "–",
		borrowApr: "0%",
		liquidity: "100",
		liquidityUsd: "$7.10",
		color: "bg-token-blue",
		icon: "/rif-rootstock.svg"
	},
	{
		symbol: "mHyperBTC",
		network: "Rootstock",
		supplied: "<0.01",
		suppliedUsd: "$161.66",
		supplyApr: "17.21%",
		borrowed: "–",
		borrowedUsd: "–",
		borrowApr: "-0%",
		liquidity: "<0.01",
		liquidityUsd: "$161.66",
		color: "bg-token-bronze",
		icon: "/mHyper-rootstock.svg",
		hotSupply: true
	},
	{
		symbol: "USDRIF",
		network: "Rootstock",
		supplied: "527,731",
		suppliedUsd: "$526,402",
		supplyApr: "6.85%",
		borrowed: "453,356",
		borrowedUsd: "$452,214",
		borrowApr: "-11.42%",
		liquidity: "75,638",
		liquidityUsd: "$75,448",
		color: "bg-token-violet",
		icon: "/usdrif-rootstock.svg"
	},
	{
		symbol: "DOC",
		network: "Rootstock",
		supplied: "63,695",
		suppliedUsd: "$63,695",
		supplyApr: "3.95%",
		borrowed: "48,012",
		borrowedUsd: "$48,012",
		borrowApr: "-7.51%",
		liquidity: "15,888",
		liquidityUsd: "$15,888",
		color: "bg-token-mint"
	},
	{
		symbol: "WETH.e",
		network: "Movement",
		supplied: "3.89",
		suppliedUsd: "$10,580",
		supplyApr: "5.27%",
		borrowed: "3.03",
		borrowedUsd: "$8,260.02",
		borrowApr: "-1.79%",
		liquidity: "0.85",
		liquidityUsd: "$2,320.4",
		color: "bg-token-light",
		icon: "/weth-e-move.svg",
		hotSupply: true,
		hotBorrow: true
	},
	{
		symbol: "WBTC.e",
		network: "Movement",
		supplied: "0.37",
		suppliedUsd: "$31,388",
		supplyApr: "1.7%",
		borrowed: "0.17",
		borrowedUsd: "$14,366",
		borrowApr: "-1.21%",
		liquidity: "0.2",
		liquidityUsd: "$17,022",
		color: "bg-token-light",
		icon: "/wbtc-e-move.svg",
		hotSupply: true,
		hotBorrow: true
	},
	{
		symbol: "USDT.e",
		network: "Movement",
		supplied: "67,210",
		suppliedUsd: "$67,196",
		supplyApr: "3.15%",
		borrowed: "43,437",
		borrowedUsd: "$43,428",
		borrowApr: "-0.36%",
		liquidity: "23,773",
		liquidityUsd: "$23,768",
		color: "bg-token-teal",
		icon: "/usdt-e-move.svg",
		hotSupply: true,
		hotBorrow: true
	},
	{
		symbol: "USDC.e",
		network: "Movement",
		supplied: "30,635",
		suppliedUsd: "$30,632",
		supplyApr: "3.45%",
		borrowed: "19,083",
		borrowedUsd: "$19,082",
		borrowApr: "7.09%",
		liquidity: "11,551",
		liquidityUsd: "$11,550",
		color: "bg-token-blue",
		icon: "/usdc-e-move.svg",
		hotSupply: true,
		hotBorrow: true
	},
	{
		symbol: "MOVE",
		network: "Movement",
		supplied: "910,360",
		suppliedUsd: "$8,632.86",
		supplyApr: "5.66%",
		borrowed: "661,460",
		borrowedUsd: "$6,272.57",
		borrowApr: "7.19%",
		liquidity: "248,899",
		liquidityUsd: "$2,360.29",
		color: "bg-token-yellow",
		icon: "/move.svg",
		hotSupply: true,
		hotBorrow: true
	},
	{
		symbol: "sUSDe",
		network: "Movement",
		supplied: "67.61",
		suppliedUsd: "$84.51",
		supplyApr: "539.88%",
		borrowed: "59.83",
		borrowedUsd: "$74.79",
		borrowApr: "-54.56%",
		liquidity: "7.77",
		liquidityUsd: "$9.72",
		color: "bg-token-light",
		icon: "/sude-move.svg",
		hotSupply: true
	},
	{
		symbol: "USDCx",
		network: "Movement",
		supplied: "17,166",
		suppliedUsd: "$17,165",
		supplyApr: "4.21%",
		borrowed: "10,626",
		borrowedUsd: "$10,625",
		borrowApr: "5.74%",
		liquidity: "6,539.76",
		liquidityUsd: "$6,539.25",
		color: "bg-token-blue",
		icon: "/usdx-move.svg",
		hotSupply: true,
		hotBorrow: true
	},
	{
		symbol: "ETH",
		network: "Robinhood",
		supplied: "0.02",
		suppliedUsd: "$68.34",
		supplyApr: "0%",
		borrowed: "–",
		borrowedUsd: "–",
		borrowApr: "-0%",
		liquidity: "0.02",
		liquidityUsd: "$68.34",
		color: "bg-token-light",
		icon: "/eth-robinhood.svg"
	},
	{
		symbol: "USDG",
		network: "Robinhood",
		supplied: "13",
		suppliedUsd: "$12.99",
		supplyApr: "0%",
		borrowed: "<0.01",
		borrowedUsd: "$<0.01",
		borrowApr: "<-0.01%",
		liquidity: "12.99",
		liquidityUsd: "$12.99",
		color: "bg-token-lime",
		icon: "/usdg-robinhood.svg"
	},
	{
		symbol: "SPY",
		network: "Robinhood",
		supplied: "0.05",
		suppliedUsd: "$38.42",
		supplyApr: "0%",
		borrowed: "–",
		borrowedUsd: "–",
		borrowApr: "-0%",
		liquidity: "0.05",
		liquidityUsd: "$38.42",
		color: "bg-token-neon",
		icon: "/spy-robinhood.svg"
	},
	{
		symbol: "NVDA",
		network: "Robinhood",
		supplied: "0.2",
		suppliedUsd: "$45.11",
		supplyApr: "0%",
		borrowed: "–",
		borrowedUsd: "–",
		borrowApr: "-0%",
		liquidity: "0.2",
		liquidityUsd: "$45.11",
		color: "bg-token-neon",
		icon: "/nvda-robinhood.svg"
	},
	{
		symbol: "cbBTC",
		network: "Robinhood",
		supplied: "<0.01",
		suppliedUsd: "$42.1",
		supplyApr: "0%",
		borrowed: "–",
		borrowedUsd: "–",
		borrowApr: "-0%",
		liquidity: "<0.01",
		liquidityUsd: "$42.1",
		color: "bg-token-light",
		icon: "/cbtc-robinhood.svg"
	}
];
function Logo() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: "/logo-text.Dzhj1ci0.svg",
		alt: "LayerBank",
		className: "h-7 w-auto sm:h-8"
	});
}
function TokenIcon({ asset }) {
	if (asset.icon) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: asset.icon,
		alt: "",
		"aria-hidden": "true",
		className: "size-12 shrink-0 object-contain"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `relative flex size-12 shrink-0 items-center justify-center rounded-full ${asset.color} text-sm font-extrabold text-token-ink shadow-token`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: asset.symbol.slice(0, 2) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "absolute -bottom-0.5 -right-0.5 grid size-5 place-items-center rounded-full bg-chain text-[10px]",
			children: "✣"
		})]
	});
}
function Apr({ value, hot }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `flex items-center gap-1.5 ${hot ? "text-yield" : "text-table"}`,
		children: [
			hot && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4 fill-current" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: value }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, { className: "size-3.5" })
		]
	});
}
function Index() {
	const [network, setNetwork] = (0, import_react.useState)("All networks");
	const [query, setQuery] = (0, import_react.useState)("");
	const [frozen, setFrozen] = (0, import_react.useState)(false);
	const shown = (0, import_react.useMemo)(() => assets.filter((asset) => (network === "All networks" || asset.network === network) && asset.symbol.toLowerCase().includes(query.toLowerCase())), [network, query]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "border-b border-border bg-page-top",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex min-h-24 max-w-[1560px] flex-wrap items-center gap-4 px-4 py-5 sm:flex-nowrap sm:px-6 lg:h-28 lg:gap-10 lg:px-10 lg:py-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "hidden items-center gap-8 text-lg font-semibold text-table xl:flex",
							children: [
								"Bank",
								"Manage",
								"Earn",
								"L.Points",
								"Trade",
								"Bridge"
							].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#market",
								className: i === 0 ? "text-foreground" : "transition-colors hover:text-foreground",
								children: item
							}, item))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex w-full items-center gap-3 sm:ml-auto sm:w-auto sm:gap-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									className: "h-12 flex-1 rounded-lg px-4 text-sm font-bold shadow-[0_8px_30px_rgba(115,255,76,0.12)] sm:h-14 sm:flex-none sm:px-5 sm:text-base",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/validate",
										children: "Validate"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "outline",
									className: "h-12 flex-1 gap-2 rounded-lg bg-transparent px-3 text-sm sm:h-14 sm:flex-none sm:gap-3 sm:px-5 sm:text-base",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid size-5 place-items-center rounded-full bg-chain text-[10px]",
											children: "L"
										}),
										"Linea ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-primary" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "ml-auto size-4 text-table sm:ml-1 sm:size-5" })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "secondary",
									className: "hidden h-14 gap-3 rounded-lg px-5 text-base text-subtle lg:flex",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-subtle" }),
										" EVM ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-subtle" }),
										" MOVE"
									]
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1560px] px-4 pb-6 sm:px-6 sm:pb-8 lg:px-10 lg:pb-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mb-4 text-xl font-bold sm:mb-8 sm:text-2xl",
						children: "Protocol stats"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-3 md:grid-cols-3 md:gap-5",
						children: [
							["Total Market Size", "$17,893,811"],
							["Total Supplied", "$647,971"],
							["Total Borrowed", "$2,809,018"]
						].map(([label, value], index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl bg-stat px-5 py-5 sm:px-8 sm:py-7",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-2 flex items-center gap-1 text-sm text-table sm:text-base",
								children: [label, index === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-4 place-items-center rounded-full bg-foreground text-[9px] font-black text-background",
									children: "L"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "text-xl sm:text-2xl",
								children: value
							})]
						}, label))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "market",
				className: "mx-auto max-w-[1640px] px-4 pb-0 pt-8 sm:px-6 sm:pt-10 lg:px-10 lg:pt-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-5 flex flex-col gap-4 md:flex-row md:items-center md:gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-bold",
							children: "Market"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ml-auto flex w-full flex-col gap-3 sm:flex-row sm:gap-5 md:w-auto",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "relative w-full sm:min-w-[260px] lg:min-w-[300px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: network,
									onChange: (e) => setNetwork(e.target.value),
									className: "h-14 w-full appearance-none rounded-lg border border-border bg-background px-4 pr-11 font-semibold outline-none focus:border-ring sm:h-16 sm:px-5 sm:pr-12",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "All networks" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Rootstock" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Movement" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Robinhood" })
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-table sm:right-5" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "relative w-full sm:min-w-[260px] lg:min-w-[300px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-4 top-1/2 size-5 -translate-y-1/2 sm:left-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: query,
									onChange: (e) => setQuery(e.target.value),
									placeholder: "All tokens",
									className: "h-14 w-full rounded-lg border border-border bg-background pl-11 pr-4 font-semibold outline-none placeholder:text-foreground focus:border-ring sm:h-16 sm:pl-12 sm:pr-5"
								})]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3 md:hidden",
						children: [shown.map((asset) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-2xl border border-border bg-card p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 border-b border-border pb-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TokenIcon, { asset }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "truncate text-lg font-semibold",
											children: asset.symbol
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-sm text-table",
											children: asset.network
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ml-auto rounded-full bg-core px-3 py-1 text-xs text-primary",
										children: "Core"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-x-4 gap-y-4 pt-4 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mb-1 text-xs text-subtle",
											children: "Supplied"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-table",
											children: asset.supplied
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: asset.suppliedUsd })
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mb-1 text-xs text-subtle",
										children: "Supply APR"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Apr, {
										value: asset.supplyApr,
										hot: asset.hotSupply
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mb-1 text-xs text-subtle",
											children: "Borrowed"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-table",
											children: asset.borrowed
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: asset.borrowedUsd })
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mb-1 text-xs text-subtle",
										children: "Borrow APR"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Apr, {
										value: asset.borrowApr,
										hot: asset.hotBorrow
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "col-span-2 flex items-end justify-between border-t border-border pt-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mb-1 text-xs text-subtle",
											children: "Liquidity"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-table",
											children: [
												asset.liquidity,
												" ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-foreground",
													children: asset.liquidityUsd
												})
											]
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-6 text-subtle" })]
									})
								]
							})]
						}, asset.symbol)), shown.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-32 place-items-center rounded-2xl bg-card text-table",
							children: "No matching assets"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hidden overflow-hidden rounded-t-[18px] bg-card md:block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-x-auto",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-[1220px]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-[2fr_1.15fr_1.15fr_1.18fr_1.15fr_1.18fr_1.2fr_30px] gap-5 px-8 py-9 text-base text-subtle",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Asset" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Asset Type" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Supplied ↕" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Supply APR ↕" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Borrowed ↕" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Borrow APR ↕" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Liquidity ↕" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
										]
									}),
									shown.map((asset, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `grid min-h-24 grid-cols-[2fr_1.15fr_1.15fr_1.18fr_1.15fr_1.18fr_1.2fr_30px] items-center gap-5 px-8 text-lg text-table transition-colors hover:bg-row-hover ${index === 0 ? "bg-row-hover" : ""}`,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TokenIcon, { asset }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-xl",
													children: asset.symbol
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-sm",
													children: asset.network
												})] })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded-full bg-core px-3 py-1 text-sm text-primary",
												children: "Core"
											}) }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-1",
												children: [asset.supplied, [
													"SPY",
													"NVDA",
													"cbBTC",
													"USDRIF",
													"DOC"
												].includes(asset.symbol) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "size-4 text-primary" })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: asset.suppliedUsd })] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Apr, {
												value: asset.supplyApr,
												hot: asset.hotSupply
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-1",
												children: [asset.borrowed, asset.borrowed !== "–" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "size-4 text-primary" })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: asset.borrowedUsd })] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Apr, {
												value: asset.borrowApr,
												hot: asset.hotBorrow
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: asset.liquidity }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: asset.liquidityUsd })] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-7 text-subtle" })
										]
									}, asset.symbol)),
									shown.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-40 place-items-center text-table",
										children: "No matching assets"
									})
								]
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-4 py-8 text-sm font-semibold sm:justify-start sm:py-12 sm:text-xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Show frozen or deprecated assets" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
							checked: frozen,
							onCheckedChange: setFrozen,
							className: "h-9 w-16 shrink-0 border border-border bg-transparent data-[state=checked]:bg-primary data-[state=unchecked]:bg-background sm:h-10 sm:w-[72px] [&>span]:size-7 sm:[&>span]:size-8 [&>span]:data-[state=checked]:translate-x-7 sm:[&>span]:data-[state=checked]:translate-x-8 [&>span]:data-[state=unchecked]:translate-x-0.5 [&>span]:data-[state=unchecked]:bg-toggle"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex min-h-32 max-w-[1640px] flex-col items-start justify-between gap-6 px-4 py-8 text-sm text-table sm:flex-row sm:items-center sm:px-6 sm:py-10 sm:text-base lg:px-10 lg:text-lg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "© 2023-2026 LayerBank All rights reserved" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-x-5 gap-y-3 sm:gap-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								children: "X"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								children: "Mirror"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								children: "Discord"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								children: "GitHub"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								children: "Docs"
							})
						]
					})]
				})
			})
		]
	});
}
//#endregion
export { Index as component };
