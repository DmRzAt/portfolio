# Перевірка портфоліо, 22.10.2026

Зміни перевірені локально в гілці `codex/useme-portfolio`. Цей звіт складено до створення коміту й push. Деплой під час перевірки не виконувався. Початкова staged-зміна `.gitignore` збережена.

## Джерела фактів

Бізнес-факти, роль у клієнтських проєктах, ціни та метрики взяті з брифу власника, переданого в цьому чаті 22.10.2026. Умову Etap 0 власник окремо підтвердив: від 300 zł; суму віднімають від реалізації, якщо договір на правки або впровадження підписано протягом 30 днів від приймання огляду.

Клієнтські репозиторії й договори не були надані для незалежного аудиту. Зокрема, 5 договорів, близько 7 000 замовлень, 11 сторінок, 96 комітів, близько 4 400 бронювань, 154 автоматичні й 10 інтеграційних тестів є даними власника. Кількість договорів не подана як загальна кількість договорів профілю Useme. В OMS явно вказано тільки власний frontend; backend API приписано команді backend.

Факти Slotify, Quotly і Bazarek збережені з початкових `app.js` та `index.html` у commit `42edabb`. Для Slotify використано перевірюваний опис механізму UNIQUE + транзакція й три ролі, без нової емпіричної обіцянки «0 подвійних бронювань». Заголовки Kramo і Velmora використовують кількість описаних магазинів/категорій, а не вигадані показники продажів.

## Файл → зміни

| Файл | Зміна |
|---|---|
| `index.html` | Useme як головна CTA; 7 кейсів; порядок Kramo → панель → Velmora → Slotify → Quotly → Bazarek → BigQuery. Факти, видимі результати, native details, посилання Katowice. Etap 0, приймання роботи, FAQ, наступні кроки; статичний PL. |
| `app.js` | Синхронні тексти PL/EN, новий кейс і CMS stack, ціна 3 000 zł, ставка 60 zł/h, демонстраційні послуги, фокус після вибору послуги/часу. Мова визначається URL; готовий статичний контент не перебудовується при старті. |
| `styles.css` | Шапка в один рядок на мобільному, великі кнопки, картки й details, кадрування Kramo, темний блок цін, контраст малих написів. |
| `scripts/build-pages.mjs` | Відтворювана генерація статичного PL/EN, переклади, schema, canonical, hreflang, кореневі шляхи ресурсів; `--check` виявляє застарілі файли. |
| `en/index.html` | Повна англійська сторінка, включно з метаданими та кейсами до запуску JS. |
| `assets/fonts/` | Lato 400/700/900 та JetBrains Mono 400/500/700, latin/latin-ext, WOFF2 з Google Fonts; OFL ліцензії обох родин. Однакові файли JetBrains використовуються для кількох ваг. |
| `og-image.html`, `og-image.png` | Актуальні WordPress/WooCommerce/B2B/API, локальний Lato; PNG 1200×630. |
| `robots.txt` | Явні `Allow: /` для GPTBot, OAI-SearchBot, ClaudeBot і PerplexityBot. Поточну відкриту політику збережено. |
| `sitemap.xml` | `/` і `/en/`, взаємні мовні посилання та дата зміни. |
| `vercel.json` | CSP для власних шрифтів; вилучено непотрібні дозволи Google Fonts. |
| `tests/` | Мовні URL, актуальність генерації, статичні переклади/schema, ресурси й фрагменти, структура карток, розміри PNG; обидва режими симулятора бронювання. |
| `README.md` | Запуск HTTP-сервера, генерація мовних сторінок і перевірки. |
| `docs/superpowers/plans/2026-10-22-useme-portfolio.md` | План і обмеження задачі. |

## Перевірено

