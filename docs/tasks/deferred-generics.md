# Deferred Generic Factories, Iterable and Set

Status: implemented and validated on Hermes and V8

## Scope

UI protocol 18 adds generated Iterable and Set conversion plus deferred materialization
of selected static generic factories. WidgetStateProperty, ButtonStyle and
TextButton.style provide the real Flutter acceptance path. Native ABI 2 is unchanged.

## Implementation

- DartIterable and DartSet are typed views of real Dart collections. Mutations reach the
  source collection; iteration and explicit copies use one bulk host call and preserve
  supported cycles and repeated collection identity.
- `deferredFactories` records a generic factory without listing its possible concrete
  types. The complete generator discovers exact selected use sites and emits direct Dart
  materializers for each type.
- A deferred JS wrapper calls no Dart code until its first concrete use. Successful
  materialization locks the wrapper to that type and real Dart object. Object/dynamic
  positions and pre-materialization member calls fail explicitly.
- Concrete generic arguments are checked against complete bounds, including nullability,
  numeric subtypes, parameterized supertypes and self-referential bounds. Multiple
  wrappers materialized to one cached Dart instance remain independent live aliases.
- Explicit collection copies preserve repeated identity only for compatible container
  shapes. List and Iterable share an Array; Set or Map shape conflicts fail explicitly,
  including inside cyclic graphs.
- WidgetStateProperty.resolveWith is materialized as Color? or double? by ButtonStyle.
  Its resolver receives Flutter's real Set of WidgetState values.

See [binding generation](../architecture/bindings.md),
[Dart interop](../architecture/interop.md) and [styles](../architecture/styles.md).

## Validation

The full `check`, `check:ui` and `check:ui:v8` sequence passes. Binding generation is
reproducible with 38 generator tests, and the Node suite passes 105 tests. Both engines
pass 39 runtime tests, 285 framework tests and 8 example tests. Native ABI tests,
outside-repository JIT/AOT consumers, macOS integrations, relocated standalone apps and
release builds also pass.

The coverage includes exact factory materializers, incompatible reuse, broad and typed
Set views, custom JS iterables, unmodifiable Sets, cyclic copies and real ButtonStyle
resolution. It also covers weak deferred aliases, concrete generic bounds and
conflicting copy shapes in repeated and cyclic graphs. Invalid non-deferred object
inputs are rejected before deferred metadata is queried, so ordinary conversion failures
do not add a host call or retain a helper.

## Boundaries

Deferred factories are explicit, synchronous static generic methods. Every type
parameter must be inferred from the result target. Generic inputs are limited to direct
synchronous callbacks; generic collections, Futures, Widgets, Routes, Contexts and
lifecycle values are rejected. There is no runtime TS type token, reflection or general
runtime generic factory.
