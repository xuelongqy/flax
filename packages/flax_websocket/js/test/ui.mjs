import { createHash } from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

export async function bundleUiFixtures({ outdir }) {
  await writeFile(resolve(outdir, 'websocket_wpt.js'), await wptSource());
}

export async function wptSource() {
  const directory = new URL('./wpt/', import.meta.url);
  const manifest = JSON.parse(
    await readFile(new URL('manifest.json', directory), 'utf8'),
  );
  let source = await readFile(new URL('harness.js', directory), 'utf8');
  source +=
    "\n(() => {const self = globalThis; const location = {protocol: 'http:', search: ''};\n";
  for (const item of manifest.files) {
    const data = await readFile(new URL(item.file, directory));
    if (createHash('sha256').update(data).digest('hex') !== item.sha256)
      throw new Error(`Changed upstream test: ${item.file}`);
    if (!item.file.endsWith('.js')) continue;
    const code =
      item.file === 'constants.sub.js'
        ? data
            .toString()
            .replaceAll('{{host}}', '127.0.0.1')
            .replaceAll('{{hosts[alt][www]}}', 'localhost')
            .replaceAll(/\{\{ports\[\w+\]\[0\]\}\}/g, '1')
        : data.toString();
    source += `\n${code}\n`;
  }
  return `${source}\n})();`;
}
