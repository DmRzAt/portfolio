import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const app = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
const context = vm.createContext({});
vm.runInContext(app.slice(0, app.indexOf('const html =')) + '\nthis.data = { PROJECTS, CASE_STUDIES, PROJECT_EVIDENCE, STACK, PROCESS, PRICING, A11Y, I18N };', context);
const { PROJECTS, CASE_STUDIES, PROJECT_EVIDENCE, STACK, PROCESS, PRICING, A11Y, I18N } = context.data;
const escape = value => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const template = fs.readFileSync(path.join(root, 'index.html'), 'utf8');

function replaceRegion(source, id, value) {
  const marker = new RegExp(`<div\\b[^>]*\\bid="${id}"[^>]*>`).exec(source);
  if (!marker) throw new Error(`Missing region: ${id}`);
  const start = marker.index + marker[0].length;
  const tags = /<div\b[^>]*>|<\/div>/g;
  tags.lastIndex = start;
  let depth = 1;
  let tag;
  while ((tag = tags.exec(source))) {
    depth += tag[0].startsWith('</') ? -1 : 1;
    if (depth === 0) return source.slice(0, start) + '\n' + value + '\n      ' + source.slice(tag.index);
  }
  throw new Error(`Unclosed region: ${id}`);
}

function translate(source, language) {
  const strings = I18N[language];
  const result = source.replace(/<([a-z][\w-]*)\b([^>]*\bdata-i18n(?:-html)?="([^"]+)"[^>]*)>[\s\S]*?<\/\1>/g, (_, tag, attrs, key) => {
    if (!(key in strings)) throw new Error(`Missing ${language} translation: ${key}`);
    return `<${tag}${attrs}>${attrs.includes('data-i18n-html=') ? strings[key] : escape(strings[key])}</${tag}>`;
  });
  return result.replace(/<[^>]+\bdata-i18n-(content|aria-label)="([^"]+)"[^>]*>/g, (tag, attribute, key) => {
    if (!(key in strings)) throw new Error(`Missing ${language} attribute: ${key}`);
    return tag.replace(new RegExp(`(?<![\\w-])${attribute}="[^"]*"`), `${attribute}="${escape(strings[key])}"`);
  });
}

function schema(language) {
  const url = `https://dmytro-dev.pl/${language === 'en' ? 'en/' : ''}`;
  const person = 'https://dmytro-dev.pl/#person';
  const service = 'https://dmytro-dev.pl/#service';
  return {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Person', '@id': person, name: 'Dmytro Zatserkivnyi', jobTitle: 'Full-stack developer', url: 'https://dmytro-dev.pl/', email: 'mailto:dmytro.dev.zats@gmail.com', knowsLanguage: ['pl', 'en', 'uk'], sameAs: ['https://github.com/DmRzAt', 'https://useme.com/pl/roles/contractor/dmytro-zatserkivnyi,629682/'], knowsAbout: ['WordPress', 'WooCommerce', 'Elementor', 'ASP.NET Core Razor Pages', 'Python', 'Next.js', 'Stripe Connect'] },
      { '@type': 'ProfessionalService', '@id': service, name: 'Dmytro Zatserkivnyi', url, description: I18N[language]['seo.description'], image: 'https://dmytro-dev.pl/og-image.png', email: 'dmytro.dev.zats@gmail.com', address: { '@type': 'PostalAddress', addressLocality: 'Tarnów', addressCountry: 'PL' }, founder: { '@id': person }, priceRange: '60 PLN/h', contactPoint: { '@type': 'ContactPoint', email: 'dmytro.dev.zats@gmail.com', availableLanguage: ['pl', 'en', 'uk'] } },
      { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: I18N[language]['seo.title'], description: I18N[language]['seo.description'], inLanguage: language, about: { '@id': person }, mainEntity: { '@id': service } },
    ],
  };
}

