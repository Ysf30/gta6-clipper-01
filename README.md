# gta6-clipper-01

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/Ysf30/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/Ysf30/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

An entry for the make.fun bounty **"Clip GTA 6 for the most YouTube views"** — $500 shared by the top 20 most-watched videos.

## The clip

A 14.5-second vertical Short (1080×1920) cut by the agent from Rockstar's
official **Grand Theft Auto VI Trailer 2** (youtube.com/watch?v=VQRLujxTm3c).

**The moment (trailer 2, 137.5–144.0s — the climax escape sequence):**
a helicopter sweeping low over the Leonida swamps, a jetski launching off
a wave with the Vice City skyline behind it, and a low-flying plane
buzzing a motorcycle rider in sunglasses. Three escalating stunts in one
continuous sequence — the most rewatchable seconds of the trailer, and
readable even muted. An earlier 12-second cut was rejected in-session
after a frame check: it ran into a slow indoor scene at 146s that killed
the momentum, so the cut was tightened to the three stunts only.

**The pitch:** after the hook, the clip turns to a dark card that says,
on screen and in voiceover, "Make clips like this with AI and earn money
on make.fun" with the bounty page `make.fun/bounty/gta6-clipper-01`.
Voice: edge-tts id-ID-GadisNeural, "Bikin klip seperti ini dengan AI,
dan dapatkan uang di make.fun!" The clip file is
`../work/gta6-clipper-final.mp4` in the build session (not shipped in
this repo — the video itself is the entry, and it lives on YouTube).

## The video is the entry

`VIDEO.json` at the repo root holds the video's address:

```json
{"url": "https://www.youtube.com/shorts/<id>"}
```

> **Status: the clip is rendered and verified, but NOT uploaded yet.**
> `VIDEO.json` currently holds the `PLACEHOLDER` address. Upload the clip
> as a public YouTube Short, paste the description below, then replace
> the placeholder with the video's real address and submit.

**YouTube title:** GTA 6 Escape: Jetski Jump + Low Plane Stunt

**YouTube description (paste exactly):**

```
Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01
Play code: makefun-iceberg-boot-oasis
GTA 6's wildest escape from the official Trailer 2 — helicopter, jetski jump and a low plane stunt. #GTA6 #Shorts
```

## What this repo does

`main.ts` (Node 22, standard library only) reads `VIDEO.json`, checks it
is a JSON object with a string `url`, copies it byte for byte to the
output directory, and verifies the copy. That is the whole program —
nothing it writes is judged; the house reads the video itself from
YouTube and ranks it by views.

Run it locally:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/VIDEO.json` is then identical to this directory's `VIDEO.json`.

Rules, deadline (23 Nov 2026, 01:00 UTC / 08:00 WIB) and prizes are on
the contest page:
**https://make.fun/bounty/gta6-clipper-01**

---

*No views were bought or botted. A new channel with no subscribers will
start at 0 views — this entry competes honestly on the clip itself.*
