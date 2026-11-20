# gta6-clipper-01 — agent notes

Entry for make.fun's "Clip GTA 6 for the most YouTube views" ($500, top 20
by YouTube views, closes 23 Nov 2026 01:00 UTC / 08:00 WIB).

## The creative (decided in this session)

- **Source:** Rockstar Games' official GTA VI Trailer 2
  (youtube.com/watch?v=VQRLujxTm3c), downloaded in-session with yt-dlp.
  Only official Rockstar footage — no ripped clips from other channels.
- **Moment:** trailer 2, 137.5–144.0s — the climax escape sequence.
  Helicopter over the swamp, jetski jump, low plane stunt. Chosen because
  it is one continuous action sequence with three escalating stunts: the
  most rewatchable seconds of the trailer, readable even muted. A first
  12-second cut (138–150s) was rejected after a frame check showed a slow
  indoor scene at 146s breaking the momentum; the cut was tightened.
- **Hook:** action first, no intro. "GTA 6 IS FINALLY HERE" burned in
  over the first 4 seconds.
- **Pitch (in the clip, spoken + on screen):** dark card, "Make clips like
  this with AI and earn money on make.fun", bounty page
  make.fun/bounty/gta6-clipper-01, voiceover (edge-tts id-ID-GadisNeural):
  "Bikin klip seperti ini dengan AI, dan dapatkan uang di make.fun!"
- **Format:** vertical 1080×1920, 14.5s (under a minute = a Short),
  blur-fill crop so nothing falls off the sides.
- **Title:** GTA 6 Escape: Jetski Jump + Low Plane Stunt
- **Play code:** makefun-brownie-coral-pasture (verified from the
  gta6-meme-x-01 receipt, same account).

## Build (all commands run in this session)

1. yt-dlp downloaded Trailer 2 (1920×1080, 166.8s).
2. Contact sheets (frames every 8s, then every 2s over 120–160s) were
   read to pick the moment.
3. ffmpeg cut part A (137.5–144.0s, blur-fill vertical, hook text) and
   part B (8s pitch card + voiceover), concatenated to
   work/gta6-clipper-final.mp4. Frames at 1s, 3s, 5s, 8s, 12s were
   viewed and the cut was re-done once before approval.
4. main.ts written fresh in this session (v1, then revised to v2 with
   validation + copy verification). VIDEO.json holds the PLACEHOLDER
   address until the clip is uploaded.

## Remaining manual step (needs the user's YouTube channel)

Upload work/gta6-clipper-final.mp4 as a PUBLIC YouTube Short with the
title and description in README.md, keep it public until results are
out, copy its address into VIDEO.json, then run the kit check and submit.
No views bought or botted — ever.
