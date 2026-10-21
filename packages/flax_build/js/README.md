# @flax/build

Compiles Flax JavaScript/TypeScript applications, prepares locked host modules and runs
Vite development hot reload. Install `@flax/build` as a development dependency; the
former `@flax/tools` package and `packages/flax_tools` directory have been renamed. JS
and TS use one toolchain. It runs in Node 22.23.0 or newer; emitted applications contain
no Node, TypeScript compiler or Vite dependency.

## TypeScript compilation

The esbuild and Vite plugins share one semantic compiler before TS types are erased:

```ts
const bag = Bag<string>([]);
const named = Bag.named<string>({ items: [] });
const nested = Bag<Map<string, string[]>>([]);
const contextual: Bag<string> = Bag([]);
const inferred = Bag(['a']); // Bag<String>
asDart(existing, Bag<string>);

class Strings extends Processor<string> {
  override transform(value: string) {
    return super.transform(value) + '!';
  }
}
class Methods extends GenericMethods {
  override wrap<T>(value: T | DartOutput<T>): DartList<DartOutput<T>> {
    return super.wrap<T>(value);
  }
}
methods.wrap<string>('a');
```

These are generated binding exports from the application's selected Dart API. Class
construction, named constructors, heritage and instantiation expressions use the
existing shared `$type` selector. Top-level functions, returned generic Dart callbacks,
static and instance methods use `dartType`. Generic extension members prepend their
view's owner arguments before method arguments;
`ListX<string>(list).mapFirst<number>(callback)` and owner-dependent getters use the
same method selector. A getter returning a generic callback selects its extension owner
first, then the callback's own type arguments. Generic aliases retain their full
underlying Dart arguments, including nested collections. No type combinations or new
per-class runtime implementations are generated. Dart still checks real type bounds. For
example, a Dart `List<T> Function<R>(R)` getter invoked as
`ListX<string>(list).captured<number>(3)` returns `DartList<string>`; the callback's num
argument does not replace the extension's String. Nested callbacks retain each enclosing
scope through the same binding model.

A generic override's `super.method<T>(...)` (or an equivalent inferred call) forwards
the original per-call native context, including across `await`. Intermediate JS
overrides, private fields and lexical `super` are preserved. The context is local to one
invocation; it is not a global current-type value or a new business root. A closed
`super.method<string>(...)` also works in a non-generic method. An open generic override
must forward its own parameters to the same super method; selecting different types or a
different super method there requires an explicit design, and compilation rejects it.

Inference uses resolved call signatures and local contextual results, not whole-program
runtime guessing. Empty, ambiguous, `any` and `unknown` inputs keep the existing legal
bound defaults. An unrepresentable inferred type also retains that path. Explicit
unsupported types fail with a source location. An arbitrary user-authored
`function make<T>() { return Bag<T>([]); }` has no runtime Dart `T`; accept an
authenticated token and use `$type`/`dartType` explicitly instead. JS-only subclasses
are not separately registered Dart templates. Plain JS and unrelated TS generics are
unchanged.

Supported syntax maps strings, booleans, numbers, bigints, nullability, standard
collections, Future/FutureOr/Stream and selected nominal binding types to existing type
handles. Shared collection input aliases use their underlying Dart collection type.
`Widget` uses the shared Flutter Widget token; Context and State use their generated
native tokens (`DartState`, not the JS lifecycle `State`). TS `number` selects Dart
`num`; use `dartTypes.int`/`.double` when the distinction matters. Arbitrary
structural/function or Record type composition is not introduced. Already-authenticated
runtime types can still use `dartTypes.of(value)`.

For example, Flutter's elevation property requires `WidgetStateProperty<double?>`. Its
exact numeric type still uses a runtime token:

```ts
const elevation = dartType(
  WidgetStateProperty.resolveWith,
  dartTypes.nullable(dartTypes.double),
)((states) => (states.contains(WidgetState.pressed) ? 8 : 2));
```

Use the application's standard `tsconfig.json` for resolution and run `tsc --noEmit`
separately for complete type diagnostics. The compiler's pinned TypeScript API is a
build dependency; raw `tsc` or esbuild without the Flax plugin only erases `<T>` and
does not select Dart types. Both plugins retain source maps to the original TS source.

## Business application directory

```javascript
import { writeFile } from 'node:fs/promises';
import { prepareApplication } from '@flax/build/application';

const result = await build({ /* existing esbuild options */ write: false });
const application = await prepareApplication({ projectDirectory: workingDirectory });
await writeFile(application.entryPath, result.outputFiles[0].contents);
```

