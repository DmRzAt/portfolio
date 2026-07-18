/* =====================================================================
   DANE — nowy projekt / krok procesu / grupa stacku dodaje się TUTAJ,
   nie w HTML. Teksty interfejsu: słownik I18N poniżej.
   ===================================================================== */

const PROJECTS = [
  {
    id: 'bazarek',
    name: 'Bazarek',
    img: 'assets/bazarek.webp',
    alt: {
      pl: 'Bazarek — strona główna platformy ogłoszeniowej',
      en: 'Bazarek — marketplace platform home page',
    },
    desc: {
      pl: 'Fullstack platforma ogłoszeniowa. Backend w całości mój — schemat bazy, REST API, autoryzacja. Obroniony na uczelni.',
      en: 'Fullstack marketplace platform. Backend entirely mine — database schema, REST API, authorization. Presented at a university defense.',
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
    desc: {
      pl: 'Panel partnera z płatnościami: Stripe Connect (onboarding Express, automatyczny podział prowizji), webhooki do śledzenia weryfikacji.',
      en: 'Partner panel with payments: Stripe Connect (Express onboarding, automatic commission split), webhooks for verification tracking.',
    },
    tags: ['Next.js', 'Node.js', 'Stripe Connect'],
    demo: 'https://quotly-flax.vercel.app',
    github: 'https://github.com/DmRzAt/quotly',
    status: 'live',
  },
  {
    id: 'przewozy24',
    name: 'Przewozy24',
    img: 'assets/przewozy24.webp',
    alt: {
      pl: 'Przewozy24 — ekran wyników wyszukiwania transportu bez barier',
      en: 'Przewozy24 — accessible transport search results screen',
    },
    desc: {
      pl: 'Makieta ekranu wyszukiwania dla klienta z branży transportu osób niepełnosprawnych. Pełna dostępność klawiaturowa i ARIA.',
      en: 'Search screen mockup for a client in accessible transport. Full keyboard accessibility and ARIA support.',
    },
    tags: ['Next.js', 'a11y', 'Client work'],
    demo: 'https://przewozy24-makieta.vercel.app',
    github: null,
    status: 'mockup',
  },
];

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

const VEHICLES = [
  { name: 'Mercedes Sprinter', price: '92,50 zł', tags: ['winda', 'klima'] },
  { name: 'Volkswagen Crafter', price: '84,00 zł', tags: ['klima'] },
  { name: 'Renault Master', price: '98,00 zł', tags: ['winda', 'med'] },
  { name: 'Ford Transit', price: '76,00 zł', tags: ['klima'] },
];

const FILTERS = [
  { tag: 'winda', label: { pl: 'Winda dla wózków', en: 'Wheelchair lift' } },
  { tag: 'klima', label: { pl: 'Klimatyzacja', en: 'Air conditioning' } },
  { tag: 'med', label: { pl: 'Wyposażenie medyczne', en: 'Medical equipment' } },
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
    'nav.projects': 'Projekty',
    'nav.process': 'Proces',
    'nav.stack': 'Stack',
    'nav.about': 'O mnie',
    'nav.contact': 'Kontakt',
    'hero.eyebrow': 'dostępny do współpracy',
    'hero.sub': 'Buduję aplikacje webowe od backendu po front — <code>Next.js</code>, <code>Node.js</code>, <code>PostgreSQL</code>, integracje płatności. Student informatyki, pracuję z klientami na zlecenie.',
    'hero.cta1': 'Zobacz projekty',
    'hero.cta2': 'Napisz do mnie',
    'demo.title': 'vehicles.api.ts — na żywo',
    'demo.filterLabel': 'Standard pojazdu',
    'projects.eyebrow': 'wybrane realizacje',
    'projects.title': 'Projekty',
    'a11y.eyebrow': 'standard, nie dodatek',
    'a11y.title': 'Dostępność',
    'a11y.head': 'Interfejsy, z których korzysta każdy',
    'a11y.text': 'Buduję zgodnie z WCAG AA: pełna nawigacja klawiaturą, ARIA, kontrasty, poszanowanie prefers-reduced-motion. Ta strona też tak działa — sprawdź Tabem.',
    'process.eyebrow': 'jak pracuję',
    'process.title': 'Proces',
    'stack.eyebrow': 'narzędzia',
    'about.eyebrow': 'kim jestem',
    'about.title': 'O mnie',
    'about.text': 'Student informatyki (3 rok) na uczelni w okolicach Tarnowa. Buduję aplikacje webowe od backendu po front — <strong>autoryzację, REST API, integracje płatności</strong>. Do każdego projektu podchodzę analitycznie: zanim zacznę kodować, zadaję pytania, które realnie wpływają na architekturę i wycenę — nie zgaduję.',
    'about.loc.label': 'Lokalizacja',
    'about.av.label': 'Dostępność',
    'about.av.value': 'Zdalnie, cała Polska',
    'about.lang.label': 'Języki',
    'about.lang.value': 'Polski, ukraiński, angielski',
    'contact.eyebrow': 'współpraca',
    'contact.title': 'Kontakt',
    'contact.lead': 'Masz projekt albo pytanie o wycenę? Odpisuję zwykle tego samego dnia.',
    'contact.useme.k': 'preferowana ścieżka współpracy',
    'contact.useme.v': 'Zatrudnij mnie przez useme →',
    'contact.useme.sub': 'Bezpieczna płatność z fakturą — środki są zabezpieczone do czasu odbioru pracy. Zero ryzyka dla obu stron.',
    'status.checking': 'sprawdzanie…',
    'status.up': 'dostępne',
    'status.slow': 'wolne',
    'status.down': 'niedostępne',
    'links.demo': '→ Demo',
    'links.github': '→ GitHub',
  },
  en: {
    'ui.skip': 'Skip to content',
    'nav.projects': 'Projects',
    'nav.process': 'Process',
    'nav.stack': 'Stack',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'hero.eyebrow': 'available for work',
    'hero.sub': 'I build web applications end to end — <code>Next.js</code>, <code>Node.js</code>, <code>PostgreSQL</code>, payment integrations. CS student, working with clients on a freelance basis.',
    'hero.cta1': 'See projects',
    'hero.cta2': 'Get in touch',
    'demo.title': 'vehicles.api.ts — live',
    'demo.filterLabel': 'Vehicle standard',
    'projects.eyebrow': 'selected work',
    'projects.title': 'Projects',
    'a11y.eyebrow': 'a standard, not an add-on',
    'a11y.title': 'Accessibility',
    'a11y.head': 'Interfaces everyone can use',
    'a11y.text': 'I build to WCAG AA: full keyboard navigation, ARIA, contrast, prefers-reduced-motion respected. This site works that way too — try Tab.',
    'process.eyebrow': 'how I work',
    'process.title': 'Process',
    'stack.eyebrow': 'tools',
    'about.eyebrow': 'who I am',
    'about.title': 'About',
    'about.text': 'Computer Science student (3rd year), based near Tarnów, Poland. I build web applications end to end — <strong>authorization, REST APIs, payment integrations</strong>. I approach every project analytically: before writing code, I ask the questions that actually shape architecture and pricing — I don\'t guess.',
    'about.loc.label': 'Location',
    'about.av.label': 'Availability',
    'about.av.value': 'Remote, worldwide',
    'about.lang.label': 'Languages',
    'about.lang.value': 'Polish, Ukrainian, English',
    'contact.eyebrow': "let's talk",
    'contact.title': 'Contact',
    'contact.lead': 'Got a project or a pricing question? I usually reply the same day.',
    'contact.useme.k': 'preferred way to work together',
    'contact.useme.v': 'Hire me via useme →',
    'contact.useme.sub': 'Secure, invoiced payment — funds are held in escrow until the work is accepted. Zero risk for both sides.',
    'status.checking': 'checking…',
    'status.up': 'online',
    'status.slow': 'slow',
    'status.down': 'offline',
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

function renderProjects() {
  const lang = currentLang();
  document.getElementById('projectsGrid').innerHTML = PROJECTS.map((p, i) => `
    <article class="case reveal">
      <a class="case-shot" href="${p.demo}" target="_blank" rel="noopener" tabindex="-1" aria-hidden="true">
        <img src="${p.img}" alt="${p.alt[lang]}" width="1280" height="800" loading="lazy" decoding="async">
      </a>
      <div class="case-info">
        <div class="case-num">0${i + 1}</div>
        <h3 class="project-name">${p.name}</h3>
        <p class="project-desc">${p.desc[lang]}</p>
        <div class="project-tags">${p.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
        <div class="project-footer">
          <div class="project-links">
            ${p.demo ? `<a class="u-link" href="${p.demo}" target="_blank" rel="noopener">${t('links.demo')}</a>` : ''}
            ${p.github ? `<a class="u-link" href="${p.github}" target="_blank" rel="noopener">${t('links.github')}</a>` : ''}
          </div>
          ${!p.demo ? '' : (p.liveCheck === false
            ? `<div class="project-status slow" title="Render free tier">
            <span class="sdot" aria-hidden="true"></span><span class="status-text">${p.note[lang]}</span>
          </div>`
            : `<div class="project-status checking" data-check="${p.demo}">
            <span class="sdot" aria-hidden="true"></span><span class="status-text">${t('status.checking')}</span>
          </div>`)}
        </div>
      </div>
    </article>
  `).join('');
}

function renderStack() {
  const lang = currentLang();
  document.getElementById('stackGrid').innerHTML = STACK.map((group, i) => `
    <div class="stagger" style="--sd:${i * 45}ms">
      <div class="stack-group-label">${group.label[lang]}</div>
      <div class="stack-items">
        ${group.items.map(item => `<div class="stack-item">${item}</div>`).join('')}
      </div>
    </div>
  `).join('');
}

function renderProcess() {
  const lang = currentLang();
  document.getElementById('processGrid').innerHTML = PROCESS.map((step, i) => `
    <div class="process-step stagger" style="--sd:${i * 45}ms">
      <div class="process-num">0${i + 1}</div>
      <h3>${step.title[lang]}</h3>
      <p>${step.desc[lang]}</p>
    </div>
  `).join('');
}

function renderA11y() {
  const lang = currentLang();
  document.getElementById('a11yGrid').innerHTML = A11Y.map((item, i) => `
    <div class="process-step stagger" style="--sd:${i * 45}ms">
      <div class="a11y-tag">${item.tag}</div>
      <h3>${item.title[lang]}</h3>
      <p>${item.desc[lang]}</p>
    </div>
  `).join('');
}

function renderMarquee() {
  const items = MARQUEE[currentLang()];
  const part = items.map(s => `<span>${s}</span><b>·</b>`).join('');
  // dwie identyczne kopie → bezszwowa pętla przy translateX(-50%)
  document.getElementById('marqueeTrack').innerHTML =
    `<div class="marquee-part">${part}</div><div class="marquee-part">${part}</div>`;
}

/* ---- live demo: checkboxy + karty budowane raz, filtr przełącza klasy ---- */

function renderDemo() {
  const lang = currentLang();
  const group = document.getElementById('filterGroup');
  const checked = Array.from(document.querySelectorAll('.demo-filter:checked')).map(el => el.dataset.tag);
  group.querySelectorAll('.checkbox-row').forEach(el => el.remove());
  FILTERS.forEach(f => {
    const label = document.createElement('label');
    label.className = 'checkbox-row';
    label.innerHTML = `<input type="checkbox" class="demo-filter" data-tag="${f.tag}"><span>${f.label[lang]}</span>`;
    const input = label.querySelector('input');
    input.checked = checked.includes(f.tag);
    input.addEventListener('change', onFilterChange);
    group.appendChild(label);
  });

  document.getElementById('resultsList').innerHTML = VEHICLES.map((v, i) => `
    <div class="result" data-idx="${i}">
      <div class="result-inner">
        <div class="result-card">
          <div>
            <div class="rname">${v.name}</div>
            <div class="rtags">${v.tags.join(' · ')}</div>
          </div>
          <div class="rprice">${v.price}</div>
        </div>
      </div>
    </div>
  `).join('');
  applyFilter();
}

function currentQuery() {
  const active = Array.from(document.querySelectorAll('.demo-filter:checked')).map(el => el.dataset.tag);
  return { active, url: active.length ? `/vehicles?features=${active.join(',')}` : '/vehicles' };
}

function applyFilter() {
  const { active, url } = currentQuery();
  let count = 0;
  document.querySelectorAll('#resultsList .result').forEach(el => {
    const v = VEHICLES[el.dataset.idx];
    const show = active.every(tag => v.tags.includes(tag));
    el.classList.toggle('hidden', !show);
    if (show) count++;
  });
  const lang = currentLang();
  const label = lang === 'pl'
    ? (count === 1 ? 'pojazd' : (count >= 2 && count <= 4 ? 'pojazdy' : 'pojazdów'))
    : (count === 1 ? 'vehicle' : 'vehicles');

  // "odpowiedź API": request URL + status z (pozorowanym, ale stabilnym) czasem
  const ms = 6 + active.length * 3 + count;
  document.getElementById('demoUrl').textContent = url;
  document.getElementById('demoMeta').textContent = `· ${count} ${label} · ${ms} ms`;
}

let pendingTimer;
/* zaznaczenie filtra = wysłanie requestu: URL od razu, badge "···",
   po chwili "200 OK" i wyniki — cykl żądanie→odpowiedź */
function onFilterChange() {
  document.getElementById('demoUrl').textContent = currentQuery().url;
  const badge = document.querySelector('.demo-status .ok');
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) { applyFilter(); return; }
  badge.textContent = '···';
  badge.classList.add('pending');
  clearTimeout(pendingTimer);
  pendingTimer = setTimeout(() => {
    badge.classList.remove('pending');
    badge.textContent = '200 OK';
    applyFilter();
  }, 240);
}

/* ---- i18n: [data-i18n] tekst, [data-i18n-html] markup ze słownika ---- */

function applyLang(lang) {
  html.setAttribute('data-lang', lang);
  html.setAttribute('lang', lang);
  localStorage.setItem('site-lang', lang);
  document.querySelectorAll('.lang-opt').forEach(el => {
    el.classList.toggle('active', el.dataset.opt === lang);
  });
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });
  renderMarquee();
  renderProjects();
  renderA11y();
  renderStack();
  renderProcess();
  renderDemo();
  setupReveal();
  checkAllStatuses();
}

