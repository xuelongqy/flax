# Task: Experimental V8 support

Status: implemented; local runtime, UI, release and workspace acceptance passed.

## Scope and decisions

V8 is an explicit macOS arm64, macOS 15+ alternative in the existing repository. Hermes
remains the command/example default. The Dart API, C ABI, JSI baseline, and UI protocol
are unchanged. JIT is required; there is no JITless fallback. Other platforms, Intl,
Inspector, Node APIs, new public JS capabilities and publication are excluded.

The implementation exposes `V8Engine.createRuntime()` from `flax_engine_v8`. See
[ADR 0012](../decisions/0012-experimental-v8.md), the
[adapter](../../packages/flax_engine_v8/native/README.md), and
[packaging](../architecture/packaging.md).

## Fixed inputs

| Input               | Revision/version                                        |
| ------------------- | ------------------------------------------------------- |
| V8                  | 15.2.124.21; `4323497a6a73839e6d5260f6acd7ec0212cb3321` |
| Microsoft v8-jsi    | `062ac626ac46da5b7730827466682919bdb14461`              |
| Existing Hermes JSI | `3477757eb2475555cf8d8df24bfb1deb0613880d`              |
| depot_tools         | `da08833a5dfea59cd32248f0ed27a60cfd310e40`              |
| Host build tools    | CMake 4.4.3, Ninja 1.13.2, Xcode 26.6, macOS SDK 26.5   |

The [manifest](../../packages/flax_engine_v8/native/v8.json) records source archive
checksums, commits and GN arguments. Production builds fetch exact Git commits, verify
the full adapter diff, and use V8 DEPS for transitive source and binary tool pins,
including Clang 23, Rust and GN. Source archives were checksum-verified during the
prototype; they are not the production builder's fetch mechanism.

V8 is a release monolith with embedded snapshot, Intl disabled, system libc++, and
pointer compression/sandbox disabled. It links with pinned LLD and the Rust archives
listed by the upstream snapshot link graph. These settings do not provide a security
isolation boundary. Ordinary checks and asset hooks fetch/build no engine.

## Compatibility gate and changes

The ignored prototype compiled Microsoft's complete modern JSI ABI wrapper against
Flax's existing JSI headers and linked the real shared bridge. The legacy adapter path
had broader API drift and a thread-local Isolate assumption; it is not used. No JSI
header or Hermes revision was changed.

The [localized patch](../../packages/flax_engine_v8/native/v8-jsi.patch) updates
External pointer tags, property receivers and Promise event names; enters isolate scopes
for creation, operations, persistent-reference release and destruction; owns the
ArrayBuffer allocator; and returns true after a completed microtask checkpoint. It also
pumps bounded foreground work only during host entry and cancels queued work before
Isolate teardown. No background task calls Dart. Platform lifetime spans all runtimes.

The initial gate passed native ABI tests, 28 Dart runtime/loop tests, migrated-thread
release/destruction, multiple runtime recreation, and a diagnostic optimized-code check.
Integration then added a deterministic queue-lifetime test and a packaged same-process
Hermes/V8 test. Release builds export only `flax_v8_get_api`.

The shared Flutter GC tests now make allocation pressure observable rather than
allocating unused arrays that an optimizing engine may eliminate. Weak-reference,
Finalizer, handle-count and cleanup assertions remain unchanged for both engines. Staged
framework tests preserve the generated bindings' canonical fixture type identities; all
engine-independent JS bundles are reused without rewriting.

## Commands

```sh
dart run melos run native:build:v8
dart run melos run check:runtime:v8
dart run melos run ui:test:v8
dart run melos run check:ui:v8
dart run melos run check:engines
```

The corresponding build/runtime/UI/example Dart tools accept `--engine=hermes|v8`.
`check:engines` requires both prepared engine assets. V8 example staging installs
`com.apple.security.cs.allow-jit` in debug/profile and release entitlements. Release
verification launches a relocated app after removing source packages and loader
variables. `FLAX_VERIFY_V8_JIT=1` records actual machine-code generation for an internal
warmup function without exposing V8 intrinsics or changing JIT flags.

## Acceptance evidence

- V8 native ABI and adapter lifecycle: 2/2 CTest tests passed, including serialized
  migration, queued/delayed foreground cancellation and runtime recreation.
