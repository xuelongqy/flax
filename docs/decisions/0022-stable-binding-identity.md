# ADR 0022: Stable Binding Identity and Dependency Ownership

Status: accepted

Date: 2026-09-12

## Context

External Binding Kit v1 needs a frozen identity contract before Codegen, manifests, or
registration change. Earlier declaration IDs used originating library URIs such as
`package:flutter/src/widgets/framework.dart::Widget`. Those source-based IDs expose
private implementation layout and change when a declaration moves between private source
libraries. They are not a public wire contract. The frozen public wire identity must
also remain independent of working directory and re-export route.

[ADR 0017](0017-package-boundaries.md) already makes `packages/*` the capability
boundary and commits versioned declaration manifests.
[ADR 0018](0018-binding-coverage-strategy.md) keeps explicit selection fail-closed.
[ADR 0020](0020-ui-protocol-20.md) freezes UI protocol 20 with native ABI 2 unchanged.
[ADR 0021](0021-external-binding-version-domains.md) separates version domains and
allows format-1 [`flax_package.yaml`](../architecture/packaging.md) to add a top-level
`bindingNamespace` before freeze.

Trusted third-party package boundaries are
[ADR 0023](0023-external-binding-package-trust.md). This record settles namespace
grammar, source identity, wire identity, derived shape IDs, sibling ownership, and
dependency subtype rules.

## Decision

### Percent encoding

Public binding names and every user/source string inside derived shape IDs use this
encoding. The `publicBindingName` input domain is defined under Wire identity. Take the
UTF-8 bytes with no BOM. Emit an ASCII byte unchanged only when it is `A-Z`, `a-z`,
`0-9`, `_`, `.`, `-`, or `~`. Every other byte becomes `%HH` with uppercase hex and two
digits. Therefore `%`, `/`, `#`, `:`, `$`, controls, and non-ASCII bytes are `%HH`.

Do not decode or normalize before comparison. Comparison is exact over the encoded
bytes.

Normative encoding vectors:

| Input            | Encoded          |
| ---------------- | ---------------- |
| `Widget`         | `Widget`         |
| `FlaxCanvasView` | `FlaxCanvasView` |
| `applyBoxFit`    | `applyBoxFit`    |
| `Fancy$Button`   | `Fancy%24Button` |
| `a/b`            | `a%2Fb`          |
| `a#b`            | `a%23b`          |
| `a:b`            | `a%3Ab`          |
| `100%`           | `100%25`         |
| `café`           | `caf%C3%A9`      |
| `~ok_id`         | `~ok_id`         |

### Package namespace

`bindingNamespace` is the permanent package identity for generated bindings. A package
stores it once as a top-level `flax_package.yaml` field whenever `capabilities` includes
`bindings`. Binding YAML never repeats it. Sibling configs and modules of that package
share the same value. Manifest format 2 copies it.

Grammar: two or more dot-separated lower-case ASCII labels. Each label is
`[a-z][a-z0-9]{0,62}`. Total ASCII byte length is 3..253, as implied by two nonempty
labels plus a dot. Comparison is exact: no Unicode normalization, case folding, or other
rewrite. The value contains no version, slash, percent, colon, or hash.

Valid: `a.b`, `flax.core`, `flax.material`, `flax.canvas`, `com.acme.flax.widgets`,
`io.github.alice.flax.widgets`.

Invalid: `flax` (one label), `Flax.core`, `flax_core.ui`, `foo-bar.baz`, `flax.core/v1`,
`flax.core:1`, `flax.core#1`, `flax.core.`, `.flax.core`, `flax..core`.

Official packages that already include `bindings`:

- `flax` → `flax.core`
- `flax_material_ui` → `flax.material`
- `flax_canvas` → `flax.canvas`

Assign these namespaces only once those packages include `bindings`:

- `flax_cupertino_ui` → `flax.cupertino`
- `flax_fetch` → `flax.fetch`
- `flax_websocket` → `flax.websocket`
- `flax_local_storage` → `flax.localstorage`

