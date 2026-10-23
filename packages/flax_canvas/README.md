# Flax Canvas

Optional Canvas 2D drawing for Flax sessions. JavaScript uses `OffscreenCanvas` and a 2D
context; Flutter displays the result through `CanvasView`. Drawing is encoded as a
private command buffer, decoded in the Flutter engine and recorded into DisplayLists
wrapped by `dart:ui` pictures. Paint never calls JS.

This experimental branch requires a Flutter engine with the Canvas extension.
Installation checks the dispatch entry point without an exact feature-version gate;
engines without the extension cannot run this decoder.

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

Text uses the Session's [module fonts](../../docs/architecture/fonts.md) and Flutter's
public registered fonts. `convertToBlob({type, quality})` supports PNG, JPEG and WebP;
other MIME types fall back to PNG. JPEG/WebP encoding runs on a Dart worker isolate.

See the [Canvas contract](../../docs/architecture/canvas.md). Run `host:generate` after
JS host changes and `bindings:generate` after binding selection changes. Command commits
share the JS buffer during synchronous C++ decoding without copying its payload. Image
uploads and pixel snapshots retain their existing ownership and copy behavior. The
[API audit](../../docs/architecture/canvas-api-coverage.md) separates the 72 standard
member names and overloads from remaining conformance limits.
