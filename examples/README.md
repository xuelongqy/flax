# Examples

- [Embedded](embedded/README.md): runnable macOS arm64 host and JS app, both in the
  workspaces.
- [Standalone](standalone/README.md): runnable macOS arm64 application with a JS
  MaterialApp, also in both workspaces.

These applications verify multi-package composition. Framework and plugin contracts stay
in package-local tests and examples. Only the macOS platform projects are implemented;
other platforms are not implicitly supported.

Both examples require Flutter 3.47.6 from `flax/main` and its local engine. The
standalone engine GC target reuses package-owned assertions and records real app
acceptance; see [runtime verification](../docs/architecture/runtime.md#verification).
