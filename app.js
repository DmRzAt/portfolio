/* =====================================================================
   DANE — warianty językowe oraz dane do progressive enhancement.
   Polski rdzeń case studies pozostaje w HTML dla SEO i działania bez JS.
   ===================================================================== */

const PROJECTS = [
  {
    id: 'velmora-home',
    name: 'Velmora Home',
    img: 'assets/velmora-home.png',
    alt: {
      pl: 'Velmora Home — strona główna sklepu z meblami i dekoracjami',
      en: 'Velmora Home — furniture and home decor store home page',
    },
    summary: {
      pl: 'Demonstracyjny sklep wnętrzarski z katalogiem mebli, oświetlenia, dekoracji i tekstyliów.',
      en: 'A demo interior design store with furniture, lighting, decor and textile catalogues.',
    },
    facts: {
      pl: [
        { label: 'Co w środku', value: 'Kategorie i warianty produktów, koszyk, konto klienta, promocje oraz treści inspiracyjne.' },
        { label: 'Technologia', value: 'WordPress z WooCommerce i Elementorem, uzupełniony dedykowanym motywem Velmora.' },
      ],
      en: [
        { label: 'Inside', value: 'Product categories and variants, a cart, customer account, promotions and editorial inspiration.' },
        { label: 'Technology', value: 'WordPress with WooCommerce and Elementor, complemented by a custom Velmora theme.' },
      ],
    },
    tags: ['WordPress', 'WooCommerce', 'Elementor'],
    demo: 'https://velmorahome-production.up.railway.app/',
    status: 'live',
  },
  {
    id: 'slotify',
    name: 'Slotify',
    img: 'assets/slotify.webp',
    alt: {
      pl: 'Slotify — strona główna z kalendarzem wolnych terminów',
      en: 'Slotify — home page with an availability calendar',
    },
    summary: {
      pl: 'Rezerwacje usług lokalnych — konkretny termin zamiast telefonów i podwójnych rezerwacji.',
      en: 'Local services booking — a concrete time slot instead of phone calls and double bookings.',
    },
    facts: {
      pl: [
        { label: 'Co w środku', value: 'Kalendarz wolnych slotów, rezerwacja terminu i płatność online (Stripe).' },
        { label: 'Do kliknięcia', value: 'Tryb demo z trzema rolami — klient, partner i admin — bez zakładania konta.' },
      ],
      en: [
        { label: 'Inside', value: 'Availability calendar, slot booking and online payment (Stripe).' },
        { label: 'Try it', value: 'Demo mode with three roles — client, partner and admin — no sign-up needed.' },
      ],
    },
    tags: ['Next.js', 'Prisma', 'Stripe'],
    demo: 'https://slotify-rho.vercel.app',
    github: 'https://github.com/DmRzAt/Slotify',
    status: 'live',
  },
  {
    id: 'bazarek',
    name: 'Bazarek',
    img: 'assets/bazarek.webp',
    alt: {
      pl: 'Bazarek — strona główna platformy ogłoszeniowej',
      en: 'Bazarek — marketplace platform home page',
    },
    summary: {
      pl: 'Platforma ogłoszeniowa łącząca frontend Angular z autorskim backendem.',
      en: 'A marketplace platform combining an Angular frontend with a custom backend.',
    },
    facts: {
      pl: [
        { label: 'Mój zakres', value: 'Schemat MongoDB, REST API i autoryzacja — backend wykonałem w całości.' },
        { label: 'Rezultat', value: 'Działająca aplikacja fullstack pokryta testami API i komponentów.' },
      ],
      en: [
        { label: 'My role', value: 'MongoDB schema, REST API and authorization — I built the entire backend.' },
        { label: 'Outcome', value: 'A working full-stack application covered by API and component tests.' },
      ],
    },
    tags: ['Angular 19', 'Express', 'MongoDB'],
    demo: 'https://bazarek-taw.onrender.com',
    github: 'https://github.com/DmRzAt/bazarek',
    // Render (darmowy tier) blokuje cross-origin (CORP) → live-checka nie da się
    // zrobić z przeglądarki bez błędu w konsoli; zamiast tego uczciwa notka o cold-starcie
    liveCheck: false,
    note: { pl: 'Render — budzi się ~30 s', en: 'Render — cold start ~30 s' },
  },
  {
    id: 'quotly',
    name: 'Quotly',
    img: 'assets/quotly.webp',
    alt: {
      pl: 'Quotly — landing z generatorem palet i płatnościami Stripe',
      en: 'Quotly — landing with palette generator and Stripe billing',
    },
    summary: {
      pl: 'Panel partnera obsługujący onboarding i rozliczenia przez Stripe Connect.',
      en: 'A partner dashboard handling onboarding and settlements through Stripe Connect.',
    },
    facts: {
      pl: [
        { label: 'Mój zakres', value: 'Onboarding Express, automatyczny podział prowizji i webhooki śledzące weryfikację.' },
        { label: 'Rezultat', value: 'Jeden spójny przepływ od weryfikacji konta do podziału płatności.' },
      ],
      en: [
        { label: 'My role', value: 'Express onboarding, automatic commission splitting and verification webhooks.' },
        { label: 'Outcome', value: 'One consistent flow from account verification to payment splitting.' },
      ],
    },
    tags: ['Next.js', 'Node.js', 'Stripe Connect'],
    demo: 'https://quotly-flax.vercel.app',
    github: 'https://github.com/DmRzAt/quotly',
    status: 'live',
  },
];

