import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const source = fs.readFileSync(new URL('../app.js', import.meta.url), 'utf8');
const context = vm.createContext({});
vm.runInContext(source.slice(0, source.indexOf('const html =')) + '\nthis.getLanguage = typeof languageForPath === "function" ? languageForPath : null;', context);

test('explicit language URLs choose their own language', () => {
  assert.equal(typeof context.getLanguage, 'function');
  for (const path of ['/en', '/en/', '/en/index.html']) assert.equal(context.getLanguage(path), 'en');
  for (const path of ['/', '/index.html', '/energy/']) assert.equal(context.getLanguage(path), 'pl');
});