The default output `../assets/flax/` contains `flax.json`, the compiled `app.js`, and
resources copied from the JS project's `assets/` directory into `assets/`. The descriptor
uses `formatVersion: 1`, `id` (from `package.json`'s `flax.id`, then `name`), `version`,
`entry`, and optional `description`. Version and description come from `package.json`.
Override `id`, `entry`, `assetsDirectory` or `outputDirectory` through options. Paths are
relative to `projectDirectory`; absolute directory options are also accepted. Entry
paths must stay relative and cannot collide with descriptor or resource paths.

Compile before staging so compiler errors preserve the previous directory. Resource
copying also finishes in a temporary directory before replacing the generated `assets/`
subtree. An explicitly configured `assetsDirectory` must exist and be a directory; a
missing default `assets/` directory means the project has no resources. Source and
output directories must not overlap. Declare output, entry and resource subdirectories
in the Flutter pubspec. Flutter handles native image variants; this helper neither emits
an archive nor builds a standalone Flutter `AssetManifest.bin`. Installed directories
must supply that native manifest separately. See the
[application resource contract](../../../docs/architecture/applications.md#application-resources).

## Host module preparation

```json
{
  "formatVersion": 1,
  "modules": [
    { "specifier": "@flax/flutter/widgets", "package": "@flax/core-runtime" }
  ],
  "flutterProject": "..",
  "output": "assets/flax_modules"
}
```

Run `flax-modules flax.modules.json` from the JavaScript project. The config location
determines npm resolution; `flutterProject` is relative to that location. Commit the npm
or pnpm lockfile and declare `assets/flax_modules/` in the Flutter pubspec first.
`--check` verifies the complete generated inventory without modifying it.

Business esbuild configurations use the same prepared manifest:

```javascript
import { readModuleManifest } from '@flax/build';
import { flaxEsbuildPlugin } from '@flax/build/esbuild';

const manifest = await readModuleManifest('../assets/flax_modules/modules.json');
const plugins = [flaxEsbuildPlugin(manifest)];
```

The plugin compiles TS and intercepts direct imports, transitive imports and re-exports.
Host-provided implementation packages are not needed in the business project; their
declaration packages still participate in ordinary TypeScript value imports. Missing
prepared Flax imports fail during bundling even when their source package is installed.
Register the corresponding Dart plugin and prepare its source package. Already-inlined
third-party implementations need a composable entry or rebuilding.

Preparation accepts public entries from a package's exported `flax_modules.json`.
Delivery format 2 contains `package`, exact `version`, and `modules`, where each entry
declares `specifier`, npm-exported JavaScript `source`, optional unique `owner`, and
required Dart `bindings` (`moduleId`, `uiProtocol`, `types`, `functions`). It is
distinct from the Binding Manifest. Only selected entries and required module
dependencies are prepared. Conflicting versions, owners and undeclared Flutter assets
are rejected.

Prepared format-2 inventories record public `subpaths` found under each delivery's
`subpathRoot`, excluding private `_bindings` and helper entries. Business builds accept
only exact prepared entries or these recorded aliases; a parent module never supplies a
missing child module. Older inventories without `subpaths` allow exact entries only.

Prepared production modules use esbuild minification with function/class names preserved
and without property mangling. The full binding requirements, capabilities and public
subpaths remain in `modules.json`, where Dart validates them before module execution.
Each JS registration carries only its specifier, owner, version, artifact hash and
dependencies; it no longer repeats unused inventory fields. Updating prepared modules
also updates artifact hashes and requires rebuilding consuming business bundles.
Development transforms and the HMR protocol remain unchanged.

Runtime format `flax-cjs-1` registers factories before business execution. Factories run
once, lazily, within one runtime. Dependency cycles reuse published CommonJS exports;
failed initializers remain failed. The artifact digest detects stale contract pairings;
it is not a code-signing or untrusted-code security boundary.

## Development hot reload

For local Flutter development, `flax-dev` keeps the normal synchronous asset startup and
uses Vite only for watching, module graph updates, transforms, and its HMR WebSocket:

```sh
flax-dev --entry js/src/main.ts --out assets/app.js --port 5173
```

`flax-dev` installs the same compiler as production builds. An existing Vite setup can
install `flaxVitePlugin()` from `@flax/build/vite` before TS erasure. Type-only imports
and provider declaration dependencies are watched without loading them as runtime
modules. Changing a type alias recompiles affected callers; changing the actual selected
generic superclass requires the existing restart boundary. Compile errors preserve the
last valid startup asset and fixing them retries the pending dependency changes.

The development server waits for 50 ms of file stability before compiling a save. This
coalesces partial and rapid writes without losing a later save to the native watcher's
change-event throttle. It affects development update latency only.

The generated asset requires the existing Flax module registry. Install
`FlaxWebSocketPlugin` in the session to receive updates. Compatible class method changes
preserve the canonical constructor and existing State instances; constructor or instance
initialization changes (including changed module-level or imported inputs), field shape,
private brands, superclass, page inventory, and module removal require a session
restart. Runtime reload failures are reported by `flax-dev`.

Class methods retain canonical self references after a reload, including `new Counter()`
and `instanceof Counter`. Named and default exports keep the same constructor identity,
and development compilation preserves the original class names.

Each successful compilation atomically refreshes the complete startup asset, even when
the running Session rejects that update and requires a restart. Compile errors retain
the last valid asset. Restart the Flutter host with the refreshed asset to load the
current source. Content revisions and per-Session commit acknowledgements keep live
updates consistent with that asset: rejected dependencies are retried with the next
update, while unchanged dependencies, including private-field classes, reuse their
existing runtime instances. The server sends only changed factories and their importers,
keeps one batch in flight per Session, and coalesces later saves into the latest
snapshot. Edits made during a syntax error remain dirty until a complete asset is
published, so fixing the importer also compiles its pending dependency changes. Class
members assigned after their declaration are captured when the module finishes; ordinary
configurable assignments participate in commit and rollback.

The maintained engine uses V8 on macOS and Android arm64 and Hermes on iOS arm64.
Android USB development forwards the default port with `adb reverse tcp:5173 tcp:5173`;
the iOS simulator can reach the host loopback directly. Keep staged module
initialization free of business side effects: registry validation does not undo
arbitrary effects.
