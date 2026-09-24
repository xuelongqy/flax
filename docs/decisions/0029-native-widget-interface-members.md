# ADR 0029: Native Widget Interface Members

Status: accepted.

## Decision

Extend fixed Widget-interface configuration with explicitly selected native getters,
setters and methods. Generated `FlaxWidgetHost` overrides forward directly to the
accepted Dart configuration. Dart types, generic methods, defaults, operators, object
identity, exceptions and async results stay native; these members do not become JS
bridge APIs.

The semantic model stores selected member kind, name, parameter names, generated Dart
override source and explicit public imports. Dependency consumers reconstruct selections
from Manifest 12 and resolve current Dart signatures through public libraries.
Native-only signature types require no binding owner or JS dependency.

## Boundaries

Generic interface declarations remain deferred; generic methods are supported.
Unselected obligations, incompatible signatures, private types/defaults and host
lifecycle collisions fail generation. Widget and diagnostic methods supplied by the host
remain host-owned. A native setter follows Dart behavior and does not schedule a
rebuild.

CupertinoNavigationBar is a real consumer: CupertinoPageScaffold reads `preferredSize`
and invokes `shouldFullyObstruct(BuildContext)` on the accepted Dart configuration.
