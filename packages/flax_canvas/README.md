# Flax Canvas

Optional Canvas 2D drawing for Flax sessions. JavaScript uses `OffscreenCanvas` and a 2D
context; Flutter displays the result through `CanvasView`. Drawing is encoded as a
private command buffer, decoded in the Flutter engine and recorded into DisplayLists
wrapped by `dart:ui` pictures. Paint never calls JS.

The plugin requires the maintained Flutter engine with the Canvas extension.
Installation checks the dispatch entry point without an exact feature-version gate;
engines without the extension cannot run this decoder.

The declaration-only npm `@flax/canvas` package supplies application types. The Dart
plugin selects its host implementation from `@flax/canvas-runtime` and installs the 2D
binding module. Core owns the common canvas constructor and placement widget; the
existing `CanvasView` import below remains a re-export.

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
`@flax/canvas` and `@flax/canvas/globals`. Omit the plugin and `getContext('2d')`
returns null; Core canvases and `CanvasView` still exist. `CanvasView` is also available
from `@flax/core/bindings`. Other context providers can install independently.

Text uses the Session's [module fonts](../../docs/architecture/fonts.md) and Flutter's
public registered fonts. `convertToBlob({type, quality})` supports PNG, JPEG and WebP;
other MIME types fall back to PNG. JPEG/WebP encoding runs on a Dart worker isolate.

See the [Canvas contract](../../docs/architecture/canvas.md). Run `host:generate` after
JS host changes and `bindings:generate` after binding selection changes. Command commits
share the JS buffer during synchronous C++ decoding without copying its payload. Image
uploads and pixel snapshots retain their existing ownership and copy behavior. The
[API audit](../../docs/architecture/canvas-api-coverage.md) separates the 72 standard
member names and overloads from remaining conformance limits.

Core's
[canvas compatibility API](../../docs/architecture/canvas.md#canvas-compatibility) also
supplies HTML-style canvas factories, committed geometry, pointer/focus/key input,
ResizeObserver and shared image resources. It is limited to canvases and images; Flutter
layout remains responsible for placement. Existing Canvas 2D imports and codecs remain
supported.
