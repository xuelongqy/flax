import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

/** Keep the header frontend entirely optional for ordinary Flax applications. */
export async function prepareFfiCodegen(project, options) {
  if (options === false) return [];
  const file = resolve(project, 'package.json');
  let metadata;
  try {
    metadata = JSON.parse(await readFile(file, 'utf8'));
  } catch (error) {
    if (error.code === 'ENOENT') return [];
    throw error;
  }
  if (!metadata.flax?.native) return [];
  const manifest = JSON.parse(
    await readFile(resolve(project, metadata.flax.native), 'utf8'),
  );
  if (!manifest.libraries?.some((library) => library.codegen !== undefined)) return [];
  let entry;
  try {
    entry = createRequire(file).resolve('@flax/ffi-codegen');
  } catch (error) {
    if (error.code !== 'MODULE_NOT_FOUND') throw error;
    throw new Error(
      'native.json declares codegen; install @flax/ffi-codegen as a development dependency',
    );
  }
  const { prepareProject } = await import(pathToFileURL(entry));
  return prepareProject({ projectDirectory: project, ...options });
}
