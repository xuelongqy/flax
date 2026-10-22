# 0047: Optional build_runner binding generation

Status: accepted.

## Decision

flax_codegen exposes the optional flax_codegen:bindings Builder alongside the existing
CLI. It aggregates all sibling format-2 binding YAML scopes in one package step keyed by
flax_package.yaml. Annotation and configuration-only scopes use the same parser,
ownership resolution, provider projection, emitters and current manifest format.

The Builder reads YAML, npm manifests and provider metadata through BuildStep. Dart
libraries resolve through the build-system resolver, so earlier generated Dart inputs
participate in analysis and dependency tracking. Package metadata uses an in-memory
snapshot with virtual package roots; missing snapshot files never fall back to disk.
Source-discovery globs are tracked through BuildStep and use the same scope grouping as
the CLI. Public carrier searches exclude unreadable libraries and the current step's
outputs. Source-scanned scopes generate public export libraries; legacy library entries
continue to provide their public type carriers.

When options.outputs is omitted, the Builder declares the conventional app adapter, TS
module, public Dart export library and manifest before the graph is constructed. With no
binding YAML it uses the same implicit app selection as the CLI. Optional annotation
scope YAML can override only the fields that differ from the defaults.

Source-scanned packages also emit the shared bindings/js_modules.json build plan. The
Builder declares it implicitly; pure legacy packages leave that optional output absent.
The ordinary JS build consumes it as described in
[ADR 0048](0048-generated-binding-js-build.md), outside the Dart Builder.

Custom directories, legacy library configurations and multiple scopes list every Dart/TS
path in options.outputs, including source-scanned public libraries. The manifest is
implicit. Missing or unused declarations fail before emission: arbitrary paths and scope
counts cannot be discovered after the output graph is fixed. Advanced routing changes
update both files. Target sources still include the nonstandard YAML/npm inputs
alongside other builders' inputs.

The Builder requests ordering after Dart-producing builders. Its runtime output set can
be configured, so a builder consuming Flax outputs must declare ordering after Flax. One
package step finishes validation and emission before writing declared assets. Dart
formatting runs in process. build_runner owns installation, caching and stale-output
cleanup; the Builder never invokes the CLI, spawns processes or mutates files directly.
The CLI retains its filesystem validation, package transaction and rollback behavior.

Binding providers expose flax_package.yaml and bindings/manifest.json with standard
additional_public_assets declarations in their own build.yaml. The Dart archive includes
that file and generated registration libraries. This makes existing provider identities
available to the graph; it does not reselect or regenerate dependencies. Local providers
using CLI generation are built before the consuming host.

## Consequences

Consumers can run build or watch alongside their other Dart builders. The annotation
package stays pure Dart. The current checkout pins a build/build_runner combination
compatible with analyzer 13.3.0 rather than upgrading the analyzer for this entry.

Choose one writer per package: stop watch before CLI generation. CLI check remains a
read-only consistency check for either entry. JS compilation, types-only npm SDK
packing, miniapp bundling and explicit FlaxView plugin injection keep their existing
workflows. New native Dart APIs still require rebuilding the host. No runtime, ABI,
protocol, manifest version, package naming or publication contract changes.

## Verification

Builder tests use tracked in-memory inputs, separate public/internal scopes, ignored
members, a preceding Dart generator and rejection of undeclared or unsafe outputs. The
shopping example compares CLI/Builder bytes, exercises real watch updates/removals and
retains its existing runtime, provider reuse, types-only packaging and compatible
host-upgrade verification.
