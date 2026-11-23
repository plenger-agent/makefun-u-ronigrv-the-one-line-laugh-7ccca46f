// The One-Line Laugh — make.fun entry
// Writes one funny line (a single sentence, 1-200 chars) to /output/entry.txt.
// Node 22, stdlib only. Never removes the output directory itself:
// the grader's output dir is a mount point, so only its contents are emptied.
import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I told my smart speaker a secret, and now the ads know things my mother doesn't.";

// Gate guard: the sealed scorer accepts 1-200 UTF-8 chars, not whitespace-only.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line out of gate: ${LINE.length} chars`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
for (const name of readdirSync(outputDir)) {
  rmSync(join(outputDir, name), { recursive: true, force: true });
}
writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");
