# FFI runtime acceptance

This suite installs the actual `@flax/ffi` npm archive into disposable consumers. It
validates macOS arm64 V8 Debug/Release and iOS arm64 Simulator Hermes Debug through the
same JSI/libffi implementation. It uses the public build adapter and internal Core
Session integration. No `experiments/` source is required.

## Coverage

| Area             | Acceptance                                                                                                                  |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Calls and types  | Dynamic/process symbols, signatures/cache/reentry, ABI aggregates, varargs, globals and function pointers                   |
| Memory           | Bigint pointers, Buffer/ArrayBuffer aliases, copies, zero-copy owners, manual release, GC finalizers and detach             |
| Concurrency      | Owner/foreign-thread callbacks, error reporting, background calls, cancellation, producer stop and Session/isolate shutdown |
| Native packaging | Source, static archive, dylib, framework, XCFramework, CMake and declared dependencies                                      |
| Optionality      | Used, FFI-only, Buffer-only, installed-unused, tree-shaken and absent packages; withdrawal of prior native outputs          |

The real-Session tests include automatic cleanup without an explicit pump, cleanup
notifications produced during bounded sweeping, queued/live finalizers at close, shared
images across Sessions, and the existing 14 engine GC contracts. Native counters must
return to zero. `counter.js` is a regression fixture; the user-facing example is under
[`example/`](../../example/README.md).

`internal/` is a disposable test app template. Its generated imports are supplied by
`run.py`, which analyzes that app after construction. `native/fixture.c` is test code;
the runtime implementation comes from the maintained engine's `flax/native/src/ffi/`.
Test-only native controls are enabled in the acceptance overlay and excluded from normal
engine builds.

## Run both engines

Set absolute paths to an already-built maintained Flutter checkout and its FFI engine
source. The archive is libffi 3.4.8; its SHA-256 is verified by `build.py`.

```sh
mkdir -p "$PWD/.local/tmp"
export TMPDIR="$PWD/.local/tmp" TMP="$PWD/.local/tmp" TEMP="$PWD/.local/tmp"
export PYTHONDONTWRITEBYTECODE=1
python3 packages/flax_ffi/test/runtime/build.py \
  --flutter-root "$FLUTTER_ROOT" --engine-source "$FLAX_ENGINE_SOURCE" \
  --output "$PWD/.local/ffi-dlopen-engine" \
  --source-archive /absolute/path/libffi-3.4.8.tar.gz \
  flax_mac_debug flax_ios_debug_sim_arm64 flax_mac_release
python3 packages/flax_ffi/test/runtime/run.py \
  --flutter-root "$FLUTTER_ROOT" --engine-output "$PWD/.local/ffi-dlopen-engine" \
  --scratch-root "$TMPDIR" --target macos --stress-seconds 30
python3 packages/flax_ffi/test/runtime/run.py \
  --flutter-root "$FLUTTER_ROOT" --engine-output "$PWD/.local/ffi-dlopen-engine" \
  --scratch-root "$TMPDIR" --target ios-simulator --simulator <simulator-id> \
  --stress-seconds 30
```

For V8 Release/AOT, use `--target macos --release`. Omit `--cases` to execute all seven
selection variants. `--cases used` runs the full functional/lifecycle suite alone. The
runner verifies engine UUIDs, static exports, native asset selection and archive
contents, writes logs/receipts under `.local/ffi-dlopen/`, then removes disposable apps.
It uninstalls its simulator test app. It never publishes an archive.

The overlay reuses pinned compiled engine objects and recompiles the FFI runtime,
adapters and required Dart compactor input. It is a targeted acceptance build, not a
clean full-engine GN build. `build.json` records the selected native source and hashes.
`matching_sdk.py --help` describes creating an isolated Flutter framework checkout for
engines whose pinned Dart UI differs from the current Flutter framework. It defaults to
`--target ios-simulator`; use `--target macos` for a separate macOS SDK. The runner
requires that framework revision and verifies the maintained native source hashes. The
overlay compiles that native source directly, with test-only collection probes; it does
not reconstruct the implementation from older prototype replacements.

## Receipts and limits

Current package verification is recorded in [results.json](results.json). Earlier
design/prototype evidence is preserved under
[`experiments/ffi_dlopen`](../../../../experiments/ffi_dlopen/README.md). Do not
interpret historical measurements as a new benchmark.

### GC cleanup measurements

The earlier prototype measured coalesced wakeups and bounded cleanup under 10,000
finalizers. The historical receipt contains the exact sources and measurements. This
package promotion reruns correctness and short stress checks; it does not establish a
new performance baseline or bound the time taken by arbitrary native destructors.

Physical iOS, distribution signing, other-platform FFI ABIs, whole-engine sanitizers,
long-running stability and clean full-engine builds require separate acceptance. Raw
native pointers remain an application ownership contract, not a memory sandbox.
