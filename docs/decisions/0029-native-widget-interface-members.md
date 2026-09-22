# 0029: Native Widget interface members and Manifest 8

Status: accepted

## Decision

Extend the fixed configuration contract in
[ADR 0011](0011-widget-interface-configuration.md) with explicitly selected native
getters, setters and methods. Generated FlaxWidgetHost overrides forward directly to the
accepted Dart configuration. Dart types, generic methods, defaults, operators, object
identity, exceptions and async results stay native; these members do not enter JS
TypeRef conversion or become callable JS APIs.

A separate native member model stores the selected kind/name/parameter names, generated
Dart override source and its explicit public-library imports. The source is generator
output, not user-configured code. Dependency consumers reconstruct selections from this
metadata and resolve current Dart signatures through public libraries. Native-only
signature types require no binding owner and are not published as JS dependencies.

The writer advances to Manifest 8 because the strict Manifest 7 class schema cannot
represent native forwarding signatures without falsely treating them as bridge methods.
Readers accept formats 2 through 8 with their original field boundaries. Formats 2
through 7 reject `widgetMembers`. Existing wire IDs, configuration and package metadata
format 1, UI protocol 20 and native ABI 2 are unchanged. Module delivery accepts formats
7 and 8.

## Boundaries

Generic interface declarations remain deferred, while generic methods are supported.
Unselected obligations, incompatible signatures, private types/defaults and host
lifecycle collisions fail generation. Standard Widget/diagnostic methods remain
host-owned. Constructor callbacks still require their existing ownership rules and
remain disallowed on fixed interface-bearing Widgets. A native setter does not schedule
a Flutter rebuild.

CupertinoNavigationBar is the real consumer: CupertinoPageScaffold reads preferredSize
and invokes shouldFullyObstruct with its actual BuildContext. Configuration replacement
uses the existing containing-property binding and session cleanup contracts.
