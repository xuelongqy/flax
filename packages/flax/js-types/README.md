# @flax/core

Public declarations for Flax. Runtime modules are installed by Dart plugins.

`@flax/core/host` declares the default Session environment, including Fetch, data
containers and Web Streams. Importing declarations does not install a runtime.

Worker scripts import `@flax/core/host/worker`. This profile includes ImageData,
ImageBitmap, createImageBitmap and image clone/transfer, without Image/HTMLImageElement,
window or document globals. Core-only Workers have no OffscreenCanvas constructor or
animation-frame functions; the selected WebGPU declarations add those capabilities.

`ImageData.data` is a `Uint8ClampedArray<ArrayBuffer>`, so its buffer can be passed
directly in transfer lists. SharedArrayBuffer-backed pixels are unsupported.
`OffscreenCanvas.convertToBlob()` returns the complete Core `Blob` type, including its
stream, slice and byte-reading methods.
