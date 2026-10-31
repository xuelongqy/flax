# Three.js model fixtures

These original glTF 2.0 fixtures contain one indexed unit cube with normals, UVs and a 2
x 2 RGBA PNG. The material uses the standard metallic/roughness model. Geometry was
produced with Three.js BoxGeometry; the checker pixels and fixture assembly are Flax
test data, with no downloaded model assets. Compressed fixtures below use pinned
development encoders and bundled runtime decoders.

`textured-cube.gltf` loads `geometry.bin` and `checker.png` through relative HTTP URLs.
`textured-cube.glb` embeds the same geometry and PNG in binary chunks. Both paths run
through unmodified GLTFLoader and ImageBitmapLoader. The acceptance host serves only
these fixture files from an ephemeral loopback HTTP server. Core supplies Fetch.

`skinned.gltf` contains a two-joint skin and rotation animation. `morph.gltf` animates
one relative position target. Both use the original panel data in `advanced.bin`.
`meshopt.gltf` uses a required EXT_meshopt_compression buffer view with interleaved
positions/normals/UVs from `meshopt.bin`, compared against the uncompressed panel. The
pinned Three.js MeshoptDecoder runs its single-thread Wasm path without Workers.

Regenerate these three fixtures from `example/js` with `pnpm run fixtures`. The builder
uses the development-only meshoptimizer 0.25.0 encoder; shipped model data are original
Flax fixtures, not downloaded assets. The runtime decoder comes from Three.js 0.186.1.
`worker-quad.drc` is the original two-triangle Draco Worker fixture. The two
`worker-red-*.ktx2` files are original opaque red 8x8 textures encoded as ETC1S and
UASTC, not downloaded images. Regenerate them with
`python3 build-ktx-fixtures.py --basisu /path/to/basisu` from `example/js`, using Basis
Universal v1.60.0, revision `323239a6a5ffa57d6570cfc403be99156e33a8b0`.
`ktx2-fixtures.json` records encoder arguments, sizes and hashes. UASTC disables
Zstandard to keep this bounded fixture independent of a separate decompressor.

The `draco/` and `basis/` runtime decoder files are copied from the fixed Three.js
0.186.1 dependency. Basis Universal is Apache-2.0 licensed; its license is in
`basis/LICENSE`. Three.js is MIT licensed. These are decoder dependencies rather than
original fixture pixels. Arbitrary glTF extensions remain outside this fixture set.

## Expanded Worker scenarios

`worker-grid.meshopt.bin` encodes an original 256×256 vertex grid with interleaved
position, normal and UV data. Its 65,536 vertices produce 2 MiB of decoded bytes;
`worker-grid.json` records the compressed and original SHA-256 hashes. The real Release
acceptance compares every output byte for single-thread, one-Worker and two-Worker
decoding with fresh input identities.

`worker-pattern.png` is 256×256 with four quadrants and alpha 128/255/255/64. Its ETC1S,
UASTC and UASTC+Zstd KTX2 variants contain nine mip levels. The same pinned Basis
builder generates them, verifies the actual KTX2 mip/supercompression header and records
arguments, encoder hash and output hashes in `ktx2-fixtures.json`. Unlike the older
opaque red fixture, `worker-pattern-uastc-zstd.ktx2` exercises Zstandard. The GPU test
checks alpha blending and explicitly samples mip 8 through Three.js TSL.

`worker-combined.gltf` and `worker-combined.glb` combine the original compressed
four-vertex panel, the Zstd UASTC texture and a translation animation. glTF uses
`worker-combined.bin` and an external KTX2 URL; GLB embeds both compressed data and
KTX2. `worker-reference.gltf` uses the same animated Meshopt geometry with the original
PNG, providing a rendered reference. No compression fallback is counted as a Worker
pass.

Regenerate textures first, then the models, from `example/js`:

```sh
python3 build-ktx-fixtures.py --basisu /path/to/pinned/basisu
pnpm run fixtures
```

The [expanded acceptance](../../validation/three-worker-scenarios-results.md) records
concurrent decoding, corrupt input rejection, reuse, actual pixels and repeated Worker
retirement. These controlled fixtures are not large production-model acceptance.
