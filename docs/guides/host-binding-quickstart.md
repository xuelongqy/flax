# Host binding quick start

Initialize once, annotate Dart APIs, run build_runner, build JavaScript, then inject the
generated plugin into a FlaxView. This guide uses a cart that starts at one item; a JS
button calls Dart and updates the existing page to two items.

The maintained
[default example](../../examples/configured_bindings/default_app/README.md) contains the
same Dart entry, JS page and build script, plus the optional admin scope. For custom
output directories, existing configuration and third-party providers, continue with the
[advanced integration guide](host-bindings.md).

## 1. Initialize an existing Flutter host

Flax CLI adds missing dependencies, assets and JS templates. It preserves main.dart,
existing pages, scripts and custom configuration. It does not create a Flutter project,
install dependencies or generate bindings. Initialization is optional if your project
already provides the same JS build and asset setup.

**Current checkout prerequisite:** Flax's development packages are not published. Use
the local setup below for a new project today; do not try to download version 0.0.0 from
a registry. Node and pnpm are needed only on the development/CI machine. The device uses
the maintained Flutter engine, without Node.

### Run against this checkout

Use macOS 15 or newer on Apple Silicon, Xcode, the repository's pinned Node/pnpm
versions, and the maintained Flutter fork with its matching `flax_mac_debug_arm64`
engine. Follow the [engine setup](../../README.md#quick-start) before these commands. A
stock Flutter engine cannot execute Flax.

Start at the Flax repository root and replace the Flutter path:

```sh
export FLAX_ROOT="$PWD"
export FLUTTER_ROOT=/path/to/flutter-fork
export PATH="$FLUTTER_ROOT/bin:$PATH"
mkdir -p "$FLAX_ROOT/.local/tmp"
export TMPDIR="$FLAX_ROOT/.local/tmp" TMP="$FLAX_ROOT/.local/tmp" TEMP="$FLAX_ROOT/.local/tmp"
flutter pub get --enforce-lockfile
pnpm install --frozen-lockfile
pnpm run js:build

flutter create --empty --platforms=macos --no-pub "$FLAX_ROOT/.local/cart_host"
cd "$FLAX_ROOT/.local/cart_host"
```

An existing host can use its own directory instead of the last two commands. Add this
entry to its existing pubspec.yaml dev_dependencies section:

```yaml
dev_dependencies:
  flax_cli: 0.0.0
```

Create pubspec_overrides.yaml with the local paths below. If it already exists, merge
these dependency_overrides entries into it instead of running the overwrite command. The
shell expands FLAX_ROOT in this command:

```sh
cat > pubspec_overrides.yaml <<EOF
dependency_overrides:
  flax:
    path: $FLAX_ROOT/packages/flax
  flax_annotations:
    path: $FLAX_ROOT/packages/flax_annotations
  flax_codegen:
    path: $FLAX_ROOT/packages/flax_codegen
  flax_cli:
    path: $FLAX_ROOT/packages/flax_cli
EOF
flutter pub get
dart run flax_cli:flax init
flutter pub get
```

Init now provides js/package.json, js/tsconfig.json, js/build.mjs, a starter JS page,
build.yaml input settings and Flutter asset entries. It does not create scope YAML or
flax_package.yaml. The Builder works without that build.yaml when used directly.

Point the JS development dependencies at the built checkout as well. The command below
creates a workspace for the new host. If an owning pnpm workspace already exists, merge
these package paths and overrides there instead; paths are relative to that workspace.
Include both the host JS project and its future SDK directory so the SDK receives the
same local dependency overrides:

```sh
cat > js/pnpm-workspace.yaml <<EOF
packages:
  - .
  - sdk
overrides:
  '@flax/core': file:$FLAX_ROOT/packages/flax/js-types
  '@flax/core-runtime': file:$FLAX_ROOT/packages/flax/js
  '@flax/flutter': file:$FLAX_ROOT/packages/flax_flutter/js
  '@flax/dart': file:$FLAX_ROOT/packages/flax_dart/js
  '@flax/build': file:$FLAX_ROOT/packages/flax_build/js
allowBuilds:
  esbuild: true
EOF
pnpm --dir js install
```

The checked-in default example already belongs to the configured_bindings workspace,
which includes default_app/js and default_app/js/sdk. Do not create another workspace
inside that example. These local dependency paths are a checkout setup detail, not
binding configuration. Keep both terminal variables for the commands below. If framework
JS changes later, rebuild it and reinstall these file dependencies with
`pnpm --dir js install --force`.

## 2. Annotate Dart and generate bindings

Create lib/cart.dart:

```dart
import 'package:flax_annotations/flax_annotations.dart';

int _quantity = 1;

@FlaxExport()
int cartQuantity() => _quantity;

@FlaxExport()
int addItem() => ++_quantity;
```

Omitted scope means app. Discovery scans this package's lib recursively and selects
annotated declarations; it does not expose every Dart API or scan dependency packages.
Run from the Flutter package root:

```sh
dart run build_runner build
```

Use `dart run build_runner watch` during development, or
`dart run flax_codegen generate` as the alternative driver. Both use the same defaults.
Neither requires init/sync, a scope YAML, a library barrel or an explicit output list.
Do not run two writing drivers at the same time.

The generated lib/flax_bindings.dart exports appPlugin. bindings/manifest.json describes
the API, and bindings/js_modules.json tells the JS build how to prepare every scope. Do
not edit these files or repeat their module list in a second configuration.

## 3. Call Dart from the JS page and build

Replace js/src/main.ts:

```typescript
import { signal } from '@flax/core';
import { Column, GestureDetector, Text, runApp } from '@flax/flutter/widgets';
import { TextDirection } from '@flax/dart/ui';
import { addItem, cartQuantity } from '@flax/app/app';

const quantity = signal(`Quantity: ${cartQuantity()}`);
runApp(
  Column({
    children: [
      Text(quantity.bind, { textDirection: TextDirection.ltr }),
      GestureDetector({
        onTap: () => {
          quantity.value = `Quantity: ${addItem()}`;
        },
        child: Text('Add item', { textDirection: TextDirection.ltr }),
      }),
    ],
  }),
);
```

@flax/app/app is the default host module name: @flax/app is the package root, and app is
the scope. There is no npm installation of @flax/app in this local host workflow.

For a new host, init creates the normal build script. If you already had a custom build
script or tsconfig, init preserves them: first integrate prepareModules(),
flaxEsbuildPlugin(manifest), and make tsconfig inherit bindings/js_modules.json without
copying individual scope aliases. Follow the
[example build script](../../examples/configured_bindings/default_app/js/build.mjs) and
[tsconfig](../../examples/configured_bindings/default_app/js/tsconfig.json). Merely
running init does not connect an existing custom build to Flax.

Run the normal build:

```sh
pnpm --dir js run build
```

The script calls prepareModules(), which reads bindings/js_modules.json, materializes
additional scope sources and prepares assets/flax_modules/. It then bundles the page
into assets/flax/app/ and checks TypeScript. Keep this order in custom build scripts:
module preparation must run before typechecking newly discovered scopes.

The generated tsconfig extends the binding plan for scope aliases. Adding a scope
therefore needs no extra JS alias or build entry. build_runner itself never invokes
Node.

## 4. Inject the plugin and run the host

For the new host, replace lib/main.dart with the entry below. In an existing app, keep
its startup and navigation: add the module-assets load before mounting FlaxViews, import
flax_bindings.dart and place the FlaxView in the intended screen.

```dart
import 'package:flax/flax.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'flax_bindings.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  Flax.moduleAssets = await FlaxModuleAssets.load(
    bundle: rootBundle,
    manifest: 'assets/flax_modules/modules.json',
  );
  runApp(
    MaterialApp(
      home: Scaffold(
        body: Center(
          child: FlaxView.bundle(
            prefix: 'assets/flax/app',
            createRuntime: FlaxEngine.createRuntime,
            plugins: [appPlugin],
          ),
        ),
      ),
    ),
  );
}
```

Init has already added these Flutter assets. For a manually configured host, add them to
pubspec.yaml and run flutter pub get:

```yaml
flutter:
  assets:
    - assets/flax_modules/
    - assets/flax/app/
```

prefix selects the small application; plugins selects the host APIs available to that
View. Loading the host inventory does not enable every scope in every View.

Launch from the host directory, using the maintained engine selected in step 1:

```sh
flutter --local-engine-src-path="$FLUTTER_ROOT/engine/src" \
  --local-engine=flax_mac_debug_arm64 \
  --local-engine-host=flax_mac_debug_arm64 run --no-pub -d macos
```

The window shows Quantity: 1. Click Add item: Dart increments the quantity and the same
JS page shows Quantity: 2. Click again for Quantity: 3; the View is not restarted.

After an API change, run build_runner and the normal JS build again, then restart the
host to load its rebuilt asset bundle. The permanent default example also has a
[button test](../../examples/configured_bindings/default_app/test/application_test.dart)
that starts this main entry and checks the Dart call, page update and View cleanup.

## 5. Add scopes or a public types SDK only when needed

| Need                    | Extra annotation/configuration | View plugins                        | JS import          |
| ----------------------- | ------------------------------ | ----------------------------------- | ------------------ |
| Default cart            | @FlaxExport()                  | appPlugin                           | @flax/app/app      |
| Internal administration | @FlaxExport(scope: 'admin')    | adminPlugin, plus appPlugin if used | @flax/app/admin    |
| Public cart SDK         | typesSdk name and scopes below | appPlugin                           | @acme/cart-sdk/app |

These defaults apply when the host has no explicit bindings/flax_*.yaml selections; old
configured scopes retain their selection rules.

For the new cart_host from step 1, append this declaration to lib/cart.dart. The
checked-in default example already has resetCart; skip this addition there:

```dart
@FlaxExport(scope: 'admin')
int resetCart() => _quantity = 1;
```

Run generation and JS building again. adminPlugin is exported by the same
lib/flax_bindings.dart. A normal View keeps plugins: [appPlugin]; a management View that
uses both APIs selects plugins: [appPlugin, adminPlugin]. Its JS imports resetCart from
@flax/app/admin. Without adminPlugin, the management module is unavailable even if the
page can compile against its types. The permanent default example includes this optional
scope, but its displayed page only uses appPlugin. Use a different page entry/bundle for
the management UI if normal and management Views should display different pages; adding
a plugin enables its APIs but does not create a second page.

No scope YAML or sync command is needed when default scopes are added or removed,
including during watch. Only legacy projects with explicit custom Builder outputs may
need `dart run flax_cli:flax sync` to update that old output list. See the
[custom layout guide](host-bindings.md#2-generate-and-build-the-host-bindings).

To expose only the cart as an npm types SDK, add to pubspec.yaml:

```yaml
flax:
  typesSdk:
    name: '@acme/cart-sdk'
    scopes: [app]
```

The default public module becomes @acme/cart-sdk/app; update the JS page's business
import to that name. admin stays @flax/app/admin. Existing flax_package.yaml takes
precedence over pubspec.flax, so put the same typesSdk settings there for an old
project. Public API signatures cannot expose types from an unselected internal scope.
The default SDK directory is js/sdk; step 1 already includes it in the pnpm workspace.
If typesSdk.directory is customized, include that directory in the owning workspace too.

```sh
dart run build_runner build
pnpm --dir js run build
pnpm --dir js/sdk install
pnpm --dir js/sdk pack
```

The normal JS build creates missing js/sdk/package.json and tsconfig.json and maintains
its generated declaration settings. Pack runs the generated prepack/types script and
creates an ordinary .tgz; it does not publish anything. Existing SDK versions, scripts,
private flags and custom settings are preserved. Custom prepack scripts remain the
project's responsibility. Repeat the four commands above after changing public scopes:
generation and the JS build update the SDK metadata, install resolves any newly required
type dependencies, and pack refreshes the declarations. No init/sync or special SDK
command is needed.

An independent miniapp installs this archive (or a compatible released SDK) with its
usual Flax UI types and build dependencies. It still uses a value import for callable
APIs, even though the package contains declarations only:

```typescript
import { addItem, cartQuantity } from '@acme/cart-sdk/app';
```

Its esbuild configuration uses flaxEsbuildPlugin() without a host inventory. Installed
SDK metadata identifies host imports; ordinary JS dependencies stay bundled. The
[maintained independent miniapp build](../../examples/configured_bindings/miniapps/build.mjs)
shows prepareApplication() and the bundler setup. The host loads the resulting app with
FlaxView.directory or its ordinary bundle/package loader, and injects appPlugin.

The npm SDK contains public declarations; generated runtime implementations remain in
the host's assets and Dart plugin. Installing types does not inject a plugin. SDK and
host versions do not have to match exactly: compatible old apps keep working while the
host still checks module integrity and protocol/capability compatibility. Keep the
public module names and API contract stable; renaming the SDK changes import paths and
requires updating existing consumers. See
[SDK packaging and independent apps](host-bindings.md#4-build-miniapps-and-pack-only-sdk-types)
for third-party provider reuse and separate public/internal output directories.