The `flax.*` prefix is reserved by documentation policy only. Tools do not hardcode an
official allowlist, perform network ownership checks, or consult registries or signing.
`io.github` is not an official Flax namespace. Third parties use a prefix they control,
for example `com.acme.flax.widgets` or `io.github.alice.flax.widgets`.

Repository, GitHub, Dart, and npm rename do not change a stored namespace. After the
first external release it never changes and is never reused.

Different owning Dart packages that claim the same `bindingNamespace` in one resolved
graph fail at Codegen and in Tooling/archive validation. Sibling modules of one package
sharing that namespace are valid. Runtime does not enforce package-to-namespace
ownership; see [ADR 0023](0023-external-binding-package-trust.md).

### Module identity

`config.name` is the module component. Grammar: `[a-z][a-z0-9_]{0,63}`, 1..64 ASCII
bytes. The current names `flutter`, `components`, `material`, and `canvas` remain valid.

Invalid: `Flutter`, `_hidden`, `1abc`, `my-module`, the empty string, and any name
longer than 64 bytes.

`moduleId` is `bindingNamespace + "/" + config.name`. The slash is a structural
separator and is not percent-encoded. Core therefore publishes `flax.core/flutter` and
`flax.core/components`. Generated Dart and TypeScript modules carry the same literal
`moduleId` as the manifest, as in [ADR 0021](0021-external-binding-version-domains.md).

Further normative `moduleId` values: `flax.material/material`, `flax.canvas/canvas`,
`com.acme.flax.widgets/buttons`.

### Source identity

`sourceIdentity` is Codegen-only. It is present in the binding manifest for ownership
matching and never appears in runtime calls. Codegen resolves aliases and re-exports to
the real non-synthetic declaration, then identifies it by declaration kind, canonical
originating `package:` or `dart:` URI, and declaration name. `file:` URIs and absolute
paths are rejected.

It serves analysis, deduplication, and imported-ownership matching. It has no
cross-version promise.

Every owned declaration, including nominal leaves discovered through signatures, carries
both `sourceIdentity` and `wireId` in the binding manifest. That is the explicit
`sourceIdentity -> owner wireId` map.

### Wire identity

An owned public type uses:

```text
wireId = <moduleId>#type:<encodedPublicBindingName>
```

An owned top-level function uses:

```text
wireId = <moduleId>#function:<encodedPublicBindingName>
```

`#type:` and `#function:` are structural.

`publicBindingName` is the Analyzer-provided, nonempty name of the selected public,
non-synthetic Dart declaration. Private names beginning with underscore, synthetic
declarations, aliases, `jsName`, and invented overrides are rejected and are not
encoding inputs. There is no extra ASCII restriction on that name; its exact UTF-8
spelling is percent-encoded with the grammar above. `encodedPublicBindingName` is that
encoding.

Wire IDs exclude pub and npm names, versions, private source URIs, absolute paths,
selection order, generator version, and `jsName`.

Normative wire IDs:

| Selection                                  | `wireId`                                            |
| ------------------------------------------ | --------------------------------------------------- |
| `Widget` in `flax.core/flutter`            | `flax.core/flutter#type:Widget`                     |
| `applyBoxFit`                              | `flax.core/flutter#function:applyBoxFit`            |
| `State` in `flax.core/components`          | `flax.core/components#type:State`                   |
| `showDialog`                               | `flax.material/material#function:showDialog`        |
| `FlaxCanvasView` with `jsName: CanvasView` | `flax.canvas/canvas#type:FlaxCanvasView`            |
| public Dart name `Fancy$Button`            | `com.acme.flax.widgets/buttons#type:Fancy%24Button` |

### Derived callback, collection, and adapter IDs

Derived runtime IDs use a version-independent readable encoding of the resolved semantic
type shape: the exact ASCII string `shape-v1:` plus one compact JSON array. The JSON has
no objects, no whitespace, no omitted fields, and no implementation-dependent map order.
Booleans are JSON numbers `0` or `1`. Absent optional strings, inner shapes, or factory
names are JSON `null`.

