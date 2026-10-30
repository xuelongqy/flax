# Optional JSX declaration and lowering probe

Status: historical, isolated build-time feasibility experiment. The production
implementation now lives in `@flax/build`; use the
[current guide](../../docs/guides/jsx.md) and
[implementation record](../../docs/tasks/optional-jsx-support.md). This receipt only
describes the original probe, not production adapter or native acceptance.

## Goal and scope

Check whether ordinary Flax constructors can remain the source of truth while JSX and
TSX receive standard TypeScript attribute checking and completion. Generated
declarations must not introduce a runtime component or dispatch function.

The probe uses the repository's actual public Flutter/Material declarations and
TypeScript 7.0.2. The executable API-call comparison uses explicit test doubles; it does
not validate native Dart calls, Flutter Elements, State, or rendering.

## Run

From the repository root with the existing workspace dependencies installed:

```sh
mkdir -p "$PWD/.local/tmp"
TMPDIR="$PWD/.local/tmp" TMP="$PWD/.local/tmp" TEMP="$PWD/.local/tmp" \
  node experiments/jsx/run.mjs
```

The runner writes the concise [results receipt](results.json), then removes its
temporary project from `.local/tmp/`. No Flutter application or IDE is launched.

## Switch and ownership

`prepareJsx({ root, jsx: false })` is the default. It leaves ordinary JS/TS source
unchanged, rejects JSX file inputs, and removes only its own generated declaration. It
never deletes an unrelated declaration with the same filename.

`prepareJsx({ root, jsx: true })` analyzes the project and generates
`flax-jsx.generated.d.ts`. The project includes this optional file with an `include`
pattern, so disabling JSX does not leave a missing explicit root-file reference.
Enabling refuses to overwrite a file that lacks the experiment's ownership marker.

This function option belongs only to the historical `prototype.mjs`. Production uses the
owning project's `package.json` setting described in the current guide, shared by
declaration generation and the build adapters; it requires no runtime Session flag or
engine rebuild.

## Implementation

The existing TypeScript project API reads named exported component constructors and
statically imported Widget factories. Parameter names and order come from their
declarations. Generated input types reference `ConstructorParameters` or `Parameters`
instead of duplicating value types. Named `options` containers retain their fields.

Named component interfaces receive a type-only `jsxProps` augmentation. Standard
`JSX.LibraryManagedAttributes` connects these contracts and factory inputs to JSX. The
probe checks actual TypeScript language-service attribute completions as well as
diagnostics; it does not infer IDE support from successful JavaScript output alone.

Nested content maps to a compatible `child`, then `children`. An explicit symbol
override maps Scaffold content to `body` in the fixture. A production binding owner
would provide this override; Core should not maintain a name-based Widget catalog.
Multiple Widgets in a single slot require an explicit layout. Literal text requires an
explicit Text call or tag.

Lowering emits ordinary factory calls and `new Component(...)`. Typed local temporaries
preserve attribute evaluation order and callback contextual typing. Concise arrow bodies
become blocks when they need temporaries; no JSX runtime, React component, wrapper
Widget, or per-element dispatcher is emitted. Source files without JSX are returned
byte-for-byte unchanged.

## Acceptance and limits

The runner verifies positive JSX/TSX and JSDoc cases, negative attribute and callback
types, constructor defaults, single/list/body mapping, source evaluation order,
completion, regeneration after a rename, and switch cleanup/ownership behavior. Lowered
source is typechecked again and passed through the existing Flax semantic compiler
before the API-call comparison.

Current boundaries:

- Named exported, non-generic components and unambiguous signatures only. Local or
  default exports, overloads, destructuring, rest parameters, custom inheritance, and
  generic specialization need separate investigation.
- No attribute spreads, fragments, direct JSX field initializers, implicit text Widgets,
  or recursive child-array flattening. These are not production syntax.
- Components that expose both `child` and `children` have a standard JSX attribute
  naming collision. The probe reports this instead of weakening their types.
- JSX results retain the shared Widget type. Narrow interfaces such as `Scaffold.appBar`
  use ordinary factory calls. Constructor rename detection reports old JSX attributes;
  it does not implement cross-source automatic rename.
- This does not implement a long-running generator, atomic incremental publication,
  complete source maps, production HMR, IDE UI integration, or native runtime gates.

## Historical decision

The probe supported testing the generated contracts in actual editors and defining an
explicit supported-constructor subset. Its service completion check alone did not
establish frontend completion in every IDE.

The [implementation plan](../../docs/tasks/optional-jsx-support.md) records the proposed
switch, ownership, phased gates, and first-version boundaries. It now records the
implementation, verified editor configurations, and remaining coverage.
