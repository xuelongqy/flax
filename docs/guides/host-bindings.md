# Integrate configured host bindings

A host-provided SDK has two delivery paths: Dart and JS binding implementations stay
inside the Flutter host, while npm consumers receive the public TypeScript declarations.
Each FlaxView chooses its native and prepared JS modules through explicit plugins.

For one app scope, start with the
[config-free example](../../examples/configured_bindings/default_app/README.md): add
flax_annotations, keep a stable bindingNamespace in flax_package.yaml, mark APIs with
@FlaxExport(), then run dart run flax_codegen generate. No scope YAML or output paths
are needed. The generated lib/flax_bindings/app.dart exports appPlugin for a FlaxView's
plugins list. build_runner uses the same defaults without options.outputs. The default
module specifier is @flax/app/app. The generated bindings/js_modules.json also describes
the complete JS build. The host's normal js build runs flax-modules, which compiles the
generated TS entries and prepares all scopes without a second module list. The default
example includes that permanent build script, TS alias configuration and a clickable
page test. Node is required on the development/CI machine only.

The remaining sections cover separate public/internal scopes, custom directories,
provider reuse and optional SDK packaging.

The [runnable shopping example](../../examples/configured_bindings/README.md) contains
all Pub/pnpm manifests, a macOS project, startup code and miniapp projects. It can be
built and launched in place; no verification script needs to assemble its projects. The
following five steps explain its actual files. All commands below use that example's
fixed directory layout.

## 1. Select public and internal APIs

The host owns a Cart, with one item at 1200 cents initially. currentCart() returns that
real Dart object; add(1) changes it and returns Money. delivery() returns
DeliveryEstimate. A broadcast quantities stream delivers changes to all subscribed
Views. resetCart() is intended only for the host's internal manager.

| Selection            | Owner                               | JS entry                 | Purpose                                   |
| -------------------- | ----------------------------------- | ------------------------ | ----------------------------------------- |
| Cart and currentCart | Host app                            | `@example/shop/api`      | Public SDK                                |
| DeliveryEstimate     | Unbound Dart library                | `@example/shop/delivery` | Generate a local binding for a dependency |
| hostAppName          | Host app                            | `@flax/app/host`         | Internal default app scope                |
| resetCart            | Host app                            | `@flax/app/admin`        | Internal calls                            |
| Money                | Existing configured_prices provider | `@example/prices/api`    | Reuse its original binding identity       |

The [host Pub manifest](../../examples/configured_bindings/host/pubspec.yaml) declares
flax, flax_annotations, configured_prices, configured_delivery, the Material UI packages
and the codegen/build_runner dev dependencies. Its
[JavaScript project](../../examples/configured_bindings/host/js/package.json) also
declares the provider's public types and local runtime. In a separate application, use
your actual Pub dependencies and npm versions/local selectors instead of this checkout's
workspace dependencies.

Mark the host's own public declarations with a scope. These are annotations from the
pure Dart flax_annotations package, declared as a normal host dependency. The existing
Cart implementation and its shared stream stay unchanged:

```dart
@FlaxExport(scope: 'shop')
class Cart {
  // Existing cart API and subscription implementation.

  @FlaxIgnore()
  String get debugLabel => 'cart:$quantity';
}

@FlaxExport(scope: 'shop')
Cart currentCart() => hostCart;

@FlaxExport(scope: 'admin')
Money resetCart() {
  adminCalls++;
  hostCart.quantity = 1;
  return hostCart.unitPrice;
}
```

This fragment illustrates the annotations on the existing declarations; the complete
implementation is [api.dart](../../examples/configured_bindings/host/lib/api.dart). The
scope matches a configured name; without any scope YAML, app exists by default. Without
library, annotations are enabled automatically and discovery scans this package's lib
recursively. There is no need to maintain an export barrel. sources optionally restricts
discovery to package-relative files or globs under lib; a match selects the owning
library, including its parts. Generated Flax files and dependency packages are excluded.
The provider retains its own configured selection, and DeliveryEstimate remains an
explicit YAML selection.

Create four sibling files under host/bindings. The public shop selection limits its
source boundary to api.dart:

```yaml
format: 2
name: shop
sources: [lib/api.dart]
jsPackage: '@example/shop/api'
dartOutput: lib/src/generated/sdk/bindings.g.dart
tsOutput: js/sdk/runtime/src/generated/bindings.ts
imports: [configured_prices]
```

The delivery selection binds a Dart dependency that has no provider:

