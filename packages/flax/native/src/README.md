# Shared Native Implementation

`runtime.cpp` implements the experimental function table using JSI: synchronous entry,
value IDs, object identity, conversion, host callbacks, exceptions, microtasks, and
teardown. It contains no Hermes-specific initialization. `engine.h` declares the narrow
internal factory supplied by an engine adapter. `value_id.h` allocates opaque engine
namespaced IDs without reuse or wraparound; each engine target supplies its fixed ID.

Keep all engines on this shared implementation. Public C declarations belong in
[include/flax](../include/flax/README.md); tests use the actual exported table through
[native tests](../tests/README.md). See
[ownership](../../../../docs/architecture/runtime.md).
