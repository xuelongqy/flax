# Flax

Flax is an experimental framework for describing Flutter interfaces with JavaScript. The
intended use cases are embedding mini-app-style interfaces in existing Flutter
applications and developing standalone applications.

**Current status: experimental embedded and standalone UI on macOS arm64.** Pure JS uses
generated Flutter/Material bindings and explicit signals to update real Flutter widgets,
including conditional and keyed subtrees. Owning FlaxViews create a runtime through
their supplied factory; explicit FlaxSessions can span multiple Routes using the
existing C ABI/JSI bridge. Runtime tests also cover standalone JIT and relocated AOT
loading. See the [embedded example](examples/embedded/README.md) and
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
timers, URL, encoding and cancellation APIs. Optional `flax_fetch` installs Fetch and
byte streams per session. Bare runtimes remain explicit and engine-only.

Generated dart:async bindings provide lazy, bidirectional Stream references,
controllers, subscriptions, transforms, AsyncIterable conversion and native Flutter
StreamBuilder. They remain separate from Fetch Web Streams. See
[Dart interop](docs/architecture/interop.md#dart-stream-and-futureor-ui-protocol-20).

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

On macOS arm64 (macOS 15 or newer), install Xcode command-line tools and Ninja, then
run:

```sh
dart run melos run check:ui
```

This explicitly downloads checksum-pinned Hermes source, builds the native library,
prepares package-local assets, and runs runtime, packaging, Flutter Widget, and macOS
app integration tests, followed by a release build. To launch the example afterward, run
`dart run melos run example:run`. Hermes remains the default for repository commands and
examples. Experimental V8 15.2.124.21 is available explicitly with `native:build:v8` and
`check:ui:v8`; see the [V8 adapter](packages/flax_engine_v8/native/README.md) and
[validation record](docs/tasks/v8-support.md). See the
[runtime package](packages/flax_engine_hermes/README.md) and
[packaging instructions](docs/architecture/packaging.md).

## Toolchain

| Tool    | Baseline                     | Configuration                  |
| ------- | ---------------------------- | ------------------------------ |
| Flutter | 3.47.2 stable                | [.fvmrc](.fvmrc)               |
| Dart    | 3.13.2, bundled with Flutter | [pubspec.yaml](pubspec.yaml)   |
| Node.js | 22.23.0                      | [.node-version](.node-version) |
| pnpm    | 11.24.0                      | [package.json](package.json)   |
| Melos   | 8.6.0                        | [pubspec.yaml](pubspec.yaml)   |

FVM is optional; the Flutter executable on PATH must use the configured version. Melos
runs through `dart run`, so a global Melos installation is unnecessary. Commit both
workspace lockfiles. CI uses the same pinned toolchain.

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
JS. Use `dart run melos run standalone:run` with prepared Hermes assets. External source
consumption and relocated release validation are described in
[application startup](docs/architecture/applications.md).

Optional [localStorage](docs/architecture/local-storage.md) uses Hive CE and session
namespaces. Applications explicitly initialize persistence before creating sessions.