/* Treść case studies ma swój polski wariant bezpośrednio w HTML, dzięki czemu
   najważniejsze informacje są dostępne bez JavaScript. Ten obiekt służy do
   przełączenia języka i nie tworzy struktury dokumentu. */
const CASE_STUDIES = {
  'velmora-home': {
    pl: {
      problem: 'Połączyć szeroki katalog wnętrzarski z inspiracjami i prostą ścieżką zakupową.',
      scope: 'Kategorie i warianty produktów, konto klienta, koszyk, promocje oraz treści inspiracyjne.',
      architecture: 'WordPress, WooCommerce i Elementor uzupełnione dedykowanym motywem Velmora.',
      challenge: 'Spójna prezentacja wielu kategorii, wariantów, promocji i treści redakcyjnych w jednym sklepie.',
      result: 'Działające demo sklepu z pełnym katalogiem, kontem klienta i procesem zakupowym.',
    },
    en: {
      problem: 'Combine a broad interiors catalogue with inspiration content and a clear purchasing path.',
      scope: 'Product categories and variants, customer account, cart, promotions and editorial inspiration.',
      architecture: 'WordPress, WooCommerce and Elementor complemented by the custom Velmora theme.',
      challenge: 'Present many categories, variants, promotions and editorial content as one coherent store.',
      result: 'A working store demo with a full catalogue, customer account and purchase flow.',
    },
  },
  slotify: {
    pl: {
      problem: 'Telefoniczne rezerwacje i równoległe próby zajęcia tego samego terminu prowadzą do double-bookingu.',
      scope: 'Pełny przepływ marketplace: klient, partner i administrator; rezerwacje, płatności, onboarding oraz import danych.',
      architecture: 'Next.js, PostgreSQL/Neon, Prisma i Stripe Connect Express; autoryzacja sprawdzana ponownie w route handlerach.',
      challenge: 'Warunkowy UPDATE w transakcji i UNIQUE na Booking.slotId blokują równoległe zajęcie jednego terminu.',
      result: 'Działające demo z trzema rolami, testowymi płatnościami i pełnym przepływem od wyboru slotu do webhooka.',
    },
    en: {
      problem: 'Phone bookings and concurrent attempts to reserve one time slot create a double-booking risk.',
      scope: 'The complete marketplace flow: client, partner and admin; bookings, payments, onboarding and data import.',
      architecture: 'Next.js, PostgreSQL/Neon, Prisma and Stripe Connect Express; authorization is rechecked in route handlers.',
      challenge: 'A conditional UPDATE inside a transaction plus UNIQUE on Booking.slotId prevents concurrent slot claims.',
      result: 'A working three-role demo with test payments and the full flow from slot selection to webhook processing.',
    },
  },
  bazarek: {
    pl: {
      problem: 'Połączyć ogłoszenia, wyszukiwanie, czat, konta użytkowników i administrację w jednej aplikacji.',
      scope: 'Projekt zespołowy; schemat MongoDB, REST API i autoryzacja — backend wykonałem w całości.',
      architecture: 'Angular 19, Express i MongoDB; access JWT 15 min oraz refresh token 7 dni w httpOnly cookie.',
      challenge: 'Bezpieczne odświeżanie sesji, uprawnienia owner/admin, czat, uploady i monitoring produkcyjny.',
      result: 'Działająca aplikacja fullstack pokryta 7 testami API i 11 testami komponentów Angular.',
    },
    en: {
      problem: 'Bring listings, search, chat, user accounts and administration into one application.',
      scope: 'A team project; I built the MongoDB schema, REST API, authorization and the complete backend.',
      architecture: 'Angular 19, Express and MongoDB; a 15-minute access JWT and 7-day refresh token in an httpOnly cookie.',
      challenge: 'Secure session refresh, owner/admin permissions, chat, uploads and production monitoring.',
      result: 'A working full-stack application covered by 7 API tests and 11 Angular component tests.',
    },
  },
  quotly: {
    pl: {
      problem: 'Powiązać dostęp do funkcji SaaS z miesięcznym limitem oraz wypłatami dla sprzedawców.',
      scope: 'Subskrypcje, quota, Stripe Connect Express, marketplace oraz testowe przepływy buyer/seller.',
      architecture: 'Next.js, Supabase Postgres/Auth, Prisma, Stripe Checkout, Connect i webhooki.',
      challenge: 'Quota liczona z rekordów, idempotentne webhooki i rozdział 90/10 liczony po stronie serwera w centach.',
      result: 'Testowy SaaS obejmujący dwa pełne łańcuchy: auth → subskrypcja → quota oraz onboarding → sprzedaż → split payout.',
    },
    en: {
      problem: 'Tie SaaS feature access to a monthly quota while supporting seller payouts.',
      scope: 'Subscriptions, quota enforcement, Stripe Connect Express, marketplace and buyer/seller demo flows.',
      architecture: 'Next.js, Supabase Postgres/Auth, Prisma, Stripe Checkout, Connect and webhooks.',
      challenge: 'Row-derived quota, idempotent webhooks and a server-side 90/10 split calculated in integer cents.',
      result: 'A test-mode SaaS covering two complete chains: auth → subscription → quota and onboarding → sale → split payout.',
    },
  },
};


