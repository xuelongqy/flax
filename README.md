# Flax

Flax is an experimental framework for describing Flutter interfaces with JavaScript. The
intended use cases are embedding mini-app-style interfaces in existing Flutter
applications and developing standalone applications.

**Current status: workspace scaffold only.** Dart and JS packages have empty library
entry points. There is no runnable GUI, component binding, signal implementation, JSI
bridge, or working JS engine integration.

## Quick start

Use the pinned toolchain below, plus CMake 3.24 or newer and a C/C++ compiler. Run these
commands from the repository root:

```sh
flutter pub get --enforce-lockfile
pnpm install --frozen-lockfile
dart run melos run check
```

The checks analyze Dart, verify formatting, type-check and compile the JS package
scaffolds, validate documentation, and configure CMake. They do not build an engine or
exercise a Flutter/JS runtime.

## Toolchain

| Tool    | Baseline                     | Configuration                  |
| ------- | ---------------------------- | ------------------------------ |
| Flutter | 3.47.0 stable                | [.fvmrc](.fvmrc)               |
| Dart    | 3.13.0, bundled with Flutter | [pubspec.yaml](pubspec.yaml)   |
| Node.js | 22.23.0                      | [.node-version](.node-version) |
| pnpm    | 11.24.0                      | [package.json](package.json)   |
| Melos   | 8.6.0                        | [pubspec.yaml](pubspec.yaml)   |

FVM is optional; the Flutter executable on PATH must use the configured version. Melos
runs through `dart run`, so a global Melos installation is unnecessary. Commit both
workspace lockfiles. CI uses the same pinned toolchain.

## Repository map

| Directory                          | Responsibility                                               |
| ---------------------------------- | ------------------------------------------------------------ |
| [packages](packages/README.md)     | Dart and Flutter packages                                    |
| [js](js/README.md)                 | TypeScript packages and developer CLI scaffold               |
| [native](native/README.md)         | C ABI boundary, native runtime, and engine adapter locations |
| [bindings](bindings/README.md)     | Binding-generation rules and adaptation boundaries           |
| [examples](examples/README.md)     | Standalone and embedded application placeholders             |
| [tests](tests/README.md)           | Future cross-package behavior verification                   |
| [benchmarks](benchmarks/README.md) | Future performance measurements                              |
| [tool](tool/README.md)             | Repository maintenance tools                                 |
| [docs](docs/README.md)             | Architecture, decisions, and task templates                  |

## Development

Read [CONTRIBUTING](CONTRIBUTING.md) for setup and scoped checks. AI coding agents
should start with [AGENTS.md](AGENTS.md). The
[architecture overview](docs/architecture/README.md) separates planned behavior from
implemented infrastructure.

All Dart packages are non-publishable and all JS packages are private. The `@flax/*`
names are local workspace identifiers; registry availability has not been established. A
project license has not yet been selected.
