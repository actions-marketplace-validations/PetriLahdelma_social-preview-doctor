import assert from "node:assert/strict";
import { extractMeta } from "../dist/lib/parse.js";

const html = `<!doctype html><html><head>
<meta property="og:title" content="Hello" />
<meta name="twitter:card" content="summary" />
<title>Fallback</title>
</head></html>`;

const meta = extractMeta(html);
assert.equal(meta["og:title"], "Hello");
assert.equal(meta["twitter:card"], "summary");
assert.ok(meta.title || meta['og:title']);

console.log("parse.test.js ok");