const STACK = [
  { label: { pl: 'Frontend', en: 'Frontend' }, items: ['Next.js / React', 'Angular', 'TypeScript'] },
  { label: { pl: 'Backend', en: 'Backend' }, items: ['Node.js / Express', 'FastAPI (Python)'] },
  { label: { pl: 'Baza danych', en: 'Database' }, items: ['PostgreSQL', 'MongoDB'] },
  { label: { pl: 'Płatności / inne', en: 'Payments / other' }, items: ['Stripe Connect', 'Docker', 'Git'] },
];

const PROCESS = [
  {
    title: { pl: 'Analiza', en: 'Analysis' },
    desc: {
      pl: 'Zanim padnie wycena — pytania: cel biznesowy, edge case\'y, integracje. To one kształtują architekturę.',
      en: 'Before any quote — questions: business goal, edge cases, integrations. These shape the architecture.',
    },
  },
  {
    title: { pl: 'Wycena etapowa', en: 'Staged pricing' },
    desc: {
      pl: 'Projekt dzielę na etapy z osobną wyceną. Płacisz za ukończone etapy, nie za obietnice.',
      en: 'The project is split into stages, each priced separately. You pay for completed stages, not promises.',
    },
  },
  {
    title: { pl: 'Development', en: 'Development' },
    desc: {
      pl: 'Krótkie iteracje. Postęp oglądasz na działającym deployu, nie na screenshotach.',
      en: 'Short iterations. You watch progress on a working deploy, not screenshots.',
    },
  },
  {
    title: { pl: 'Wsparcie', en: 'Support' },
    desc: {
      pl: 'Po wdrożeniu nie znikam: poprawki, monitoring, dalszy rozwój w miarę potrzeb.',
      en: 'I don\'t disappear after launch: fixes, monitoring, further development as needed.',
    },
  },
];

/* orientacyjne progi cenowe — filtrują nietrafione zapytania i ośmielają
   poważnych klientów; dokładna wycena zawsze po analizie */
const PRICING = {
  items: [
    {
      name: { pl: 'Landing / strona wizytówka', en: 'Landing / one-page site' },
      price: { pl: 'od 1 500 zł', en: 'from 1,500 zł' },
      desc: { pl: 'Responsywna, szybka, z formularzem kontaktowym i SEO.', en: 'Responsive, fast, with a contact form and SEO.' },
    },
    {
      name: { pl: 'Integracja płatności', en: 'Payment integration' },
      price: { pl: 'od 2 500 zł', en: 'from 2,500 zł' },
      desc: { pl: 'Stripe / Stripe Connect: checkout, webhooki, rozliczenia.', en: 'Stripe / Stripe Connect: checkout, webhooks, settlements.' },
    },
    {
      name: { pl: 'Sklep lub panel B2B', en: 'E-commerce or B2B panel' },
      price: { pl: 'od 4 500 zł', en: 'from 4,500 zł' },
      desc: { pl: 'Konta, role, baza danych, API — aplikacja end-to-end.', en: 'Accounts, roles, database, API — an end-to-end application.' },
    },
  ],
  note: {
    pl: 'Progi orientacyjne „od" — dokładna wycena po krótkiej, bezpłatnej analizie. Praca i płatność etapami, także przez useme (escrow).',
    en: 'Indicative "from" thresholds — an exact quote follows a short, free analysis. Staged work and payment, also via useme (escrow).',
  },
};

const A11Y = [
  {
    tag: 'keyboard',
    title: { pl: 'Nawigacja klawiaturą', en: 'Keyboard navigation' },
    desc: {
      pl: 'Cała strona obsługiwana Tabem — widoczne focus-ringi i skip-link do treści.',
      en: 'The whole site is operable with Tab — visible focus rings and a skip link.',
    },
  },
  {
    tag: 'contrast',
    title: { pl: 'Kontrast WCAG AA', en: 'WCAG AA contrast' },
    desc: {
      pl: 'Każdy tekst spełnia min. 4.5:1 — sprawdzone narzędziem, nie „na oko".',
      en: 'Every text meets at least 4.5:1 — checked with tooling, not by eye.',
    },
  },
  {
    tag: 'motion',
    title: { pl: 'prefers-reduced-motion', en: 'prefers-reduced-motion' },
    desc: {
      pl: 'Animacje wyłączają się, gdy system użytkownika o to prosi.',
      en: 'Animations switch off when the user\'s system asks for it.',
    },
  },
];

/* Opinie klientów — DODAJ obiekt po pierwszym zakończonym projekcie.
   Jedna cytata z prawdziwym imieniem i firmą waży więcej niż każdy element designu.
   Póki tablica jest pusta, sekcja "Opinie" jest ukryta (nie renderuje się).
   Wzór (uzupełnij PRAWDZIWYMI danymi — nie wymyślaj):
   {
     name: 'Imię Nazwisko',
     role: { pl: 'rola · firma', en: 'role · company' },
     text: { pl: 'Cytat po polsku.', en: 'Quote in English.' },
   }
*/
const TESTIMONIALS = [];

