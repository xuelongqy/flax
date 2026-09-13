# Open Questions

These decisions remain open after the Dart-reference, focus and formatter milestone.
v1 binding metadata, Manifest 2 compatibility, stable wire identity, package-atomic
config discovery, and trusted third-party package boundaries are accepted in
[ADR 0021](0021-external-binding-version-domains.md),
[ADR 0022](0022-stable-binding-identity.md), and
[ADR 0023](0023-external-binding-package-trust.md). Native ABI 2 and UI protocol 20 remain
the experimental runtime baseline. The rows below are post-v1 native ABI and
public-release policy questions, plus unrelated open topics.

| Decision                                  | Evidence required before choosing                                                            |
| ----------------------------------------- | -------------------------------------------------------------------------------------------- |
| Project license                           | An explicit license choice and distribution review                                           |
| Public pub.dev names and npm scope        | Ownership and availability checks                                                            |
| Default engine and per-platform selection | Additional adapter builds, debugging, loading, and memory measurements                       |
| Native ABI evolution after ABI 2          | Evidence for changing the experimental `FlaxApi` table, size, or call semantics beyond ABI 2 |
| Public-release compatibility policy       | Release artifacts, host/guest version requirements, and support lifetime                     |
| Mini-app isolation and host capabilities  | A trust model, execution limits, and resource constraints                                    |
| Flutter Web integration                   | A browser interop prototype and supported API definition                                     |
| Remote native artifact distribution       | Platform packaging, signing, hosting, and release verification                               |
| Performance budgets and frame scheduling  | Broader device measurements and representative workloads                                     |

The current navigation and interop surface is a trusted-code bridge, not a security
sandbox (see [navigation](../architecture/navigation.md)). That does not settle mini-app
isolation and host capabilities above.

The initial synchronous execution model and local native asset loading are accepted in
[ADR 0002](0002-experimental-runtime.md). They do not settle the broader questions
above. Node, Python, and Rust backend integrations remain deferred.
