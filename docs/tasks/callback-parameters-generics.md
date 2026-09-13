# Complete Callback Parameters and Generic Erasure

Status: implemented and validated on Hermes and V8

## Scope

UI protocol 17 adds optional positional parameters, required and optional named
parameters, generic function types and generic proxy methods to generated callbacks. The
native ABI remains at version 2.

## Implementation

- Callback metadata now records each parameter's name, type, required state and
  positional or named form. Function identities include the complete call shape.
- Generated JavaScript validates calls once and sends positional and named arguments
  through the shared host entry. Generated Dart adapters use direct call branches so
  omitted arguments keep the original Dart or JavaScript defaults.
- TypeScript preserves callback type parameters and their bounds. Dart calls use real
  generic closures when Dart invokes JavaScript; calls from JavaScript into Dart erase
  type parameters to analyzer-resolved bounds without transmitting runtime type tokens.
- Callback shapes share the existing conversion, ownership and Promise/Future paths in
  constructors, members, top-level functions, proxies, returned functions and typed List
  and Map views.

See [Dart interop](../architecture/interop.md) and
[binding generation](../architecture/bindings.md).

## Validation

The 36 generator tests and 80 JavaScript tests cover argument omission, unknown named
fields, positional holes, dependent bounds, callback collections, returned functions and
generic proxy methods. Real Hermes and V8 checks passed 39 runtime integration tests,
278 framework tests, 8 example tests, outside-repository JIT/AOT loading, standalone
package consumption and release builds. The V8 embedded macOS driver stalled once; the
unchanged prepared application then passed all four integration tests and its release
build.

The first Dart-to-JavaScript callback lazily retains one shared `invokeCallback` helper.
Later calls reuse that handle, and session teardown releases it. Cost assertions verify
that the helper does not cause per-callback handle growth.

The final repository-wide check completed binding generation and all generator and
JavaScript tests, then stopped in analysis because a concurrent, unfinished
`flax_canvas` package lacked its generated files. The callback and generic changes have
no dependency on that package.

## Boundaries

TypeScript type arguments are development-time information and are not sent to Dart.
Recursive or unsupported bounds, Future parameters, FutureOr, Futures nested in a Future
completion value, asynchronous properties and asynchronous lifecycle callbacks remain
generation errors.
