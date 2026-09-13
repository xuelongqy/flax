# Widget Arguments and Listenable Builders

Status: implemented and validated on an isolated source snapshot, 2026-09-10

## Scope

UI protocol 15 adds single Widget callback arguments and Dart-retained configuration.
Generated ValueListenableBuilder and ListenableBuilder preserve native static-child and
listener behavior. Flutter 3.47.2 / Dart 3.13.2 and native ABI 2 are unchanged. No new
packages, dependencies, Elements or public reference-management APIs were added.

## Implementation

- Single Widget inputs share typed conversion across constructors, methods, functions
  and callbacks. Ordinary Widget-to-Widget callbacks need no Context.
- Escaping Widgets use detached cleanup records sharing existing resource counts. Tokens
  contain weak owners and cleanup dependencies, never Widget data. Component identity
  caches are weak. Calls no longer retain all returned conversion values to protect
  opaque native wrappers.
- Configuration lifetime is independent of mounted State/subscriptions. Session close
  revokes configuration holds without waiting for GC or disposing application objects.
- The existing component editor demonstrates both generated builders, using the
  Controller as a ValueListenable and FocusNode as a Listenable with static children.

See
[Widget ownership and builders](../architecture/interop.md#widget-configuration-and-mounting).

## Evidence

Initial baseline: 28 generator tests and 30 related Hermes Flutter tests passed. The
saved-Widget regression failed with the old resource ownership after allowing the new
method signature; the same assertion passed after configuration retention. The original
generator also rejected Widget method arguments before calling Dart.

Scoped regression: 52 tests passed across configuration, returned callbacks, proxies,
components, lazy lists and nested callbacks. Additional GC and example tests passed.
Actual VM collections observed generated and component Widget reclamation; a separate
test checks JS wrapper collection before Dart configuration reclamation. Deterministic
session-close checks do not depend on GC.

Measured static child: one component build at initial mount, no component build for
signal-only updates or three notifications coalesced into one builder invocation. Three
subscriptions stay constant across listener-source replacement and drop to zero on
unmount. One signal update rebuilds only its Text property host. No Element is added by
configuration retention. Handles at runtime disposal remain zero.

Full verification on the task snapshot passed:

| Command       | Evidence                                                                                                                       |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `check`       | 28 generator tests, 68 Node tests, Dart/TS analysis, reproducible bindings, formatting, documentation and CMake configuration  |
| `check:ui`    | Hermes native tests, 39 runtime tests, external JIT/AOT, 266 framework tests, 7 example tests, macOS integration and release   |
| `check:ui:v8` | V8 native tests, 39 runtime tests, external JIT/AOT, the same 266 framework and 7 example tests, macOS integration and release |

Both UI commands include external package installation, two standalone integration
tests, migrated release UI assertions after deleting their source/build directories, and
three embedded macOS integration tests. V8 also proved generated machine code in a
separate migrated release process. The 15 new Widget-argument tests passed on both
engines, including saved independent results and safe late mounting after close.

The static-child scenario recorded the same bridge counts on both engines:
`__flaxBaseCall: 1`, `__flaxCreateObject: 5`, `__flaxComponent: 4`, `__flaxObject: 3`,
`__flaxInvalidate: 2`, `__flaxFunction: 3`. These cover initial creation, signal writes,
notifications, listener replacement and unmount; they are scenario totals, not a
per-notification budget. Repeated notifications preserve the original child Widget and
Element. Configuration reclamation is checked with actual GC and released JS handles; no
public configuration counter was added.

Generated core Dart grew from 226,785 to 233,157 bytes, and TS from 109,610 to 111,609
bytes. Material output sizes are unchanged. The embedded bundle is 159,169 bytes and
standalone is 113,905 bytes. External production releases measured 26,208,285 bytes
(Hermes) and 56,142,333 bytes (V8); production release builds took about 35 seconds each
on this machine. These are observations, not performance thresholds.

Concurrent host/plugin work changed the live workspace during validation. Its edits were
preserved; the complete commands ran in `.local/widget-arguments/validation`, containing
the task's final code and the original baseline for unrelated files. The results certify
that snapshot, not the later host/local-storage changes. The shared session file retains
both this task's ownership changes and the concurrent namespace addition. Final source
checks found no unintended tool rewrites. Logs, baseline archive, the task file delta
and source fingerprints are ignored under `.local/widget-arguments/`. No commit or
publish action was taken.

## Boundaries

Widget collection writes/collection callback arguments, proxy Widget properties,
Promise-to-Future conversion and arbitrary Widget subtypes remain unsupported. GC does
not provide prompt unmount or application disposal and cannot collect arbitrary
cross-language cycles. Future extensions must preserve these ownership distinctions.
