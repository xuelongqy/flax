# Dedicated Worker acceptance

Core uses `Isolate.spawn`, which places workers in the parent's Dart isolate group. Each
owns a detached V8 Isolate, independent heap and explicit bridge handles. The native
serializer and BackingStores carry JS payloads; Dart sends wakeups and control values.
There is no Node dependency or main-thread decoder fallback. See the
[contract](../../docs/architecture/dedicated-workers.md) and
[acceptance record](../../docs/tasks/dedicated-workers.md).

The [compatibility follow-up](compatibility-results.md) records application resource
loading, rejected-Promise events and real KTX2Loader GPU acceptance.

The [API completion receipt](api-completion-results.md) records the final profile-2
scope, 672 unique tests, Release/AOT API checks, application acceptance and
[final benchmark JSON](results-macos-api-completion.json). Historical measurements below
retain their original scope.

The [Release follow-up](release-results.md) investigates the large-buffer delay,
compares the existing WebGPU optimization, and records the accepted external-memory
request coalescing, including sustained latency and memory tradeoffs. The Debug JSON
below preserves the initial result rather than overwriting that evidence.

## Reproduction

Use the maintained Flutter SDK matching the checkout's generated bindings: Flutter
3.47.9, Dart 3.13.7 and V8 15.4.80.15. `.local/flutter-sdk` may point at that maintained
checkout; it must not resolve to the older frozen 3.47.6 acceptance SDK. Build the
ordinary Debug/Release targets from the locked sources, including Worker profile 2,
shared images and macOS WebGPU interop. Historical receipts above retain their original
3.47.6 toolchain and do not validate a newly rebased checkout.

```sh
mkdir -p "$PWD/.local/tmp"
export TMPDIR="$PWD/.local/tmp" TMP="$PWD/.local/tmp" TEMP="$PWD/.local/tmp"
export PATH="$PWD/.local/flutter-sdk/bin:$PATH"
flutter --local-engine-src-path="$PWD/.local/flutter-sdk/engine/src" \
  --local-engine=flax_mac_debug_arm64 --local-engine-host=flax_mac_debug_arm64 \
  test --no-pub --concurrency=1 --reporter expanded \
  packages/flax/test/ui/workers_test.dart
dart run melos run check:runtime
flutter --local-engine-src-path="$PWD/.local/flutter-sdk/engine/src" \
  --local-engine=flax_mac_debug_arm64 --local-engine-host=flax_mac_debug_arm64 \
  test --no-pub --reporter expanded \
  experiments/dedicated_workers/benchmark_test.dart
```

The Worker tests use the normal generated UI module inventory, prepared by the UI test
tooling. The benchmark writes [results-macos.json](results-macos.json). Run it without
simultaneous engine builds or application tests when comparing latency.

Three.js acceptance uses the WebGPU harness with `--mode debug` or the default Release
mode and the corresponding ordinary maintained engine. The runner bundles ESM so
DRACOLoader retains `import.meta.url` and serves decoder assets from the pinned Three.js
package. The fixture generator needs development-only `draco3d`. The maintained
framework and tester both export the shared image operations; no local export-list patch
or separate fenced engine is required. See the current
[package reproduction guide](../../packages/flax_webgpu/README.md#run-on-macos).

For a real Release/AOT benchmark, build the matching maintained Release engine first,
then set `FLAX_MACOS_TEAM` to an existing configured Apple development team and run:

```sh
export FLAX_MACOS_TEAM="${FLAX_MACOS_TEAM:?Set an existing Apple development team ID first}"
node tool/ui_bundle.mjs --package flax
python3 experiments/dedicated_workers/run_macos.py \
  --flutter-root "$PWD/.local/flutter-sdk" --mode release \
  --output "$PWD/.local/worker-release.json"
```

This creates a disposable macOS app, stages Core and the example-support dependency
closure with the existing package copier, embeds the same benchmark, asserts its mode
and checks native Worker retirement. The host explicitly approves only `flax.wasm` for
the five checked-in data/Blob API cases. Approval uses the OS secure storage; the normal
example engine configuration signs the app and nested engine libraries and adds its
private Keychain entitlement. Follow the
[Apple host setup](../../packages/flax_secure_storage/README.md#apple-host-setup) before
running; there is no memory fallback. It does not label a JIT Flutter tester as an AOT
application. The 200-transfer phase also observes a 5 ms main timer through a 30 ms tail
after the last reply.

## Measurements

The checked-in JSON is an observed macOS arm64 Debug run on Apple M2 Max, not a Release
or browser comparison. Creation includes Blob loading, Dart isolate startup, V8 startup,
host bootstrap and a ready message. The parent session is already running. Repeated
creation uses ten new workers; message timings reuse one worker. Copy and transfer use
the same 16 MiB contents and twenty round trips each, including the return path. The
transfer buffer is reused after ownership returns.

Timing values and the responsiveness comparison are recorded in the JSON. A lower copy
median in a run is possible: scheduler/checkpoint latency and Debug overhead can
dominate the eliminated byte copies. Native transfer avoids JS → Dart → Dart → JS
payload copies, but does not promise a lower end-to-end latency.

| Operation                    | Samples | Median (ms) | p95 (ms) |
| ---------------------------- | ------: | ----------: | -------: |
| First Worker creation        |       1 |     112.989 |        — |
| Repeated new Worker creation |      10 |      34.744 |   36.779 |
| Small message round trip     |     100 |       0.178 |    0.424 |
| 16 MiB copy round trip       |      20 |      49.372 |  147.852 |
| 16 MiB transfer round trip   |      20 |      46.402 |   92.707 |

Responsiveness measures a 5 ms main-session timer around the same 200 ms loop, first in
a worker and then on the main runtime. It is a timer-delay observation, not a frame rate
claim. DRACO uses a tiny correctness fixture; its creation/reuse difference is not a
throughput benchmark for large production models.

The worker computation lasted 200.649 ms and the main computation 200.030 ms. Maximum
main timer gaps were 46.969 ms with background work and 205.290 ms with main-runtime
work (39 versus 12 timer ticks in their observation windows). Background work still
delayed timers, so this is not evidence of a stable 60 FPS budget.

The final app's three DRACO cycles measured 72.437/97.901/46.446 ms for cold decoding
and 0.487/0.319/0.336 ms for a second input in the same worker. Input buffers were
detached and geometry topology/bounds checked on every task. KTX2Loader was not
validated.

## Carrier prototype

`carrier/` preserves the initial minimal instrumentation and its two passing tests. They
tested background JS, asynchronous Wasm, Dart yields, native port messages, interruption
and explicit native destruction. That instrumentation requires a probe engine and is not
exported by production builds. Current reproduction uses the production Worker tests
above. Ordinary background `FlaxEngine.createRuntime()` is still rejected; no Flutter UI
isolate check was removed.