const BOOKING_SERVICES = [
  { id: 'consultation', price: 120, label: { pl: 'Konsultacja · 30 min', en: 'Consultation · 30 min' } },
  { id: 'wcag-audit', price: 240, label: { pl: 'Audyt WCAG', en: 'WCAG audit' } },
  { id: 'api-review', price: 180, label: { pl: 'Przegląd API', en: 'API review' } },
];

const BOOKING_TIMES = ['10:00', '12:30', '16:00'];

const BOOKING_STEPS = [
  { method: 'GET', path: '/api/slots', label: { pl: 'Pobrano wolne terminy', en: 'Available slots loaded' } },
  { method: 'POST', path: '/api/bookings', label: { pl: 'Utworzono rezerwację', en: 'Booking created' } },
  { method: 'POST', path: '/api/payments', label: { pl: 'Potwierdzono płatność', en: 'Payment confirmed' } },
  { method: 'EVENT', path: 'payment_intent.succeeded', label: { pl: 'Odebrano webhook Stripe', en: 'Stripe webhook received' } },
];

/* pas przewijany — CO konkretnie robię (usługi), nie tylko nazwy technologii */
const MARQUEE = {
  pl: [
    'Aplikacje webowe end-to-end',
    'Integracje płatności — Stripe',
    'REST API + autoryzacja',
    'Panele i dashboardy B2B',
    'Bazy danych — SQL i NoSQL',
    'Dostępność WCAG AA',
    'Wycena i praca na etapy',
  ],
  en: [
    'End-to-end web apps',
    'Payment integrations — Stripe',
    'REST APIs + auth',
    'B2B panels & dashboards',
    'Databases — SQL & NoSQL',
    'WCAG AA accessibility',
    'Staged pricing & delivery',
  ],
};

