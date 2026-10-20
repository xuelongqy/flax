# Standalone UI binding ownership

Status: integrated, reviewed and committed locally

## Scope

Promote automatic public `material_ui` and `cupertino_ui` discovery to the two official
binding packages. Remove native Flutter Material/Cupertino binding modules from Core,
without making Core depend on either extension. Keep existing provider identity, checked
views, module injection and joint GC. Do not push, dispatch CI or rebuild engine SDKs.

## Ownership and migration

Core continues to own Flutter framework/widgets, Dart SDK bindings and the shared host.
Applications use `@flax/material-ui` and `@flax/cupertino-ui` with their existing
plugins. The old `@flax/flutter/material` and `@flax/flutter/cupertino` binding entries
are removed; there is no alias between distinct upstream Dart classes. Flutter's native
Dart libraries remain available to host applications and the upstream compatibility
widgets.

Automatic selection retains unsupported skip reasons. The explicit localization
blacklist, existing reactive rendering adapters and shared host ownership of `runApp`
remain. Each UI owner generates only its referenced `intl` closure; Material reuses the
declared Cupertino provider for Cupertino APIs. `Brightness` and `TextInputAction`
remain convenience reexports of Core providers.

Host module delivery and Node use the same package root entry. Both source and public
types compilation include all generated library and dependency entries. Generated Dart
imports have direct source dependencies, including `vector_math` and Material's
`cupertino_ui`; this does not create duplicate JS bindings. Archive validation isolates
its staging directory from the parent checkout's ignore rules.

## Coverage and source size

Sizes are decimal MB, measured before compilation. Core's JS/TS source column includes
its shared runtime; generated binding Dart excludes the host bootstrap.

| Owner     | Modules |      Owned classes | Binding Dart | JS/TS source | Manifest |
| --------- | ------: | -----------------: | -----------: | -----------: | -------: |
| Core      |      15 |              1,773 |     35.19 MB |     27.79 MB | 12.30 MB |
| Material  |       2 | 556 + 5 local Intl |     17.19 MB |     12.90 MB | 11.64 MB |
| Cupertino |       2 |  96 + 5 local Intl |      2.24 MB |      1.88 MB |  1.79 MB |

Core binding Dart decreases from 45.78 MB to 35.19 MB (23.1%). Its JS/TS source
decreases from 36.18 MB to 27.79 MB, and its Manifest from 20.39 MB to 12.30 MB. The
complete optional UI surface replaces small curated selections: combined binding Dart
across all three owners grows from 46.86 MB to 54.62 MB. This is optional package
ownership, not evidence of an AOT or application-size reduction.

All 3,639 retained Core declaration identities and the original 42 standalone UI class
identities are unchanged. Core has no remaining Material/Cupertino source owners or
references to the two removed modules. The concrete Cupertino localization language
blacklist remains; unsupported signatures retain their generated skip reasons.

## Validation

Start from `65d099450a39311d3d84be1911006f5a3ccf37d2` on `feat/flutter-sdk-bindings`.
The baseline working tree is clean. Core's other modules have no nominal references to
owners of the two removed UI modules. Evidence, source sizes and command receipts are
kept in `.local/ui-binding-split-20261020`.

Official generation, JS builds, strict workspace TypeScript checks and fatal-info Dart
analysis pass. JS tests pass 205 cases; tool tests pass 103 cases with one Windows CDB
self-test not applicable on macOS. Frozen-lockfile resolution with the maintained
Flutter checkout passes without changing either lockfile. Archive checks validate 12
Dart packages and 16 npm consumer surfaces outside the workspace.

The first V8 UI run records 631 named cases, with 17 Material failures caused by missing
root reexports in host delivery. After fixing the shared entry rule, all 244 Material
and 2 Cupertino cases pass. The other 385 successful cases are reused; every original
case identity has a successful result. No GC assertions or runtime GC implementation
were weakened or replaced.

Both maintained-engine Core applications pass their original 252 named runtime/UI cases:
macOS V8 debug and iOS arm64 Simulator Hermes debug. Hermes additionally passes 13
standalone UI cases plus platform initialization. This covers separate Intl views,
checked cast-back identity, Material-only plugin injection of Cupertino dependencies,
themes, application roots, navigation, replacement and cleanup. Existing suites cover JS
inheritance, method overrides, `super`, cross-session roots and 1,000 bridge-cycle
collection. Independent package examples and the embedded aggregate application pass.

Repository documentation and changed-file formatting pass. The full Prettier command
still reports the pre-existing, unchanged root `AGENTS.md` formatting warning; all other
files pass. Android, release/AOT and paired application-size measurements were not
rerun. The complete generator unit suite was not repeated because generator
implementation did not change.

Temporary application copies and this task's Xcode DerivedData are removed after
verification. Maintained engine/SDK builds and concise receipts are preserved. The iOS
Simulator stays booted. No push, CI dispatch or engine/SDK build is performed.

## Review

The existing 42 UI classes retain all previously selected members. Material's 43 public
exports and Cupertino's 8 exports retain their existing public subpaths. Parameter
comparison matches named arguments by name: added optional parameters do not change
existing signatures. The only existing generic-slot renumbering is consistent between
the declaration and result of `ThemeData.extension`.

Review reruns pass 17 build/module-delivery tests, 7 Dart delivery tests and 3 Material
JS tests. Delivery metadata and generated public declarations match their sources. The
native application, full UI, archive and GC evidence above remains applicable; review
required no runtime or ownership changes. No blocking findings remain.
