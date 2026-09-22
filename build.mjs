// Wraps src/page.html (the Artifact-contract fragment) into a standalone index.html.
// Single source of truth: src/page.html. Run: node build.mjs
import { readFile, writeFile } from "node:fs/promises";

const fragment = await readFile(new URL("./src/page.html", import.meta.url), "utf8");

// Mirrors the reset the Artifact runtime injects, so the standalone file renders identically.
const reset = `
  :root{color-scheme:light;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}
  body{margin:0;font:14px system-ui,-apple-system,"Segoe UI",sans-serif;background:#fafaf9}
  img{max-width:100%}
  [hidden]{display:none!important}`;

const page = `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="description" content="Analyse approfondie de l'ordre SEC 34-106402 du 17 septembre 2026 et des plateformes qui en bénéficient : Coinbase, Robinhood, Ondo, Uniswap, Hyperliquid.">
<style>${reset}
</style>
${fragment.trimEnd()}
</body>
</html>
`;

await writeFile(new URL("./index.html", import.meta.url), page, "utf8");
console.log(`index.html written — ${(page.length / 1024).toFixed(1)} kB`);
