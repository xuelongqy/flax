import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { resolve } from 'node:path';
import { createMixedFixture } from '../../../flax_tools/js/test/fixture.mjs';

export async function bundleUiFixtures({ outdir }) {
  const source = await readFile(resolve(outdir, 'native_callbacks.js'), 'utf8');
  await writeFile(
    resolve(outdir, 'native_callbacks_source.dart'),
    `const nativeCallbacksSource = ${JSON.stringify(source).replaceAll('$', '\\$')};\n`,
  );
  const temporary = await mkdtemp(resolve(tmpdir(), 'flax-ui-modules-'));
  try {
    const fixture = await createMixedFixture(temporary);
    await writeFile(
      resolve(outdir, 'module_delivery.json'),
      JSON.stringify({
        manifest: fixture.manifest,
        assets: fixture.assets,
        business: fixture.code,
      }),
    );
  } finally {
    await rm(temporary, { recursive: true, force: true });
  }
}
