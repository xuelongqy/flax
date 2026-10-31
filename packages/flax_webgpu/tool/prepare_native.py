#!/usr/bin/env python3
"""Explicit producer step for the pinned, self-contained macOS arm64 native asset."""
import argparse
import hashlib
import json
import os
from pathlib import Path
import shutil
import subprocess
import tarfile

PACKAGE = Path(__file__).resolve().parents[1]
ROOT = PACKAGE.parents[1]
REVISION = '5fbd545292cb7a4a9a275e322abec6007ffe2ae8'
ARCHIVE_SHA256 = '8eed5796e1c3403515c331a098fc9e8b5b738f832d9736be6843db891235c92b'


def digest(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--sdk', required=True, type=Path)
    parser.add_argument('--benchmark', action='store_true')
    args = parser.parse_args()
    sdk = args.sdk.resolve()
    archive = sdk / 'dawn.tar.gz'
    if digest(archive) != ARCHIVE_SHA256:
        raise RuntimeError('The producer requires the pinned Dawn SDK archive')
    # A valid archive beside an edited extracted SDK must not certify the latter.
    with tarfile.open(archive) as source:
        for member in source.getmembers():
            if not member.isfile():
                continue
            relative = Path(member.name).relative_to(member.name.split('/')[0])
            if relative.parts[0] not in ('include', 'lib'):
                continue
            original = source.extractfile(member).read()
            if hashlib.sha256(original).hexdigest() != digest(sdk / relative):
                raise RuntimeError(f'Extracted Dawn SDK changed: {relative}')
    notices = PACKAGE / 'THIRD_PARTY_NOTICES.txt'
    notice_inputs = json.loads((PACKAGE / 'native/notices.json').read_text())
    if (notice_inputs['dawnRevision'] != REVISION or
            notice_inputs['dawnArchiveSha256'] != ARCHIVE_SHA256 or
            notice_inputs['dawnStaticLibrarySha256'] != digest(sdk / 'lib/libwebgpu_dawn.a') or
            notice_inputs['noticesSha256'] != digest(notices)):
        raise RuntimeError('Pinned native notices do not match the Dawn producer inputs')
    temporary = ROOT / '.local/tmp'
    temporary.mkdir(parents=True, exist_ok=True)
    env = dict(os.environ, TMPDIR=str(temporary), TMP=str(temporary), TEMP=str(temporary))
    build = ROOT / '.local/webgpu-native'
    subprocess.run(['python3', str(PACKAGE / 'tool/generate.py'), '--sdk', str(sdk)],
                   cwd=ROOT, env=env, check=True)
    subprocess.run(['cmake', '-S', str(PACKAGE / 'native'), '-B', str(build), '-G', 'Ninja',
                    '-DCMAKE_BUILD_TYPE=Release', '-DCMAKE_OSX_DEPLOYMENT_TARGET=26.0',
                    f'-DFLAX_WEBGPU_BENCHMARK={"ON" if args.benchmark else "OFF"}',
                    f'-DCMAKE_PREFIX_PATH={sdk}'], env=env, check=True)
    subprocess.run(['cmake', '--build', str(build), '-j4'], env=env, check=True)
    binary = build / 'libflax_webgpu.dylib'
    dependencies = subprocess.check_output(['otool', '-L', str(binary)], text=True)
    for line in dependencies.splitlines()[2:]:
        if not line.strip().startswith(('/usr/lib/', '/System/Library/')):
            raise RuntimeError(f'Native asset has a non-system dependency: {line}')
    assert subprocess.check_output(['lipo', '-archs', str(binary)], text=True).strip() == 'arm64'
    output = PACKAGE / 'js/native'
    output.mkdir(exist_ok=True)
    shutil.copyfile(binary, output / binary.name)
    shutil.copyfile(notices, output / 'THIRD_PARTY_NOTICES.txt')
    sources = sorted([notices, PACKAGE / 'js/native.json', Path(__file__).resolve(), PACKAGE / 'tool/generate.py',
                      PACKAGE / 'tool/public_types.py', PACKAGE / 'native/notices.json',
                      PACKAGE / 'native/CMakeLists.txt', PACKAGE / 'native/exports.txt',
                      *PACKAGE.joinpath('native/src').glob('*'),
                      *PACKAGE.joinpath('native/include/flax').glob('*'),
                      *PACKAGE.joinpath('native/generated').glob('*')])
    sources = [path for path in sources if path.is_file()]
    provenance = {'formatVersion': 1, 'dawnRevision': REVISION,
                  'dawnArchiveSha256': ARCHIVE_SHA256, 'target': 'macos-arm64',
                  'minimumMacOS': '26.0', 'engineInteropVersion': 1,
                  'benchmark': args.benchmark,
                  'notices': notice_inputs,
                  'compiler': subprocess.check_output(['clang', '--version'], text=True).strip(),
                  'sources': {str(path.relative_to(PACKAGE)): digest(path) for path in sources},
                  'files': {path.name: digest(path) for path in sorted(output.iterdir())
                            if path.is_file() and path.name != 'provenance.json'}}
    (output / 'provenance.json').write_text(json.dumps(provenance, indent=2) + '\n')
    print(f'Prepared {output}; consumers need no Dawn SDK or install scripts')


if __name__ == '__main__':
    main()
