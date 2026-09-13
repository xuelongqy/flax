# Task: Engine boundary fixes

Status: complete on macOS arm64.

## Goal and scope

Fix V8's mutable-eval UTF-16 conversion and property-based buffer detachment check, and
reject foreign engine IDs at the native boundary. Keep the public Dart API, Flax ABI 2,
pinned engine versions, supported platform and Hermes default unchanged.

## Acceptance criteria

- UTF-16 round trips and property names preserve code units even with replaced, deleted
  or throwing global eval, without invoking it.
- Byte reads use internal detachment state, ignoring own/prototype property values and
  getters; rejected operations leave the runtime usable.
- Direct C ABI calls reject cross-engine/runtime and stale IDs without changing local
  objects; allocation is unique under concurrency and never wraps on exhaustion.
- Both runtime/packaging, native coexistence, UI/release, workspace and benchmark smoke
  checks pass with regenerated assets. V8 release includes actual JIT evidence.

## Approach

The Microsoft consumer wrapper uses existing native UTF-16 operations and a new appended
internal JSI ABI 2 detachment query. V8 implements the latter with `WasDetached()`
inside its existing entry scope. Older internal tables are rejected with balanced
references; the public Flax function table and exports do not change.

Each library uses its CMake-assigned engine namespace in the upper eight ID bits and an
atomic, monotonic 56-bit sequence. Exhaustion is permanent. No shared library or engine
registry was added.

The old adapter patch was saved in ignored local evidence. Its complete cached diff was
checked for equality before reverse application; the clean checkout was checked before
applying the patch again and extending it. Unknown cached changes were never reset.
Rebuilding prepares fresh package manifests, hashes and notices.

## Results and validation

- Before fixes: all nine new UTF-16/detachment tests failed with the old V8 asset; the
  direct native test failed with `Foreign inspect accepted`.
- `check:runtime`: passed, including two native tests, 39 Dart tests and standalone JIT,
  missing/corrupt asset rejection and relocated AOT execution.
- `check:runtime:v8`: passed, including three native tests, 39 Dart tests and the same
  external consumer/negative asset checks. The consumer also exercises the fixed UTF-16
  and spoofed-detachment paths after source relocation.
- `check:engines`: passed with both staged packaged libraries, covering Dart guards and
  direct native rejection after the package hooks validate the assets.
- Direct native dual-engine test: passed with both rebuilt libraries, including both
  directions, same-engine instances, stale references and interleaved recreation.
- Internal tests cover old JSI ABI rejection, UTF-16 length limits and null/empty input,
  foreground task lifetime, thread migration, ID concurrency and permanent exhaustion.
- Compiler checks reject missing engine ID, 0, 3 and 256; IDs 1 and 2 compile.
- Scoped Dart analysis, documentation checks and the final aggregate `check` passed.
- Full `check:ui` and `check:ui:v8` passed: 217 framework tests, seven embedded example
  tests, actual macOS integration and release checks for each engine. The V8 embedded
  checks used the final asset below. A final `check_standalone.dart --engine=v8` run
  also verified the current asset in an external production build and a relocated
  release test app, including actual JIT machine-code events in a separate process. Its
  staged library SHA-256 was verified against the package manifest before source
  removal.
- Benchmark smoke passed all 64 samples with zero failures, complete JSON and HTML, and
  JIT proof in a separate process. Evidence: `build/benchmarks/engines/boundary-fixes/`.
- Desktop Flutter drive occasionally reported foreground-launch failures. Explicit
  `open -a` retries activated the already running V8 standalone and Hermes embedded test
  apps; their integration scenarios then completed without source changes.

Detailed local logs are ignored under `.local/engine-boundary-fixes/`. Old benchmark
reports remain unchanged; smoke timings will not establish a new performance baseline.

## Handoff

Initial aggregate runs encountered concurrent workspace additions (a missing new Host
fixture and a frozen-buffer transfer test). Those additions and the subsequent shared
buffer fix were preserved. Both current runtime suites and the final Hermes UI run pass
them. Validation was repeated after the assets changed; no failure was skipped.

The initial workspace run reported a Prettier formatting issue in this task record.
Formatting was corrected and the full aggregate `check` passed on rerun, including the
engine-free CMake configuration. All local acceptance checks are complete. Remote CI was
not executed. No commit, push, publication or default-engine change.

## Asset identity

- hermes library SHA-256:
  `2bac2594d4834cab4a5fa47db2733c596e6772d7d59c910fd1807fae9154e2eb`.
- v8 library SHA-256:
  `e8c5f85b2d63e081568f7d634c22196f4d2d0c0372f116801fe7d54505b95969`.
- V8 adapter patch SHA-256:
  `fee7cf61232051b257f56b8cd3c3139ac5d6a0974fd69f5efc1e78f3a46153e9`.
- Flax ABI remains 2; engine revisions and JIT/build flags remain pinned and unchanged.
