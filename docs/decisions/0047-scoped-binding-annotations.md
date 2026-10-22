# 0047: Scoped binding annotations

Status: accepted.

## Decision

The pure Dart flax_annotations package supplies const FlaxExport and FlaxIgnore
annotations. FlaxExport defaults to scope app. Without scope YAML, the package has one
implicit app scope and conventional output paths. Package metadata retains the stable
binding namespace. Optional annotation scope YAML overrides the name, paths, JS entry
and provider imports; omitted name/paths use app and the conventional per-name outputs.
Explicit scope files define the full scope set: no implicit app is appended, and unknown
scopes remain errors. Missing app does not implicitly select another configured scope.
The CLI and optional [build_runner entry](0048-build-runner-bindings.md) share selection
and emission.

A format-2 scope without library enables annotations by default and scans its own
package's lib recursively. Optional sources entries restrict discovery to files/globs
under lib. Parts resolve through their owning library. Declarations are grouped by scope
and source identity before public names are merged, allowing distinct same-named classes
in different scopes. Flax's generated files and dependency annotations are not source
discovery roots. Empty scopes emit empty surfaces, so deleting the last annotated API
removes stale bindings.

For each source-scanned scope, the generator owns lib/flax_bindings/<name>.dart, a
public export library for its declarations, including declarations in lib/src. The
manifest uses this public carrier while wire identities and native imports keep the
original source identity. These libraries participate in output preflight, atomic
installation, checks and build_runner ownership. Non-generated files at those paths are
protected. Provider archives include them; private type-carrier validation remains
unchanged.

Legacy YAML with library keeps its original defaults and public-export selection.
Explicit annotations: true discovers annotations in that entry's package, including its
own reexports; a deliberately configured foreign entry remains supported. sources cannot
be mixed with library, additionalLibraries or publicLibraries. annotations: false and
whole-library automatic selection require library.

Classes, enums and top-level functions are the initial targets; members reuse existing
inference. FlaxIgnore removes constructors, fields/accessors and methods before type
conversion. An explicit YAML selection of an ignored API is a conflict.
Repeated/mismatched/unknown scopes and unsupported targets fail at the declaring Dart
source location.

All scopes collect their annotation selections before package ownership and inference.
Matching explicit and annotated roots merge once; an explicit YAML class mapping is the
final member allowlist, not an expanding union. Existing provider identity and
conversion rules remain in force. Annotated roots cannot silently disappear during
inference; unsupported automatically inferred members retain their skip reasons.
Whole-library automatic mode and annotation mode cannot be combined in one scope. Legacy
library configurations without the opt-in flag and --library behavior remain unchanged.

Outputs use the same Dart/TS emitter, package-atomic writer and Manifest. Selection
format 2, package metadata 2, Manifest 28, UI protocol 24 and native ABI 2 are
unchanged. Annotation metadata does not activate a plugin, create a singleton or control
resource ownership. SDK declarations stay separate from host runtime delivery.

## Consequences

Public class annotations expose newly added supported public members by default. Authors
needing a fixed SDK surface should retain a precise YAML member mapping or a dedicated
API facade. A source-scanned annotated declaration needs no hand-written export barrel.
Third-party authors can use the same workflow; companion binding packages can continue
selecting public dependency APIs through configuration.

The annotation package adds no Flutter, analyzer or runtime dependency. Generated Dart
adapters still need flax and the host must compile new native capabilities. Per-file
generation, runtime reflection, plugin discovery and npm publication remain outside this
change. The runnable shopping example combines annotated host APIs with a configured
existing Money provider and a configured unbound delivery dependency.

## Verification

Regression tests compare annotation and equivalent configuration-only output bytes,
check independent scope membership, narrowed YAML surfaces, ignored fields/constructors,
legacy public-entry discovery, default app grouping, source/part boundaries, cross-scope
same-named classes, deletion, authentic annotation identity and source-located
diagnostics. The shopping example and isolated-consumer gate exercise the existing
public/internal plugins, provider reuse, types-only SDK delivery, subscriptions and
compatible upgrades.
