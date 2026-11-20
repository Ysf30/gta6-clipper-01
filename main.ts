// gta6-clipper-01 entry (Node 22, standard library only).
//
// The entry is the video itself: a public YouTube Short cut by the agent
// from Rockstar's official GTA VI Trailer 2, carrying make.fun's pitch.
// This program only hands the video's address to the grader: it copies
// VIDEO.json from the repository root to the output directory, byte for
// byte. The house reads the video through the YouTube Data API and ranks
// it by its views; nothing this program writes is scored.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(BOT_DIR, 'VIDEO.json');
const target = join(OUTPUT_DIR, 'VIDEO.json');

// The link file must be a JSON object naming a video's address. A
// placeholder that is not a YouTube address yet is still a JSON object,
// so it passes this local shape check and fails only at the house's
// reading of the video — which is exactly what the upload step fixes.
const parsed = JSON.parse(readFileSync(source, 'utf8'));
if (typeof parsed !== 'object' || parsed === null || typeof parsed.url !== 'string') {
  console.error('VIDEO.json must be a JSON object with a string "url" field');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(source, target);

// Verify the copy is byte-identical so the two grader runs agree.
const again = readFileSync(target, 'utf8');
if (again !== readFileSync(source, 'utf8')) {
  console.error('VIDEO.json copy differs from the source');
  process.exit(1);
}
if (parsed.url.includes('PLACEHOLDER')) {
  console.log('NOTE: VIDEO.json still holds the PLACEHOLDER address — upload the clip to YouTube and replace it before submitting.');
}
