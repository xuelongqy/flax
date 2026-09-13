# Author template skeleton

Minimal stub for a third-party Flax binding package. Copy this directory outside the
Flax checkout, rename placeholders, then follow
[docs/author-template.md](../../docs/author-template.md).

Replace before use:

- Dart package name `your_package`
- `bindingNamespace` `vendor.example` (must not use `flax.*`)
- npm package `@your-scope/your-package`
- License / registry / support policy (open product decisions)

Do not hand-edit files under `lib/src/generated/` or `js/src/generated/` after the first
successful `generate`.
