# Third-Party Inputs

No engine source, native binaries, dependency manifest, or downloads are included in
this scaffold.

Before an engine is introduced, define a manifest with its upstream URL, fixed revision,
compatible JSI version, checksum, license, and patch list. Cache fetched sources outside
tracked source and keep the selected engine build reproducible.

[patches](patches/README.md) is reserved for the minimal required upstream changes. See
[distribution boundaries](../../docs/architecture/packaging.md).
