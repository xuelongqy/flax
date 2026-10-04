# Repository Tools

This directory owns convention-based repository discovery and orchestration. Melos and
CI invoke the same command owners; they do not duplicate package implementations.

## Documentation

`check-doc-links.mjs` checks Markdown links and GitHub-style heading anchors against
repository files, without network access. Fenced examples and generated native assets
are excluded. `pnpm run test:tooling` tests valid and invalid documents using temporary
inputs. Use `dart run melos run docs:check` for lint, tooling tests, and link
verification.

## C ABI generation

`ffi.dart` discovers `packages/*/native/ffigen.yaml` and generates Dart declarations
from each package's canonical C headers. The exact generator version belongs in
`ffigen.json`.

```sh
dart run melos run ffi:generate
dart run melos run ffi:check
```

The tool installs ffigen in repository-local `.cache/ffigen` through an isolated Pub
cache. Melos 8.6.0 and ffigen 21.0.0 require incompatible `cli_util` versions, so the
workspace does not resolve them together or override either constraint. No extra
workspace package or user-global tool installation is needed.

Generation uses the active pinned Dart SDK for formatting. `--check` generates into a
temporary directory and compares without rewriting tracked outputs. Missing/stale
outputs and empty generation fail. `flax_codegen` and package-owned `bindings/`
directories are unrelated to this C header generation; they own Dart-API-to-JS binding
generation.

## Native build and verification

`native.dart` discovers the selected engine package, obtains its locked shared SDK,
compiles the adapter with Flax's ABI, and runs CTest. The same SDK preparation helper is
used by native asset hooks. SDK caches and bridge builds are ignored inside the engine
package. The current host desktop target is selected explicitly.

`check_runtime.dart` executes, in order:

1. Reproducible FFI generation check.
2. Explicit native build and CTest.
3. Hook registration of the bridge and engine libraries.
4. Shared Dart integration tests through the selected engine package.
5. Standalone package verification through `src/package_verification.dart`.

The last step stages package copies outside the repository, checks JIT and corrupt SDK
checksum rejection, builds an AOT CLI bundle, relocates it, deletes the source staging
tree, and executes the copy with library-search environment variables removed. Its
consumer source stays with engine integration test fixtures. Workspace pubspec edits
apply only to temporary copies. There is no second runtime implementation in tooling.

