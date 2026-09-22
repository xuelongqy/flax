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

`native.dart` discovers the selected `flax_engine_<name>` package and invokes its
`tool/native.dart`. Each engine package owns source acquisition, pins, patches, CMake,
CTest, asset preparation, and notices. Its source cache is `.cache/native`, its build
directory is `build/native`, and both are ignored inside that package. `FLAX_BUILD_JOBS`
controls parallel compiler jobs (default two). macOS arm64 is required.

`check_runtime.dart` executes, in order:

1. Reproducible FFI generation check.
2. Explicit native build and CTest.
3. Package-local asset preparation.
4. Shared Dart integration tests through the selected engine package.
5. Standalone package verification through `src/package_verification.dart`.

The last step stages package copies outside the repository, checks JIT and missing or
corrupt asset rejection, builds an AOT CLI bundle, relocates it, deletes the source
staging tree, and executes the copy with library-search environment variables removed.
Its consumer source stays with engine integration test fixtures. Workspace pubspec edits
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

`package.dart` discovers Pub packages under `packages/`. `check <name>` runs that
package's analysis, Dart/Flutter unit tests, binding check, JS build/type/tests, host
bundle check, and example static checks when present. `integration <name>` runs its
real-engine UI tests and package example with prepared assets. The tool has no list of
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

`ui:test` prepares test JS and discovers package-owned UI suites. It requires macOS
arm64 and prepared Hermes assets; missing assets report
`dart run melos run native:build`. The hook remains the authority for manifest/checksum
validation. This command does not launch aggregate applications, build native code, or
publish anything.

`check_aggregate.dart` builds the minimal embedded aggregate bundle, runs its framework
test, drives its macOS integration scenario, and validates the resulting receipt for the
selected engine. It requires prepared native assets and verifies only behavior created
by composing multiple modules.

`check_ui.dart` sequentially invokes `package.dart integration` for every UI-owning
package, then invokes `check_aggregate.dart` for the selected engine. It does not build
an engine or rerun runtime, standalone, engine-coexistence, archive, or release gates.
`example_run.dart` bundles and launches the embedded app.

`standalone_run.dart` bundles and launches the independent application.
`check_standalone.dart` verifies it with prepared native assets, including external
source consumption, real macOS integration and relocated release assertions. See
[application packaging](../docs/architecture/applications.md).

## Engine selection

`native.dart`, `check_runtime.dart`, `ui_test.dart`, `check_ui.dart`,
`example_run.dart`, `standalone_run.dart`, and `check_standalone.dart` accept
`--engine=<name>`. Omitting the option preserves the default Hermes behavior. Engine
packages are discovered by package name and their package-owned native tool. Example
staging rewrites the existing runtime factory boundary and reads JIT requirements from
the selected package's prepared manifest. No consumer hook performs a source download or
build.

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
