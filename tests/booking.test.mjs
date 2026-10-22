import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const source = fs.readFileSync(new URL('../app.js', import.meta.url), 'utf8');

function bookingHarness(reducedMotion) {
  const nodes = new Map();
  const buttons = [{ disabled: false }, { disabled: false }];
  const timers = new Map();
  let nextTimer = 0;
  const context = vm.createContext({
    document: {
      getElementById(id) {
        if (!nodes.has(id)) nodes.set(id, { textContent: '', innerHTML: '', hidden: true, classList: { toggle() {} } });
        return nodes.get(id);
      },
      querySelectorAll: () => buttons,
    },
    matchMedia: () => ({ matches: reducedMotion }),
    setTimeout(callback, delay) { const id = ++nextTimer; timers.set(id, { callback, delay }); return id; },
    clearTimeout: id => timers.delete(id),
  });
  vm.runInContext(source.slice(0, source.indexOf('const html =')) + '\nconst currentLang = () => "pl"; const t = key => I18N.pl[key];\n' + source.slice(source.indexOf('const bookingDemoState'), source.indexOf('/* ---- i18n:')), context);
  return { context, nodes, buttons, timers };
}

test('booking completes immediately when reduced motion is requested', () => {
  const { context, nodes, buttons, timers } = bookingHarness(true);
  context.runBookingDemo();
  assert.equal(timers.size, 0);
  assert.equal(nodes.get('demoStatusBadge').textContent, '200 PAID');
  assert.equal(nodes.get('paymentSummary').hidden, false);
  assert.ok(buttons.every(button => !button.disabled));
});

test('animated booking disables controls until completion and preserves the payment total', () => {
  const { context, nodes, buttons, timers } = bookingHarness(false);
  context.runBookingDemo();
  assert.ok(buttons.every(button => button.disabled));
  assert.equal(nodes.get('paymentSummary').hidden, true);
  for (const timer of [...timers.values()].sort((a, b) => a.delay - b.delay)) timer.callback();
  assert.equal(nodes.get('demoStatusBadge').textContent, '200 PAID');
  assert.equal(nodes.get('paymentSummary').hidden, false);
  assert.match(nodes.get('paymentSummary').innerHTML, /108/);
  assert.match(nodes.get('paymentSummary').innerHTML, /12/);
  assert.ok(buttons.every(button => !button.disabled));
});
