# Open Questions

Current accepted contracts include explicit selection, public-provider manifests, stable
wire identity, package-atomic generation and trusted compile-time dependencies. Binding
selection format 2, package metadata format 1, current-only Manifest 12, UI protocol 21
and native ABI 2 remain separate domains. Generic declarations use shared Dart owners
while TypeScript preserves relationships; safe constructor specializations come from
Analyzer-observed concrete use sites plus the bounded String/safe-int scalar pair.
Runtime type tokens are not a requirement. See
[Binding Generation](../architecture/bindings.md) and
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
management and composition, not the implemented `--library` workflow.

| Decision                                          | Evidence required before choosing                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Provider and project binding management           | Explicit provider choice, missing-member policy, version conflicts and module partitioning while retaining one canonical owner per declaration                                                                                                                                                                                                                                                                                           |
| General mixin composition beyond State variants   | Revisit only with concrete demand for applying arbitrary mixins to non-State owners; fixed analyzer-validated State variants are implemented                                                                                                                                                                                                                                                                                             |
| Scalable optional omission                        | A concrete replacement for exponential `omitWhenAbsent` branches that preserves Dart defaults and explicit null                                                                                                                                                                                                                                                                                                                          |
| Broader generic runtime specialization (deferred) | Revisit only with concrete SDK/API demand. Current scope excludes runtime type tokens, whole-graph nested inference, overlapping constructor domains, callback erasure requiring concrete runtime specialization, generalized deferred-factory inference and generic Widget-interface declarations. Ordinary higher-rank callbacks with erasable bounds remain supported; concrete generic Extension specialization remains unsupported. |

A proposed Core, Material, Cupertino or third-party slice is not implemented until its
selection, generation and actual behavior are verified. Record a durable task only when
work has started and needs a handoff.

## Runtime, application and distribution

| Decision                                     | Evidence required before choosing                                                                                                            |
| -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Project license                              | An explicit license choice and distribution review                                                                                           |
| Public pub.dev names and npm scope           | Ownership and availability checks                                                                                                            |
| Public-release compatibility policy          | Release artifacts, support lifetime and historical manifest comparison; current-graph validation does not establish released-ID immutability |
| Default engine and per-platform selection    | Additional adapter builds, debugging, loading and memory measurements                                                                        |
| Native ABI evolution after ABI 2             | Evidence for changing the `FlaxApi` table, size or call semantics                                                                            |
| Remote native artifact distribution          | Platform packaging, signing, hosting and release verification                                                                                |
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
