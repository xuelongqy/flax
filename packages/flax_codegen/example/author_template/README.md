# Author template skeleton

Configured stub for a third-party Flax binding package. For a single annotation scope,
start with the
[config-free app example](../../../../examples/configured_bindings/default_app/README.md).
Copy this directory outside the Flax checkout, rename placeholders, then follow
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
inject the generated examplePlugin before running the bundle. Its public-library routes
select the prepared JS modules; custom lifecycle resources still need an ordinary
FlaxPlugin.

Keep `build.yaml` when distributing the Dart package. Its public metadata assets let
consumers reuse this provider through build_runner without regenerating its bindings.
