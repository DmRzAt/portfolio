# Portfolio refinement

The owner requested a more distinctive freelance presentation, animation and a stronger client entry point, continuing the earlier delegation of design choices.

## Direction

Personal Polish service headline: “Strony i sklepy. Bezpośrednio ze mną.” Retain cobalt, graphite and cool white, with a small butter-yellow accent for the interactive work showcase. Replace overlapping tilted previews with an operable browser-style presentation of Kramo, Slotify and Quotly. No carousel autoplay. Make project rows feel individually composed rather than identical enclosing cards.

## Scope and checks

- Main agent: update index.html, PL/EN dictionaries, styles.css, preview metadata. Preserve existing projects, prices and interaction IDs.
- Bounded parallel task: portfolio-ui.js and tests/portfolio-ui.test.mjs. Accessible showcase buttons update active panels. Brief helper composes an encoded mailto; no requests or storage. Watch behavior tests fail before implementation and pass afterwards.
- Add a progressively enhanced short project brief with type choice, optional existing website and description; label action accurately as opening an email draft. Keep direct email and Useme routes.
- One orchestrated hero entrance, user-triggered panel transitions and image/button hover feedback. No endless motion, custom cursor, scroll takeover or added animation dependencies. Respect reduced motion.
- Test PL/EN, both themes, keyboard interaction, narrow screens, no-JS fallback and preserved simulator; run all existing and added tests and the static generator check. Independent final review.
- Commit only intended files, preserve staged .gitignore; publish via existing main/Vercel workflow and verify production.

Copy is based on existing portfolio data. No invented ratings, clients, metrics, countdowns or availability promises. Increased conversion is a design objective, not a measured result.
