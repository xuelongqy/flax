# @flax/webgpu-runtime

Private host implementation selected by `FlaxWebGpuPlugin`. Application declarations are
supplied by `@flax/webgpu`; imports do not install GPU capabilities.

The selected Worker profile reuses Core still images for external-image upload,
OffscreenCanvas snapshots and PNG/JPEG/WebP export. Explicit GPU readback can stall the
Worker; ordinary presentation uses native textures and fences. Worker HTML image
elements and Canvas 2D are outside this profile.
