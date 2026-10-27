import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const app = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
const context = vm.createContext({});
vm.runInContext(app.slice(0, app.indexOf('const html =')) + '\nthis.strings = I18N;', context);

test('generated pages remain reproducible', () => {
  execFileSync(process.execPath, ['scripts/build-pages.mjs', '--check'], { cwd: root, stdio: 'pipe' });
});

for (const [lang, file] of [['pl', 'index.html'], ['en', 'en/index.html']]) {
  const html = fs.readFileSync(path.join(root, file), 'utf8');
  test(`${lang}: translations, language links and schema are available before JavaScript`, () => {
    assert.ok(html.includes(`<html lang="${lang}"`));
    for (const key of ['seo.title', 'seo.description', 'hero.cta2', 'stage.credit', 'faq.paymentA', 'about.text']) assert.ok(html.includes(context.strings[lang][key]), `Missing static translation: ${key}`);
    const toggle = html.match(/<a class="lang-toggle"[^>]*>/)?.[0];
    assert.ok(toggle);
    assert.ok(toggle.includes(`href="${lang === 'pl' ? '/en/' : '/'}"`));
    const graph = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
    assert.ok(graph.some(node => node['@type'] === 'Person'));
    assert.ok(graph.some(node => node['@type'] === 'ProfessionalService'));
    assert.equal(graph.find(node => node['@type'] === 'WebPage').inLanguage, lang);
    for (const key of [...html.matchAll(/data-i18n(?:-html|-content|-aria-label)?="([^"]+)"/g)].map(match => match[1])) assert.ok(key in context.strings[lang], `Invalid translation marker: ${key}`);
  });
  test(`${lang}: card evidence is public while native details remain collapsed`, () => {
    const cards = [...html.matchAll(/<article\b[^>]*data-project-id="([^"]+)"[\s\S]*?<\/article>/g)];
    assert.equal(cards.length, 5);
    assert.equal(cards[0][1], 'kramo');
    for (const [card, id] of cards) {
      assert.equal([...card.matchAll(/data-project-fact/g)].length, 2, id);
      assert.match(card, /class="case-outcome"/);
      assert.match(card, /<details class="case-details">/);
      assert.ok(card.indexOf('class="case-outcome"') < card.indexOf('<details'), id);
    }
    assert.match(html, /id="testimonials" hidden/);
  });
  test(`${lang}: local assets and fragment links resolve`, () => {
    for (const [, value] of html.matchAll(/(?:src|href|srcset)="([^"]+)"/g)) {
      if (value.startsWith('#')) assert.ok(html.includes(`id="${value.slice(1)}"`), value);
      else if (value.startsWith('/')) assert.ok(fs.existsSync(path.join(root, value)), value);
    }
    assert.doesNotMatch(html, /fonts\.(?:googleapis|gstatic)\.com/);
  });
}

test('the shared OG image is a 1200 by 630 PNG', () => {
  const image = fs.readFileSync(path.join(root, 'og-image.png'));
  assert.equal(image.subarray(0, 8).toString('hex'), '89504e470d0a1a0a');
  assert.equal(image.readUInt32BE(16), 1200);
  assert.equal(image.readUInt32BE(20), 630);
});
