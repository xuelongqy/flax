# Flax

Flax is an experimental framework for describing Flutter interfaces with JavaScript. The
intended use cases are embedding mini-app-style interfaces in existing Flutter
applications and developing standalone applications.

**Current status: experimental embedded and standalone UI on macOS arm64.** Pure JS uses
generated Flutter/Material bindings and explicit signals to update real Flutter widgets,
including conditional and keyed subtrees. Owning FlaxViews create a runtime through
their supplied factory; explicit FlaxSessions can span multiple Routes using the
engine-owned C ABI/JSI bridge. Flax requires its maintained Flutter 3.47.6 engine; macOS
arm64 uses V8 JIT. Dart and JS business references participate in joint GC. See the
[embedded example](examples/embedded/README.md) and
[host contract](docs/architecture/ui.md).

Generated Builder and LayoutBuilder callbacks run during Flutter build/layout. JS can
read real BuildContext.mounted, call Directionality.of(context), and read immutable
BoxConstraints fields. Flutter owns dependency tracking and Element lifetimes.

JS can use the host Navigator or create a nested Navigator. Sessions, Route lifetimes,
structured results, and Promise delivery are described in the
[navigation contract](docs/architecture/navigation.md). Named page factories support
direct host Router entry and readonly reactive parameters. Both host native Pages and JS
Navigator.pages use Flutter's actual page matching and transitions.

Generated ScrollController bindings support real scrolling, paired listeners, and
explicit disposal. Named page factories can register synchronous cleanup after content
unmount. See [owned Dart objects](docs/architecture/objects.md).

Sessions install a [base host environment](docs/architecture/host.md) with Console,
timers, URL, encoding, cancellation, data containers and Web Streams. Optional
`flax_fetch` installs HTTP Fetch using those shared base types. Bare runtimes remain
explicit and engine-only.

