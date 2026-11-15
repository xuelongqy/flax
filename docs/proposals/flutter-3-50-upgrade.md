# Flutter 3.50 Upgrade Proposal

Status: accepted for implementation on 2026-11-12. Current execution and acceptance
status are recorded in the [upgrade task](../tasks/flutter-3-50-upgrade.md).

Research date: 2026-11-12.

## Goal and scope

Move Flax and its maintained Flutter engine from the Flutter 3.47.9 / Dart 3.13.7
baseline to Flutter 3.50.0 / Dart 3.14.0. Adopt the target SDK directly rather than
supporting both Flutter generations. Preserve the existing Core, Material, Cupertino,
engine, and optional-plugin ownership boundaries.

This is an engine-and-bindings migration, not an ordinary application-level Flutter
version bump. The recommendation is **engine-first, target-only migration**, followed by
generated-surface and real-application verification. Updating version declarations alone
cannot produce a working Flax runtime.

### Global constraints

- Pin the maintained engine to upstream Flutter **3.50.0** and bundled Dart **3.14.0**;
  use Dart `^3.14.0` and Flutter `>=3.50.0` for Flax-owned package floors. Exact fork
  revisions and engine provenance remain mandatory despite those package ranges.
- Do not add Flutter-version switches, legacy SDK UI import aliases,
  `MaterialUiCompatibilityBridge`, `CupertinoUiCompatibilityBridge`, or an old/new
  engine revision allowlist. Fail clearly on an incompatible engine.
- Change generator sources, selections, and handwritten adapters before regenerating
  Dart, TypeScript, Manifests, public types, and application assets. Do not hand-edit
  generated output or invent per-widget bridge implementations.
- Retain macOS/Android arm64 V8 JIT and iOS arm64 V8 jitless. Preserve current
  deployment floors and supported build-mode restrictions unless verified native
  dependencies require a higher floor; do not expand platform support as part of this
  upgrade.
- Keep native ABI, UI protocol, Manifest format, and engine-extension versions
  independent. An upstream SDK bump alone is not a reason to bump all of them; version
  an actual changed contract explicitly. No commit, push, publication, or unrelated GC
  redesign is included.

### Approach options

| Approach                                                                                | Result                                                                                                     | Decision                       |
| --------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------ |
| Change version floors and regenerate against an ordinary SDK                            | Fast source-level feedback, but mismatched engine checks and custom Dart VM integration remain unresolved. | Insufficient as a deliverable. |
| Port the maintained engine, then migrate target-only bindings and consumers             | Keeps provenance explicit and isolates engine failures from generated API failures.                        | Recommended.                   |
| Combine the upgrade with new windowing, rendering backends, or a native-interop rewrite | Expands product scope and confounds regression diagnosis.                                                  | Defer.                         |

## Verified baseline and target

### SDK and engine provenance

| Identity                          | Current evidence                                                                                                                                                                                            | Target                                                                                                                                        |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Declared Flutter baseline         | [FVM pin](../../.fvmrc) and [workspace constraints](../../pubspec.yaml): 3.47.9.                                                                                                                            | 3.50.0 stable, released 2026-11-11.                                                                                                           |
| Maintained fork checkout          | [CI revision](../../.github/workflows/packages.yml): `4d8a992d5f4a8c983b45ce1b33aaae0474c70de8`, on `xuelongqy/flutter` / `flax/main`. Local cached framework version is `3.47.10-0.0.pre-69`, Dart 3.13.7. | A new maintained fork revision based on the exact upstream target; do not substitute the stock upstream revision for the fork revision in CI. |
| Upstream framework baseline       | [Runtime revision guard](../../packages/flax/lib/src/native/native_runtime.dart): `c197ca5199e9ee5661e865596c9c07294dfab51c`.                                                                               | `ab2912035e160d9cad6306df307576da6128ebdb`, the official 3.50.0 tag.                                                                          |
| Upstream engine artifact revision | Local cached SDK metadata records `89c39edfdfae2949f6806e4a315c0c08522238b7`; this is not the fork HEAD or the runtime's framework-baseline ID.                                                             | Official 3.50.0 engine pin: `371f77202a73e8dff57a8b3bff75bca55c090aee`; record the custom engine's actual build identity separately.          |
| Upstream Dart source revision     | [Runtime guard](../../packages/flax/lib/src/native/native_runtime.dart): `416e33b0ffaef062a60ec966bb8c82ed2b83f128`.                                                                                        | `fa8c1270c374c1346931583a17c3b7f278d3822d`, Dart 3.14.0.                                                                                      |

