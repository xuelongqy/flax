import { writeFileSync, readFileSync, mkdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import draco3d from 'draco3d';
import { fileURLToPath } from 'node:url';
import { MeshoptEncoder } from 'meshoptimizer';

const directory = fileURLToPath(new URL('../fixtures/three/', import.meta.url));
const chunks = [],
  views = [],
  accessors = [];
let length = 0;
function accessor(values, componentType, type, count, bounds = {}) {
  const data = new Uint8Array(values.buffer, values.byteOffset, values.byteLength);
  const offset = (length + 3) & ~3;
  chunks.push({ offset, data });
  views.push({ buffer: 0, byteOffset: offset, byteLength: data.length });
  accessors.push({
    bufferView: views.length - 1,
    componentType,
    count,
    type,
    ...bounds,
  });
  length = offset + data.length;
  return accessors.length - 1;
}
const positions = new Float32Array([-0.6, 0, 0, 0.6, 0, 0, -0.6, 1.2, 0, 0.6, 1.2, 0]);
const normals = new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]);
const uv = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);
const attributes = {
  POSITION: accessor(positions, 5126, 'VEC3', 4, {
    min: [-0.6, 0, 0],
    max: [0.6, 1.2, 0],
  }),
  NORMAL: accessor(normals, 5126, 'VEC3', 4),
  TEXCOORD_0: accessor(uv, 5126, 'VEC2', 4),
};
const indices = new Uint16Array([0, 1, 2, 2, 1, 3]);
const index = accessor(indices, 5123, 'SCALAR', 6);
const joints = accessor(
  new Uint16Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0]),
  5123,
  'VEC4',
  4,
);
const weights = accessor(
  new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0]),
  5126,
  'VEC4',
  4,
);
const binds = accessor(
  new Float32Array([
    1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0,
    0, -0.6, 0, 1,
  ]),
  5126,
  'MAT4',
  2,
);
const times = accessor(new Float32Array([0, 0.5, 1]), 5126, 'SCALAR', 3, {
  min: [0],
  max: [1],
});
const rotations = accessor(
  new Float32Array([0, 0, 0, 1, 0, 0, 0.5, Math.sqrt(0.75), 0, 0, 0, 1]),
  5126,
  'VEC4',
  3,
);
const delta = accessor(
  new Float32Array([0, 0, 0, 0, 0, 0, 0.65, 0, 0, 0.65, 0, 0]),
  5126,
  'VEC3',
  4,
  { min: [0, 0, 0], max: [0.65, 0, 0] },
);
const influences = accessor(new Float32Array([0, 1, 0]), 5126, 'SCALAR', 3);
const bytes = new Uint8Array(length);
for (const chunk of chunks) bytes.set(chunk.data, chunk.offset);
writeFileSync(directory + 'advanced.bin', bytes);
function model() {
  return {
    asset: { version: '2.0', generator: 'Flax original Three.js acceptance fixtures' },
    scene: 0,
    scenes: [{ nodes: [0] }],
    buffers: [{ uri: 'advanced.bin', byteLength: bytes.length }],
    bufferViews: views,
    accessors,
    extensionsUsed: ['KHR_materials_unlit'],
    images: [{ uri: 'checker.png' }],
    samplers: [{ magFilter: 9728, minFilter: 9728 }],
    textures: [{ source: 0, sampler: 0 }],
    materials: [
      {
        pbrMetallicRoughness: {
          baseColorTexture: { index: 0 },
          metallicFactor: 0,
          roughnessFactor: 1,
        },
        doubleSided: true,
        extensions: { KHR_materials_unlit: {} },
      },
    ],
    meshes: [
      { primitives: [{ attributes: { ...attributes }, indices: index, material: 0 }] },
    ],
    nodes: [{ name: 'Panel', mesh: 0 }],
  };
}
const skin = model();
skin.nodes = [
  { name: 'SkinnedPanel', mesh: 0, skin: 0 },
  { name: 'RootJoint', children: [2] },
  { name: 'TipJoint', translation: [0, 0.6, 0] },
];
skin.scenes[0].nodes = [0, 1];
Object.assign(skin.meshes[0].primitives[0].attributes, {
  JOINTS_0: joints,
  WEIGHTS_0: weights,
});
skin.skins = [{ inverseBindMatrices: binds, skeleton: 1, joints: [1, 2] }];
skin.animations = [
  {
    name: 'Bend',
    samplers: [{ input: times, output: rotations, interpolation: 'LINEAR' }],
    channels: [{ sampler: 0, target: { node: 2, path: 'rotation' } }],
  },
];
const morph = model();
morph.nodes[0].name = 'MorphPanel';
morph.meshes[0].primitives[0].targets = [{ POSITION: delta }];
morph.meshes[0].weights = [0];
morph.meshes[0].extras = { targetNames: ['Sway'] };
morph.animations = [
  {
    name: 'Sway',
    samplers: [{ input: times, output: influences, interpolation: 'LINEAR' }],
    channels: [{ sampler: 0, target: { node: 0, path: 'weights' } }],
  },
];
await MeshoptEncoder.ready;
const vertices = new Float32Array(32);
for (let i = 0; i < 4; i++) {
  vertices.set(positions.subarray(i * 3, i * 3 + 3), i * 8);
  vertices.set(normals.subarray(i * 3, i * 3 + 3), i * 8 + 3);
  vertices.set(uv.subarray(i * 2, i * 2 + 2), i * 8 + 6);
}
const compressed = MeshoptEncoder.encodeGltfBuffer(
  new Uint8Array(vertices.buffer),
  4,
  32,
  'ATTRIBUTES',
);
const compressedIndices = MeshoptEncoder.encodeGltfBuffer(
  new Uint8Array(indices.buffer),
  6,
  2,
  'TRIANGLES',
);
const indexOffset = (compressed.length + 3) & ~3,
  packed = new Uint8Array(indexOffset + compressedIndices.byteLength);
