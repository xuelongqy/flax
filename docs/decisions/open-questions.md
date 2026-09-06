# Open Questions

These items are intentionally undecided. They do not block workspace scaffolding.

| Decision                                  | Evidence required before choosing                                        |
| ----------------------------------------- | ------------------------------------------------------------------------ |
| Project license                           | An explicit license choice                                               |
| Public pub.dev names and npm scope        | Ownership and availability checks                                        |
| Default engine and per-platform selection | Real adapter builds, debugging, loading, and memory measurements         |
| Runtime C ABI and binding metadata        | A minimal cross-language prototype with lifetime and callback validation |
| Package/ABI compatibility policy          | Actual release artifacts and host/guest version requirements             |
| Mini-app isolation and host capabilities  | A concrete trust model and teardown/resource constraints                 |
| Flutter Web integration                   | A browser interop prototype and supported API definition                 |
| Native artifact distribution              | Verified build hooks, platform packaging, and reproducible engine inputs |
| Runtime tests and performance budgets     | An implemented end-to-end path and device measurements                   |

Future backend integrations with Node, Python, or Rust are deferred.
