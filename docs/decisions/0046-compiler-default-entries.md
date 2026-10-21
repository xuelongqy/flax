# 0046: Compiler entries for native default arguments

Status: experimental integration; platform acceptance remains separate.

## Decision

Generated calls with a known Dart declaration use one fixed entry when preserving
omitted native defaults. The generator emits typed slots, constant parameter names and
32-bit presence words through `flaxInvokeWithDefaults`. The maintained compiler replaces
the marker and its temporary lists with scalar arguments. The entry chooses the actual
default in the declaration's library, checks required and positional presence, and calls
the original constructor or method. Virtual entries preserve override defaults;
lexical-super entries preserve the native superclass call and its generic context. Bound
extension and extension-type tear-offs resolve through the frontend's existing member
descriptors. Their receiver is checked and evaluated once before argument effects;
presence words include that receiver without losing boundary bits. This does not infer a
target for an arbitrary callback value.

SDK virtual entries are generated during ordinary platform compilation, before the JIT
core snapshot. The frontend, SDK Kernel and core snapshot must be built together.
Missing SDK entries and dynamic targets passed to the marker fail compilation. The
unlowered marker fails explicitly rather than silently using a slower fallback.

Dynamic callback values retain the existing shared invocation adapter: direct named
dispatch through five independently omitted parameters, `Function.apply` from six, and
linear optional-positional dispatch. No native default declaration can be assumed for
these values. Calls needing no omission dispatch stay direct.

## Build and lifetime boundaries

The Dart transformation is stored in the Flutter fork's revision-checked Dart patch.
Ordinary engine build actions produce the platform and frontend artifacts; applications
use Flutter's local-engine flow without a compiler override or a synthetic cache define.
The existing application build inputs already fingerprint compiler and SDK contents.
Local-engine initial Kernel caches now include those contents too, covering resident
compilation, test compilation and the cache writer. Rebuilding a compiler or SDK
requires restarting the Flutter tool and application; it is not a source hot-reload
operation.

Compatible source reloads keep entry identities and incremental references stable and
notify class-structure changes. Existing Flutter restart rules still apply to
unsupported class or SDK changes. No JS API, Manifest, UI protocol or native ABI changes
are needed. Parameter conversion, callback escape, exception cleanup and joint-GC
ownership remain on the existing shared runtime path. Compiler entries hold no
business-object cache.

## Older generated JS and newer Dart declarations

Generated modules declare the additive `call-layouts` capability. The JS runtime sends
parameter names and requiredness only when resolving a call, and caches the resulting
operation by both declaration and source layout. The Dart host maps those slots to its
current parameter names. An unchanged layout, including optional parameters appended to
the end, needs no argument-array copy. Named parameters inserted before or between old
parameters are reordered once per call using the cached index map. Missing values stay
missing until ordinary conversion and the compiler's native-default entry handle them;
explicit null is never changed to omission.

For example, an old generated JS module can keep calling `total({left: 11, right: 22})`
when Dart changes from:

```dart
int total({int left = 1, int right = 2});
```

to:

```dart
int total({int left = 1, int middle = 9, int right = 2});
```

`right` still receives 22, and Dart supplies 9 for `middle`. This applies to ordinary,
static, extension and generic calls, and lexical `super`. Constructors already use named
descriptors. Proxy preparation checks the old JS signature against the new Dart
signature and keeps the old positional/options/generic-context boundaries. An existing
named options object can forward newly supplied native names through `super`; Dart still
rejects unknown names. An old override cannot consume a newly added positional argument
outside its old signature; regenerate it when that new input is needed.

The supported evolution is adding optional named parameters, reordering named
parameters, or appending optional positional parameters while retaining existing
positional order, named identities and compatible conversions. Positional names can
change in a Dart override; they are mapped by position, not by spelling. Proxy slots
match member names and accessor direction, so adding concrete members (including a field
introduced by a new optional constructor parameter) does not shift old virtual calls.
New members use their Dart implementation; regenerate the JS binding to expose or
override them. New abstract members, removed/renamed named parameters or members, and
new required inputs require regeneration. Incompatible requiredness changes and unknown
names fail before business code runs; type changes remain subject to ordinary conversion
checks.

