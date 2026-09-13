# Third-Party Inputs

[v8.json](v8.json) pins V8, the Microsoft adapter, existing JSI, depot_tools, host
tools, and GN arguments. [v8-jsi.patch](v8-jsi.patch) contains the adapter-only
compatibility and lifetime changes. V8 DEPS pins transitive source and binary tool
inputs. Git checkouts are cached under `.cache/native`; archive checksums describe
prototype source provenance. The builder verifies exact revisions and the complete
adapter diff.

Ordinary static checks never fetch engines. Native inputs are pinned, but bit-for-bit
binary reproducibility and a complete release license review are not claimed. See
[distribution boundaries](../../../docs/architecture/packaging.md).
