# 0053: Detached Dedicated Workers

Status: experimental integration; acceptance is recorded separately

## Decision

Core owns browser-shaped pure JS/Wasm Dedicated Workers. `Isolate.spawn` creates a
background Dart isolate in the parent's isolate group. Each owns a detached V8
Isolate/Context with explicit bridge references and the existing Core host services. The
normal UI runtime and its Dart/V8 joint collector remain unchanged.

Native V8 serialization and retained BackingStores carry messages between isolated
heaps. Dart native ports only wake owners. Native channel closure and V8 interruption
precede Dart host/runtime disposal. There is no Node application interface, thread pool
or main-thread execution fallback.

## Reason

The carrier prototype passed background JS/Wasm, yielding, messaging and execution
interruption on macOS. It reuses Dart scheduling and existing timers/Fetch without a
second native event loop. The standalone runtime already provides V8 Lockers and
foreground task notifications. Sending only channel IDs through Dart avoids copying
large JS buffers into and out of Dart message payloads.

## Consequences

Detached runtimes cannot hold Flutter/Dart business peers or use the joint collector.
Host callbacks and returned handles need explicit detached ownership. The optional
worker engine extension is independent of native ABI 2 and the UI protocol. Worker host
types are separate from main-session canvas/window declarations. Application resource
loading stays on the parent isolate through the existing source loader and cancellation
boundary; immutable source bytes are transferred to the Worker. Native Promise rejection
notifications are delivered as Worker events at checkpoints, outside native callbacks.

The first profile excludes nested workers, Blob/platform-object cloning, shared memory,
canvas/GPU objects and synchronous network importScripts. Unsupported operations fail
explicitly. See [the host contract](../architecture/dedicated-workers.md) for the exact
implemented boundary and [acceptance task](../tasks/dedicated-workers.md) for evidence.
