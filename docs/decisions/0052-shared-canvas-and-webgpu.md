# ADR 0052: Shared canvas and optional WebGPU

Status: experimental integration

Date: 2026-10-28

## Context

Canvas 2D previously owned the only OffscreenCanvas constructor and placement widget.
Adding a separate WebGPU canvas would give the same public name two owners, duplicate
mode/lifetime rules and require WebGPU-only applications to install the 2D renderer.

## Decision

Core owns OffscreenCanvas, context identity and mode selection, the minimal navigator
holder and CanvasView. Optional Canvas 2D and WebGPU packages register providers on that
host. Their renderers implement one small paint/snapshot contract; Core does not own the
2D picture history or GPU resources. Existing Canvas imports remain re-exports.

Core also owns the canvas-scoped document, HTMLCanvasElement, geometry/input,
ResizeObserver and shared ImageData/ImageBitmap/image resources. Providers consume these
resources and extend getContext. This does not turn Flutter Widgets into DOM nodes or
introduce HTML/CSS layout. An independent optional image codec extension lets GPU-only
sessions decode and export images without a Canvas 2D host.

The first standard JS GPU profile reuses the maintained direct JSI/libffi mechanism
privately to call pinned Dawn, with generated C layouts and standard JS resource
wrappers. Application code uses navigator.gpu and GPUCanvasContext without raw FFI. The
optional runtime is host-selected; the public SDK remains declaration-only.

## Alternatives

Keeping canvas orchestration in Canvas 2D would couple independent renderers. A second
constructor would break shared identity. A new C++ binding framework would duplicate the
working direct-call, resource and checkpoint machinery before measurements show that it
is necessary. Dawn's Node frontend needs N-API and cannot run in bare V8.

## Consequences

Core-only canvases exist without a renderer. Known uninstalled contexts return null; the
first successful context locks the mode. Existing 2D image and command behavior stays in
its package. GPU rendering uses shared textures/fences and no per-draw Dart callbacks.
Mapped GPU memory requires the maintained V8 lifetime guard. An engine without the
combined macOS mapping/texture/fence profile reports a missing capability before Dawn
context creation.

The macOS profile uses maintained engine sources and the existing dynamic native-asset
planner. An explicit producer stages a pinned self-contained dylib and complete notices
inside the runtime npm archive; host factory and application contributions share one
plan without erasing each other. Consumers need no SDK or install scripts. Full WebGPU
conformance remains separate work. See [canvas](../architecture/canvas.md),
[WebGPU](../architecture/webgpu.md) and its
[validation receipt](../../packages/flax_webgpu/validation/macos-arm64.json).
