// Regenerates the store directory table in README.md from https://mock.shop/llms.txt.
// Usage: npm run update-stores
import { readFileSync, writeFileSync } from "node:fs";

const SOURCE = "https://mock.shop/llms.txt";
const START = "<!-- STORE_DIRECTORY:START -->";
const END = "<!-- STORE_DIRECTORY:END -->";
const LINE = /^- \[(?<name>[^\]]+)\]\((?<url>https?:\/\/[^)]+)\):\s*(?<rest>.+)$/;

const text = await (await fetch(SOURCE)).text();
const stores = [];
for (const raw of text.split("\n")) {
  const m = raw.match(LINE);
  if (!m) continue;
  const { name, url, rest } = m.groups;
  const host = new URL(url).host;
  const split = rest.match(/^(?<summary>.*?)\s*(?:(?:Categories|Collections):\s*(?<cats>.+?))?\.?$/s);
  const summary = (split?.groups.summary ?? rest).replace(/\.$/, "").trim();
  const cats = (split?.groups.cats ?? "").trim();
  stores.push({ name, host, summary, cats });
}
if (stores.length < 10) throw new Error(`Only parsed ${stores.length} stores from ${SOURCE}; refusing to overwrite the table.`);

const esc = (s) => s.replace(/\|/g, "\\|");
const rows = stores.map((s) => `| ${esc(s.name)} | \`${s.host}\` | ${esc(s.summary)} | ${esc(s.cats)} |`);
const table = [
  `${stores.length} stores, generated from [mock.shop/llms.txt](${SOURCE}) on ${new Date().toISOString().slice(0, 10)}. Set \`PUBLIC_STORE_DOMAIN\` to the host to use a store.`,
  "",
  "<details>",
  `<summary>Show all ${stores.length} stores</summary>`,
  "",
  "| Store | Host | What it sells | Categories |",
  "| --- | --- | --- | --- |",
  ...rows,
  "",
  "</details>",
].join("\n");

const readme = readFileSync("README.md", "utf8");
const start = readme.indexOf(START);
const end = readme.indexOf(END);
if (start === -1 || end === -1) throw new Error("README.md is missing the STORE_DIRECTORY markers.");
const next = readme.slice(0, start + START.length) + "\n" + table + "\n" + readme.slice(end);
writeFileSync("README.md", next);
process.stdout.write(`Wrote ${stores.length} stores to README.md\n`);
