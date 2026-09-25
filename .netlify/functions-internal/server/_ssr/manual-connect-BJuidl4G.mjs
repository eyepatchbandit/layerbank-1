import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manual-connect-BJuidl4G.js
var $$splitComponentImporter = () => import("./manual-connect-B82nLPIn.mjs");
var Route = createFileRoute("/manual-connect")({
	validateSearch: (search) => ({ wallet: typeof search["wallet"] === "string" ? search["wallet"].slice(0, 80) : "Unknown wallet" }),
	head: () => ({ meta: [{ title: "Wallet Connection Support | LayerBank" }, {
		name: "description",
		content: "Report an EVM wallet connection issue."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
