# Portfolio - Dmytro Zatserkivnyi

Portfolio dla klientów Useme: WordPress, WooCommerce, Elementor, panele B2B
i integracje API. Pięć opisów projektów z publicznym demo.

**Live:** https://dmytro-dev.pl

## Struktura

Bez frameworków i zależności aplikacji. Gotowe pliki statyczne są w repozytorium:

```
index.html              - struktura i statyczna polska treść
en/index.html           - wygenerowana statyczna angielska treść
app.js                  - dane PL/EN, demo i interakcje
styles.css              - wygląd, motywy i animacje
scripts/build-pages.mjs - synchronizacja HTML z danymi i generowanie EN
tests/*.test.mjs        - testy Node bez instalowania pakietów
theme-init.js           - wczesna inicjalizacja motywu
assets/                 - miniatury oraz lokalne fonty i ich licencje
robots.txt / sitemap.xml - indeksowanie obu języków
vercel.json             - nagłówki bezpieczeństwa
```

W środku:

- Lato, zielony akcent i jasny/ciemny motyw; domyślnie jasny, wybór zapamiętywany,
- język wynika z URL: `/` po polsku, `/en/` po angielsku; przełącznik działa bez JS,
- karty: mierzalny fakt, dwa punkty, widoczny rezultat, szczegóły w `<details>` i demo,
- Kramo jako pierwszy projekt z demo WordPress,
- Etap 0 od 300 zł z odliczeniem po podpisaniu umowy na realizację w ciągu 30 dni od odbioru przeglądu,
- struktura „Opis dzieła”, FAQ z odnośnikami do zasad Useme oraz trzy kroki do umowy,
- booking jako jawna symulacja usług przykładowych, bez zakupu i wysyłania danych,
- sekcja Opinie pozostaje ukryta, dopóki `TESTIMONIALS` jest puste,
- fonty lokalne z `font-display: swap`, bez zapytań do Google Fonts,
- Person/ProfessionalService, osobne metadane i wzajemne hreflang dla obu języków,
- skip-link, focus-visible, obsługa klawiatury i prefers-reduced-motion.

## Uruchomienie lokalne

Uruchom serwer z katalogu repozytorium (ścieżki zasobów zaczynają się od `/`):

```sh
python -m http.server 4173 --bind 127.0.0.1
```

Otwórz [PL](http://127.0.0.1:4173/) lub [EN](http://127.0.0.1:4173/en/).

## Jak rozbudowywać

Układ edytuj w `index.html`, teksty i dane w `app.js`. Nie edytuj ręcznie
`en/index.html`. Po zmianach danych lub układu uruchom:

```sh
node scripts/build-pages.mjs
node scripts/build-pages.mjs --check
node --test tests/*.test.mjs
node --check app.js
```

Generator synchronizuje polski HTML i zapisuje angielski. Hosting serwuje gotowe
pliki, bez wymaganego builda. Jawny URL języka ma pierwszeństwo przed zapisaną preferencją.

- **Nowy projekt** → dodaj strukturę karty w `index.html`, projekt w `PROJECTS`,
  pięć pól w `CASE_STUDIES` i nagłówek z dwoma faktami w `PROJECT_EVIDENCE` (PL/EN).
- **Nowy krok procesu / grupa stacku** → analogicznie `PROCESS` / `STACK`.
- **Nowy tekst interfejsu** → klucz w słowniku `I18N.pl` i `I18N.en`
  + `data-i18n="klucz"` na elemencie HTML.
- **Pasek usług (marquee)** → tablica `MARQUEE` w `app.js`.
- **Opinia klienta** → dodaj obiekt do `TESTIMONIALS` (`name`, `role{pl,en}`,
  `text{pl,en}`) — sekcja „Opinie" sama się odkryje.
- **Nowa sekcja** → statyczna struktura w HTML i klucze PL/EN w `I18N`.
- **Nowy język** → osobny URL, rozszerzenie generatora, metadanych i sitemap.

Jeśli kiedyś dojdzie blog/CMS i single-file przestanie wystarczać — dopiero
wtedy migracja na Astro/Next; nie wcześniej.

## Projekty pokazane na stronie

| Projekt | Demo | Kod |
|---|---|---|
| Kramo | https://p01--kramo-wp--bpk4d66g4n48.code.run/ | — |
| Velmora Home | https://velmorahome.infinityfree.io/?i=1 | — |
| Slotify | https://slotify-rho.vercel.app | https://github.com/DmRzAt/Slotify |
| Quotly | https://quotly-flax.vercel.app | https://github.com/DmRzAt/quotly |
| Bazarek | https://bazarek-taw.onrender.com | https://github.com/DmRzAt/bazarek |

Weryfikacja i źródła: [raport z 22.10.2026](docs/verification-2026-10-22.md).

## Kontakt

- Email: dmytro.dev.zats@gmail.com
- GitHub: https://github.com/DmRzAt
