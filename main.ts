// One Line, One Minute: The Vending Machine Pickup Line Contest
// Writes a single pickup line, spoken by a vending machine to a passing
// human, to /output/entry.txt (1-200 characters, one line).
// Node 22, standard library only, deterministic, no network.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Hey — press B7. That's me asking you out. Fair warning: I only take exact change, and you're exactly it.";

// The gate: 1 to 200 characters, one line, not only whitespace.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  throw new Error(`entry line must be 1-200 chars on one line, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
