# Default app bindings

This small package has no scope YAML or handwritten module delivery configuration. Its
annotated cart functions use the default app scope, scan and output paths. Package
metadata keeps a stable namespace; build.yaml enables the Builder without an outputs
list. The generated JS build plan covers every scope automatically.

Use the maintained Flutter fork and set FLUTTER_ROOT as in the
[shopping setup](../README.md#run-from-this-checkout). From the repository root, resolve
the workspace once with `flutter pub get`. Then:

```sh
cd examples/configured_bindings/default_app
dart run flax_codegen generate
dart run flax_codegen check
dart run build_runner build
pnpm --dir .. run build:default
flutter --local-engine-src-path="$FLUTTER_ROOT/engine/src" \
  --local-engine=flax_mac_debug_arm64 \
  --local-engine-host=flax_mac_debug_arm64 test --no-pub
```

Both drivers produce the same five files:

```text
lib/src/generated/app.g.dart
lib/flax_bindings/app.dart
js/src/generated/app.ts
bindings/manifest.json
bindings/js_modules.json
```

Import `package:configured_default_app/flax_bindings/app.dart` to use appPlugin and
appBindings. The permanent js/build.mjs calls prepareModules() from @flax/build, which
finds the generated plan and prepares assets/flax_modules/. The script also bundles the
clickable JS page into assets/flax/app/. Its tsconfig extends the plan for generated
scope aliases, so adding a scope needs no JS build-script or alias changes. Inject the
plugin directly:

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
Flutter entry and widget tests. For a maintained macOS desktop host with independent
FlaxViews, shared-cart subscriptions, provider reuse and a types-only SDK, use the
[shopping example](../README.md).