- Shared Dart runtime and loop contracts: 28/28 passed for each engine.
- Both engines passed independent Dart JIT consumers, missing/corrupt asset rejection,
  and relocated AOT consumers after source removal.
- Same-process Hermes/V8 creation, foreign-object rejection, nested engine calls and
  interleaved teardown/recreation: passed, 20 iterations.
- Shared Flutter framework contract: 201/201 passed for each engine, including the
  observable-allocation GC and real Finalizer assertions.
- Both engines passed 7 example tests, 3 real embedded macOS integration tests,
  standalone source-package integration and relocated release UI. V8 release emitted
  actual machine-code events; a separate normal process supplied the performance data.
- `dart run melos run check` passed: generated bindings/tests, JS behavior, analysis,
  formatting, type checks, documentation checks and toolchain-only CMake configuration.
- A subsequent pinned V8 build passed with Ninja reporting no work; final asset and
  patch checksums matched the manifest. Native asset export/dependency checks passed.
- The explicit macOS 26 arm64 V8 CI job is defined with pinned host tools and an
  input-keyed source/build cache. The hosted
  [runner image](https://github.com/actions/runner-images/blob/main/images/macos/macos-26-arm64-Readme.md)
  lists the selected host tools. Remote CI has not been run; no commit/push occurred.

Local logs are ignored under `.local/v8-compat/`; reproducible measurement artifacts are
written to `build/engine-comparison.json`, `build/standalone/verification.json`, and
`build/standalone-v8/verification.json`. These outputs are not committed assets.

## Measurements

These are historical integration measurements. Performance sampling has since moved to
the [independent benchmark suite](../../benchmarks/engines/README.md); `check:engines`
now performs coexistence checks only.

The original `check:engines` measurement run compared five fresh Dart AOT processes per
engine, with 20 warmed samples per process. It reported runtime creation, evaluation of
the bundled JS runtime, 10,000 synchronous host calls, total process RSS with one/four
runtimes, and dylib size. Cold means first engine use in a fresh process, not an OS
disk-cache flush. Warm bundle results include each engine's normal source-compilation
caching. RSS includes Dart, loaded code and allocator high-water state; it is not an
isolated JS heap measurement.

The relocated standalone integration repeats the same application scenario and records
first/second-pass frame build/raster medians and process RSS. It is one local scenario
per engine, with 71 first-pass frames and 70 repeated-pass frames; it is not a broad UI
benchmark or a claim of statistical significance. V8's JIT proof runs in a separate
process, so these frame measurements exclude the diagnostic warmup workload.

Host: macOS 26.6.2 (25G83), arm64, Flutter 3.47.2. The minimum deployment target is
15.0; this run did not execute on macOS 15 itself. Release validation used local ad-hoc
signatures with app sandbox and V8 `allow-jit`; Developer ID distribution and
notarization were outside scope. The production V8 app passed
`codesign --verify --deep --strict` and its signed JIT entitlement was inspected.

| Measurement                    | Hermes first/cold | Hermes warm | V8 first/cold | V8 warm |
| ------------------------------ | ----------------: | ----------: | ------------: | ------: |
| Runtime creation (ms)          |             1.494 |       0.200 |         3.412 |   0.304 |
| Runtime bundle evaluation (ms) |             1.856 |       1.476 |         0.469 |   0.044 |
| 10,000 bridge calls (ms)       |             9.003 |       8.907 |        13.179 |  12.789 |
| One-runtime process RSS (MiB)  |            15.766 |      48.188 |        21.297 |  37.656 |
| Four-runtime process RSS (MiB) |            17.266 |      49.406 |        24.703 |  38.609 |
| UI frame build median (µs)     |               584 |         550 |           358 |     351 |
| UI frame raster median (µs)    |               689 |         567 |           359 |     281 |

Prepared dylib sizes: Hermes 4.67 MiB; V8 49.84 MiB. Production standalone app sizes:
Hermes 24.08 MiB; V8 52.61 MiB.

V8 wins the repeated-bundle workload here, while Hermes has lower creation and bridge
cost and a smaller asset. The different first/warm RSS patterns include compilation, GC
and allocator retention. These measurements do not justify changing the default.

## Remaining limits

Remote CI has not been executed because no commit or push was requested. This is local
experimental acceptance, not macOS 15 execution evidence, cross-platform support,
Developer ID distribution, notarization or a public release. All local acceptance checks
passed.
