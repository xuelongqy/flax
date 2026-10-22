# Default app bindings

This small package has no scope YAML or handwritten module delivery configuration. Its
annotated cart functions use app and admin scopes with default scan and output paths.
There is no build.yaml or flax_package.yaml; build_runner discovers the annotations. The
generated JS build plan covers every scope automatically.

## Run the checked-in example

This project already contains the host entry, JS project and a standard macOS runner.
For a new Flutter host, follow the
[minimal integration flow](../../../docs/guides/host-binding-quickstart.md): Flax CLI
init, annotations, build_runner, JS build and plugin injection. It includes local
dependency setup; version 0.0.0 is not assumed to exist on a registry.

Use macOS 15 or newer on Apple Silicon, Xcode and the maintained Flutter fork with its
matching macOS debug engine, as described in the
[repository setup](../../../README.md#quick-start). Run from the repository root,
replacing the Flutter path:

```sh
export FLUTTER_ROOT=/path/to/flutter-fork
export PATH="$FLUTTER_ROOT/bin:$PATH"
mkdir -p "$PWD/.local/tmp"
export TMPDIR="$PWD/.local/tmp" TMP="$PWD/.local/tmp" TEMP="$PWD/.local/tmp"
flutter pub get --enforce-lockfile
pnpm install --frozen-lockfile
pnpm run js:build
pnpm --dir examples/configured_bindings install --frozen-lockfile
cd examples/configured_bindings/default_app
dart run build_runner build
pnpm --dir js run build
flutter --local-engine-src-path="$FLUTTER_ROOT/engine/src" \
  --local-engine=flax_mac_debug_arm64 \
  --local-engine-host=flax_mac_debug_arm64 run --no-pub -d macos
```

The window shows Quantity: 1. Click Add item twice to see Quantity: 2 and then
Quantity: 3. Each click calls Dart and updates the same JS page without restarting its
FlaxView. After changing annotations, repeat build_runner and the JS build before
restarting the host. `dart run flax_codegen generate` is the alternative generation
driver.

This example belongs to the repository Pub workspace and the parent configured_bindings
pnpm workspace. The parent pnpm overrides supply unpublished framework packages. If
framework JS changes after installation, rebuild it and reinstall the parent workspace
with `pnpm --dir .. install --force` from this directory.

The example already has everything init would scaffold, so normal use needs no init or
sync. Flax CLI init preserves lib/main.dart and existing pages/build scripts; a custom
build must call prepareModules() itself. The example intentionally has no build.yaml,
flax_package.yaml or scope YAML to demonstrate direct annotation discovery.

## Follow the files

The API is ordinary Dart with annotations (see lib/cart.dart):

```dart
@FlaxExport()
int cartQuantity() => _quantity;

@FlaxExport()
int addItem() => ++_quantity;

@FlaxExport(scope: 'admin')
int resetCart() => _quantity = 1;
```

No scope configuration is required. JS pages use normal imports:

```typescript
import { addItem, cartQuantity } from '@flax/app/app';
```

A manager can import resetCart from @flax/app/admin when its View injects adminPlugin.
The default page injects appPlugin only. Use `dart run flax_codegen check` as an
optional reproducibility check, rather than an extra generation step.

Both drivers produce the same six files:

```text
lib/flax_bindings.dart
lib/src/generated/app.g.dart
lib/flax_bindings/app.dart
js/src/generated/app.ts
bindings/manifest.json
bindings/js_modules.json
```

Import `package:configured_default_app/flax_bindings.dart` to use appPlugin, adminPlugin
and their binding modules. Adding or removing an annotation scope during watch requires
no configuration update. The generated plan carries additional scope TS sources; the JS
build materializes them before TypeScript checking. The permanent js/build.mjs calls
prepareModules() from @flax/build, which finds the generated plan and prepares
assets/flax_modules/. The script also bundles the clickable JS page into
assets/flax/app/. Its tsconfig extends the plan for generated scope aliases, so adding a
scope needs no JS build-script or alias changes. Inject the plugin directly:

```dart
FlaxView.bundle(
  prefix: 'assets/flax/app',
  createRuntime: FlaxEngine.createRuntime,
  plugins: [appPlugin],
)
```

An empty binding registry need not be supplied. JavaScript imports cartQuantity and
addItem from `@flax/app/app`. This is a default public module specifier, not a package
that must be downloaded from npm.

The tests invoke the Dart adapters and mount the actual lib/main.dart entry. The page
starts at Quantity: 1; tapping Add item calls Dart and updates Quantity: 2 without
restarting the View. Node is used on the development/CI machine during the normal JS
build; the runtime device only needs Flax's engine. This minimal package provides a
Flutter entry, a macOS runner and widget tests. For a maintained macOS desktop host with
independent FlaxViews, shared-cart subscriptions, provider reuse and a types-only SDK,
use the [shopping example](../README.md).

## Verify the same application entry

After the build above, run from this directory:

```sh
flutter --local-engine-src-path="$FLUTTER_ROOT/engine/src" \
  --local-engine=flax_mac_debug_arm64 \
  --local-engine-host=flax_mac_debug_arm64 test --no-pub
```

The two tests check generated app/admin binding separation and start lib/main.dart to
click the actual JS page and close the View. They do not create a substitute app.

## Try the optional SDK configuration

Follow
[step 5 of the quick start](../../../docs/guides/host-binding-quickstart.md#5-add-scopes-or-a-public-types-sdk-only-when-needed)
to add the SDK npm name and public scopes to this example's pubspec.yaml. resetCart and
adminPlugin already exist; do not add a second resetCart declaration. Change the page's
public import to the SDK name before rebuilding.

The parent pnpm workspace includes default_app/js/sdk, so the generated SDK uses the
same local dependency overrides. No nested pnpm workspace is needed. From this
directory, run build_runner, the normal JS build, pnpm --dir js/sdk install and pnpm
--dir js/sdk pack, as shown in the guide. Repeat these commands after changing public
scopes. The binding test asserts the original @flax/app/app module name; update that
assertion to your SDK module name when testing a customized example.
