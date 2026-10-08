# Historical SDK platform verification

This guide records the previous standalone SDK deployment. It does not certify the
maintained Flutter engine. Current macOS arm64 gates are documented in
[runtime verification](architecture/runtime.md#verification); other platform engine
integration is pending. SDK attachments and their historical evidence remain unchanged.
The former platform workflows, including the manual entry, are removed. Current
[CI policy](#ci-policy) covers static checks only.

Flax consumes the 24 engine SDK archives from `flax_js_runtime` release `v0.3.0-rc.3`.
Their manifest version is `0.3.0`, schema 3. The engine hooks select by the **build
target**, including the iOS device/simulator SDK. They compile Flax's ABI 2 and adapter;
no engine source build occurs here. Target wiring is distinct from runtime or
application acceptance. See [the validation record](tasks/platform-sdk-validation.md).

Windows CI prepares CDB and checks capture of a real native child-process fault before
validation. Self-test evidence stays under `ci/debugger-self-test/`. Failed independent
Dart JIT/AOT or engine coexistence consumers are replayed under the debugger before
their temporary inputs are deleted. Up to three attempts, each limited to two minutes,
attempt to preserve first-chance access violations, fail-fast events, stacks, loaded
modules and minidumps in the verification artifact's `ci/windows-crash-*` directories.
`crash.json` records the original exit code; debugger replay never changes a failed test
into runtime acceptance.

## One entry point

Only `--list` remains available. Execution through this historical entry is retired and
fails before fetching or building SDKs; the commands below record the former deployment.

```sh
dart run tool/check_platform.dart --target=linux-x64 --engine=all --scope=all
dart run tool/check_platform.dart --target=windows-arm64 --scope=platform --list
dart run tool/check_platform.dart --target=android-arm64 --device=<flutter-device-id>
dart run tool/check_platform.dart --target=ios-device-arm64 --build-only
```

The default is the current desktop process target, both engines, and `all`.
`--engine=hermes|v8|all`, `--scope=all|platform|ui`, `--list`, `--device` and
`--build-only` are explicit options. A missing tool, incompatible process ABI, missing
device or failed assertion is an error. `--list` does not build or fetch. Mobile
execution requires a device ID from `flutter devices --machine`.

Supported target names are macOS/Linux/Windows with `-x64` or `-arm64`, Android with
`-arm32`, `-arm64` or `-x64`, and `ios-device-arm64`, `ios-simulator-arm64`,
`ios-simulator-x64`.

`all` runs each engine's shared contracts and UI tests, native assertions, platform
checks and an external Flutter application. Linux x64 also runs the common engine-free
`melos check` and FFI reproducibility gate once. Other targets prepare their JS/test
bundles and use the same-head Linux CI gate for common logic; for standalone local
validation, run `dart run melos run check` separately. Desktop checks include package
examples and the aggregate application. Mobile checks import the same package-owned UI
assertions into a device application; fixtures and TLS material are prepared on the
host. `platform` runs the native contracts, ABI/architecture/dependency checks, a small
identity/UTF-16/reentry smoke subset, loop-closure checks and application
startup/delivery. Both engines also undergo shared-library byte comparison and
coexistence/callback reentry.

`ui` is explicitly partial coverage: it runs selected UI assertions and the existing
platform/runtime/application safety checks, without the common full gate, complete
runtime suite or desktop examples/aggregate. `--package=<owner>` and
`--file=test/ui/<name>_test.dart` are accepted only with `ui`; `all` rejects filters.
Both full and focused commands use the same collector and original assertions. Each
engine runs one combined desktop test process or one mobile UI application. Additional
runtime, coexistence and relocation applications remain separate.

`--build-only` compiles bridges and an external application, checks their native assets
and records `ran: false` and `applicationDelivered: false`. It never substitutes for
device execution. An iOS simulator uses Dart JIT because Flutter does not support
release/AOT simulator builds. Android and real iOS devices run debug shared assertions
and a relocated release/AOT test bundle; the real iOS bundle must be signed. V8's JIT is
verified by actual machine-code events on non-iOS targets; iOS uses the SDK's jitless
build. Dart JIT/AOT and V8 JIT/jitless are recorded separately.

Android and iOS simulator tests prebuild the requested ABI, launch through ADB or
simctl, and collect a unique completion marker from fresh device logs. They do not
depend on Flutter Driver's VM-service discovery. Real iOS debug tests retain Flutter
Driver because Dart JIT requires a debugger. Native contract failures participate in the
integration binding's failure report; launch/marker timeouts fail the check.

iOS integration setup renders a semantics tree inside the live binding's `runTest`
before widget tests record their handle baseline. It disposes its own handle and checks
that only a platform-owned handle remains, if requested. The UI tests retain their
normal semantics and leak assertions.

## Test ownership and conditions

| Classification       | Owner and behavior                                                                                             | Execution and conditions                                                                                                                      |
| -------------------- | -------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Common logic         | Package `test/`, JS tests, `flax_codegen`, generated bindings, protocol and scheduling                         | `melos check`, once on Linux; does not fetch engines                                                                                          |
| Shared runtime       | `flax_test` runtime/loop contracts and engine `integration_test/`                                              | Both engines; desktop Dart tests or device Flutter tests; identity, reentry, UTF-16, transfer, microtasks and disposal                        |
| Shared UI            | Discovered package `test/ui/*_test.dart`; core, Material, Cupertino, Fetch, WebSocket, localStorage and Canvas | Headless desktop with VM service or debug device app; test viewport is 800×600, assets preloaded; actual GC needs VM service                  |
| Engine-specific      | Engine-native CTest and test-only native entry                                                                 | Hermes block scoping/transfer, V8 lifecycle and actual JIT or iOS jitless; native assertions remain enabled in release builds                 |
| Platform/application | `tool/src/platform_binary.dart`, external app, package examples and aggregate                                  | ELF/Mach-O/PE ABI and dependency checks, Linux glibc baseline, Windows DLL/CRT, APK ABI, Apple framework references/signatures and relocation |

Core headless UI tests run unchanged from a temporary consumer root, avoiding the
build-hook cycle from Flax's own dev engine. Canonical test paths keep their generated
provider identity. Staged platform projects use Flutter's empty template and retain
existing example tests.

A mocked `TargetPlatform` remains a shared assertion. Fake-clock timing assertions run
with `AutomatedTestWidgetsFlutterBinding`; live device tests assert asynchronous
completion without assuming a real frame finishes in 19 ms. VM-service GC runs in
debug/headless suites, not the AOT application smoke. The optional `testContracts` hook
input builds a separate test library from existing native contracts. Production bridges
and the production ABI do not gain test exports.

## Toolchains and delivery

| Target                  | Minimum runtime          | Bridge toolchain                                                                |
| ----------------------- | ------------------------ | ------------------------------------------------------------------------------- |
| Linux x64/arm64         | Ubuntu 20.04, glibc 2.31 | Clang 23, CMake 3.24+, Ninja; V8 uses SDK libc++                                |
| Windows x64/arm64       | Windows 11               | Installed Visual Studio C++ and matching Windows SDK; LLVM tools for inspection |
| macOS x64/arm64         | macOS 15.0               | Xcode 26.6 in CI, CMake 3.24+, Ninja                                            |
| Android arm32/arm64/x64 | API 24                   | NDK `30.0.16248370`, CMake 3.24+, Ninja, LLVM inspection tools                  |
| iOS device/simulator    | iOS 15.0                 | Xcode 26.6 in CI; device execution requires signing                             |

Set `ANDROID_NDK_HOME` to the exact NDK. Local device signing can use
`FLAX_IOS_TEAM=<10-character-team-id>`; it only changes staged test projects. Flutter's
bundler owns framework naming, dependency rewriting and signing. SDK cache files are
never rewritten. DLL import libraries are link inputs, not code assets. The final
package is checked for the complete runtime closure and the selected architecture, and
copied applications are executed independently of original build outputs.

Desktop checks launch prebuilt debug applications directly and execute a relocated copy
of the release test application after removing its source and build trees. They do not
depend on a Flutter Driver VM-service connection or rebuild the same release entrypoint.
Runtime-only contracts use ordinary tests and record failures explicitly in the
integration receipt; UI assertions retain Flutter's widget and semantics checks.

The pinned Flutter release has no Linux/Windows ARM64 SDK archive. Those CI hosts
install Flutter from its exact stable Git tag and download the matching native Dart SDK
through Flutter's bootstrap scripts. No Flutter or JavaScript engine is compiled.

Consumer projects must set their deployment minima to macOS/iOS 15.0 or Android API 24.
The bridge uses those SDK minima even when Dart's hook input has an older default. An
Android ARM64 device can also verify ARM32 when `ro.product.cpu.abilist` includes
`armeabi-v7a`; the checker prebuilds the requested APK ABI and verifies the running
process ABI. It never substitutes the device's preferred architecture. The disposable
macOS project explicitly excludes the other architecture, so Flutter's release hook
build consumes only the SDK selected by `--target`.

SDK cache keys use archive hashes and targets. Set `FLAX_ENGINE_SDK_CACHE` for a shared
verified download cache in native/Dart commands; default hook caches stay under the hook
output. Flutter can filter custom environment variables when running hooks, so external
runtime/UI/example/application verification supplies an available cached archive and
locked hash using the existing `sdkArchive`/`sdkSha256` inputs. It still validates that
archive and the extracted SDK. Receipt and diagnostic discovery excludes extracted SDK
cache trees, whose notice paths can exceed Windows' path limit. Bridge builds remain
CMake incremental builds with hook source dependencies. `sdkArchive` plus `sdkSha256`
under the engine's `hooks.user_defines` supports a local candidate archive with
identical validation. No fallback source engine build is attempted. On Android/Windows,
also set those candidate inputs for `flax_native_assets`. This shared dependency
registers C++/CRT assets once and each engine checks byte equality.
`dart test tool/test/native_sdk_test.dart` checks corrupt archives, wrong targets,
missing dependencies, unsafe paths, atomic/concurrent preparation and offline cache
behavior.

## CI policy

Every PR/main push runs [static workspace checks](../.github/workflows/check.yml) on
Ubuntu 24.04 with the repository's locked Flutter/Dart, Node.js and pnpm versions.
`melos check` covers host scripts, bindings, JS fixtures and tests, generator and tool
tests, analysis, formatting, types, documentation, package archives and CMake
configuration. `ffi:check` verifies generated declarations separately. Ordinary package
unit tests use the standard Flutter tester and do not require a local Flax engine. Flax
runtime and UI gates still require the maintained engine. The reusable
[package archive workflow](../.github/workflows/packages.yml) also validates a
disposable pack receipt and uploads the same-checkout archive proof. Neither job
publishes packages or fetches or builds a JavaScript engine.

The `result` job requires both jobs to succeed, including when an upstream job fails or
is cancelled. The workflow summary explicitly states that runtime, UI and platform
acceptance were not executed. The former SDK platform workflow, manual runtime entry and
shared platform preparation workflow are removed. Maintained-engine runtime CI is
pending; current macOS arm64 acceptance uses the local engine application gates.

## Historical receipts

The former SDK matrix wrote `build/platform/<target>/verification.json`. Each engine
recorded build, runtime and application stages independently; timeouts retained partial
evidence. Device jobs without execution remained **build-only**. These receipts remain
historical evidence and do not certify the maintained-engine integration.
