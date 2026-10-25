# Packaged codegen runtime acceptance

This runner consumes npm archives of `@flax/ffi-codegen` and `@flax/ffi` in a disposable
project. The public build adapter generates bindings, compiles and packages the C
library through native assets, and executes the generated calls and classes in a real
Flax Session. It does not statically link a fixture into Runner or add Dart business
bindings.

Current acceptance uses macOS V8 JIT and iOS Simulator V8 jitless. The runner rejects
non-V8 overlays and checks the actual engine execution proof in application output.

From the repository root, with compatible maintained SDKs and FFI acceptance engines:

```sh
mkdir -p "$PWD/.local/tmp"
export TMPDIR="$PWD/.local/tmp" TMP="$PWD/.local/tmp" TEMP="$PWD/.local/tmp"
export PYTHONDONTWRITEBYTECODE=1
export FLAX_CASTXML=/absolute/path/to/castxml
python3 packages/flax_ffi_codegen/test/runtime/run.py \
  --target macos --flutter-root /absolute/path/to/matching-macos-sdk \
  --engine-output /absolute/path/to/ffi-dlopen-engine
python3 packages/flax_ffi_codegen/test/runtime/run.py \
  --target ios-simulator --simulator SIMULATOR_UUID \
  --flutter-root /absolute/path/to/matching-ios-sdk \
  --engine-output /absolute/path/to/ffi-dlopen-engine
```

See [FFI engine setup](../../../flax_ffi/test/runtime/README.md) for those engine/SDK
artifacts. The test-only engine export requests JS GC without sweeping native
finalizers. The host observes C allocation counters directly while waiting for the
ordinary Session wakeup, then checks repeated collection and Session close.

The runner verifies archive contents, generated TypeScript, Dart analysis, matching
engine UUIDs, automatic target selection from `FLAX_CHECK_TARGET`, shared macro/enum
flags, deployment minimums and SQLite query results. It checks generic constructor
arguments and a receiver at a nonfirst parameter, failed attachment rollback, explicit
close, reentrant close rejection, callback failure recovery, closed-library cleanup and
exact-once automatic release. A C++ CMake library with C exports checks Release
defaults, deployment and defines; ABI assertions compile with its actual target
settings. A subsequent build that changes its private `NDEBUG` or plain-char signedness
must fail. Another build with a deliberately wrong target must fail in the real native
hook. The actual packaged hook also runs with an empty executable search path to confirm
that missing CMake reports installation guidance.

Logs and receipts remain under `.local/ffi-codegen/formal-runtime/`. Disposable apps and
their Simulator installations are removed on success or failure; maintained SDKs,
engines and the cached frontend are retained. [results.json](results.json) is the
maintained receipt. No package is published.