Every user/source string inside the JSON is percent-encoded first, so JSON strings need
no variable escaping. Nominal leaves are stable `wireId` values, percent-encoded when
they appear as JSON strings. They never use `sourceIdentity`. v1 does not hash these
encodings or look them up in a runtime registry.

The first array element is a tag from this closed set: `primitive`, `type-parameter`,
`nominal`, `collection`, `map`, `future`, `futureOr`, `stream`, `callback`, `adapter`.
Adding a semantic dimension requires a new shape encoding prefix and contract, never an
unannounced extra array slot.

Set-like primitive-kind and capability inputs sort by their encoded strings. Positional
parameter order and generic argument order are preserved. Named callback parameters sort
by encoded name.

Fixed tagged shapes, in field order:

```text
["primitive", <kind>, <nullable>, <primitiveKinds>]
["type-parameter", <slot>, <nullable>]
["nominal", <wireId>, <nullable>, <typeArguments>]
["collection", <kind>, <nullable>, <item>]
["map", <nullable>, <key>, <item>]
["future", <nullable>, <item>]
["futureOr", <nullable>, <item>]
["stream", <nullable>, <item>, <nominalWireId>]
["callback", <nullable>, <typeParameters>, <typeArguments>, <positional>, <named>, <result>, <asyncMode>, <independentWidgetResult>]
["adapter", <adapterKind>, <encodeKind>, <scoped>, <asyncIterableFactory>, <inner>]
```

- `<kind>` for `primitive` is the resolved primitive kind: `String`, `bool`, `int`,
  `double`, `num`, `scalar`, `void`, `any`, `data`, or `widget`. Unbound `Widget`
  category uses `widget`. Object/dynamic uses `any`.
- `<kind>` for `collection` is `iterable`, `list`, or `set`.
- `<nullable>`, `<scoped>`, and `<independentWidgetResult>` are `0` or `1`.
- `<primitiveKinds>` is a JSON array of sorted unique encoded strings; `[]` if none.
- `<typeArguments>` is a JSON array of shapes in declaration order; `[]` if none.
- `<nominalWireId>` is the encoded owner `wireId`, or `null` for an anonymous stream
  reference.
- `type-parameter` is a use site: `["type-parameter", <slot>, <nullable>]`.
- Each callback `typeParameters` element is `["generic", <slot>, <bound>, <default>]` in
  declaration order. `<default>` is a bound default shape or `null`. Original generic
  spelling is absent from the shape ID.

Generic identity uses the Analyzer-resolved declaration element, never its source
spelling. Source identifier shadowing is resolved by that declaration element; it must
not collide.

Each root derived shape has exactly one generic slot allocator. Creating a root shape
creates an empty lexical declaration-element-to-slot environment and a monotonic
next-slot counter starting at `g0`. Nested callbacks reuse that same root allocator and
never reset it.

When canonical preorder enters a callback, reserve consecutive slots for all generic
declarations owned by that callback, in their declaration order, before serializing any
of their bounds, defaults, or other children. This permits legal self-bounds and
F-bounds, and other cross-references, to resolve against already reserved slots.
Captured outer generic references keep the outer declaration's slot. Inner declarations
receive the next unused slots. On leaving an inner lexical scope, remove its declaration
mappings but never decrement or reuse the counter. Sibling nested callbacks therefore
continue monotonically in canonical preorder.

The fixed canonical serialization preorder is: visit a node before descendants. For a
callback, after reserving its declaration block, traverse generic bounds then defaults
in declaration order, concrete `typeArguments` in order, positional parameter types in
source order, named parameter types in the already-frozen encoded-name order, then
result. For every other tagged array, traverse child-shape fields left-to-right in the
existing displayed fixed field order.

`<slot>` is exactly `g` followed by the canonical unsigned decimal of the allocated
index, with no sign and no extra leading zeros (`g0`, `g1`, `g10` are valid). Readers
validate imported the binding manifest shapes against this exact numbering and do not
silently renumber them.

- Each callback parameter is
  `["param", <mode>, <name>, <type>, null, <omit>, <snapshot>, <encodeKind>, <scoped>]`.
  All nine slots are always present.
