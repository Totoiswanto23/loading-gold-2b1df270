// Loading Screen Gold: A Tip in 200 Characters
// Writes a single loading-screen tip to /output/entry.txt.
// The tip is aimed at stressed developers and the AI coding agents
// sitting next to them at the keyboard.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TIP =
  "Tip: the bar is stuck at 99% because your agent just rewrote the file you said don't touch \u2014 twice. Breathe. It means well.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

if (TIP.length > 200) {
  throw new Error(`Tip is ${TIP.length} characters, over the 200 limit.`);
}
if (TIP.trim().length === 0) {
  throw new Error("Tip must not be empty.");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, TIP, "utf8");
console.log(`Wrote ${TIP.length}-character tip to ${outFile}:`);
console.log(TIP);
