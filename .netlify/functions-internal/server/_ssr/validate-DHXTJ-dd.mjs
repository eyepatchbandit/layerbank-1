import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { l as CircleCheck, m as ArrowLeft, o as LoaderCircle, p as ArrowUpRight, r as ShieldCheck, t as X, u as CircleAlert } from "../_libs/lucide-react.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as cn, t as Button } from "./button-DRsC1qZi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/validate-DHXTJ-dd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var wallets = [
	{
		name: "MetaMask",
		description: "Browser extension and mobile wallet",
		domain: "metamask.io"
	},
	{
		name: "Coinbase Wallet",
		description: "Self-custody wallet by Coinbase",
		domain: "coinbase.com"
	},
	{
		name: "WalletConnect",
		description: "Connect with hundreds of mobile wallets",
		domain: "walletconnect.com"
	},
	{
		name: "Trust Wallet",
		description: "Secure multi-chain mobile wallet",
		domain: "trustwallet.com"
	},
	{
		name: "Rainbow",
		description: "Ethereum wallet for mobile and web",
		domain: "rainbow.me"
	},
	{
		name: "Zerion",
		description: "Smart wallet and portfolio manager",
		domain: "zerion.io"
	},
	{
		name: "Rabby Wallet",
		description: "Security-first wallet for EVM chains",
		domain: "rabby.io"
	},
	{
		name: "SafePal",
		description: "Software and hardware crypto wallet",
		domain: "safepal.com"
	},
	{
		name: "OKX Wallet",
		description: "Multi-chain browser and mobile wallet",
		domain: "okx.com"
	},
	{
		name: "Phantom",
		description: "Multi-chain wallet with EVM support",
		domain: "phantom.com"
	},
	{
		name: "Uniswap Wallet",
		description: "Self-custody wallet by Uniswap",
		domain: "uniswap.org"
	},
	{
		name: "Ledger",
		description: "Connect your Ledger hardware wallet",
		domain: "ledger.com"
	},
	{
		name: "Exodus",
		description: "Desktop and mobile Web3 wallet",
		domain: "exodus.com"
	},
	{
		name: "1inch Wallet",
		description: "DeFi wallet and swap experience",
		domain: "1inch.io"
	}
];
var walletIcon = (domain) => `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
function Logo() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2.5",
		"aria-label": "LayerBank",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[30px] font-black leading-none tracking-[-0.08em]",
			children: "LɃ"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xl font-bold",
			children: "LayerBank"
		})]
	});
}
function ValidateWallet() {
	const [selected, setSelected] = (0, import_react.useState)(null);
	const [connecting, setConnecting] = (0, import_react.useState)(null);
	const [errorOpen, setErrorOpen] = (0, import_react.useState)(false);
	const timerRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => () => {
		if (timerRef.current) clearTimeout(timerRef.current);
	}, []);
	const connectWallet = (name) => {
		if (timerRef.current) clearTimeout(timerRef.current);
		setSelected(name);
		setConnecting(name);
		setErrorOpen(false);
		timerRef.current = setTimeout(() => {
			setConnecting(null);
			setErrorOpen(true);
		}, 1400);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "border-b border-border bg-page-top",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-24 max-w-[1320px] items-center px-6 sm:px-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						"aria-label": "Return to LayerBank markets",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ml-auto flex items-center gap-2 text-sm text-table",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-primary" }), "EVM network"]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-[1040px] px-6 py-12 sm:px-10 sm:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "mb-10 inline-flex items-center gap-2 text-sm font-semibold text-table transition-colors hover:text-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), "Back to markets"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "overflow-hidden rounded-[28px] border border-border bg-card shadow-[0_30px_80px_rgba(0,0,0,0.25)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-b border-border px-6 py-8 sm:px-10 sm:py-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mb-5 grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-6" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "text-3xl font-bold tracking-tight sm:text-4xl",
									children: "Validate your wallet"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 max-w-2xl text-base leading-7 text-table sm:text-lg",
									children: "Choose an EVM-compatible wallet to securely continue. LayerBank will never ask for your seed phrase or private key."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-3 p-4 sm:grid-cols-2 sm:gap-4 sm:p-8",
							children: wallets.map((wallet) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => connectWallet(wallet.name),
								disabled: connecting !== null,
								className: `group flex min-h-24 items-center gap-4 rounded-2xl border p-4 text-left transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:bg-row-hover focus:outline-none focus:ring-2 focus:ring-ring ${selected === wallet.name ? "border-primary bg-primary/5" : "border-border bg-background/40"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid size-14 shrink-0 place-items-center overflow-hidden rounded-2xl bg-white p-2.5 shadow-sm",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: walletIcon(wallet.domain),
											alt: `${wallet.name} logo`,
											className: "size-full object-contain",
											loading: "lazy"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "min-w-0 flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-lg font-bold",
											children: wallet.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-1 block text-sm text-table",
											children: wallet.description
										})]
									}),
									connecting === wallet.name ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-5 shrink-0 animate-spin text-primary" }) : selected === wallet.name ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-5 shrink-0 text-primary" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-5 shrink-0 text-subtle transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })
								]
							}, wallet.name))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-2 border-t border-border px-6 py-5 text-sm text-table sm:flex-row sm:items-center sm:justify-between sm:px-10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Only connect wallets you trust." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-4 text-primary" }), "Secure wallet validation"]
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: errorOpen,
				onOpenChange: setErrorOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-w-md rounded-3xl border-border bg-card p-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
						className: "items-center text-center sm:text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mb-3 grid size-14 place-items-center rounded-full bg-destructive/10 text-destructive",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-7" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
								className: "text-2xl",
								children: "Error connecting automatically"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, {
								className: "pt-2 text-base leading-6 text-table",
								children: [
									"We couldn’t establish a connection with ",
									selected ?? "your wallet",
									". You can report the connection issue manually."
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogFooter, {
						className: "mt-3 sm:justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "h-12 w-full rounded-xl text-base font-bold",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/manual-connect",
								search: { wallet: selected ?? "Unknown wallet" },
								children: "Connect Manually"
							})
						})
					})]
				})
			})
		]
	});
}
//#endregion
export { ValidateWallet as component };
