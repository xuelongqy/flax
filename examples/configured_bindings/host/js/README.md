# Configured host JavaScript

The normal build uses two ordinary npm projects:

- `sdk`: publishable `@example/shop`, generated source under src/generated and public
  declarations under types. Its files allowlist contains only the two public .d.ts
  files.
- `internal`: private `@flax/app`, with separate generated source and declarations for
  /admin and /host.

`pnpm run build` emits SDK declarations first, then internal declarations, then runs
flax-modules against the generated bindings/js_modules.json. Scope entries, source paths
and TypeScript aliases come from code generation. Each npm project owns exports, files,
dependencies and version; adding a scope does not add a preparation mapping.

The public name and scopes are also declared once through typesSdk in the host's
flax_package.yaml. The normal flax-modules build fills missing npm setup and maintains
generated declaration entries. Existing policy and the composite tsconfig remain intact.
New SDK projects extend tsconfig.flax.json instead of maintaining a source list;
existing custom projects can choose to extend it. SDK selection/path changes require
generation and the normal JS build before packing, with either CLI or build_runner
generation.

Internal declarations reference the public SDK's composite TypeScript project. SDK
builds use tsc -b --force so deleting declarations rebuilds them even when a build-info
file remains. Neither project publishes its binding source or runtime JS.

Both declaration projects mark package.json with `"flax": {"hostBindings": true}`.
Independent miniapps use flaxEsbuildPlugin() and the installed npm exports; they need no
host module inventory or source checkout. Existing provider types remain dependencies,
and the host installs the provider's runtime and native plugin. Ordinary SDK JS wrapper
exports, if added, are bundled normally.

Use appPlugin/adminPlugin for internal calls and shopPlugin/deliveryPlugin for public
calls. Each View selects the plugins it needs. Declaring a dependency or preparing
assets does not inject a plugin into a View. SDK and host versions need not match when
the used public entries and APIs remain compatible.

The private runtime npm packages used by the explicit legacy delivery test live at
host/modules/legacy_sdk and legacy_internal. They are compatibility fixtures and do not
participate in the normal host build. The prices provider retains its existing runtime
delivery contract. Packing SDK types is ordinary pnpm pack; nothing publishes packages.
