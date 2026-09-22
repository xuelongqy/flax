# @flax/tools

Prepares locked npm module implementations as local Flutter assets and connects business
imports to the same host inventory. This package runs in Node during builds; the emitted
registry and factories have no Node or browser dependency.

```json
{
  "formatVersion": 1,
  "modules": ["@flax/flutter/widgets"],
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
packages still participate in ordinary TypeScript value imports. Optional peer
dependencies let libraries work with either host implementations or bundled code.
Already-inlined third-party implementations need a composable entry or rebuilding.

Preparation accepts public entries from a package's exported `flax_modules.json`.
Delivery format 1 contains `package`, exact `version`, and `modules`, where each entry
declares `specifier`, npm-exported JavaScript `source`, optional unique `owner`, and
required Dart `bindings` (`moduleId`, `uiProtocol`, `types`, `functions`). It is
distinct from the Binding Manifest. Only selected entries and required module
dependencies are prepared. Conflicting versions, owners and undeclared Flutter assets
are rejected.

Runtime format `flax-cjs-1` registers factories before business execution. Factories run
once, lazily, within one runtime. Dependency cycles reuse published CommonJS exports;
failed initializers remain failed. The artifact digest detects stale contract pairings;
it is not a code-signing or untrusted-code security boundary.
