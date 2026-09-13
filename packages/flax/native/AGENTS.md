# Native Layer Guidance

Follow the root [AGENTS.md](../../../AGENTS.md) and
[runtime contract](../../../docs/architecture/runtime.md).

- Keep canonical C ABI declarations in `include/flax` and shared C++/JSI operations in
  `src`. Engine adapters own creation and build configuration only. Regenerate Dart
  declarations with `dart run melos run ffi:generate` after header changes.
- Preserve version/size checks on the experimental function table. Update callers,
  generated declarations, and tests together for contract changes.
- Runtime entry originates synchronously in its owning Dart isolate. No background
  native thread may call Dart. Preserve non-leaf FFI, same-stack reentry, per-call
  errors, and explicit microtask checkpoints; JSI supplies no Dart scheduler.
- Separate borrowed callback references from owned handles. Reject active destruction
  and expire references before they can reach freed memory. Destroy the engine before
  closing Dart callbacks. A failed global assignment can still retain a host function.
- Pin upstream revision, archive checksum, compatible JSI, licenses, and patches in
  `third_party`. Keep upstream source and generated binaries ignored.
- `native:configure` must stay a toolchain-only check with no engine fetch. Use
  `check:runtime` for real macOS arm64 behavior and standalone package loading. Never
  claim support by skipping tests on an unsupported platform.
