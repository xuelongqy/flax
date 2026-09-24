# Architecture

## Status

Implemented: Pub/Melos and pnpm workspaces, static checks, JS package compilation, C ABI
generation, and an experimental Dart/C ABI/JSI runtime on macOS arm64. Runtime
verification includes native tests, Dart integration, and independent JIT/AOT package
loading. Generated Flutter/Material bindings, signals, and a real embedded Flutter host
implement local property and dynamic subtree updates; see [UI lifecycle](ui.md).

Synchronous generated callbacks also support Builder/LayoutBuilder, borrowed Context
references, selected static methods, and readonly constraint references. The binding
protocol is version 21, including shared generic owners and State variants under
[ADR 0035](../decisions/0035-generic-state-variants-and-protocol-21.md). The native ABI
remains 2.

Shared and nested Navigator bindings, explicit sessions, Route-owned callbacks, and
Future delivery, named page entries, and declarative Pages are described in
[navigation and sessions](navigation.md).

The intended product uses pure JS to describe Flutter interfaces in embedded and
standalone applications. Flutter owns widgets, layout, painting, and native resources.

## Layers

| Layer                  | Owner                          | Responsibility and status                                               |
| ---------------------- | ------------------------------ | ----------------------------------------------------------------------- |
| Core Dart and JS       | `packages/flax` / `@flax/core` | Runtime, host environment, sessions, Flutter bindings, and signals      |
| Extension packages     | `packages/flax_*`              | Material bindings, host plugins, and their package-local tests/examples |
| Shared native runtime  | `packages/flax/native`         | C ABI, JSI operations, references, callbacks, errors, and bytes         |
| Engine adaptation      | `packages/flax_engine_*`       | Pinned engine inputs, adapters, prepared assets, and engine tests       |
| Binding generator      | `packages/flax_codegen`        | Public API analysis, manifests, explicit selection, and Dart/TS output  |
| Aggregate applications | `examples/*`                   | Multi-package integration, outside consumption, and release checks      |

Application JS may use only engine language features and the host APIs installed by the
selected session plugins. Repository maintenance commands belong in `tool/`.

## Runtime path

The implemented synchronous path is:

```text
Dart FlaxJsRuntime
  -> shared Dart FFI wrapper
  -> versioned C function table
  -> shared JSI operations
  -> Hermes or V8
  -> synchronous Dart host callback (which may reenter JS)
```

The engine package supplies the native asset entry point; core Dart code does not know
its library name or filesystem path. See [execution and lifetime](runtime.md).

The UI path adds JS descriptors -> generated factories -> native Widgets. Flutter events
invoke JS callbacks, and signals invalidate individual mounted properties for the next
frame. Dynamic children are reconciled by Flutter Elements, not a second JS tree engine.

## Build-time paths

Implemented C ABI generation:

```text
Canonical Flax C headers -> isolated ffigen tool -> committed Dart FFI declarations
```

Implemented Flutter API generation:

```text
Public Dart APIs + package-owned binding rules and dependency manifests
  -> flax_codegen
  -> package-owned JS/TS bindings, Dart factories, and metadata
```

These are separate tools and ownership boundaries; see
[binding generation](bindings.md).
[External Binding Verification](external-binding-verification.md) defines the current
evidence levels. The [binding coverage map](binding-coverage-map.md) distinguishes
current support and proposed selection growth
([ADR 0018](../decisions/0018-binding-coverage-strategy.md)).

## Package boundaries

Each capability is owned by one directory under `packages/`. Core Dart `flax` owns the
runtime interfaces and shared bridge; `@flax/core` owns signals, host declarations, and
the generated Flutter entry. Engine packages import the public
`flax/native_runtime.dart` extension entry, never another package's `lib/src`. Material
and optional host capabilities stay in extensions that depend only on core. Core never
depends on a concrete engine.

Binding extensions import declaration metadata from versioned package manifests. They do
not read another package's selection YAML, test fixtures, or private sources. Package
examples demonstrate one capability; top-level examples demonstrate composition. See
[package boundaries](packaging.md) and
[ADR 0017](../decisions/0017-package-boundaries.md).

Hermes remains the repository command and example default only. That is not a product
default-engine choice; product default engine and per-platform selection remain open
(see [open questions](../decisions/open-questions.md)). V8 is an explicit experimental
alternative; QuickJS-NG remains reserved. Distribution and generation are described in
[packaging](packaging.md).

[Owned Dart objects](objects.md) describes generated Controller references, paired
listeners, borrowed Widget parameters, and named-page cleanup.

TextEditingController and Material TextField support real input with Dart-built readonly
editing references and local signal updates. See [text input](text-input.md).

Generated styling and host/local Material themes reuse the object and Context paths. See
[styles and themes](styles.md) for API selections and Flutter dependency semantics.

Generated ListView.builder and independent callback results are described in
[lazy lists](lists.md).

Generated Expanded/Flexible, Stack/Positioned and Align preserve Flutter ParentData and
directional alignment. See [layout semantics](layout.md).

Container, decoration and directional geometry reuse generated object and Widget
bindings. See [decoration semantics](decoration.md).

[Custom components and State](components.md) describe real Flutter lifecycle, explicit
super calls, per-mount ownership and independent signal updates.

[Widget interfaces and page shells](widget-interfaces.md) describe fixed configuration,
native preferred sizes and generated Scaffold/AppBar bindings.

[Standalone applications](applications.md) create MaterialApp in JS and verify
outside-repository package consumption and relocated macOS release UI.

See [session host plugins and Fetch](host.md) for optional capabilities and the base
environment.

- [WebSocket plugin](websocket.md): client options, transport observations and limits.

[Top-level functions and native dialogs](functions.md) describe typed named exports and
explicit Navigator observation for Route callback lifetime.

[Proxy properties](proxy-properties.md) cover generated get/set implementations and
native ValueListenable consumers.

- [Persistent localStorage and namespaces](local-storage.md).

- [Canvas 2D](canvas.md): command buffer, rAF, and generated input snapshots.
