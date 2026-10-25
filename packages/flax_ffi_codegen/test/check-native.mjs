import { execFileSync } from 'node:child_process';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { castxmlTool } from '../js/src/tool.mjs';

if (process.platform !== 'darwin' || process.arch !== 'arm64')
  throw new Error('The FFI codegen native gate requires macOS arm64 with Xcode.');

const root = fileURLToPath(new URL('../../../', import.meta.url));
const tool = await castxmlTool(undefined, resolve(root, '.local/ffi-codegen/tools'));
const env = { ...process.env, FLAX_CASTXML: tool.path };
for (const name of ['FLAX_TARGET', 'FLAX_CHECK_TARGET', 'PLATFORM_NAME'])
  delete env[name];
execFileSync(
  process.execPath,
  ['--test', 'packages/flax_ffi_codegen/js/test/codegen.test.mjs'],
  {
    cwd: root,
    env,
    stdio: 'inherit',
  },
);
for (const target of ['macos-arm64', 'ios-arm64-simulator']) {
  console.log(`Checking the generated FFI example for ${target}`);
  for (const action of ['typecheck', 'build'])
    execFileSync('pnpm', ['--filter', '@flax/example-ffi-codegen', action], {
      cwd: root,
      env: { ...env, FLAX_TARGET: target },
      stdio: 'inherit',
    });
}
