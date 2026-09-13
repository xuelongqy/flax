# @flax/canvas

Type declarations, `CanvasView`, and source ownership for the optional Dart
`flax_canvas` plugin. Import `@flax/canvas/globals` as a type-only import to declare
installed constructors. The package does not install those constructors.

Install it at the same version as Dart `flax_canvas`. This is a runtime npm package:
`CanvasView` and the application-side Canvas implementation execute from the archive,
while host transport remains embedded in Dart.

Dart plugin registration installs the prebuilt script once per session. Application code
uses `OffscreenCanvas` and related globals after `FlaxCanvasPlugin` is installed.
`CanvasView` wraps the generated binding so application code can pass an
`OffscreenCanvas` instead of the Dart surface object.

TypeScript projects must not enable `lib.dom`. See the
[Canvas contract](../../../docs/architecture/canvas.md).

Command transport copies bytes twice on ABI 2: a native temporary buffer, then a Dart
`Uint8List`. Do not treat that path as zero-copy.
