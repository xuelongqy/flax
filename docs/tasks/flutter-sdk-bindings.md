# Task: Flutter SDK Binding Verification

Status: shared fixes validated; complete SDK matrix awaits revalidation after the
curated configuration migration

## Scope

Verify all 13 public `package:flutter/*.dart` entries and complete `dart:ui` using Flax
`7d17c920` on `feat/flutter-sdk-bindings` and maintained Flutter `092069ad26e` on
`flax/main`. The locked `material_ui` and `cupertino_ui` packages are comparison
targets, not substitutes for the SDK libraries. `vector_math` is an auxiliary provider.

Keep temporary SDK experiment outputs separate from production bindings. The curated
configuration follow-up below migrates the production selections and workspace links;
external dependency versions and engine binaries remain locked. CI, SDK rebuilds and
publication are outside this verification task.

## Initial evidence

The initial primary census contains 2,960 distinct source declarations. Counting
re-exported APIs separately would overstate that surface. Initially only Physics passed
generation, strict Dart/TS checks, bundling and reproducibility; Foundation generated
but failed strict checks, and the other public entries stopped during generation.

A real V8 Physics probe passed native calls, JS subclass overrides, private fields,
`super`, enums, checked casts and cleanup. Initial Foundation probes confirmed two real
runtime failures: a business `constructor` getter executed during proxy registration,
and Future subclasses rejected standard Promise adoption. These failures are retained as
baseline evidence, not current restrictions.

## Shared implementation

- Public protected members remain callable and overridable. Normalize selected members,
  disposer and listener metadata before comparing provider capabilities. Generated
  adapters isolate protected-use and retained-upstream deprecation diagnostics.
- Resolve dependency carriers by declaration identity and actual Manifest ownership.
  Independent packages may still bind the same Dart declaration. Consumers reuse
  compatible providers, including Core functions, without merging equal short names.
  Dart uses prefixed imports and JS uses provider namespaces.
- Preserve selected nominal bounds, inherited signatures and native buffer conversion.
  TypeScript views own their selected overrides and type-token witness, including
  covariant methods, mixins and typed-buffer projections. Private enum constants use the
  public `values` list; they retain indices and round trips without named JS exports.
- Future object subclasses share Promise adoption and standard completion methods;
  Stream object subclasses reuse typed subscription projection and async iteration.
  These adapters require the additive `native-async-objects` capability, with protocol
  24 and native ABI 2 unchanged.
- Capture proxy class identity before installing business accessors. Prefix converted
  proxy results to avoid business parameters named `result`. Build generic callback
  metadata in top-level typed factories: a session cache must not capture an instance or
  its per-call super closure.

The Future regression includes JS overrides, `super.then`, `await`, Promise adoption,
Stream iteration and discarded cross-heap cycles. Moving callback metadata out of the
instance scope fixes the confirmed receiver retention without changing engine GC.

## Verification workflow

Temporary owner packages use the production automatic pipeline. Build complete providers
before consumers and declare the actual binding dependencies. In particular, Services
must depend on the `vector_math` provider as well as Foundation/Scheduler and `dart:ui`;
otherwise its public Matrix4 re-export correctly creates an independent provider that
becomes ambiguous downstream.

Generation success, strict Dart analysis, TypeScript checking, bundling, reproducibility
and native acceptance are recorded separately. A generated provider that fails
compilation may unblock further diagnosis but is not accepted. Unsupported selection
skips retain their actual codes and reasons.

Current source tests, strict checks and V8 regressions are recorded under
`.local/flutter-sdk-fixes-20261017/`. The complete dependency matrix is
`graph-results.json`; logs retain failed controls separately. Initial census and runtime
receipts remain under `.local/flutter-sdk-bindings-20261017/`.

## Remaining acceptance

The previous layered SDK run exposed two separate blockers. Rendering generated Dart and
TS, but TS generic bounds assume complete structural parent views: for example,
`RenderBox.constraints` returns Core's deliberately smaller `BoxConstraints` view,
whereas `RenderObject.constraints` expects the separately generated full `Constraints`
view. Covariant `handleEvent` parameters have a related nominal/structural mismatch.
These are view-contract issues, not evidence that the Dart classes are unrelated. That
run also stopped on an unbound `InheritedWidget` runtime type argument in Widgets.
Material, Cupertino, Widget previews and both comparison packages were consequently
unexecuted in that matrix. No `any` widening or API exclusions have been used to claim
those entries passed.

Production bindings have been regenerated through the official command. The full
generator suite passed 620 tests; 59 focused regressions passed after the final enum and
fixture corrections. Maintained V8 passed 614 owner UI tests, all package examples and
the embedded aggregate application. Maintained Hermes passed 242 runtime/UI cases in the
debug arm64 simulator. Final Services regeneration also passed strict Dart/TS checks.

The initial workspace check stopped on three fixture-only analyzer diagnostics. After
correction, the remaining and affected stages passed in scoped reruns: analysis,
binding/FFI reproducibility, formatting, TypeScript, docs, archive consumers and native
configuration. These are composed results, not a claim that the initial command exited
successfully. `verification-receipt.json` and the individual logs retain the boundaries.

Complete the SDK compile matrix. Bundle and reproduce successful SDK outputs before
calling their static pipeline accepted. Representative native tests do not certify every
SDK API or another platform. Keep raw Function, dynamic mixin composition and structural
type-token deferrals unchanged.

## Curated configuration migration

A subsequent approved task moves default selections to `flax_bindings.yaml` and
`flax_components.yaml`. Declaration scopes reuse the automatic selector; only routing,
fixed State mixins, callback/lifecycle policy and deliberate surface overrides remain.
Rendering-only Widgets share an override that preserves reactive descriptions, while
native Widget views retain their real-object contract. The four production selection
files shrink from 1,881 to 586 lines. The previous class categories, IDs, members and
constructor parameters remain present; additional supported APIs are now inferred.

The Duration prototype includes native Dart calls and strict TypeScript declaration
emission for re-exported factories. Production generation, public-type projection and
module delivery reproduce through the official commands. Verification receipts and raw
logs for this follow-up live under `.local/binding-config-migration-20261017/`. This
configuration migration does not certify the complete Flutter SDK matrix above.

Follow-up validation passes 629 generator tests, 194 JS tests, 91 tool tests and eight
engine-tool tests; the Windows-only CDB self-test is skipped on macOS. Analysis,
formatting, strict TypeScript, documentation, archive consumers and native configuration
also pass. Workspace verification combines the successful preparation stages and scoped
reruns after correcting outdated fixture expectations.

Maintained V8 covers all 614 owner UI cases through the initial successful cases and two
focused reruns, followed by all seven owner examples and the aggregate application. The
initial run retains a stale capability assertion and a VM-service GC request timeout as
failed controls; the assertion is updated and the GC timeout does not recur in the
focused rerun. No GC behavior or timing assertion is changed. Maintained Hermes passes
242 runtime/UI cases in a relocated, signed iOS arm64 simulator debug application, with
zero failures and one embedded Hermes closure. Signals business subscriptions use the
existing signals-core instance and pass their four new behavior tests and public type
checks.
