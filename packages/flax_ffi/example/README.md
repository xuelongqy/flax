# Runnable FFI example

This example uses only `@flax/ffi` in application JavaScript. The Flutter host uses an
ordinary `FlaxView`; it has no FFI registration or per-library Dart bindings. Both
platform projects are checked in. The example is private and is not published.

## Run

Requirements: the repository's pinned Node/pnpm/Flutter tools, Xcode, and a matching
FFI-enabled Flax engine. Use macOS arm64 V8 or an arm64 iOS Simulator with Hermes.
Select a booted simulator with `xcrun simctl list devices booted`.

From the repository root:

```sh
mkdir -p "$PWD/.local/tmp"
export TMPDIR="$PWD/.local/tmp" TMP="$PWD/.local/tmp" TEMP="$PWD/.local/tmp"
pnpm install --frozen-lockfile
pnpm --filter @flax/example-ffi build
cd packages/flax_ffi/example/app
flutter pub get
flutter --local-engine-src-path="$FLAX_ENGINE_SOURCE" \
  --local-engine=flax_mac_debug_arm64 --local-engine-host=flax_mac_debug_arm64 \
  run -d macos
```

`FLAX_ENGINE_SOURCE` is an absolute `engine/src` directory. For iOS, replace the last
command with:

```sh
flutter --local-engine-src-path="$FLAX_ENGINE_SOURCE" \
  --local-engine=flax_ios_debug_sim_arm64 --local-engine-host=flax_mac_debug_arm64 \
  run -d <simulator-id>
```

For an instrumented acceptance engine produced by
[the package runner](../test/runtime/README.md), use its `engine-src` directory and
prefix both engine names with `ffi_`. The Flutter framework must match that engine; the
acceptance guide describes matching an older simulator SDK without changing the main
checkout.

The UI shows `Counter: 42`, `Bytes: 11,21,31`, and `Message: flax`. The same values are
logged as `FLAX_FFI_EXAMPLE_RESULT`. A failed native result throws instead of displaying
success. Normal `flutter run` leaves the example open for inspection.

## Follow the code

1. [native.json](js/native.json) declares [counter.c](js/native/counter.c) as an npm
   native input. The build selects the current Apple target and automatically packages
   the result as a code asset.
2. [counter.ts](js/src/counter.ts) opens that asset, declares C signatures and wraps its
   pointer in `Counter`. `NativeFinalizer` releases it after GC or Session close. Failed
   attachment rolls back the allocation. Library lifetime belongs to the Session.
3. [main.ts](js/src/main.ts) passes a JS-owned Buffer directly to C, then contrasts a
   borrowed native view with a copy that survives explicit native release.
4. [build.mjs](js/build.mjs) uses the public `@flax/build` adapter. It stages the
   private Dart build package under `app/.flax/ffi_assets` before `flutter pub get`.

GC timing is nondeterministic. This UI does not force collection; exact-once
finalization is asserted in the package's engine acceptance suite. Borrowed views never
own the native allocation, and `Buffer.alloc()` memory must not be passed to a C
`free()`.

The Flutter app sits under `app/` so its generated native dependency and lockfile do not
affect the repository's Pub workspace. Build JavaScript before resolving this app's Pub
dependencies. Rebuild Flutter when native inputs change.
