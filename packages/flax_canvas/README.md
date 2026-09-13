# Flax Canvas

Optional Canvas 2D drawing for Flax sessions. JavaScript uses `OffscreenCanvas` and a 2D
context; Flutter displays the result through `CanvasView`. Drawing is encoded as a
private command buffer and recorded into `dart:ui` pictures. Paint never calls JS.

Install Dart `flax_canvas` and npm `@flax/canvas` at the same exact version. The npm
package contains executable Canvas application code and generated `CanvasView`; the Dart
plugin installs the host bootstrap and binding module.

```yaml
dependencies:
  flax_canvas: <version>
```

```sh
pnpm add @flax/canvas@<version>
```

```dart
Flax.registerPlugins([const FlaxCanvasPlugin()]);
```

```typescript
import { CanvasView } from '@flax/canvas';
import type {} from '@flax/canvas/globals';

const canvas = new OffscreenCanvas(640, 360);
const context = canvas.getContext('2d')!;
context.fillRect(0, 0, 40, 40);
runApp(CanvasView(canvas, { width: 640, height: 360 }));
```

JS needs no runtime import to install constructors. Types are available through
`@flax/canvas` and `@flax/canvas/globals`. The plugin contributes CanvasView bindings;
omit the plugin and those globals and surfaces do not exist.

See the [Canvas contract](../../docs/architecture/canvas.md). Run `host:generate` after
JS host changes and `bindings:generate` after binding selection changes. Command
transport copies bytes twice on ABI 2 (native temporary buffer, then Dart `Uint8List`).