packed.set(compressed);
packed.set(compressedIndices, indexOffset);
writeFileSync(directory + 'meshopt.bin', packed);
const meshopt = model();
meshopt.nodes[0].name = 'MeshoptPanel';
meshopt.extensionsUsed.push('EXT_meshopt_compression');
meshopt.extensionsRequired = ['EXT_meshopt_compression'];
meshopt.buffers = [
  { uri: 'meshopt.bin', byteLength: packed.length },
  {
    byteLength: vertices.byteLength + indices.byteLength,
    extensions: { EXT_meshopt_compression: { fallback: true } },
  },
];
meshopt.bufferViews = [
  {
    buffer: 1,
    byteLength: vertices.byteLength,
    byteStride: 32,
    extensions: {
      EXT_meshopt_compression: {
        buffer: 0,
        byteOffset: 0,
        byteLength: compressed.length,
        byteStride: 32,
        count: 4,
        mode: 'ATTRIBUTES',
        filter: 'NONE',
      },
    },
  },
  {
    buffer: 1,
    byteOffset: vertices.byteLength,
    byteLength: indices.byteLength,
    extensions: {
      EXT_meshopt_compression: {
        buffer: 0,
        byteOffset: indexOffset,
        byteLength: compressedIndices.byteLength,
        byteStride: 2,
        count: 6,
        mode: 'TRIANGLES',
        filter: 'NONE',
      },
    },
  },
];
meshopt.accessors = [
  {
    bufferView: 0,
    byteOffset: 0,
    componentType: 5126,
    count: 4,
    type: 'VEC3',
    min: [-0.6, 0, 0],
    max: [0.6, 1.2, 0],
  },
  { bufferView: 0, byteOffset: 12, componentType: 5126, count: 4, type: 'VEC3' },
  { bufferView: 0, byteOffset: 24, componentType: 5126, count: 4, type: 'VEC2' },
  { bufferView: 1, componentType: 5123, count: 6, type: 'SCALAR' },
];
meshopt.meshes[0].primitives[0].attributes = { POSITION: 0, NORMAL: 1, TEXCOORD_0: 2 };
meshopt.meshes[0].primitives[0].indices = 3;
for (const [name, value] of [
  ['skinned', skin],
  ['morph', morph],
  ['meshopt', meshopt],
])
  writeFileSync(directory + name + '.gltf', JSON.stringify(value, null, 2) + '\n');
console.log(
  JSON.stringify({
    geometryBytes: vertices.byteLength,
    meshoptBytes: compressed.length,
    fixtures: ['skinned', 'morph', 'meshopt'],
  }),
);

// Original two-triangle quad; only the development encoder is Node-specific.
const draco = await draco3d.createEncoderModule({});
const dracoMesh = new draco.Mesh(),
  builder = new draco.MeshBuilder();
const encoder = new draco.Encoder(),
  encoded = new draco.DracoInt8Array();
try {
  builder.AddFloatAttributeToMesh(
    dracoMesh,
    draco.POSITION,
    4,
    3,
    new Float32Array([-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, 1, 0]),
  );
  builder.AddFacesToMesh(dracoMesh, 2, new Uint32Array([0, 1, 2, 0, 2, 3]));
  encoder.SetSpeedOptions(5, 5);
  encoder.SetAttributeQuantization(draco.POSITION, 14);
  const size = encoder.EncodeMeshToDracoBuffer(dracoMesh, encoded);
  if (size <= 0) throw new Error('Draco fixture encoding failed');
  const bytes = Uint8Array.from({ length: size }, (_, i) => encoded.GetValue(i));
  writeFileSync(directory + 'worker-quad.drc', bytes);
} finally {
  for (const object of [encoded, encoder, builder, dracoMesh]) draco.destroy(object);
}
mkdirSync(directory + 'draco', { recursive: true });
for (const name of ['draco_wasm_wrapper.js', 'draco_decoder.wasm'])
  writeFileSync(
    directory + 'draco/' + name,
    readFileSync(new URL(import.meta.resolve('three/addons/libs/draco/gltf/' + name))),
  );

// A nontrivial identical-input decode workload, independent of rendering costs.
const gridCount = 256 * 256,
  grid = new Float32Array(gridCount * 8);
