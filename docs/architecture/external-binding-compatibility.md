# External Binding Compatibility

This document separates implemented contracts, recorded acceptance and unverified
coverage. [Binding Generation](bindings.md) owns generation rules;
[Binding Coverage Map](binding-coverage-map.md) owns language and API support. Neither
an accepted decision nor an outside-template check establishes whole-library support.

## Version contract

| Domain            | Current contract                                                                                                           | Evidence                                                                                                                              |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Binding selection | Configuration format 1; strict parsing and package-atomic discovery of direct `bindings/*.yaml` and `bindings/*.yml` files | [Configuration tests](../../packages/flax_codegen/test/config_test.dart), [CLI tests](../../packages/flax_codegen/test/cli_test.dart) |
| Package metadata  | Format 1; `bindingNamespace` is required exactly when `capabilities` includes `bindings`                                   | [Metadata fixtures](../../tests/compatibility/package_metadata/), [package tests](../../tool/test/package_metadata_test.dart)         |
| Binding Manifest  | Writer 11; strict readers 2 through 11; format 1 and unknown formats rejected                                              | [Manifest tests](../../packages/flax_codegen/test/manifest_v5_test.dart), [ADR 0031](../decisions/0031-mutable-top-level-bindings.md) |
| Generated module  | Literal `moduleId`, `uiProtocol` and sorted unique `requiredCapabilities`; validation precedes installation                | [Registration contract](bindings.md#literal-module-tuple-and-registration)                                                            |
| UI protocol       | 20; exact protocol match and required-capability subset check                                                              | [ADR 0020](../decisions/0020-ui-protocol-20.md), [Core definitions](../../packages/flax/lib/src/ui/definitions.dart)                  |
| Native ABI        | 2; native table validation is independent of selection and Manifest versions                                               | [Native header](../../packages/flax/native/include/flax/runtime.h), [runtime contract](runtime.md)                                    |

Legacy manifests are validated against their original schemas before normalization.
Format 2 cannot contain aliases. Format 3 supports basic aliases but rejects alias-owned
parameters and generic alias targets. Format 4 requires each alias's `typeParameters`,
including an empty array. Formats 2/3/4 reject readonly exports and read identities.
Format 5 adds the historical readonly namespace representation. Format 6 adds
`publicLibraries` routing and the current module-level top-level export contract.
Regeneration writes format 6; editing only the version number is not migration. Older
generators cannot read the new format.

## Top-level readonly verification

The readonly slice now exposes Core `getKIsWeb()` / `getDefaultTargetPlatform()` from
`@flax/flutter/foundation` and Material `kToolbarHeight` / `getKTabScrollDuration()`
from `@flax/flutter/material`, plus independent declarations for lazy final
initialization, late final errors, changing getters, object and collection identity,
generic callbacks, and Future delivery. The namespace form in the receipts below is
historical evidence from Manifest 5 and is no longer a public entry point.
[Generation tests](../../packages/flax_codegen/test/top_level_readonly_test.dart),
[schema tests](../../packages/flax_codegen/test/top_level_manifest_test.dart), and
[manifest-only provider tests](../../packages/flax_codegen/test/package_pipeline_test.dart)
cover readonly typing, source identity, legacy formats, provider forwarding and
rejection of altered consumer declarations. The
[runtime tests](../../packages/flax_material_ui/test/ui/readonly_values_test.dart)
contain four cases that passed in both Hermes and V8 framework suites, each within the
176-test Material UI suite.

Fresh outcomes recorded on **2026-09-18 (UTC+8)** are retained under the ignored
`.local/top-level-readonly-20260918-201754/acceptance/` directory:

| Check                                                                                   | Recorded outcome        | Scope                                                                                                                                                                   |
| --------------------------------------------------------------------------------------- | ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dart run melos run check`                                                              | Passed, exit 0          | Full static aggregate, including generation consistency, tests, analysis, strict types, documentation and package checks                                                |
| `dart run melos run check:ui`                                                           | Failed, exit 1          | Hermes framework and package-example tests passed; standalone relocated Release verification timed out                                                                  |
| `dart run melos run check:ui:v8`                                                        | Passed, exit 0          | Full V8 aggregate, including package examples, outside-consumer debug integration, relocated Release execution, embedded integration receipt and embedded Release build |
| `dart run tool/check_standalone.dart`                                                   | Failed, exit 1          | Scoped Hermes investigation stopped at a standalone debug navigation-text assertion; it did not reach Release verification                                              |
| Outside-template `validate`, `generate`, `check`, Dart analysis and strict TS typecheck | All five passed, exit 0 | Current author template with readonly declarations, public registration and Manifest-only Core forwarding without provider YAML                                         |

The Hermes run passed standalone debug integration and built the production and test
Release applications. The relocated test application then failed to produce its
`FLAX_STANDALONE_RESULT` receipt within the three-minute limit in
[`_verifyRelease`](../../tool/src/standalone_verification.dart). The aggregate exited
before the later embedded test, drive/report and release-build stages in
[`check_ui.dart`](../../tool/check_ui.dart). The cause of the Release stall remains
unresolved; framework success does not establish complete UI or Release acceptance.

During the scoped Hermes investigation, the running Flutter test reported a `hidden`
lifecycle, disabled frame scheduling and a pending test frame. Activating the test
application advanced execution, but the
[navigation-text assertion](../../examples/standalone/test/support/scenario.dart) then
failed. This observation does not establish the cause of the earlier Release timeout or
a repair. Keep both failures distinct from the passing readonly runtime cases and the
complete V8 aggregate.

The successful static receipt is `check-final-20260918T143426Z.json`; the Hermes failure
is `check-ui-native.json`. The Hermes log is a retained native command-output transcript
with any tool truncation markers preserved. The full V8 receipt is
`check-ui-v8-20260918T150448Z.json`; the scoped Hermes investigation is
`standalone-hermes-repro-20260918T152915Z.json`. The latter two retain unabridged
process logs. The five outside-template results are summarized by
`template-suite-final-20260918T143331Z.json`. Executable and generated inputs match the
successful static and template snapshots; subsequent receipt-only documentation edits
require documentation checks.

Those 2026-09-18 Hermes failures are historical. The Manifest 6
public-library/module-delivery migration was verified again on **2026-09-19 (UTC+8)**:

| Check                                 | Current outcome | Scope                                                                                                                                                   |
| ------------------------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dart run tool/check_standalone.dart` | Passed, exit 0  | Packed external packages, strict TypeScript, loader-based direct imports, macOS integration, production Release and relocated Release execution         |
| `dart run melos run check:ui`         | Passed, exit 0  | Full current Hermes UI aggregate, including package examples, standalone verification and embedded Flutter integration/Release                          |
| `dart run melos run check:ui:v8`      | Passed, exit 0  | Full current V8 UI aggregate, including package examples, packed external consumer, standalone relocated Release and embedded integration/Release build |

The current standalone verifier executes direct-import checks through the Flax Node
loader so public `@flax/flutter/*` subpaths can resolve their owning physical runtime
packages without bundling duplicate owners. The previous relocated-Release timeout and
navigation-text assertion are therefore not current Hermes blockers. These results still
cover the selected bindings and package-delivery paths rather than whole-SDK discovery
or arbitrary third-party libraries. They predate Manifest 7 Record support and are
evidence for the Manifest 6 migration only.

The outside-template run used TypeScript 5.9.2 and a packed Core npm package, while the
workspace used TypeScript 7.0.2. That run itself proves generation, types and public
dependency registration rather than external dual-engine UI execution. A separate real
`gap 3.0.1` package pilot now supplies bounded third-party dual-engine evidence below.
The older typedef and shared-object receipts do not establish acceptance of this
readonly implementation. These checks cover the selected APIs and fixtures, not
whole-SDK or complete external-library support.

The normal Fetch module test uses `uiProtocol: 20`; its `uiProtocol: 16` case
deliberately tests rejection. It is not an unresolved compatibility failure. See the
[Fetch host tests](../../packages/flax_fetch/test/ui/host_test.dart).

## Generic typedef acceptance

Acceptance completed on **2026-09-18 (UTC+8)** for the implementation inputs recorded
with the successful commands below. Reuse requires matching executable inputs; source,
configuration, generated-output or dependency changes require the affected checks again.
Documentation-only consolidation does not expand the runtime evidence.

| Check                                                                                   | Recorded outcome        | Scope                                                                                              |
| --------------------------------------------------------------------------------------- | ----------------------- | -------------------------------------------------------------------------------------------------- |
| `dart run melos run check:ui`                                                           | Passed, exit 0          | In-repository Hermes UI aggregate, including embedded Flutter integration                          |
| `dart run melos run check:ui:v8`                                                        | Passed, exit 0          | In-repository V8 UI aggregate, including embedded Flutter integration                              |
| `dart run melos run check:engines`                                                      | Passed, exit 0          | Engine coexistence, foreign-object rejection, reentry and runtime recreation                       |
| Outside-template `validate`, `generate`, `check`, Dart analysis and strict TS typecheck | All five passed, exit 0 | Copied author template, public registration and manifest-based dependencies outside the repository |

The typedef regressions cover alias-owned and function-local parameters, bounds and
defaults, nullability, capture and shadowing, async aliases, both callback directions,
invalid results and manifest-only consumers. Numeric callback results are adapted at
concrete Dart use sites: safe finite integral values may satisfy `int`, and integers may
satisfy `double`; `Object?` and `num` preserve their representation. Invalid values
still fail. See [typedef tests](../../packages/flax_codegen/test/typedef_test.dart) and
[runtime regressions](../../packages/flax/test/ui/codegen_basics_test.dart).

The author template registers `exampleBindings`, derived from selection `name: example`.
The outside smoke imports public Dart entry points and the packed Core npm exports. It
used TypeScript 5.9.2; the workspace used TypeScript 7.0.2. These results do not
establish support for every compiler version. See the
[author guide](../../packages/flax_codegen/docs/author-template.md).

The navigation test correction waits for outgoing content to disappear within a bounded
frame-driven wait. A completed pop Future and removal from declarative Pages do not mean
the exit transition has disposed its Widget. That timing issue is resolved in the test;
it is not a current Hermes or V8 blocker. The lifetime contract remains in
[navigation](navigation.md#route-and-callback-lifetime).

## Real third-party pilot: gap 3.0.1

The disposable outside-workspace pilot binds `gap 3.0.1` under vendor namespace
`vendor.gap`. Its public declarations are delivered as `@vendor/flutter-gap`, while the
implementation/module-delivery package is `@vendor/flutter-gap-runtime`. The binding
configuration selects only `package:gap/gap.dart` and does not declare an explicit Flax
provider import. The selected surface is
`Gap(mainAxisExtent, {key, crossAxisExtent, color})`; automatic dependency closure
resolves Key and Color to the existing Flax provider manifests and wire identities
rather than creating third-party owners.

The pilot passed `flutter pub get`, `flax_codegen validate`, `generate` and `check`,
Dart analysis and strict TypeScript compilation. Both declarations and runtime packages
pack independently. Host module preparation resolves the selected vendor module plus its
Flax provider dependency closure into the prepared asset inventory.

Two delivery modes were exercised with real external hosts:

- **Host-provided module.** The App provides `@vendor/flutter-gap`; business code
  installs only the declarations. Its bundle contains the host-module shim and excludes
  the Gap runtime implementation.
- **Business-bundled module.** The App omits Gap; business code depends on and bundles
  the vendor runtime. Flax provider modules continue to resolve through host shims
  instead of being duplicated.

Hermes and V8 both passed all three external Gap runtime cases and rendered a real Gap
with `mainAxisExtent == 24` and `crossAxisExtent == 12`. A deliberately altered module
requirement (`vendor.gap/missing`) fails on both engines with the expected missing or
incompatible Dart-binding error. A types-only business build with neither a host Gap
module nor the runtime implementation fails module resolution at build time, proving
that the declaration package alone cannot silently supply executable code.

Existing repository tests retain the broader duplicate-owner, version/host
incompatibility, re-export and transitive-dependency cases. The Gap pilot adds real
package and engine evidence for one dependency shape. Together with generator
regressions it verifies the implemented automatic signature/generic/inheritance and
provider-identity closure, but it does not certify arbitrary third-party packages,
provider auto-augmentation, unsupported conversions or complete declaration discovery.
During the external Flutter test, `rootBundle.loadString` stalled while decoding a large
generated bundle; the fixture switched to byte loading plus direct UTF-8 decoding. That
is test-harness plumbing, not a Flax runtime/session-cleanup fix.

## Reproducing verification

Run `dart run melos run check` after all changes. It checks generated consistency,
tests, analysis, formatting, TypeScript, documentation, packages and native
configuration. It does not build or certify either engine. Keep its command, exit code,
log and input hashes with the local acceptance receipt instead of maintaining a public
turn-by-turn log.

Run engine/UI aggregates serially because generation and embedded assets are shared. The
[contribution checks](../../CONTRIBUTING.md#checks) describe the scoped commands.
Changes to executable template files require a new outside-template run. Changes to
shared runtime behavior require both affected engine paths; a template typecheck cannot
replace them.

## Evidence limits and remaining work

The older outside-repository canaries were packed before literal module tuples and
Manifest 4. Their pure-Dart generation and focused Hermes/V8 smoke are historical
evidence only. They are not fresh acceptance of the current package contents.

The current outside-template results do **not** rerun a complete external dual-engine UI
suite, normalized identity goldens or the full host-plugin matrix. The `gap 3.0.1` pilot
adds real Hermes/V8 evidence for one third-party Widget package and both supported
module delivery modes. Broader third-party/API coverage, other platforms and
published-archive acceptance remain separate work in the
[coverage task](../tasks/binding-coverage-expansion-v1.md).

Registry publication, license choice, naming, signing and support lifetime remain
[open decisions](../decisions/open-questions.md). The trusted compile-time package model
does not provide remote loading or untrusted-code isolation. See
[package trust](../decisions/0023-external-binding-package-trust.md).
