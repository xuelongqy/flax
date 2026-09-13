# Body streams, abort retention and frozen buffer transfer

Status: complete; validation completed locally on macOS arm64.

## Goal and scope

Repair empty Body chunks, unintended ordinary-buffer detachment, reuse of disturbed
streams, premature collection of dependent abort signals, and frozen bridge buffer
transfer. Keep UI protocol 12, native ABI 2, dependencies and application ownership.

## Changes

- Preserve input stream identity. Share one pinned, read-only disturbed-state adapter
  for acceptance, consumption and cloning. Validate Request before pipe transfer.
- Copy each accumulated Body chunk, skip empty chunks and retain native streaming
  backpressure. Upload empties issue no write RPC; transport empties continue reading.
- Retain dependent signals only while they have abort listeners. Mark affected states
  before source/dependent notification; remove holds after listener removal or abort.
- Capture ArrayBuffer at runtime creation, allocate engine-owned storage and bulk-copy
  bytes. Both engines use the same path; the Hermes transfer patch is unchanged.

## Results and validation

Correct assertions failed before the fix: Node timed out reading empty chunks, changed
stream identity, accepted consumed input and lost a listened-to signal during GC. The
real Hermes runtime rejected a frozen copied buffer with
`Cannot modify external buffer`. The original review also observed the lost signal under
actual Hermes GC. No forced cleanup function substitutes for GC observation.

- `check` passed: 26 generator tests, 50 Node tests, analysis, formatting, links,
  reproducible bindings/host scripts and toolchain-only native configuration.
- Both engines passed 16 focused host groups, 39 runtime tests, 217 framework tests,
  seven example tests, real GC, HTTP/HTTPS, Axios and frozen-buffer BYOB. Final host
  teardown leaves zero owned JS handles.
- Both engines passed outside-repository JIT/AOT, standalone source/tarball
  installation, macOS standalone integration and relocated release UI, with original
  source removed.
- Hermes embedded integration and production release passed. Initial desktop attempts
  failed to foreground the app; inspecting a running test also changed Flutter's
  SemanticsHandle count. Those attempts remain recorded. A fresh serial run passed the
  unchanged assertions without accessibility inspection.
- The V8 full command completed everything before embedded desktop integration, then was
  interrupted to avoid simultaneous GUI tests. Its unchanged embedded integration and
  production release passed on a serial run. Both UI validation chains are now complete;
  previously passed runtime/package checks were not repeated.

## Cost and boundaries

- Empty upload fixture: six chunks, two nonempty bytes, exactly two write RPCs and two
  bytes copied from JS. Source buffers remain attached.
- Complete Body reads add one N-byte JS copy before the existing N-byte assembly. The
  reused-buffer case preserves all three observed bytes. Streaming paths do not
  accumulate the whole body; existing slow-consumer checks continue to bound reads.
- Base IIFE: 257,848 bytes (previously 257,362). Fetch IIFE: 82,575 bytes (previously
  83,098). Signal retention adds no global registry or polling.
- GC observation requires real JS collection across job boundaries. The fixture keeps
  its listener closure outside the signal-creation scope so Hermes cannot retain an
  otherwise dead signal through the test's own closure environment.

## Reproduction and handoff

Run `dart run melos run host:generate`, then `check`, `check:ui` and `check:ui:v8`. The
latter two already include native/runtime and outside-repository JIT/AOT checks. Node GC
tests run through `js:test` with `--expose-gc`. Temporary logs and source fingerprints
live in ignored `.local/host-fixes/`.

Validation logs are `check-final.log`, `check-ui.log`, `check-ui-v8.log`,
`hermes-integration-serial.log`, `hermes-release.log` and `v8-ui-finish.log` in the
local repair directory. Both embedded integration receipts are copied there. Standalone
receipts are `build/standalone/verification.json` and
`build/standalone-v8/verification.json`; both record successful relocated UI assertions
with source removed before launch. These are local artifacts, not published releases.

Source hashes preserve the pre-existing engine-boundary and benchmark work. Three
existing Markdown files needed formatting only for the workspace check. Validation tools
did not rewrite implementation sources. Bundles, assets, consumers, debug tools and
application outputs remain ignored.

See the [host contract](../architecture/host.md) for the fixed Streams adapter boundary
and copy ownership. No remote CI, commit, push or publication is part of this task.
