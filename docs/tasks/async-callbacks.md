# Promise to Future Callbacks and RefreshIndicator

Status: implemented and fully validated

## Scope

UI protocol 16 adds the missing generated callback direction: a JavaScript Promise or
thenable becomes the typed Dart Future declared by the selected API. RefreshIndicator is
the first production binding using this path. Native ABI 2, the engine versions and the
existing UI scheduler are unchanged.

## Implementation

- The generator accepts a single Future result on eligible positional callbacks and
  emits typed Dart Future adapters. Future parameters, FutureOr, direct Futures nested
  through List or Map values, and asynchronous lifecycle/build properties are rejected.
  A returned function starts a separate invocation and may have its own Future result.
- The session observes Promise settlement through one shared host entry. Fulfilled
  values use existing generated conversion and ownership; rejections preserve a safely
  readable JS message and stack in FlaxJsException, with `Promise rejected` as the
  fallback for hostile values.
- Pending Futures outlive callback replacement and Widget unmount. Session close fails
  them with `StateError('FlaxSessionClosed')`, revokes observers and ignores late
  settlement.
- Generated RefreshIndicator wraps the existing lazy list. Its callback updates a signal
  only after Flutter has awaited the Promise.

See [Dart interop](../architecture/interop.md) and
[binding generation](../architecture/bindings.md).

## Validation

Targeted generator, Node helper and Flutter tests cover resolved and delayed Promises,
thenables, duplicate settlement, rejection, completion conversion, returned functions,
callback collections, Widget ownership, callback replacement, unmount and close. The
rejection regressions include throwing accessors, Symbol coercion and Proxy traps; the
generator regressions include Future values nested through List and Map.

The final validation passed:

- `dart run melos run check`: 36 generator tests, 78 JavaScript tests, analysis,
  formatting, type checking, reproducible bindings, documentation and CMake toolchain
  configuration.
- `dart run melos run check:ui`: Hermes native and runtime tests, 276 framework tests, 8
  example tests, outside-repository JIT/AOT loading, macOS integration and release
  builds.
- `dart run melos run check:ui:v8`: the equivalent V8 runtime, framework,
  outside-repository, macOS integration and release checks.

## Boundaries

This does not map cancellation, Promise parameters, nested Futures, FutureOr, proxy
properties, asynchronous builders, Route factories, State lifecycle or formatters.
Applications cancel underlying work through its own API, such as AbortSignal.
