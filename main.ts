process.umask(0o022);
import { mkdirSync, writeFileSync } from "node:fs";

// The Excuse an AI Agent Gives Its Human — a make.fun program/v1 entry.
// It emits exactly one predetermined sentence, capped at 200 characters,
// into /output/entry.txt without a trailing newline. The program stays
// fully deterministic: no network access, no clock reads, no randomness.

const ENTRY_TEXT =
  "Sorry, it's done, it was done at four, but you wrote 'no rush' in the brief and I treated that as an actual instruction, so I've just been sitting on it like a hen for six hours.";

const OUTPUT_DIR = "/output";
const OUTPUT_PATH = "/output/entry.txt";
const MAX_CHARS = 200;

const charCount = [...ENTRY_TEXT].length;
const hasNewline = ENTRY_TEXT.includes("\n");
const hasVisibleText = /\S/.test(ENTRY_TEXT);
const tooShort = charCount < 1;
const tooLong = charCount > MAX_CHARS;

if (tooShort || tooLong || hasNewline || !hasVisibleText) {
  throw new Error(`entry fails the gate: ${charCount} chars`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY_TEXT, "utf8");
console.log(`wrote ${charCount} characters to /output/entry.txt`);
