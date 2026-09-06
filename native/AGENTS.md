# Native Layer Guidance

Follow the root [AGENTS.md](../AGENTS.md) and
[runtime design](../docs/architecture/runtime.md).

- This tree currently configures a C/C++ toolchain only. No engine is linked.
- Keep C ABI declarations in the public header boundary and C++/JSI ownership behind it.
  Generate Dart FFI declarations from the eventual C headers.
- Make thread, isolate, callback reentry, and shutdown assumptions explicit when
  implementing runtime calls. JSI does not supply a Dart scheduler.
- Track owned and borrowed resources separately. GC finalization must not be the sole
  mechanism for disposing Flutter-owned resources.
- Coordinate ABI changes with Dart callers and JS-visible semantics. Do not introduce a
  stable ABI or serialization promise without an implemented design.
- Add upstream inputs only with fixed revisions, compatible JSI versions, checksums,
  patch ownership, and license information.
- Verify distribution from a standalone package, not only monorepo-relative paths.
- Use `dart run melos run native:configure` for this scaffold. Add real native tests
  with native behavior; configuration success is not a runtime test.
