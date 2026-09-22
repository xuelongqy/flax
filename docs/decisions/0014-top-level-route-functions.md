# 0014: Native Route Functions and Explicit Observation

Status: accepted.

## Decision

Generate public top-level functions directly, using the existing typed conversion and
Future delivery mechanisms. Register their metadata separately from class bindings. All
calls share one host entry. Function metadata follows the current UI protocol; native
ABI 2 is unchanged.

Route-producing functions require explicit parameter roles and an installed
FlaxNavigatorObserver on the target Navigator. The observer captures the Route only
during the synchronous invocation. This contract requires exactly one TransitionRoute, a
Future result, and retained WidgetBuilder callbacks. It does not generalize to arbitrary
asynchronous navigation.

## Reason

Calling native showDialog preserves Flutter's captured themes, Navigator selection,
focus, barrier and transitions. Its result Future can finish before the exit animation,
so that Future cannot determine callback lifetime. Explicit observation supplies the
actual Route and its completed Future without copying Flutter navigation internals.

## Consequences

- Applications configure a stable observer on each Navigator used by these functions.
  Absence is diagnosed before opening the Route; other observers remain intact.
- The existing Route lease and per-mount content host retain callbacks and results.
  Source unmount and result delivery do not prematurely release them.
- Session close waits for actual Route completion and content unmount. The host still
  owns removing shared-stack routes; Flax does not clear its stack.
- Functions and callbacks use direct typed generated calls. There is no function-name
  dispatch special case, application-specific wrapper class, or new lifecycle manager.

See the [function contract](../architecture/functions.md) for selection and examples.
