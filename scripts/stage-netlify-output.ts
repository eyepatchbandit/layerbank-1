import { cp, mkdir, readdir } from "node:fs/promises";
import { join } from "node:path";

const outputDirectory = "dist";
const dashboardPublishDirectory = join(outputDirectory, "client");
const entries = await readdir(outputDirectory, { withFileTypes: true });

await mkdir(dashboardPublishDirectory, { recursive: true });

await Promise.all(
  entries
    .filter((entry) => entry.name !== "client")
    .map((entry) => cp(
      join(outputDirectory, entry.name),
      join(dashboardPublishDirectory, entry.name),
      { recursive: true },
    )),
);

console.log("Netlify static assets staged in dist/client");
