# Runnable generated FFI example

The checked-in C header and `native.json` generate a Counter class automatically.
Application JS contains no handwritten native signatures. The Flutter host is an
ordinary `FlaxView` and has no business FFI bridge.

## Build and run

Use the repository's pinned Node/pnpm and a matching maintained Flax Flutter engine.
From the repository root:

```sh
mkdir -p "$PWD/.local/tmp"
export TMPDIR="$PWD/.local/tmp" TMP="$PWD/.local/tmp" TEMP="$PWD/.local/tmp"
pnpm install --frozen-lockfile
pnpm --workspace-concurrency=1 --filter @flax/example-ffi-codegen... run build
cd packages/flax_ffi_codegen/example/app
flutter pub get
flutter --local-engine-src-path="$FLAX_ENGINE_SOURCE" \
  --local-engine=flax_mac_debug_arm64 --local-engine-host=flax_mac_debug_arm64 \
  run -d macos
```

Xcode and its target SDK must be installed and selected; see
[prerequisites](../js/README.md#prerequisites). The example's `typecheck` command runs
header generation before TypeScript, so it works from a clean checkout. Repository-wide
JS build/typecheck commands exclude this Apple-dependent example. Run
`pnpm run ffi-codegen:check` on macOS arm64 to check both Apple targets explicitly.

The first generation downloads the pinned CastXML frontend, unless `FLAX_CASTXML` points
to a compatible local executable. The example displays `Counter: 42` and logs
`FLAX_FFI_CODEGEN_EXAMPLE_RESULT {"value":42}`. GC or Session close releases the C
Counter without a manual `close()`.

For an iOS Simulator build, select that target for the normal JS build and then use the
matching V8 jitless engine:

```sh
FLAX_TARGET=ios-arm64-simulator pnpm --filter @flax/example-ffi-codegen build
cd packages/flax_ffi_codegen/example/app
flutter pub get
flutter --local-engine-src-path="$FLAX_ENGINE_SOURCE" \
  --local-engine=flax_ios_debug_sim_arm64 --local-engine-host=flax_mac_debug_arm64 \
  run -d <simulator-id>
```

Run that JS command from the repository root. A profile generated for a different
Flutter target fails before linking and asks for the correct JS rebuild. Do not edit
`src/generated/counter`; change the header or recipe and rebuild.

## Follow the code

1. [counter.h](js/native/counter.h) declares the C ABI. [counter.c](js/native/counter.c)
   allocates and releases a Counter.
2. [native.json](js/native.json) selects symbols and explicitly pairs construction with
   destruction. The ordinary build adapter reads the recipe automatically.
3. [main.ts](js/src/main.ts) opens the packaged code asset and uses the generated class.
   It supplies no Dart or native signature declarations.
4. [build.mjs](js/build.mjs) prepares shared host modules and the private native build
   package. Build JS before `flutter pub get`; rebuild Flutter when native inputs
   change.

For exact-once GC checks and packaged external-consumer validation, see the
[runtime acceptance runner](../test/runtime/README.md).
