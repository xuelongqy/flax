# Runtime Compatibility Tests

Shared executable runtime contracts live in [runtime](../runtime/README.md), and the
[embedded Flutter host](../../examples/embedded/README.md) runs the same UI scenarios
with either engine. This directory does not contain a second test framework.

Run `check:runtime` / `check:runtime:v8` and `check:ui` / `check:ui:v8` through Melos.
`check:engines` verifies both engines together. See the
[runtime verification scope](../../docs/architecture/runtime.md#verification) and
[current binding acceptance](../../docs/architecture/external-binding-compatibility.md)
for platform evidence. Compilation or CMake configuration alone is not engine
compatibility validation.