const I18N = {
  pl: {
    'ui.skip': 'Przejdź do treści',
    'mast.sub': 'FULLSTACK · WEB · B2B · PŁATNOŚCI',
    'meta.nr': 'NR. 01 — PORTFOLIO',
    'meta.loc': 'TARNÓW / ZDALNIE',
    'hl.note': '↳ NEXT.JS · NODE.JS · POSTGRESQL · STRIPE',
    'demo.sectionTitle': 'Interaktywne demo',
    'demo.sectionEyebrow': 'slot → booking → payment → webhook',
    'demo.sectionHead': 'Od wolnego terminu do potwierdzonej płatności.',
    'demo.sectionCopy': 'Krótka symulacja pokazuje logikę przepływu bez wysyłania danych i bez prawdziwego zakupu.',
    'about.lead': 'Zanim zacznę kodować, zadaję pytania, które realnie wpływają na architekturę i wycenę.',
    'contact.head': 'Porozmawiajmy<span class="dot">.</span>',
    'nav.projects': 'Projekty',
    'nav.process': 'Proces',
    'nav.stack': 'Stack',
    'nav.about': 'O mnie',
    'nav.contact': 'Kontakt',
    'nav.menu': 'Menu',
    'lang.switch': 'Switch to English',
    'theme.toLight': 'Włącz jasny motyw',
    'theme.toDark': 'Włącz ciemny motyw',
    'hero.eyebrow': 'dostępny do współpracy',
    'hero.sub': 'Buduję aplikacje webowe i panele B2B z płatnościami — od analizy do wdrożenia.',
    'hero.cta1': 'Zobacz projekty',
    'hero.cta2': 'Napisz do mnie',
    'demo.title': 'booking.flow.ts — interaktywne demo',
    'demo.serviceLabel': 'Usługa',
    'demo.timeLabel': 'Dostępny termin',
    'demo.book': 'Zarezerwuj demo',
    'demo.repeat': 'Powtórz demo',
    'demo.processing': 'Przetwarzanie…',
    'demo.note': 'Symulacja interfejsu — niczego nie kupujesz, żadne dane nie są wysyłane.',
    'demo.slots': '3 terminy · symulacja',
    'demo.paid': 'opłacono · 0 danych wysłanych',
    'demo.waiting': 'czeka',
    'demo.exampleSplit': 'Przykładowe rozliczenie',
    'demo.partner': 'Partner',
    'demo.platform': 'Platforma',
    'projects.featuredTitle': 'Główny case',
    'projects.featuredEyebrow': 'rezerwacje · płatności · trzy role',
    'projects.moreTitle': 'Pozostałe case studies',
    'projects.moreEyebrow': 'problem · decyzje · rezultat',
    'case.problem': 'Problem',
    'case.scope': 'Zakres',
    'case.architecture': 'Architektura',
    'case.challenge': 'Najtrudniejsze',
    'case.result': 'Rezultat',
    'a11y.eyebrow': 'standard, nie dodatek',
    'a11y.title': 'Dostępność',
    'a11y.text': 'Buduję zgodnie z WCAG AA: pełna nawigacja klawiaturą, ARIA, kontrasty, poszanowanie prefers-reduced-motion. Ta strona też tak działa — sprawdź Tabem.',
    'process.eyebrow': 'jak pracuję',
    'process.title': 'Proces',
    'stack.eyebrow': 'narzędzia',
    'about.eyebrow': 'kim jestem',
    'about.title': 'O mnie',
    'about.text': 'Fullstack developer z okolic Tarnowa. Buduję aplikacje webowe end-to-end — <strong>autoryzacja, REST API, integracje płatności Stripe</strong> — na Next.js, Node.js, PostgreSQL i MongoDB. W praktyce oznacza to m.in. idempotentne webhooki, transakcyjne blokowanie terminów przeciw double-bookingowi i podział prowizji liczony po stronie serwera. Każdy projekt w portfolio ma działające demo, a większość — otwarty kod na GitHubie.',
    'about.loc.label': 'Lokalizacja',
    'about.av.label': 'Dostępność',
    'about.av.value': 'Zdalnie — Polska i zagranica',
    'about.lang.label': 'Języki',
    'about.lang.value': 'Polski, ukraiński, angielski',
    'testimonials.eyebrow': 'opinie klientów',
    'testimonials.title': 'Opinie',
    'contact.lead': 'Masz projekt albo pytanie o wycenę? Odpisuję zwykle tego samego dnia.',
    'contact.useme.k': 'preferowana ścieżka współpracy',
    'contact.useme.v': 'Zatrudnij mnie przez useme →',
    'contact.useme.sub': 'Bezpieczna płatność z fakturą — środki są zabezpieczone do czasu odbioru pracy. Zero ryzyka dla obu stron.',
    'status.demo': 'demo',
    'links.demo': '→ Demo',
    'links.github': '→ GitHub',
  },
  en: {
    'ui.skip': 'Skip to content',
    'mast.sub': 'FULLSTACK · WEB · B2B · PAYMENTS',
    'meta.nr': 'NO. 01 — PORTFOLIO',
    'meta.loc': 'TARNÓW / REMOTE',
    'hl.note': '↳ NEXT.JS · NODE.JS · POSTGRESQL · STRIPE',
    'demo.sectionTitle': 'Interactive demo',
    'demo.sectionEyebrow': 'slot → booking → payment → webhook',
    'demo.sectionHead': 'From an available slot to a confirmed payment.',
    'demo.sectionCopy': 'A short simulation shows the flow logic without sending data or making a real purchase.',
    'about.lead': 'Before I write any code, I ask the questions that actually shape architecture and pricing.',
    'contact.head': 'Let’s talk<span class="dot">.</span>',
    'nav.projects': 'Projects',
    'nav.process': 'Process',
    'nav.stack': 'Stack',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'lang.switch': 'Przełącz na polski',
    'theme.toLight': 'Switch to light theme',
    'theme.toDark': 'Switch to dark theme',
    'hero.eyebrow': 'available for work',
    'hero.sub': 'I build web applications and B2B dashboards with payments — from analysis to deployment.',
    'hero.cta1': 'See projects',
    'hero.cta2': 'Get in touch',
    'demo.title': 'booking.flow.ts — interactive demo',
    'demo.serviceLabel': 'Service',
    'demo.timeLabel': 'Available time',
    'demo.book': 'Book demo slot',
    'demo.repeat': 'Run demo again',
    'demo.processing': 'Processing…',
    'demo.note': 'Interface simulation — you are not buying anything and no data is sent.',
    'demo.slots': '3 slots · simulation',
    'demo.paid': 'paid · 0 data sent',
    'demo.waiting': 'waiting',
    'demo.exampleSplit': 'Example settlement',
    'demo.partner': 'Partner',
    'demo.platform': 'Platform',
    'projects.featuredTitle': 'Featured case',
    'projects.featuredEyebrow': 'bookings · payments · three roles',
    'projects.moreTitle': 'More case studies',
    'projects.moreEyebrow': 'problem · decisions · outcome',
    'case.problem': 'Problem',
    'case.scope': 'Scope',
    'case.architecture': 'Architecture',
    'case.challenge': 'Hardest part',
    'case.result': 'Outcome',
    'a11y.eyebrow': 'a standard, not an add-on',
    'a11y.title': 'Accessibility',
    'a11y.text': 'I build to WCAG AA: full keyboard navigation, ARIA, contrast, prefers-reduced-motion respected. This site works that way too — try Tab.',
    'process.eyebrow': 'how I work',
    'process.title': 'Process',
    'stack.eyebrow': 'tools',
    'about.eyebrow': 'who I am',
    'about.title': 'About',
    'about.text': 'Fullstack developer based near Tarnów, Poland. I build web applications end to end — <strong>authorization, REST APIs, Stripe payment integrations</strong> — with Next.js, Node.js, PostgreSQL and MongoDB. In practice that means idempotent webhooks, transactional slot locking against double-booking and server-side commission splits. Every project in this portfolio ships with a working demo, and most with open code on GitHub.',
    'about.loc.label': 'Location',
    'about.av.label': 'Availability',
    'about.av.value': 'Remote — Poland & international',
    'about.lang.label': 'Languages',
    'about.lang.value': 'Polish, Ukrainian, English',
    'testimonials.eyebrow': 'client feedback',
    'testimonials.title': 'Testimonials',
    'contact.lead': 'Got a project or a pricing question? I usually reply the same day.',
    'contact.useme.k': 'preferred way to work together',
    'contact.useme.v': 'Hire me via useme →',
    'contact.useme.sub': 'Secure, invoiced payment — funds are held in escrow until the work is accepted. Zero risk for both sides.',
    'status.demo': 'demo',
    'links.demo': '→ Demo',
    'links.github': '→ GitHub',
  },
};