for (let i = 0; i < gridCount; i++)
  grid.set(
    [i % 256, i >> 8, (i % 17) / 16, 0, 0, 1, (i % 256) / 255, (i >> 8) / 255],
    i * 8,
  );
const gridPacked = MeshoptEncoder.encodeGltfBuffer(
  new Uint8Array(grid.buffer),
  gridCount,
  32,
  'ATTRIBUTES',
);
writeFileSync(directory + 'worker-grid.meshopt.bin', gridPacked);
writeFileSync(
  directory + 'worker-grid.json',
  JSON.stringify(
    {
      count: gridCount,
      stride: 32,
      mode: 'ATTRIBUTES',
      inputBytes: gridPacked.length,
      outputBytes: grid.byteLength,
      inputSha256: createHash('sha256').update(gridPacked).digest('hex'),
      outputSha256: createHash('sha256')
        .update(new Uint8Array(grid.buffer))
        .digest('hex'),
    },
    null,
    2,
  ) + '\n',
);

// One real asset combines compressed geometry, Basis texture, and animation.
const combined = structuredClone(meshopt),
  animation = new Float32Array([0, 0.5, 1, 0, 0, 0, 0.65, 0, 0, 0, 0, 0]),
  animationOffset = (packed.length + 3) & ~3,
  combinedBytes = new Uint8Array(animationOffset + animation.byteLength);
combinedBytes.set(packed);
combinedBytes.set(new Uint8Array(animation.buffer), animationOffset);
combined.buffers[0] = { uri: 'worker-combined.bin', byteLength: combinedBytes.length };
combined.nodes[0].name = 'CombinedPanel';
combined.extensionsUsed.push('KHR_texture_basisu');
combined.extensionsRequired.push('KHR_texture_basisu');
combined.images = [{ uri: 'worker-pattern-uastc-zstd.ktx2' }];
combined.samplers = [{ magFilter: 9729, minFilter: 9987 }];
combined.textures = [{ sampler: 0, extensions: { KHR_texture_basisu: { source: 0 } } }];
combined.materials[0].alphaMode = 'BLEND';
combined.bufferViews.push(
  { buffer: 0, byteOffset: animationOffset, byteLength: 12 },
  { buffer: 0, byteOffset: animationOffset + 12, byteLength: 36 },
);
combined.accessors.push(
  { bufferView: 2, componentType: 5126, count: 3, type: 'SCALAR', min: [0], max: [1] },
  { bufferView: 3, componentType: 5126, count: 3, type: 'VEC3' },
);
combined.animations = [
  {
    name: 'Slide',
    samplers: [{ input: 4, output: 5, interpolation: 'LINEAR' }],
    channels: [{ sampler: 0, target: { node: 0, path: 'translation' } }],
  },
];
writeFileSync(directory + 'worker-combined.bin', combinedBytes);
writeFileSync(
  directory + 'worker-combined.gltf',
  JSON.stringify(combined, null, 2) + '\n',
);
const reference = structuredClone(combined);
reference.extensionsUsed = reference.extensionsUsed.filter(
  (name) => name !== 'KHR_texture_basisu',
);
reference.extensionsRequired = ['EXT_meshopt_compression'];
reference.images = [{ uri: 'worker-pattern.png' }];
reference.textures = [{ sampler: 0, source: 0 }];
writeFileSync(
  directory + 'worker-reference.gltf',
  JSON.stringify(reference, null, 2) + '\n',
);
const embedded = structuredClone(combined),
  texture = readFileSync(directory + 'worker-pattern-uastc-zstd.ktx2'),
  textureOffset = (combinedBytes.length + 3) & ~3,
  binary = Buffer.alloc((textureOffset + texture.length + 3) & ~3);
binary.set(combinedBytes);
binary.set(texture, textureOffset);
embedded.buffers[0] = { byteLength: binary.length };
embedded.bufferViews.push({
  buffer: 0,
  byteOffset: textureOffset,
  byteLength: texture.length,
});
embedded.images = [{ bufferView: 4, mimeType: 'image/ktx2' }];
const json = Buffer.from(JSON.stringify(embedded)),
  jsonChunk = Buffer.alloc((json.length + 3) & ~3, 0x20),
  glb = Buffer.alloc(12 + 8 + jsonChunk.length + 8 + binary.length);
json.copy(jsonChunk);
glb.writeUInt32LE(0x46546c67, 0);
glb.writeUInt32LE(2, 4);
glb.writeUInt32LE(glb.length, 8);
glb.writeUInt32LE(jsonChunk.length, 12);
glb.writeUInt32LE(0x4e4f534a, 16);
jsonChunk.copy(glb, 20);
glb.writeUInt32LE(binary.length, 20 + jsonChunk.length);
glb.writeUInt32LE(0x004e4942, 24 + jsonChunk.length);
binary.copy(glb, 28 + jsonChunk.length);
writeFileSync(directory + 'worker-combined.glb', glb);
if (combined.animations.length !== 1 || !gridPacked.length || texture.length < 80)
  throw new Error('Worker fixtures must include geometry, texture, and animation');
