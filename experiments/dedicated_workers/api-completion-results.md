# Dedicated Worker API completion

The final macOS arm64 implementation uses Worker extension profile 2 and the generated
Core host containing 417471 JavaScript bytes. The matching framework is Flutter 3.47.6
with Dart 3.13.5 and V8 15.4.80.15. Validation ran on macOS 27.0.1 using Xcode 27.2,
macOS SDK 27.2 and the Metal toolchain. No commit, push or publication was performed.

## Delivered scope

Native structured clone now serves both messaging and global `structuredClone`, with
Blob/File canonical metadata, DOMException, compiled WebAssembly.Module cloning and
resizable ArrayBuffer transfer, including fixed/length-tracking views. Transfer
validation remains atomic. Modules are cloneable, not transferable; unsupported platform
objects fail explicitly.

Workers provide FileReaderSync, hardwareConcurrency, branded scope/Navigator/Location
prototypes and ordinary global calls. They reuse Core console, events, encoding,
Blob/File/FileReader, URL, timers, Streams, Fetch, performance/User Timing/observers and
secure random APIs. Errors preserve available script diagnostics; rejected-Promise
events retain original Promise/reason identity. HTTP/data/application/file loading
retains the existing transports, import maps and owning Session's root/symlink policy.
Live parent and Worker-owned Blob resources, module dependencies, MIME/range responses,
per-request cancellation and response-body abort reasons use the existing broker.
Classic importScripts accepts data and Worker-owned Blob URLs. Nested Workers share that
carrier and await descendant retirement. Native Wasm streaming validates status, MIME
and body ownership, propagates reader errors and feeds chunks to V8 without a full-body
compilation substitute.

Detached close/terminate cancels Dart services, awaits descendants and destroys the V8
isolate before releasing Dart wrappers. Teardown never invokes application stream
`cancel`/`finally` hooks. Main/shared-session host close still performs JavaScript
reader cancellation. Main navigator remains extensible for the WebGPU plugin; Worker
navigator remains frozen.

## Acceptance

| Suite                     | Unique tests |
| ------------------------- | -----------: |
| Worker native integration |           17 |
| Maintained runtime/GC     |           59 |
| Host UI                   |           22 |
| Core Canvas UI            |            3 |
| Canvas framework/WPT      |          395 |
| Core JavaScript           |          135 |
| Canvas JavaScript         |           35 |
| WebGPU JavaScript         |            6 |
| Total                     |          672 |

The Release/AOT run at `2026-10-31T03:05:38.747124Z` also passes the five API cases
extracted from the maintained Worker test source. They repeat existing cases and are not
five additional unit tests. The
[final benchmark JSON](results-macos-api-completion.json) reports zero native Worker
channels and runtimes after close.

The actual Release WebGPU/Three.js application passes 90 check records and renders 360
frames across three create/dispose cycles. It performs six real DRACO decodes and twelve
KTX2 ETC1S/UASTC decodes, including compressed GPU uploads and pixel readback. All four
GPU retirement records, including the Core-only Session, end with `[0, 0, 0, 0, 0, 0]`.
These application records, frames and decodes are separate from the 672 tests. The local
final application receipt is `.local/worker-api-evidence/release-application.json`.

Scoped Dart/TypeScript analysis, Worker declarations, FFI/host/public-type/module
generation consistency and documentation checks pass. Dead-loop cancellation sources
exercise direct/natural/nested/Session shutdown and `close(); while(true)` followed by
parent termination under an external process-group watchdog. Native counts return to
baseline; the tests do not substitute JavaScript counters.

## Final Release observations

These values come only from the final JSON. They describe one run, not a new matched A/B
comparison or an additional performance improvement.

| Observation                                           |               Samples |            Milliseconds |
| ----------------------------------------------------- | --------------------: | ----------------------: |
| First Worker startup                                  |                     1 |                  57.195 |
| Repeated new Worker startup, median                   |                    10 |                  30.545 |
| Small message round trip, median                      |                   100 |                   0.063 |
| 16 MiB copy round trip, median                        |                    20 |                   5.553 |
| 16 MiB transfer round trip, median / maximum          |                    20 |          0.096 / 26.363 |
| Sustained transfer round trip, median / p99 / maximum |                   200 | 0.082 / 27.932 / 45.874 |
| Sustained transfers including final 30 ms wait        |                   200 |                 124.243 |
| Sustained phase main-timer maximum gap                | 80 timer observations |                  46.672 |

GC tail pauses remain. These observations do not establish a frame budget, a maximum
pause guarantee or production decoder throughput. Earlier Debug, Release comparison and
compatibility receipts remain unchanged.

## Shutdown source check and boundaries

The pinned V8 source is `e959d47215186f24e182a0503a52374c96569722`:
`src/execution/isolate.cc:5142` deletes isolate compile jobs;
`src/wasm/wasm-engine.cc:1149` removes those jobs; and
`src/wasm/module-compiler.cc:2280` cancels/waits for background work and notifies the
streaming decoder. Flax's native runtime destructor retires channels, resets modules,
detaches the global and disposes the independent isolate. No JavaScript cleanup pass is
needed to reclaim pending Wasm compilation.

MessageChannel/MessagePort need independent endpoint ownership, queue migration and
atomic mixed transfers. Transferable Streams additionally need backpressure,
cancellation and cross-realm errors. Synchronous imports beyond data and Worker-owned
Blob URLs need a blocking loader protocol with interruption/deadlock handling. Full
browser origin/CORS/credentials behavior is not emulated. These larger changes remain
unsupported, as do shared memory, graphics transfer, SharedWorker and Service Worker.
Mobile platforms were not validated.

Implementation entry points are the
[JS host](../../packages/flax/js/src/host/workers.ts),
[public Worker types](../../packages/flax/js/src/host/worker.ts),
[Dart carrier](../../packages/flax/lib/src/ui/workers.dart),
[native integration tests](../../packages/flax/test/ui/workers_test.dart) and
[Release harness](run_macos.py). Engine changes live in the maintained Flutter fork at
`flutter/flax/native/v8-jsi/src/jsi_abi/workers.inc` and `jsi_abi_v8.cpp`.
