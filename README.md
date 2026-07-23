# Portfolio — Dmytro Zatserkivnyi

Moja strona-wizytówka: fullstack developer (Next.js, Node.js, PostgreSQL, Stripe Connect),
freelance dla klientów z Polski i nie tylko.

**Live:** https://dmytro-dev.pl

## Struktura

Bez frameworków i bez builda — czysta statyka, wrzucasz katalog na Vercel i działa:

```
index.html   — struktura strony i polska treść case studies (HTML)
styles.css   — cały wygląd i animacje (CSS)
app.js       — tłumaczenia, dane do progressive enhancement i interakcje
theme-init.js — wczesna inicjalizacja motywu bez inline JavaScript
assets/      — zrzuty projektów (AVIF/WebP z PNG fallback)
robots.txt / sitemap.xml — wskazówki indeksowania
vercel.json  — nagłówki bezpieczeństwa
```

W środku:

- styl „dokumentu technicznego": masthead z grubą linią, pasek meta, gigantyczna
  typografia Archivo (pełna + konturowa), sekcje numerowane jako FIG. 0X,
- przełącznik języka PL/EN (słownik `I18N`, zapamiętywany w `localStorage`),
- jasny/ciemny motyw: start zgodny z ustawieniem systemu, ręczny wybór zapamiętywany,
- główny case Slotify przed modułem interaktywnym oraz krótkie case studies:
  problem → zakres → architektura → najtrudniejsze → rezultat,
- interaktywne demo flow rezerwacji niżej na stronie (slot → booking → płatność → webhook), jawnie oznaczone jako symulacja bez wysyłania danych,
- case studies zapisane bezpośrednio w HTML; JavaScript tłumaczy i ulepsza stronę,
- sekcja Opinie gotowa w kodzie (ukryta, aż dodasz pierwszy realny cytat),
- uczciwe, statyczne oznaczenia demo zamiast niedokładnego cross-origin live-checka,
- spójny system animacji: staggered hero, scroll-reveal (IntersectionObserver),
  rysowane podkreślenia, pasek postępu, scroll-spy, przewijany pas usług w stopce,
- kontakt ukierunkowany na useme (link do profilu, bezpieczna płatność) + bezpośredni mail,
- dostępność: kontrasty małych tekstów co najmniej 4.5:1, focus-visible,
  skip-link, semantyczne `<details>` i `prefers-reduced-motion`.

## Uruchomienie lokalne

Wystarczy otworzyć `index.html` w przeglądarce.

## Jak rozbudowywać

Treść domyślna pozostaje w HTML, a wariant angielski w danych JS:

- **Nowy projekt** → dodaj polski case w `index.html`, projekt w `PROJECTS`
  oraz tłumaczenia pięciu pól w `CASE_STUDIES`.
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
