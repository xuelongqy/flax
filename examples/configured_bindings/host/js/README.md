# Configured host JavaScript

`pnpm run build` emits declarations for two package groups, then compiles the binding
sources directly through the generated plan:

- `sdk/runtime`: public binding TS sources and the private legacy runtime package.
- `sdk/types`: publishable `@example/shop` declarations for `/api` and `/delivery`.
- `internal/runtime` and `internal/types`: private `@flax/app-runtime` / `@flax/app`.
  `/admin` is local to this host's own JS projects.

Each package owns its exports, files, dependencies and version. The normal host build
uses flax-modules with the generated bindings/js_modules.json. All local scope TS
entries and provider requirements come from code generation; no per-scope preparation
list is maintained here. The package builds also retain explicit runtime delivery
metadata for the legacy configuration/upgrade example. They do not rewrite npm manifests
or publish packages.

The host's root JavaScript project is a private pnpm workspace and declares provider
dependencies used by binding generation. Its public API reuses Money from
`@example/prices/api`; internal bindings reuse the same provider without duplication.
The public SDK has no dependency on the private packages.

The internal declaration project references the public SDK's composite TypeScript
project. This lets internal scopes use public SDK types through the generated aliases
without compiling public sources into the internal output directory. The normal build
emits the public declarations first. These references connect package groups; adding a
scope within either group does not add another reference or alias. The composite project
uses `tsc -b --force` so cleaning declarations also rebuilds them when an incremental
build receipt remains.

Build both groups, but pack only `sdk/types`. Miniapps install the declarations; the
host prepares the local runtime. Their npm versions need not match when the host
preserves the used APIs. Old application imports also tolerate host version/hash
changes; strict factory checks remain within the host inventory.

Use generated shopPlugin/deliveryPlugin for public consumers and adminPlugin/appPlugin
for internal calls. A View may select both sets. These plugins supply Dart modules and
select prepared JS entries; installing an npm package alone does not activate either
plugin.
