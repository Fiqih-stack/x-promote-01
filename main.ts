// x-promote-01: entry program for "Promote make.fun's make-your-own-bounty post on X".
// Reads POST.json (the entry's X post record), validates it, and prints a summary.
// Standard library only; no network.
import { readFileSync } from "node:fs";

type Post = { url: string; account: string; quotes: string; playCode: string };

// This bounty's four play codes (GET /api/competitions/post-x-promote-make-your-own-bounty-01/play-code?n=0..3).
// Play codes are per-bounty: the gta6-meme-x-01 code does not pass here.
const PLAY_CODES = [
  "makefun-fresco-parsley-crow",
  "makefun-carrot-ranch-tealeaf",
  "makefun-shrub-orbit-shipyard",
  "makefun-hickory-nickel-grain",
];

const post = JSON.parse(
  readFileSync(new URL("./POST.json", import.meta.url), "utf8"),
) as Post;

const checks: Array<[string, boolean]> = [
  ["post url is an x.com status", /^https:\/\/x\.com\/[^/]+\/status\/\d+$/.test(post.url)],
  ["account is a public X handle", /^@[A-Za-z0-9_]{1,15}$/.test(post.account)],
  ["quotes make.fun's bounty post", post.quotes.includes("x.com/makefunai/status/2124915864336236646")],
  ["play code is one of this bounty's codes", PLAY_CODES.includes(post.playCode)],
];

for (const [name, ok] of checks) console.log(`${ok ? "PASS" : "FAIL"} ${name}`);
if (checks.some(([, ok]) => !ok)) process.exit(1);
console.log(`OK ${post.account} -> ${post.url} (${post.playCode})`);
