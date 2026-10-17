# Binding Coverage Map

This document describes the current `flax_codegen` language and Flutter-semantic
contract. It is a mechanism map, not a percentage of the Flutter SDK. A declaration can
be supported by the generator while a particular SDK library still needs its own binding
selection and runtime verification.

The current version domains are binding selection format **2**, package metadata format
**2**, Manifest **24**, UI protocol **24**, native ABI **2**, and internal engine
binding extension **8**. Only the current formats are read and written.

## Engine-backed audit and consolidated backlog

The 2026-10-15 audit uses Flax `74bd93ac` and maintained Flutter `fc097fae` as its
source baseline. This is the current mechanism backlog, not a complete Flutter SDK
census. A supported mechanism does not expose every library automatically or certify
every platform. The sections below retain the detailed contracts and regression links.

The separate [Flutter SDK verification](../tasks/flutter-sdk-bindings.md) records the
2026-10-17 complete public-entry census and production generation/compile matrix. It
identifies dependency-closure, filtered-metadata and generic subtype blockers; it does
not claim whole-SDK runtime acceptance.

The maintained engine changes three important boundaries:

| Engine capability                                          | What it enables                                                                                                                                                | What it does not supply                                                                                         |
| ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Joint Dart/JS tracing                                      | Real objects, callbacks and JS overrides can retain one another; unreachable cross-heap cycles can be collected.                                               | GC does not mount Widgets, schedule rebuilds, dispose controllers or determine navigation ownership.            |
| Actual Dart Type handles and checked closure instantiation | Nested nominal generics, recursive/dependent bounds and generic super calls use one compiled factory per declaration instead of enumerating type combinations. | TypeScript `<T>` is erased; the VM does not compile arbitrary new Dart declarations or callback layouts in AOT. |
| Shared native member dispatch and buffer transport         | Proxies share forwarding code; references retain native identity; supported typed buffers share storage.                                                       | The bridge still needs a selected signature, conversion rules, public declarations and valid session ownership. |

### Already supported

These are not outstanding gap categories: ordinary classes and legal extends/implements
proxies; properties and class/global statics; class operator aliases; enhanced enums;
named/generic extensions; typed Records and collections, collection subclasses and Dart
Iterators; nested typed callbacks, Future/FutureOr/Stream; Widget/Context/State value
conversion across ordinary inputs, results, properties, globals and callbacks; checked
casts and native type diagnostics; and package-scoped providers with default Core
injection. Recursive and captured generic bounds, returned generic callbacks, JS private
fields, method overrides and typed super contexts are also implemented.

Support follows the selected Dart signature. A collection view need not expose a
subclass's business methods, and two views of the same Dart object need not be JS `===`.
Use an existing selected type and `asDart` for a checked narrower view. Runtime type
arguments use `Class.$type` / `dartType`; a bare call uses its legal default and fails
when no legal default exists.

### Shared completion after the audit

The production implementation now shares these mechanisms. The original observations and
experiments below are retained as the audit baseline, not current restrictions.
Verification for this completion is recorded in
[the task acceptance](../tasks/binding-capability-completion.md).

| Audit group | Delivered shared behavior                                                                                                                                                | Remaining boundary                                                                                                      |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| A1/A12      | Automatic and explicit conversion/name selection parity from the preceding batch.                                                                                        | Dart visibility and genuine exported-name conflicts still apply.                                                        |
| A2          | Public BigInt/void/Never/Null and Future/FutureOr/Stream tokens reuse actual engine Types.                                                                               | No arbitrary structural Record/function token composition. Use an authentic native value's type.                        |
| A3/A5       | Native Function layouts use shared invocation metadata; all Records use plain field objects and shared native construction. Callback Map keys use weak closure identity. | JS closure creation requires a compiled typed signature. Raw unbound generic Function layouts fail explicitly.          |
| A4          | Generic Widget interfaces and their implementing factories use real native Widgets and checked type arguments. JS overrides use the existing native subclass proxy.      | No forwarding host or copied defaults. Raw JS objects cannot implement a Dart interface without a compiled class.       |
| A6          | Nine additional Core classes and EnumName/EnumByName views are provided by the default Core package.                                                                     | A provider selection is not automatic exposure of every Dart library.                                                   |
| A7          | Extension types expose selected members through `Type.view(representation)` using named-extension conversion.                                                            | Runtime representation erasure prevents independent nominal identity; extract the representation for Dart input.        |
| A8          | Several selected generative super constructors share `dartSuper`; mixed abstract/concrete accessor halves use the shared proxy installer.                                | Bind an actual Dart mixin-composed class. General runtime mixin composition is not generated.                           |
| A9          | Widget collection writes use ordinary conversion; custom JS Iterables use one lazy typed adapter, including nested async/Record/Widget values.                           | No implicit rebuild. Dart Iterator cannot promise JS `finally` on early stop or GC; application cleanup stays explicit. |
| A10         | Route/Page use ordinary real-object binding, typed callbacks and joint GC.                                                                                               | Session-close admission remains explicit; GC does not pop routes.                                                       |
| A11         | Dart-invalid ambiguous public barrels fail with an actionable diagnostic. Existing package/provider isolation is unchanged.                                              | No automatic publication of an entire dependency graph or invented aliases for real export conflicts.                   |
| A13/A14/A15 | Widget/Set defaults preserve real omission; void inputs use directional conversion; strict JS locals preserve wire names.                                                | Missing/undefined still means omission; explicit null is checked against the declared type.                             |

The additive `native-functions`, `callback-map-keys`, `lazy-js-iterables` and
`proxy-super-constructors` capability requirements reject hosts missing these shared
paths. Record value conversion additionally requires engine binding extension 8. Current
manifests use format 24; UI protocol 24 and native ABI 2 remain unchanged.

### Remaining mechanism gaps

The shared completion leaves these bounded gaps; they are not per-class conversion
patches. The supported behavior and the missing part must be distinguished:

