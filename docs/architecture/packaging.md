# Workspaces and Packaging

## Current package graph

All package names are provisional and all packages have publication disabled.

| Package                   | Direct local dependencies        | Current content                              |
| ------------------------- | -------------------------------- | -------------------------------------------- |
| Dart `flax`               | None                             | Empty Flutter library                        |
| Dart `flax_material_ui`   | `flax`                           | Empty library; upstream Material dependency  |
| Dart `flax_cupertino_ui`  | `flax`                           | Empty library; upstream Cupertino dependency |
| Dart `flax_engine_hermes` | `flax`                           | Empty engine-distribution library            |
| Dart `flax_codegen`       | None                             | Empty Dart tooling library                   |
| JS `@flax/runtime`        | None                             | Empty ESM module                             |
| JS `@flax/flutter`        | `@flax/runtime`                  | Empty ESM module                             |
| JS `@flax/material-ui`    | `@flax/flutter`, `@flax/runtime` | Empty ESM module                             |
| JS `@flax/cupertino-ui`   | `@flax/flutter`, `@flax/runtime` | Empty ESM module                             |
| JS `@flax/cli`            | None                             | Empty ESM module; no executable              |

The root Pub workspace resolves Dart packages together. Melos provides scoped tasks and
will later support Dart package versioning and publication. pnpm owns the JS dependency
graph; invoking it from Melos does not make npm packages part of Pub resolution.

## Native source and distribution

Native adapters are authored in the native source tree. A Dart engine package will
locate or build the corresponding native artifact and create a runtime through the
eventual shared interface.

A published package must install independently of this monorepo. It cannot require an
unpublished sibling directory through a relative path. Local source builds and release
packaging need separate, documented entry points.

The intended approach is to use Flutter FFI package build hooks with a self-contained
source archive or verified prebuilt native artifacts. No build hook, download, shared
library, or engine factory exists in this scaffold.

## Upstream engines

The future third-party manifest must pin upstream revisions, compatible JSI versions,
checksums, patches, and license information. Engine sources and build caches are fetched
outside tracked source. No upstream engine is downloaded or vendored by the initial
scaffold.

CMake manages Flax-owned native targets. Engine adapters can invoke the relevant
upstream build systems instead of rewriting every engine build.

## Release compatibility

Future applications need a compatible JS SDK, Dart host, generated bindings, and native
ABI. A compatibility manifest and release policy remain undecided. Normal native AOT
hosts must already contain the Dart implementations exposed to dynamically loaded JS.

The default integration should select one engine for each platform. Simultaneous
multi-engine linking and Flutter Web require separate validation.

## Current verification boundary

Local checks cover workspace dependencies, Dart analysis, TS output, documentation, and
CMake configuration. CI initially covers Ubuntu only. No mobile, desktop, or browser
runtime support is certified by these checks.
