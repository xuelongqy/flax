# Flax FFI

`js/` is the standalone `@flax/ffi` npm package. It has no Pub package and no public
Dart facade. Core installs the checked engine extension only when JavaScript uses FFI;
Buffer-only imports remain JavaScript-only. The maintained Flutter engine owns the
shared JSI/libffi implementation. See the [contract](../../docs/architecture/ffi.md).

The package is private and unpublished. It is a maintained package in this workspace;
its current runtime acceptance covers macOS arm64 V8 and iOS arm64 Simulator V8 jitless.
Use the matching FFI-enabled Flax engine. An ordinary Flutter engine cannot execute it.

## Start here

- [Runnable example](example/README.md): native source packaging, a GC-owned Counter
  class, Buffer arguments and native memory with a borrowed view.
- [API guide](js/README.md): libraries, memory, layouts, callbacks and background calls.
- [Runtime contract](../../docs/architecture/ffi.md): ownership and compatibility
  limits.
- [Acceptance](test/runtime/README.md): archive consumers, macOS/iOS V8 and optionality.

## Package layout

| Path                    | Owner and purpose                                                             |
| ----------------------- | ----------------------------------------------------------------------------- |
| `js/`                   | The npm archive: ESM/CommonJS, declarations and optional Buffer compatibility |
| `example/`              | Checked-in JS/native inputs and a Flutter host; no FFI-specific Dart API      |
| `test/package.test.mjs` | Engine-free archive, alias, type and tree-shaking checks                      |
| `test/runtime/`         | Real-engine tests and disposable application/SDK build tools                  |

Core owns internal Session installation and retirement. `@flax/build` owns native-input
selection and the generated build hook. The Flutter engine repository owns
`flax/native/src/ffi/` and libffi. Runtime tests read that engine source directly;
production C++ is not duplicated in this package or shipped in its npm archive.

## Check or pack locally

From the repository root, after installing the pinned workspace dependencies:

```sh
mkdir -p "$PWD/.local/tmp" "$PWD/.local/packages"
export TMPDIR="$PWD/.local/tmp" TMP="$PWD/.local/tmp" TEMP="$PWD/.local/tmp"
pnpm --filter @flax/ffi build
pnpm --filter @flax/ffi typecheck
pnpm --filter @flax/ffi test
pnpm --dir packages/flax_ffi/js pack --pack-destination "$PWD/.local/packages"
```

Consumers can install that local `.tgz` with `pnpm add /path/to/flax-ffi-0.0.0.tgz`. Use
`flaxEsbuildPlugin` from `@flax/build/esbuild`, or `flaxVitePlugin` from
`@flax/build/vite`, in the existing application build. No registry publication is
needed. Import only the helpers used by the application:

```js
import { Buffer, DynamicLibrary } from '@flax/ffi';
```

Unused imports disappear from ESM bundles. Buffer-only bundles install no native FFI
state; FFI-only named imports can remove Buffer. Native libraries are selected only when
their owning JS package contributes code to the final bundle. Static CommonJS and the
default namespace remain supported but generally retain more code. The shared engine
backend is still present in the engine binary; optionality does not promise a smaller
engine executable.
