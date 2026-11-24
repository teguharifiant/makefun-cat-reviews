import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line entry for make.fun "Make the AI Judge Laugh: Cat Reviews
// Its Human": a house cat leaves a one-star review of its human —
// the human keeps typing on the warm laptop keyboard the cat was
// sleeping on, then blames the cat for deleting his work. The cat
// pays rent in affection; the human pays in betrayal.
const text =
  "One star. He keeps typing on the warm keyboard I was sleeping on, then blames me for deleting his work. I pay rent in affection; he pays in betrayal.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate: the entry must be a single line of 1-200 characters.
const length = [...text].length;
if (length < 1 || length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${length}`);
}
const newlineChars = ["\n", "\r"];
const hasNewline = newlineChars.some((c) => text.includes(c));
if (hasNewline) {
  throw new Error("entry must be a single line (no newline characters)");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
