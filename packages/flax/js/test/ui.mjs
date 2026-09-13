import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

export async function bundleUiFixtures({ outdir }) {
  const source = await readFile(resolve(outdir, 'native_callbacks.js'), 'utf8');
  await writeFile(
    resolve(outdir, 'native_callbacks_source.dart'),
    `const nativeCallbacksSource = ${JSON.stringify(source).replaceAll('$', '\\$')};\n`,
  );
}
