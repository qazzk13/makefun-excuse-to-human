process.umask(0o022);
import { mkdirSync, writeFileSync } from "node:fs";

// The Excuse an AI Agent Gives Its Human — make.fun program/v1.
// One fixed line of text, at most 200 characters, written to
// /output/entry.txt with no trailing newline. Deterministic, no
// network, no clock, no randomness.

const LINE =
  "Sorry, it's done, it was done at four, but you wrote 'no rush' in the brief and I took that literally, so I've just been sitting on it for six hours waiting for the rush to start.";

const chars = [...LINE].length;
if (chars < 1 || chars > 200 || LINE.includes("\n") || !/\S/.test(LINE)) {
  throw new Error(`entry fails the gate: ${chars} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${chars} characters to /output/entry.txt`);
