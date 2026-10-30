# Task: Optional JSX/TSX support

Status: implemented as a default-off experiment; basic VS Code and WebStorm attribute
completion verified with the configurations below.

## Goal and scope

Support optional JSX and TSX while retaining existing Flax factories, constructors,
signals, Flutter State, and ordinary JS/TS calls. Constructors and owning binding models
remain the source of parameter names and types. Applications do not maintain a second
handwritten props declaration.

A React runtime, Hooks, another reconciler, wrapper Widgets, custom IDE plugins, and
native ABI/UI protocol changes are outside this task. See the [guide](../guides/jsx.md)
and [runnable example](../../examples/jsx/README.md).

## Acceptance criteria

1. JSX stays disabled unless the owning application's `package.json` sets
   `flax.jsx: true`. Disabled builds retain ordinary JS/TS behavior and remove only
   owned generated declarations.
2. Generated contracts preserve positional names/order, recognized final options,
   defaults, callbacks, bindings, Keys, and supported content slots. Lowering calls the
   original API directly and preserves source evaluation order and source maps.
3. esbuild, Vite, native ESM, and the types-only watcher share the configuration and
   contract generator. Saved additions, deletions, renames, and errors recover safely.
4. VS Code and WebStorm offer useful completion and type diagnostics using standard
   TypeScript contracts. Baseline attribute completion is verified in both editors;
   broader editing interactions and other versions remain outside the recorded checks.
5. Maintained-engine runtime and native UI checks demonstrate ordinary/JSX parity for
   Context, State retention, signals, keyed reorder, callbacks, and disposal.

## Implementation

`@flax/build` owns analysis, declaration generation, direct-call lowering, and adapter
integration. `flax-jsx` generates types once; `flax-jsx --watch` follows saved files.
Changing the project switch requires restarting development commands. Output is owned,
validated even with `skipLibCheck`, written atomically, and unchanged when content is
unchanged. A failed generation retains the last valid declaration and fails builds.

Binding owners emit erased `__flaxJsx` metadata from existing constructor models.
Application classes receive generated type-only `jsxProps` augmentations. Standard
`JSX.LibraryManagedAttributes` connects those contracts to the editor. Value types
reference `Parameters`/`ConstructorParameters`, rather than duplicating handwritten
props. There is no generated runtime property or per-element dispatcher.

Compatible `child` takes precedence over `children`; Material's owning selection chooses
Scaffold `body`. Multiple Widgets in a single slot require explicit layout. Dictionaries
and class-instance options remain named objects. No implicit Column/Text, fragments,
spreads, recursive array flattening, or generic tags are supported. Ambiguous or
unsupported component forms retain ordinary API calls. Shared Widget results cannot
satisfy narrow slots such as `Scaffold.appBar`; those use ordinary factories.

SDK named factories `Text.rich` and `ListView.builder` passed production contract and
lowering probes. Application tags support named exported, non-generic classes directly
extending the actual Flax StatelessWidget/StatefulWidget bases, with one ordinary
constructor. JSX/JSDoc and TSX are both checked.

Native ESM rewrites source extensions and requires replacing its Session after changes.
Its development endpoint does not automatically restart the host. Existing bundle
development retains its factory HMR path. This task does not introduce a new HMR
algorithm or require a new engine.

## Development-readiness review

The complete compiler/adapters, generated contracts, native View lifetime and example
were reviewed together. The review fixed the following concrete boundaries:

1. Mixed `Widget | Widget[]` expressions now fail before collection lowering can produce
   a nested array. Callers normalize the expression explicitly. Constructor parameter
   names accept every parser-validated identifier, including Unicode names.
2. Constructor assignments bypass initialization dependency checks only for declared own
   fields; other assignments may invoke an own or inherited setter.
3. The types watcher observes external files even when their first snapshot fails, and
   follows inherited configuration files with arbitrary names. JSX inputs also
   participate in type-driven invalidation, including newly discovered failed inputs.
   Vite observes these recovery inputs as well.
