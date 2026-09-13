# Task: Proxy Properties and ValueListenable

Status: complete on macOS arm64 with Hermes and V8.

## Goal and scope

Generate required ordinary-proxy getters/setters and validate native ValueListenable
consumption. UI protocol 14 replaces protocol 13; native ABI 2 and the pinned engines,
SDK and dependencies are unchanged. No new packages, application pages or host APIs.

## Implementation

Effective inherited accessors and directional types feed generated Dart overrides and TS
implementation signatures. Explicit JS descriptors are captured without eager reads;
parent constructors see initialized callbacks. Existing synchronous checks reject getter
and setter thenables. Property callbacks reuse reference conversion and cleanup.

Core Listenable and ValueListenable bindings share this path. A real native consumer
exposed a function-cache issue: repeated Dart method tear-offs can be equal without
being identical. Returned functions now use Dart equality plus conversion signature;
ordinary object identity is unchanged. Listenable also declares the existing listener
pair so JS calls preserve their Dart callback identity across add/remove. See
[the contract](../architecture/proxy-properties.md).

## Validation

- Original generator suite: 27 tests passed. A positive accessor regression failed
  before the change with `Proxy accessors are not supported: value`.
- Targeted generated Dart/TS fixtures and four Node accessor tests passed.
- Ten real property tests passed on each engine, including native
  ValueListenableBuilder, replacement/unmount, duplicate listeners, constructor
  dispatch, synchronous errors, close during a getter, and actual JS/Dart collection.
  The native listener regression failed before changing function equality and passed
  afterward. The JS-origin listener regression likewise failed without the listener-pair
  selection and passed with it.
- A direct Dart scalar getter executes its JS accessor once and makes no JS-to-Dart
  object entry. A read through the JS object wrapper makes one such entry and one
  accessor invocation. Explicit notifications rebuild only the native consumers;
  multiple writes before a frame coalesce their builds without adding subscriptions.
- `dart run melos run check` passed: 28 generator tests, 63 JS tests, Dart/TS analysis,
  formatting, generation consistency, bundles, documentation and toolchain checks.
- `dart run melos run check:ui` and then `dart run melos run check:ui:v8` passed. Each
  covered 2 native tests, 39 runtime tests, outside-package JIT/AOT, 248 framework
  tests, 7 example tests, macOS integration, release builds and relocated release UI
  receipts. Real Flutter drive assertions and result files passed despite its
  foreground/plugin warnings; the Hermes application was activated through AppKit when
  necessary.
- Generated core Dart grew from 215,556 to 226,785 bytes; core TS grew from 106,528 to
  109,610 bytes. Material Dart changed only its protocol literal; Material TS was
  unchanged. The native sources, SDK pins and dependency lockfiles were unchanged.

The final-check snapshot is `.local/proxy-properties/before-final-checks.json`; command
logs are `check.log`, `check-ui-hermes.log` and `check-ui-v8.log` in that directory. The
proxy-property implementation and its generated bindings matched that snapshot
throughout validation. Concurrent WebSocket edits appeared during the final V8 run and
were preserved. These checks do not certify revisions made afterward by that separate
task.

## Handoff

ValueListenableBuilder itself is not generated. Applications own value storage,
notification semantics and disposal. Ordinary proxies do not expose accessor super or
concrete overrides; optional/named methods and Future properties remain unsupported.
Source snapshots and validation logs are in ignored `.local/proxy-properties/`. No
commit, push or publication is performed.