- `<mode>` is exactly `requiredPositional`, `optionalPositional`, `requiredNamed`, or
  `optionalNamed`.
- Positional parameter names are not type identity. `<name>` is JSON `null` for
  `requiredPositional` and `optionalPositional`. A non-null positional name fails
  closed.
- Named parameter names remain percent-encoded and identity-bearing. Named parameters
  remain a JSON array sorted by encoded name. Positional parameters keep source order.
- Dart function types do not carry parameter default values. The fifth callback
  parameter slot is always JSON `null`. Any non-null value fails closed. A future
  identity need for callback defaults requires `shape-v2`, not a non-null `shape-v1`
  slot.
- `<omit>` is `1` when the parameter is omitted when absent. Omission/adaptation is a
  separate explicit semantic from defaults.
- `<snapshot>` is the encoded snapshot name, or `null`.
- `<encodeKind>` is the encoded conversion kind, or `null`.
- `<asyncMode>` is exactly `sync`, `future`, `futureOr`, or `stream`.
- `<result>` is the resolved return type, including any `future` / `futureOr` / `stream`
  wrapper. `asyncMode` is the explicit adapter invocation mode.
- `<independentWidgetResult>` is a callback-level slot. It is `0` for mounted/default
  callback Widget result ownership and `1` only when the callback's `Widget` / `Widget?`
  result receives independent ownership. It describes the callback result, never any
  callback input. Value `1` with a non-Widget result fails closed. All callback slots
  are always present.
- Adapter `<adapterKind>` identifies the adapter (for example `stream`). The four
  adapter metadata slots are always present: kind, `encodeKind`, scoped, and
  `asyncIterableFactory`.

A non-null callback parameter default, a non-null positional `<name>`, or
`<independentWidgetResult>` `1` on a non-Widget result fails closed. The following also
fail closed: unresolved or out-of-scope type-parameter references; duplicate or
inconsistent mapping of one declaration; a slot spelling other than exactly `g` followed
by the canonical unsigned decimal index; gaps, reuse, or non-preorder numbering; nested
allocator reset or collision; and any the binding manifest shape whose declarations or
references violate lexical binding or the canonical sequence.

The complete derived ID is compared as the `shape-v1:` string. Readers do not parse JSON
and re-serialize.

#### Golden: nullable collection

`List<String?>?`:

```text
shape-v1:["collection","list",1,["primitive","String",1,[]]]
```

#### Golden: mixed callback

Nullable synchronous Widget-returning mixed callback, so `<independentWidgetResult>` is
meaningful:

`Widget? Function<T extends Widget>(T value, [String? hint], {required String label, Widget? child, Offset? origin, Object? error, Object? sink})?`

- `T` is alpha-normalized to `g0`; original generic spelling is absent;
- both positional `<name>` slots are JSON `null`;
- every parameter default slot is JSON `null`;
- `hint` optional positional and omit-when-absent;
- `child` optional named and omit-when-absent; it is not an independent input;
- `origin` optional named, omit-when-absent, snapshot `Offset`;
- `error` optional named, omit-when-absent, `encodeKind` `error`;
- `sink` optional named, omit-when-absent, scoped;
- result is nullable nominal `Widget`;
- `asyncMode` is `sync`;
- callback-level `<independentWidgetResult>` is `1`.

Named order after encoding is `child`, `error`, `label`, `origin`, `sink`.

```text
shape-v1:["callback",1,[["generic","g0",["nominal","flax.core%2Fflutter%23type%3AWidget",0,[]],null]],[],[["param","requiredPositional",null,["type-parameter","g0",0],null,0,null,null,0],["param","optionalPositional",null,["primitive","String",1,[]],null,1,null,null,0]],[["param","optionalNamed","child",["nominal","flax.core%2Fflutter%23type%3AWidget",1,[]],null,1,null,null,0],["param","optionalNamed","error",["primitive","any",1,[]],null,1,null,"error",0],["param","requiredNamed","label",["primitive","String",0,[]],null,0,null,null,0],["param","optionalNamed","origin",["nominal","flax.core%2Fflutter%23type%3AOffset",1,[]],null,1,"Offset",null,0],["param","optionalNamed","sink",["primitive","any",1,[]],null,1,null,null,1]],["nominal","flax.core%2Fflutter%23type%3AWidget",1,[]],"sync",1]
```

