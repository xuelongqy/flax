import { zlibSync } from 'three/addons/libs/fflate.module.js';

const crcTable = new Uint32Array(256);
for (let i = 0; i < crcTable.length; i++) {
  let value = i;
  for (let bit = 0; bit < 8; bit++)
    value = value & 1 ? 0xedb88320 ^ (value >>> 1) : value >>> 1;
  crcTable[i] = value >>> 0;
}

function chunk(type, data) {
  const bytes = new Uint8Array(data.length + 12);
  const view = new DataView(bytes.buffer);
  view.setUint32(0, data.length);
  for (let i = 0; i < 4; i++) bytes[i + 4] = type.charCodeAt(i);
  bytes.set(data, 8);
  let crc = 0xffffffff;
  for (let i = 4; i < data.length + 8; i++)
    crc = crcTable[(crc ^ bytes[i]) & 255] ^ (crc >>> 8);
  view.setUint32(data.length + 8, (crc ^ 0xffffffff) >>> 0);
  return bytes;
}

export function encodeRgbaPng(rgba, width, height) {
  if (
    !Number.isInteger(width) ||
    !Number.isInteger(height) ||
    width <= 0 ||
    height <= 0 ||
    rgba.length !== width * height * 4
  )
    throw RangeError('PNG dimensions must match the RGBA byte count');
  const header = new Uint8Array(13);
  const view = new DataView(header.buffer);
  view.setUint32(0, width);
  view.setUint32(4, height);
  header[8] = 8;
  header[9] = 6;
  const rowBytes = width * 4;
  const filtered = new Uint8Array((rowBytes + 1) * height);
  for (let row = 0; row < height; row++)
    filtered.set(
      rgba.subarray(row * rowBytes, (row + 1) * rowBytes),
      row * (rowBytes + 1) + 1,
    );
  const chunks = [
    chunk('IHDR', header),
    chunk('IDAT', zlibSync(filtered, { level: 1 })),
    chunk('IEND', new Uint8Array()),
  ];
  const png = new Uint8Array(
    8 + chunks.reduce((size, value) => size + value.length, 0),
  );
  png.set([137, 80, 78, 71, 13, 10, 26, 10]);
  let offset = 8;
  for (const value of chunks) {
    png.set(value, offset);
    offset += value.length;
  }
  return png;
}

export async function readBgraTexture(device, texture, width, height) {
  if (
    texture.format !== 'bgra8unorm' ||
    texture.width !== width ||
    texture.height !== height
  )
    throw Error('Snapshot requires the matched BGRA8 canvas format and dimensions');
  const rowBytes = width * 4;
  const stride = Math.ceil(rowBytes / 256) * 256;
  const buffer = device.createBuffer({
    size: stride * height,
    usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ,
  });
  let mapped = false;
  try {
    const encoder = device.createCommandEncoder();
    encoder.copyTextureToBuffer({ texture }, { buffer, bytesPerRow: stride }, [
      width,
      height,
    ]);
    device.queue.submit([encoder.finish()]);
    await buffer.mapAsync(GPUMapMode.READ);
    mapped = true;
    const source = new Uint8Array(buffer.getMappedRange());
    const rgba = new Uint8Array(rowBytes * height);
    for (let row = 0; row < height; row++)
      for (let x = 0; x < rowBytes; x += 4) {
        const from = row * stride + x,
          to = row * rowBytes + x;
        rgba[to] = source[from + 2];
        rgba[to + 1] = source[from + 1];
        rgba[to + 2] = source[from];
        rgba[to + 3] = source[from + 3];
      }
    return rgba;
  } finally {
    if (mapped) buffer.unmap();
    buffer.destroy();
  }
}
