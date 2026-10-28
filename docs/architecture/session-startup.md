# Session Startup Reuse

Status: implemented; maintained macOS arm64 V8 startup and shared source/index reuse.

## Owning View startup

The existing `FlaxView(source: ...)` and automatic file/bundle/package entrances prepare
their Session before mounting its application root. No new application argument or JS
API is required. Initial declaration groups yield between stages. On a supported engine,
an otherwise unused runtime registers modules and initializes the maintained `@flax/`
module factories on a worker. The application entry is compiled separately as native ESM
after UI adoption. Consumer factories retain require-time initialization, including
access to globals set by the application before its first require. UI adoption installs
the real Dart hosts and evaluates that entry on the owning isolate.
Builder/LayoutBuilder, overrides and super calls remain synchronous there.

This uses one shared heap, not a second runtime or a serialized copy of JS objects.
Background preparation requires a pristine context, no Dart bridge peers and no other
runtime using that heap. Preconfigured runtimes, already live Sessions and engines
without the execution extension retain the UI-thread staged path. A module factory
requiring Dart during initialization also falls back: native code restores the pristine
context in place, so the host's runtime factory is still called only once. Current
background adoption is enabled on macOS; other targets retain UI-thread preparation.

A new synchronous runtime can interrupt pristine preparation. The worker terminates and
releases the shared heap before that runtime is created; the first Session resets its
incomplete context and uses UI initialization. Partial state remains inaccessible until
its preparation Future completes. This keeps explicit Session creation synchronous even
when it arrives during an owning View's background work.

An owning View leaving or replacing its source cancels preparation. Native termination
and joining restore UI ownership before cleanup; a cancelled root never mounts or
reports a stale loading error. Queued Views do not share contexts, module state or
callbacks. The startup queue releases SDK initialization before entry evaluation;
top-level await and remote downloads do not serialize another View behind the waiting
application. Session close still rejects new work immediately. Explicit Session/page
entrances execute entries without dependencies or top-level await synchronously; other
entries expose the same `ready` Future as owning Views.

The execution extension also combines call/property results with value descriptions and
bulk-describes borrowed callback inputs. Strings use the existing buffer ownership and
objects use the original conditional GC edges. Immutable Widget/argument packets reuse
the same conversion, type, key and lifecycle checks. ABI 2, UI protocol 24 and generated
class APIs are unchanged. Larger packets and older JS helpers retain ordinary
conversion.

The maintained Flutter build includes the fixed-entry dependency-cache repair. Use the
ordinary revision-checked `build_engine.py` and local-engine flags; no private frontend,
helper dylib, copied engine, changed entitlements or runtime selector is required. The
experiments under `experiments/gallery_handoff` retain historical comparison data; those
timings are not measurements of every production loading path or mobile device.

## Goal and scope

Reuse Dart binding declaration indexes and prepared JS source encoding across Sessions.
Keep JS globals, module instances, callbacks, generic materializations and bridge
handles local to each Session. This does not change generated bindings, the engine ABI
or joint GC.

## Implementation

`FlaxBindingRegistry` reuses the same validated indexes for the same ordered, immutable
module identities, including dependencies. An ordered tree of weak Expando keys lets
retired plugin declarations and their captured closures collect; independently live
module combinations can retain one index between Sessions. Prepared module requirements
are checked once per selected module and registry identity. A newly selected module is
still validated before execution.

`FlaxJsSource` lazily replaces its source String with immutable UTF-8 bytes on first
use. Prepared modules and the base host reuse those bytes; each Session still executes
its own scripts. Asset loading keeps custom `loadString` overrides and requests
`cache: false` for scripts. Ordinary String evaluation and hot reload keep their
existing path. The FFI copy and the engine-owned JSI Buffer remain: engines can retain
source for lazy compilation, so borrowing Dart memory would require a different
ownership contract.

## Measurement

The source/index reuse measurements below predate the maintained two-stage integration.
Their profile/AOT limitation describes that earlier measurement run; the maintained
integration separately passes the complete gallery and joint-GC contracts in
release/AOT.

