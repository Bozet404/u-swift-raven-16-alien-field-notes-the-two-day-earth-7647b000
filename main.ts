// Alien Field Notes: The Two Day Earth Review
// A one-line review of planet Earth, written by an alien tourist.
// The program writes the review to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REVIEW =
  "They named their whole planet 'dirt' in their own language, then acted offended when I laughed. Honest branding, though. 4/5 — would land again.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), REVIEW, "utf8");

console.log(`wrote ${REVIEW.length} characters to ${join(outDir, "entry.txt")}`);
