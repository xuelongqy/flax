# Session host plugins, basic APIs and Fetch

## Scope

Add session plugin registration, the default host environment, optional Fetch and bulk
binary ABI 2. Preserve UI protocol 12 and existing application disposal rules. Verify
macOS arm64 Hermes and V8 with local transport and outside-repository consumers.

## Evidence

Completed locally on macOS arm64 with Flutter 3.47.2 / Dart 3.13.2. No remote CI run,
commit, push or publication was performed.

- `check`, `check:ui` and `check:ui:v8` passed. The initial framework baseline was 201
  tests; the final Hermes and V8 framework suites pass 209 tests, including eight host
  groups. Existing generator, State, signals, navigation and resource checks remain.
- Both engines pass native ABI 2 and 29 Dart runtime tests, outside-repository JIT/AOT
  loading, byte-view offsets, copy isolation and actual buffer/view detachment. Hermes
  uses the checked-in, checksum-verified patch; V8 uses its native transfer.
- Node, Hermes and V8 execute the same 36 cases from four complete pinned WPT Headers
  files. Targeted tests additionally cover URL/encoding, timers, microtasks,
  cancellation, local HTTP/HTTPS, redirects, multipart, streaming, BYOB and unchanged
  Axios Fetch adapter behavior. Strict application types compile without DOM or Node
  type libraries.
- A final close-race regression verifies that session close wins over a transport result
  already queued for JS delivery. After that fix, the full Hermes framework suite and
  both outside-repository standalone validations were rerun; the full V8 UI run also
  includes the regression. Unchanged native checks were not repeated separately.
- Both standalone consumers install copied Dart packages and npm tarballs, run macOS
  integration, build normal release applications, then execute separate release UI test
  artifacts after deleting their source/build directories. The relocated artifacts
  report completed assertions and no failures. V8 machine-code execution is verified in
  a separate process from the measurement run.
- Locked dependency installation, host/FFI/binding regeneration, static analysis,
  formatting and documentation checks pass. Source fingerprint comparison found no
  unintended functional source rewrites or deletions. Unrelated concurrent benchmark
  edits remain untouched; generated native and application assets remain ignored.

Local logs are in `.local/host-plugins/`. The final release receipts are
`build/standalone/verification.json` and `build/standalone-v8/verification.json`; these
are ignored verification artifacts, not published releases.

The subsequent [Body, abort and buffer repair](host-body-fixes.md) updates stream
ownership/consumption and conditional signal retention. The figures below record this
original delivery, not the repaired implementation.

## Cost observations

| Measurement                            | Observed result                                   |
| -------------------------------------- | ------------------------------------------------- |
| Base host IIFE                         | 257,362 bytes; embedded Dart source 261,236 bytes |
| Fetch IIFE                             | 83,098 bytes; embedded Dart source 84,674 bytes   |
| Standalone / embedded application IIFE | 107,982 / 100,400 bytes                           |
| Prepared standalone production app     | Hermes 25,922,896 bytes; V8 55,840,576 bytes      |
| Final normal release build             | Hermes 31,835 ms; V8 31,336 ms                    |
| Complete standalone verification       | Hermes 132,604 ms; V8 158,374 ms                  |

The base environment adds one owned JS handle and one timeOrigin host call per session.
The existing construction fixture retains its separate UI handle budget, six
subscriptions and two Text rebuilds; final disposal leaves zero handles. Host APIs do
not add UI subscriptions.

The mixed transport fixture observes about 150.6 KB uploaded in 22 bulk reads and 216.3
KB downloaded in 17 bulk writes; random multipart boundaries account for small byte
differences. Receiving response headers causes no body read RPC or body copy. Five 1 KB
BYOB reads require at most five read RPCs and five 64 KB bridge chunks. Slow consumer
checks distinguish this bounded bridge demand from TCP buffering and stream tee
behavior. These counters exclude engine-internal transfer copies and are not a zero-copy
or hardware-independent performance claim.

## Reproduction

- `dart run melos run host:generate`
- `dart run melos run check`
- `dart run melos run check:ui`
- `dart run melos run check:ui:v8`

## Limits and next steps

Read the [host contract](../architecture/host.md) for browser differences, Axios
FormData usage, body buffering, and supported scopes. Fetch does not manage cookies,
authentication, a cache or browser CORS. Applications must consume or cancel response
bodies; garbage collection is not request cancellation. Abort rejects immediately during
DNS/connection creation, but per-request transport cancellation waits for Dart's request
handle; session close also force-closes its HttpClient.

Full browser conformance and additional host plugins are outside this delivery. Future
compatibility work should extend pinned standard tests around concrete application
requirements. The plugin registration boundary is ready for other session capabilities;
app-specific Dart APIs can continue using generated bindings.
