# 0011: Fixed Widget Interface Configuration

Status: accepted; extended by [ADR 0029](0029-native-widget-interface-members.md) for
native setters and methods.

## Decision

Generate selected readonly Widget interfaces on existing native Widget hosts. Interface
getters read the actual immutable configuration constructed during acceptance. Preserve
native values, types, keys and child ownership.

Interface-bearing Widgets use fixed direct constructor arguments. Dynamic configuration
is expressed through a binding on the containing Widget property; descendants retain
local signals and State. AppBar and PreferredSize are the first implementations.

## Reason

Scaffold reads preferredSize during build. A child-only setState cannot refresh that
previously read parent configuration. Replacing appBar through Scaffold's existing
property binding provides explicit updates without an additional dependency graph.
Keeping AppBar's real Size value also preserves its private theme-height sentinel.

## Consequences

This is an explicit exception to property binding on ordinary generated Widgets. Direct
bindings are rejected rather than accepted with stale parent layout. Generated TS types
and native runtime checks preserve interface compatibility. Custom JS components use
Flutter PreferredSize when they need a preferred size; class-name checks and automatic
interface inference from build results are not introduced.

The UI protocol carries type identity and fixed-argument metadata. The native ABI and
application disposal responsibility are unchanged. Read the
[interface contract](../architecture/widget-interfaces.md) for the selected subset.
