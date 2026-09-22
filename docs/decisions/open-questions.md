# Open Questions

Current accepted contracts include explicit selection, public-provider manifests, stable
wire identity, package-atomic generation and trusted compile-time dependencies.
Configuration format 1, Manifest writer 11 with strict readers 2/3/4/5/6/7/8/9/10/11, UI
protocol 20 and native ABI 2 remain separate domains. Generic typedefs use TypeScript
relationships, upper-bound erasure and concrete Dart use-site validation; exact Dart
inference and runtime type tokens are not requirements. See
[Binding Generation](../architecture/bindings.md) and
[ADR 0025](0025-generic-typedef-bindings.md). Explicit top-level readonly selections use
library-level exports with uncached `getX()` reads under
[ADR 0027](0027-public-library-module-delivery.md). Mutable top-level reads and setters
use the function-style access contract in
[ADR 0031](0031-mutable-top-level-bindings.md).

## Binding coverage and automation

[ADR 0033](0033-automatic-public-library-bindings.md) accepts one public-library
automatic entry, safe direct-provider reuse, unique observed generic specialization,
annotation filtering and optional overrides. The remaining questions below concern
broader management and composition, not the implemented `--library` workflow.

| Decision                                            | Evidence required before choosing                                                                                                                                             |
| --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Provider and project binding management             | Explicit provider choice, missing-member policy, version conflicts and module partitioning while retaining one canonical owner per declaration                                |
| Mixin composition                                   | A Dart/TypeScript composition model, member precedence and lifetime rules; non-constructible mixin member selection does not settle composition                               |
| Scalable optional omission                          | A concrete replacement for exponential `omitWhenAbsent` branches that preserves Dart defaults and explicit null                                                               |
| Broader generic runtime specialization (deferred)   | Revisit only with concrete SDK/API demand. Current scope excludes multiple or whole-graph specialization discovery, callback erasure requiring concrete runtime specialization, generalized deferred-factory inference and generic Widget-interface declarations. Ordinary higher-rank callbacks with erasable bounds remain supported; concrete generic Extension specialization remains unsupported. |

Implementation candidates and the real outside-library pilot are tracked in
[Binding Coverage Expansion](../tasks/binding-coverage-expansion-v1.md). A proposed
Core, Material, Cupertino or third-party slice is not implemented until its selection,
generation and actual behavior are verified.

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
