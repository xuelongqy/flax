# 0010: JS Components and Native Flutter State

Status: accepted.

## Decision

JS applications subclass StatelessWidget, StatefulWidget and State using class/new.
Fixed Flutter hosts pair each mount with its JS instance. Native Elements own lifecycle,
dependencies and rebuilding. Selected host-proxy methods and direct super entries are
generated from public SDK declarations; application classes need no Dart generation.

Each JS constructor has a session-local Dart Type token. Fixed component proxies return
that cached token from runtimeType and directly retain the application key, including
null. Flutter owns matching and unkeyed-list behavior; there is no additional component
boundary. Tokens retain neither the runtime nor JS references. They identify components
for matching, native test finders and diagnostics, without changing Dart is/as or
interface compatibility. Widget instances remain shallow immutable configurations.

This supersedes the initial outer-boundary/inner-key decision and its accepted unkeyed
matching difference. The original implementation avoided overriding runtimeType as a
conservative choice; native JIT/AOT experiments and framework regression tests now
support using narrowly scoped tokens for custom JS Widget proxies.

Lifecycle overrides use explicit super. State.setState executes synchronously through
real Dart State; signals remain optional, explicit property subscriptions. Protocol 10
replaces protocol 9, with no compatibility layer or native ABI change.

## Consequences

State can own Controllers and component-local signals. Native Context dependencies work
without a second reactive mechanism. Existing page and Route ownership remains intact.
Non-disposal lifecycle errors are reported at State dispatch without aborting Flutter's
Element operation. The Element boundary handles disposal failures. Together these keep
normal child-first unmount and deterministic bridge cleanup; it does not repair invalid
application lifecycle code or implement Element matching.

Supported interfaces, errors and deferred capabilities are recorded in the
[component contract](../architecture/components.md). These additions do not supersede
application ownership in [ADR 0009](0009-dart-interop.md).