```yaml
format: 2
name: delivery
library: package:configured_delivery/configured_delivery.dart
jsPackage: '@example/shop/delivery'
dartOutput: lib/src/generated/sdk/delivery.g.dart
tsOutput: js/sdk/runtime/src/generated/delivery.ts
classes: [DeliveryEstimate]
```

The internal selection has its own output directories:

```yaml
format: 2
name: admin
dartOutput: lib/src/generated/internal/admin.g.dart
tsOutput: js/internal/runtime/src/generated/admin.ts
imports: [configured_prices]
```

An omitted annotation scope uses app. The example also has an unexported
[lib/src/app_api.dart](../../examples/configured_bindings/host/lib/src/app_api.dart):

```dart
@FlaxExport()
String hostAppName() => 'Configured host';
```

Its configuration uses the default lib scan and the same internal output directories:

```yaml
format: 2
name: app
jsPackage: '@flax/app/host'
dartOutput: lib/src/generated/internal/app.g.dart
tsOutput: js/internal/runtime/src/generated/app.ts
```

This requires a scope named app; the generator never assigns an unscoped annotation to
shop or admin implicitly. To bind one file, use sources: [lib/cart.dart]. To bind
several features, use sources: [lib/cart.dart, lib/features/**.dart]. Distinct
same-named classes can live in different scopes because grouping precedes name merging.
Only annotated roots and explicit YAML selections enter each surface.

With annotations enabled, only matching FlaxExport declarations are added. Class and
enum annotations infer supported public members; FlaxIgnore excludes constructors,
fields/accessors and methods before type conversion. The debug getter above is absent
from both generated binding implementations and the public types. Unknown scopes,
multiple exports on one declaration, unsupported annotation targets, and conflicts with
an explicit YAML selection report the declaring Dart source location. Source-scanned
private declarations cannot be exported. Explicit getter and setter selections are
checked independently, so ignoring an unselected accessor does not block the other.
Inferred unsupported members retain visible skip reasons; an annotated root cannot
silently vanish.

Automatic annotation selections also use `bindings/flax_overrides.yaml` when present.
Scope-local `overrides` take precedence over shared fields for the same declaration;
neither can explicitly reintroduce a FlaxIgnore member.

Legacy configuration-only mode remains supported: retain
`library: package:configured_host/api.dart`, omit annotations and use `classes: [Cart]`
/ `functions: [currentCart]` in shop and `functions: [resetCart]` in admin. Matching
annotations and YAML selections are deduplicated. A YAML class mapping is the final
member allowlist rather than a union with inferred members; explicitly including a
FlaxIgnore declaration/member is an error in annotation-enabled mode. Use that mapping
when a public SDK must not grow automatically as new public members are added.
Parameters and enum values cannot be removed by these annotations; misuse is an error.
Legacy library configurations default annotations to false; explicit annotations: true
continues discovering through that entry's public exports. Do not mix sources with
library, additionalLibraries or publicLibraries. Full-library automatic selection and
annotation selection cannot be enabled in the same scope. Existing --library behavior
remains unchanged.

The omitted jsPackage uses `@flax/app/admin` in this host. The default public root is
`@flax/app`, with the binding name as a subpath, when package metadata supplies no JS
root. An explicit jsPackage wins. You can choose `@acme/app-sdk/api`; update package
exports, application imports, plugin selections and module configuration to match, then
regenerate. Dart wire identities do not come from the npm name.

The [host package metadata](../../examples/configured_bindings/host/flax_package.yaml)
declares namespace `example.shop` and registration symbols shopBindings,
deliveryBindings, adminBindings and appBindings. This records ownership; it does not
inject all four modules into every View.

Money is not selected again. `imports: [configured_prices]` reads the provider's
existing manifest and keeps its IDs, declarations and implementation. Its Dart plugin
and JS runtime must also be available in the host; an npm declaration alone cannot
implement a native type.

## 2. Generate and build the host bindings

After the repository and example dependency setup in the
[quick start](../../examples/configured_bindings/README.md#run-from-this-checkout), run
from the example root:

```sh
pnpm run generate
pnpm run build:host
```

The generation script runs the provider first, then the host. For the host alone, the
ordinary command from `host/` is:

```sh
dart run build_runner build
dart run flax_codegen check --config bindings/flax_bindings.yaml
```

The host declares build_runner 2.16.1 as a dev dependency and enables the optional
flax_codegen:bindings Builder in
[build.yaml](../../examples/configured_bindings/host/build.yaml). Its target includes
flax_package.yaml, binding YAML and npm manifests as inputs. The outputs list declares
all eleven Dart/TS paths in the following tree; the manifest and JS build plan are
included automatically. Paths still come from the binding YAML. If scopes or paths
change, update the list too; mismatches report missing/unused entries.

For continuous generation alongside other Dart builders, run from host/:

```sh
dart run build_runner watch
```

The provider keeps its configuration-only CLI workflow. Its
[build.yaml](../../examples/configured_bindings/provider/build.yaml) exposes
flax_package.yaml and bindings/manifest.json as additional_public_assets so the host
Builder tracks them. The existing Money adapter is referenced, not generated again. The
same declaration belongs in third-party Dart provider packages and their archives. Core,
Material, Cupertino and Canvas already include these public asset declarations.

CLI generation remains supported without build_runner:

```sh
dart run flax_codegen generate --config bindings/flax_bindings.yaml
```

Stop watch before switching writers. CLI check is read-only and remains available to
verify either entry's output. The two entries share selection, ownership and emission;
build_runner owns tracked input/output management. Earlier builders' generated Dart
inputs can participate in analysis. See the
[Builder setup](../../packages/flax_codegen/README.md#optional-build_runner-entry) for a
complete build.yaml template and ordering rules.

One call plans all sibling configurations. It writes native adapters, generated
TypeScript and `bindings/manifest.json` in the owning project:

```text
host/
  lib/flax_bindings/
    shop.dart
    admin.dart
    app.dart
  lib/src/generated/
    sdk/bindings.g.dart
    sdk/delivery.g.dart
    internal/admin.g.dart
    internal/app.g.dart
  js/
    sdk/runtime/src/generated/bindings.ts
    sdk/runtime/src/generated/delivery.ts
    internal/runtime/src/generated/admin.ts
    internal/runtime/src/generated/app.ts
  bindings/manifest.json
```

Each source-scanned scope also generates a public lib/flax_bindings/<name>.dart export
library. Its exports are selected automatically, including APIs declared in lib/src. The
Configured typedefs also appear in the export library without creating runtime owners.
The manifest uses that public carrier; native adapters and wire identities retain the
original declarations. Include these files when distributing a Dart binding provider.
They are ordinary generated Dart files, separate from the npm types-only SDK. Existing
non-generated files at these paths cause an error instead of being overwritten.

The Dart adapters compile into the host. Generation also writes bindings/js_modules.json
with all scope TS paths, public names, provider runtime packages and TypeScript aliases.
CLI and Builder emit identical bytes. Normal host preparation compiles these sources
directly. The example also retains regular TypeScript builds for public/internal
declarations and explicit runtime delivery metadata used by the legacy upgrade check.
There is no SDK packaging CLI.

When separate declaration projects share generated source aliases, connect the projects
with ordinary TypeScript references. The example marks the public SDK project composite
and references it from the internal project, then builds the public declarations first.
This keeps cross-scope type references within each project's output boundary, without
repeating the scope aliases or widening rootDir to include unrelated sources.

## 3. Prepare modules and choose plugins per View

`pnpm run build:host` runs the host JS project's normal build script, ending with
flax-modules. This finds host/bindings/js_modules.json automatically. All four local
scope entries come from that generated plan. Existing provider requirements come from
the binding manifest and provider metadata; installed UI/host runtime packages supply
their own delivery entries. Adding a local scope needs no further preparation mapping.
The output is host/assets/flax_modules/, declared once in the Flutter pubspec.

The old explicit
[module configuration](../../examples/configured_bindings/host/modules/flax.modules.json)
remains a format-1 compatibility example. It is tested separately and is not invoked by
the normal build. Pure legacy library packages can retain their existing generation and
delivery workflow unchanged. Builder still needs advance declarations for custom Dart/TS
output paths; the package-wide JS plan is included automatically.

When switching from explicit delivery to this automatic build, remove the host's own
legacy runtime packages from host/js/package.json dependencies. Local scope sources now
provide those entries directly. Keep external provider runtimes and ordinary types
dependencies. Installing both implementations for the same public entry reports a
duplicate owner instead of silently choosing one.

The Flutter main.dart loads that inventory before constructing any View:

```dart
WidgetsFlutterBinding.ensureInitialized();
Flax.moduleAssets = await FlaxModuleAssets.load(
  bundle: rootBundle,
  manifest: 'assets/flax_modules/modules.json',
);
```

The [business plugins](../../examples/configured_bindings/host/lib/configured_host.dart)
combine with the provider and Material plugins through these explicit mappings:

| Plugin             | Native bindingModules | Prepared jsModules       |
| ------------------ | --------------------- | ------------------------ |
| shopPlugin         | shopBindings          | `@example/shop/api`      |
| deliveryPlugin     | deliveryBindings      | `@example/shop/delivery` |
| adminPlugin        | adminBindings         | `@flax/app/admin`        |
| appPlugin          | appBindings           | `@flax/app/host`         |
| FlaxPricesPlugin   | pricesBindings        | `@example/prices/api`    |
| FlaxMaterialPlugin | materialBindings      | `@flax/material-ui`      |

Every demo View also installs FlaxMaterialPlugin for its JS TextButton widgets. This UI
capability does not expose internal business APIs. The Dart host uses material_ui
MaterialApp/Scaffold, matching the generated Material widgets. A public View selects:

```dart
FlaxView.bundle(
  prefix: 'applications/first',
  createRuntime: FlaxEngine.createRuntime,
  plugins: [
    const FlaxMaterialPlugin(),
    shopPlugin,
    deliveryPlugin,
    const FlaxPricesPlugin(),
  ],
)
```

The manager View selects its generated internal plugins:

```dart
FlaxView.bundle(
  prefix: 'applications/manager',
  createRuntime: FlaxEngine.createRuntime,
  plugins: [
    const FlaxMaterialPlugin(),
    adminPlugin,
    appPlugin,
    const FlaxPricesPlugin(),
  ],
)
```

A View needing both surfaces can select both sets of generated plugins. The same plugins
work with `FlaxView.directory(directory: ...)` when loading an independently installed
business directory. The desktop example displays four bundle-based Views together. All
four remain mounted while their JS TextButton handlers call APIs and update signals.
Shop A/B subscribe to cart.quantities, so a change from either shop or the manager
updates both live quantity/total rows automatically. Each shop's call counter and last
delivery result belong to that shop. The manager keeps only its internal SDK plugin; it
does not need a public SDK subscription to reset the shared cart. Its **Host app name**
button calls hostAppName() from the default app scope and updates its local result row.

The fourth miniapp uses a dynamic import inside its button handler, catches the missing
internal module, and displays the real error through its signal. That failed import
never executes resetCart(). The tests also cover directory-based Views, independent
subscription cleanup and subscribing again after all prior Views close.

The host inventory is the complete set of available modules. The plugins select the
entries and dependency closure activated in each session. Local sibling native modules
still need explicit bindingModules entries. Provider native dependencies are reused
once. Folder separation and npm private flags do not provide View isolation on their
own; this is not an untrusted-code sandbox.

## 4. Build miniapps and pack only SDK types

Each project under `miniapps/` has its own package.json, tsconfig and entry point. The
example uses workspace selectors for public SDK declarations so it runs without npm
publication. An external consumer can use a compatible published version or local
archive, with ordinary pnpm overrides for unpublished dependencies during local testing.

The public business dependencies are declarations: `@example/shop`, `@example/prices`,
`@flax/core`, `@flax/flutter`, `@flax/dart` and `@flax/material-ui`. Runtime packages
are absent. The host exposes an ordinary Dart broadcast stream on the selected Cart
class; no extra plugin or generator mode is required:

```dart
int _quantity = 1;
final _changes = StreamController<int>.broadcast();

int get quantity => _quantity;
set quantity(int value) {
  if (_quantity == value) return;
  _quantity = value;
  _changes.add(value);
}
Stream<int> get quantities => _changes.stream;
```

Both add() and resetCart() assign through this setter. The controller belongs to the
application-wide Cart and lives for the host's lifetime. For a shorter-lived service,
its Dart owner should close the controller when that service is disposed; an individual
View must not close a controller shared with other Views.

The shop calls listen() on the generated Dart Stream reference. It starts listening
before the initial synchronous read and updates a signal for every event:

```typescript
import { signal } from '@flax/core';
import { Column, Text, runApp } from '@flax/flutter/widgets';
import { TextButton } from '@flax/material-ui';
import type { Money } from '@example/prices/api';
import { currentCart } from '@example/shop/api';

const cart = currentCart();
const unitPrice = cart.unitPrice.cents;
const live = signal('');
const result = signal('Ready');
const showQuantity = (quantity: number) => {
  live.value = `Quantity ${quantity}, total ${quantity * unitPrice}`;
};

cart.quantities.listen(showQuantity, {
  onError: (error) => {
    live.value = `Subscription failed: ${String(error)}`;
  },
});
showQuantity(cart.quantity);

runApp(
  Column({
    children: [
      TextButton({
        onPressed: () => {
          const total: Money = cart.add(1);
          result.value = `Added: ${total.cents}, delivery ${cart.delivery().days} days`;
        },
        child: Text('Add item'),
      }),
      Text(live.bind),
      Text(result.bind),
    ],
  }),
);
```

Each listen() creates a real Dart subscription. Closing that View's session cancels its
subscription, while other subscribers and the application-owned controller continue to
work. This example keeps its subscription for the entire View session. A shorter-lived
JS consumer should retain the returned subscription and call cancel() when it stops
observing. There is no polling or shared JS state between sessions. This cart's unit
price is fixed at 1200 cents, so each shop reads it once and derives its live total from
streamed quantities; a changing price would need to be part of the updates too.

currentCart is a value import even though the npm package contains only declarations.
The shared [miniapp bundler](../../examples/configured_bindings/miniapps/build.mjs)
passes the prepared host inventory to `flaxEsbuildPlugin`. Binding imports resolve to
the View's host modules; ordinary JS dependencies remain normal bundled dependencies.
`prepareApplication` writes the business manifest and entry layout into
`host/applications/<name>/`.

From the example root:

```sh
pnpm run build:apps
pnpm run pack:sdk
```

The pack script uses ordinary pnpm pack in these two directories:

| npm package       | Source directory  | Packed contents                       |
| ----------------- | ----------------- | ------------------------------------- |
| `@example/shop`   | host/js/sdk/types | package.json and public .d.ts entries |
| `@example/prices` | provider/js-types | package.json and Money declarations   |

The shop package exports `./api` and `./delivery`. Its files allowlist names
`types/bindings.d.ts` and `types/delivery.d.ts`; its dependencies include the provider's
public types and @flax/dart for the generated Stream declaration. The private runtime
package also declares those type dependencies for compilation. There is no internal
entry or executable JS in the public package.

`@example/shop-runtime` and `@example/prices-runtime` stay private in the host. The
internal types/runtime packages are also private. Only the manager adds the local
`@flax/app` declaration dependency and calls `resetCart()` from `@flax/app/admin`. Its
View must still select adminPlugin and appPlugin.

SDK packing does not activate a plugin and never publishes. An SDK that also provides
handwritten JS convenience functions can package those as ordinary JS; pure host
bindings need only their public declarations on npm.

## 5. Upgrade the host without rebuilding old miniapps

First build and run the baseline above. Optionally record the business output hashes
from the example root:

```sh
shasum -a 256 host/applications/first/app.js host/applications/second/app.js
```

For a real additive native API change, the example already declares
`int sdkRevision() => 2` in host/lib/api.dart, but does not initially expose it. Make
these three source changes:

1. Add `@FlaxExport(scope: 'shop')` to the existing sdkRevision declaration.
2. Set the private SDK runtime's version to `1.1.0` in its package.json.
3. Set the public types package's version to `0.1.0` for the new declarations.

The different numbers illustrate independent SDK/runtime versions, not a required
version policy. Rebuild only the host:

```sh
pnpm run generate:host
pnpm run build:host
```

Stop the old Flutter process and launch it again with the launch command in the
[example README](../../examples/configured_bindings/README.md#run-from-this-checkout).
This compiles the new Dart binding into the host. Do not run `build:apps`: Shop A/B
still use their original JS files. Click their buttons to exercise the old consumers.
Recheck the hashes; they should be unchanged. The new native function is available to
new consumers, while the old miniapps keep calling currentCart/add/delivery and retain
their previous behavior. The original packed 0.0.0 declarations also remain a valid old
consumer artifact.

Application imports request a public module by name. They do not pin it to the
build-time npm version or content hash. Legacy bundles carrying those arguments use the
same compatible loading path. Within one host, factory versions/hashes, owners and
dependencies still match the prepared inventory strictly; Dart protocol and capability
checks remain enforced.

Providers must preserve signatures, stable type identities and behavior used by old
applications. Removing APIs or changing their meaning can still break clients. A new
miniapp using sdkRevision needs a host that actually exposes it; declarations do not add
native capability. JS-only business changes using existing APIs can rebuild the miniapp
alone, while new native APIs require a host rebuild/release.

After inspecting new declarations, the normal pack script can produce a new types
archive. Never replace an already published version with different declarations. No
command in this example publishes or implements production update selection/rollback.
