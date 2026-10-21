# Integrate configured host bindings

A host-provided SDK has two delivery paths: Dart and JS binding implementations stay
inside the Flutter host, while npm consumers receive the public TypeScript declarations.
Each FlaxView chooses its native and prepared JS modules through explicit plugins.

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
| resetCart            | Host app                            | `@flax/app/admin`        | Internal calls                            |
| Money                | Existing configured_prices provider | `@example/prices/api`    | Reuse its original binding identity       |

The [host Pub manifest](../../examples/configured_bindings/host/pubspec.yaml) declares
flax, configured_prices, configured_delivery, the Material UI packages and the codegen
dev dependency. Its
[JavaScript project](../../examples/configured_bindings/host/js/package.json) also
declares the provider's public types and local runtime. In a separate application, use
your actual Pub dependencies and npm versions/local selectors instead of this checkout's
workspace dependencies.

Create three sibling files under `host/bindings/`. The public shop selection is:

```yaml
format: 2
name: shop
library: package:configured_host/api.dart
jsPackage: '@example/shop/api'
dartOutput: lib/src/generated/sdk/bindings.g.dart
tsOutput: js/sdk/runtime/src/generated/bindings.ts
imports: [configured_prices]
classes: [Cart]
functions: [currentCart]
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
library: package:configured_host/api.dart
dartOutput: lib/src/generated/internal/admin.g.dart
tsOutput: js/internal/runtime/src/generated/admin.ts
imports: [configured_prices]
functions: [resetCart]
```

The omitted jsPackage uses `@flax/app/admin` in this host. The default public root is
`@flax/app`, with the binding name as a subpath, when package metadata supplies no JS
root. An explicit jsPackage wins. You can choose `@acme/app-sdk/api`; update package
exports, application imports, plugin selections and module configuration to match, then
regenerate. Dart wire identities do not come from the npm name.

The [host package metadata](../../examples/configured_bindings/host/flax_package.yaml)
declares namespace `example.shop` and registration symbols shopBindings,
deliveryBindings and adminBindings. This records ownership; it does not inject all three
modules into every View.

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
dart run flax_codegen generate --config bindings/flax_bindings.yaml
dart run flax_codegen check --config bindings/flax_bindings.yaml
```

One call plans all sibling configurations. It writes native adapters, generated
TypeScript and `bindings/manifest.json` in the owning project:

```text
host/
  lib/src/generated/
    sdk/bindings.g.dart
    sdk/delivery.g.dart
    internal/admin.g.dart
  js/
    sdk/runtime/src/generated/bindings.ts
    sdk/runtime/src/generated/delivery.ts
    internal/runtime/src/generated/admin.ts
  bindings/manifest.json
```

The Dart adapters compile into the host. The normal TypeScript build emits executable JS
into runtime/dist and declarations into the sibling types package. Each runtime's
build.mjs reads generated requirements with `bindingModuleRequirements` from
`@flax/build`, then writes its own `flax_modules.json`. There is no SDK packaging CLI.

## 3. Prepare modules and choose plugins per View

`pnpm run build:host` also executes the
[host module project's](../../examples/configured_bindings/host/modules/package.json)
normal build script: `flax-modules flax.modules.json`. Its fixed configuration maps
public imports to local runtime packages, for example:

```json
{
  "specifier": "@example/shop/api",
  "package": "@example/shop-runtime"
}
```

The complete
[module configuration](../../examples/configured_bindings/host/modules/flax.modules.json)
also includes the Flax base modules, provider, delivery and internal module. It emits
`host/assets/flax_modules/`, declared in the Flutter pubspec.

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

| Plugin              | Native bindingModules          | Prepared jsModules                            |
| ------------------- | ------------------------------ | --------------------------------------------- |
| FlaxPublicSdkPlugin | shopBindings, deliveryBindings | `@example/shop/api`, `@example/shop/delivery` |
| FlaxInternalPlugin  | adminBindings                  | `@flax/app/admin`                             |
| FlaxPricesPlugin    | pricesBindings                 | `@example/prices/api`                         |
| FlaxMaterialPlugin  | materialBindings               | `@flax/material-ui`                           |

Every demo View also installs FlaxMaterialPlugin for its JS TextButton widgets. This UI
capability does not expose internal business APIs. The Dart host uses material_ui
MaterialApp/Scaffold, matching the generated Material widgets. A public View selects:

```dart
FlaxView.bundle(
  prefix: 'applications/first',
  createRuntime: FlaxEngine.createRuntime,
  bindings: FlaxBindingRegistry([]),
  plugins: const [FlaxMaterialPlugin(), FlaxPublicSdkPlugin(), FlaxPricesPlugin()],
)
```

The manager View selects the internal plugin instead:

```dart
FlaxView.bundle(
  prefix: 'applications/manager',
  createRuntime: FlaxEngine.createRuntime,
  bindings: FlaxBindingRegistry([]),
  plugins: const [FlaxMaterialPlugin(), FlaxInternalPlugin(), FlaxPricesPlugin()],
)
```

A View needing both can select both plugins. The same plugins work with
`FlaxView.directory(directory: ...)` when loading an independently installed business
directory. The desktop example displays four bundle-based Views together. All four
remain mounted while their JS TextButton handlers call APIs and update signals. Shop A/B
subscribe to cart.quantities, so a change from either shop or the manager updates both
live quantity/total rows automatically. Each shop's call counter and last delivery
result belong to that shop. The manager keeps only its internal SDK plugin; it does not
need a public SDK subscription to reset the shared cart.

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
View must still select FlaxInternalPlugin.

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

1. Add sdkRevision to the shop YAML: `functions: [currentCart, sdkRevision]`.
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
