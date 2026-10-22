# Task: Configured host bindings and independent miniapps

The default app path needs no scope YAML. CLI package commands discover existing configs
or discover app and named annotation scopes. The Builder shares those defaults and
predeclares a fixed aggregate output graph when options.outputs is omitted. Explicit
legacy configs retain their required fields and module identities. Every adapter exports
a binding plugin through FlaxBindingPlugin; source carriers reexport it. FlaxView
callers may omit an empty application registry. The permanent default_app example and
the shopping host cover simple and advanced layouts respectively.

Status: implemented and verified on the maintained macOS arm64 engine

## Goal and scope

Support configuration-owned application bindings, separate public SDK and internal
output directories, per-View plugin injection and ordinary npm package builds. Verify
outside the repository workspace on the maintained macOS arm64 V8 engine. The initial
implementation started from main at `a7b1e8a3c`.

Scoped annotations and optional build_runner generation now supplement
configuration-owned selection. Implicit global plugin installation and registry
publication remain outside scope.

## Acceptance criteria

1. Generate/check sibling configuration or annotation scopes together, with configurable
   names and `@flax/app` defaults, preserving native wire IDs after npm package renames.
2. Reuse the provider's Money once while generating the unbound DeliveryEstimate.
3. Build private host runtimes and pack only public SDK declarations with ordinary npm
   manifests/scripts, excluding private internal APIs and executable JS.
4. Consume packed types independently, use local private runtimes and separate View
   plugins, and run unchanged old applications after compatible host upgrades.
5. Reject public consumers' internal imports and missing native providers, retaining
   reviewable archives and a concise receipt without publication.

## Implementation

The pure Dart flax_annotations package adds FlaxExport(scope: ...) and FlaxIgnore.
Scopes without library enable annotations and scan this package's lib by default;
sources can limit the boundary. FlaxExport defaults to app. Legacy library
configurations retain their original defaults and explicit opt-in behavior. All
annotation selections are grouped before name merging, inference and package ownership.
Explicit YAML mappings keep their exact member allowlists, while configuration-only mode
remains unchanged. Source locations identify annotation conflicts. Cart/currentCart and
resetCart are annotated; Cart.debugLabel is ignored. An unexported src/app_api.dart
declares hostAppName with the default app scope. Explicit source-scanned scopes generate
public Dart carriers under lib/flax_bindings; default named scopes record their original
Dart carriers, including selected src declarations. Both preserve original wire
identities. The Money provider and unbound DeliveryEstimate retain configuration-only
selection. Selection, Manifest and packaging formats stay unchanged. Generated plugins
reuse FlaxPlugin and remain explicit per View. See
[ADR 0047](../decisions/0047-scoped-binding-annotations.md).

The host now enables flax_codegen:bindings with declared Dart/TS outputs in build.yaml.
It includes YAML/npm inputs in its target and uses the build resolver instead of a new
physical analyzer context. Metadata reads use a tracked snapshot. The CLI and Builder
share model validation and emission; installation belongs to the selected driver. The
existing Money provider and all built-in binding providers expose their manifests as
public build assets. The example's generate:host/watch:host scripts run build_runner;
generate:host:cli keeps the original entry. See
[ADR 0048](../decisions/0048-build-runner-bindings.md).

The runnable source example is `examples/configured_bindings/`; the verifier is
`tool/check_configured_bindings.dart`. SDK outputs go to `js/sdk/` and
`lib/src/generated/sdk/`; internal outputs go to `js/internal/` and
`lib/src/generated/internal/`. Generated shopPlugin/deliveryPlugin and
adminPlugin/appPlugin select the corresponding native modules and public JS entries; the
handwritten binding-only plugin classes and empty lifecycles are removed.

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

Shared automatic overrides are merged after annotation discovery, so annotated roots
receive the same package-wide settings as configured automatic roots. Scope-local
overrides take precedence, and ignored-member conflicts are checked after both layers
have been merged. The third-party author template retains its public build assets.

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

The permanent default_app has no scope YAML, build.yaml or flax_package.yaml. CLI and
build_runner produce identical binding bytes without init/sync. The isolated watch check
adds a named scope and a cross-scope generic reference, analyzes the aggregate Dart
output, removes the scope and checks reproducibility. JS preparation materializes extra
scope sources without making the CLI treat them as orphans.