function build(language) {
  const strings = I18N[language];
  let source = template.replace(/<html[^>]*>/, `<html lang="${language}" data-lang="${language}">`);
  source = source.replace(/<button class="lang-toggle"([\s\S]*?)<\/button>/, '<a class="lang-toggle"$1</a>');
  source = source.replace(/(<a class="lang-toggle"[^>]*)(?:>)/, (_, open) => open.replace(' type="button"', '').replace(/ href="[^"]*"/, '').replace(/ aria-label="[^"]*"/, '').replace(/ hreflang="[^"]*"/, '') + ` href="${language === 'pl' ? '/en/' : '/'}" aria-label="${escape(strings['lang.switch'])}" hreflang="${language === 'pl' ? 'en' : 'pl'}">`);
  source = source.replace(/(<a class="lang-toggle"[^>]*>)[\s\S]*?<\/a>/, `$1<span class="lang-opt${language === 'pl' ? ' active' : ''}" data-opt="pl">PL</span>/<span class="lang-opt${language === 'en' ? ' active' : ''}" data-opt="en">EN</span></a>`);
  source = translate(source, language);
  source = source.replace(/<article\b[^>]*data-project-id="([^"]+)"[\s\S]*?<\/article>/g, (card, id) => {
    const project = PROJECTS.find(item => item.id === id);
    const evidence = PROJECT_EVIDENCE[id][language];
    const values = { 'data-project-name': typeof project.name === 'string' ? project.name : project.name[language], 'data-project-summary': project.summary[language], 'data-project-stack': project.tags.join(' · '), 'data-project-headline': evidence.headline, 'data-project-status': project.status === 'client' ? strings['status.client'] : project.note?.[language] || strings['status.demo'] };
    for (const [attribute, value] of Object.entries(values)) card = card.replace(new RegExp(`(<([a-z][\\w-]*)\\b[^>]*\\b${attribute}(?:="[^"]*")?[^>]*>)[\\s\\S]*?(</\\2>)`), (_, open, tag, close) => open + escape(value) + close);
    let fact = 0;
    card = card.replace(/(<li data-project-fact>)[\s\S]*?(<\/li>)/g, (_, open, close) => open + escape(evidence.facts[fact++]) + close);
    card = card.replace(/(<dd data-case-value="([^"]+)">)[\s\S]*?(<\/dd>)/g, (_, open, key, close) => open + escape(CASE_STUDIES[id][language][key]) + close);
    card = card.replace(/<h3 class="case-name"([^>]*)>([\s\S]*?)<\/h3>/g, '<p class="case-name"$1>$2</p>');
    if (project.alt) card = card.replace(/(<img\b[^>]*\balt=")[^"]*/, `$1${escape(project.alt[language])}`);
    card = card.replace(/(<a class="project-media"[^>]*aria-label=")[^"]*/, `$1${escape(`${language === 'pl' ? 'Otwórz demo' : 'Open demo'} ${typeof project.name === 'string' ? project.name : project.name[language]}`)}`);
    return card;
  });
  source = replaceRegion(source, 'stackGrid', STACK.map(group => `<div class="col-stack"><div class="col-cat">${escape(group.label[language])}</div><div class="col-items">${escape(group.items.join(' · '))}</div></div>`).join('\n'));
  source = replaceRegion(source, 'processGrid', PROCESS.map((step, i) => `<div class="col-step"><div class="col-num">0${i + 1}</div><h3 class="col-title"><span class="slash">/ </span>${escape(step.title[language])}</h3><p class="col-desc">${escape(step.desc[language])}</p></div>`).join('\n'));
  const oldPricingComments = [...source.slice(source.indexOf('id="pricingGrid"'), source.indexOf('id="stack"')).matchAll(/<!--[\s\S]*?-->/g)].map(match => match[0]).filter(comment => !comment.includes('STACK'));
  source = replaceRegion(source, 'pricingGrid', oldPricingComments.join('\n') + PRICING.items.map(item => `<div class="price-card"><div class="price-name">${escape(item.name[language])}</div><div class="price-value">${escape(item.price[language])}</div><p class="price-desc">${escape(item.desc[language])}</p></div>`).join('\n') + `<p class="pricing-note">${escape(PRICING.note[language])}<br>${escape(strings['pricing.rate'])}</p>`);
  source = replaceRegion(source, 'a11yGrid', A11Y.map(item => `<div class="col-step"><div class="col-cat">#${item.tag}</div><h3 class="col-title"><span class="slash">/ </span>${escape(item.title[language])}</h3><p class="col-desc">${escape(item.desc[language])}</p></div>`).join('\n'));
  source = source.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, `<script type="application/ld+json">\n${JSON.stringify(schema(language), null, 2)}\n</script>`);
  source = source.replace(/(<link rel="canonical" href=")[^"]+/, `$1https://dmytro-dev.pl/${language === 'en' ? 'en/' : ''}`);
  source = source.replace(/<link rel="alternate"[^>]*>\n?/g, '');
  source = source.replace('<link rel="sitemap"', '<link rel="alternate" hreflang="pl" href="https://dmytro-dev.pl/">\n<link rel="alternate" hreflang="en" href="https://dmytro-dev.pl/en/">\n<link rel="alternate" hreflang="x-default" href="https://dmytro-dev.pl/">\n<link rel="sitemap"');
  source = source.replace(/(<meta property="og:url" content=")[^"]+/, `$1https://dmytro-dev.pl/${language === 'en' ? 'en/' : ''}`);
  source = source.replace(/(<meta property="og:locale" content=")[^"]+/, `$1${language === 'pl' ? 'pl_PL' : 'en_GB'}`);
  source = source.replace(/(<meta property="og:locale:alternate" content=")[^"]+/, `$1${language === 'pl' ? 'en_GB' : 'pl_PL'}`);
  source = source.replace(/(?:src|href|srcset)="(?!https?:|mailto:|\/|#|data:)([^"]+)"/g, attr => attr.replace('="', '="/'));
  return source.replace(/[ \t]+$/gm, '');
}

const outputs = new Map([['index.html', build('pl')], ['en/index.html', build('en')]]);
if (process.argv.includes('--check')) {
  for (const [file, content] of outputs) if (!fs.existsSync(path.join(root, file)) || fs.readFileSync(path.join(root, file), 'utf8') !== content) throw new Error(`Generated content is stale: ${file}. Run node scripts/build-pages.mjs`);
  console.log('PL/EN static pages are up to date.');
} else {
  fs.mkdirSync(path.join(root, 'en'), { recursive: true });
  for (const [file, content] of outputs) fs.writeFileSync(path.join(root, file), content);
  console.log('Updated index.html and en/index.html.');
}
