# Core browser tools and Three.js

Core now installs `window` as the same session global as `globalThis` and `self`.
`document.defaultView` shares that identity. The APIs are present in Core-only sessions,
Canvas 2D sessions and WebGPU sessions; no additional plugin is required.

## Implemented behavior

- User Timing: `performance.mark`, `measure`, `getEntries`, `getEntriesByName`,
  `getEntriesByType`, `clearMarks` and `clearMeasures`, with the existing monotonic
  `now` and epoch `timeOrigin`. Entry/mark/measure constructors and identities are
  exposed. Mark/measure detail is structured-cloned using the existing dependency.
- `PerformanceObserver`: mark/measure observation, buffered single-type observation,
  entry-list queries, `takeRecords` and `disconnect`. Delivery is asynchronous through
  the existing host task checkpoint. Session close clears entries and queued delivery.
- `crypto.getRandomValues`: genuine integer TypedArray views, including clamped and
  BigInt arrays, original view identity, exact byte ranges and the 65,536-byte limit.
  The host lazily uses Dart `Random.secure()` and returns one bulk buffer per request.
  Caller storage never crosses into Dart. `randomUUID` sets version-4 and variant bits.
- `window.location` exposes read-only session address fields from `fetchBaseUrl`, or
  `about:blank` without a base. The canvas document has no cookie store: reads return an
  empty string and writes throw `NotSupportedError`.

The last item is needed by existing Axios consumers: the new window alias selects its
browser environment branch, which reads `window.location.href` at module evaluation and
consults document cookies on same-origin requests. Both a JS regression and the existing
native Axios Fetch suite now pass without adding navigation or cookie storage.

A native lifecycle check initially caught three owned random-buffer references left at
disposal. Both random bytes and synchronous image encoding now use Core's existing
host-result checkpoint to release their returned Dart references. The final host suite
confirms zero remaining owned handles; it does not depend on eventual Dart GC.

## Validation

The [receipt](../../validation/core-browser-tools-macos.json) records the final sources,
versions, native results and pixel comparison. No dependency or engine update was
needed. Original source changes and the pre-change snapshot are preserved locally.
Maintained generation pruned six stale Canvas declaration files; the original Canvas
sources are unchanged and the archived files remain recoverable.

| Gate                                            | Result                                                 |
| ----------------------------------------------- | ------------------------------------------------------ |
| Core JS including Fetch                         | 134 passed                                             |
| Canvas / WebGPU conversion / example metrics JS | 35 / 6 / 2 passed                                      |
| Core native host, Fetch, Axios and lifecycle    | 22 passed                                              |
| Core native canvas                              | 3 passed                                               |
| Canvas native UI and bounded WPT                | 395 passed                                             |
| Maintained V8 runtime and joint GC              | 58 passed                                              |
| Scoped TypeScript / Dart analysis               | No errors or warnings; three existing Dart style infos |
| Generated host / public declarations            | Reproducible                                           |

The macOS arm64 acceptance application runs one Core-only session and three Dawn/Metal
WebGPU sessions, including a session without Canvas 2D. It completes 360 ordinary render
frames. All six native resource counters return to zero after each session.

Three.js 0.186.1 passes textured glTF/GLB loading, three light types, PCF shadows, TSL
inversion, Bloom, skeletal and Morph animation, Meshopt decoding and textured export.
The advanced workload creates its canvas through `window.document`, labels User Timing
with `crypto.randomUUID`, and measures the real load/render/export work. The shared host
tools fixture also verifies observer delivery and integer random views in both Flax and
isolated Edge 156.0.4314.50.

At 192 x 192, 25 advanced captures (921,600 RGBA pixels) match Edge exactly. Skeleton
and Morph poses change 4,014 and 4,194 pixels respectively; restored poses, Meshopt and
export round trips have zero pixel error. The existing animation warmup is unchanged.
The GPU-only session continues to skip textured export because GLTFExporter requires a
Canvas 2D context for image encoding.

## Scope

This is macOS arm64 development-profile acceptance. User Timing does not expose browser
resource/navigation/paint/long-task telemetry; observers advertise only mark and
measure. `navigationId` is null. Crypto does not include SubtleCrypto. The global window
alias adds no HTML tree, CSS layout, browser navigation or cookie persistence. No full
WebGPU CTS, full Three.js/glTF conformance, other-platform acceptance, or new
FPS/display-latency benchmark is claimed. No commit, push or publication was performed.

The implementation follows [User Timing](https://w3c.github.io/user-timing/),
[Performance Timeline](https://w3c.github.io/performance-timeline/) and
[Web Crypto](https://www.w3.org/TR/webcrypto/), with native Edge parameter/error probes
for the supported surface. The secure source is Dart's
[Random.secure](https://api.dart.dev/dart-math/Random/Random.secure.html).
