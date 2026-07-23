---
name: add-project
description: Add a new case study (project) to the portfolio site — updates index.html and app.js in both PL and EN, following the repo's established structure. Use when the user wants to add a new project, case study, or realization to the portfolio.
---

# Add a new case study to the portfolio

The portfolio is plain static HTML/CSS/JS (no build step). Polish content lives
in `index.html` (SEO + works without JS); `app.js` holds PL/EN variants that JS
swaps on language toggle. **Every project must be added in BOTH places.**

## Inputs to collect from the user (ask if missing)

- Project name, one-line summary (what it is, plain language)
- Problem / Scope / Architecture / Hardest part / Result — 1 sentence each
- Stack tags (max 3-4, e.g. `Next.js · Prisma · Stripe`)
- Demo URL (required — every project here ships a working demo), GitHub URL (optional)
- Screenshot: 1280×800 (16:10), ideally .webp under ~70 KB → goes to `assets/<id>.webp`
- Any caveat worth an honest note (e.g. cold start on free tier)

## Step 1 — `app.js`

1. Add an entry to `PROJECTS` (id kebab-case, name, img, alt {pl,en},
   summary {pl,en}, facts {pl:[2 items], en:[2 items]}, tags, demo, github?).
   Copy the shape of the `quotly` entry.
2. Add the same id to `CASE_STUDIES` with `{pl, en}` objects containing:
   `problem, scope, architecture, challenge, result` (1 sentence each).
   Copy the shape of the `quotly` entry.

## Step 2 — `index.html`

Add an `<article class="case-card" data-project-id="<id>">` inside
`#projectsGrid`, **copying the markup of the last existing card exactly**
(header `case-summary` with index/name/summary/stack/status, then `case-body`
with `case-media` image link + `case-grid` of 5 `case-fact` items + `case-links`).
Content in the HTML is the Polish variant (fallback without JS).

- Increment `case-index` (cards are numbered 02, 03, 04, …; 01 is the featured Slotify).
- Image: `loading="lazy" decoding="async" width="1280" height="800"` and a
  descriptive Polish `alt`.

## Step 3 — housekeeping

- Bump `<lastmod>` in `sitemap.xml` to today's date.
- If the project changes the positioning (new main skill), consider updating
  `about.text` and the `MARQUEE` lines — ask the user first.

## Step 4 — verify

Render the page headless and eyeball the new card (fonts need network):

```powershell
& "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --headless --disable-gpu --hide-scrollbars --force-device-scale-factor=1 --window-size=1280,4000 --virtual-time-budget=10000 --screenshot="<scratchpad>\check.png" "file:///C:/Users/Admin/Documents/portfolio/index.html"
```

Check: card renders in the list, image not stretched, PL→EN toggle swaps all
fields (name/summary/stack/facts), no console references to missing i18n keys.

## Style rules for copy (both languages)

- Problem → decisions → result; concrete and verifiable, no buzzwords, no
  inflated claims. Honest notes (cold start etc.) go in the status pill via
  `liveCheck: false` + `note {pl,en}` on the PROJECTS entry.
- Never mention being a student or university context.
- Tone matches existing cards: short sentences, technical specifics
  (transactions, webhooks, auth) over adjectives.

## Commit

Commit locally with a short English message (e.g. `Add <Name> case study`).
**No AI co-author trailers. Do not push — the user pushes themselves**
(push = deploy to Vercel).