This is a generated-module compatibility rule with the current shared JS/Dart runtime,
not a promise that arbitrary old runtimes or SDKs can be mixed. Modules generated before
`call-layouts` omitted parameter names for some function calls; that information cannot
be recovered from a value array. Their shared method metadata can still be reused, but
an optional call with no layout is rejected by a new capability-bearing Dart module:
regenerate that JS binding once. Thereafter its generated JS can remain byte-identical
across the supported Dart additions. Replacing binding declarations requires a fresh
Session/application start; this does not expand Flutter hot-reload guarantees. UI
protocol 24, Manifest 28 and native ABI 2 are unchanged, and cached layouts contain only
signature data, never business objects or callbacks.

The [call-layout regression](../../packages/flax/test/ui/call_layouts_test.dart) covers
named remapping, multi-level JS overrides and super calls after new native member slots
are added, and collection before Session closure.

## Tradeoff and acceptance

This reduces generated call branches and avoids `Function.apply` on known targets. It
adds compiler maintenance and a small fixed-entry overhead relative to some small direct
calls. Adapter timings, complete JS-to-Dart timings, generated bytes and AOT bytes must
be reported separately; source savings do not imply a universal call-speed gain.

Acceptance covers private defaults, explicit null versus omission, redirect factories,
wide masks, generic owners and methods, JS inheritance/overrides/super, compatible hot
reload and rooted/rootless collection while a Session remains live. Other architectures
and other JS engines need their own results. Prior burst-GC timeouts cannot substitute
for measurements with the matched build.

## macOS arm64 measurement

The 2026-10-21 comparison generated the complete Core, Material and Cupertino SDK
surface with both policies. The same maintained release compiler, SDK, engine,
application code and JS assets were used for both AOT builds. Generated JS and Manifests
were byte-identical across 1,085 files.

| Artifact                   | Previous hybrid calls | Fixed entries | Change |
| -------------------------- | --------------------: | ------------: | -----: |
| Generated SDK Dart source  |          45,701,110 B |  43,193,507 B | -5.49% |
| Acceptance application AOT |          70,556,320 B |  67,585,024 B | -4.21% |

The source totals exclude the unchanged 330,720-byte host bootstrap. The AOT figures are
for the full SDK acceptance application, not a promise about every application or its
packaged engine/assets. Build times used different warm caches and are not reported as a
speed comparison.

Six interleaved release launches supplied 21 measured batches per policy and workload,
after warmup. Each launch executed default-value combinations, generic calls, two JS
inheritance levels, overrides, lexical `super`, real Text rendering, and rooted/rootless
joint collection before Session closure.

| Optional parameters | Dart adapter, previous → fixed (ns/call) | Complete JS → Dart, previous → fixed (µs/call) |
| ------------------- | ---------------------------------------: | ---------------------------------------------: |
| 3                   |                            27.58 → 31.46 |                                21.632 → 21.952 |
| 5                   |                            39.64 → 44.98 |                                22.179 → 21.908 |
| 6                   |                           545.88 → 51.86 |                                23.493 → 22.849 |
| 10                  |                           663.38 → 79.24 |                                24.736 → 24.097 |

The small adapter adds a scalar entry call and mask validation compared with a short
direct branch. It adds about 4–5 ns in these 3/5-parameter workloads. The larger adapter
removes reflective application and its temporary containers, reducing its own latency by
88–90%. Complete bridge calls change by -2.7% to +1.5%; this does not establish a
universal bridge or frame-time speedup. Allocation-pressure results are separate from
these steady-call measurements.

The matched release applications also passed five SDK workloads at 1,000 calls per
batch, nine batches each: 45,000 selected SDK operations per policy. Both retained
business-rooted cycles, collected rootless cycles while live, and ended with zero
handles/subscriptions. The earlier experimental timeout was not reproduced in this
matched build; this does not attribute a GC fix to the compiler transformation.

Normal `flutter run` completed two compatible source reloads without losing existing
Dart or JS identities, kept the last running code after a deliberate compile failure,
and reused the initial Kernel on a fresh launch. Cache tests also changed compiler
contents at the same path, size and modification time, and changed SDK contents. A new
frontend with the old SDK was rejected before execution. Compiler/SDK replacement still
requires a tool/application restart.
