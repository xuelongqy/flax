# Task: Configured host bindings and independent miniapps

Status: implemented and verified on the maintained macOS arm64 engine

## Goal and scope

Support configuration-owned application bindings, separate public SDK and internal
output directories, per-View plugin injection and ordinary npm package builds. Verify
outside the repository workspace on the maintained macOS arm64 V8 engine. The baseline
is main at `a7b1e8a3c`; work remains on `feat/configured-app-bindings`.

Annotations, build_runner, automatic plugin discovery and registry publication are
outside scope. Push remains outside scope.

## Acceptance criteria

1. Generate/check sibling scopes together, with configurable names and `@flax/app`
   defaults, preserving wire IDs after renaming.
2. Reuse the provider's Money once while generating the unbound DeliveryEstimate.
3. Build private host runtimes and pack only public SDK declarations with ordinary npm
   manifests/scripts, excluding private internal APIs and executable JS.
4. Consume packed types independently, use local private runtimes and separate View
   plugins, and run unchanged old applications after compatible host upgrades.
5. Reject public consumers' internal imports and missing native providers, retaining
   reviewable archives and a concise receipt without publication.

## Implementation

The runnable source example is `examples/configured_bindings/`; the verifier is
`tool/check_configured_bindings.dart`. SDK outputs go to `js/sdk/` and
`lib/src/generated/sdk/`; internal outputs go to `js/internal/` and
`lib/src/generated/internal/`. FlaxPublicSdkPlugin and FlaxInternalPlugin select the
corresponding native modules and public JS entries.

The example has fixed Pub manifests, its own pnpm workspace/lockfile, permanent miniapp
projects and a macOS host. main.dart loads prepared module assets and displays four
simultaneous Views: public Shop A/B, an internal manager, and an intentionally denied
internal import. Each miniapp owns its Material buttons and signals and retains its JS
session. Shop A/B subscribe to Cart.quantities, a shared Dart broadcast stream. The
quantity setter emits changes from both add() and the internal resetCart(); both shops
update their live quantity/total rows without a read button. A separate last-call row
keeps each shop's own call count and delivery result. The internal manager keeps only
its internal business plugin. Native cards only name the plugins and APIs. The public
[integration guide](../guides/host-bindings.md) covers the full developer workflow.
Generation/build/pack scripts run in place without the outside-consumer verifier. The
verifier copies these same repository inputs for isolated archive checks.

Both the shop and provider runtimes stay private and use host-local dependencies. Only
their public declaration packages are packed. The SDK runtime and types manifests
explicitly depend on @flax/dart for the generated Stream declaration. View sessions
cancel their subscriptions on close; the shared application-owned controller stays open
for the host lifetime. There is no polling or cross-session JS global. Application
module imports select the host's current implementation by public specifier; legacy
version/hash arguments are accepted without pinning the application to one host build.
Version/hash/owner checks still protect the prepared host inventory, alongside native
protocol and capability checks. Providers remain responsible for API signature and
semantic compatibility.

There is no dedicated SDK CLI, configuration format or package-building API. Standard
`package.json` exports/files/private/dependencies and `tsconfig.json` control packaging.
The small `bindingModuleRequirements` API shares the official generated Manifest
projection so project build scripts need not recreate protocol/type/operation IDs. The
build package remains development-only, and a declarations dependency never activates a
host capability.

Explicit scope names override package defaults; otherwise the owner public package is
used with a binding-name subpath, falling back to `@flax/app/<name>`. Automatic library
mode uses the configured public root or `@flax/app` directly. Renaming and regenerating
updates generated imports; business imports and host module/plugin selections still need
matching names. No npm publication metadata is inferred from Dart package names.

## Verification

Naming: 149 configuration/pipeline/CLI/metadata/ownership tests passed, including
default names, explicit overrides, invalid values, regenerated cross-scope imports and
stable wire IDs. These results predate the npm fixture restructuring; generator naming
logic is unchanged by that restructuring.

The build package's 62 JS tests, public API type check, official module delivery
projection check and verifier static analysis pass. Regressions cover unchanged business
bundles against different host versions/hashes, legacy import arguments, and rejection
of stale host inventory versions/hashes. Existing per-View and native admission checks
remain active.

The complete outside-consumer gate passes with types-only delivery. It packs two
declaration archives, uses private local runtimes, tests the real Views, upgrades only
the shop runtime to 1.1.0 with an additive JS export, and reruns all Views with the same
application bytes and packed types 0.0.0. The first app retains legacy version/hash
arguments. All three real FlaxView tests pass before and after the upgrade. Public Views
render totals 2400/3600; only the internal View executes resetCart. Packed build sources
match the current branch; both public archives contain only package metadata and
declarations, without runtime/internal dependencies or local dependency selectors.

The receipt is `build/configured-bindings.json`. Public declaration archives, local
runtime inspection trees and the upgraded host inventory are retained under
`build/configured-sdk/`. Temporary staged consumers and compiler outputs have been
removed; maintained SDK/engine builds and concise verification logs are preserved.

The permanent example also passes in-place generation, frozen dependency installation,
host/miniapp builds and types-only packing. Its macOS debug app was compiled and
launched with four cards visible together, including the real missing-module error. The
four host tests pass. The dashboard test clicks miniapp buttons, checks passive
cross-View updates, separate call counters and stable View elements, and covers repeated
denied imports, manager-only adminCalls and both 1200- and 600-pixel layouts. The
directory test closes one shop while the other keeps receiving changes, verifies no
subscribers after both close, and opens new sessions against the still-working shared
controller. The desktop window starts at 1120 by 820 content pixels. Actual desktop
clicks confirm both live rows advance 1 → 2 → 3 → 1 after Add A, Add B and Reset, while
only each caller's own counter changes. This UI verification is recorded in
`build/configured-bindings-dashboard.json`.

Before the dashboard layout change, four Flutter tests also passed before and after
exposing a new native sdkRevision function, using runtime 1.1.0 and types 0.1.0 with the
original packed types 0.0.0. All twelve miniapp files, both original declaration
archives and existing wire IDs remained unchanged. The baseline configuration and
outputs are restored, and the shared build script reproduces the original miniapp files
exactly. That receipt is `build/configured-bindings-example.json`; the current
interactive example is additionally covered by the outside-consumer gate.

Example/verifier static analysis, scoped formatting, 191 Markdown lint checks and 815
local links pass. The full repository formatting check reports two existing issues in
AGENTS.md and examples/standalone/js/README.md; neither file was changed by this task.

## Handoff

Run `dart run tool/check_configured_bindings.dart` after dependency setup and JS build,
with the maintained Flutter fork on PATH and repository-local TMPDIR/TMP/TEMP. See the
[runnable example](../../examples/configured_bindings/README.md) and
[npm binding contract](../../packages/flax_build/js/README.md#binding-npm-packages).

The example names and version 0.0.0 are local fixture values. Registry ownership,
dependency availability, mobile/release/AOT and a production hotfix lifecycle are not
certified. No packages are published or pushed.
