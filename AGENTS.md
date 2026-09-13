# Working on Flax

## Current scope

Flax implements experimental macOS arm64 Hermes and V8 runtimes and embedded Flutter UI:
generated bindings, explicit signals, dynamic keyed subtrees, and synchronous
Builder/LayoutBuilder callbacks with real Context access. Explicit sessions support
shared and nested Flutter navigation with Route-owned callbacks and UI Future delivery.
Named page entries, reactive parameters, and Dart/JS declarative Pages support host
Router integration. Read the [UI contract](docs/architecture/ui.md) and
[current handoff](docs/tasks/package-isolation.md). Generated owned objects and
ScrollController and TextEditingController support explicit listeners and page cleanup.
Material TextField supports generated focus and formatters. Ordinary Dart values use
real references; session close clears bridge resources without application disposal.
Generated styles and host/local Theme bindings use real Dart values and Flutter
dependencies. ListView.builder supports independent child results and native lazy lists.
See [styles and themes](docs/architecture/styles.md). Other platforms, additional
Controllers and broad API coverage are deferred. JS StatelessWidget/StatefulWidget
components use real Flutter State and explicit super calls; see
[components](docs/architecture/components.md).

Generated layout bindings preserve native ParentData, flexible space and directional
alignment. See the [layout contract](docs/architecture/layout.md). Generated Container,
decoration and directional geometry follow
[native painting](docs/architecture/decoration.md).

Prioritize sound engineering judgment. Follow explicit user instructions when they
differ from repository conventions. Keep work within the requested scope.

## Start here

1. Read the [README](README.md) for current status and setup.
2. Read [agent ownership](docs/agents/README.md) when routing work across agents.
3. Read the [architecture overview](docs/architecture/README.md) and the README of the
   area being changed.
4. Check [accepted decisions](docs/decisions/README.md) and
   [open questions](docs/decisions/open-questions.md) before changing boundaries.
5. Read any more specific AGENTS.md in the affected directory.

Use targeted searches. Do not load the whole repository or old task records when a
scoped README and current source files answer the question.

Generated Scaffold/AppBar and PreferredSize preserve native Widget interfaces. Their
fixed configurations use parent-property bindings; descendants keep local signals. See
[Widget interfaces](docs/architecture/widget-interfaces.md).

Generated Future-returning callbacks convert JavaScript Promises into real Dart Futures;
RefreshIndicator validates this direction. See
[Dart interop](docs/architecture/interop.md).

Generated dart:async Streams are lazy bidirectional references. Dart retains operator,
subscription and controller semantics; Flutter StreamBuilder owns snapshot rebuilds.
Applications close their controllers, while session shutdown cancels bridge-owned
subscriptions and AsyncIterable sources. See
[Dart interop](docs/architecture/interop.md).

## Commands

From the root:

```sh
flutter pub get --enforce-lockfile
pnpm install --frozen-lockfile
dart run melos run check
```

Use the [scoped command table](CONTRIBUTING.md#checks) for smaller changes. Resolve
dependency changes without frozen flags only when intentionally updating the manifests
and lockfiles together.

Runtime changes also require `dart run melos run check:runtime` on macOS arm64. This
explicitly builds Hermes. Shared runtime changes also require `check:runtime:v8`; V8 is
experimental and explicitly selected. Ordinary `check` and `native:configure` never
fetch an engine.

## Editing rules

- Write repository documentation, comments, and templates in English.
- Flax-owned Dart types exported through public entry points use the `Flax` prefix;
  generator types use `FlaxCodegen`. Private types and upstream types keep their names.
- Preserve unrelated edits and inspect the working tree before changing files.
- Keep real implementation, proposals, and placeholders clearly distinguished.
- Do not invent public APIs, successful stub commands, or passing runtime tests.
- Keep runtime JS free of implicit Node.js or browser dependencies.
- Change binding rules or generator sources before regenerating outputs. See
  [binding ownership](packages/flax/bindings/AGENTS.md).
- Coordinate changes across Dart, JS, and native boundaries when their contracts change.
  See [native guidance](packages/flax/native/AGENTS.md).
- Regenerate C ABI declarations with `dart run melos run ffi:generate`; do not edit
  generated FFI files. This is separate from the separate Flutter binding generator.
- Update architecture or decision records when public interfaces, dependency
  relationships, or architectural decisions change. Routine edits need no diary.
- Run checks proportional to the change. Report failures and untested behavior
  accurately; a scaffolding check is not runtime or platform certification.
- Commit, push, and publish only when requested.

## Implementation style

- Choose the simplest correct implementation. Use clear names, familiar language
  constructs, and explicit control flow. Keep the main execution path easy to follow.
- Solve current requirements without speculative abstractions, extension points,
  configuration, or wrapper layers. Introduce abstractions when they simplify existing
  code or enforce a necessary boundary.
- Keep code concise and cohesive. Avoid clever tricks, dense expressions, excessive
  fragmentation, and unnecessary indirection. Make ownership, lifecycle, and error
  handling explicit; do not sacrifice correctness to reduce line count.
- Treat performance as a core design requirement, especially across the JS/Dart/native
  boundary. Avoid unnecessary bridge calls, allocations, conversions, subscriptions, and
  Flutter rebuilds. Consider these costs when choosing the implementation.
- Measure relevant hot paths before adding complexity for optimization. Explain
  non-obvious performance choices briefly in comments, including the tradeoff.

## Task continuity

Use the [task template](docs/tasks/TEMPLATE.md) when a task needs a durable handoff.
Keep one concise record per task, with scope, evidence, blockers, and next steps. Store
disposable notes in the ignored `.local/` directory.

Do not create a shared turn-by-turn log or copy private conversation transcripts into
this public repository. Durable documentation should describe the project and decisions
rather than the agent session.

Standalone MaterialApp roots and outside-repository consumers reuse the same runtime.
See [application startup and packaging](docs/architecture/applications.md).

Session host plugins add default basic APIs and optional Fetch. New public Dart host
types use the `Flax` prefix. See [host contracts](docs/architecture/host.md). Regenerate
embedded host scripts with `host:generate`; binary and host changes require the Hermes
and V8 UI checks. Native ABI 2 is independent of UI protocol 20.

Optional WebSocket uses the shared host checkpoint and base types; see
[WebSocket contracts](docs/architecture/websocket.md). bufferedAmount is deferred.

Generated top-level functions reuse typed member conversion. Route-producing functions
require explicit FlaxNavigatorObserver installation; see
[function contracts](docs/architecture/functions.md).

Optional localStorage uses Hive CE and `FlaxSession.namespace`. Initialization is
explicit and preserves the host's Hive configuration and boxes. See
[storage contracts](docs/architecture/local-storage.md) and the
[storage handoff](docs/tasks/local-storage.md).

Optional Canvas 2D uses a command buffer and generated `CanvasView`. rAF is part of the
base host. See [canvas contracts](docs/architecture/canvas.md).