/* ---- live status-check demo: fetch w tle, 3 stany kropki ----
   dostępne (szybko) / wolne (>3s lub timeout) / niedostępne (błąd).
   Nie blokuje renderu — kropka startuje jako "sprawdzanie…" i sama się
   aktualizuje. Wynik cache'owany per URL, więc zmiana języka nie re-fetchuje. */

const statusCache = {};

function applyStatus(el, state) {
  el.classList.remove('checking', 'up', 'slow', 'down');
  el.classList.add(state);
  el.querySelector('.status-text').textContent = t('status.' + state);
}

function checkStatus(el, url) {
  applyStatus(el, 'checking');
  const started = performance.now();
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 4000);
  fetch(url, { method: 'GET', mode: 'no-cors', cache: 'no-store', signal: ctrl.signal })
    .then(() => {
      clearTimeout(timer);
      const state = (performance.now() - started) < 3000 ? 'up' : 'slow';
      statusCache[url] = state;
      applyStatus(el, state);
    })
    .catch(() => {
      clearTimeout(timer);
      const state = ctrl.signal.aborted ? 'slow' : 'down'; // timeout = wolne, błąd = niedostępne
      statusCache[url] = state;
      applyStatus(el, state);
    });
}

function checkAllStatuses() {
  document.querySelectorAll('.project-status[data-check]').forEach(el => {
    const url = el.dataset.check;
    if (statusCache[url]) applyStatus(el, statusCache[url]);
    else checkStatus(el, url);
  });
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

document.getElementById('langToggle').addEventListener('click', () => {
  applyLang(currentLang() === 'pl' ? 'en' : 'pl');
});

applyLang(localStorage.getItem('site-lang') || 'pl');

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
