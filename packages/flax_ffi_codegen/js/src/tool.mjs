import {
  access,
  mkdir,
  mkdtemp,
  readFile,
  rename,
  rm,
  writeFile,
} from 'node:fs/promises';
import { resolve } from 'node:path';
import { command, digest } from './target.mjs';

const release = 'v2026.01.30';
const archiveName = 'castxml-macos-15-arm64.tar.gz';
const sha256 = 'c30861b8e10941818e76187a546203e0cdc105671d98d1764525b254fb5ab644';
const binarySha256 = '34910612e435a6d53138ff069f066a0c8c4c29a19f9a404db809e67485854b65';

export async function castxmlTool(path, cache) {
  if (path ?? process.env.FLAX_CASTXML) {
    path = resolve(path ?? process.env.FLAX_CASTXML);
    try {
      return {
        path,
        digest: digest(await readFile(path)),
        version: await command(path, ['--version']),
      };
    } catch (error) {
      throw new Error(
        `Cannot use CastXML at ${path}. Point FLAX_CASTXML or --castxml to an executable, or omit the override to download the pinned tool on macOS arm64. ${error.message}`,
        { cause: error },
      );
    }
  }
  if (process.platform !== 'darwin' || process.arch !== 'arm64')
    throw new Error('Set FLAX_CASTXML to a compatible CastXML executable on this host');
  const destination = resolve(cache, release),
    binary = resolve(destination, 'castxml/bin/castxml');
  try {
    await access(binary);
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
    await mkdir(cache, { recursive: true });
    const stage = await mkdtemp(resolve(cache, 'castxml-'));
    try {
      let response;
      try {
        response = await fetch(
          `https://github.com/CastXML/CastXMLSuperbuild/releases/download/${release}/${archiveName}`,
          { signal: AbortSignal.timeout(120000) },
        );
      } catch (error) {
        throw new Error(
          `CastXML download failed. Check network access or set FLAX_CASTXML to an existing executable for offline builds. ${error.message}`,
          { cause: error },
        );
      }
      if (!response.ok)
        throw new Error(
          `CastXML download failed: HTTP ${response.status}. Set FLAX_CASTXML to an existing executable for offline builds.`,
        );
      const bytes = new Uint8Array(await response.arrayBuffer());
      if (digest(bytes) !== sha256) throw new Error('CastXML archive SHA-256 mismatch');
      const archive = resolve(stage, 'tool.tar.gz');
      await writeFile(archive, bytes);
      await command('tar', ['-xzf', archive, '-C', stage]);
      await rm(archive);
      try {
        await rename(stage, destination);
      } catch (error) {
        if (!['ENOTEMPTY', 'EEXIST'].includes(error.code)) throw error;
        await access(binary);
      }
    } finally {
      await rm(stage, { recursive: true, force: true });
    }
  }
  const actual = digest(await readFile(binary));
  if (actual !== binarySha256)
    throw new Error(
      'Cached CastXML executable SHA-256 mismatch; remove that cache or provide FLAX_CASTXML',
    );
  return {
    path: binary,
    digest: actual,
    version: await command(binary, ['--version']),
  };
}
