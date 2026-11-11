# @flax/webgpu

Declaration-only SDK for the macOS Dawn profile. The host selects and installs the
runtime through `FlaxWebGpuPlugin`. See the Dart package's coverage table before using
APIs outside the acceptance example.

Worker applications import `@flax/core/host/worker` and `@flax/webgpu/globals`. They can
use ImageData/ImageBitmap uploads, OffscreenCanvas capture/export and image
clone/transfer without HTML globals or Canvas 2D declarations. These type imports do not
select a renderer or grant native authority.
