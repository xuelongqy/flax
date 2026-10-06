# Bridge references and GC

Dart and JS run separate garbage collectors. Flax connects them with typed handles and
idempotent release, rather than maintaining a second Widget lifecycle or a shared heap.
Flutter owns Elements, State, scheduling and application disposal.

## Retention directions

| Reference                    | What stays alive                               | Release condition                                                             |
| ---------------------------- | ---------------------------------------------- | ----------------------------------------------------------------------------- |
| Dart closure calling JS      | The JS function handle                         | Dart closure GC, explicit release or session close                            |
| JS wrapper for a Dart value  | The Dart identity table entry                  | Last JS alias GC followed by a checkpoint, explicit release or session close  |
| Escaped Widget configuration | Its callback and configuration dependencies    | Configuration GC or session close; each mount owns separate mounted resources |
| JS Context wrapper           | A weak reference to the actual Flutter Element | Element GC or unmount, last JS alias GC, owner release or session close       |

An explicit listener registration keeps its Dart identity alive until removal or session
close. Losing the last JS wrapper does not remove that registration.

A callback closure may be stored by an ordinary Dart object or returned Widget. Its
lifetime follows that Dart reference, including before the first mount. Calling it
preserves its actual Context, synchronous order, result and exception. Conversion
creates no synthetic Builder or Element. Mounted Widget callbacks and typed Route/Page
builders use the same result conversion. Fixed interface configurations keep their
original typed closures and generated children through native configuration reuse.
Unmount stops subscriptions immediately; discarded configurations require actual Dart GC
to release their handles. There is no frame-end result expiry queue. A Future-returning
callback uses the existing Promise conversion; synchronous Flutter builders reject a
Promise.

Context borrowing never keeps an Element mounted or alive. The bridge rejects forged,
foreign-session, inactive and unmounted inputs. `mounted` reports the native state;
other operations require a live mounted Context. Reparenting a live Element preserves
its identity.

## Shared implementation

The private Dart `_BridgeReference` in `src/ui/references.dart` is used by callback
handles, escaped Widget configurations and Context references. A finalization token owns
only bridge cleanup, never its Dart referent. Explicit release, finalization and session
shutdown enter the same idempotent path. A release during a running callback retires the
handle immediately and frees it after the invocation returns. Session shutdown does not
wait for either GC.

The internal JS `ReferenceCache` in `runtime/references.ts` is shared by Contexts,
ordinary objects, Widgets, functions, collections, Streams and errors. A WeakMap records
typed wrapper handles; weak aliases share one Dart identity. Each checkpoint sweeps at
most 64 identities and releases the Dart table entry only after the last alias expires.
Pruning an alias during lookup still leaves its release pending. No strong JS wrapper
cache, timer or FinalizationRegistry is needed. Reclamation requires actual engine GC
and subsequent bridge activity.

The binding protocol, native ABI, generated APIs and JS calls are unchanged. The helper
is internal, with no separate package or public lifetime configuration.

## Boundaries

This mechanism releases bridge holdings. It does not call `dispose`, close application
controllers, pop Routes or roll back static state. Session shutdown still removes
bridge-registered listeners through the existing object cleanup path. Mounted signals
and components keep their existing per-mount resources. Explicit Route and Page leases
keep their navigation guarantees; they are not inferred from an ordinary Context.

Neither GC can see an entire cross-language cycle. For example, a Dart controller holds
a JS listener which captures the controller's JS wrapper. The application must remove
that listener or clear the stored callback. Session close revokes bridge holdings, but
GC alone cannot promise cycle collection. Add new owners to the shared mechanism only
when they actually retain a bridge handle; do not wrap ordinary Dart ownership.

## Verification

Regression tests preserve synchronous order, original Context and Widget identity,
errors, indexed/named/optional callbacks, nullable and async results, independent
mounts, and callback retention before mount. Real Hermes/V8 tests and Dart VM GC check
that retained Context wrappers do not retain native Elements, escaped configurations
survive when needed, and session close clears bridge holdings. Node tests additionally
check weak alias release, lookup pruning and bounded sweeping with actual JS GC.
