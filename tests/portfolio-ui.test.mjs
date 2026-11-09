import test from 'node:test';
import assert from 'node:assert/strict';
import { buildBriefMailto, setupBrief, setupShowcase } from '../portfolio-ui.js';

function decodeMailto(value) {
  const [recipient, query] = value.split('?');
  return { recipient, fields: new URLSearchParams(query) };
}

test('brief mailto preserves Polish text, punctuation and multiline description as body only', () => {
  const result = decodeMailto(buildBriefMailto({
    type: 'store',
    description: 'Sklep Łódź & Warszawa\nWarianty + płatności? #tak',
    url: 'https://example.pl/?a=1&b=żółć#sekcja',
  }));
  assert.equal(result.recipient, 'mailto:dmytro.dev.zats@gmail.com');
  assert.doesNotMatch(buildBriefMailto({ type: 'store', description: 'A + B' }), /\+/);
  assert.match(decodeMailto(buildBriefMailto({ description: 'A + B' })).fields.get('body'), /A \+ B/);
  assert.equal(result.fields.get('subject'), 'Zapytanie o projekt: sklep internetowy');
  assert.equal(result.fields.get('body'), 'Cześć Dmytro,\n\nChcę porozmawiać o projekcie: sklep internetowy.\n\nOpis projektu:\nSklep Łódź & Warszawa\nWarianty + płatności? #tak\n\nObecna strona lub materiały:\nhttps://example.pl/?a=1&b=żółć#sekcja');
  assert.deepEqual([...result.fields.keys()], ['subject', 'body']);
});

test('brief mailto uses fixed English type labels and rejects subject injection through type', () => {
  const english = decodeMailto(buildBriefMailto({ type: 'app', description: 'API integration' }, 'en-GB'));
  assert.equal(english.fields.get('subject'), 'Project enquiry: app or integration');
  assert.match(english.fields.get('body'), /^Hi Dmytro,/);
  const invalid = decodeMailto(buildBriefMailto({ type: 'STORE\r\nBcc:evil@example.com' }));
  assert.equal(invalid.fields.get('subject'), 'Zapytanie o projekt: strona internetowa');
  assert.doesNotMatch(invalid.fields.get('subject'), /Bcc|\r|\n/);
  assert.equal(decodeMailto(buildBriefMailto(null)).fields.get('subject'), 'Zapytanie o projekt: strona internetowa');
});

test('brief mailto limits field lengths and safely encodes arbitrary text including lone surrogates', () => {
  const result = decodeMailto(buildBriefMailto({ type: 'website', description: 'x'.repeat(2200), url: 'u'.repeat(550) }));
  assert.ok(result.fields.get('body').includes('x'.repeat(2000)));
  assert.ok(!result.fields.get('body').includes('x'.repeat(2001)));
  assert.ok(result.fields.get('body').endsWith('u'.repeat(500)));
  assert.doesNotThrow(() => buildBriefMailto({ description: '\ud800&subject=bad\nBcc:bad' }));
});

class Element {
  constructor(dataset = {}) { this.dataset = dataset; this.attributes = {}; this.listeners = new Map(); this.hidden = false; this.textContent = ''; this.animations = []; }
  setAttribute(name, value) { this.attributes[name] = String(value); }
  getAttribute(name) { return this.attributes[name] ?? null; }
  addEventListener(name, callback) { const items = this.listeners.get(name) || []; items.push(callback); this.listeners.set(name, items); }
  removeEventListener(name, callback) { this.listeners.set(name, (this.listeners.get(name) || []).filter(item => item !== callback)); }
  dispatch(name, event = {}) { for (const callback of this.listeners.get(name) || []) callback(event); }
  animate(frames, options) { const animation = { frames, options, canceled: false, cancel() { this.canceled = true; } }; this.animations.push(animation); return animation; }
}

