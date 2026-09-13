# flax_engine_hermes

Provides `FlaxHermesEngine.createRuntime()` and a Dart native asset hook for the
experimental macOS arm64 runtime, targeting macOS 15 or newer. Hermes is the first
adapter, not the default-engine choice. Version 0.0.0 is non-publishable.

## Prepare and run

From the repository root, with the pinned Flutter/Dart SDK, Xcode command-line tools,
CMake, and Ninja:

```sh
flutter pub get --enforce-lockfile
dart run melos run native:build
```

The build prepares assets in the ignored `native/generated/macos_arm64/` directory
inside this package. The build hook only validates and registers them. Missing assets or
unsupported targets fail explicitly; no implicit download, build, or absolute-path
fallback exists.

A distributable archive contains the Dart API, asset hook, prepared dylib and manifest,
and the consolidated root `THIRD_PARTY_NOTICES.txt`. CMake files, adapter source,
download inputs, patches, and the detailed generated notice tree remain repository-only.
The package metadata has the `engine` capability and no npm peer.

A consumer can use the shared runtime API:

```dart
import 'package:flax/runtime.dart';
import 'package:flax_engine_hermes/flax_engine_hermes.dart';

void main() {
  final runtime = FlaxHermesEngine.createRuntime();
  try {
    runtime.registerHostFunction('doubleIt', (_, args) {
      return FlaxJsNumber((args.single as FlaxJsNumber).value * 2);
    });
    final result = runtime.evaluate('doubleIt(21)') as FlaxJsNumber;
    print(result.value);
  } finally {
    runtime.dispose();
  }
}
```

Calls are synchronous and owned by one Dart isolate. Promise jobs require an explicit
`drainMicrotasks()` call. There are no timers, networking, modules, automatic
Future/Promise conversion, or Flutter widget APIs.

The adapter enables ES6 block scoping for source evaluation, including `eval` and the
`Function` constructor. Loop closures keep their per-iteration lexical bindings without
application-level rewriting. See the
[source compilation contract](../../docs/architecture/runtime.md#source-compilation).

## Ownership and verification

Engine creation/configuration lives in [native](native/README.md). Shared bridge logic
stays in [`packages/flax/native`](../flax/native/README.md) and the public
`flax/native_runtime.dart` extension. This package does not duplicate it or import
another package's `lib/src`.

From the root, `dart run melos run check:runtime` runs native tests, this package's real
[integration tests](integration_test/runtime_test.dart),
[loop closure regressions](integration_test/loop_closures_test.dart), and
outside-repository JIT/AOT loading verification. See
[packaging](../../docs/architecture/packaging.md) for what is copied and checked. A
temporary package validation carries prepared assets and consolidated upstream notices;
registry publication and other platforms are not validated here.