#### Normative metamorphic vectors

Generic rename is stable. `T Function<T extends Widget>(T value)` and
`U Function<U extends Widget>(U item)` produce this exact ID by using `g0` and a null
positional name:

```text
shape-v1:["callback",0,[["generic","g0",["nominal","flax.core%2Fflutter%23type%3AWidget",0,[]],null]],[],[["param","requiredPositional",null,["type-parameter","g0",0],null,0,null,null,0]],[],["type-parameter","g0",0],"sync",0]
```

Positional rename is stable. `int Function(int value)` and `int Function(int count)`
produce this exact ID:

```text
shape-v1:["callback",0,[],[],[["param","requiredPositional",null,["primitive","int",0,[]],null,0,null,null,0]],[],["primitive","int",0,[]],"sync",0]
```

Named rename changes identity. `void Function({required String label})` and
`void Function({required String caption})` produce these distinct IDs:

```text
shape-v1:["callback",0,[],[],[],[["param","requiredNamed","label",["primitive","String",0,[]],null,0,null,null,0]],["primitive","void",0,[]],"sync",0]
shape-v1:["callback",0,[],[],[],[["param","requiredNamed","caption",["primitive","String",0,[]],null,0,null,null,0]],["primitive","void",0,[]],"sync",0]
```

Mounted-result versus independent-result mode:
`Widget? Function(BuildContext context, int index)` produces two exact IDs that differ
only in the final callback-level slot, `0` versus `1`:

```text
shape-v1:["callback",0,[],[],[["param","requiredPositional",null,["nominal","flax.core%2Fflutter%23type%3ABuildContext",0,[]],null,0,null,null,0],["param","requiredPositional",null,["primitive","int",0,[]],null,0,null,null,0]],[],["nominal","flax.core%2Fflutter%23type%3AWidget",1,[]],"sync",0]
shape-v1:["callback",0,[],[],[["param","requiredPositional",null,["nominal","flax.core%2Fflutter%23type%3ABuildContext",0,[]],null,0,null,null,0],["param","requiredPositional",null,["primitive","int",0,[]],null,0,null,null,0]],[],["nominal","flax.core%2Fflutter%23type%3AWidget",1,[]],"sync",1]
```

Nested capture and inner declaration are stable under rename. These source-equivalent
types produce the same exact ID. The outer declaration and uses are `g0`. The nested
callback captures `g0` and declares/uses `g1`. Positional names and parameter defaults
remain JSON `null`. `asyncMode` is `sync` and `<independentWidgetResult>` is `0` at both
levels:

```text
void Function<T extends Widget>(T value, void Function<U extends T>(T captured, U inner) nested)
void Function<A extends Widget>(A item, void Function<B extends A>(A outer, B local) callback)
```

```text
shape-v1:["callback",0,[["generic","g0",["nominal","flax.core%2Fflutter%23type%3AWidget",0,[]],null]],[],[["param","requiredPositional",null,["type-parameter","g0",0],null,0,null,null,0],["param","requiredPositional",null,["callback",0,[["generic","g1",["type-parameter","g0",0],null]],[],[["param","requiredPositional",null,["type-parameter","g0",0],null,0,null,null,0],["param","requiredPositional",null,["type-parameter","g1",0],null,0,null,null,0]],[],["primitive","void",0,[]],"sync",0],null,0,null,null,0]],[],["primitive","void",0,[]],"sync",0]
```

#### Golden: adapter / async stream

`Stream<int>` with `asyncIterableFactory` `fromAsyncIterable`:

```text
shape-v1:["adapter","stream",null,0,"fromAsyncIterable",["stream",0,["primitive","int",0,[]],"flax.core%2Fflutter%23type%3AStream"]]
```

These goldens use official namespaces and current module names. They freeze the
encoding; they do not assert that today's YAML already records every explicit owner.

### Sibling nominal ownership

