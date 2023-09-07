import { build } from 'esbuild';
import { readFileSync, readdirSync, writeFileSync, lstatSync } from 'fs';
import { sassPlugin as sass } from 'esbuild-sass-plugin';

const entry = 'src';
const out = 'dist';
const importInject = 'import { createElement, Fragment } from "@jacksonotto/lampjs";\n';

function getDirFiles(dir: string, path: string[] = []) {
  let res: string[] = [];

  const startPath = path.length > 0 ? path.join('/') + '/' : '';
  const inDir = readdirSync(startPath + dir);

  const newPath = [...path, dir];
  for (let i = 0; i < inDir.length; i++) {
    const dirStat = lstatSync(newPath.join('/') + '/' + inDir[i]);

    if (dirStat.isDirectory()) {
      res.push(...getDirFiles(inDir[i], newPath));
      continue;
    }

    res.push(newPath.join('/') + '/' + inDir[i]);
  }
  return res;
}

(async () => {
  await build({
    plugins: [sass()],
    entryPoints: [`${entry}/**`],
    outdir: out
  });

  let files = getDirFiles(out);
  files = files.filter((item) => item.endsWith('js') && !item.endsWith('index.js'));

  files.forEach((item) => {
    const content = readFileSync(item, 'utf-8');

    if (!content.includes('createElement')) return;

    const lines = content.split('\n');
    const first = lines.splice(0, 1);
    const newContent = `${first}\n${importInject}${lines.join('\n')}`;
    writeFileSync(item, newContent);
  });
})();
