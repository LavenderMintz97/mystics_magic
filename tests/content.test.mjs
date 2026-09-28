import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join, posix } from 'node:path';

const root = new URL('../site/', import.meta.url);
const siteDir = fileURLToPath(root);
const read = (path) => readFileSync(new URL(path, root), 'utf8');
const home = read('index.html');
const services = read('services/index.html');
const booking = read('booking/index.html');
const contact = read('contact/index.html');
const shop = read('shop/index.html');
const all = [home, services, booking, contact, shop].join('\n');

const htmlFiles = [];
const walk = (dir) => {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full);
    else if (entry.endsWith('.html')) htmlFiles.push(full);
  }
};
walk(siteDir);

test('preserves the live production design system', () => {
  assert.match(home, /\/_astro\/BaseLayout\.CPQZdCep\.css/);
  assert.match(home, /class="hero-visual"/);
  assert.match(home, /class="process-grid"/);
  assert.match(home, /mystical-tarot-spread-960\.jpg/);
  assert.match(home, /mystical-tarot-spread-1376\.jpg/);
});

test('every referenced local asset and page exists on disk', () => {
  const missing = [];
  for (const file of htmlFiles) {
    const markup = readFileSync(file, 'utf8');
    const refs = new Set();
    for (const match of markup.matchAll(/(?:href|src|content)="(\/[^"#?]*)"/g)) refs.add(match[1]);
    for (const match of markup.matchAll(/https:\/\/mystics-magic\.pages\.dev(\/[^"'\s]*\.(?:jpg|png|svg|css|js))/g)) refs.add(match[1]);
    for (const ref of refs) {
      const relative = ref.endsWith('/') ? posix.join(ref, 'index.html') : ref;
      if (!existsSync(join(siteDir, relative.replace(/^\//, '')))) missing.push(`${file} -> ${ref}`);
    }
  }
  assert.deepEqual(missing, []);
});

test('pairs each reading service with its own tier and Telegram payload', () => {
  const pairs = [
    { name: 'Mystic Tarot Reading', payload: 'website_tarot', prices: ['"20"', '"45"'] },
    { name: 'Lenormand Reading', payload: 'website_lenormand', prices: ['"15"', '"20"'] },
    { name: 'Rune Elder Futhark Norse Reading', payload: 'website_rune', prices: ['"15"', '"20"'] },
  ];
  for (const { name, payload, prices } of pairs) {
    const offers = services.match(new RegExp(`"name":"${name}"[\\s\\S]{0,1600}?"offers":\\[[\\s\\S]{0,1200}?\\]`));
    assert.ok(offers, `no structured offers found for ${name}`);
    assert.match(offers[0], new RegExp(payload));
    for (const price of prices) assert.match(offers[0], new RegExp(`"price":${price}`));
  }
  for (const price of ['USD $20', 'USD $45', 'USD $15']) assert.match(all, new RegExp(price.replace('$', '\\$')));
});

test('marks digital products unavailable and removes purchase actions', () => {
  assert.match(home, /Digital products are temporarily unavailable/i);
  assert.match(shop, /Digital products are temporarily unavailable/i);
  assert.doesNotMatch(all, /Pay on Ko-fi|Open Ko-fi Shop|Ko-fi payment|purchase confirmation|Pay securely through Ko-fi|digital product purchases/i);
  assert.doesNotMatch(all, /href=["'][^"']*ko-fi\.com/i);
  assert.match(shop, /Coming later/i);
});

test('uses Telegram intake without obsolete or discarded intake wording', () => {
  assert.doesNotMatch(all, /Book via WhatsApp|Start on WhatsApp|Open WhatsApp Booking|Send on WhatsApp/i);
  assert.doesNotMatch(all, /date of birth|2-3 days/i);
  assert.doesNotMatch(booking + contact, /<form\b|<textarea\b|<select\b/i);
  assert.match(booking, /48 hours after payment is verified/i);
  assert.match(booking, /one factual correction/i);
  assert.match(booking, /12 months/i);
});

test('keeps published modification dates consistent', () => {
  for (const file of htmlFiles) {
    assert.doesNotMatch(readFileSync(file, 'utf8'), /"dateModified":"2026-08-31"/);
  }
  assert.match(readFileSync(join(siteDir, 'sitemap.xml'), 'utf8'), /<lastmod>2026-09-28<\/lastmod>/);
});
