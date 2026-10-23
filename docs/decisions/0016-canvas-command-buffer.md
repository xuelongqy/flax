# 0016: Canvas command buffer and generated input snapshots

Status: accepted

Date: 2026-09-10

Amended: 2026-10-22 after the native batch experiment.

## Context

Flax needs a Canvas 2D-like API without DOM or CSS. Per-call JS/Dart drawing would
create thousands of bridge objects per frame. Flutter paint cannot re-enter JS.

## Decision

Encode drawing in a private binary command buffer and commit once per dirty surface per
JS job or rAF. A synchronous host commit passes a shared Uint8Array view to the
maintained engine. C++ decodes protocol v1 and records a DisplayList; Dart wraps it in a
Picture and owns widget/history composition. Paint only draws already-recorded pictures
inside an isolating `saveLayer`.

Keep `requestAnimationFrame` in the base host. Expose `CanvasView` through generated
bindings with `jsName: CanvasView`. Pointer and key events use ordinary Flutter
references through generated callback bindings.

The private Canvas command format and engine extension are independent of native ABI 2
and the UI protocol. The plugin requires the dispatch entry point, not an exact feature
version. Compatible additions preserve existing operations and payload meanings; new
operations use new IDs. The legacy version query remains available to prior callers.
Command bytes are shared only during decoding and are not retained in recorded pictures;
image uploads and pixel snapshots remain separate costs. The
[Canvas contract](../architecture/canvas.md) records current behavior and known gaps;
this decision alone does not establish conformance.

## Alternatives

Per-op JSI calls remain slower than batching for the measured fillRect workload. The
complete C++ backend is measured against the retained test-only Dart decoder. See the
[experiment](../tasks/canvas-native-migration.md) for results and limits. WebF/DOM
canvas would import a page model Flax does not have.

## Consequences

`flax_canvas` and `@flax/canvas` are optional. Application registries must not duplicate
`canvasBindings`. The plugin requires an engine with the Canvas extension; missing
extensions or unsupported operations report errors. Failed batches keep the last good
picture. See [Canvas](../architecture/canvas.md).
