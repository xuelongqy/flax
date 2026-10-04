# Third-Party Inputs

[sdk.lock.json](sdk.lock.json) pins the Hermes shared SDK version, target, URL, and
SHA-256. The [SDK repository](https://github.com/xuelongqy/flax_js_runtime) pins the
Hermes/JSI revision and applies the ArrayBuffer transfer patch.

The native asset hook verifies the archive before extracting it into its shared cache,
then compiles the Flax adapter. Engine source and generated libraries are not committed.
The package retains consolidated upstream notices.

Ordinary static checks never fetch engines. Native inputs are pinned, but bit-for-bit
binary reproducibility and a complete release license review are not claimed. See
[distribution boundaries](../../../docs/architecture/packaging.md).
