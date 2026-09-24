# External Binding Verification

This document defines the evidence required for current external bindings. It describes
only the formats and checks implemented by this repository.

## Current contract

| Domain            | Current value | Validation                                                               |
| ----------------- | ------------- | ------------------------------------------------------------------------ |
| Binding selection | Format 2      | Strict YAML schema; unknown fields and unsupported semantics fail closed |
| Package metadata  | Format 1      | `flax_package.yaml`; separate from binding selections                    |
| Binding Manifest  | Format 12     | The reader and writer accept format 12 only                              |
| UI protocol       | 21            | Every generated module must match the runtime exactly                    |
| Native ABI        | 2             | Unchanged by binding generation                                          |
| Module inventory  | Format 1      | `flax_modules.json`; separate from the Binding Manifest                  |

The generator has no reader, adapter, alias or normalization path for earlier binding
selection or Manifest formats. Package metadata format 1 and module inventory format 1
are current independent formats, not compatibility modes.

## Verification layers

A capability claim should cite the narrowest check that proves it:

1. Parser, semantic model and Manifest tests prove strict schema and round-trip
   behavior.
2. `dart run melos run bindings:check` proves reproducible official output and runs the
   complete `flax_codegen` test suite.
3. `dart run melos run check` proves static workspace integration, generated Dart and
   TypeScript checks, documentation links and outside-package consumption.
4. `dart run melos run check:ui` and `check:ui:v8` prove the selected Flutter behavior
   on the prepared macOS arm64 Hermes and V8 runtimes.
5. Package-owned tests prove only the API surface named by those tests. Aggregate tests
   prove cross-package composition, not every member of every bound Dart declaration.

The [binding coverage map](binding-coverage-map.md) records current supported and
deferred surfaces. The [binding generation contract](bindings.md) defines selection,
ownership and conversion rules. Open product decisions remain in
[Open Questions](../decisions/open-questions.md).

## Evidence limits

Successful analysis or generation does not prove runtime behavior. A focused runtime
test does not prove complete Flutter SDK coverage, arbitrary third-party package
support, other operating systems or published-package compatibility. Automatic
`--library` mode may skip unsupported declarations with diagnostics; explicit format-2
selections remain fail closed.

Current manifests are compile-time trusted inputs from direct Dart dependencies. Stable
declaration identity prevents duplicate owners, but the module system is not a security
sandbox and does not support runtime replacement of binding providers.
