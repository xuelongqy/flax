#!/usr/bin/env python3
"""Encode original Worker acceptance textures using Basis Universal v1.60.0."""
import argparse
import hashlib
import json
from pathlib import Path
import shutil
import struct
import subprocess
import zlib

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--basisu', type=Path, required=True)
args = parser.parse_args()
encoder = args.basisu.resolve()
version = subprocess.run([encoder, '-help'], capture_output=True, text=True).stdout
assert 'v1.60.0' in version, 'Use the pinned Basis Universal v1.60.0 encoder'
directory = Path(__file__).resolve().parents[1] / 'fixtures/three'

def chunk(name, data):
    return struct.pack('>I', len(data)) + name + data + struct.pack('>I', zlib.crc32(name + data))

png = (b'\x89PNG\r\n\x1a\n' + chunk(b'IHDR', struct.pack('>IIBBBBB', 8, 8, 8, 6, 0, 0, 0))
       + chunk(b'IDAT', zlib.compress((b'\0' + bytes([255, 0, 0, 255]) * 8) * 8)) + chunk(b'IEND', b''))
(directory / 'worker-red.png').write_bytes(png)
rows = bytearray()
colors = [(255, 0, 0, 128), (0, 255, 0, 255), (0, 0, 255, 255), (255, 255, 0, 64)]
for y in range(256):
    rows.append(0)
    for x in range(256):
        rows.extend(colors[(y // 128) * 2 + x // 128])
pattern = (b'\x89PNG\r\n\x1a\n' + chunk(b'IHDR', struct.pack('>IIBBBBB', 256, 256, 8, 6, 0, 0, 0))
           + chunk(b'IDAT', zlib.compress(rows)) + chunk(b'IEND', b''))
(directory / 'worker-pattern.png').write_bytes(pattern)
receipt = {'encoder': 'Basis Universal v1.60.0',
           'revision': '323239a6a5ffa57d6570cfc403be99156e33a8b0',
           'encoderSha256': hashlib.sha256(encoder.read_bytes()).hexdigest(), 'textures': []}
for source, mode, flags, size, levels, scheme in [
    ('red', 'etc1s', [], 8, 1, 1),
    ('red', 'uastc', ['-uastc', '-ktx2_no_zstandard'], 8, 1, 0),
    ('pattern', 'etc1s', ['-mipmap'], 256, 9, 1),
    ('pattern', 'uastc', ['-mipmap', '-uastc', '-ktx2_no_zstandard'], 256, 9, 0),
    ('pattern', 'uastc-zstd', ['-mipmap', '-uastc'], 256, 9, 2),
]:
    name = 'worker-' + source + '-' + mode + '.ktx2'
    command = ['-ktx2', '-no_multithreading', *flags, '-file', 'worker-' + source + '.png', '-output_file', name]
    subprocess.run([encoder, *command], cwd=directory, check=True, capture_output=True)
    data = (directory / name).read_bytes()
    assert data[:12] == b'\xabKTX 20\xbb\r\n\x1a\n' and struct.unpack_from('<II', data, 20) == (size, size)
    assert struct.unpack_from('<II', data, 40) == (levels, scheme), 'Verify mip and supercompression branches'
    receipt['textures'].append({'file': name, 'bytes': len(data),
                               'sha256': hashlib.sha256(data).hexdigest(), 'arguments': command,
                               'width': size, 'height': size, 'levels': levels,
                               'supercompressionScheme': scheme, 'alpha': source == 'pattern'})
transcoder = Path(__file__).resolve().parent / 'node_modules/three/examples/jsm/libs/basis'
(directory / 'basis').mkdir(exist_ok=True)
assert (directory / 'basis/LICENSE').exists(), 'Preserve the bundled Apache-2.0 license'
for name in ['basis_transcoder.js', 'basis_transcoder.wasm']:
    shutil.copyfile(transcoder / name, directory / 'basis' / name)
(directory / 'ktx2-fixtures.json').write_text(json.dumps(receipt, indent=2) + '\n')
print(json.dumps(receipt))
