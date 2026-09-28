import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const source = join(root, 'site');
const output = join(root, 'dist');

if (!existsSync(join(source, 'index.html'))) {
  throw new Error('site/index.html is missing');
}

rmSync(output, { recursive: true, force: true });
mkdirSync(output, { recursive: true });
cpSync(source, output, { recursive: true });
console.log(`Built static site at ${output}`);
