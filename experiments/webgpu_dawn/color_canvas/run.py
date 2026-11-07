#!/usr/bin/env python3
"""Build and sample the real Flutter macOS WebGPU color canvas."""

import argparse
import hashlib
import json
import os
import plistlib
from pathlib import Path
import re
import shutil
import subprocess
import sys
import tempfile

HERE = Path(__file__).resolve().parent
ROOT = HERE.parents[2]
APP_NAME = 'flax_webgpu_example'


def build(flutter_root, engine_src, output, edr=False):
    runner = ROOT / 'packages/flax_webgpu/tool/run_macos.py'
    source = runner.read_text()
    # The benchmark staging path uses the normal WebGPU native assets and no Three.js fixtures.
    for name, path in {
        'output': output,
        'dart_entry': HERE / 'app.dart',
        'js_entry': HERE / 'app.mjs',
        'engine': engine_src,
    }.items():
        source, count = re.subn(rf'^    {name} = .+$', f'    {name} = Path({str(path)!r})', source, flags=re.M)
        if count != 1:
            raise RuntimeError(f'WebGPU runner staging changed: {name}')
    source, count = re.subn(
        r'^    window = .+\n    text = .+\n    text = re\.sub\(.+\n.+\n    window\.write_text\(text\)$',
        f"    shutil.copyfile({str(HERE / 'MainFlutterWindow.swift')!r}, app / 'macos/Runner/MainFlutterWindow.swift')",
        source,
        flags=re.M,
    )
    if count != 1:
        raise RuntimeError('WebGPU runner window staging changed')
    if edr:
        plist_stage = """    info = app / 'macos/Runner/Info.plist'
    values = plistlib.loads(info.read_bytes())
    values['FLTEnableExtendedDynamicRange'] = True
    info.write_bytes(plistlib.dumps(values))
"""
        marker = '    stage.write_text(f"import'
        if source.count(marker) != 2:
            raise RuntimeError('WebGPU runner app staging changed')
        before, after = source.rsplit(marker, 1)
        source = before + plist_stage + marker + after
    sys.argv = [str(runner), '--flutter-root', str(flutter_root), '--benchmark', '--build-only']
    exec(compile(source, str(runner), 'exec'), {'__name__': '__main__', '__file__': str(runner)})


def digest(path):
    with path.open('rb') as stream:
        return hashlib.file_digest(stream, 'sha256').hexdigest()


def uuid(path):
    output = subprocess.check_output(['xcrun', 'dwarfdump', '--uuid', str(path)], cwd=ROOT, text=True)
    return output.split()[1:3]


def require(condition, message):
    if not condition:
        raise RuntimeError(message)


def close(left, right, tolerance=0.01):
    return len(left) == len(right) and all(abs(a - b) <= tolerance for a, b in zip(left, right))


def validate(result, expect):
    require(not result.get('error') and not result.get('shutdownError'), f'Probe error: {result}')
    webgpu = result['webgpu']
    require(not webgpu.get('error') and not webgpu['uncapturedErrors'], f'WebGPU error: {webgpu}')
    rows = {row['name']: row for row in webgpu['rows']}
    flutter = result['flutter']
    pixels = {sample['name']: sample['rgba'] for sample in flutter['samples']}
    sample_count = 2 * 3 * len(rows)
    require(len(pixels) == sample_count, 'Incomplete IOSurface samples')

    def row_ok(name):
        row = rows[name]
        require(row['actual'] == row['requested'] and not row['error'] and not row['validation'],
                f'{name} WebGPU render failed: {row}')

    primary = ('green', 'red', 'white')
    srgb = [(0, 1, 0, 1), (1, 0, 0, 1), (1, 1, 1, 1)]
    row_ok('srgb')
    for name, color in zip(primary, srgb):
        for side in ['webgpu', 'flutter']:
            require(close(pixels[f'{side}.srgb.{name}'], color), f'{side} sRGB calibration failed for {name}')

    if expect in ['p3', 'hdr']:
        row_ok('p3')
        for name in primary:
            require(close(pixels[f'webgpu.p3.{name}'], pixels[f'flutter.p3.{name}']),
                    f'WebGPU and Flutter P3 differ for {name}')
        for name in ['green', 'red']:
            require(not close(pixels[f'webgpu.p3.{name}'], pixels[f'webgpu.srgb.{name}'], 0.1),
                    f'P3 {name} was not distinguishable from sRGB')
    if expect in ['p3', 'hdr']:
        for row in ['hdr', 'hdr-p3', 'standard-fp16', 'standard-p3-fp16', 'p3-alpha']:
            row_ok(row)
        for row, colors in [
            ('hdr-p3', ['green', 'red']),
            ('standard-fp16', ['wide-red', '1.60', 'white']),
            ('standard-p3-fp16', ['green', 'red', '1.60']),
            ('p3-alpha', ['green', 'red', 'transparent']),
        ]:
            for color in colors:
                require(close(pixels[f'webgpu.{row}.{color}'], pixels[f'flutter.{row}.{color}']),
                        f'WebGPU and Flutter differ for {row}.{color}')
    if expect == 'hdr':
        require(flutter['format'] == 'RGhA' and flutter['preferredDynamicRange'] == 'high',
                'Expected an FP16 Flutter backing store and High dynamic range')
        require(close(pixels['webgpu.hdr-p3.1.60'], pixels['flutter.hdr-p3.1.60']),
                'P3 HDR did not retain the highlight')
        for name, gray in [('white', 1), ('1.08', 1.08), ('1.60', 1.6)]:
            for side in ['webgpu', 'flutter']:
                require(close(pixels[f'{side}.hdr.{name}'], (gray, gray, gray, 1)),
                        f'{side} HDR sample failed for {name}')

    capture = flutter['capture']
    capture_calibrated = False
    if capture['status'] == 'sampled':
        captured = {sample['name']: sample['rgba'] for sample in capture['samples']}
        capture_calibrated = len(captured) == sample_count and all(
            close(captured[f'{side}.srgb.{name}'], color, 0.05)
            for name, color in zip(primary, srgb) for side in ['webgpu', 'flutter']
        )
        if capture_calibrated and expect == 'hdr':
            for name in ['standard-fp16', 'standard-p3-fp16']:
                require(close(captured[f'webgpu.{name}.1.60'], (1, 1, 1, 1), 0.05),
                        f'{name} exceeded SDR white in the EDR window')
            require(captured['webgpu.hdr-p3.1.60'][0] > 2.8,
                    'P3 HDR highlight was lost in window capture')
    return {'expect': expect, 'iosurfaceCalibration': True, 'captureCalibration': capture_calibrated}


