# Task: Configured host bindings and independent miniapps

The default app path needs no scope YAML. CLI package commands discover existing configs
or synthesize one app selection, and the Builder shares those defaults and predeclares
conventional outputs when options.outputs is omitted. Explicit legacy configs retain
their required fields and module identities. Every adapter exports a binding plugin
through FlaxBindingPlugin; source carriers reexport it. FlaxView callers may omit an
empty application registry. The permanent default_app example and the shopping host
cover simple and advanced layouts respectively.

Status: implemented and verified on the maintained macOS arm64 engine

## Goal and scope

Support configuration-owned application bindings, separate public SDK and internal
output directories, per-View plugin injection and ordinary npm package builds. Verify
outside the repository workspace on the maintained macOS arm64 V8 engine. The baseline
is main at `a7b1e8a3c`; work remains on `feat/configured-app-bindings`.

Scoped annotations and optional build_runner generation now supplement
configuration-owned selection. Implicit global plugin installation, registry publication
and push remain outside scope.

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
declares hostAppName with the default app scope. Source-scanned scopes generate public
Dart carriers under lib/flax_bindings, preserving original wire identities and private
carrier validation. The Money provider and unbound DeliveryEstimate retain
configuration-only selection. Selection, Manifest and packaging formats stay unchanged.
Generated plugins reuse FlaxPlugin and remain explicit per View. See
[ADR 0046](../decisions/0046-scoped-binding-annotations.md).

The host now enables flax_codegen:bindings with declared Dart/TS outputs in build.yaml.
It includes YAML/npm inputs in its target and uses the build resolver instead of a new
physical analyzer context. Metadata reads use a tracked snapshot. The CLI and Builder
share model validation and emission; installation belongs to the selected driver. The
existing Money provider and all built-in binding providers expose their manifests as
public build assets. The example's generate:host/watch:host scripts run build_runner;
generate:host:cli keeps the original entry. See
[ADR 0047](../decisions/0047-build-runner-bindings.md).

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

The permanent default_app example has no scope YAML and no Builder output list. CLI and
build_runner produce identical adapter, public Dart entry, TS module and manifest bytes.
Its test invokes the generated Dart functions through appPlugin/appBindings. Watch
acceptance adds an unexported source, restricts it through optional sources YAML,
returns to implicit app and removes the source; restored inputs must retain the original
output bytes. The five-step full-SDK watch check passes; builds take 40–66 seconds, so
dependency-model processing remains a separate performance concern.

Generator regressions cover default names/paths, source and part discovery, scope
isolation, legacy configuration, ownership and provider references. CLI and tracked
Builder tests both reuse config-free providers, alongside existing configured providers.
Source-generated entries reserve their binding/plugin names and preserve non-generated
files at annotation output paths.

Generated JS plans merge shared legacy facades into one public entry and reject
conflicting source paths for the same specifier. Preparation retains every public route
even when it only exports types. Split SDK/internal declaration projects use TypeScript
project references; forced composite builds restore outputs after a declaration cleanup.

The shopping host passes ordinary generation and host/miniapp builds and four real
FlaxView tests. Buttons update per-View results, shared cart subscriptions update other
Views, missing internal/native plugins are rejected and resize retains call results. The
maintained macOS arm64 V8 runtime and GC suite passes 45 tests.

The isolated-consumer gate builds the existing Money provider once, generates
DeliveryEstimate, consumes packed declaration packages and repeats the three directory
View contracts after a compatible host upgrade. Types stay at 0.0.0, the host runtime
moves to 1.1.0 and old application bytes remain unchanged, including legacy version/hash
import arguments. Public archives contain declarations and package metadata; internal
APIs and runtime packages remain private. There is no registry publication.

The concise receipts are build/default-app-bindings.json, build/default-app-watch.json
and build/configured-bindings.json. Public archives and host runtime inspection outputs
remain under build/configured-sdk. Source analysis, formatting and documentation checks
cover the changed areas. Test scratch projects are removed after recording results.

Full SDK regeneration requires a Flutter source surface matching the frozen SDK
manifest. The local checkout currently contains additional font APIs; this task keeps
the original SDK manifests/JS tables and adds generated plugins to the canonical Dart
adapters. Full repository SDK regeneration and unprepared global UI fixtures are not
claimed as passing acceptance. Flutter execution tests use the matching local engine;
subprocess compilation is serialized to avoid shared build-directory races.

## Handoff

Source-scanned packages now generate bindings/js_modules.json alongside their binding
manifest. The shared plan contains all local scopes, provider runtime dependencies and
TypeScript paths. The normal host JS build uses flax-modules without per-scope mappings;
the old host/modules project remains a separately checked compatibility fixture. The
default_app package has permanent JS/application sources and an engine-backed click
test. Node is required only while building on a development/CI machine. Public SDK
packing policy, per-View activation and legacy library generation retain their existing
contracts. See [ADR 0048](../decisions/0048-generated-binding-js-build.md).

Run `dart run tool/check_configured_bindings.dart` after dependency setup and JS build,
with the maintained Flutter fork on PATH and repository-local TMPDIR/TMP/TEMP. See the
[runnable example](../../examples/configured_bindings/README.md) and
[npm binding contract](../../packages/flax_build/js/README.md#binding-npm-packages).

The example names and version 0.0.0 are local fixture values. Registry ownership,
dependency availability, mobile/release/AOT and a production hotfix lifecycle are not
certified. No packages are published or pushed.
