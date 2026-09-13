# 0004: Contextual Builders and Synchronous Members

Status: accepted for the experimental macOS arm64 Hermes implementation.

## Decision

Extend the existing generator model with typed synchronous callbacks, selected static
methods, and getters. Generate direct Dart calls and typed JS wrappers from public
declarations. Resolve inherited generic members and declaration identities before
emission. Increment the binding protocol to 2, rejecting older bundles and modules. Keep
the native C ABI, JSI, and runtime entry unchanged.

Use actual Flutter Builder and LayoutBuilder callbacks at build and layout time. Each
mounted callback owns its last successful returned subtree. Replacement callbacks
inherit that retained result until their first successful return. Child resource leases
remain valid through Flutter reconciliation and unmount. First-build errors use a
bounded ErrorWidget; recoverable errors keep valid content and reach the error callback.

BuildContext is a borrowed Flutter-owned reference with stable identity per Element. Its
mounted getter remains usable in subsequent synchronous events. Inactive ancestor
queries fail, and unmount revokes the Dart reference and JS cache entry. Captured JS
wrappers then report mounted=false and cannot invoke Dart members. Handles are internal,
monotonic within a session, and cannot cross runtimes through public wrappers.

BoxConstraints is an explicit immutable four-field snapshot. One helper call creates it;
field reads stay in JS. Infinity is preserved. Enum return values use the same canonical
instances as generated constants. No general reflection, proxy-based member discovery,
implicit signal tracking, or automatic Promise scheduling is added.

## Rationale and consequences

Real callbacks preserve Flutter's dependency and layout rules. Instance-owned results
avoid sharing state or releasing a sibling's resources when the same JS function or
descriptor is mounted twice. Immutable snapshots avoid repeated bridge reads for small
values whose fields cannot change.

Generated Dart function adapters and explicit type adaptations keep the execution path
direct. Unsupported signatures fail generation. Context adaptation currently applies
only to Flutter BuildContext; controller ownership and other borrowed objects need a
separate implementation. Snapshot fields and callback signatures remain explicit
subsets.

This extends [ADR 0003](0003-generated-reactive-ui.md). It does not select a default
engine, promise ABI stability, establish security isolation, or prove other platforms.
See [UI lifecycle](../architecture/ui.md) and
[binding generation](../architecture/bindings.md).