def measure(engine_src, output, evidence, expect):
    product = output / f'app/build/macos/Build/Products/Release/{APP_NAME}.app'
    frameworks = product / 'Contents/Frameworks'
    engine = Path('FlutterMacOS.framework/Versions/A/FlutterMacOS')
    selected = engine_src / 'out/flax_mac_release_arm64' / engine
    engine_uuid = uuid(selected)
    engine_hash = digest(selected)
    require(uuid(frameworks / engine) == engine_uuid, 'Application loaded a different Flutter engine')
    subprocess.run(['/usr/bin/codesign', '--verify', '--deep', '--strict', str(product)], cwd=ROOT, check=True)
    executable = product / 'Contents/MacOS' / APP_NAME
    app_framework = frameworks / 'App.framework/Versions/A'
    assets = app_framework / 'Resources/flutter_assets'
    manifest = assets / 'NativeAssetsManifest.json'
    native = json.loads(manifest.read_text())['native-assets']['macos_arm64']
    native_paths = [frameworks / entry[1] for name, entry in native.items()
                    if name.startswith('package:flax_ffi_assets/')]
    require(len(native_paths) == 1, 'Expected one staged WebGPU native code asset')
    measured = [executable, frameworks / engine, app_framework / 'App', manifest,
                assets / 'assets/app.js', assets / 'assets/flax_modules/modules.json', *native_paths]
    hashes = {str(path.relative_to(product)): digest(path) for path in measured}
    with (evidence / 'application.log').open('w') as log:
        completed = subprocess.run([str(executable)], cwd=ROOT, stdout=log, stderr=subprocess.STDOUT, timeout=60)
    (evidence / 'application.exit').write_text(f'{completed.returncode}\n')
    prefix = 'FLAX_COLOR_CANVAS '
    lines = (evidence / 'application.log').read_text().splitlines()
    entries = [line.removeprefix(prefix) for line in lines if line.startswith(prefix)]
    require(len(entries) == 1, 'Expected one probe JSON line in application.log')
    result = json.loads(entries[0])
    receipt = {
        'application': str(product), 'signatureVerified': True, 'applicationSha256': hashes,
        'engine': str(selected), 'engineUuid': engine_uuid, 'engineSha256': engine_hash,
        'hostExtendedDynamicRange': plistlib.loads((product / 'Contents/Info.plist').read_bytes())
            .get('FLTEnableExtendedDynamicRange', False),
        'exit': completed.returncode, 'result': result,
    }
    try:
        require(completed.returncode == 0, f'Application exited with {completed.returncode}')
        require(digest(selected) == engine_hash and all(
            digest(path) == hashes[str(path.relative_to(product))] for path in measured
        ), 'The measured app or selected engine changed during execution')
        receipt['checks'] = validate(result, expect)
    finally:
        (evidence / 'result.json').write_text(json.dumps(receipt, indent=2) + '\n')
    print(f'> {evidence / "result.json"}')


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--flutter-root', type=Path, required=True)
    parser.add_argument('--engine-src', type=Path, help='Engine source layout containing the Release out directory')
    parser.add_argument('--evidence', type=Path, required=True, help='New directory for logs and JSON')
    parser.add_argument('--expect', choices=['observe', 'p3', 'hdr'], default='observe')
    parser.add_argument('--edr', action='store_true', help='Enable EDR in the probe app Info.plist')
    parser.add_argument('--keep-build', action='store_true', help='Retain the generated application and build files')
    args = parser.parse_args()
    evidence = args.evidence.resolve()
    evidence.mkdir(parents=True)
    temporary = ROOT / '.local/tmp'
    temporary.mkdir(parents=True, exist_ok=True)
    os.environ.update(TMPDIR=str(temporary), TMP=str(temporary), TEMP=str(temporary))
    os.environ.pop('FLAX_MACOS_TEAM', None)
    output = Path(tempfile.mkdtemp(prefix='webgpu-color-', dir=temporary))
    (evidence / 'scratch.path').write_text(str(output) + '\n')
    flutter_root = args.flutter_root.resolve()
    engine_src = args.engine_src.resolve() if args.engine_src else flutter_root / 'engine/src'
    try:
        build(flutter_root, engine_src, output, args.edr)
        measure(engine_src, output, evidence, args.expect)
    finally:
        for log in output.glob('*.log'):
            shutil.copyfile(log, evidence / log.name)
        if not args.keep_build:
            shutil.rmtree(output)


if __name__ == '__main__':
    main()
