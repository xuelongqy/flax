# FFI header codegen feasibility experiment

This is an isolated experiment, not a supported `@flax/ffi-codegen` package. The
recommended design and remaining work are in the
[proposal](../../docs/architecture/ffi-codegen-proposal.md).

The formal optional package now lives under
[packages/flax_ffi_codegen](../../packages/flax_ffi_codegen/README.md). This directory
retains the original feasibility probe and its receipts.

It reuses CastXML for C parsing and the current `@flax/ffi` runtime for execution. The
adapter emits TypeScript definitions and a deliberately restricted `Counter` resource
class. The real-engine probe also generates nine functions directly from the target
SDK's `sqlite3.h` and executes `SELECT 42` against system SQLite.

## Files and boundaries

| File                           | Purpose                                                                                    |
| ------------------------------ | ------------------------------------------------------------------------------------------ |
| `native/`                      | Small C ABI fixture and two deliberately unsupported declarations                          |
| `generate.mjs`                 | Experimental XML adapter, normalized model and TS emitter                                  |
| `verify.py`                    | Three target extractions, compiler ABI checks, deterministic generation and negative cases |
| `probe.mjs`, `host.dart`       | Generated-binding calls and actual Session GC/lifecycle checks                             |
| `bundle.mjs`, `run_runtime.py` | Disposable Flutter application and maintained-engine execution                             |

All generated files, tools, logs, intermediate objects and application builds belong
under the workspace's ignored `.local/` directory. Successful or failed runtime runs
remove their own application copies and uninstall their own Simulator app. The primary
workspace, production runtime and existing engine builds are not modified.

## Reproduce the frontend checks

From this worktree root, with Xcode and the repository's pinned JS dependencies:

```sh
mkdir -p "$PWD/.local/tmp" "$PWD/.local/ffi-codegen/tools"
export TMPDIR="$PWD/.local/tmp" TMP="$PWD/.local/tmp" TEMP="$PWD/.local/tmp"
export PYTHONDONTWRITEBYTECODE=1
pnpm install --frozen-lockfile
npm ci --prefix experiments/ffi_codegen --ignore-scripts --no-audit --no-fund
```

Use the official archive tested here, or pass an existing compatible CastXML binary.
This download command is for macOS arm64 hosts running macOS 15 or later:

```sh
curl --fail --location \
  https://github.com/CastXML/CastXMLSuperbuild/releases/download/v2026.01.30/castxml-macos-15-arm64.tar.gz \
  -o .local/ffi-codegen/tools/castxml.tar.gz
python3 - <<'PY'
import hashlib
from pathlib import Path
archive = Path('.local/ffi-codegen/tools/castxml.tar.gz')
assert hashlib.sha256(archive.read_bytes()).hexdigest() == 'c30861b8e10941818e76187a546203e0cdc105671d98d1764525b254fb5ab644'
PY
tar -xzf .local/ffi-codegen/tools/castxml.tar.gz -C .local/ffi-codegen/tools
python3 experiments/ffi_codegen/verify.py \
  --castxml .local/ffi-codegen/tools/castxml/bin/castxml
```

The command writes per-profile configs, XML, C ABI assertions and generated TS under
`.local/ffi-codegen/`. No global LLVM installation is required by this tested archive.
To rerun just the emitter:

```sh
node experiments/ffi_codegen/generate.mjs \
  .local/ffi-codegen/extract/macos-arm64.json
```

With the fixture's C symbols already linked into the host, the generated files use the
ordinary JS API:

```ts
import { DynamicLibrary } from '@flax/ffi';
import { createBindings } from './bindings.g.js';

const library = DynamicLibrary.process();
const { native, Counter } = createBindings(library);
native.cg_add(20, 22); // 42
let counter: InstanceType<typeof Counter> | null = new Counter(40);
counter.add(2); // 42
counter = null; // Session GC releases the C allocation later.
```

No ownership is inferred from the header: the experimental generation config explicitly
maps `cg_counter_create`, `cg_counter_destroy` and `cg_counter_add` to this class. The
SQLite definitions contain only standard primitive signatures and load in plain Node
without importing Flax. This checks module portability, not native execution under
Node's `node:ffi`.

The profiles use macOS 15.0 and iOS 16.3 deployment targets, selecting the current Xcode
SDK through `xcrun`. Recheck the receipt when changing Xcode: tested versions are
recorded in `results.json`, and compatible future SDKs are not assumed.

## Reproduce the runtime checks

Reuse a matching maintained SDK and FFI acceptance engine as described in the
[existing FFI runtime runner](../../packages/flax_ffi/test/runtime/README.md). Do not
substitute the stock Flutter engine: this probe also requires the acceptance engine's
test-only JS collection control. That control requests JS GC without sweeping native
finalizers; the probe observes C counters directly while waiting for the real Session
wakeup.

```sh
python3 experiments/ffi_codegen/run_runtime.py \
  --target macos --flutter-root /absolute/path/to/matching-macos-sdk \
  --engine-output /absolute/path/to/ffi-dlopen-engine
python3 experiments/ffi_codegen/run_runtime.py \
  --target ios-simulator --simulator SIMULATOR_UUID \
  --flutter-root /absolute/path/to/matching-ios-sdk \
  --engine-output /absolute/path/to/ffi-dlopen-engine
```

The runner checks generated TS, analyzes Dart, compiles/links the C fixture, verifies
the packaged engine's Mach-O UUID and records a runtime receipt. Engine and framework
must match. The completed checks used V8 on macOS arm64 and Hermes on iOS Simulator
arm64. Neither check uses a Dart business FFI bridge.

## Scope of the evidence

See [results.json](results.json) for counts and identities. The experiment covers
scalars, exact uint64 constants, C booleans, enum storage, nested/packed structures,
unions, fixed arrays, decayed array parameters, a synchronous callback signature,
explicitly typed variadic arguments, borrowed string pointers and globals. The class
probe covers null construction, failed finalizer attachment, idempotent manual close,
closed-library cleanup, automatic GC, repeated GC and Session close.

The frontend check also compiles the fixture and validates layout on the iOS device SDK,
but no device application is installed or executed. It rejects bitfields,
unrepresentable alignment, untyped varargs, a missing selected function, a function-like
macro treated as a constant and two mismatched target profiles.

This adapter recognizes fixture aggregate/callback typedef names beginning with `Cg`,
and its resource mapping only accepts the Counter signature shape. It does not provide
production include/exclude rules, arbitrary ownership inference, header dependency
caching, atomic outputs, automatic target selection or Node FFI runtime certification.
Those limits are explicit so this code is not mistaken for the finished generator.