The maintained fork's engine-local `flax/source.lock.json` also pins the upstream
Flutter and Dart source revisions. Its location is relative to the configured Flutter
checkout, not an additional file to create in this repository. The fork HEAD, upstream
framework baseline, engine revision/content hash, Dart revision, and V8 SDK artifact
hashes are different identities and must not be interchanged.

Release identity is verified against the
[official SDK archive](https://docs.flutter.dev/install/archive),
[3.50.0 engine pin](https://github.com/flutter/flutter/blob/3.50.0/bin/internal/engine.version),
and [3.50.0 DEPS](https://github.com/flutter/flutter/blob/3.50.0/DEPS). No official SDK
archive was downloaded or checksum-certified during this research.

### Independent design packages

| Dependency | Current pin                                                                                                     | Proposed pin                                                                                                                                                                    |
| ---------- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Material   | [Material manifest](../../packages/flax_material_ui/pubspec.yaml): `material_ui: 1.9.0`.                        | `material_ui: 1.11.0`.                                                                                                                                                          |
| Cupertino  | [Cupertino manifest](../../packages/flax_cupertino_ui/pubspec.yaml): `cupertino_ui: 1.1.5`.                     | `cupertino_ui: 1.1.6`.                                                                                                                                                          |
| Generator  | [Codegen manifest](../../packages/flax_codegen/pubspec.yaml): analyzer 13.3.0, dart_style 3.1.14, build 4.0.11. | First verify with Dart 3.14. Upgrade exact pins only where target-language or analyzer API support requires it; adapt directly to the chosen API, without dual-version support. |

The two proposed design-package versions are the published stable versions observed on
the research date. Their declared SDK constraints admit Flutter 3.50, but that is not
runtime certification. Review their exact published sources rather than assuming that
SDK release notes describe every independently released package API.

## What Flax already has

- The [Material selection](../../packages/flax_material_ui/bindings/flax_bindings.yaml)
  and
  [Cupertino selection](../../packages/flax_cupertino_ui/bindings/flax_bindings.yaml)
  already target standalone packages with automatic discovery. No package split or new
  compatibility facade is needed.
- Core already has
  [automatic Widgets discovery](../../packages/flax/bindings/flax_sdk_widgets.yaml) and
  separate public SDK-library selections. New supported SDK declarations should flow
  through those existing mechanisms.
- [Navigator.popUntilWithResult](../../packages/flax/js/src/flutter/generated/libraries/widgets/_bindings/flutter_Navigator.ts)
  already exists. Flutter 3.50 fixes result delivery with local history; this needs a
  regression check, not a second navigation API.
- [DropdownButtonFormField](../../packages/flax_material_ui/js/src/generated/libraries/material/_bindings/material_DropdownButtonFormField.ts)
  already binds `enabled` and optional `onChanged`, from Material 1.8+. Check behavior
  and migrate any Flax-owned call sites that incorrectly use a null callback as the only
  disabled-state control.
- Runtime allocation already rejects mismatched engines. Keep that fail-closed behavior,
  and update its single accepted target together with the maintained fork's metadata.

## Required migration work

### 1. Maintained engine and Dart VM integration — highest risk

The Flutter fork owns the current native bridge, Dart VM patches, compiler integration,
and runtime packaging. The local SDK package does not build an independent replacement
engine; see the [V8 package contract](../../packages/flax_engine_v8/README.md) and
[runtime design](../../docs/architecture/runtime.md).

Port the fork to the exact 3.50.0 base, then review the custom patches against Dart 3.14
rather than carrying them forward mechanically. Focus on cross-heap marking and weak
references, safepoints, owner-thread/checkpoint ordering, Dedicated Worker shutdown,
runtime Type handles, generated generic invocation, compiler-supplied default arguments,
font integration, and texture interoperability. Consolidate the patch set for that one
Dart revision and retire obsolete old-checkout patch-upgrade branches once the new patch
is verified; preserve idempotence and never reset or stash unrelated checkout changes.

Concrete upstream checkpoints include iOS thread-topology changes, removal of
`mergeAfterLaunch`, VSync/touch scheduling changes, asynchronous first-frame waiting,
and removal of the serial-GC flag. These are review targets, not proof that the Flax
implementation is broken. Verify them using matching builds and tests.

Dart 3.14 also withdraws accidentally shipped experimental synchronous Isolate APIs and
gates `NativeCallable.isolateGroupBound` behind an experiment. Targeted research found
no direct use in Flax's selected Dart APIs or engine patches. Keep this as a
source-audit check, not an invented mandatory rewrite or a reason to enable shared-data
experiments.

Retain the current V8 version and verified producer artifacts initially. Flutter 3.50
does not itself require upgrading V8 or Dawn. Rebuild those dependencies only if the
port exposes a demonstrated toolchain or ABI requirement.

### 2. Complete the design-library migration; repair import selection at its source

The
[official migration guide](https://docs.flutter.dev/release/breaking-changes/material-ui-and-cupertino-ui)
says the SDK design libraries are **deprecated**, not removed, in 3.50. Nonetheless,
Flax-owned implementation and examples should move directly to the standalone libraries.

Confirmed residuals include the
[permission dialog](../../packages/flax_permissions/lib/src/dialog.dart),
[standalone entry](../../examples/standalone/lib/main.dart),
[default binding application](../../examples/configured_bindings/default_app/lib/main.dart),
test fixtures, and generated Core imports. Mixing old and new design classes is not
merely a warning problem: the packages have distinct Dart type identities, and a theme
bridge cannot repair public-signature mismatches.

The [automatic carrier discovery](../../packages/flax_codegen/lib/src/auto_binding.dart)
currently chooses a public re-export alphabetically when the declaration is not itself
public. This can select the old Cupertino SDK barrel for Core-owned types; the
[generated State callbacks](../../packages/flax/lib/src/generated/state_callbacks.dart)
are a concrete example.

Fix public-carrier selection generically: preserve exact declaration identity and
ownership, prefer an appropriate non-deprecated public carrier and the nearest valid
export path, and use deterministic ordering only to break equivalent ties. Keep explicit
source declarations authoritative. Do not fix this with a Flutter-name blacklist, a
hardcoded URI replacement table, generated-file edits, or a new Core dependency on
standalone Cupertino.

Update direct dependencies with the import changes. In particular, the
[permissions package](../../packages/flax_permissions/pubspec.yaml) currently lists
Material only as a development dependency even though its library uses Material; move
the needed direct dependency into production dependencies. The
[default application manifest](../../examples/configured_bindings/default_app/pubspec.yaml)
needs a direct Material dependency after its import is migrated. Audit other owners
similarly.

Use standalone localization delegates, normally `GlobalMaterialLocalizations.delegates`
or the Cupertino equivalent. Do not introduce Intl JS bindings just to expose concrete
translation implementations, and do not delete an upstream transitive
`flutter_localizations` dependency by force.

### 3. Regenerate the complete binding surface; remove removed SDK members

Regenerate Core providers before their Cupertino/Material and consumer outputs, using
the established package pipeline. Include Dart adapters, TypeScript runtime and
declarations, Manifests, public type packages, JS module plans, test fixtures, and
bundled example assets. Review automatic skip-reason changes so a generator failure
cannot masquerade as a successful API removal.

A confirmed breaking delta is removal of `ignoringSemantics` from `IgnorePointer`,
`AbsorbPointer`, `SliverIgnorePointer`, and corresponding render objects. The
[current IgnorePointer binding](../../packages/flax/js/src/flutter/generated/libraries/widgets/_bindings/flutter_IgnorePointer.ts)
still exposes it. The target outputs must remove constructor arguments, getters/setters,
proxy/super members, and metadata consistently. Flax-owned callers should use the
appropriate semantics widgets; do not keep a compatibility parameter that silently
ignores the old argument.

Check handwritten constructor selections and proxy overrides as well as automatically
discovered constructors. The
[painting selection](../../packages/flax/bindings/flax_sdk_painting.yaml) and
[rendering selection](../../packages/flax/bindings/flax_sdk_rendering.yaml) explicitly
enumerate text-related arguments, so new `Hyphens` inputs can otherwise be lost despite
successful regeneration.

Preserve native omission and null semantics. Do not copy new Flutter defaults into
JavaScript or replace source-owned behavior with a parallel implementation.

### 4. Update handwritten image and sandbox adapters — correctness and security

| Target change                                                                                          | Flax migration                                                                                                                                                                                                                                                                                    | Required evidence                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `Image.asset/file/network/memory(useLogicalCacheSize: false)` and `ResizeImage(useLogicalSize: false)` | Add target arguments through the [sandbox factories](../../packages/flax/lib/sandbox_ui.dart), [selected-file resize subclass](../../packages/flax/lib/src/sandbox/selected_images.dart), and replacements for `resizeIfNeeded`. Preserve selected-file checks, key registration, and revocation. | Target-Dart parity at different device pixel ratios; logical dimensions use DPR and rounding, physical behavior remains the default, and cache invalidation still works. |
| `FadeInImageTransition` and nullable fade-out inputs                                                   | Update `sandboxFadeAssetNetwork` and any selected constructors for the target signature. Preserve omitted/null `fadeOutDuration` and `fadeOutCurve` so `fadeInOver` does not receive the old wrapper's eagerly supplied defaults. Forward cache-size options to both providers.                   | Sequential defaults match native Dart; `fadeInOver` succeeds with omitted/null fade-out inputs and rejects invalid explicit values exactly as Flutter does.              |
| `DecorationImage.placeholder`                                                                          | Extend the [painting guard selection](../../packages/flax/bindings/flax_sdk_painting.yaml) and handler to validate both the main provider and optional placeholder.                                                                                                                               | A valid main provider cannot hide an untrusted placeholder; revoked/foreign files and bundles remain rejected, and both load/error paths preserve ownership.             |
| Existing `loadBuffer` handling                                                                         | Audit against the exact target source; retain required guards for any still-selected public operation.                                                                                                                                                                                            | Do not delete a security hook on the mistaken premise that `loadBuffer` was removed in 3.50; it remains present and deprecated.                                          |

The versioned source of truth is
[Image](https://github.com/flutter/flutter/blob/3.50.0/packages/flutter/lib/src/widgets/image.dart),
[image providers](https://github.com/flutter/flutter/blob/3.50.0/packages/flutter/lib/src/painting/image_provider.dart),
[FadeInImage](https://github.com/flutter/flutter/blob/3.50.0/packages/flutter/lib/src/widgets/fade_in_image.dart),
and
[DecorationImage](https://github.com/flutter/flutter/blob/3.50.0/packages/flutter/lib/src/painting/decoration_image.dart).

### 5. Build and host integration

**Android:** update the Flax-owned
[secure-storage Android plugin](../../packages/flax_secure_storage/android/build.gradle.kts),
which currently pins AGP 9.0.1 and minSdk 23. Target the 3.50 template toolchain
directly: AGP 9.3.1, Gradle 9.5.0, Java 17, Android minSdk 24, and built-in Kotlin where
all selected plugins support it. Do not retain an old/new AGP branch or manually apply
KGP beside built-in Kotlin.

The 3.50 tool checker has hard floors of AGP 9.1.1 and Gradle 9.3.1; separate KGP, when
applied, has a 2.4.10 floor. Template values are not interchangeable with minimum
requirements. Flutter defaults compile/target SDK 36 and NDK 28.2.13676358, but the
[existing Flax staging configuration](../../tool/src/platform_application.dart)
intentionally uses compile SDK 37 and NDK 30.0.16248370. Verify those overrides against
the locked V8 producer and plugins; do not blindly downgrade them to template values.
Most example platform projects are generated by tooling, not checked-in Android
application trees.

Release builds now reject untrusted Intent configuration and ignore engine flags
supplied in Intent extras. Audit add-to-app entrypoints, routes, cached engines, and
launch tests. The existing [Android launcher](../../tool/src/platform_application.dart)
uses a plain component launch, not flag injection, so there is no confirmed launcher
rewrite. Add release-path verification without bypassing the upstream security policy or
changing launcher activities to non-exported as a blanket fix.

**Apple:** retain Flax's current base-engine macOS 15.0 / iOS 16.3 application floors
and existing arm64/JIT policies. Optional WebGPU separately requires macOS 26+, arm64,
the supported engine interop extension, and the actual Impeller-Metal renderer; do not
lower or remove those guards. Preserve the iOS Extended Virtual Addressing entitlement
and provisioning needed by DrumBrake's virtual-memory reservation. Flutter's lower
supported-platform floors do not lower the requirements of Flax's native artifacts.
Verify the actual Xcode/compiler chosen for the maintained engine and host; Xcode 27
feature support is not a universal Xcode 27 minimum.

SwiftPM migration is useful forward-looking work, but 3.50 has not removed CocoaPods or
SwiftPM opt-out. Audit Flax-owned plugin manifests and native-asset linkage, especially
WebGPU, and move remaining Pod-only owners to SwiftPM as a bounded follow-up or
independently accepted part of the platform task. Do not claim a completed SPM-only
dependency graph until all selected plugins and relocated consumers build; do not add
legacy-Flutter compatibility code to achieve it.

## New APIs worth validating through existing bindings

This is a small verification set, not a plan to handwrite a wrapper for every
release-note item.

| Area                          | Target surface                                                                                                                                                                         | Verification focus                                                                                                                                                                                                                                 |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Scrolling                     | `SliverClipRect`, `SliverClipRRect`, `ClipOverlapBehavior`; `ListView.separated.itemExtentBuilder`; `ScrollPhysics.shouldUpdate`.                                                      | Native sliver layout and overlap clipping; item/separator indices, lazy construction, and synchronous callbacks. Preserve existing proxy policy: adding arbitrary JS subclassing for `ScrollPhysics` is not required to update its object binding. |
| Text and accessibility        | `Hyphens`, `MediaQueryData.reduceMotion`, `SemanticsRole.slider`, `FocusableActionDetector.skipTraversal`, `TextInputType.numberWithOptions(password:)`, `AutofillHints.emailOTPCode`. | Enum/default/nullable signatures and inherited-context dependencies; add targeted tests for actual selected calls, not only export existence.                                                                                                      |
| Painting and images           | Logical cache sizes, `FadeInImageTransition`, `DecorationImage.placeholder`, `RawImage` / `RenderImage.blendMode`.                                                                     | Native default/omission parity and sandbox resource validation, as above.                                                                                                                                                                          |
| Navigation and callbacks      | SDK `showGeneralDialog.barrierBuilder`; existing `Navigator.popUntilWithResult` behavior.                                                                                              | Native Context, synchronous builder ownership, local-history results, Future delivery, and session-close cleanup.                                                                                                                                  |
| Standalone Material/Cupertino | Material 1.10/1.11 additions such as `Checkbox.markInsets`, expressive ElevatedButton states, theme `variantOf` queries, and `Springs`; Cupertino 1.1.6 fixes.                         | Regenerate from the exact pinned packages, preserve providers and source ownership, review changed visual/semantics defaults such as the minimum 24dp primary TabBar indicator.                                                                    |

The latest published
[Material 1.11.0 showDialog API](https://pub.dev/documentation/material_ui/1.11.0/material_ui/showDialog.html)
does **not** expose `barrierBuilder`. Do not infer a missing Flax binding from an
SDK-blog example, or synthesize that parameter on the standalone package. Likewise, an
article's reference to contemporaneous main-branch `SliverTransform` work is not
sufficient evidence of a 3.50-stable API; include it only if the exact target source
exports it.

Native text rendering now handles soft hyphens and corrects mixed-RTL `WidgetSpan`
positioning. Compare Flax output with a native Dart control, remove only confirmed old
workarounds, and account for known upstream soft-hyphen limitations rather than
recreating shaping in JS.

## Execution plan and verification gates

Implementation is not authorized by this proposal alone. Once accepted, use the native
`subagent-driven-development` or `executing-plans` skill as appropriate, with
independent review and acceptance. Do not create commits automatically.

### Phase 1 — Establish the matching maintained engine

- [ ] Record the initial Flax/fork working trees, exact SDK and producer provenance,
      selected platform tools, and baseline failures. Preserve unrelated changes and
      maintained build outputs.
- [ ] Port the maintained fork and Dart patches to the exact target above. Update its
      source lock, native metadata, and Flax's single-target revision guard together;
      keep the V8/Dawn pins unless a concrete requirement changes them.
- [ ] Build the maintained macOS arm64 Debug engine first, then verify generated versus
      cached `sky_engine`. Ensure framework analysis, engine-generated SDK declarations,
      host tools, and the test engine all select the same patched SDK.
- [ ] Run engine-owned patch/default-call fixtures and matching host/target smoke checks
      that do not depend on Flax's obsolete generated 3.47 bindings. Expected result: a
      usable patched target SDK and compiler. Full Flax runtime/UI gates follow Phase 2
      regeneration; do not require incompatible old generated adapters to compile in
      order to complete this engine bootstrap.

### Phase 2 — Migrate package graph, imports, and generator inputs

- [ ] Update [workspace constraints](../../pubspec.yaml), [FVM pin](../../.fvmrc),
      package/example/template SDK floors, design-package pins, and
      [CI engine revision](../../.github/workflows/packages.yml). Resolve intentional
      dependency updates and review both lockfiles; retain the independent ffigen tool
      environment unless its actual requirements change.
- [ ] Migrate handwritten SDK UI imports and delegate use; put each new dependency in
      its real owning package and correct production versus development placement.
- [ ] Fix canonical public-carrier selection and extend
      [carrier tests](../../packages/flax_codegen/test/automatic_type_carrier_test.dart)
      with a deprecated re-export and an active alternative. Cover exact identity,
      deterministic output, provider ownership, and both CLI and Builder discovery.
- [ ] Update handwritten signature selections/adapters, regenerate providers and
      consumers, and run `bindings:check`, Dart analysis, JS type checking,
      public-package checks, and focused runtime/GC/generic/default-call tests with the
      new engine. Expected result: no removed `ignoringSemantics` surface, no
      Flax-generated Core dependency on deprecated design barrels, and genuine Flax
      execution without bypassing revision checks.

### Phase 3 — Verify target UI behavior and security

- [ ] Extend the [image sandbox tests](../../packages/flax/test/ui/sandbox_test.dart)
      and relevant sandbox/resource tests for DPR-aware caching, selected-file
      revocation, both DecorationImage providers, and FadeInImage omission/null
      behavior.
- [ ] Add a compact target-SDK binding fixture beside the
      [existing SDK capability tests](../../packages/flax/test/ui/sdk_capabilities_test.dart)
      for sliver clipping, separated-list extent callbacks, and selected
      text/accessibility/painting signatures. Ensure generated unsupported reasons
      remain explicit.
- [ ] Extend the
      [navigation owner tests](../../packages/flax_material_ui/test/ui/navigation_test.dart)
      and existing callback/default tests where target behavior changes. Test
      `popUntilWithResult` with local history, dialog callback lifetime, native Context,
      and cleanup without adding a parallel navigation model.
- [ ] Compare soft-hyphen, RTL WidgetSpan, localization, themes, and changed Material
      defaults against native Dart controls; keep tests proportional to actual
      Flax-owned contracts. Expected result: source-owned semantics are preserved rather
      than emulated in JS.

### Phase 4 — Verify platform hosts and optional native plugins

- [ ] Update secure-storage Android build inputs and generated-project handling for the
      selected modern AGP/Kotlin/Gradle stack. Verify existing NDK/API overrides and
      retain only those still required by actual artifacts or plugins.
- [ ] Build and run Android arm64 Debug and Release/AOT applications, including valid
      deep links and negative external-Intent configuration cases. Verify native ELF
      alignment and execution on the selected 4 KB / 16 KB page-size targets, SDK C++
      runtime closure, and the explicit Android build-tools pin. Confirm release gates
      do not depend on injected launch flags.
- [ ] Build/run iOS arm64 simulator Debug and signed device Release/AOT with matching
      macOS host tools. Verify jitless Wasm/DrumBrake, merged-thread behavior, signing,
      lifecycle, and sustained GC where those contracts are in the acceptance scope.
- [ ] Verify Core Canvas and optional WebGPU/FFI/media/storage consumers with the
      matching engine. Check texture orientation, synchronization, resize, teardown, and
      native packaging. Track SPM-only conversion separately if it cannot be completed
      within the accepted platform scope.

### Phase 5 — Full acceptance and reproducibility

- [ ] Build the matching macOS Profile and Release engines and host/compiler artifacts
      before the corresponding application and standalone relocation gates. Run the
      workspace, full selected UI/aggregate, standalone outside-consumer, and archive
      checks with the new matching engine. Verify macOS Debug/Profile/Release behavior,
      hot reload/restart, joint GC, and relocated applications separately from static
      checks; the iOS build-mode restrictions in Phase 4 remain unchanged.
- [ ] Update CI caches/provenance and preserve `sky_engine` comparisons after engine
      build, Pub resolution, and checks. A hosted run additionally requires the new
      maintained-fork SHA to be remotely available through a separately authorized
      commit/push; local verification is not evidence of a hosted pass. The existing CI
      job does not certify all UI/GPU/mobile behavior; retain explicit local/device
      receipts.
- [ ] Update the [README](../../README.md), [contribution guide](../../CONTRIBUTING.md),
      [runtime contract](../../docs/architecture/runtime.md), affected package guides,
      and stale platform descriptions to the exact validated support matrix. Regenerate
      maintained coverage reports when their inputs change; do not rewrite historical
      receipts as new-version evidence.
- [ ] Obtain independent review and acceptance of the actual changed fork and Flax
      working trees. Record pass/fail/unrun results and remaining platform limits. Do
      not describe the upgrade as fully delivered while a required selected gate still
      fails or remains unrun.

### Command map

Use repository-volume temporary directories before Dart, Flutter, Node, or Python
checks:

```sh
mkdir -p "$PWD/.local/tmp"
export TMPDIR="$PWD/.local/tmp" TMP="$PWD/.local/tmp" TEMP="$PWD/.local/tmp"
```

Intentional dependency resolution and generation during implementation:

Use the maintained checkout on PATH and the already-built matching host Debug artifacts;
`FLUTTER_ROOT` must identify that checkout. Bare Pub can replace its custom SDK cache.

```sh
env -u FLUTTER_ENGINE flutter \
  --local-engine-src-path="${FLUTTER_ENGINE:-${FLUTTER_ROOT:?Select the maintained checkout}/engine/src}" \
  --local-engine=flax_mac_debug_arm64 --local-engine-host=flax_mac_debug_arm64 \
  pub get
pnpm install
dart run melos run bindings:generate
dart run melos run ui:bundle
```

Reproducibility and principal workspace/runtime gates, after the matching engine exists:

```sh
env -u FLUTTER_ENGINE flutter \
  --local-engine-src-path="${FLUTTER_ENGINE:-${FLUTTER_ROOT:?Select the maintained checkout}/engine/src}" \
  --local-engine=flax_mac_debug_arm64 --local-engine-host=flax_mac_debug_arm64 \
  pub get --enforce-lockfile
pnpm install --frozen-lockfile
dart run melos run bindings:check
dart run melos run check
dart run melos run check:runtime
```

Real UI/application gates remain separate. The three engine-application modes below are
for macOS arm64 with matching engine and host artifacts; select that target rather than
inheriting a mobile `FLAX_CHECK_TARGET`. Mobile gates retain the Phase 4 mode
restrictions:

```sh
dart run melos run check:ui
dart run melos run check:standalone
dart run tool/check_engine_application.dart debug
dart run tool/check_engine_application.dart profile
dart run tool/check_engine_application.dart release
```

Use the existing `FLAX_CHECK_TARGET`, `FLAX_CHECK_DEVICE`, and signing-team environment
variables for mobile application gates as documented in the
[contribution guide](../../CONTRIBUTING.md). Check hot reload/restart and optional
native plugins through their existing owner commands. These are future execution
instructions, not commands run during this planning task. Ordinary `check` and
`native:configure` never build or fetch the maintained engine.

## Risks, exclusions, and open execution facts

### Principal risks

| Risk                                                                                        | Treatment                                                                                                                                              |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Custom Dart VM patch compiles but breaks GC, generics, default omission, or worker teardown | Gate the maintained engine first; require real runtime and AOT evidence.                                                                               |
| Generated APIs disappear because a new type or callback was skipped                         | Review source-to-Manifest additions/removals and skip reasons, not just compilation success.                                                           |
| New image inputs bypass existing sandbox checks or reintroduce stale defaults               | Migrate handwritten adapters with two-provider and revocation tests before exposing the new arguments.                                                 |
| Platform tooling, texture integration, or third-party plugins lag the target                | Verify the selected native dependency graph and record exact platform limits; do not add old-Flutter compatibility branches.                           |
| Existing failures are attributed to the upgrade, or hidden to claim success                 | Reproduce and record the baseline; keep original assertions. Required gates must pass, and broader unpassed suites must not be presented as certified. |

The [current runtime scope](../../docs/architecture/runtime.md) already records expanded
Android refresh/cleanup failures reproduced with the pre-migration engine. That
documentation is not a fresh baseline test result. Reproduce relevant failures before
implementation; address any that block the accepted gate rather than silently waiving
them. Current CI source is authoritative over historical retired-platform workflow
descriptions.

### Explicitly outside this migration

- Experimental desktop multi-window, WebParagraph, Flutter web/Wasm product support, and
  unrelated new rendering backends. Flax native Wasm in V8 is not Flutter's browser
  compiler backend.
- Blanket HCPP enablement: the announcement's beta-default status is not a
  stable-default guarantee. Test existing platform-view consumers; treat HCPP adoption
  as a separate measured decision.
- Replacing Flax's JS/Dart/native bridge with JNIgen, Pigeon, or new FFIgen APIs. Their
  stability announcements do not obsolete the current architecture or require a C ABI
  change.
- Removing all deprecated SDK operations, historical package formats, or generic runtime
  fallbacks. Remove old-Flutter compatibility only where relevant; a still-supported
  target API or an independent package-version contract is not automatically
  legacy-Flutter code.
- Intel/Linux/Windows expansion, a new V8/Dawn version campaign, release publication,
  and the unrelated joint-GC proposal.

Exact new analyzer/formatter versions, final maintained-fork SHA, engine artifact
hashes, and plugin build results remain execution facts. Do not invent them in advance.
No confirmed dependency blocker has been established by this read-only research.

## Sources

### Release and independent package identity

- [User-provided Flutter 3.50 / Dart 3.14 article](https://juejin.cn/post/7706740008510963722).
- [Official Flutter 3.50 announcement](https://flutter.dev/blog/whats-new-in-flutter-3-50),
  [release notes](https://docs.flutter.dev/release/release-notes/release-notes-3.50.0),
  and [SDK archive](https://docs.flutter.dev/install/archive).
- [Dart 3.14.0 changelog](https://github.com/dart-lang/sdk/blob/3.14.0/CHANGELOG.md).
- [Material versions](https://pub.dev/packages/material_ui/versions),
  [versioned Material changelog](https://github.com/flutter/packages/blob/material_ui-v1.11.0/packages/material_ui/CHANGELOG.md),
  and [Cupertino versions](https://pub.dev/packages/cupertino_ui/versions).

### Migration and platform rules

- [Material/Cupertino package migration](https://docs.flutter.dev/release/breaking-changes/material-ui-and-cupertino-ui)
  and
  [DropdownButtonFormField enabled semantics](https://docs.flutter.dev/release/breaking-changes/dropdownbuttonformfield-enabled-parameter).
- [Android release engine flags](https://docs.flutter.dev/release/breaking-changes/restrict-android-engine-flags-release-mode)
  and
  [entrypoint Intent verification](https://docs.flutter.dev/release/breaking-changes/stricter-android-entrypoint-intent-verification).
- [Versioned Gradle defaults](https://github.com/flutter/flutter/blob/3.50.0/packages/flutter_tools/lib/src/android/gradle_utils.dart),
  [hard dependency checks](https://github.com/flutter/flutter/blob/3.50.0/packages/flutter_tools/gradle/src/main/kotlin/DependencyVersionChecker.kt),
  and
  [built-in Kotlin migration](https://docs.flutter.dev/release/breaking-changes/migrate-to-built-in-kotlin/for-app-developers).
- [Soft-hyphen behavior](https://docs.flutter.dev/release/breaking-changes/soft-hyphen-rendering),
  [RTL WidgetSpan behavior](https://docs.flutter.dev/release/breaking-changes/widgetspan-rtl-bidi-order),
  and
  [separated-list API](https://api.flutter.dev/flutter/widgets/ListView/ListView.separated.html).
- [Supported platforms](https://docs.flutter.dev/reference/supported-platforms),
  [SwiftPM plugin guide](https://docs.flutter.dev/packages-and-plugins/swift-package-manager/for-plugin-authors),
  and
  [versioned Xcode checks](https://github.com/flutter/flutter/blob/3.50.0/packages/flutter_tools/lib/src/macos/xcode.dart).