Focused validation covers 193 codegen cases, 8 Flax CLI setup cases and 76 JS build
cases. This includes legacy default-output configurations, source/part discovery,
multiple scopes, selected src type carriers, provider reuse, unbound dependency
generation, SDK public selection, configuration preservation and source ownership after
cache cleanup or a switch to legacy output ownership. Default output paths preserve
hand-written files, and raw dependency opt-in cannot replace an invalid provider. These
counts exclude retries; native compilation uses the matching maintained engine in the
isolated consumer gate.

The maintained default and shopping projects generate and build in place. The isolated
consumer gate also packs their dependencies, recreates SDK npm setup through the normal
JS build, builds independent miniapps with the host inventory hidden and inspects the
actual SDK archive. Public archives contain declarations and package metadata only;
internal APIs and runtime sources stay in the host.

The macOS arm64 engine gate runs two default-app tests and three View contracts before
and after a compatible host upgrade. Buttons, shared-cart subscriptions, missing
internal/native providers and session cleanup are covered. SDK types remain at 0.0.0;
the host runtime moves to 1.1.0 while old application bytes stay unchanged, including
legacy version/hash import arguments. No registry publication is performed.

The [minimal integration guide](../guides/host-binding-quickstart.md) is also verified
from a fresh flutter create --empty host using local Pub/npm overrides, Flax CLI init,
build_runner and the generated JS build script. Both that host and the permanent macOS
default_app runner start and update Quantity: 1 to 2 to 3 through actual button clicks.
Two default-app tests and the same two contracts after enabling the fresh host's
app/admin scopes and public SDK pass on the maintained engine. Ordinary pnpm pack yields
only package.json and types/app.d.ts; the admin API stays private. The focused receipt
is build/binding-quickstart.json. Temporary hosts are removed after validation.

The current concise receipt is build/configured-bindings.json. Public archives and
host-runtime inspection outputs remain under build/configured-sdk. Dart analysis, JS
typechecking, formatting and documentation checks cover the changed areas. Completed
test scratch projects are removed after recording results.

Full SDK regeneration requires a Flutter source surface matching the frozen SDK
manifest. The local checkout contains additional font APIs; full repository SDK
regeneration and unprepared global UI fixtures are outside this validation. Runtime
checks use the maintained macOS engine; mobile and release/AOT are not certified.

## Handoff

Flax CLI owns optional host setup and a legacy output-list helper. flax_codegen owns
binding generation only. Annotation users run build_runner directly without init/sync;
app and named scopes share a fixed aggregate Dart output graph. Independent miniapp
builds use flaxEsbuildPlugin() with marked types packages and no host inventory. Public
SDK/internal sources now live in one npm project per package group under host/js/sdk and
host/js/internal; their files/exports retain only the intended declarations. Explicit
runtime delivery projects remain under host/modules/legacy_sdk and legacy_internal for
compatibility verification. The isolated gate checks annotation generation/watch without
setup, preserves source during Flax CLI init, hides host module assets during business
builds and repeats View tests after a compatible host upgrade. See
[ADR 0050](../decisions/0050-independent-binding-sdks-and-project-setup.md).

Optional typesSdk metadata selects the public npm name and scopes. Normal JS builds
prepare ordinary SDK package/TS configuration, preserve existing npm policy and JSONC
tsconfig, and maintain only generated declaration entries. The shopping example keeps
its custom composite TS project; the isolated gate recreates the SDK setup from
conventions before building and packing. Public signatures cannot reference an
unselected local scope. Native identities, internal module roots and provider reuse
remain unchanged.

Source-scanned packages now generate bindings/js_modules.json alongside their binding
manifest. The shared plan contains all local scopes, provider runtime dependencies and
TypeScript paths. The normal host JS build uses flax-modules without per-scope mappings;
the old host/modules project remains a separately checked compatibility fixture. The
default_app package has permanent JS/application sources and an engine-backed click
test. Node is required only while building on a development/CI machine. Public SDK
packing policy, per-View activation and legacy library generation retain their existing
contracts. See [ADR 0049](../decisions/0049-generated-binding-js-build.md).

Run `dart run tool/check_configured_bindings.dart` after dependency setup and JS build,
with the maintained Flutter fork on PATH and repository-local TMPDIR/TMP/TEMP. See the
[runnable example](../../examples/configured_bindings/README.md) and
[npm binding contract](../../packages/flax_build/js/README.md#binding-npm-packages).

The example names and version 0.0.0 are local fixture values. Registry ownership,
dependency availability, mobile/release/AOT and a production hotfix lifecycle are not
certified. No registry publication is performed.
