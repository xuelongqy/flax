import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const native = resolve(root, 'js/native');
const hash = (bytes) => createHash('sha256').update(bytes).digest('hex');
try {
  const provenance = JSON.parse(
    await readFile(resolve(native, 'provenance.json'), 'utf8'),
  );
  assert.equal(provenance.formatVersion, 1);
  assert.equal(provenance.dawnRevision, '5fbd545292cb7a4a9a275e322abec6007ffe2ae8');
  assert.equal(provenance.target, 'macos-arm64');
  for (const [name, expected] of Object.entries(provenance.files)) {
    assert.match(name, /^[A-Za-z0-9_.-]+$/);
    assert.equal(
      hash(await readFile(resolve(native, name))),
      expected,
      `Changed native payload: ${name}`,
    );
  }
  assert.ok(provenance.files['libflax_webgpu.dylib']);
  assert.ok(provenance.files['THIRD_PARTY_NOTICES.txt']);
  for (const [name, expected] of Object.entries(provenance.sources)) {
    assert.ok(!name.startsWith('/') && !name.split('/').includes('..'));
    assert.equal(
      hash(await readFile(resolve(root, name))),
      expected,
      `Changed native source: ${name}`,
    );
  }
} catch (cause) {
  throw new Error(
    'Prepare the WebGPU native payload: python3 packages/flax_webgpu/tool/prepare_native.py --sdk /path/to/pinned/dawn-sdk',
    { cause },
  );
}