Generated dart:async bindings provide lazy, bidirectional Stream references,
controllers, subscriptions, transforms, AsyncIterable conversion and native Flutter
StreamBuilder. They remain separate from Fetch Web Streams. See
[Dart interop](docs/architecture/interop.md#dart-stream-and-futureor-ui-protocol-22).

## Quick start

Use the pinned toolchain below, plus CMake 3.24 or newer and a C/C++ compiler. Run these
commands from the repository root:

```sh
flutter pub get --enforce-lockfile
pnpm install --frozen-lockfile
dart run melos run check
```

The checks verify generated bindings, generator and JS tests, JS compilation and
example/test bundling, Dart analysis, formatting, documentation, and CMake
configuration. They do not download or build an engine or run platform UI tests.

Use the [Flutter fork](https://github.com/xuelongqy/flutter) on `flax/main` with its
matching local engine. macOS arm64 requires macOS 15 or newer, Xcode and Ninja. Build
artifacts from the fork using its revision-checked helper and an already verified V8
SDK:

```sh
python3 engine/src/flutter/flax/tools/build_engine.py --sdk /path/to/verified/v8-macos-arm64 --mode debug
```

The Flax workspace tools select `flax_mac_debug_arm64` through Flutter's official local
engine flags. Select the fork before running commands:

```sh
export FLUTTER_ROOT=/path/to/flutter-fork
export PATH="$FLUTTER_ROOT/bin:$PATH"
flutter pub get --enforce-lockfile
dart run melos run check:runtime
dart run melos run check:ui
dart run tool/check_engine_application.dart debug
```

Build matching `profile` and `release` artifacts in the fork before selecting those
modes in `check_engine_application.dart`. This gate runs runtime and real Widget/State,
callback, Future and Stream contracts in a macOS application. Current acceptance is
tracked in the [engine acceptance task](docs/tasks/engine-cross-heap-gc.md).

Android arm64 uses the same engine-owned V8 JIT and joint GC. Build matching debug and
release Android engines in the Flutter fork with `--target android-arm64`, using its
verified Android V8 SDK and matching macOS host tools. Then run the real APK gate:

```sh
export ANDROID_HOME=/path/to/android-sdk
export FLAX_CHECK_TARGET=android-arm64
export FLAX_CHECK_DEVICE=emulator-5554
dart run tool/check_engine_application.dart debug
dart run tool/check_engine_application.dart release
```

Android arm64 debug and release/AOT correctness passes on the API 37 emulator with 16 KB
pages and a Pixel 4 running Android 13 with 4 KB pages. Both verify V8 JIT and joint GC.
Android GC/frame performance and complete platform UI coverage remain pending. Use the
phone's ADB ID in `FLAX_CHECK_DEVICE` for physical-device checks.

For the iOS arm64 simulator, build the Hermes debug engine and matching macOS debug host
tools in the Flutter fork:

```sh
python3 engine/src/flutter/flax/tools/build_engine.py --target ios-simulator-arm64 --mode debug
```

Then select a booted simulator from the Flax checkout:

```sh
export FLAX_CHECK_TARGET=ios-simulator-arm64
export FLAX_CHECK_DEVICE=<simulator-id>
dart run tool/check_engine_application.dart debug
```

This gate builds a temporary application with an iOS 16.3 minimum, verifies the embedded
Hermes interpreter without JIT, and exercises runtime, Widget and joint-GC contracts.
For a physical arm64 iPhone, build the matching release engine in the Flutter fork:

```sh
python3 engine/src/flutter/flax/tools/build_engine.py --target ios-device-arm64 --mode release
```

Build `flax_mac_release_arm64` host tools first, then select the connected device and
your development signing team from the Flax checkout:

```sh
export FLAX_CHECK_TARGET=ios-device-arm64
export FLAX_CHECK_DEVICE=<iphone-id>
export FLAX_IOS_TEAM=<team-id>
dart run tool/check_engine_application.dart release
```

The device gate verifies real signing, provisioning, Dart AOT and the relocated engine
before installation. Simulator profile/release and physical-device debug/profile are
currently unsupported. Hermes GC/frame performance and distribution signing require
separate acceptance.

Platform selection is fixed: iOS Hermes, other native targets V8 JIT. macOS, Android
arm64, iOS arm64 simulator debug and iOS arm64 device release are implemented. Ordinary
Flutter, mismatched revisions and unsupported runtime isolates fail explicitly; there is
no independent SDK runtime fallback. See
[engine ownership](docs/decisions/0039-engine-owned-cross-heap-gc.md).

## Toolchain

| Tool    | Baseline                     | Configuration                  |
| ------- | ---------------------------- | ------------------------------ |
| Flutter | 3.47.6 stable                | [.fvmrc](.fvmrc)               |
| Dart    | 3.13.5, bundled with Flutter | [pubspec.yaml](pubspec.yaml)   |
| Node.js | 22.23.0                      | [.node-version](.node-version) |
| pnpm    | 11.24.0                      | [package.json](package.json)   |
| Melos   | 8.6.0                        | [pubspec.yaml](pubspec.yaml)   |

FVM is optional; the Flutter executable on PATH must use the configured version. Melos
runs through `dart run`, so a global Melos installation is unnecessary. Commit both
workspace lockfiles. Default CI runs the complete static workspace and package archive
checks. The former SDK platform workflows are retired; maintained-engine runtime CI is
pending.

## Repository map

| Directory                          | Responsibility                                                                |
| ---------------------------------- | ----------------------------------------------------------------------------- |
| [packages](packages/README.md)     | Capability packages with Dart, JS, bindings, tests, native code, and examples |
| [examples](examples/README.md)     | Multi-package embedded and standalone applications                            |
| [tests](tests/README.md)           | Cross-engine fixtures that do not belong to one capability package            |
| [benchmarks](benchmarks/README.md) | Independent engine performance measurements                                   |
| [tool](tool/README.md)             | Convention-based package discovery and repository orchestration               |
| [docs](docs/README.md)             | Cross-package architecture, decisions, and task templates                     |

## Development

Read [CONTRIBUTING](CONTRIBUTING.md) for setup and scoped checks. AI coding agents
should start with [AGENTS.md](AGENTS.md). The
[architecture overview](docs/architecture/README.md) separates implemented behavior from
future work.

All Dart packages are non-publishable and all JS packages are private. The `@flax/*`
names are local workspace identifiers; registry availability has not been established. A
project license has not yet been selected.

TextEditingController and Material TextField support real input with Dart-built readonly
editing references and local signal updates. See
[text input](docs/architecture/text-input.md).

Generated Color, FontWeight, TextStyle and Material input decoration support styled
content. Theme.of reads the host theme; JS can create local Theme, ThemeData, TextTheme
and seeded ColorScheme values. See [styles and themes](docs/architecture/styles.md).

Generated ListView.builder supports on-demand children, keyed reorder and local signals.
See [lazy lists](docs/architecture/lists.md).

Generated Expanded/Flexible, Stack/Positioned and Align support flexible space,
positioning and direction-aware alignment. See [layout](docs/architecture/layout.md).

Generated Container/DecoratedBox, borders, corners, insets and constraints support real
Flutter layout and painting. See [decoration](docs/architecture/decoration.md).

JS class-based StatelessWidget and StatefulWidget components use real Flutter State,
explicit super calls and synchronous setState alongside property signals. See
[custom components](docs/architecture/components.md).

Generated Scaffold, AppBar and PreferredSize support JS-owned pages and native Widget
interfaces. Interface-bearing Widgets use fixed arguments and bind their containing
property for changes. See [Widget interfaces](docs/architecture/widget-interfaces.md).

The [standalone application](examples/standalone/README.md) creates its MaterialApp in
JS. Use `dart run melos run standalone:run` with the maintained Flutter engine. External
source consumption and relocated release validation are described in
[application startup](docs/architecture/applications.md).

Optional [localStorage](docs/architecture/local-storage.md) uses Hive CE and session
namespaces. Applications explicitly initialize persistence before creating sessions.

Native SDK target selection and Linux-default/manual platform validation are described
in the [platform test guide](docs/testing-platforms.md). Target wiring and completed
runtime acceptance are tracked separately.