- `node --check app.js`, `node --check scripts/build-pages.mjs`.
- `node scripts/build-pages.mjs --check`: обидва статичні HTML актуальні.
- `node --test tests/*.test.mjs`: 11 перевірок пройшли. Тести бронювання перевіряють негайне завершення при reduced motion, блокування кнопок під час звичайного сценарію та суму розподілу 108 + 12 = 120 zł для демонстраційної послуги.
- `git diff --check`: без помилок whitespace.
- Python HTMLParser: без повторних атрибутів та ID; XML sitemap розбирається; заборонені імена клієнтів відсутні в опублікованому HTML. Первинні коментарі коду збережені.
- Окремий read-only рецензент перевірив diff і повторив перші 9 тестів та `--check`; підтверджених проблем не знайшов. Два тести бронювання додані після цієї рецензії.
- Локальний HTTP-сервер: `python -m http.server 4173 --bind 127.0.0.1`.
- Браузер Codex IAB: фактичні CSS viewport 375×812 і 1440×900, обидві мови та обидві теми (8 комбінацій). У кожній `scrollWidth = clientWidth`, немає горизонтального скролу, 7 закритих кейсів, Opinie приховані, немає виявлених зламаних зображень або повідомлень console error/warn.
- Контраст: розрахунок WCAG relative luminance за computed color/background, з alpha-compositing фонових шарів. У закритому стані перевірено 200 текстових елементів на мобільному і 204 на desktop; у розгорнутому PL — 337 у кожній темі. Виявлені значення нижче 4.5:1 виправлено; повторна перевірка без порушень для перевірених елементів. Це не повний аудит WCAG.
- Клавіатура: skip-link першим у Tab, видимий outline; Enter відкриває details/FAQ; Escape закриває меню і повертає фокус на кнопку. Вибір послуги/часу зберігає фокус. Бронювання завершилося з прикладом 216 + 24 = 240 zł.
- У браузері активне `prefers-reduced-motion: reduce`: CSS обмежує анімацію, симуляція завершується без затримок. Звичайний таймерний сценарій окремо перевірено Node-тестом.
- Посилання `/en/` відкриває статичну англійську сторінку; повернення на `/` показує польську попри збережений попередній вибір мови. Тести читають HTML без виконання JS.

## Розміри й локальна швидкість

Порівняння з початковими файлами `42edabb` за однакової ширини 375 CSS-px:

| Вимірювання | До | Після |
|---|---:|---:|
| Висота шапки | 108 px | 65 px |
| Висота PL сторінки | 12 193 px | 11 343 px |
| Висота секції проєктів | 6 308.58 px | 5 010.14 px |

Скорочення сторінки: `(12193 − 11343) / 12193 × 100 ≈ 7.0%`, попри доданий кейс і нові блоки. Секція проєктів скоротилась приблизно на 20.6%. Нижній край головної Useme CTA — близько 506 px, тобто в межах першого екрана висотою 812 px.

Джерело вимірювань — браузерні `scrollHeight` та `getBoundingClientRect()`. Повторні локальні завантаження при 1440×900, прогрітий cache, reduced motion, без мережевого/CPU throttling, з однаковим локальним PerformanceObserver:

| Метрика | Початкова версія | Оновлена версія |
|---|---:|---:|
| DOMContentLoaded | 109.9 ms | 75.2 ms |
| load | 113.5 ms | 76.1 ms |
| FCP | 124 ms | 92 ms |
| LCP на момент виміру | 136 ms | 96 ms |
| CLS на момент виміру | 0 | 0 |

Це окремі локальні виміри, не production benchmark і не гарантія прискорення на пристроях клієнтів. Початкові 3.4 s із брифу в цих умовах не відтворилися. Підтверджена зміна мережі: раніше завантажувалися CSS/шрифти Google; зараз запитів до зовнішніх доменів для шрифтів немає. Локальні WOFF2 сумарно займають 128 984 байти; JS не перебудовує готові статичні секції при старті.

Сирі журнали й screenshots цієї сесії збережені локально в ігнорованому `.gstack/qa/`, перевірки demo — `.gstack/demo-links.json`. Вони не включені в публічні матеріали сайту.

## Зовнішні demo

HTTP GET через Python urllib 22.10.2026; це перевірка стартової відповіді, а не повного checkout кожного застосунку.

