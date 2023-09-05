import { build } from 'esbuild';
import { readFileSync, readdirSync, writeFileSync } from 'fs';
import { sassPlugin as sass } from 'esbuild-sass-plugin';

const entry = 'src';
const out = 'dist';
const importInject = 'import { createElement, Fragment } from "@jacksonotto/lampjs";\n';

(async () => {
  await build({
    plugins: [sass()],
    entryPoints: [`${entry}/*`],
    outdir: out
  });

  let files = readdirSync(out);
  files = files.filter((item) => item.endsWith('js') && item !== 'index.js');
  files.forEach((item) => {
    const path = `${out}/${item}`;
    const content = readFileSync(path, 'utf-8');
    const lines = content.split('\n');
    const first = lines.splice(0, 1);
    const newContent = `${first}\n${importInject}${lines.join('\n')}`;
    writeFileSync(path, newContent);
  });
})();
