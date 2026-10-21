# Configured host JavaScript

`pnpm run build` runs the regular TypeScript builds for two independent package groups:

- `sdk/runtime`: private local `@example/shop-runtime`, prepared into host assets.
- `sdk/types`: publishable `@example/shop` declarations for `/api` and `/delivery`.
- `internal/runtime` and `internal/types`: private `@flax/app-runtime` / `@flax/app`.
  `/admin` is local to this host's own JS projects.

Each package owns its exports, files, dependencies and version. Runtime build scripts
read generated requirements with `bindingModuleRequirements` and write their own
`flax_modules.json`. They do not rewrite npm manifests or publish packages.

The host's root JavaScript project is a private pnpm workspace and declares provider
dependencies used by binding generation. Its public API reuses Money from
`@example/prices/api`; internal bindings reuse the same provider without duplication.
The public SDK has no dependency on the private packages.

Build both groups, but pack only `sdk/types`. Miniapps install the declarations; the
host prepares the local runtime. Their npm versions need not match when the host
preserves the used APIs. Old application imports also tolerate host version/hash
changes; strict factory checks remain within the host inventory.

Use FlaxPublicSdkPlugin for public consumers and FlaxInternalPlugin for internal calls.
A View may select both. These plugins supply Dart modules and select prepared JS
entries; installing an npm package alone does not activate either plugin.
