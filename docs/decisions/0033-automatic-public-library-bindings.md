# 0033: Automatic public-library bindings

Status: accepted.

## Decision

`validate`, `generate`, and `check` accept `--library package:foo/foo.dart` as an
alternative to explicit `--config`. The current binding package supplies package-level
metadata in `flax_package.yaml`; the target may be its own library or a resolved Dart
dependency. One public export namespace defines the canonical entry, including public
re-exports of declarations implemented in `lib/src/`. Direct `src` targets are rejected.

Automatic discovery covers classes, mixins, enums, aliases, functions, and top-level
values/accessors using the existing bindability classifier and dependency closure.
Unsupported declarations or members produce `SKIP` diagnostics. Consumers of skipped
runtime types are also skipped instead of reintroducing an unavailable specialization.
An explicit selection or override remains fail-closed. Private, internal, test-only and
protected API is filtered; deprecated API remains available with informational notices.

Compatible manifests from direct Dart dependencies supply existing providers without
per-type import configuration. Existing canonical ownership and ambiguity checks apply.
A generic class is specialized only when observed public signatures provide one safe,
unambiguous concrete use (or the existing erasure is sufficient). Multiple runtime
specializations, provider augmentation and cross-barrel arbitration remain deferred.

Supported Widget constructor callbacks with direct synchronous `Widget`, `Widget?` or
`List<Widget>` results reuse mounted invocation ownership without requiring a
`BuildContext` parameter or generated `independentWidgetCallbacks` metadata. Public
non-generic implementable Widget interfaces reuse native interface forwarding. This adds
selection inference without changing lifetime rules or the UI protocol. Route, page and
host semantic adapters remain explicit. Application resource cleanup remains ordinary
application code under Flutter lifecycle rules.

Optional `bindings/flax_overrides.yaml` uses format 2 with `overrides.classes`,
`overrides.functions`, and a declaration-level `overrides.exclude` list. Only supplied
fields replace inferred fields. Unknown or unbindable override targets fail. This file
is reserved for automatic mode and is not an explicit selection config. Ordinary
packages need no binding YAML. Package metadata retains the namespace and JS package;
outputs follow the standard generated Dart/TS and manifest paths.

Custom core collection subclasses are deferred in automatic mode: their native members
can conflict with bridge collection methods (for example native `toSet()` returns a Dart
Set while the bridge copy method returns a JavaScript Set). Ordinary collection
parameters and results remain supported. Extension discovery, generic Widget-interface
declarations and multiple runtime specializations remain outside this iteration.

The automatic workflow uses the current format-2 selection semantics, Manifest 12 and UI
protocol 21 defined by [ADR 0035](0035-generic-state-variants-and-protocol-21.md).

## Collection subclass follow-up

The original collection-subclass deferral above has been resolved. Automatic discovery
now combines selected native members with the existing shared collection table. Native
members keep their Dart semantics; overlapping helper signatures are omitted from the
TypeScript parent projection, and typed inputs authenticate the same Dart instance.
Inherited generic proxy methods retain one lexical declaration scope through strict
Manifest round-trips. See
[collection subclasses](../architecture/interop.md#collection-subclasses). Native ABI 2
is unchanged. This settles the initial library-discovery and annotation-policy questions
in ADR 0018; explicit configuration remains supported.

## Curated configuration follow-up

Curated production packages use `flax_bindings.yaml` and, for fixed State mixins,
`flax_components.yaml`. Shared default discovery accepts `flax_*.yaml` and `flax_*.yml`
only; an explicitly supplied `--config` still accepts a custom direct-child filename.
Unrelated YAML and the reserved `flax_overrides` file do not become sibling selections.

Declaration lists under `classes`, `functions` and `extensions` reuse the existing
automatic selector within the chosen scope. Ordinary local objects retain factory calls;
proxy generation requires an explicit override. Runtime member types must be selected,
provided by a sibling or dependency, or use an existing built-in conversion. Unsupported
members produce skips. Dependencies retain their own published API and ownership.
Mapping forms still express precise member allowlists. Inline `overrides` uses the same
strict field-replacement schema as library mode for adapter kinds, proxies, fixed
mixins, callback metadata and lifecycle policy. Scope names and overrides fail closed.
Rendering-only Widgets explicitly clear instance members using a shared YAML mapping;
constructors/static members remain inferred. This preserves reactive descriptions
instead of silently switching to fixed native-object construction. Fixed generic
description owners, callback snapshots and State mixins remain explicit policy.

Production migration preserves module identities and the previous API. Shared selection
now uses the parser's public-type normalization for constants, stream owner defaults and
callback snapshot rules. Inference probes restore local selections and snapshots. Widget
views include their selected native Widget parents. Internal factory symbols are
exported from generated chunks so TypeScript can emit declarations for aliases; public
barrels still expose only selected API names. Selection format 2, Manifest 24, UI
protocol 24 and native ABI 2 remain unchanged. This follow-up supersedes the original
format/policy snapshot above; protected APIs follow the current ordinary member rules.

## Verification

CLI tests exercise generation/checking without binding YAML, dependency public barrels,
provider reuse, optional overrides, filtering, and actionable skips. An automatic
library fixture compiles generated Dart and strict TypeScript with generic uses, Widget
builders and native interfaces. Runtime ownership is checked by the existing native
callback and Widget-interface suites on Hermes and V8; this is scoped regression
evidence, not whole-Flutter API certification.
