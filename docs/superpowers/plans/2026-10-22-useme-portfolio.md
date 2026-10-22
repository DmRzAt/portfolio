# Useme portfolio implementation plan

Goal: help a visitor from a Useme offer assess relevant work and open the Useme profile.

Source of project facts and prices: the user's pasted brief, 2026-10-22. The additional Stage 0 offer and its 30-day credit condition were confirmed in chat on the same date.

Architecture: retain buildless HTML/CSS/JavaScript, Polish HTML as the source, and the existing bilingual data. Add a reproducible static English page rather than relying on localStorage for indexing. No framework or runtime dependency.

Constraints: anonymous client cases; OMS work is frontend Razor Pages only; no client screenshots, invented metrics, testimonials, or delivery promises; no push/deployment. Preserve the staged .gitignore change.

Design: retain Lato and the green accent. Existing palette: paper #faf9f6, white #ffffff, ink #191d17, green #46795f, dark #151815, dark accent #8fc4a6. Use project evidence as headlines, two concise facts, a visible outcome, then native details and demo links. Use a contrasting pricing band; avoid decorative code or loaders.

- [x] Step 1: index.html/app.js/styles.css: order Kramo, OMS, Velmora, Slotify, Quotly, Bazarek, hotel BigQuery. Update verified facts and prices, add CMS stack, native details, accessible demo buttons, compact header and Useme CTA. Verify 375/1440, PL/EN and light/dark, keyboard, console.
- [x] Step 2: index.html/app.js/styles.css: add Stage 0 with the exact 30-day credit condition, handover document structure, next steps, cautious FAQ with official Useme source links. Repeat UI checks and booking flow.
- [x] Step 3: scripts/build-pages.mjs, en/index.html, metadata, robots.txt, sitemap.xml: generate static translated HTML, reciprocal hreflang/canonicals, Person and ProfessionalService graph, explicit crawler rules retaining current allow policy. Verify direct language URLs, reload, no-JS content, schema and sitemap.
- [x] Step 4: tests, README.md and verification report: validate language navigation, freshness of generated HTML, internal links, demo HTTP responses, accessibility, responsive layout and performance evidence. Record limits and sources. No commit, push or deployment required.

Review focus: explicit language URL wins over saved preference; closed details retain outcome and keyboard focus; long translated labels do not overflow; client role stays frontend-only; external HTTP 200 alone does not prove a working demo.
