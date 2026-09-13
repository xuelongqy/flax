# localStorage and session namespace

Status: completed locally on macOS arm64 (2026-09-10)

## Scope

Add optional Hive CE localStorage, exact session namespace selection, base global event
methods and cross-session storage events. This storage fix does not alter either
protocol; the verified worktree uses UI protocol 16 and native ABI 2 on macOS arm64
Hermes/V8. No automatic Hive initialization/reconfiguration or application box closure.
See the [storage contract](../architecture/local-storage.md) and
[decision](../decisions/0015-local-storage-namespace.md).

## Implementation and scoped evidence

- Hive CE 2.19.3 and path_provider 2.1.6 are pinned. Dedicated-path initialization works
  before and after the application's Hive.init; a foreign reserved box is rejected,
  including concurrent opening at a different directory. The application owns every
  other Box and must not open, close, delete or write Flax's reserved Box. Public Hive
  APIs cannot identify a same-name, same-path concurrent creator, so that use is outside
  the plugin contract. No private Hive state is used.
- Thirteen real Hive tests pass, including quota, Unicode, concurrent writes, I/O
  failure rollback, immediate same-key rewrites after failed remove/clear, atomic index
  rebuilding, duplicate-record rejection and a fresh Dart consumer process. Five Node
  Storage protocol tests and TypeScript checks pass.
- Pending operations for one namespace/key retain a stable Hive record ID until every
  operation settles. They do not retain a second value copy. A failed write rebuilds
  indexes and quota from Hive into temporary structures before committing them; failure
  to rebuild disables ordinary access while preserving the original persistence error
  for flush and shutdown.
- Storage named-property definition now rejects descriptors without either `value` or
  `writable` before conversion or host access. Explicit `value: undefined` continues to
  store the string `"undefined"`.
- Four Hermes and V8 framework tests and the three-area example scenario pass. They
  cover initialization, namespace replacement, source exclusion, ordered/reentrant
  events, closing recipients, proxy operations, quota and final zero bridge handles.
- Initial baseline: 17 shared host tests and nine WebSocket Node tests passed.
- The embedded example exposes two shared shop sessions and one isolated session.
  Standalone input persists its draft; external tarball consumers include the plugin.

## Costs

Generated base IIFE is 325,386 bytes; storage IIFE is 3,952 bytes. Fetch remains 16,107
bytes and WebSocket 7,924 bytes. Storage bundles no duplicate base event implementation.
One scoped Hermes run measured 100 synchronous write/read pairs in 8,561 microseconds,
base installation in 34,358 microseconds and plugin installation in 1,310 microseconds.
The pre-change base-only observation was 35,299 microseconds and 37 live handles; the
additional storage installation retains one dispatcher result handle. The 38 live
handles remained unchanged after those operations and reached zero before runtime
disposal. These are local observations, not hardware-independent limits.

A separate real Hermes measurement wrote a 2 MiB UTF-16 value (`'汉'.repeat(1048576)`)
synchronously in 9,345 microseconds and read/compared it in 27,999 microseconds. These
timings include the runtime bridge and string conversion, not a disk durability wait.
Large values can therefore occupy a Flutter frame even though file persistence is
asynchronous.

The matching V8 measurement used its normal temporary-engine workspace: write 8,762
microseconds, read/compare 22,872 microseconds for the same 2 MiB value.

Key enumeration fetches names in one bridge call; descriptor checks perform additional
reads. Disk writes retain no JS handles and failure reporting uses a weak session owner.
File I/O tests pump real I/O and the Flutter test zone separately; no production
schedule was changed to accommodate fake clocks.

## Full verification and handoff

- `dart run melos run check` passed against the final source state: 30 generator tests,
  77 JS tests, analysis, formatting, type checking, generation consistency, docs and
  native configuration. After recording these final counts, `docs:check` also passed.
- `dart run melos run check:ui` and `dart run melos run check:ui:v8` passed, serially.
  Each engine passed 39 runtime tests, native ABI tests, relocated JIT/AOT loading, 276
  framework tests and eight embedded example tests. The checks also ran all 13 Hive
  tests and the existing WebSocket transport suites.
- Both external consumers installed npm tarballs and Dart package copies, passed macOS
  integration, built production release applications and passed actual UI assertions
  after the source/build directories were removed and the test release relocated.
  Production standalone releases measured 26.8 MB (Hermes) and 56.7 MB (V8). Embedded
  release applications measured 26.9 MB (Hermes) and 56.8 MB (V8).
- Desktop integration verified the real Application Support directory channel. Widget
  tests explicitly select temporary directories; asset-loading failures still report the
  missing JS asset before storage initialization.
- Nonignored source fingerprints were unchanged throughout both final engine checks.
  Existing concurrent Widget-argument work was preserved and included in those checks.
  Generated application assets, temporary consumers, native assets and measurements
  remain ignored. Only this handoff changed afterward and received Markdown/link checks.

Implementation and verification are complete. No commit, push, publication or remote CI
run was performed. Further storage features should build on the existing session plugin
boundary; none are scheduled by this task.

Storage property access uses Proxy; explicit non-configurable virtual properties cannot
match all Web IDL exotic semantics and are rejected before mutation. Generic property
descriptors without `value` or `writable` are also rejected rather than treated as an
implicit undefined write. Persistence is asynchronous, events describe memory changes,
and notifications are isolate-local.
