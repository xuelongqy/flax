# @flax/canvas-runtime

`CanvasView` and runtime source for the optional Dart `flax_canvas` plugin. Public
declarations live in the declaration-only `@flax/canvas` package. Import
`@flax/canvas/globals` as a type-only import to declare installed constructors. The
package does not install those constructors.

Install both npm packages at the same version as Dart `flax_canvas`. `CanvasView` and
the application-side Canvas implementation execute from prepared plugin modules; the
generated host bootstrap is also embedded in Dart. Business code keeps its public
`@flax/canvas` imports; private implementation imports are rejected.

Dart plugin registration installs the prebuilt script once per session. Application code
uses `OffscreenCanvas` and related globals after `FlaxCanvasPlugin` is installed.
`CanvasView` wraps the generated binding so application code can pass an
`OffscreenCanvas` instead of the Dart surface object.

TypeScript projects must not enable `lib.dom`. See the
[Canvas contract](../../../docs/architecture/canvas.md).

Command commits share the JS buffer during synchronous engine C++ decoding. The decoder
does not retain the view, so the encoder can reuse or grow its buffer after each commit.
Image uploads, pixel snapshots and GPU work are separate costs. This experimental branch
requires the Canvas engine extension, without an exact feature-version gate. Canvas text
shares the Session's module font collection and public Flutter fonts. Blob export
supports PNG, JPEG and WebP with quality selection.