function showcase() {
  const ids = ['kramo', 'slotify', 'quotly'];
  const buttons = ids.map(id => { const item = new Element({ showcaseSelect: id }); item.setAttribute('aria-controls', `showcase-${id}`); return item; });
  const panels = ids.map(id => { const item = new Element({ showcasePanel: id, name: id.toUpperCase() }); item.id = `showcase-${id}`; return item; });
  const status = new Element();
  const choices = new Element();
  choices.hidden = true;
  const root = new Element();
  root.querySelectorAll = selector => selector === '[data-showcase-select]' ? buttons : panels;
  root.querySelector = selector => selector === '[data-showcase-status]' ? status : selector === '.showcase-choices' ? choices : null;
  root.ownerDocument = { defaultView: { matchMedia: () => ({ matches: false }) } };
  return { root, buttons, panels, status, choices };
}

test('showcase reveals progressive controls only after valid controls have been initialized', () => {
  const valid = showcase();
  assert.equal(valid.choices.hidden, true);
  setupShowcase(valid.root);
  assert.equal(valid.choices.hidden, false);
  const invalid = showcase();
  for (const button of invalid.buttons) button.setAttribute('aria-controls', 'missing-panel');
  setupShowcase(invalid.root);
  assert.equal(invalid.choices.hidden, true);
});

test('showcase has one selected panel, updates accessible state on click and never rotates by itself', () => {
  const { root, buttons, panels, status } = showcase();
  const cleanup = setupShowcase(root, { reducedMotion: true });
  assert.deepEqual(panels.map(panel => panel.hidden), [false, true, true]);
  assert.deepEqual(buttons.map(button => button.getAttribute('aria-pressed')), ['true', 'false', 'false']);
  assert.equal(status.textContent, 'KRAMO');
  buttons[1].dispatch('click');
  assert.deepEqual(panels.map(panel => panel.hidden), [true, false, true]);
  assert.equal(buttons[1].getAttribute('aria-pressed'), 'true');
  assert.equal(status.textContent, 'SLOTIFY');
  assert.equal(panels.flatMap(panel => panel.animations).length, 0);
  cleanup();
  buttons[2].dispatch('click');
  assert.equal(status.textContent, 'SLOTIFY');
});

test('showcase animates only deliberate changes and cancels the previous animation', () => {
  const { root, buttons, panels } = showcase();
  setupShowcase(root, { reducedMotion: false });
  assert.equal(panels[0].animations.length, 0);
  buttons[1].dispatch('click');
  assert.equal(panels[1].animations.length, 1);
  assert.equal(panels[1].animations[0].options.duration, 360);
  buttons[1].dispatch('click');
  assert.equal(panels[1].animations.length, 1);
  buttons[2].dispatch('click');
  assert.equal(panels[1].animations[0].canceled, true);
  assert.equal(panels[2].animations.length, 1);
});

test('brief setup progressively reveals form and updates draft link without submitting', () => {
  const form = new Element();
  form.hidden = true;
  form.ownerDocument = { documentElement: { lang: 'en' } };
  const radio = { value: 'website' }, website = { value: '' }, description = { value: '' }, email = new Element();
  const nodes = { '[name="projectType"]:checked': radio, '[name="website"]': website, '[name="description"]': description, '[data-brief-email]': email };
  form.querySelector = selector => nodes[selector] || null;
  const cleanup = setupBrief(form);
  assert.equal(form.hidden, false);
  assert.equal(decodeMailto(email.getAttribute('href')).fields.get('subject'), 'Project enquiry: website');
  radio.value = 'store'; description.value = 'Products & checkout'; website.value = 'Existing materials';
  form.dispatch('change');
  assert.equal(decodeMailto(email.getAttribute('href')).fields.get('subject'), 'Project enquiry: online store');
  assert.match(decodeMailto(email.getAttribute('href')).fields.get('body'), /Products & checkout/);
  let prevented = false;
  form.dispatch('submit', { preventDefault() { prevented = true; } });
  assert.equal(prevented, true);
  const lastHref = email.getAttribute('href');
  cleanup(); description.value = 'changed after cleanup'; form.dispatch('input');
  assert.equal(email.getAttribute('href'), lastHref);
});
