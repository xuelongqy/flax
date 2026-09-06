# Binding Generation Guidance

Follow the root [AGENTS.md](../AGENTS.md) and
[generation design](../docs/architecture/bindings.md).

- This tree contains design placeholders, not an implemented generator.
- Own API selection and exceptional adaptation rules here; own generator implementation
  in the Dart codegen package.
- Resolve public exports and actual declarations. Re-exported types share an identity;
  unrelated declarations with the same name do not.
- Keep generated Dart and JS source in its consuming package with a clear generated-file
  marker and an actual regeneration command.
- Fix the rule, adaptation, or generator before regenerating outputs. Avoid unrepeatable
  manual changes to generated files.
- Keep Dart-API-to-JS generation separate from C-header-to-Dart FFI generation.
- Validate both sides of changed constructors, values, callbacks, and lifetimes.
- Add regeneration and behavior checks when their implementation exists. Do not
  introduce no-op commands that report successful generation.
