# Native platform verification

Flax consumes the 24 engine SDK archives from `flax_js_runtime` release `v0.3.0-rc.1`.
Their manifest version is `0.3.0`, schema 3. The engine hooks select by the **build
target**, including the iOS device/simulator SDK. They compile Flax's ABI 2 and adapter;
no engine source build occurs here. Target wiring is distinct from runtime or
application acceptance. See [the validation record](tasks/platform-sdk-validation.md).

## One entry point

```sh
dart run tool/check_platform.dart --target=linux-x64 --engine=all --scope=all
dart run tool/check_platform.dart --target=windows-arm64 --scope=platform --list
dart run tool/check_platform.dart --target=android-arm64 --device=<flutter-device-id>
dart run tool/check_platform.dart --target=ios-device-arm64 --build-only
```

The default is the current desktop process target, both engines, and `all`.
`--engine=hermes|v8|all`, `--scope=all|platform`, `--list`, `--device` and
`--build-only` are explicit options. A missing tool, incompatible process ABI, missing
device or failed assertion is an error. `--list` does not build or fetch. Mobile
execution requires a device ID from `flutter devices --machine`.

Supported target names are macOS/Linux/Windows with `-x64` or `-arm64`, Android with
`-arm32`, `-arm64` or `-x64`, and `ios-device-arm64`, `ios-simulator-arm64`,
`ios-simulator-x64`.

`all` prepares engine-free checks once, runs each engine's shared contracts and UI
tests, native assertions, platform checks and an external Flutter application. Desktop
checks include package examples and the aggregate application. Mobile checks import the
same package-owned UI assertions into a device application; fixtures and TLS material
are prepared on the host. `platform` runs the native contracts,
ABI/architecture/dependency checks, a small identity/UTF-16/reentry smoke subset,
loop-closure checks and application startup/delivery. Both engines also undergo
shared-library byte comparison and coexistence/callback reentry.

`--build-only` compiles bridges and an external application, checks their native assets
and records `ran: false` and `applicationDelivered: false`. It never substitutes for
device execution. An iOS simulator uses Dart JIT because Flutter does not support
release/AOT simulator builds. Android and real iOS devices run debug shared assertions
and a relocated release/AOT test bundle; the real iOS bundle must be signed. V8's JIT is
verified by actual machine-code events on non-iOS targets; iOS uses the SDK's jitless
build. Dart JIT/AOT and V8 JIT/jitless are recorded separately.

## Test ownership and conditions

| Classification       | Owner and behavior                                                                                             | Execution and conditions                                                                                                                      |
| -------------------- | -------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Common logic         | Package `test/`, JS tests, `flax_codegen`, generated bindings, protocol and scheduling                         | `melos check`, once on Linux; does not fetch engines                                                                                          |
| Shared runtime       | `flax_test` runtime/loop contracts and engine `integration_test/`                                              | Both engines; desktop Dart tests or device Flutter tests; identity, reentry, UTF-16, transfer, microtasks and disposal                        |
| Shared UI            | Discovered package `test/ui/*_test.dart`; core, Material, Cupertino, Fetch, WebSocket, localStorage and Canvas | Headless desktop with VM service or debug device app; test viewport is 800×600, assets preloaded; actual GC needs VM service                  |
| Engine-specific      | Engine-native CTest and test-only native entry                                                                 | Hermes block scoping/transfer, V8 lifecycle and actual JIT or iOS jitless; native assertions remain enabled in release builds                 |
| Platform/application | `tool/src/platform_binary.dart`, external app, package examples and aggregate                                  | ELF/Mach-O/PE ABI and dependency checks, Linux glibc baseline, Windows DLL/CRT, APK ABI, Apple framework references/signatures and relocation |

A mocked `TargetPlatform` remains a shared assertion. Fake-clock timing assertions run
with `AutomatedTestWidgetsFlutterBinding`; live device tests assert asynchronous
completion without assuming a real frame finishes in 19 ms. VM-service GC runs in
debug/headless suites, not the AOT application smoke. The optional `testContracts` hook
input builds a separate test library from existing native contracts. Production bridges
and the production ABI do not gain test exports.

## Toolchains and delivery

