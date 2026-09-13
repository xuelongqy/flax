import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdir, mkdtemp, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';
import { checkDocumentation } from './check-doc-links.mjs';

async function fixture(t, files) {
  const root = await mkdtemp(path.join(tmpdir(), 'flax-doc-links-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  for (const [name, contents] of Object.entries(files)) {
    const file = path.join(root, name);
    await mkdir(path.dirname(file), { recursive: true });
    await writeFile(file, contents);
  }
  return root;
}

test('resolves relative, root, reference, image, encoded, and duplicate heading links', async (t) => {
  const root = await fixture(t, {
    'README.md': `# Project
[Guide](docs/guide%20one.md?plain=1#using-api)
[Second heading](docs/guide%20one.md#using-api-1)
[Reference][guide]
![Diagram](docs/diagram.svg)
[Self](#project)
[Directory](docs/)
[Root guide](/docs/guide%20one.md)

[guide]: docs/guide%20one.md
`,
    'docs/guide one.md':
      '# Using **API**\n\n# Using `API`\n\n[Home](../README.md#project)\n',
    'docs/diagram.svg': '<svg xmlns="http://www.w3.org/2000/svg" />',
  });
  const result = await checkDocumentation(root);
  assert.deepEqual(result.errors, []);
  assert.equal(result.documentCount, 2);
  assert.equal(result.linkCount, 8);
});

test('reports missing files, missing anchors, and paths outside the repository', async (t) => {
  const root = await fixture(t, {
    'README.md':
      '# Project\n[Missing](absent.md)\n[Anchor](#absent)\n[Outside](../outside.md)\n',
  });
  const result = await checkDocumentation(root);
  assert.equal(result.errors.length, 3);
  assert.match(result.errors[0], /README\.md: absent\.md \(target does not exist\)/);
  assert.match(result.errors[1], /heading anchor does not exist/);
  assert.match(result.errors[2], /outside the repository/);
});

test('ignores code examples, external URLs, build outputs, and local notes', async (t) => {
  const root = await fixture(t, {
    'README.md': `# Project
\`[Inline](missing.md)\`

\`\`\`md
[Fenced](missing.md)
\`\`\`

    [Indented](missing.md)

[Web](https://example.com/missing)
[Mail](mailto:team@example.com)
[Protocol relative](//example.com/missing)
`,
    '.local/notes.md': '[Missing](missing.md)',
    'js/runtime/dist/README.md': '[Missing](missing.md)',
    'node_modules/vendor/README.md': '[Missing](missing.md)',
    'build/native/README.md': '[Missing](missing.md)',
    'packages/example_engine/native/generated/notices/LICENSE.md':
      '[Missing](missing.md)',
  });
  assert.deepEqual(await checkDocumentation(root), {
    documentCount: 1,
    linkCount: 0,
    errors: [],
  });
});

test('the CLI exits unsuccessfully and reports broken documentation', async (t) => {
  const root = await fixture(t, { 'README.md': '[Missing](missing.md)' });
  const checker = fileURLToPath(new URL('./check-doc-links.mjs', import.meta.url));
  const result = spawnSync(process.execPath, [checker], {
    cwd: root,
    encoding: 'utf8',
  });
  assert.equal(result.error, undefined);
  assert.equal(result.status, 1);
  assert.match(result.stderr, /README\.md: missing\.md/);
});
