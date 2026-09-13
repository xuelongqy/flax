# Task: Package Distribution Boundaries

Status: complete

## Goal and scope

Make the package-owned source tree match the eventual Pub and npm products without
publishing them. Add discoverable ecosystem metadata, separate public JavaScript output
from embedded host code, restrict archives by capability, and verify each package as an
outside consumer. Preserve UI protocol 18, native ABI 2, and all application APIs.

## Result

Every package now commits format-1 `flax_package.yaml`. It records the public Dart entry
point, optional same-version npm peer, capability set, and exported registration names.
Repository tools validate the schema and manifests, select archive rules from
capabilities, and compile registration symbols from temporary consumers. Metadata does
not perform runtime registration.

JavaScript packages now compile public npm entries through `tsconfig.npm.json` and host
implementation through `tsconfig.host.json`. Core, Material, and Canvas retain
executable application code. Fetch, WebSocket, localStorage, and the empty Cupertino
scaffold expose declarations plus a side-effect-free `noop.js`; their host
implementation is not present in npm archives.

Pub archives retain Dart code and required generated runtime artifacts. Core keeps its
public ABI header while excluding the shared native implementation. Engine packages keep
only the asset hook, prepared dylib and manifest, and a consolidated notices file.
CMake, patches, downloads, adapter source, and detailed notice trees remain
repository-only.

## Package evidence

Post-change npm archives contain:

| Package               | Files | Compressed size |
| --------------------- | ----: | --------------: |
| `@flax/core`          |    34 |    58,285 bytes |
| `@flax/material-ui`   |    10 |    11,061 bytes |
| `@flax/canvas`        |    38 |    34,318 bytes |
| `@flax/fetch`         |    15 |     4,789 bytes |
| `@flax/websocket`     |     9 |     3,289 bytes |
| `@flax/local-storage` |     9 |     2,369 bytes |
| `@flax/cupertino-ui`  |     5 |       968 bytes |

The Fetch baseline had 34 files and included its generated host bootstrap; the new
archive has 15 declaration files or maps, one empty entry, the manifest, and README.
Hermes and V8 previously exposed detailed notice trees containing 26 and 672 files plus
repository native inputs. Their checked Pub archives are now approximately 1 MB and 12
MB compressed respectively and contain one consolidated notices file plus the prepared
runtime asset.

## Validation

- frozen Pub and pnpm workspace resolution: passed
- metadata parser and package layout checks: passed
- binding and host bootstrap reproducibility: passed
- public and host TypeScript projects plus Node tests: passed
- temporary Pub/npm archives and core-plus-one-extension consumers: passed
- Hermes and V8 native, runtime, package UI, example, macOS integration, and release
  checks: passed
- dual-engine coexistence and the 64-case smoke benchmark: passed

The real application integration tests use bounded readiness checks and fixed animation
frame advancement. They do not wait for every scheduled application frame to disappear,
because text cursors and host plugins may legitimately keep scheduling work.

## Handoff

Keep `flax_package.yaml` descriptive. Applications still construct plugins and binding
registries explicitly. When a paired package version changes, update its Pub and npm
manifests together. Choose `runtime` only when application code executes from npm; use
`declarations` when Dart embeds the implementation. Do not add private host output to an
npm `files` list or repository native inputs to a Pub archive.