/* =====================================================================
   RENDER — każda sekcja z osobnej funkcji; nowa sekcja = nowa funkcja
   ===================================================================== */

const html = document.documentElement;
html.classList.add('js');

const t = (key) => I18N[currentLang()][key] || key;
const currentLang = () => html.getAttribute('data-lang') || 'pl';

/* localStorage może rzucić (tryb prywatny, zablokowane cookies) — nigdy nie
   pozwalamy, by brak storage wyłączył całą stronę */
function readStorage(key) {
  try { return localStorage.getItem(key); } catch (_) { return null; }
}
function writeStorage(key, value) {
  try { localStorage.setItem(key, value); } catch (_) {}
}

/* Polski wariant case studies znajduje się w HTML. JavaScript odpowiada tylko
   za przełączenie języka i drobne ulepszenia — bez usuwania treści z dokumentu. */
function applyProjectLanguage() {
  const lang = currentLang();

  document.querySelectorAll('[data-project-id]').forEach(container => {
    const project = PROJECTS.find(item => item.id === container.dataset.projectId);
    const caseStudy = CASE_STUDIES[container.dataset.projectId]?.[lang];
    if (!project || !caseStudy) return;

    container.querySelectorAll('[data-project-name]').forEach(el => { el.textContent = project.name; });
    container.querySelectorAll('[data-project-summary]').forEach(el => { el.textContent = project.summary[lang]; });
    container.querySelectorAll('[data-project-stack]').forEach(el => { el.textContent = project.tags.join(' · '); });
    container.querySelectorAll('[data-project-image]').forEach(el => { el.alt = project.alt[lang]; });
    container.querySelectorAll('[data-case-value]').forEach(el => {
      const value = caseStudy[el.dataset.caseValue];
      if (value) el.textContent = value;
    });
    container.querySelectorAll('[data-project-status]').forEach(el => {
      el.textContent = project.liveCheck === false ? project.note[lang] : t('status.demo');
    });
  });
}

function renderStack() {
  const lang = currentLang();
  document.getElementById('stackGrid').innerHTML = STACK.map(group => `
    <div class="col-stack">
      <div class="col-cat">${group.label[lang]}</div>
      <div class="col-items">${group.items.join(' · ')}</div>
    </div>
  `).join('');
}

function renderProcess() {
  const lang = currentLang();
  document.getElementById('processGrid').innerHTML = PROCESS.map((step, i) => `
    <div class="col-step">
      <div class="col-num">0${i + 1}</div>
      <h3 class="col-title"><span class="slash">/ </span>${step.title[lang]}</h3>
      <p class="col-desc">${step.desc[lang]}</p>
    </div>
  `).join('');
}

function renderPricing() {
  const lang = currentLang();
  document.getElementById('pricingGrid').innerHTML = PRICING.items.map(item => `
    <div class="price-card">
      <div class="price-name">${item.name[lang]}</div>
      <div class="price-value">${item.price[lang]}</div>
      <p class="price-desc">${item.desc[lang]}</p>
    </div>
  `).join('') + `<p class="pricing-note">${PRICING.note[lang]}</p>`;
}

function renderTestimonials() {
  const section = document.getElementById('testimonials');
  if (!TESTIMONIALS.length) { section.hidden = true; return; } // brak danych → sekcja ukryta
  const lang = currentLang();
  section.hidden = false;
  document.getElementById('testimonialsGrid').innerHTML = TESTIMONIALS.map(q => `
    <figure class="quote">
      <blockquote>${q.text[lang]}</blockquote>
      <figcaption>
        <span class="q-name">${q.name}</span>
        <span class="q-role">${q.role[lang]}</span>
      </figcaption>
    </figure>
  `).join('');
}

function renderA11y() {
  const lang = currentLang();
  document.getElementById('a11yGrid').innerHTML = A11Y.map(item => `
    <div class="col-step">
      <div class="col-cat">#${item.tag}</div>
      <h3 class="col-title"><span class="slash">/ </span>${item.title[lang]}</h3>
      <p class="col-desc">${item.desc[lang]}</p>
    </div>
  `).join('');
}

function renderMarquee() {
  const line = MARQUEE[currentLang()].join('&nbsp;&nbsp;//&nbsp;&nbsp;') + '&nbsp;&nbsp;//&nbsp;&nbsp;';
  // dwie identyczne kopie → bezszwowa pętla przy translateX(-50%)
  document.getElementById('marqueeTrack').innerHTML = `<span>${line}</span><span>${line}</span>`;
}

/* ---- interaktywny booking flow: wyłącznie symulacja UI, bez requestów sieciowych ---- */

