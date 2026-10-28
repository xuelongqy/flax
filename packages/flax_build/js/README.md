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

For original runtime ESM, use
`prepareModuleApplication({ modulesDirectory: 'src', entry: 'main.js' })` from
`@flax/build/application`. It preserves JS/JSON/Wasm bytes and lowers TS into separate
ESM files with the existing semantic compiler. Use explicit runtime `.js` import paths
in TS; installed SDK names and remote URLs remain imports. The generated application
descriptor declares module kinds and capabilities, and `packApplication()` includes
every module in its integrity inventory. Source errors during TS lowering preserve the
previous output. Modules are limited to 256 files and 64 MiB, with runtime per-kind
limits. CSS and runtime npm discovery are unsupported.

`flax-dev --entry src/main.js --out ../assets/flax_esm` starts Vite's native module
endpoint with JavaScript, JSON and Wasm MIME types. It preserves original import syntax
and emits `flax:restart` after a successful source rebuild. Replace the owning
Session/View to apply a module update. A file output such as
`--out ../assets/flax/app.js` keeps the existing single-bundle factory hot reload. Every
application entry, including that bundle, executes as native ESM; no format flag is
needed. Factory HMR lowers modules to CommonJS and cannot retain top-level await; use
directory output for original ESM development. A release bundle that retains top-level
await must use esbuild's `format: 'esm'`. See the
[native module contract](../../../docs/architecture/modules.md).

```javascript
import { writeFile } from 'node:fs/promises';
import { prepareApplication } from '@flax/build/application';

const result = await build({ /* existing esbuild options */ write: false });
const application = await prepareApplication({ projectDirectory: workingDirectory });
await writeFile(application.entryPath, result.outputFiles[0].contents);
```

