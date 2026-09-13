# 0016: Canvas command buffer and generated input snapshots

Status: accepted

Date: 2026-09-10

## Context

Flax needs a Canvas 2D-like API without DOM or CSS. Per-call JS/Dart drawing would
create thousands of bridge objects per frame. Flutter paint cannot re-enter JS.

## Decision

Encode drawing in a private binary command buffer and commit once per dirty surface per
JS job or rAF. Dart decodes into `PictureRecorder` before paint. Paint only draws
already-recorded pictures inside an isolating `saveLayer`.

Keep `requestAnimationFrame` in the base host. Expose `CanvasView` through generated
bindings with `jsName: CanvasView`. Pointer and key events use `callbackSnapshots`
instead of DOM events.

Do not change native ABI 2 or UI protocol 17 for this plugin. Document ABI 2's two byte
copies rather than claiming zero-copy.

## Alternatives

Per-op host calls are simpler and too chatty. A native C++ encoder could avoid the two
ABI copies; it waits for a measured bottleneck. WebF/DOM canvas would import a page
model Flax does not have.

## Consequences

`flax_canvas` and `@flax/canvas` are optional. Application registries must not duplicate
`canvasBindings`. Failed batches keep the last good picture. See
[Canvas](../architecture/canvas.md).
