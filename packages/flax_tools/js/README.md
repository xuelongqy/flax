# @flax/tools

Prepares locked npm module implementations as local Flutter assets and connects business
imports to the same host inventory. This package runs in Node during builds; the emitted
registry and factories have no Node or browser dependency.

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
import { readModuleManifest, flaxHostModulesPlugin } from '@flax/tools';

const manifest = await readModuleManifest('../assets/flax_modules/modules.json');
const plugins = [flaxHostModulesPlugin(manifest)];
```

The plugin intercepts direct imports, transitive imports and re-exports. Host-provided
implementation packages are not needed in the business project; their declaration
packages still participate in ordinary TypeScript value imports. Missing prepared Flax
imports fail during bundling even when their source package is installed. Register the
corresponding Dart plugin and prepare its source package. Already-inlined third-party
implementations need a composable entry or rebuilding.

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

Runtime format `flax-cjs-1` registers factories before business execution. Factories run
once, lazily, within one runtime. Dependency cycles reuse published CommonJS exports;
failed initializers remain failed. The artifact digest detects stale contract pairings;
it is not a code-signing or untrusted-code security boundary.

For local Flutter development, `flax-dev` keeps the normal synchronous asset startup and
uses Vite only for watching, module graph updates, transforms, and its HMR WebSocket:

```sh
flax-dev --entry js/src/main.ts --out assets/app.js --port 5173
```

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
