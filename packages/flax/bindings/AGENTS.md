# Binding Generation Guidance

Follow the root [AGENTS.md](../../../AGENTS.md) and
[generation design](../../../docs/architecture/bindings.md).

- Keep API selection, generated Dart/TypeScript output, and the declaration manifest in
  the package that owns the binding.
- Resolve public exports and actual declarations. Re-exported types share an identity;
  unrelated declarations with the same name do not.
- Fix the selection, model, or emitter before regenerating outputs. Never hand-edit
  generated files.
- A dependent package reads the owning package's manifest through package config. It
  must not read another package's YAML, tests, or private sources.
- Keep Dart-API binding generation separate from C-header FFI generation.
- Validate both directions of changed values, callbacks, generics, and lifetimes.