| Area                                   | Supported now                                                                                                                              | Still limited                                                                                                                                                                                          |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Structural type tokens and JS closures | Plain Record fields from real Type metadata, shared Record construction in JIT/AOT, authentic native Function invocation and type handles. | No public arbitrary function/Record type-token builders. Creating a new typed JS closure layout needs a compiled Dart adapter; unbound generic raw Function layouts are rejected.                      |
| Mixin composition                      | Bind actual Dart classes that already compose mixins; their JS overrides and super calls use the shared proxy path.                        | No general selection-time mixin-combination generator or runtime Dart class synthesis.                                                                                                                 |
| Automatic generic inference            | Real checked type handles, legal defaults, supported deferred factories and explicit `Class.$type` / `dartType` selection.                 | Shared `@flax/build` lowering supports explicit TS types and safe local/contextual inference. No whole-graph or generalized deferred-factory inference; raw JS/TS erasure keeps the existing defaults. |
| Library coverage                       | Selected compatible APIs reuse the same mechanisms, default Core provider, public carriers and direct dependencies.                        | Dart/Flutter libraries are not all selected automatically. Whole-graph selection/publication is not provided. Additional APIs need selection and verification, rather than a new conversion mechanism. |

Record field access and Record inputs are no longer an outstanding mechanism gap. The
remaining Record item is only a public builder for composing a Record **Type token** in
JS; ordinary field objects and concrete Dart signatures do not need that builder.
Likewise, bounded automatic inference and the shared TS compiler improve call-site
convenience; explicit engine type selection already preserves real Dart generics.

The `@flax/build` TS compiler handles class construction and function/method generic
calls together through shared selectors; navigation adds no separate type inference or
conversion path.

