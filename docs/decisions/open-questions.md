# Open Questions

Current accepted contracts include explicit selection, public-provider manifests, stable
wire identity, package-atomic generation and trusted compile-time dependencies. Binding
selection format 2, package metadata format 2, current-only Manifest 24, UI protocol 24
and native ABI 2 remain separate domains. Generic declarations use one compiled adapter
factory while TypeScript preserves relationships. The maintained engine instantiates
those factories from real Dart Type handles on first use, without finite type-tuple
catalogs. Omitted types retain the legal analyzer-resolved default. See
[Binding Generation](../architecture/bindings.md) and fixed Flutter State variants under
[ADR 0035](0035-generic-state-variants-and-protocol-21.md). Explicit top-level readonly
selections use library-level exports with uncached `getX()` reads under
[ADR 0027](0027-public-library-module-delivery.md). Mutable top-level reads and setters
use the function-style access contract in
[ADR 0031](0031-mutable-top-level-bindings.md).

## Binding coverage and automation

[ADR 0033](0033-automatic-public-library-bindings.md) accepts one public-library
automatic entry, safe direct-provider reuse, annotation filtering and optional
overrides. ADR 0035 adds shared generic owners, safe constructor specialization and
fixed Flutter State mixin variants. The remaining questions below concern broader
composition and specialization. Package-scoped provider selection is defined by
[ADR 0037](0037-package-scoped-binding-providers.md), and scalable default omission uses
the five/six-parameter hybrid described in
[Binding Generation](../architecture/bindings.md).

| Decision                                            | Evidence required before choosing                                                                                                                                                                                                                          |
| --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Arbitrary runtime-only typed JS closures (deferred) | A concrete public API that cannot use selected typed callbacks, known SDK signature metadata or an application-owned typed handler contract. Native function invocation is implemented; a Type handle alone does not create a matching Dart closure.       |
| Arbitrary JS-selected mixin composition             | Future research with a concrete composition use case and an AOT-compatible class model. Current additions use configured common variants or ordinary Dart classes composed with mixins.                                                                    |
| Public structural type-token builders (deferred)    | Revisit only for concrete application demand beyond existing declarations, authentic value types and explicit checked type selection. Record results and typed API inputs already meet current needs; shared JIT/AOT value construction remains supported. |
| TS generic call syntax                              | A future build-transform design preserving current checked runtime type selection, JS inheritance, overrides and `super`. Current `$type` / `dartType` calls meet capability needs; whole-graph inference is not required for this convenience work.       |
| Direct JS Iterator protocol adaptation (deferred)   | A concrete API that cannot use a Dart Iterable entry delegating with `values.iterator`. Existing JS Iterable/list conversion and native Dart Iterator references meet current needs; no direct JS Iterator input adapter or JS protocol facade is planned. |

See [demand-driven scope](../architecture/binding-coverage-map.md#demand-driven-scope)
for the closure deferral and current priorities. Extension calls retain their explicit
receiver-view API; implicit extension resolution is not planned.

A proposed Core, Material, Cupertino or third-party slice is not implemented until its
selection, generation and actual behavior are verified. Record a durable task only when
work has started and needs a handoff.

The
[consolidated engine-backed capability audit](../architecture/binding-coverage-map.md#engine-backed-audit-and-consolidated-backlog)
is the current remaining-work list. It groups automatic/explicit parity, type-token and
structural adapters, Flutter interface semantics and optional delivery work. The older
mechanism matrix's zero-gap counters apply only to its measured shapes, not to every
declaration or signature in the SDK.

## Runtime, application and distribution

| Decision                                     | Evidence required before choosing                                                                                                            |
| -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Project license                              | An explicit license choice and distribution review                                                                                           |
| Public pub.dev names and npm scope           | Ownership and availability checks                                                                                                            |
| Public-release compatibility policy          | Release artifacts, support lifetime and historical manifest comparison; current-graph validation does not establish released-ID immutability |
| Native ABI evolution after ABI 2             | Evidence for changing the `FlaxApi` table, size or call semantics                                                                            |
| SDK distribution beyond macOS arm64          | Platform packaging, signing, hosting and release verification for each additional target                                                     |
| Runtime module loading and hot replacement   | Identity, callback/resource ownership and unload behavior beyond compile-time dependency installation                                        |
| Mini-app isolation and host capabilities     | A trust model, execution limits and resource constraints                                                                                     |
| Navigation restoration and system deep links | Host platform registration, restoration and transition/lifetime tests; Router path parsing alone is insufficient                             |
| Flutter Web integration                      | A browser interop prototype and supported API definition                                                                                     |
| Performance budgets and frame scheduling     | Broader device measurements and representative workloads                                                                                     |
| Additional host and transport APIs           | Explicit contracts and tests; WebSocket `bufferedAmount` needs real transport-buffer accounting, not `flush` or timing estimates             |

The current bridge executes trusted application code; its module compatibility checks
are not a security sandbox. Initial synchronous execution and local native asset loading
are accepted in [ADR 0002](0002-experimental-runtime.md). Node, Python and Rust backend
integrations, broader Canvas coverage and other platforms remain separate work.

## Known implementation gaps outside binding expansion

Canvas still needs pixel-clearing semantics for `reset()`, drawing-state preservation
after `transferToImageBitmap()` and per-operation handling of non-finite numeric input.
The [Canvas contract](../architecture/canvas.md#known-limitations-and-verification)
records the observed behavior and required regressions. Existing aggregate acceptance
must not be interpreted as closing those gaps.
