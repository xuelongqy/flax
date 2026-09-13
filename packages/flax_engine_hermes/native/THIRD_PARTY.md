# Third-Party Inputs

[hermes.json](hermes.json) pins Hermes and its bundled JSI to one revision with an
archive URL, SHA-256 checksum, license inputs, and the applied
[ArrayBuffer transfer patch](hermes-transfer.patch).

Explicit build tooling verifies the archive before extracting it into ignored
`.cache/native/`. Source and build outputs are not committed. Asset preparation copies
upstream license, copying, and notice files alongside the package's generated library.

Ordinary static checks never fetch engines. Native inputs are pinned, but bit-for-bit
binary reproducibility and a complete release license review are not claimed. See
[distribution boundaries](../../../docs/architecture/packaging.md).
