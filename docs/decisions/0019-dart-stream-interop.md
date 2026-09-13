# ADR 0019: Dart Stream Interop

Status: superseded by [ADR 0020](0020-ui-protocol-20.md)

Date: 2026-09-12

## Context

UI protocol 18 already converts Dart `Future` results to JavaScript Promises (and the
reverse for Future-returning callbacks) using the shared typed conversion path. Many
Flutter APIs expose `Stream` (for example listenable event sequences) that remain
generation rejects today. Applications need a small, dart:async-shaped bridge comparable
to Future, without inventing a second streaming stack beside the host Fetch Web Streams.

Native ABI 2 is unrelated to this surface: Stream wrappers live in the UI binding and
session host path, not in the C function table.

## Decision

Add **one-way Dart `Stream` → JavaScript subscription** as base dart:async interop,
mirroring the Future direction that applications already rely on for results.

### Minimum scope

- A Dart `Stream<T>` (or `Stream<T>?`) that appears in a supported result position
  (getter, method, Future completion value, or other already-supported return path)
  becomes a JavaScript **`Stream<T>`** (exported name; not `DartStream`, and not a Web
  `ReadableStream`) with Dart-aligned subscription semantics:
  - `listen(onData, onError?, onDone?)`, or `listen(onData, options?)` where options may
    carry `onError` / `onDone` (and optionally `cancelOnError` when implemented); and
  - a **`StreamSubscription`** handle with at least `cancel()`.
- Prefer these Flutter/Dart-facing names in generated TypeScript so application code
  reads like Dart. Do not prefix them with `Dart` solely for disambiguation from
  collections (`DartList` / `DartMap` remain collection views; streams use `Stream`).
- Each event value uses the **existing** typed conversion for `T` (scalars, canonical
  enums, and already-selected object/reference shapes). Unsupported element types fail
  conversion for that event (or fail generation when the static `T` is unsupported),
  consistent with Future and collection rules.
- Session **close** must drop active listeners, ignore further events, and release
  bridge holdings for those subscriptions (same determinism expectation as pending
  Futures on close).

### Explicitly out of scope (follow-ups, not this ADR)

- JavaScript → Dart `Stream` (constructing or accepting a Dart Stream from JS).
- Constructing `StreamController` (or similar) from JavaScript.
- Nested `Stream` / `Stream<Stream<…>>` and `Stream`-valued collection elements beyond
  what generation already rejects for nested Futures unless separately decided.
- Full pause/resume/buffering control parity with dart:async `StreamSubscription`
  (cancel-only is enough for the first cut).

### Distinction from Fetch ReadableStream

Host Fetch and the base environment already expose **Web Streams** (`ReadableStream` and
related types) for HTTP bodies. Those remain a host/plugin concern. This ADR is only
**Dart `dart:async` Stream** returned through generated UI / interop bindings. Do not
route Flutter/Dart Streams through `ReadableStream`, and do not teach Fetch to mean
dart:async.

### Protocol and ABI

- **Native ABI 2: unchanged.**
- **UI protocol: bump required when this ships.** Stream results and subscription
  metadata are new binding-module shapes. Protocol 18 modules must keep rejecting Stream
  positions. Implementation should land as **UI protocol 19** (or the next free protocol
  number if 19 is taken), with old modules rejected as today. Until that bump ships in
  codegen and docs, Stream remains unsupported at generation time.

## Alternatives

**Map Dart Stream to `ReadableStream`.** Rejected for the first cut: different
ownership, backpressure, and Fetch body semantics; would confuse host streams with
Flutter event streams.

**Bidirectional Stream and JS `StreamController` in v1.** Deferred: larger lifetime and
API surface; not needed to unblock common listen-only Flutter APIs.

**Keep Stream as permanent generation rejects.** Rejected: blocks normal Flutter event
APIs while Future is already supported in the same dart:async family.

## Consequences

Codegen and core interop gain a Stream result encoder and a session-scoped subscription
table. Binding selections may expose Stream-returning members only after protocol 19 (or
successor) is implemented. Package owners follow ADR 0018: in-envelope once 19 exists;
Architecture review if element conversion or lifetime rules need new semantics.

Fetch / host Web Streams docs stay authoritative for HTTP bodies. Architecture docs
(`interop.md`, `bindings.md`) and open-questions wording should be updated with the
protocol bump, not by stretching protocol 18.

This ADR is **accepted**. Do not merge Stream generation into protocol 18 modules.
Shipping requires UI protocol 19 (or the next free number if 19 is taken), matching
codegen/runtime work, architecture doc updates, and tests. Native ABI 2 stays unchanged.