The private harness uses the maintained macOS arm64 V8 debug tester and the complete
prepared SDK inventory, with Material enabled and a real Text mounted through FlaxView.
Each process measures 16 Sessions. The first is kept alive, unmounted, to retain the V8
heap; subsequent Sessions mount, unmount and close independently. Warm samples exclude
the first five Sessions. Loading includes construction through the first pumped frame;
source preload is measured separately. Memory is sampled after Dart GC using the VM
service's heap plus external usage, alongside process RSS. The caller-provided registry
is prepared before the timed Session window; these figures are not full application
process startup times.

Two final unchanged-source/optimized-source pairs produced the following results. Each
range shows the two process measurements; warm values are per-process medians.

| Metric                                  | Before            | After             |
| --------------------------------------- | ----------------- | ----------------- |
| First Session through first frame       | 3,044–3,360 ms    | 2,862–2,925 ms    |
| Subsequent Session through first frame  | 229–248 ms        | 202–205 ms        |
| First Session Dart heap + external      | 246.24 MiB        | 246.63 MiB        |
| Subsequent Session Dart heap + external | 248.91–249.00 MiB | 248.27–248.30 MiB |

Warm loading fell 12–17% in these pairs. The first Session retains about 0.38 MiB of
reusable cache, while the warm combined workload uses about 0.63–0.70 MiB less Dart
memory. RSS was 966–969 MiB before and 964–975 MiB after: no reliable RSS reduction.
First-run wall and CPU time varied substantially, so two cold samples do not establish a
stable cold-start improvement. Preload time also varied and has no claimed speedup.

Alternating modes in one process separately force declaration-cache misses with fresh,
otherwise equivalent module objects and compare String evaluation with encoded-source
evaluation. These experiments retain both source representations for comparison, so
their absolute memory totals do not measure the source-storage footprint. No timing
threshold is part of the tests.

The final alternating run used six samples per mode:

| Shared indexes | Reusable encoding | Median load |
| -------------- | ----------------- | ----------- |
| No             | No                | 235.728 ms  |
| Yes            | No                | 226.956 ms  |
| No             | Yes               | 216.949 ms  |
| Yes            | Yes               | 214.660 ms  |

Both together reduced this paired warm result by about 9%. Sharing indexes reduced the
additional live registry footprint by about 0.9 MiB. Individual timing effects vary with
JIT and GC scheduling and are not additive; earlier alternating runs showed 12–15%
combined reductions.

A paired 2 MiB source experiment isolated repeated encoding: String evaluation took
7.686 ms versus 0.518 ms with reusable bytes (median after warmup). This is a synthetic
source-path result, not a whole-Session or AOT startup claim.

Raw samples, source hashes, harnesses and validation logs are retained under the ignored
`.local/startup-shared-20261022/` directory. The source baseline is Flax
`7dabc2edbc52fa76893235c5cb04dd193b375a71`; Flutter is
`183508ece44ae312a7339bd2ede245e16cf485f3`.

## Validation and limits

Core passed 383/383 actual-engine cases, including isolated module instances, newly
selected requirements, weak declaration lifetimes, Unicode, nested evaluation and JS
closures surviving collection of their source object. Existing generic inheritance,
overrides, super, cross-session rejection and joint-GC regressions passed, including
1,000 repeated Widget/State mount cycles. Fetch passed 20/20 actual-engine cases; Core
JS passed 86/86. Scoped Dart analysis and documentation checks passed.

Profile/AOT measurement stopped before application execution: the existing profile
patched SDK lacks `FlaxFontCollection`, required by the current Flutter font source. No
SDK rebuild was performed. These debug/JIT results do not establish AOT, Android, iOS or
cold-engine-after-last-Session-close performance. OS memory compression, swapping and
concurrent processes make RSS and first-run wall time noisy; declaration cache savings
apply to additional Sessions using the same live module combination.