const bookingDemoState = { service: 'consultation', time: '10:00' };
let bookingDemoTimers = [];

function clearBookingDemoTimers() {
  bookingDemoTimers.forEach(clearTimeout);
  bookingDemoTimers = [];
}

function selectedBookingService() {
  return BOOKING_SERVICES.find(service => service.id === bookingDemoState.service) || BOOKING_SERVICES[0];
}

function formatDemoPrice(value) {
  return new Intl.NumberFormat(currentLang() === 'pl' ? 'pl-PL' : 'en-GB', {
    style: 'currency',
    currency: 'PLN',
    maximumFractionDigits: 0,
  }).format(value);
}

function renderFlowSteps(completedIndex = 0, activeIndex = -1) {
  const lang = currentLang();
  document.getElementById('flowList').innerHTML = BOOKING_STEPS.map((step, index) => {
    const state = index <= completedIndex ? 'complete' : (index === activeIndex ? 'active' : 'waiting');
    const status = state === 'complete' ? '✓' : (state === 'active' ? '···' : t('demo.waiting'));
    return `
      <li class="flow-step is-${state}">
        <span class="flow-index">0${index + 1}</span>
        <span class="flow-copy">
          <strong>${step.label[lang]}</strong>
          <code>${step.method} ${step.path}</code>
        </span>
        <span class="flow-state">${status}</span>
      </li>
    `;
  }).join('');
}

function setDemoRequest(method, path, status, meta, pending = false) {
  document.getElementById('demoMethod').textContent = method;
  document.getElementById('demoUrl').textContent = path;
  const badge = document.getElementById('demoStatusBadge');
  badge.textContent = status;
  badge.classList.toggle('pending', pending);
  document.getElementById('demoMeta').textContent = `· ${meta}`;
}

function resetBookingDemoOutput() {
  const query = `/api/slots?service=${bookingDemoState.service}&time=${bookingDemoState.time}`;
  setDemoRequest('GET', query, '200 OK', t('demo.slots'));
  renderFlowSteps(0);
  const summary = document.getElementById('paymentSummary');
  summary.hidden = true;
  summary.replaceChildren();
}

function renderDemo() {
  clearBookingDemoTimers();
  const lang = currentLang();
  const serviceOptions = document.getElementById('serviceOptions');
  const timeOptions = document.getElementById('timeOptions');
  const bookButton = document.getElementById('demoBookBtn');

  serviceOptions.innerHTML = BOOKING_SERVICES.map(service => `
    <button type="button" class="service-option${service.id === bookingDemoState.service ? ' is-selected' : ''}"
      data-service="${service.id}" aria-pressed="${service.id === bookingDemoState.service}">
      <span>${service.label[lang]}</span><small>${formatDemoPrice(service.price)}</small>
    </button>
  `).join('');

  timeOptions.innerHTML = BOOKING_TIMES.map(time => `
    <button type="button" class="time-option${time === bookingDemoState.time ? ' is-selected' : ''}"
      data-time="${time}" aria-pressed="${time === bookingDemoState.time}">${time}</button>
  `).join('');

  serviceOptions.querySelectorAll('[data-service]').forEach(button => {
    button.addEventListener('click', () => {
      bookingDemoState.service = button.dataset.service;
      renderDemo();
    });
  });
  timeOptions.querySelectorAll('[data-time]').forEach(button => {
    button.addEventListener('click', () => {
      bookingDemoState.time = button.dataset.time;
      renderDemo();
    });
  });

  bookButton.textContent = t('demo.book');
  bookButton.disabled = false;
  bookButton.addEventListener('click', runBookingDemo);
  resetBookingDemoOutput();
}

function finishBookingDemo() {
  const service = selectedBookingService();
  const platformFee = Math.round(service.price * 0.1);
  const partnerAmount = service.price - platformFee;
  renderFlowSteps(BOOKING_STEPS.length - 1);
  setDemoRequest('EVENT', 'payment_intent.succeeded', '200 PAID', t('demo.paid'));

  const summary = document.getElementById('paymentSummary');
  summary.innerHTML = `
    <div class="payment-summary-title">${t('demo.exampleSplit')}</div>
    <div><span>${t('demo.partner')}</span><strong>${formatDemoPrice(partnerAmount)}</strong></div>
    <div><span>${t('demo.platform')} · 10%</span><strong>${formatDemoPrice(platformFee)}</strong></div>
  `;
  summary.hidden = false;

  document.querySelectorAll('.booking-controls button').forEach(button => { button.disabled = false; });
  document.getElementById('demoBookBtn').textContent = t('demo.repeat');
}

function runBookingDemo() {
  clearBookingDemoTimers();
  document.querySelectorAll('.booking-controls button').forEach(button => { button.disabled = true; });
  document.getElementById('demoBookBtn').textContent = t('demo.processing');
  document.getElementById('paymentSummary').hidden = true;

  const stages = [
    { completed: 0, active: 1, method: 'POST', path: '/api/bookings', status: '···' },
    { completed: 1, active: 2, method: 'POST', path: '/api/payments', status: '201 CREATED' },
    { completed: 2, active: 3, method: 'EVENT', path: 'payment_intent.succeeded', status: '200 PAID' },
  ];

  const applyStage = stage => {
    renderFlowSteps(stage.completed, stage.active);
    setDemoRequest(stage.method, stage.path, stage.status, t('demo.processing'), true);
  };

  if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
    finishBookingDemo();
    return;
  }

  stages.forEach((stage, index) => {
    bookingDemoTimers.push(setTimeout(() => applyStage(stage), index * 480));
  });
  bookingDemoTimers.push(setTimeout(finishBookingDemo, stages.length * 480));
}