| Target                  | Minimum runtime          | Bridge toolchain                                                           |
| ----------------------- | ------------------------ | -------------------------------------------------------------------------- |
| Linux x64/arm64         | Ubuntu 20.04, glibc 2.31 | Clang 23, CMake 3.24+, Ninja; V8 uses SDK libc++                           |
| Windows x64/arm64       | Windows 11               | Visual Studio 2022 C++ and matching Windows SDK; LLVM tools for inspection |
| macOS x64/arm64         | macOS 15.0               | Xcode 26.6 in CI, CMake 3.24+, Ninja                                       |
| Android arm32/arm64/x64 | API 24                   | NDK `30.0.16248370`, CMake 3.24+, Ninja, LLVM inspection tools             |
| iOS device/simulator    | iOS 15.0                 | Xcode 26.6 in CI; device execution requires signing                        |

Set `ANDROID_NDK_HOME` to the exact NDK. Local device signing can use
`FLAX_IOS_TEAM=<10-character-team-id>`; it only changes staged test projects. Flutter's
bundler owns framework naming, dependency rewriting and signing. SDK cache files are
never rewritten. DLL import libraries are link inputs, not code assets. The final
package is checked for the complete runtime closure and the selected architecture, and
copied applications are executed independently of original build outputs.

The pinned Flutter release has no Linux/Windows ARM64 SDK archive. Those CI hosts
install Flutter from its exact stable Git tag and download the matching native Dart SDK
through Flutter's bootstrap scripts. No Flutter or JavaScript engine is compiled.

Consumer projects must set their deployment minima to macOS/iOS 15.0 or Android API 24.
The bridge uses those SDK minima even when Dart's hook input has an older default. An
Android ARM64 device can also verify ARM32 when `ro.product.cpu.abilist` includes
`armeabi-v7a`; the checker prebuilds the requested APK ABI and verifies the running
process ABI. It never substitutes the device's preferred architecture.

SDK cache keys use archive hashes and targets. Set `FLAX_ENGINE_SDK_CACHE` for a shared
verified download cache; default hook caches stay under the hook output. Bridge builds
remain CMake incremental builds with hook source dependencies. `sdkArchive` plus
`sdkSha256` under the engine's `hooks.user_defines` supports a local candidate archive
with identical validation. No fallback source engine build is attempted.
`dart test tool/test/native_sdk_test.dart` checks corrupt archives, wrong targets,
missing dependencies, unsafe paths, atomic/concurrent preparation and offline cache
behavior.

## CI policy

Every PR/main push runs Linux x64 `all`, with both engines, in an Ubuntu 20.04 container
on an Ubuntu 24.04 runner. Xvfb supplies desktop display access. The lightweight
full-diff selector handles additions, deletions and both sides of renames; the summary
job always returns a result.

| Changed files                                                       | Additional automatic checks                             |
| ------------------------------------------------------------------- | ------------------------------------------------------- |
| Ordinary Dart/JS/UI assertions or docs                              | None; default Linux full check covers common behavior   |
| One platform's implementation/project/specialty tests               | That platform's related architectures, `platform` scope |
| Shared native ABI, SDK preparation, native assets or device harness | All affected targets, both engines, `platform` scope    |
| One engine adapter/hook/SDK lock                                    | All affected targets for that engine, `platform` scope  |
| Flutter pin, global build dependencies or target rules              | All affected targets, both engines, `platform` scope    |

`.github/workflows/runtime.yml` is manual: select target, engine and scope. It reuses
`.github/workflows/platform.yml`, as do automatic checks. No workflow publishes Flax or
rebuilds an engine. Android x64 runs on an emulator; iOS simulators run on matching CPU
runners. Hosted Android arm32/arm64 and iOS real-device jobs are **build-only**.
Complete their runtime acceptance locally:

```sh
dart run tool/check_platform.dart --target=android-arm32 --engine=all --device=<id>
dart run tool/check_platform.dart --target=android-arm64 --engine=all --device=<id>
FLAX_IOS_TEAM=<team-id> dart run tool/check_platform.dart --target=ios-device-arm64 --engine=all --device=<id>
```

Evidence is written to `build/platform/<target>/verification.json` and uploaded by CI.
Preparation failures also write a receipt with `failedStage` and no successful engine
stages. Each engine records build, runtime and application stages independently. CI
uploads installation and emulator diagnostics from `build/platform/<target>/ci/`;
Android x64 boot has a 10-minute deadline with each ADB call limited to 30 seconds. A
green build-only job means built, not accepted. A failed full assertion blocks full
acceptance even when platform smoke succeeds.
