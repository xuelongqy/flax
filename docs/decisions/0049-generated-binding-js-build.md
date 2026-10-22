# 0049: Generated binding JS build configuration

Status: accepted.

## Decision

Packages with source-scanned binding scopes generate bindings/js_modules.json through
the shared CLI/Builder pipeline. This package-owned build plan records local TS entry
paths, public specifiers and subpath roots, direct provider runtime packages and
TypeScript compiler path aliases. It includes legacy sibling scopes and generated local
dependency modules. Package-atomic installation, reproducibility checking and Builder
asset ownership cover the plan. Existing non-generated files are protected; returning to
a pure legacy configuration removes the generated plan.

The ordinary @flax/build flax-modules entry can locate the owning Dart package and read
this plan without an explicit config argument. The host has a normal js/package.json
with installed framework/provider runtime dependencies. Local TS entries compile
directly into the existing factory-only Flutter assets. Installed providers retain their
delivery metadata, identities and lock validation. Explicit format-1 module
configurations remain supported, and pure legacy binding generation keeps its existing
output set and delivery workflow.

Optional runtime packages in the host JS project's direct dependencies contribute their
existing delivery entries without another per-entry list. The generated plan also acts
as a tsconfig base for host-owned source aliases. Independent miniapps keep normal
types-package dependencies. SDK publication manifests and public export policy remain
project-owned; no SDK publishing command is introduced.

Preparing all scopes only makes their immutable script assets available. Sessions still
activate the modules selected by their plugins, validate native binding requirements
before execution and own their module instances independently. No plugin is registered
globally by generation or preparation.

## Consequences

The host's normal JS build script runs preparation after code generation. Adding a scope
does not add a JS build script, preparation mapping or compiler alias. The Dart Builder
does not spawn Node or write undeclared assets. Node and npm remain build-time
dependencies on development/CI machines; the runtime device executes prepared assets
using Flax's engine.

First-time setup still installs dependencies, declares the Flutter asset directory and
loads the prepared inventory at host startup. Plain flutter run does not implicitly run
Node. Existing project build orchestration remains responsible for ordering these
ordinary build steps. Builder output declarations for advanced Dart/TS paths remain
necessary because build_runner constructs its output graph before analysis.

The build plan's format 2 is independent of Binding Manifest 28 and the unchanged
runtime module inventory format 2, UI protocol 24 and native ABI 2.

## Verification

The minimal example has a permanent JS build, shared plan-based TS aliases and a real
View test invoking Dart from a click. The shopping host uses the automatic plan in its
normal build. Tracked Builder tests cover source/provider plan generation; JS tests
cover scope isolation, provider reuse, stale-output cleanup and path confinement. The
isolated-consumer verifier retains explicit module-config compatibility, types-only
packing and old application execution after compatible host upgrades.
