# ADR 0012: Experimental V8 beside Hermes

Status: Accepted for experimental macOS arm64 implementation.

## Context

Flax's engine-neutral Dart API and C ABI already share a JSI bridge. A second engine
must retain synchronous callbacks, serialized thread migration, explicit microtasks, and
existing UI bindings without upgrading the Hermes JSI dependency.

## Decision

Keep the V8 adapter and `flax_engine_v8` package in this repository. Pin V8 15.2.124.21
and Microsoft's adapter commits in the native input manifest. Reuse the adapter's JSI
ABI path with localized API, lifetime and scheduling patches. Compile against the
existing JSI headers. Keep Hermes as the command/example default; this is not a broader
default-engine or platform decision.

Build fixed, package-local assets with GN/Ninja and CMake. Hooks validate/register
assets only. Require JIT, embedded startup data and macOS 15+ arm64. Disable Intl,
pointer compression and the V8 sandbox for this initial configuration. Do not expose
Node APIs, inspector, or engine-specific public runtime operations.

## Consequences

The project owns a small upstream patch and reproducible heavyweight build inputs. V8
has a process-wide Platform and isolated per-runtime resources; host entry pumps
foreground work and explicit checkpoints drain Promise jobs. Release applications must
allow JIT in their signing entitlements. Prepared consumers need neither V8 source nor
Homebrew V8. Both-engine tests and measured performance are required before changing
defaults. Acceptance evidence is maintained in the
[runtime verification contract](../architecture/runtime.md#verification), separately
from this decision.