Commands return nonzero on failure. Ordinary `check` and `native:configure` do not
invoke an engine build. See [all commands](../CONTRIBUTING.md#checks) and
[packaging details](../docs/architecture/packaging.md).

## Packages, generated UI, and examples

`check_packages.dart` validates temporary Dart publish dry-runs and npm pack contents
without modifying tracked manifests. `pack_archives.dart` stages the same strip/prepare
flow into durable trees plus `RECEIPT.json` / `RECEIPT.txt` (default `.local/archives/`,
or `--dry-run` for a disposable receipt). `check_release.dart` asserts
`publish_to: none` / `private: true`, then runs both checks. Melos entries:
`packages:check`, `packages:pack`, and `release:check`. None of these publish.

`check_platform.dart --scope=all` runs complete runtime/UI and application checks for
the selected target. The Linux x64 invocation also owns the common `melos check` and FFI
gate; other targets prepare bundles without repeating host-only checks. Use
`dart run melos run check` separately for standalone local common validation.

`package.dart` discovers Pub packages under `packages/`. `check <name>` runs that
package's analysis, Dart/Flutter unit tests, binding check, JS build/type/tests, host
bundle check, and example static checks when present. `integration <name>` runs its
real-engine UI tests and package example with the locked SDK. The tool has no list of
Material, Fetch, WebSocket, storage, or Canvas packages.

Flutter example checks require a root `example/pubspec.yaml` with a Flutter SDK
dependency. Template containers and plain Dart examples do not enter that flow. Invalid
manifests and failing Flutter checks still fail the command. The Codegen author template
is validated separately after copying it outside the checkout; see the
[author walkthrough](../packages/flax_codegen/docs/author-template.md#minimal-walkthrough).

Every package declares its entry point, optional npm peer, capabilities, and public
registration symbols in `flax_package.yaml`. Archive checks use this metadata to select
binding, host, engine, and npm rules. Temporary Dart consumers import the declared entry
point and reference the registration symbols, while npm consumers load and type-check
every exported subpath. Paired Pub/npm versions must match; no runtime registration is
derived from the metadata.

Binding aggregation discovers package YAML and follows manifest imports through
`flax_codegen`. Host aggregation discovers `js/host.json`; package-specific WPT and
fixture preparation stays in package-owned hooks.

`bindings:generate` / `bindings:check` invoke the analyzer generator and its SDK/plugin
tests. The default-parameter fixture executes generated constructors with Flutter's test
SDK and does not load Hermes.

`example:bundle` builds JS packages and bundles the embedded, standalone, and
package-example ES2019 assets. `ui:bundle` discovers fixture owners and writes each
owner's output to ignored `packages/<owner>/.dart_tool/flax/ui/`. Passing `--package`
builds only that owner and its JS dependency closure. Both bundlers use the same esbuild
options. Ordinary `check` builds JS once, bundles all inputs, and never fetches an
engine.

`js:test` also executes the loop-closure framework bundle in Node. Run `ui:bundle`
before invoking it separately; the ordinary `check` sequence already does this.

`ui:test` prepares test JS and discovers package-owned UI suites. It requires a
supported native desktop host and the engine SDK lock; the hook verifies and builds the
native assets. This command does not launch aggregate applications or publish anything.

`check_aggregate.dart` builds the minimal embedded aggregate bundle, runs its framework
test, drives its selected desktop integration scenario, and validates the resulting
receipt for the selected engine. It uses the locked SDK and verifies only behavior
created by composing multiple modules.

`ui_suite.dart` discovers `test/ui/**/*_test.dart`, sorts owners and files, and imports
the original test files into one generated entry. Each group invokes the original
`main()`; assertions remain package-owned. Every owner's fixtures are loaded before
registration, with explicit package lookup preventing same-name collisions. Mobile
entries embed prepared fixture data synchronously, retain real GC and semantics setup,
and use the same 800x600 viewport as headless tests. TLS certificates are generated on
the host and each test still owns its server, connections and temporary directory.

`ui:test` runs UI only, in one test process per engine. `check_ui.dart` runs that entry,
each selected package's example once, and `check_aggregate.dart` once. It does not build
engine source or rerun runtime, standalone, engine-coexistence, archive, or release
gates. `example_run.dart` bundles and launches the embedded app.

Both UI commands accept `--package=<owner>` and `--file=test/ui/<file>_test.dart`. Files
require an explicit owner; unknown, empty and outside-owner selections fail. The
existing `package.dart integration <owner>` command uses the same collector.

## Shared preparation and compiler caches

`prepare_checks.dart --output=build/prepared` builds JavaScript, owner UI fixtures and
example assets once. Its manifest binds checkout SHA, PR revisions, all source inputs
and toolchain/lock files to every output digest. `--consume=build/prepared` verifies all
inputs and outputs before restoring anything, and rewrites generated Dart import URIs
for the consuming checkout. Missing or mismatched artifacts fail. Machine-local package
configuration and compiler caches are excluded.

Automatic CI calls the package archive workflow once after preparation. Linux's common
gate consumes its same-checkout archive proof, while standalone `check` and
`release:check` retain independent archive validation. The package workflow also has a
manual entry. No archive proof certifies runtime or application delivery.

`FLAX_CONSUMER_CACHE` enables stable disposable-consumer paths. CI cache keys include
target, engine, scope, checkout, source/fixture digests and pinned tools/locks. Cached
compiler intermediates accelerate rebuilding; tests always execute. Relocation removes
original build paths before launching copied applications and restores intermediates
only afterwards. Desktop JSON results live under `build/ui/<engine>/`; mobile results
and selected file lists accompany the target verification receipt. Command logs record
preparation, compilation, installation and test durations separately.

`standalone_run.dart` bundles and launches the independent application.
`check_standalone.dart` verifies it with the locked native SDK, including external
source consumption, real macOS integration and relocated release assertions. See
[application packaging](../docs/architecture/applications.md).

## Engine selection

`native.dart`, `check_runtime.dart`, `ui_test.dart`, `check_ui.dart`,
`example_run.dart`, `standalone_run.dart`, and `check_standalone.dart` accept
`--engine=<name>`. Omitting the option preserves the default Hermes behavior. Engine
packages are discovered by package name. Example staging rewrites the existing runtime
factory boundary and reads JIT requirements from the selected package's SDK lock. Hooks
download the SDK and compile only the bridge.

Use `native:build:v8`, `check:runtime:v8`, `ui:test:v8`, `check:aggregate:v8`, and
`check:ui:v8` for the V8 Melos entries. After preparing both assets, `check:engines`
verifies coexistence. Independent AOT-host measurements now use `bench:engines`; see the
benchmark section below. The standalone integration scenario reports first/second-pass
frame build/raster medians and process RSS in its relocated release receipt. These are
local workload measurements, not platform-wide performance guarantees.

## Engine benchmarks

`benchmark_engines.dart` prepares an independent AOT consumer of existing engine assets,
runs deterministic JS and Flax workloads in isolated processes, and emits raw JSON plus
an offline HTML report. Use `bench:engines:smoke` for correctness and `bench:engines`
for a full comparison. It does not build or download engines. See the
[methodology and options](../benchmarks/engines/README.md). `check_engines.dart` remains
a separate engine coexistence correctness check.

## Host scripts

`host_bundle.mjs` discovers package host metadata and builds each source into a
committed Dart string plus dependency notices; `--check` regenerates in memory and
compares. `--package <name>` checks one owner. Plugin bundles are checked for duplicate
base implementations. `ui_bundle.mjs` discovers package fixtures and invokes
package-owned UI hooks, including pinned WPT inputs. Consumers only register the Dart
plugin. No application bundle initializer is needed.

Host-owning JavaScript projects use `tsconfig.npm.json` for public npm output and
`tsconfig.host.json` for the embedded implementation. Declaration-mode packages export
only declarations and `noop.js`; `host_bundle.mjs` still bundles the private bootstrap
directly into its Dart owner.

Run `dart test packages/flax_websocket/test` for local transport, TLS and proxy checks
without an engine. Run the package integration command for its real host path;
`check:ui` and `check:ui:v8` compose all UI owners plus the aggregate, serially because
they drive desktop apps.

## Platform selection and CI

`check_platform.dart` is the single native target validation owner. Legacy tools keep
their Hermes default and share target/device selection. `--list` displays discovered
assertions; mobile execution requires `--device`, and `--build-only` is a distinct
result. The SDK helper and CMake builds are reused rather than introducing another cache
or build system. `platform_changes.dart` runs before dependency installation, reads a
complete Git diff and emits target/engine specialty jobs. Unit checks cover ordinary
changes, platform changes, engine locks, shared ABI, deletions and renames. See
[test categories and target commands](../docs/testing-platforms.md).
