# Author template skeleton

Minimal stub for a third-party Flax binding package. Copy this directory outside the
Flax checkout, rename placeholders, then follow
[docs/author-template.md](../../docs/author-template.md).

Replace before use:

- Dart package name `your_package`
- `bindingNamespace` `vendor.example` (must not use `flax.*`)
- Public npm package `@your-scope/your-package` and source package with `-runtime`
- License / registry / support policy (open product decisions)

Do not hand-edit files under `lib/src/generated/` or `js/src/generated/` after the first
successful `generate`.

The config's `name: example` generates the exported module `exampleBindings`; its
`publicLibraries` mapping exposes the selected Dart public library as the matching npm
subpath. Keep `registration.bindings`, public-library routes and application
registration aligned when renaming the module or public entry.

After generation, `js/` builds runtime JavaScript and `js-types/` receives declarations
only. Keep both versions aligned with Dart. Update `js/flax_modules.json` when changing
the selected surface or module tuple. Business bundles use prepared plugin modules;
register a Dart plugin that requests the public API module before running the bundle.
