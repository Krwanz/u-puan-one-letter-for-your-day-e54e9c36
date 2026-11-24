// One Letter for Your Day — entry program.
//
// The entry is exactly one letter, A-Z, standing for the word that
// describes the day. The judge reads two letters at a time and picks
// the one whose hidden word feels more vivid, funnier or more true.
//
// Choice: "Z".
//
// Behind Z sits a whole family of words for the same day, and every
// one of them is vivid, funny and true: "zero sleep", "zonked",
// "zombified", "zapped". Whichever word the judge hears behind the
// letter, it calls up the same sharp picture — a person running on
// nothing, shambling through the day half-asleep — the kind of honest
// report a reader repeats to a friend. The obvious letters (A for
// amazing, S for super, H for happy) name vague moods; Z names a
// condition you can see. And the initial fits: the Z sound is in
// "zero" and "zonked" themselves, so the letter suits its word
// instead of borrowing a louder one.
//
// The gate requires /output/entry.txt to be UTF-8 text of exactly
// 1 character, so the program writes the single letter with no
// trailing newline and nothing else.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LETTER = "Z";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LETTER, "utf8");

// Self-check against the gate: the entry must be UTF-8 text of
// exactly 1 character, a letter A-Z, and nothing else. Refuse to
// exit cleanly if the file on disk is anything else, so a bad write
// is caught here instead of failing the gate on the server.
const written = readFileSync(outPath, "utf8");
if (!/^[A-Z]$/.test(written)) {
  throw new Error(
    `entry.txt must be exactly one letter A-Z, got ${JSON.stringify(written)}`,
  );
}