/* ---- i18n: [data-i18n] tekst, [data-i18n-html] markup ze słownika ---- */

function applyLang(lang) {
  html.setAttribute('data-lang', lang);
  html.setAttribute('lang', lang);
  writeStorage('site-lang', lang);
  document.querySelectorAll('.lang-opt').forEach(el => {
    el.classList.toggle('active', el.dataset.opt === lang);
  });
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });
  document.getElementById('langToggle').setAttribute('aria-label', t('lang.switch'));
  updateThemeControl();
  renderMarquee();
  applyProjectLanguage();
  renderA11y();
  renderStack();
  renderProcess();
  renderPricing();
  renderTestimonials();
  renderDemo();
  setupReveal();
}

/* ---- scroll reveal: element pojawia się przy wejściu w viewport;
        wołane też po re-renderze (zmiana języka) dla nowych elementów ---- */

const io = 'IntersectionObserver' in window
  ? new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 })
  : null;

function setupReveal() {
  document.querySelectorAll('.reveal:not(.in)').forEach(el => {
    if (io) io.observe(el);
    else el.classList.add('in');
  });
}

/* ---- motyw: jasny domyślnie, ręczny wybór zapamiętywany ---- */
const themeToggle = document.getElementById('themeToggle');
const themeToggleLabel = document.getElementById('themeToggleLabel');
const themeColorMeta = document.querySelector('meta[name="theme-color"]');

function currentTheme() {
  return html.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
}

function updateThemeControl() {
  const label = t(currentTheme() === 'dark' ? 'theme.toLight' : 'theme.toDark');
  themeToggle.setAttribute('aria-label', label);
  themeToggle.setAttribute('title', label);
  themeToggleLabel.textContent = label;
}

function setTheme(theme, persist = false) {
  const resolved = theme === 'dark' ? 'dark' : 'light';
  html.setAttribute('data-theme', resolved);
  themeColorMeta.setAttribute('content', resolved === 'light' ? '#faf9f6' : '#151815');
  if (persist) writeStorage('site-theme', resolved);
  updateThemeControl();
}

themeToggle.addEventListener('click', () => {
  setTheme(currentTheme() === 'dark' ? 'light' : 'dark', true);
});

document.getElementById('langToggle').addEventListener('click', () => {
  applyLang(currentLang() === 'pl' ? 'en' : 'pl');
});

/* ---- kompaktowa nawigacja mobilna ---- */
const navToggle = document.getElementById('navToggle');
const navLinksPanel = document.getElementById('navLinks');

function setNavOpen(open) {
  navToggle.setAttribute('aria-expanded', String(open));
  navLinksPanel.classList.toggle('is-open', open);
  document.body.classList.toggle('nav-open', open);
}

navToggle.addEventListener('click', () => {
  setNavOpen(navToggle.getAttribute('aria-expanded') !== 'true');
});

navLinksPanel.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => setNavOpen(false));
});

document.addEventListener('keydown', event => {
  // reagujemy tylko, gdy menu jest faktycznie otwarte — inaczej Escape
  // kradłby fokus na (ukrytym na desktopie) przycisku menu
  if (event.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
    setNavOpen(false);
    navToggle.focus();
  }
});

matchMedia('(min-width: 641px)').addEventListener('change', event => {
  if (event.matches) setNavOpen(false);
});

setTheme(currentTheme());
applyLang(readStorage('site-lang') || 'pl');

/* ---- pasek postępu czytania ---- */
const progressBar = document.getElementById('scrollProgress');
let progressTick = false;
function updateProgress() {
  const el = document.documentElement;
  const max = el.scrollHeight - el.clientHeight;
  progressBar.style.transform = `scaleX(${max > 0 ? el.scrollTop / max : 0})`;
  progressTick = false;
}
window.addEventListener('scroll', () => {
  if (!progressTick) { requestAnimationFrame(updateProgress); progressTick = true; }
}, { passive: true });
updateProgress();

/* ---- scroll-spy: podświetla w nawigacji sekcję, w której jest użytkownik ---- */
if ('IntersectionObserver' in window) {
  const navLinks = Array.from(document.querySelectorAll('.nav-links a'));
  const spyMap = {};
  navLinks.forEach(a => { spyMap[a.getAttribute('href').slice(1)] = a; });
  const spy = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const link = spyMap[e.target.id];
      if (!link) return; // sekcje bez pozycji w nav (np. a11y) zostawiają poprzedni stan
      navLinks.forEach(a => a.classList.remove('active'));
      link.classList.add('active');
    });
  }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });
  document.querySelectorAll('main section[id]').forEach(s => spy.observe(s));
}