The default output `../assets/flax/` contains `flax.json`, the compiled `app.js`, and
resources copied from the JS project's `assets/` directory into `assets/`. The
descriptor uses `formatVersion: 1`, `id` (from `package.json`'s `flax.id`, then `name`),
`version`, `entry`, and optional `description`. Version and description come from
`package.json`. Override `id`, `entry`, `assetsDirectory` or `outputDirectory` through
options. Paths are relative to `projectDirectory`; absolute directory options are also
accepted. Entry paths must stay relative and cannot collide with descriptor or resource
paths.

Compile before staging so compiler errors preserve the previous directory. Resource
copying also finishes in a temporary directory before replacing the generated `assets/`
subtree. An explicitly configured `assetsDirectory` must exist and be a directory; a
missing default `assets/` directory means the project has no resources. Source and
output directories must not overlap. Declare output, entry and resource subdirectories
in the Flutter pubspec. Flutter handles native image variants; this helper neither emits
an archive nor builds a standalone Flutter `AssetManifest.bin`. Installed directories
must supply that native manifest separately. See the
[application resource contract](../../../docs/architecture/applications.md#application-resources).

## Binding npm packages

Binding libraries use ordinary npm packages. Keep `name`, `version`, `exports`, `files`,
dependencies and publication settings in each project's `package.json`. Compile
generated TypeScript with the project's `tsconfig.json` and normal build script, then
inspect `npm pack --dry-run` or pack with the package manager. Flax does not rewrite SDK
publication policy or publish packages. Flax CLI can scaffold missing host setup. Normal
@flax/build preparation materializes extra scope sources and maintains the SDK npm setup
specified in the generated binding plan. Only owned entries are updated; custom scripts,
versions, publication settings and TS configuration are preserved.

Public declarations and host implementations remain separate delivery artifacts. One SDK
npm project may own src/generated and types directories while its files allowlist
publishes declarations only. The host compiles the source directly through its generated
plan, so a separate runtime npm package is unnecessary for host-owned bindings. Existing
providers can still deliver private runtime packages with flax_modules.json. Business
projects depend on declarations, with no runtime package in their bundle. A package
providing additional JavaScript wrappers can publish those as ordinary JS. These
bindings execute inside a compatible Flax host.

A types package opts into independent host binding builds with ordinary npm metadata:

```json
{
  "name": "@acme/app-sdk",
  "flax": { "hostBindings": true },
  "exports": { "./cart": { "types": "./types/cart.d.ts" } },
  "files": ["types"]
}
```

Use flaxEsbuildPlugin() without a manifest. The plugin derives the exact public module
names from exports, verifies declaration files remain inside their package, and emits
host imports without SDK version/hash pinning. Wildcard subpaths require an explicitly
exported types-only static parent module and existing declarations. Private _bindings
paths and relative imports of generated binding implementation source are rejected,
including host sources outside a marked SDK package. Exports that also provide normal JS
stay bundled, allowing convenience wrappers in the same SDK. No runtime JS or second
module list is required in a pure types SDK. Installing types never installs a Dart
plugin or makes a missing runtime module available.

Standard root export shorthand is also supported: exports may be a declaration path or a
root conditions object such as {"types":"./types/index.d.ts"}.

Incremental builds reread package metadata and watch the selected declarations and npm
manifest, so changing exports also updates host imports and normal JS wrappers.

The following delivery-metadata helper remains available for existing provider runtime
packages and legacy delivery projects.

Use `bindingModuleRequirements(bindingManifest)` from `@flax/build` in a normal build
script to read generated binding requirements. It accepts the current Binding Manifest
28 and returns a map keyed by public module specifier; each value contains `bindings`
and `helperSubpaths`. It shares the official Manifest projection, including operation
IDs, protocols and capabilities. It does not compile, write files or construct an npm
package. For a single-file generated entry, a project can write delivery metadata as:

```javascript
import { bindingModuleRequirements } from '@flax/build';

const requirements = bindingModuleRequirements(bindingManifest);
const delivery = {
  formatVersion: 2,
  package: runtimePackage.name,
  version: runtimePackage.version,
  modules: [
    {
      specifier: '@example/shop/api',
      source: 'dist/bindings.js',
      bindings: requirements.get('@example/shop/api').bindings,
    },
  ],
};
```

The project's public exports select which generated scopes it packages. Include the
complete import closure and retain dependencies on existing providers; a public SDK must
not depend on an unpublished internal package. Public facade directories also need their
public subpaths and generated private-helper rules in delivery metadata.

An application can generate public SDK and internal scopes into different directories,
then inject them through separate plugins. Internal npm packages use `private: true` and
can be consumed through local dependencies without publication. `private` prevents
accidental package publication; per-View availability comes from `bindingModules` and
`jsModules` on the selected plugins. See the
[configured host walkthrough](../../../examples/configured_bindings/README.md) for
ordinary package manifests, build scripts, archive consumers and real View checks.

## Optional FFI and native libraries

The normal esbuild and Vite plugins resolve `@flax/ffi`, `node:ffi`, `buffer`, `buffer/`
and `node:buffer`, including static CommonJS imports. Buffer-only bundles do not install
native FFI. Unused imports and installed-but-unused packages contribute no native
library inputs. These aliases do not add other Node runtime APIs.

A retained npm package can declare `"flax": { "native": "native.json" }`. The versioned
descriptor selects C/C++ sources, static archives, prebuilt dylibs, Apple containers or
explicit CMake projects. Declared dependency IDs determine build order and loader paths.
Source paths must remain inside that package; binary slices select macOS arm64, iOS
arm64 device or simulator explicitly. See the
[FFI package guide](../../flax_ffi/js/README.md#package-native-inputs) for metadata.

The plugins automatically find the Flutter host in the JS project directory or its
parent. Override it with `nativeAssets: { hostDirectory }`, or disable this build step
with `nativeAssets: false`. The selected inputs are staged and hashed under the host's
private `.flax/ffi_assets` directory. Its generated Pub dependency is added internally;
the developer writes no Dart package or installation code. Removing imports withdraws
only this adapter's previously owned native outputs.

On a fresh checkout, install JS dependencies and run the JS build **before** Flutter
pub/build so the generated path dependency exists. Keep the generated dependency in the
host pubspec, ignore `.flax/ffi_assets`, and regenerate it during CI setup. Native input
changes require a Flutter rebuild. JavaScript hot reload cannot embed binaries.

`@flax/build/native-assets` exposes the same preparation functions to custom build
drivers. It selects XCFramework slices and rewrites declared dylib dependencies, but
does not parse C headers or infer framework resource/Objective-C/Swift integration.
Runtime lookup uses `DynamicLibrary.codeAsset(id)` from `@flax/ffi`.

Apple universal images are reduced to the actual build architecture before inspecting
their imports. The expected macOS, iOS device or iOS Simulator platform must appear
among the image's declarations; both modern and legacy commands count. Zippered images
can declare multiple platforms in any order. Matching arm64 CPU architecture alone is
insufficient. Declared native dependencies are rewritten to the packaged code-asset
frameworks. Swift `@rpath/libswift*.dylib` aliases are rewritten to system paths only
when the selected SDK's stub declares that exact system install name; other undeclared
or ambiguous imports fail. This does not package Swift code or arbitrary framework
resources on behalf of a library.

## Host module preparation

For generated application bindings, the default entry needs no handwritten module
configuration. Add `flax-modules` to the host js/package.json build script, after Dart
code generation. It finds the nearest owning pubspec.yaml and reads the generated
bindings/js_modules.json. The plan supplies all local scope TS sources, public subpaths
and required provider packages. The tool compiles these sources directly into the
existing factory format, resolves installed locked providers and prepares the usual
assets/flax_modules/ inventory. The host declares this Flutter asset directory once.
Optional host/UI runtime packages declared in js/package.json are discovered through
their existing delivery metadata. Preparing an entry does not activate it in a View.

Both CLI and build_runner produce the same plan. Source paths are confined to their
owning Dart package. Local binding versions come from the Dart package; hashes describe
the compiled factories. Existing providers keep their own owners and lock checks. The
plan can also be extended by js/tsconfig.json for its generated compilerOptions.paths.
No scope list or per-scope compiler aliases need to be repeated in the JS project.

```sh
# From the Flutter package, after generating Dart bindings:
pnpm --dir js exec flax-modules
pnpm --dir js exec flax-modules --check
```

Node runs on the development/CI machine only. The produced Flutter assets execute in
Flax's engine without Node, npm or a TypeScript compiler on the runtime device. This is
an ordinary project build step, not a subprocess launched by a Dart Builder.

Existing explicit format-1 module configurations remain supported:

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

Pnpm preparation accepts locked local `file:` archives using the package version in
their lock record, local `file:` directories by checking the declared source package's
name/version, and root projects using the `.` importer. A local directory whose source
name or version changed after installation is rejected.

Independent business builds use marked declaration packages without a host inventory:

```javascript
import { flaxEsbuildPlugin } from '@flax/build/esbuild';
const plugins = [flaxEsbuildPlugin()];
```

Existing projects may continue passing an explicit prepared manifest:

```javascript
import { readModuleManifest } from '@flax/build';
import { flaxEsbuildPlugin } from '@flax/build/esbuild';

const manifest = await readModuleManifest('../assets/flax_modules/modules.json');
const plugins = [flaxEsbuildPlugin(manifest)];
```

The plugin compiles TS and intercepts direct imports, transitive imports and re-exports.
Host-provided implementation packages are not needed in the business project; their
declaration packages still participate in ordinary TypeScript value imports. The no-arg
mode uses the explicit hostBindings contract, never guesses from declaration contents.
Missing prepared Flax imports fail during bundling even when their source package is
installed. Register the corresponding Dart plugin and prepare its source package.
Already-inlined third-party implementations need a composable entry or rebuilding.

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
dependencies; it no longer repeats unused inventory fields. Business bundles request a
public specifier without pinning its version or hash. Older bundles that pass these
arguments also use the host's implementation. A compatible host update can therefore
reuse unchanged business bundles and older declarations without equal npm versions.
Development transforms and the HMR protocol remain unchanged.

Runtime format `flax-cjs-1` registers factories before business execution. Factories run
once, lazily, within one runtime. Dependency cycles reuse published CommonJS exports;
failed initializers remain failed. Versions, owners, hashes and dependency edges still
match strictly within one prepared host inventory; the artifact digest detects stale
host assets, not API compatibility. It is not a code-signing boundary. Providers must
preserve the APIs used by old applications; removing or changing an API can still break
them. Declaration versions alone cannot prove semantic compatibility.

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

The maintained engine uses V8 JIT on macOS and Android arm64 and V8 jitless on iOS
arm64. Android USB development forwards the default port with
`adb reverse tcp:5173 tcp:5173`; the iOS simulator can reach the host loopback directly.
Keep staged module initialization free of business side effects: registry validation
does not undo arbitrary effects.

### Local application archives

`prepareApplication` also generates `flax.assets.json`, the portable resource/variant
index consumed by directory bundles. After compiling the returned entryPath, call:

```javascript
import { packApplication } from '@flax/build/application';

const archivePath = await packApplication({ directory: application.directory });
```

The default archive path is `application.directory + '.flax'`; outputFile may select
another path outside that directory. The archive includes a SHA-256/size file inventory
and only managed application files, not unrelated output files. Failed packaging retains
the previous archive. FlaxView.package installs it once per content digest and reads it
through the same native AssetBundle as directory mode. This is local packaging and
installation, not downloading or a complete update manager.

## Optional FFI header generation

Install `@flax/ffi-codegen` as a development dependency to generate bindings from
`native.json` recipes automatically before esbuild/Vite compilation. Projects without
recipes do not load the generator or fetch its frontend. Both adapters accept optional
`ffiCodegen: {target, deploymentTarget, castxml, cacheDirectory}` or `false`.

The normal `FLAX_TARGET` / `FLAX_CHECK_TARGET` selection supplies the compiler context;
the native hook checks the eventual Flutter target before linking. Cross-builds must
select their target before JS bundling. See the
[codegen package guide](../../flax_ffi_codegen/js/README.md) and
[runnable example](../../flax_ffi_codegen/example/README.md).
