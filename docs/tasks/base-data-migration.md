# Base data and Streams migration

Status: complete; verified locally on macOS arm64 with Hermes and V8.

## Scope and changes

Blob, File, FormData, Web Streams and encoding streams now belong to the base host.
Fetch installs only fetch, Headers, Request and Response and captures the existing base
constructors. HTTP Body adaptation and the pinned disturbed-state adapter remain in
Fetch. UI protocol 12 and native ABI 2 are unchanged.

The runtime package owns web-streams-polyfill 4.3.0 and its license notice. Host
bundling rejects duplicate base implementations in the Fetch IIFE. Base declarations
live in @flax/core/host; old Fetch type re-exports were removed without aliases. No new
packages, versions, capabilities or network resources were introduced.

## Validation

The existing 12 Node host groups passed before migration. The updated 52 Node tests and
17 real Hermes host groups pass, including base-only BYOB, constructor identity across
plugin installation, Body regressions, HTTP/HTTPS and cancellation. Final tracked host
handles are zero after session disposal.

- Full `check` passed: generator tests, 52 Node tests, type checks, analysis,
  formatting, docs, reproducible generated assets and toolchain-only configuration.
- Hermes passed native/runtime and outside-repository JIT/AOT, 218 framework tests,
  seven example tests, embedded macOS integration and release. Its UI command initially
  stopped at a test compile error; after correcting it, the remaining official UI steps
  completed without repeating the native/runtime stages.
- Both engines passed standalone package/tarball consumption, macOS integration and
  relocated release assertions after deleting the original source. V8 additionally
  observed JIT in a separate process.
- V8 passed native/runtime, outside-repository JIT/AOT, 218 framework tests and seven
  example tests, embedded macOS integration and production release.
- Targeted Hermes and Node checks also cover base-only demand-driven reads, cancellation
  and error identity. GC and prior Body regressions remain real tests.

## Cost

Base IIFE grew from 257,848 to 324,631 bytes; Fetch shrank from 82,575 to 16,107 bytes.
Combined size changed from 340,423 to 340,738 bytes (+315). Applications without Fetch
load the additional base data and Streams implementation. This is a capability and
ownership change, not a claim of faster startup. Fetch has no second Streams bundle.

Single script-evaluation observations in the framework fixture (microseconds): Hermes
base-only 38,896; with Fetch, base 48,449 and Fetch 8,657. V8 base-only 34,396; with
Fetch, base 26,045 and Fetch 493. These are individual test observations, not paired
benchmarks or engine performance comparisons. The fixture has 37 handles with base only
and 38 with Fetch, including its existing UI objects. Base installation calls timeOrigin
once; Fetch additionally reads baseUrl once. Session disposal leaves zero handles.

Standalone production sizes remain 25,923,104 bytes (Hermes) and 55,857,152 bytes (V8).
Normal release builds in the external consumer took 33,894 ms and 32,843 ms
respectively. These measurements do not establish startup improvements.

## Reproduction and handoff

Use host:generate, check, check:ui and check:ui:v8. Desktop integrations run serially.
Temporary source fingerprints and logs are in .local/base-data-migration. The final
static log is check-complete.log; Hermes evidence combines check-ui.log (runtime stages)
and hermes-ui-resume.log (remaining UI stages); V8 completed check-ui-v8.log. Targeted
final checks are in targeted-final.log and base-node-final.log. Production relocation
receipts are build/standalone/verification.json and
build/standalone-v8/verification.json.

Source fingerprints found only intended migration, documentation and test changes; no
files were removed and generated assets are reproducible. Build outputs remain ignored.
No remote CI, commit, push or publication was performed.

See the [host contract](../architecture/host.md). WebSocket and additional event types
remain future work.
