import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { o as LoaderCircle } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/connection-pending-D4zIXxCN.js
var import_jsx_runtime = require_jsx_runtime();
function ConnectionPending() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "grid min-h-[100svh] place-items-center bg-background px-4 text-foreground sm:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center",
			role: "status",
			"aria-live": "polite",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mx-auto grid size-20 place-items-center rounded-full border border-border bg-card shadow-[0_24px_70px_rgba(0,0,0,0.3)] sm:size-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
					className: "size-9 animate-spin text-primary sm:size-11",
					"aria-hidden": "true"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-6 text-2xl font-bold tracking-tight sm:mt-8 sm:text-4xl",
				children: "Connection Pending"
			})]
		})
	});
}
//#endregion
export { ConnectionPending as component };
