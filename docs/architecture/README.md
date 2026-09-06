# Architecture

## Status

Implemented infrastructure: Pub/Melos and pnpm workspaces, empty package entry points,
static checks, JS compilation, documentation checks, and a CMake configuration project.

Planned product behavior: a pure-JS frontend that uses Flutter widgets, layout,
painting, animation, and native resources. It should support both embedded
mini-app-style interfaces and standalone applications.

## Layers

| Layer              | Owner                                  | Intended responsibility                                       |
| ------------------ | -------------------------------------- | ------------------------------------------------------------- |
| Flutter host       | Dart `flax`                            | Container, lifecycle, Flutter scheduling, and base bindings   |
| JS runtime library | JS `runtime`                           | Signals, binding descriptors, and host API surfaces           |
| Component bindings | Dart/JS UI packages                    | Generated component, value, and callback mappings             |
| Native runtime     | `native`                               | JSI access, C ABI, reference management, and value conversion |
| Engine adaptation  | Native adapter and Dart engine package | Engine creation, configuration, loading, and distribution     |
| Binding generator  | Dart `flax_codegen`                    | Dart API analysis and code/metadata generation                |
| Developer CLI      | JS `cli`                               | Future project creation, bundling, and development commands   |

The JS CLI can eventually run on Node.js. Application runtime JS must not assume that
Node.js or browser globals exist.

## Runtime path

The intended synchronous call path is:

```text
JS application and runtime library
  <-> embedded JS engine through JSI
  <-> Flax native runtime and C ABI
  <-> Dart host and Flutter
```

This is not implemented. JSI does not automatically solve Dart callbacks, thread
ownership, microtask scheduling, or resource disposal. See [runtime design](runtime.md).

## Build-time path

```text
Public Dart APIs + binding rules
  -> flax_codegen
  -> JS/TS bindings + Dart factories + binding metadata
```

C ABI headers will separately generate Dart FFI declarations using ffigen. These are
different generation tasks. Neither is implemented or exposed as a working command
today. See [binding generation](bindings.md).

## Package boundaries

`flax` initially owns Flutter base bindings. Material and Cupertino bindings are
separate, following the independent upstream packages. The base Flutter host does not
select or depend on a concrete engine package.

JS UI packages depend on `@flax/flutter` and `@flax/runtime`. The generator and CLI are
development tools and are not application runtime dependencies.

The Hermes package is an engine-distribution placeholder. It does not select Hermes as
the default. Other engines have reserved native adapter locations.

Read [packaging](packaging.md) for dependency ownership and release constraints, and
[open questions](../decisions/open-questions.md) for decisions still needed.
