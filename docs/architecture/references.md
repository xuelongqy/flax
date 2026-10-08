# Bridge references and GC

The maintained Flutter engine connects Dart's collector to V8 CppHeap or the iOS Hermes
Hades marker through conditional tracing. Real business roots in either heap retain
their peers; rootless cross-language cycles can be reclaimed. Flax does not add a JS
heap scanner or a second Widget lifecycle. Flutter owns Elements, State, scheduling and
application disposal. See [ADR 0039](../decisions/0039-engine-owned-cross-heap-gc.md).

At the Dart major-GC safepoint, marked Dart origins first propagate through their exact
JS peers to direct Dart targets. If every registered Dart target is already marked, this
pass can finish without traversing the JS heap. Any unmarked target requires the full
V8/CppHeap fixed point. This uses current reachability, not a cached graph or an
assumption that unchanged registrations imply unchanged references.

Flutter idle notifications still check Dart ownership. JS work separately marks the heap
for idle V8 collection, including discarded JS wrappers whose Dart targets remain alive.
Ordinary V8 pressure collection and session cleanup continue to run.

Hermes uses a separate VM for each session and a shared UI-isolate coordinator. Joint
collection holds all participating final mark phases until cross-session references
reach a fixed point, then clears dead WeakMap entries and processes weak references.
Outermost JS bridge calls schedule coalesced idle collection, including work after the
last Flutter frame. It uses Hades's existing mark state, with no additional heap
scanner. Ordinary Hades marking remains concurrent. Collection requests during active JS
jobs defer to a safe owner-thread checkpoint.

## Retention directions

| Reference                    | What stays alive                               | Release condition                                                             |
| ---------------------------- | ---------------------------------------------- | ----------------------------------------------------------------------------- |
| Dart closure calling JS      | The JS function handle                         | Dart closure GC, explicit release or session close                            |
| JS wrapper for a Dart value  | The actual Dart value                          | Neither heap has a business root, explicit release or session close           |
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

An unresolved Dart Future owns its registered completion listener, including JS
continuations without a retained Promise alias. Once it settles, it does not retain
discarded Promise views. Completion listeners hold the session weakly, and rootless
Future/Promise cycles remain collectible. In the other direction, the private Promise
adapter retains the original JS Promise through its live typed and chained Dart Futures.
It adds no completion observer that could consume uncaught Dart errors. Its Stream
adapter retains that origin while the Stream or its subscription is live, and releases
it on completion or cancellation. Both observer identity tables are weak. Opaque Stream
errors use a conditional metadata peer to preserve the original error and stack trace,
including values that Dart cannot target with a weak reference.

Context borrowing never keeps an Element mounted or alive. The bridge rejects forged,
foreign-session, inactive and unmounted inputs. `mounted` reports the native state;
other operations require a live mounted Context. Reparenting a live Element preserves
its identity.

## Shared implementation

The private Dart `_BridgeReference` in `src/ui/references.dart` is used by callback
handles, escaped Widget configurations and Context references. A finalization token owns
only detached bridge cleanup, never its Dart referent or a JS facade. Session shutdown
also indexes this metadata so a collected Widget does not hide a pending cleanup lease.
Explicit release, finalization and session shutdown enter the same idempotent path. A
release during a running callback retires the handle immediately and frees it after the
invocation returns. Session shutdown does not wait for either GC. Released records drop
their owner association and configuration resources even when business code continues to
hold the native Widget or Element.

The internal JS `ReferenceCache` in `runtime/references.ts` is shared by Contexts,
ordinary objects, Widgets, functions, collections, Streams and errors. A WeakMap records
typed wrapper handles; weak aliases share one Dart identity. Each checkpoint sweeps at
most 64 identities and releases the Dart table entry only after the last alias expires.
Pruning an alias during lookup still leaves its release pending. No strong JS wrapper
cache, timer or FinalizationRegistry is needed. The cache prunes protocol identities; it
does not root business values. Conditional engine tracing owns cross-heap reachability,
including idle and allocation-pressure GC.

The binding protocol, native ABI, generated APIs and JS calls are unchanged. The helper
is internal, with no separate package or public lifetime configuration.

## Boundaries

This mechanism releases bridge holdings. It does not call `dispose`, close application
controllers, pop Routes or roll back static state. Session shutdown still removes
bridge-registered listeners through the existing object cleanup path. Mounted signals
and components keep their existing per-mount resources. Explicit Route and Page leases
keep their navigation guarantees; they are not inferred from an ordinary Context.

A Dart controller may hold a JS listener which captures its Dart wrapper. The engine
follows these real edges rather than treating the bridge tables as permanent roots. If
an application still roots the controller or listener, both remain alive; after all
business roots disappear, the cycle can be reclaimed. Explicit listener removal and
application disposal still have their ordinary semantics.

## Verification

Regression tests preserve synchronous order, original Context and Widget identity,
errors, indexed/named/optional callbacks, nullable and async results, independent
mounts, and callback retention before mount. Matching-engine V8 tests and Dart VM GC
check that retained Context wrappers do not retain native Elements, escaped
configurations survive when needed, and session close clears bridge holdings. Node tests
additionally check weak alias release, lookup pruning and bounded sweeping with actual
JS GC.
