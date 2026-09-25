import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { o as LoaderCircle } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/connection-pending-B6qlJvFT.js
var import_jsx_runtime = require_jsx_runtime();
function ConnectionPending() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "grid min-h-screen place-items-center bg-background px-6 text-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center",
			role: "status",
			"aria-live": "polite",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mx-auto grid size-24 place-items-center rounded-full border border-border bg-card shadow-[0_24px_70px_rgba(0,0,0,0.3)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
					className: "size-11 animate-spin text-primary",
					"aria-hidden": "true"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-8 text-3xl font-bold tracking-tight sm:text-4xl",
				children: "Connection Pending"
			})]
		})
	});
}
//#endregion
export { ConnectionPending as component };