| URL | HTTP | Час цієї перевірки |
|---|---:|---:|
| [Kramo](https://p01--kramo-wp--bpk4d66g4n48.code.run/) | 200 | 4.12 s |
| [Kramo Katowice](https://p01--kramo-wp--bpk4d66g4n48.code.run/mycie-kostki-brukowej-katowice/) | 200 | 3.31 s |
| [Velmora](https://velmorahome.infinityfree.io/?i=1) | 200 | 5.14 s |
| [Slotify](https://slotify-rho.vercel.app) | 200 | 4.14 s |
| [Quotly](https://quotly-flax.vercel.app) | 200 | 2.47 s |
| [Bazarek](https://bazarek-taw.onrender.com) | 200 | 33.09 s |

Час виміряно `time.monotonic()` від початку запиту до прочитання початку HTML, це не повний browser load. Числову обіцянку cold start у Bazarek прибрано. Velmora спершу повернула JavaScript challenge хостингу; у звичайному браузері успішно відкрилася сторінка магазину з меблями та чотирма категоріями, заголовок «Meble i dekoracje do spokojnych wnętrz | Velmora Home», URL після перевірки `?i=2`.

## Зовнішні правила і рекомендації

- FAQ про оплату спирається на [Useme FAQ](https://help.useme.com/faq-1) та [пояснення фактур](https://help.useme.com/jak-wygladaja-faktury-wystawiane-w-useme). Передання прав описано як умову договору, з урахуванням [прав і ліцензій у Useme](https://help.useme.com/na-czym-polega-przekazanie-praw-autorskich-i-udzielenie-licencji). Обіцянку «Zero ryzyka» прибрано.
- Окремі мовні URL і hreflang відповідають [рекомендаціям Google для багатомовних сайтів](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites) та [опису мовних альтернатив](https://developers.google.com/search/docs/specialty/international/localized-versions).
- Явні правила AI-crawlers зберігають попереднє `Allow: /`. Це включає training-боти GPTBot і ClaudeBot, не лише пошукових ботів. Призначення описані в [OpenAI bots](https://developers.openai.com/api/docs/bots), [Anthropic crawler policy](https://privacy.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler) і [Perplexity crawler documentation](https://docs.perplexity.ai/docs/resources/perplexity-crawlers). Дозвіл не гарантує показу в AI-відповідях.
- Bing Webmaster Tools має сенс як наступний крок: додати домен, підтвердити володіння та подати sitemap, перевіряти URL inspection. Це рекомендація для спостереження за індексацією, не обіцянка трафіку. [Офіційна документація sitemap](https://www.bing.com/webmasters/help/sitemaps-3b5cf6ed), [підтримка індексації](https://www.bing.com/webmasters/help/webmaster-support-24ab5ebf). Налаштування акаунта/домену не виконувалось.
- Звичайні дефіси в текстах PL використані як редакційний вибір за брифом. Твердження, що довгі тире доводять генерацію ШІ, не підтверджую.
- Джерела локальних шрифтів: [Google Fonts CSS](https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Lato:wght@400;700;900&display=swap), [Lato OFL](https://github.com/google/fonts/blob/main/ofl/lato/OFL.txt), [JetBrains Mono OFL](https://github.com/google/fonts/blob/main/ofl/jetbrainsmono/OFL.txt).

## Не перевірено

Production після деплою, реальні Core Web Vitals на мобільній мережі, повні зовнішні checkout/API сценарії, NVDA та інші screen reader вручну, усі браузери/пристрої, фактичний приріст конверсії та індексація Google/Bing/AI. Повний Lighthouse/axe аудит не запускався. Production CSP переглянуто як конфігурацію, але звичайний Python-сервер не віддає Vercel headers. Нові схеми перевірені як JSON і на відповідність очікуваним типам, не як гарантія eligibility Google rich results.

Збережено старі коментарі відповідно до AGENTS.md. Деякі тепер описують попередню організацію: зокрема, коментар про однакову вагу кейсів та переклад кейсів JS не відбиває новий порядок і попередньо згенеровану EN-сторінку; актуальна документація — README і цей звіт.