Dart visibility/modifiers, valid Context/session ownership, synchronous Flutter hooks,
and application disposal/navigation policy remain intentional boundaries. The maintained
engine does not remove those contracts. See
[boundaries to preserve](#boundaries-to-preserve).

### Demand-driven scope

Creating a new Dart-typed JS closure from an arbitrary runtime-only function signature
is **deferred**. A Type handle describes the signature; it does not supply the compiled
Dart adapter that creates a matching closure in AOT. Revisit this only for a concrete
public API that cannot use the existing typed callback or signature-selection paths. Do
not add a general closure compiler solely to eliminate this diagnostic.

This does not defer ordinary callbacks, selected generic callbacks, known SDK callback
conventions or calling returned Dart functions. For example, a declared
`void Function(int completed, int total)` callback already supplies its adapter. The
Core Stream selections describe the bounded `onError` signatures through existing
[callback metadata](../../packages/flax/bindings/flax_bindings.yaml). Applications that
own a dynamic handler registry can also choose one typed contract, such as
`Object? Function(List<Object?> arguments)`, rather than arbitrary Dart call layouts.

The following priorities keep the underlying Dart features usable through existing
paths. Common mixins use fixed configuration; generic syntax uses the shared
`@flax/build` compiler; extension calls keep their explicit receiver-view API. Public
function/Record Type-token builders are deferred. Current use primarily needs Record
results and typed API inputs, which already supply the actual Dart type. Revisit only
for a concrete API requiring JS to compose a type without a declaration or value.

| Candidate                                              | Existing practical path                                                                                                                                                                               | Cost and reason to revisit                                                                                                                                                                                                                                 |
| ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Public function/Record Type-token builders (deferred)  | Concrete Dart signatures, ordinary Record field objects and `dartTypes.of` on authentic mapped values already cover value exchange.                                                                   | No current application demand justifies a new public builder. Revisit for a concrete runtime-composed type requirement; ordinary Record input/output is already supported.                                                                                 |
| General mixin combinations outside State               | Bind a real Dart class such as `class TrackedCounter = Counter with Tracking;`. State `proxyVariants` supply [common keep-alive/ticker combinations](components.md#state-variants-and-native-mixins). | Extend the current configuration for concrete common uses. Arbitrary JS-selected combinations remain future research because `on` constraints, member conflicts, `super` order and AOT class availability still need a coherent contract.                  |
| Whole-graph and generalized deferred-factory inference | Explicit `Bag.$type(dartTypes.string)` or method `dartType` selects real checked types without guessing from empty or ambiguous inputs.                                                               | The current capability meets application needs. The shared TS compiler supplies friendlier syntax and safe local/contextual inference. Do not expand whole-graph inference solely to shorten calls; explicit tokens remain available for unresolved types. |
| Implicit extension resolution across libraries         | `StringX('a').repeat(3)` names the extension and avoids conflicts with another extension on String.                                                                                                   | Keep the existing [explicit extension contract](../decisions/0030-extension-binding-adapters.md); it meets current needs. No implicit extension selection or prototype mutation is planned.                                                                |
| Direct JS Iterator protocol adaptation (deferred)      | A Dart entry accepting `Iterable<T>` can delegate to an Iterator API with `values.iterator`. Existing conversion accepts JS Iterables and finite lists; native Dart Iterator references already work. | Direct raw JS Iterator inputs and a JS `next()`/`Symbol.iterator` facade for Dart Iterator are deferred. Revisit only for a concrete API that cannot use the existing Iterable entry; this is not an active binding-completion target.                     |

Widget interface generation now uses the shared native-value/proxy path, including
generic contracts, private native defaults and names formerly reserved by the forwarding
host. Native-only member metadata contains no copied source or imports. Selected
convertible interfaces also expose JS subclass constructors through `proxy: implements`,
using a native StatelessWidget base and the ordinary object/proxy path. Generic and
non-generic provider views follow the same inheritance and conversion rules. A new
runtime Dart class is not synthesized from an arbitrary JS object. See
[native Widget interfaces](widget-interfaces.md#generation-and-ownership).

Wider SDK selection still depends on actual application APIs. TS build compilation
reuses the same checked type handles; explicit tokens remain available without it.

Current published selections do not yet expose, for example, Material Slider, TabBar,
showModalBottomSheet or CupertinoDatePicker. These are library-coverage work: add the
public selections and verify their dependencies and runtime behavior. Their absence does
not by itself identify a missing generator conversion mechanism.

### Original audit observations, grouped by shared cause

The audit IDs below are documentation work items, not new runtime diagnostic codes. This
table records the pre-completion source baseline; use the delivered table above for
current behavior. “Feasible” identifies an existing implementation route; it is not a
promise that an unimplemented feature has passed runtime acceptance.

| ID  | Current limitation and example                                                                                                                                                                     | Classification                                                              | Shared implementation route and remaining uncertainty                                                                                                                                                                                                                         |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| A1  | Implemented: automatic Widget instance setters, preserved interface constructor callbacks and inherited abstract Widget interfaces.                                                                | Shared automatic/explicit native member conversion.                         | Writes call the real setter without scheduling a Flutter rebuild. Interface detection excludes Flutter lifecycle bases and still requires a legal, non-generic implements contract.                                                                                           |
| A2  | Public type-token builders do not cover every Dart type. There are no public Future/FutureOr/Stream, function or Record composition helpers, or dedicated BigInt/void/Never/null builders.         | API/conversion gap; not a finite generic-type catalog limit.                | Reuse existing engine Types for closed declarations and existing type constructors. Record/function token construction must be assessed together with A3. A known compatible Dart reference can provide its actual type through `dartTypes.of`.                               |
| A3  | Unknown Function/Record layouts are not automatically turned into structural adapters.                                                                                                             | Current resolver requires compiled shapes; a narrower fallback is feasible. | Experiments preserve unknown Record references with a checked generic cast and invoke native scalar functions from actual Type metadata. Arbitrary Record field access/construction and arbitrary typed JS closures remain separate work.                                     |
| A4  | Generic native Widget interface declarations, such as `CellView<T>`, are rejected by `kind: widgetInterface`.                                                                                      | Specialized-interface selection limitation.                                 | Generic real Widgets already pass `CellView<String>` and nested `CellView<List<String>>` through ordinary object conversion. JS subclass build overrides, private fields, mounting and wrong-type rejection pass. Reuse that path before adding another host adapter.         |
| A5  | Callback Map keys and unspecialized `Function` declarations are rejected.                                                                                                                          | Callback identity and signature adaptation gaps.                            | A weak, session/signature-local callback memo preserves Map lookup and cross-heap collection. Native function invocation can use actual scalar signature metadata and `Function.apply`; arbitrary JS implementations still need a typed closure contract.                     |
| A6  | Implemented: `Never`, and default Core `Type`, `Symbol` and opaque `Record` references. Additional Core views remain incomplete.                                                                   | Bounded Core coverage, not a complete Core library surface.                 | Explicit generated adapters work for `MapEntry`, `Runes`, `RuneIterator`, `Error`, `Enum`, `Comparable`, `Invocation`, `UriData` and `Deprecated`, including enum extensions and primitive `Comparable<String>` input. Deliver missing Core capabilities through Core itself. |
| A7  | `extension type Meters(int value)` crosses as its representation; no independent JS constructor or extension-type member facade is generated.                                                      | Limited by the current representation-only contract.                        | A compiled facade could reuse named-extension/member generation. Preserve representation erasure: it would not create a new native object identity or reliable nominal `instanceof` distinction.                                                                              |
| A8  | General configured mixin composition is unavailable outside fixed State variants. An extends proxy selects one generative super constructor; mixed abstract/concrete accessor halves are rejected. | Selection and generated-surface limitations.                                | A compiled mixin retains JS override/super behavior. One Dart proxy class can serve two named super constructors; explicit accessor-half forwarding also works. This does not enable runtime-created Dart mixin applications in AOT.                                          |
| A9  | Widget callback Iterables must be finite; native Widget collection insertion/replacement is explicitly blocked. Raw JS generators are eagerly decoded.                                             | Shared adapter and legacy-guard limitations.                                | An isolated guard removal passes List/Map/Set mutation, native subclass retention, GC pressure and mounting. A shared generic Iterator/Iterable prototype evaluates only the first requested JS generator element. Neither operation schedules a Flutter rebuild.             |
| A10 | Route/Page now use ordinary object conversion.                                                                                                                                                     | Navigation lifetime remains distinct from GC.                               | Native constructors, callbacks, proxy properties and checked casts share the existing object path. Mounted JS content drains through the shared Session mechanism; no Route retention or Page adapter is required.                                                            |
| A11 | Direct-dependency providers and explicit public entries work; whole-graph selection and delivery are incomplete.                                                                                   | Dependency closure, naming and API delivery work.                           | Same simple class names from separate Dart libraries remain isolated. A genuinely conflicting barrel is rejected by the Dart compiler itself; select explicit entries or repair the Dart facade. Missing public carriers are not new engine conversion failures.              |
| A12 | Implemented: ordinary object getters named `kind`, `type`, `ctor` and `args`, including inherited proxy members and super.                                                                         | Shared naming-rule correction.                                              | Descriptor representations still reserve their actual transport fields. Native objects use shared prototypes and WeakMap metadata, leaving those business names available.                                                                                                    |
| A13 | Non-null Widget and Set constant defaults are rejected during parameter selection/parse.                                                                                                           | Existing default-omission rules do not cover these kinds.                   | The existing `omitWhenAbsent` call path preserves private Widget/Set defaults and constant identity. Explicit null still fails; undefined omits. No copied private default or new engine API is required.                                                                     |
| A14 | Direct `void` selection is inconsistent: a top-level function can be selected and emitted with an invalid Dart cast. Void callback parameters are rejected.                                        | Callback signature/generation parity.                                       | A compatible Dart `Object?` parameter and the existing void encoder deliver JS undefined. A real `TickerFuture.complete().then` passes. Direct void inputs need an input-direction conversion instead of an `as void` cast, plus a defined required-argument/undefined rule.  |
| A15 | Automatic selection rejects some strict-JS parameter spellings; explicit proxy emission can still declare illegal locals such as `arguments`.                                                      | Shared parameter-name emission gap.                                         | Renaming only the TS/JS local label while retaining the Dart wire name compiles strictly and preserves invocation, inheritance and super. Named property keys need not be renamed.                                                                                            |

### Maintained-engine feasibility audit (2026-10-15)

These are the original experimental feasibility results, not the completion acceptance.
The production completion is described above. No engine source, SDK artifact, protocol,
ABI or production binding implementation was changed for these experiments. Original
uncommitted work was preserved.

Fresh automatic inventories covered `dart:core` (83 declarations), `dart:async` (55) and
`package:flutter/widgets.dart` (1,339), with 1,464 distinct declaration identities
across the three entries. These are inventory/automatic-selection results, not 1,464
compiled or runtime-accepted APIs. Diagnostics include missing public carriers,
visibility exclusions and declarations such as `Never` that are usable in signatures
without having a constructor surface; raw unsupported counts are not gap counts. The
separate 48-shape mechanism matrix passed its parse, emit, Dart-analysis and strict
TypeScript stages: 44 supported and four representation-only extension-type cases.

Twenty focused scenarios passed on macOS arm64 V8 in both debug and release/AOT. An
isolated copy also passed all twenty after removing only the old Widget collection
mutation guard. Generated experimental modules passed strict TypeScript after the A15
local-name correction. The release app ran after its temporary consumer sources were
removed; signature, hardened runtime, JIT entitlement, a single V8 library closure and
unchanged unsigned engine library hashes were verified. These results do not certify
Hermes/iOS, Android, every SDK declaration, frame latency or the full workspace suite
for the experimental additions.

| Scope                             | Verified result                                                                                                                                                                                                            | Remaining implementation boundary                                                                                                                                                                                                                                                                                            |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Async and scalar type tokens (A2) | Existing Future/FutureOr/Stream descriptions and native BigInt/void/Never/Null handles select actual nested types. Future/Stream invocation and Never rejection pass.                                                      | Public builders are incomplete. A token for a structural type does not supply a new structural adapter.                                                                                                                                                                                                                      |
| Unknown structural values (A3)    | Opaque native Record references roundtrip through a generic cast; the wrong shape fails. A native function with an unknown scalar positional/named layout can be invoked from Type metadata and retains its Dart defaults. | This prototype does not create arbitrary Record fields or exact typed JS closures, or infer Widget/Context ownership for unknown signatures.                                                                                                                                                                                 |
| Generic Widget interfaces (A4)    | Ordinary real-object conversion handles two generic depths, wrong-type checks and a mounted JS subclass with a private field and build override.                                                                           | Specialized `widgetInterface` selection still rejects generic declarations.                                                                                                                                                                                                                                                  |
| Callback Map keys (A5)            | A plain JS callback currently becomes a different Dart key on repeated conversion. A weak memo normalizes it; the Dart Map keeps its key alive and clearing the Map allows collection.                                     | Normalize centrally by session, signature and relevant binding/scope context; do not reuse scoped callback ownership blindly.                                                                                                                                                                                                |
| Additional Core views (A6)        | Nine selected Core classes and EnumName/EnumByName extension views pass real calls. A JS string already converts to `Comparable<String>` through native Core input conversion.                                             | Add missing public Core selections/dependency closure; consumers must not republish Core providers.                                                                                                                                                                                                                          |
| Extension-type facade (A7)        | Erased representation functions, a named extension receiver and a JS facade work. The VM sees the representation type.                                                                                                     | A facade is feasible; a distinct runtime nominal identity cannot be recovered from erased values.                                                                                                                                                                                                                            |
| Proxy composition (A8)            | Compiled mixin methods, two named super-constructor entries in one compiled proxy, and abstract getter/concrete setter forwarding preserve JS private fields and super.                                                    | General selection and a coherent generated Dart/TS API remain to be implemented; runtime class synthesis is outside AOT.                                                                                                                                                                                                     |
| Widget collections (A9)           | List add/set/removeAt, Map set and Set add pass through existing conversion in the isolated prototype. A Dart List retains a JS Widget override through GC pressure and the Widget mounts correctly.                       | Production still blocks insertion/replacement. Mutating a collection does not request a Flutter rebuild.                                                                                                                                                                                                                     |
| Lazy Widget Iterables (A9)        | Native lazy values roundtrip without the finite guard. A single generic Iterator/Iterable prototype consumes one of 1,000 JS generator values only when Dart asks, and retains its callback through GC pressure.           | Raw JS Iterable decoding is still eager. A shared lazy adapter needs exception, early-stop, session-close and type coverage. Dart Iterator has no return/close hook: JS generator finally cannot be promised on early stop or GC.                                                                                            |
| Route/Page (A10)                  | Ordinary object references, callbacks, Future/Stream signatures and proxy properties use existing conversion and joint GC.                                                                                                 | Session admission is explicit. Native Routes and transitions do not retain Sessions; callbacks are revoked after close.                                                                                                                                                                                                      |
| Entry/provider coverage (A11)     | Separate Dart classes named Item remain isolated. The Dart compiler itself rejects an ambiguous barrel export.                                                                                                             | Automatic dependency closure, explicit naming choices and wider package delivery are not provided by Type handles.                                                                                                                                                                                                           |
| Widget/Set defaults (A13)         | Real omission keeps private default values and Set sentinel identity, without copying constants.                                                                                                                           | Extend the existing default rules consistently in automatic and explicit parsing.                                                                                                                                                                                                                                            |
| Void callback input (A14)         | The shared encoder delivers undefined, and a real TickerFuture callback resolves its Future correctly.                                                                                                                     | Generate a usable Dart callback argument local. A separate probe finds automatic top-level selection despite invalid `as void` emission, plus runtime argument-presence/decoder conflicts. Class-member selection separately rejects void inputs. A normal any-value forwarder works; full void-input semantics remain open. |
| Strict JS parameter names (A15)   | The uncorrected output fails TS1215. A legal local name with unchanged wire metadata passes strict TS, calls, subclassing and super.                                                                                       | Apply one shared local-name policy; do not silently remove valid Dart parameters.                                                                                                                                                                                                                                            |

Local logs, raw inventories, scenario results, prototype-only changes and binary audit
receipts are stored under `.local/binding-gap-feasibility-20261015/` (ignored). They
also record expected failures. A passing negative check means a boundary was verified;
it does not mean the rejected feature is implemented.

### Boundaries to preserve

These are not missing class-specific adapters to be patched away:

| Boundary                                                                                                                                              | Current usable alternative or reason                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Dart `final`/`sealed` forbid external extends and implements; `base` forbids implements; `interface` forbids extends.                                 | Wrap/read/call legal Dart objects and factories. Generate only proxies Dart permits. Sealed parents are not exhaustive TS unions because private children can be returned.       |
| JS `+`, `==`, Map/Set equality and prototype inheritance do not become Dart operations.                                                               | Use generated `operatorAdd` / `operatorEquals`, native collection APIs, authenticated `instanceof` and `asDart`. A selected generic class token can check actual Dart arguments. |
| Arbitrary JS objects do not implement Dart interfaces, and untyped Object positions do not supply callback/Widget signatures.                         | Use legal generated proxies, typed signatures, existing native references or explicit data conversion.                                                                           |
| Build/layout/lifecycle hooks and property writes remain synchronous unless their actual Dart signature allows an async value.                         | Use declared Future/Stream callbacks for asynchronous work. Joint GC does not change Flutter's synchronous call contracts.                                                       |
| Inactive Context/State, foreign-session handles, private APIs, immutable writes and positional omission holes remain rejected.                        | These preserve Flutter validity, Dart visibility, ownership and argument order.                                                                                                  |
| Public providers are compile-time selections, with Core owned once.                                                                                   | Non-Core packages may bind a declaration independently. A missing Core member is fixed in Core, not republished by a consumer.                                                   |
| Runtime-created Dart classes, unrestricted reflection, background JS isolates and shared isolate-group heaps are outside the current engine contract. | Bind selected compiled declarations on the supported UI isolate. New platforms and isolate models need separate engine acceptance.                                               |

### Batch implementation order and evidence

This retains the original audit grouping. The delivered table above and task acceptance
describe the subsequent shared completion.

Treat this as four cohesive work packages instead of one class at a time:

| Batch                                            | Scope                                                                                  | Exit evidence                                                                                                                                                                                 |
| ------------------------------------------------ | -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Selection parity and Core types (implemented) | A1, A12 and bounded A6 support through the default Core provider.                      | The same fixture has equivalent automatic/explicit member surfaces; generated Dart and strict TS compile; business field names, writes and retained callbacks pass real runtime tests.        |
| 2. Type descriptions and structural adapters     | A2 and A3 together, including method/constructor/callback input and result directions. | Nested tokens, actual Dart Types, unknown layouts and negative cases are distinguished; JS inheritance/override/super, release/AOT and joint GC pass without type-tuple code generation.      |
| 3. Flutter adapter consistency                   | A4; assess A9 against actual API demand and retain A10's explicit navigation path.     | Generic interfaces and callbacks work through the same object/host model; mount/unmount, reuse, delayed delivery and session close pass.                                                      |
| 4. Demand-driven facades and delivery            | A5, A7, A8 and A11.                                                                    | A concrete library/application justifies each addition; language boundaries stay explicit. TS syntax lowering and JS iterator convenience are ergonomics, not missing Dart object conversion. |

Fresh audit evidence: the existing 48-shape mechanism matrix passes every parse, emit,
Dart-analysis and strict-TS stage (44 supported, four representation-only extension-type
rows limited). Its zero-gap counters apply only to those measured shapes. The additional
audit probes originally identified A1/A4/A5/A6/A12 separately. A1/A6/A12 now have
[shared selection regressions](../../packages/flax_codegen/test/selection_parity_test.dart)
and [real UI regressions](../../packages/flax/test/ui/binding_parity_test.dart). The
reused Widgets inventory is historical and is not a fresh SDK census.

The preceding binding completion has macOS arm64 V8 debug/release-AOT evidence. The
native Widget-interface update in ADR 0044 is separately validated with macOS arm64 V8
debug tests; those earlier AOT and device results do not certify this update. Earlier
Android/iOS acceptance is not evidence for all extension-7 generic paths. Profile,
Android and iOS/Hermes need matching rebuilt artifacts and focused revalidation before
making those claims. The feasibility audit above used existing engine binaries and
targeted macOS UI scenarios; it did not rebuild an engine or run a whole platform
matrix. Joint-GC tail latency and general Future overhead remain separate performance
work; functional binding support does not establish a frame-time guarantee.

Source anchors:
[automatic rules](../../packages/flax_codegen/lib/src/auto_binding.dart),
[member selection](../../packages/flax_codegen/lib/src/bindability_impl.dart),
[parser](../../packages/flax_codegen/lib/src/parser.dart),
[signature validation](../../packages/flax_codegen/lib/src/model.dart),
[public type tokens](../../packages/flax/js/src/runtime/dart_types.ts), and
[runtime type adapters](../../packages/flax/lib/src/ui/dart_types.dart).

## Capability assessment model

Every declaration in a public-library inventory receives one verdict. Provider reuse is
recorded as a source, not as a capability level.

Core is reused by default. Outside Core, independent packages may bind the same Dart
declaration. Automatic selection reuses one adequate dependency provider; missing,
insufficient or ambiguous providers produce a complete local binding. Typed results
follow the selected signature, while erased results retain their originating package
through callbacks, Futures, collections and Streams. Cross-package views check actual
Dart types and share disposal and listeners. See
[ADR 0037](../decisions/0037-package-scoped-binding-providers.md).

Core's shared `asDart(value, Target)` validates the original Dart instance and exposes
an existing selected view. `getDartType(value)` explicitly reads diagnostic runtime-type
text. Object, collection, Widget, Context, State, Stream, enum and native callback
references retain their existing ownership and validity rules. Descriptors, raw JS data
and unregistered JS classes do not become Dart objects. Collection-bound generic outputs
describe standard collection views; checked casts recover nominal APIs when the actual
Dart value permits them. See
[checked views](objects.md#checked-views-and-dart-type-diagnostics).

Class static reads and writes are independent capabilities on every supported class
category. Reads use `Class.property`; writes use `Class.setProperty(value)`. They retain
their own types and operation identities in Manifest 24. Static declarations are not
inherited; a read-only provider cannot supply a write. A generated setter name collision
fails explicit selection or produces `static_setter_export_collision` in automatic
selection. See [static property rules](bindings.md#class-static-properties) and the
[generator regression](../../packages/flax_codegen/test/static_accessors_test.dart).

Ordinary static methods are also selected on Widgets and use the same function transport
as static accessors. This includes static-only classes and Widget interface namespaces;
native interface instance requirements are implemented by the original Dart Widget.

| Field        | Values                                                                                                                      | Meaning                                        |
| ------------ | --------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| `verdict`    | `supported`, `limited`, `unsupported`, `excluded`, `environmentBlocked`                                                     | The usable capability result.                  |
| `reasonKind` | `none`, `automationGap`, `generatorGap`, `configurationRequired`, `intentionalBoundary`, `dependencyBoundary`, `visibility` | Why a non-supported result exists.             |
| `source`     | `automatic`, `explicit`, `provider`, `inventory`                                                                            | Which route established the result.            |
| `stages`     | `automatic`, `explicit`, `parse`, `emit`, `compile`                                                                         | Independent evidence for each generator stage. |

`environmentBlocked` is reserved for an unavailable analyzer, compiler, SDK, or tool. It
does not stand in for an unknown capability. Every declaration receives a verdict.
Unnamed extensions are inventoried and classified as `excluded` because they have no
stable public binding name.

The closure gate requires zero unexplained `automationGap` and `generatorGap` entries.
An intentional boundary remains valid only when it has a stable code and a regression
fixture.

## Declaration support

Automatic member/parameter name selection and the inventory share explicit naming rules.
Public names containing `_` or `$`, such as `total_count` and `dollar$value`, are
supported. Property names such as `eval` and named parameters such as `arguments` remain
legal; reserved parameter locals are renamed without changing their wire names. Public
exports still reject reserved binding identifiers. Class namespace declarations retain
binding-name rules. Positional parameter names can start with `_` without exposing
private Dart members; the single `_` Dart wildcard remains excluded from automatic
parameters because proxy forwarding needs a local. Generated-name collisions retain
their existing checks. See the
[name regression](../../packages/flax_codegen/test/automatic_names_test.dart).

Bound class exports provide authenticated `Symbol.hasInstance` checks and TypeScript
narrowing across selected parent/interface/mixin views. Sealed parents retain their
legal factories and can discriminate selected public children; no illegal Dart proxy or
closed exhaustive TS union is generated. Checks add no Dart call. Generic arguments,
parent-only/provider views and descriptor-only values have the explicit
[instance-check limits](bindings.md#limits-of-javascript-instanceof).

| Declaration                                    | Verdict     | Current contract                                                                                                                                                                                                                                            |
| ---------------------------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Class and abstract class                       | Supported   | Automatic and explicit selection cover constructors, getters, setters, static members, methods, inheritance, generic owners, and representable callbacks. Abstract construction still requires a valid generated proxy.                                     |
| Class operators                                | Supported   | Representable ordinary object operators use explicit JS aliases; legal extends/implements proxies can override them. Equality is opt-in and requires hashCode on proxies; JS arithmetic and collection identity are unchanged.                              |
| Mixin and mixin class members                  | Supported   | Ordinary member surfaces can be selected and emitted. Applying mixins to generated classes is a separate capability.                                                                                                                                        |
| Generated arbitrary mixin composition          | Unsupported | Bind an actual Dart class composed with mixins through ordinary class binding. Generated new compositions remain limited to fixed State `proxyVariants`; runtime synthesis is not provided.                                                                 |
| Ordinary enum                                  | Supported   | Enum values and typed conversion are discovered automatically.                                                                                                                                                                                              |
| Enhanced enum                                  | Supported   | Public fields, accessors, methods, statics, named factories and operators use typed shared dispatch. Generic constants keep closed types; no JS construction, subclass or proxy is generated.                                                               |
| Typedef                                        | Supported   | Basic, generic, callback, collection, Record, Future/FutureOr, Stream, and nested targets retain their declared relationships when the target is representable.                                                                                             |
| Top-level function                             | Supported   | Synchronous, Future, Stream, callback, default-parameter and representable generic signatures are discovered automatically. Checked runtime `dartType` selection or fixed `typeArguments` supply concrete generic arguments.                                |
| Const, final, getter, mutable variable, setter | Supported   | Reads and writes are assessed independently. Dynamic values use uncached accessors; mutable values keep Dart state.                                                                                                                                         |
| Named extension                                | Supported   | Receiver views (`StringX('a').repeat(3)`) are discovered automatically. Getters, setters, static reads/writes (`StringX.setTimes(5)`), operators, callbacks and async values reuse ordinary conversion, including Context and supported Flutter references. |
| Generic extension                              | Supported   | Captured receiver and method parameters share ordinary conversion, including nested collection outputs, callbacks and async values. Named views select checked extension-owner and method types through `dartType(view, 'member', ...types)`.               |
| Unnamed extension                              | Excluded    | It has no stable exported binding name (`unnamed_extension`).                                                                                                                                                                                               |
| Extension type                                 | Limited     | Signatures use the erased representation. Selected members expose shared `Type.view(representation)` views; no independent nominal identity or implicit input unwrapping is invented.                                                                       |

Automatic proposal covers `classes`, `types`, `typedefs`, `functions`, `extensions`, and
`topLevel` selections from the same public inventory. Annotation filtering excludes
private, `@internal`, and `@visibleForTesting` surfaces. Public `@protected` members
remain callable and overridable through generated adapters. Deprecated public API can
still be selected and produces a notice.

Selected concrete extends methods and accessors enforce inherited `@mustCallSuper`.
Reads and writes are separate requirements, reentry restores the outer check, and
Future/FutureOr getters require super before returning a Promise. Interface-only
requirements do not transfer to implementations. See
[proxy property rules](proxy-properties.md).

Evidence:
[automatic proposal tests](../../packages/flax_codegen/test/bindability_test.dart),
[inventory tests](../../packages/flax_codegen/test/capability_inventory_test.dart),
[extension tests](../../packages/flax_codegen/test/extension_test.dart),
[enum tests](../../packages/flax_codegen/test/enum_test.dart), and
[mechanism tests](../../packages/flax_codegen/test/mechanism_coverage_test.dart).

## Type and signature support

| Type mechanism                        | Verdict   | Current contract                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Nullable values                       | Supported | Nullability is recursive and preserved through Manifest round-trip and TypeScript emission.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Never, Null and Core values           | Supported | Never preserves throwing/non-returning signatures through callbacks and async containers; nullable Never/Null accepts only null. Type and Symbol are native references. Every Record is a plain field object; concrete and broad inputs use shared construction without retaining the Record.                                                                                                                                                                                                                                                                                                                     |
| List, Map, Set, Iterable              | Supported | Ordinary API positions preserve element/key/value types and real Dart references. Callback map keys must remain representable.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Custom core collection subclasses     | Supported | Automatic and explicit object bindings combine selected native members with shared collection operations. Native name collisions retain Dart semantics; compatible typed inputs reuse the same object, and known generic targets specialize helper conversion on demand.                                                                                                                                                                                                                                                                                                                                          |
| Dart Iterator                         | Supported | Core supplies ordinary `Iterator<E>` references with read-only `current` and `moveNext()`. Automatic APIs reuse the provider and ordinary generic conversion, including callback elements, nullable/nested collections, async values, Records and Iterator callback roundtrips. Standalone JS Iterator inputs and a public `next()` facade are not added; the lazy JS Iterable bridge uses an internal shared adapter.                                                                                                                                                                                            |
| Record                                | Supported | Positional, named, and mixed Records recurse through callbacks, collections, async values, typedefs, and generics.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Future and FutureOr                   | Supported | Parameters, results, callbacks, proxy properties, nested collections, and returned callbacks use Promise/Future conversion without inventing ownership.                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Dart Stream                           | Supported | Parameters, results, callbacks, proxy properties, controllers, subscriptions, operators, and nested Streams preserve Dart stream semantics. Each layer stays lazy and independent; application controllers remain application-owned.                                                                                                                                                                                                                                                                                                                                                                              |
| Callback and returned callback        | Supported | Required/optional positional and named parameters, recursive results, typedef callbacks and generic callbacks share TypeRef validation. Recursive and captured bounds use real invocation types; returned generic callbacks support `dartType`.                                                                                                                                                                                                                                                                                                                                                                   |
| Recursive combinations                | Supported | The same recursive TypeRef rules apply to constructors, getters/setters, methods, top-level functions, callbacks, typedefs, inherited members, and dependency closure.                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Closed generic member views           | Supported | Declared signatures and provider Manifest models specialize changed getters, setters and methods. Views share one JS prototype and Dart identity, with weak JS wrappers cached per signature; distinct signatures keep independent argument guards.                                                                                                                                                                                                                                                                                                                                                               |
| Shared generic owner                  | Supported | One compiled owner factory uses legal analyzer defaults or checked explicit runtime arguments; TypeScript keeps the declared generic relationship.                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Generic constructor specialization    | Limited   | Ordinary object/native Widget targets use `dartType` with real engine-checked Type handles and no finite tuple catalog. Nested and equal-shape inputs share ordinary conversion; omitted types keep the legal bound default. Intrinsic Stream/enum and lifecycle adapters retain existing construction rules.                                                                                                                                                                                                                                                                                                     |
| Generic method/top-level function     | Limited   | Top-level functions and ordinary methods use legal default arguments or checked explicit runtime types. Generic results describe converted Dart references, not raw JS collection shapes. Acyclic dependent bounds resolve automatically. Shared `dartType` instantiates checked method/function adapters on first use; generic JS overrides use per-call super contexts across await. Recursive, mutually dependent and captured owner bounds use the same checked engine templates; missing legal defaults require explicit runtime type selection. Supported deferred factories reuse concrete result targets. |
| Provider-owned nominal type           | Supported | A dependency Manifest owner is a recursion boundary. The consumer preserves identity, nullability, and type arguments without expanding provider inheritance.                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Public carrier and dependency closure | Supported | Declaration identity chooses a same-package public carrier. Same-name different identities fail closed. Dependency-only types stay internal in automatic mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

Default omission preserves missing/`undefined` separately from explicit `null`. Up to
five independently omitted parameters use direct calls; six or more use `Function.apply`
without trimming the selected surface. Optional positional parameters keep linear tail
dispatch and reject holes.

`Bag<T>(List<T> items)` constructs its legal bound default when no type is supplied.
`Bag.$type(dartTypes.string)` (equivalently `dartType(Bag, dartTypes.string)`)
instantiates `Bag<String>` from real Type handles, including for empty arrays; the same
rule supports positional/named/empty constructors and phantom type parameters. Types are
selected before normal argument conversion. Equal JS shapes and numeric bounds remain
distinct type descriptions rather than inference domains. Unavailable converters and
invalid Dart bounds fail before construction; there is no finite type-tuple catalog.
Ordinary objects and native Widget views retain their selected member, callback and
async conversion. Private aliases share the public JS prototype and preserve native
peer/lease ownership. Constructor `data` positions do not change ordinary member
conversion. A plain-data constraint on `T` itself with an automatic native-view target
requires explicit class type arguments; invalid combinations are rejected before
generation.

Generic factories are generated once per declaration. Actual class/method arguments
instantiate those factories through engine binding extension 8 on first use. Conversion
and call adapters are cached by Type and provider context. Member metadata remains lazy,
including recursively growing signatures; only accessed views are materialized. Record
layouts use shared VM metadata and native construction. JS callback creation still needs
a compiled callback layout. See the
[member view regressions](../../packages/flax_codegen/test/collection_members_test.dart).

Evidence:
[recursive type tests](../../packages/flax_codegen/test/recursive_type_automation_test.dart),
[nested input tests](../../packages/flax_codegen/test/nested_constructor_inputs_test.dart),
[generic tests](../../packages/flax_codegen/test/generic_and_defaults_test.dart),
[constructor specialization tests](../../packages/flax_codegen/test/concrete_generic_specialization_test.dart),
[nested constructor tests](../../packages/flax_codegen/test/nested_generic_constructors_test.dart),
[provider tests](../../packages/flax_codegen/test/package_pipeline_test.dart), and
[Record tests](../../packages/flax_codegen/test/mechanism_coverage_test.dart).

## Flutter semantic support

| Semantic position                                                | Verdict                       | Current contract                                                                                                                                                                                                                                                                                                                                                  |
| ---------------------------------------------------------------- | ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Widget constructor value                                         | Supported                     | Widget inputs retain the normal Flutter tree and ownership rules.                                                                                                                                                                                                                                                                                                 |
| Automatic Widget instance getters and methods                    | Supported                     | Convertible computed and inherited members use the existing real object view, including final classes and returned Widgets without public constructors. Member factories take fixed typed inputs; reactive descriptions and JS lifecycle overrides retain their existing explicit paths. Generic references preserve their TypeScript arguments.                  |
| Mounted callback returning Widget or a selected Widget interface | Supported                     | Ordinary typed result conversion preserves native identity and selected interfaces, including nullable results, supported Futures/Streams and direct typed lists. Escaped configurations follow Dart references and GC; mounted subscriptions release at unmount.                                                                                                 |
| Ordinary callback with Context arguments                         | Supported                     | Functions, constructors, methods and returned Dart functions call JS directly with the actual native Context; indexed, named and optional arguments, nullable Widget results and supported Futures use shared conversion. No extra content host or inferred Route ownership.                                                                                      |
| Direct Context input and result                                  | Supported                     | Functions, members, top-level variables/getters and callbacks share weak borrowed Context identity, including null, typed aggregates and Future/FutureOr/Stream results. Shared conversion preserves derived collection reads and registered Record fields. Forged, foreign-session and unmounted values are rejected, including late events.                     |
| Async mounted Widget result                                      | Supported                     | Future/FutureOr/Stream reuse typed conversion for individual Widgets, selected interfaces and typed Widget aggregates. Completion promotes each configuration before temporary holds are released.                                                                                                                                                                |
| Widget callback aggregates                                       | Supported                     | List/Set/Map/Record and Iterable signatures share ordinary typed conversion, including nullable and async values. Custom JS and native Iterables remain lazy; each consumed element is validated.                                                                                                                                                                 |
| Flutter State lifecycle                                          | Supported                     | Flutter creates the real Dart State host. JS implements the Flutter lifecycle and makes explicit super calls. Flax does not automatically dispose application resources.                                                                                                                                                                                          |
| State inputs and callbacks                                       | Supported                     | Explicit and automatic functions, methods and callbacks share borrowed State conversion. Native wrappers and live JS State hosts retain real Dart identity. Returned/nested callbacks, nullable aggregates and supported Future/FutureOr/Stream compositions check validity at invocation or delivery. Forged, foreign-session and unmounted values are rejected. |
| Flutter properties and top-level values                          | Supported                     | Member/static/global values and ordinary extends/implements proxy properties share Widget/Context/State conversion, including null and typed aggregates. Dart-kept Widgets preserve JS overrides through GC. Stale Context/State and foreign references fail; static/global state remains application-owned.                                                      |
| Ordinary Widget collection input                                 | Supported                     | Functions, methods and extensions share recursive conversion, including native Widget lists, nullable/nested lists and supported async inputs. Each Widget keeps its existing configuration ownership and Flutter lifecycle.                                                                                                                                      |
| Ordinary proxy returning Widget                                  | Supported                     | Extends/implements methods share the getter converter, including nullable and concrete Widget results, native fallback and explicit super. Dart may retain and mount a JS subclass through joint GC.                                                                                                                                                              |
| State `proxyVariants`                                            | Supported                     | Ordered Analyzer-validated Dart mixins produce fixed host classes and project their interfaces. Variants do not inherit variants.                                                                                                                                                                                                                                 |
| Component-State interface conversion                             | Supported                     | A mounted JS State can be passed to Dart only through its live real State host and only when the generated variant implements the requested interface.                                                                                                                                                                                                            |
| Route, Page, and special lifecycle roles                         | Supported / limited lifecycle | Route/Page values use ordinary object conversion. Navigation annotations share ordinary function/callback signatures, with no observer, Context/root-Navigator parameter or synchronous-function requirement. They retain close admission and optional UI error roles; close revokes callbacks after mounted content drains.                                      |
| Disposable capability                                            | Supported                     | `dispose()` is an ordinary callable API and capability marker. Resource ownership remains with user code; session cleanup does not imply application disposal.                                                                                                                                                                                                    |

Runtime evidence is required only where ownership, retention, State, navigation, or
engine behavior changes. Pure language mechanisms close at parse, Dart/TypeScript emit,
`dart analyze`, and strict `tsc`.

Evidence: [component contract](components.md), [interop contract](interop.md),
[native callback tests](../../packages/flax/test/ui/native_callbacks_test.dart),
[Widget aggregate and Context tests](../../packages/flax/test/ui/widget_values_test.dart),
and [State variant tests](../../packages/flax_material_ui/test/ui/components_test.dart).

Context/State/Widget properties, globals and ordinary callable input evidence:
[generator and strict TypeScript tests](../../packages/flax_codegen/test/generator_test.dart),
[automatic selection tests](../../packages/flax_codegen/test/bindability_test.dart),
[shared extension/function/method runtime fixture](../../packages/flax/test/ui/extensions_test.dart),
and
[ordinary extends/implements proxy properties](../../packages/flax/test/ui/proxy_properties_test.dart).

Ordinary Widget factory and nested Stream callback evidence:
[Widget factory generation and strict TypeScript](../../packages/flax_codegen/test/widget_proxy_methods_test.dart),
[recursive Stream generation](../../packages/flax_codegen/test/async_stream_callbacks_test.dart),
and
[bidirectional lazy Stream tests](../../packages/flax/test/ui/async_stream_callbacks_test.dart).

Automatic Widget instance API evidence:
[generation and strict TypeScript](../../packages/flax_codegen/test/widget_members_test.dart)
and
[native identity, member calls and cleanup](../../packages/flax/test/ui/widget_members_test.dart).

Complex generic bounds are covered by
[automatic generation and strict TypeScript](../../packages/flax_codegen/test/complex_generic_bounds_test.dart)
and
[real V8 invocation, overrides, async super and joint collection](../../packages/flax/test/ui/complex_generic_bounds_test.dart).
They reuse one compiled template per declaration, including recursive classes, methods,
functions, named extensions and callbacks. A call without a legal default requires
`Class.$type` or `dartType`; actual argument bounds are checked by Dart.

## Stable boundary codes

| Code                                          | Verdict / reason                               | Example                                                                                                                                    |
| --------------------------------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `unnamed_extension`                           | `excluded / visibility`                        | `extension on String { ... }`.                                                                                                             |
| `unnamed_enum_factory`                        | `unsupported / intentionalBoundary`            | `factory Status()`: enums expose existing constants and named factories, without a JS construction entry.                                  |
| `constructor_specialization_missing_use_site` | `limited or unsupported / intentionalBoundary` | Legacy intrinsic/lifecycle constructor inference has no concrete use; ordinary object/native Widget owners use `$type`.                    |
| `constructor_specialization_ambiguous`        | `unsupported / intentionalBoundary`            | Legacy constructor inference has overlapping JS domains; ordinary object/native Widget owners use explicit runtime types.                  |
| `constructor_specialization_callback`         | `unsupported / intentionalBoundary`            | Legacy multi-target callback input needs explicit runtime arguments; ordinary object/native Widget construction does not enumerate tuples. |
| `unsupported_core_type`                       | `unsupported / intentionalBoundary`            | A core type lacks its selected conversion; an opaque Type/Symbol binding does not provide reflection or a generic Type token.              |
| `missing_export`                              | `unsupported / dependencyBoundary`             | No public carrier exposes the referenced declaration identity.                                                                             |
| `private_implementation_dependency`           | `unsupported / dependencyBoundary`             | A public signature depends on a private nominal type.                                                                                      |
| `provider_surface_insufficient`               | `unsupported / dependencyBoundary`             | Core owns the type but does not expose the requested member or constructor; it cannot be republished.                                      |
| `flutter_semantics_configuration_required`    | `limited / configurationRequired`              | A Route, Page, or lifecycle role cannot be inferred from type shape alone.                                                                 |

A new unsupported case must reuse an accurate code or add a code, fixture, and current
example. Error message text is presentation only and is not used to infer the primary
capability category.

## Reproducing the closure report

From the repository root:

```sh
(cd packages/flax_codegen && dart test)
dart analyze packages/flax_codegen

dart run packages/flax_codegen/tool/capability_verify.dart \
  --stage2-mechanisms \
  --out .local/flax-codegen-capability-closure

dart run melos run bindings:generate
dart run melos run bindings:check
dart run melos run check
dart run melos run check:ui
dart run melos run check:ui:v8
git diff --check
```

The mechanism report must contain every measured shape, independent automatic/explicit/
parse/emit/compile stage evidence, no unassessed bucket, and closure counts of zero for
unexplained `automationGap` and `generatorGap`. `.local` reports are evidence artifacts
and are not committed.

Only after these generator gates pass should a full Flutter SDK census or third-party
package pilot be used to discover library-specific coverage.
