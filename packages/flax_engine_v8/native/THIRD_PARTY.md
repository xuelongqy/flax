# Third-Party Inputs

[v8.json](v8.json) records the Microsoft v8-jsi adapter and compatible Hermes JSI
revisions. The packaged `v8-jsi/src` files include the changes in
[v8-jsi.patch](v8-jsi.patch), which covers compatibility and lifetime fixes. The
[SDK lock](sdk.lock.json) pins the separately built V8 libraries. V8 source, GN args,
depot_tools, and host tool versions are owned by the SDK repository.

Ordinary static checks never fetch engines. Native inputs are pinned, but bit-for-bit
binary reproducibility and a complete release license review are not claimed. See
[distribution boundaries](../../../docs/architecture/packaging.md).
