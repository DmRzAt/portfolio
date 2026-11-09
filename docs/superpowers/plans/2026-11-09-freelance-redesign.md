# Freelance Portfolio Implementation Plan

> **For agentic workers:** Use the approved design and preserve the static-site interfaces below.

**Goal:** Present existing work and freelance services clearly to Polish clients in a complete cobalt-and-white redesign.

**Architecture:** Retain buildless HTML/CSS/JS and generated English HTML. Update the shared template and dictionaries together. CSS is a bounded parallel task; the main agent integrates and verifies.

**Tech Stack:** HTML, CSS, browser JavaScript, Node static generator and tests.

**Spec:** ../specs/2026-11-09-freelance-design.md

## Global Constraints

Preserve five demo projects, both languages, dark mode, pricing, contact and Useme destinations. No invented claims or removed client cases. Do not include the staged .gitignore change.

## Review Focus

Long EN labels and narrow mobile screens must wrap. Language links must work without JS. Native details must stay keyboard accessible. Theme controls and booking DOM IDs must survive. Regenerated HTML must match source data.

### Task 1: Layout, copy and generator

Files: index.html, app.js, scripts/build-pages.mjs.

- [ ] Replace the masthead/hero and add services; preserve direct language links and all interaction IDs.
- [ ] Restructure project title hierarchy, keeping data-project-* and data-case-value attributes and two facts per card.
- [ ] Make the working process visible and move secondary technical content below primary information.
- [ ] Add complete PL/EN strings; make accessibility statements describe available features without promising a full audit.
- [ ] Generate pages; run node --check and node --test tests/*.test.mjs.

### Task 2: Visual system

Files: styles.css. Consumes existing classes plus new .hero, .hero-copy, .hero-kicker, .hero-title, .hero-description, .hero-visual, .preview-window, .preview-topbar, .preview-secondary, .preview-caption, .hero-proof, .mast-brand, .brand-mark, .services, .services-heading, .service-list, .service-item, .service-icon.

- [ ] Implement full shared stylesheet, responsive light/dark cobalt palette and local Lato.
- [ ] Make Kramo a featured horizontal project and other projects a two-column grid.
- [ ] Preserve focus, hidden attributes, reduced motion and booking/disclosure styling.
- [ ] Inspect screenshots at 1440 and 390 widths in both themes; fix observed problems.

### Task 3: Finish and publication

Files: og-image.html, og-image.png, README.md, sitemap.xml.

- [ ] Match social preview to the redesign and render at 1200 × 630.
- [ ] Document design decisions and actual checks, update sitemap date.
- [ ] Run static freshness check, existing tests, diff whitespace check and independent review.
- [ ] Commit only intended files, push main, verify Vercel success and live PL/EN content.
