# Public Native Headers

[runtime.h](runtime.h) is the canonical experimental C ABI. It declares opaque runtime
handles, runtime-owned value IDs, value/error buffers, callbacks, and a versioned
function table. JSI and C++ types stay behind this boundary.

Callers zero-initialize error records, release returned buffers with the supplied
allocator functions, and obey owned/borrowed handle rules. Runtime pointers must not be
used after destruction. The Dart wrapper provides disposal and reference guards.

Run `dart run melos run ffi:generate` after changes and `ffi:check` to verify the
committed declarations. Incompatible changes require an ABI version update. See
[native guidance](../../AGENTS.md).