Every locally owned enum, object, or other nominal declaration has exactly one explicit
owner module. A declaration is owned only when that owner module's resolved selection
explicitly lists it. Signature discovery never assigns ownership.

A sibling module that mentions the declaration in a signature references the owner's
`wireId`. Missing owner (orphan) or multiple owners fail closed. Tools never choose the
first sorted config or module.

Re-exports do not create owners. `sourceIdentity` is the canonical originating
declaration, so two public re-export paths cannot produce two owners.

Input order does not change ownership, `moduleId`, `wireId`, or derived IDs. Loading
`bindings/components.yaml` before `bindings/config.yaml`, or the reverse, is equivalent.

Core's `flutter` and `components` modules, for example, must not both own `State`. A
type used only through signatures is not owned by the discovering module.

### Dependency subtype rules

When an imported source is already owned in a dependency manifest, the dependent reuses
that owner `wireId` exactly. A dependent package may not republish, shadow, override, or
enlarge the same `sourceIdentity` or `wireId`.

A genuinely distinct child declaration has its own `sourceIdentity` and `wireId`. It may
inherit the dependency owner's resolved public surface and references the parent by the
parent's `wireId`. Extra child members live on the child's `wireId`. They do not enlarge
the parent's symbol.

Positive fixture: a child subtype with a new `sourceIdentity` and `wireId`, inherited
parent surface, and a parent `wireId` reference.

Negative fixture: republishing the same `sourceIdentity` under the dependent module, or
emitting a second `wireId` for that identity.

Conflicting imported owners fail closed. Duplicate `moduleId` or `wireId` always fails
during generation or registration as appropriate.

### Compatibility

A new `wireId` is additive. Removal, rename, reassignment, or a change of kind, module,
or namespace is a package-breaking change. Retired IDs are never reused.

A private source move that keeps the same public binding name and semantics changes
`sourceIdentity` and does not change `wireId`. A `jsName` change breaks the JS public
API and does not change wire identity.

Codegen checks the current resolved graph. Comparing previously released manifests for
historical immutability remains a release-tooling requirement, not a completed check.

Wire-identity aliases and per-symbol ownership override tables are not supported.
Type-only Dart typedef exports in [ADR 0025](0025-generic-typedef-bindings.md) are
different: they introduce no new wire identity or target owner.

## Alternatives

**Use originating source URIs as wire identity.** Rejected. Private library paths move
without a public API change, and they leak implementation layout onto the wire.

**Use pub or npm package names as identity.** Rejected. Registry names can be reserved,
scoped, or renamed independently of a permanent binding namespace, and they are not
frozen while publication remains blocked.

**Hash type shapes or look them up in a runtime registry.** Rejected. Hashes are not
readable diagnostics, and a runtime registry would add a new identity domain. v1 keeps
deterministic readable encodings of resolved semantic shape.

**First-sorted config/module as owner.** Rejected. Multiple explicit owners and orphans
fail closed. Signature discovery does not assign ownership.

**Per-symbol ownership overrides or wire-identity aliases.** Rejected. They hide
ownership conflicts and make historical immutability unenforceable. Fail closed instead.

**Treat `io.github` as the official namespace.** Rejected. Official assignments are the
`flax.*` table above. `io.github.alice.flax.widgets` is a third-party example.

## Consequences

Stable wire IDs decouple public bindings from private source layout and export routes.
Strict ownership rejects duplicate providers and orphans instead of making input order
significant. See [Binding Generation](../architecture/bindings.md) for current usage and
[compatibility evidence](../architecture/external-binding-compatibility.md) for
validation.

It does not change UI protocol 20 or native ABI 2. A stable identity change is a
capability-package major version, as in
[ADR 0021](0021-external-binding-version-domains.md).

[ADR 0021](0021-external-binding-version-domains.md) still owns version domains, the
binding manifest projection, tuple pinning, and compatibility bump rules.
[ADR 0023](0023-external-binding-package-trust.md) still owns trusted third-party
package boundaries. Publication, registry names, license, signing, and support lifetime
remain blocked as in [ADR 0017](0017-package-boundaries.md).
