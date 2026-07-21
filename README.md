# Portfolio — Dmytro Zatserkivnyi

Moja strona-wizytówka: fullstack developer (Next.js, Node.js, PostgreSQL, Stripe Connect),
student informatyki, freelance dla klientów z Polski i nie tylko.

**Live:** https://portfolio-six-olive-25.vercel.app

## Struktura

Bez frameworków i bez builda — czysta statyka, wrzucasz katalog na Vercel i działa:

```
index.html   — struktura strony (HTML)
styles.css   — cały wygląd i animacje (CSS)
app.js       — dane (PROJECTS, STACK, I18N…) + logika renderowania
assets/      — zrzuty projektów (webp), tekstura tła, og-image
```

W środku:

- styl „dokumentu technicznego": masthead z grubą linią, pasek meta, gigantyczna
  typografia Archivo (pełna + konturowa), sekcje numerowane jako FIG. 0X,
- przełącznik języka PL/EN (słownik `I18N`, zapamiętywany w `localStorage`),
- jasny/ciemny motyw: start zgodny z ustawieniem systemu, ręczny wybór zapamiętywany,
- interaktywne demo flow rezerwacji w hero (slot → booking → płatność → webhook), jawnie oznaczone jako symulacja bez wysyłania danych,
- projekty jako okno terminala (`projekty.sh`) — wiersz rozwija się w zrzut ekranu,
  fakty i linki (`<details>`, więc działa też klawiaturą),
- sekcja Opinie gotowa w kodzie (ukryta, aż dodasz pierwszy realny cytat),
- live status-check demo w tle (fetch no-cors) — „dostępne / wolne" na żywo,
- spójny system animacji: staggered hero, scroll-reveal (IntersectionObserver),
  rysowane podkreślenia, pasek postępu, scroll-spy, przewijany pas usług w stopce,
- kontakt ukierunkowany na useme (link do profilu, bezpieczna płatność) + bezpośredni mail,
- WCAG AA: kontrasty, focus-visible, skip-link, `prefers-reduced-motion`,
- Lighthouse: Performance 90–97 / Accessibility 100 / Best Practices 100 (CLS 0).

## Uruchomienie lokalne

Wystarczy otworzyć `index.html` w przeglądarce.

## Jak rozbudowywać

Cała treść siedzi w obiektach JS na górze `app.js` — HTML-a nie trzeba ruszać:

- **Nowy projekt** → dopisz obiekt do tablicy `PROJECTS` (id, name, img —
  zrzut ekranu 760px szer. w `assets/*.webp`, alt `{pl, en}`, desc `{pl, en}`,
  tags, demo, github, status: `live`/`demo`/`mockup`).
- **Nowy krok procesu / grupa stacku** → analogicznie `PROCESS` / `STACK`.
- **Nowy tekst interfejsu** → klucz w słowniku `I18N.pl` i `I18N.en`
  + `data-i18n="klucz"` na elemencie HTML.
- **Pasek usług (marquee)** → tablica `MARQUEE` w `app.js`.
- **Opinia klienta** → dodaj obiekt do `TESTIMONIALS` (`name`, `role{pl,en}`,
  `text{pl,en}`) — sekcja „Opinie" sama się odkryje.
- **Trzeci język (np. UA)** → nowy obiekt `I18N.ua` + pola `ua` w danych
  + opcja w przełączniku.
- **Nowa sekcja** → funkcja `renderCośtam()` wołana w `applyLang()`.

Jeśli kiedyś dojdzie blog/CMS i single-file przestanie wystarczać — dopiero
wtedy migracja na Astro/Next; nie wcześniej.

## Projekty pokazane na stronie

| Projekt | Demo | Kod |
|---|---|---|
| Velmora Home | https://velmorahome-production.up.railway.app/ | — |
| Slotify | https://slotify-rho.vercel.app | https://github.com/DmRzAt/Slotify |
| Bazarek | https://bazarek-taw.onrender.com | https://github.com/DmRzAt/bazarek |
| Quotly | https://quotly-flax.vercel.app | https://github.com/DmRzAt/quotly |

## Kontakt

- Email: dmytro.dev.zats@gmail.com
- GitHub: https://github.com/DmRzAt