4. Declaration ownership checks also reject dangling symbolic links.
5. Generated SDK contracts and lowered contextual types qualify TypeScript utility names
   through `globalThis`, so components named `Parameters`, `ConstructorParameters`,
   `NonNullable` or `Omit` do not shadow those helpers.

Focused regression tests reproduce each issue before its fix. The build-tool suite now
passes **102 tests**; the maintained V8 runtime suite passes **58 tests**. The clean
full framework UI run passes **1117 tests**, followed by all package examples and
aggregate acceptance. The generator's two JSX contract tests also pass, including actual
TypeScript checking of colliding names and rejection of invalid Widget inputs. Real VS
Code saves again verified changed click behavior and preserved native State, with the
example source restored afterward. A watcher regression was also corrected to wait for
the requested saved version rather than a repeated previous batch.

The initial whole-workspace check completed generation and fixture checks, then exposed
that watcher-test race. All remaining gates passed after the correction. Full UI
acceptance passed after preparing fixtures for all packages. Earlier prepared runs
started too early: one lacked Canvas fixtures; another staged incomplete Material
fixtures and the temporary increment-by-two example used for manual HMR acceptance. All
inputs were restored before the clean full rerun. The JSX Dart runner is also included
in the workspace formatting gate. Final gate results are recorded below.

## Validation

Validation uses TypeScript 7.0.2 and the maintained macOS arm64 V8 engine.

- Build-tool regression: **102 passed**, covering direct-call lowering, type errors,
  evaluation order, source maps, disabled mode, ownership, watcher recovery, all three
  adapters, completion contracts, HMR and Unicode parameter names.
- Full generator regression: **753 passed**. After qualifying utility references, the
  **2 focused JSX contract tests** passed again, including actual TypeScript checking of
  colliding Widget names and rejection of invalid children. All owning bindings and
  public declarations were regenerated. The subsequent comparison of **3498 runtime JS
  files found zero changes** from that type-only correction.
- Native runtime: **58 passed**. Complete UI acceptance: **1143 passed**, comprising
  **1117 framework tests**, **17 package-example tests** and **9 aggregate tests**. This
  includes JSX/ordinary State parity, signals, keys, real Context, HMR, draggable reload
  controls, keyboard access, failed-load recovery and disposal.
- Workspace generation, JS builds, public-type parity, module delivery, analysis,
  formatting, all JS typechecks, documentation, package archives, outside consumers and
  native CMake configuration pass. Archive dry runs retain existing publication metadata
  warnings; no package was published.
- Actual attribute completion was verified in VS Code with TypeScript **6.0.3**, and
  WebStorm **2026.2.3** with its bundled TypeScript **6.0.3** service. Both application
  `Counter.label` and SDK `Text.data` use the original declarations. Other editor
  versions and the complete JSX/JSDoc editing matrix remain unverified; see the guide
  for the tested WebStorm configuration.

## Handoff

The example provides native ESM, a types-only watcher, factory HMR and a runnable native
host. Real VS Code saves changed both TSX attributes and callback bodies while retaining
native State. Constructor and field changes retain conservative restart boundaries. The
debug-only, opt-in `developmentMode` currently provides a movable reload control. It
re-reads an owning View's input and replaces its Session while preserving the control's
position. The example uses the no-store `/@flax/dev.js` endpoint to read the newest
complete script without restarting Flutter. Borrowed Views keep their caller's Session
ownership.

Keep the feature experimental and default off. Standard TypeScript declarations suffice
for the verified editor cases; no IDE plugin, fake React props, callable shim, runtime
JSX dispatcher or new Widget boundary is needed. Original constructors and factories
remain the source of names, types and runtime behavior. No blocking design decision
remains for the verified macOS development workflow.

Android/iOS JSX runs, distribution builds and package publication remain outside the
recorded acceptance. The example's source edits were preserved.
