#!/usr/bin/env python3
"""Build and measure the macOS Release WebGPU color paths."""

import argparse
import hashlib
from importlib.util import module_from_spec, spec_from_file_location
import json
import math
import os
from pathlib import Path
import plistlib
import re
import shutil
import subprocess
import tempfile
import time

HERE = Path(__file__).resolve().parent
ROOT = HERE.parents[3]
SPEC = spec_from_file_location('color_probe', HERE.parent / 'run.py')
PROBE = module_from_spec(SPEC)
SPEC.loader.exec_module(PROBE)
PRODUCT = 'app/build/macos/Build/Products/Release/flax_webgpu_example.app'
ENGINE = 'FlutterMacOS.framework/Versions/A/FlutterMacOS'
EXECUTABLE = 'Contents/MacOS/flax_webgpu_example'
MODES = {
    'srgb': ('bgra8unorm', 'srgb', 'standard'),
    'p3': ('bgra8unorm', 'display-p3', 'standard'),
    'hdr': ('rgba16float', 'srgb', 'extended'),
}
ORDERS = [('srgb', 'p3', 'hdr'), ('p3', 'hdr', 'srgb'), ('hdr', 'srgb', 'p3')]


class InterruptedArm(RuntimeError):
    pass


def require(condition, message):
    if not condition:
        raise RuntimeError(message)


def write_json(path, value):
    path.write_text(json.dumps(value, indent=2) + '\n')


def set_temporary(root):
    temporary = root / '.local/tmp'
    temporary.mkdir(parents=True, exist_ok=True)
    os.environ.update(TMPDIR=str(temporary), TMP=str(temporary), TEMP=str(temporary))
    return temporary


def verify_signature(app):
    subprocess.run(['/usr/bin/codesign', '--verify', '--deep', '--strict', str(app)], check=True)


def build_jobs(exclude_pid=None):
    processes = subprocess.check_output(['ps', '-Ao', 'pid=,pcpu=,comm='], text=True)
    jobs = set()
    for line in processes.splitlines():
        pid, cpu, command = line.split(maxsplit=2)
        if int(pid) == exclude_pid:
            continue
        name = Path(command).name
        compiling = re.fullmatch(r'(clang(?:\+\+|-[0-9.]+)?|ld(?:-classic|-prime)?|ninja|xcodebuild|'
                                 r'swiftc|swift-frontend|gen_snapshot(?:_arm64)?|tsc|esbuild|dsymutil)', name)
        competing = (name in ('java', 'dartvm', 'dartaotruntime', 'node') or
                     name.startswith(('qemu-system-', 'flax_')) or '/CoreSimulator/' in command)
        if compiling or (competing and float(cpu) >= 20):
            jobs.add(f'{name} ({pid})')
    return jobs


def wait_for_quiet():
    limit = time.monotonic() + 300
    previous = set()
    while jobs := build_jobs():
        require(time.monotonic() < limit, f'Build activity did not settle: {sorted(jobs)}')
        if jobs != previous:
            print(f'Waiting for build jobs: {", ".join(sorted(jobs))}', flush=True)
        previous = jobs
        time.sleep(2)


def build(args):
    evidence = args.evidence.resolve()
    evidence.mkdir(parents=True)
    runtime = args.runtime_root.resolve()
    temporary = set_temporary(runtime)
    scratch = Path(tempfile.mkdtemp(prefix='webgpu-color-bench-', dir=temporary))
    (evidence / 'scratch.path').write_text(str(scratch) + '\n')
    os.environ.pop('FLAX_MACOS_TEAM', None)
    engine_src = args.engine_src.resolve()
    selected = engine_src / 'out/flax_mac_release_arm64' / ENGINE
    expected_uuid = PROBE.uuid(selected)
    engine_hash = PROBE.digest(selected)
    shader = runtime / 'experiments/webgpu_dawn/scene.wgsl'
    require(PROBE.digest(shader) == PROBE.digest(ROOT / shader.relative_to(runtime)),
            'Runtime checkout has a different benchmark shader')
    provenance_path = runtime / 'packages/flax_webgpu/js/native/provenance.json'
    provenance = json.loads(provenance_path.read_text())
    require(provenance['benchmark'] == args.native,
            'Prepare the native asset with --benchmark for native metrics, or omit both flags for throughput')
    source_files = [shader, HERE / 'app.mjs', HERE / 'app.dart', HERE / 'MainFlutterWindow.swift', HERE / 'run.py']
    PROBE.HERE = HERE
    if args.native:
        entry = scratch / 'native-entry'
        entry.mkdir()
        for name in ('app.dart', 'MainFlutterWindow.swift'):
            shutil.copyfile(HERE / name, entry / name)
        source_files.append(HERE / 'native_report.mjs')
        (entry / 'app.mjs').write_text(''.join(
            f'import {json.dumps(str(HERE / name))};\n' for name in ('native_report.mjs', 'app.mjs')
        ))
        PROBE.HERE = entry
    PROBE.ROOT = runtime
    try:
        PROBE.build(args.flutter_root.resolve(), engine_src, scratch, edr=args.enable_edr)
    finally:
        for log in scratch.glob('*.log'):
            shutil.copyfile(log, evidence / log.name)
    app = scratch / PRODUCT
    verify_signature(app)
    info = plistlib.loads((app / 'Contents/Info.plist').read_bytes())
    require(info.get('FLTEnableExtendedDynamicRange', False) is args.enable_edr,
            'The signed app has a different EDR opt-in')
    frameworks = app / 'Contents/Frameworks'
    require(PROBE.uuid(frameworks / ENGINE) == expected_uuid and PROBE.digest(selected) == engine_hash,
            'The packaged Flutter engine differs from the selected build')
    aot = frameworks / 'App.framework/Versions/A'
    assets = aot / 'Resources/flutter_assets'
    manifest = assets / 'NativeAssetsManifest.json'
    native = json.loads(manifest.read_text())['native-assets']['macos_arm64']
    native_paths = [frameworks / entry[1] for name, entry in native.items()
                    if name.startswith('package:flax_ffi_assets/')]
    require(len(native_paths) == 1, 'Expected one packaged WebGPU native asset')
    files = [app / EXECUTABLE, app / 'Contents/Info.plist', frameworks / ENGINE, aot / 'App', manifest,
             assets / 'assets/app.js', assets / 'assets/flax_modules/modules.json', *native_paths]
    source = shader.read_text()
    adjusted_shader = source.replace('1.0 - exp(-light * 0.42)', '6.0 * (1.0 - exp(-light * 0.42))')
    require(adjusted_shader != source, 'The shared shader highlight expression changed')
    write_json(evidence / 'build.json', {
        'application': str(app), 'runtime': str(runtime), 'engine': str(selected),
        'engineUuid': expected_uuid, 'engineSha256': engine_hash, 'edrInfoPlist': args.enable_edr,
        'nativeInstrumentation': args.native, 'nativeProvenance': provenance,
        'sourceSha256': {file.name: PROBE.digest(file) for file in source_files},
        'stagingDriverSha256': PROBE.digest(HERE.parent / 'run.py'),
        'renderedShaderSha256': hashlib.sha256(adjusted_shader.encode()).hexdigest(),
        'applicationSha256': {str(path.relative_to(app)): PROBE.digest(path) for path in files},
    })
    print(evidence / 'build.json', flush=True)


def configuration(mode):
    format, color_space, tone_mapping = MODES[mode]
    return {'format': format, 'colorSpace': color_space,
            'toneMapping': {'mode': tone_mapping}, 'alphaMode': 'opaque'}


def distribution(values):
    if not values:
        return None
    ordered = sorted(values)
    require(all(math.isfinite(value) and value >= 0 for value in ordered), 'Invalid timing sample')
    return {f'p{p}Ms': ordered[math.ceil(len(ordered) * p / 100) - 1] for p in (50, 95, 99)}


def summarize(result, config):
    require('error' not in result and 'shutdownError' not in result, f'Application failed: {result}')
    webgpu = result['webgpu']
    require(webgpu['config'] == config and webgpu['actual'] == config['configuration'],
            'Requested and active WebGPU configurations differ')
    require(webgpu['texture'] == {'width': config['width'], 'height': config['height'],
                                 'format': config['configuration']['format']}, 'Wrong backing texture')
    require(not webgpu['adapter']['isFallbackAdapter'], 'Software adapter')
    start, end = result['window']
    for entry in (start, end):
        if not (entry['active'] and entry['key'] and entry['visible']):
            raise InterruptedArm('Window lost foreground')
        require(len(entry['backingFormats']) == 1, 'Expected one Flutter output surface')
    stable_fields = ('windowFrame', 'viewport', 'backingViewport', 'backingFormats', 'displayID',
                     'displayModePixels', 'displayRefreshHz', 'maximumFramesPerSecond', 'displayScale',
                     'displayColorSpace')
    if start['focusLosses'] != end['focusLosses']:
        raise InterruptedArm('Window briefly lost foreground')
    require(all(start[field] == end[field] for field in stable_fields), 'Display or focus changed during arm')
    flutter = result['flutter']
    require(flutter['physicalViewport'] == start['backingViewport'], 'Flutter and AppKit viewport differ')
    require(flutter['devicePixelRatio'] == start['displayScale'], 'Flutter and display scale differ')
    refresh = start['displayRefreshHz'] or start['maximumFramesPerSecond']
    require(refresh > 0, 'No display refresh rate')
    frames = webgpu['frames']
    duration = webgpu['elapsedMs']
    raf = webgpu['rafGapsMs']
    callback = webgpu['callbackGapsMs']
    queue = webgpu['queueCompletionMs']
    raster = flutter['frames']
    require(duration >= config['durationMs'] and frames > 0 and webgpu['warmupFrames'] > 0,
            'Incomplete measurement interval')
    require(len(raf) == frames and len(callback) == frames, 'Missing JS frame gaps')
    require(len(queue) == (frames if config['completion'] else 0), 'Wrong completion sample count')
    require(0 < len(raster) <= frames + 1, 'Flutter raster timings do not match the measured frame window')
    require(len({frame['number'] for frame in raster}) == len(raster), 'Duplicate raster timing')
    low, high = flutter['measurementTimestampsUs']
    require(abs((high - low) / 1000 - duration) < 100, 'JS and Flutter measurement windows diverged')
    long_frame = 1.5 * 1000 / refresh
    return {
        'frames': frames, 'durationMs': duration, 'fps': frames * 1000 / duration,
        'warmupFrames': webgpu['warmupFrames'], 'callbackGap': distribution(callback),
        'rafGap': distribution(raf), 'longFrames': sum(gap > long_frame for gap in callback),
        'longFrameThresholdMs': long_frame, 'rasterFrames': len(raster),
        'flutterRaster': distribution([frame['rasterUs'] / 1000 for frame in raster]),
        'queueCompletion': distribution(queue), 'window': start, 'adapter': webgpu['adapter'],
    }


def run_arm(app, evidence, width, height, mode, completion, native=False):
    wait_for_quiet()
    config = {'width': width, 'height': height, 'configuration': configuration(mode),
              'warmupMs': 2000, 'durationMs': 8000, 'completion': completion}
    env = dict(os.environ, FLAX_WEBGPU_COLOR_BENCHMARK=json.dumps(config))
    for name in ('FLAX_WEBGPU_BENCHMARK_METRICS', 'METAL_DEVICE_WRAPPER_TYPE', 'MTL_DEBUG_LAYER'):
        env.pop(name, None)
    if native:
        env['FLAX_WEBGPU_BENCHMARK_METRICS'] = '1'
    overlap = set()
    deadline = time.monotonic() + 70
    with evidence.with_suffix('.log').open('w') as log:
        with subprocess.Popen([str(app / EXECUTABLE)], env=env, stdout=log, stderr=subprocess.STDOUT) as process:
            while process.poll() is None:
                overlap.update(build_jobs(exclude_pid=process.pid))
                try:
                    process.wait(timeout=2)
                except subprocess.TimeoutExpired:
                    if time.monotonic() >= deadline:
                        process.kill()
                        process.wait()
                        raise RuntimeError(f'Application timed out, see {evidence}.log')
    require(process.returncode == 0, f'Application exited with {process.returncode}, see {evidence}.log')
    prefix = 'FLAX_WEBGPU_COLOR_BENCHMARK '
    entries = [line.removeprefix(prefix) for line in evidence.with_suffix('.log').read_text().splitlines()
               if line.startswith(prefix)]
    require(len(entries) == 1, f'Expected one benchmark receipt in {evidence}.log')
    result = json.loads(entries[0])
    write_json(evidence.with_suffix('.json'), result)
    if overlap:
        write_json(evidence.with_suffix('.overlap.json'), sorted(overlap))
        raise InterruptedArm(f'Build jobs overlapped the sample: {", ".join(sorted(overlap))}')
    summary = summarize(result, config)
    if native:
        timings = result['webgpu']['native']
        require(timings['enabled'] and timings['publications'] == summary['frames'] + summary['warmupFrames'],
                'Native instrumentation did not observe all canvas acquisitions')
        require(timings['publishToFlutterGpuCompletion']['count'] > 0, 'No Flutter GPU completion samples')
        summary['native'] = timings
    print(f'{evidence.name}: {summary["fps"]:.2f} FPS, {summary["rasterFrames"]} raster frames', flush=True)
    return {'mode': mode, 'size': [width, height], 'diagnostic': completion or native,
            'receipt': evidence.with_suffix('.json').name, 'summary': summary}


def sample_arm(app, evidence, width, height, mode, completion, native=False):
    try:
        return run_arm(app, evidence, width, height, mode, completion, native)
    except InterruptedArm as error:
        print(f'{evidence.name} rejected: {error}; retrying in a fresh process', flush=True)
        return run_arm(app, evidence.with_name(f'{evidence.name}-retry'), width, height, mode, completion, native)


def measure(args):
    evidence = args.evidence.resolve()
    evidence.mkdir(parents=True)
    build_receipt = json.loads(args.build.resolve().read_text())
    app = Path(build_receipt['application'])
    set_temporary(Path(build_receipt['runtime']))
    verify_signature(app)
    hashes = build_receipt['applicationSha256']
    require(all(PROBE.digest(app / path) == digest for path, digest in hashes.items()), 'The built app changed')
    environment = {'legacyEdr': os.environ.get('FLAX_COLOR_EDR'),
                   'chip': subprocess.check_output(['sysctl', '-n', 'machdep.cpu.brand_string'], text=True).strip(),
                   'macOS': subprocess.check_output(['sw_vers'], text=True).strip(),
                   'power': subprocess.check_output(['pmset', '-g', 'batt'], text=True).strip()}
    native = build_receipt.get('nativeInstrumentation', False)
    runs = []
    for width, height in args.size:
        tag = f'{width}x{height}'
        if native:
            for mode in MODES:
                runs.append(sample_arm(app, evidence / f'{tag}-native-{mode}', width, height, mode, False, native=True))
            continue
        for index, order in enumerate(ORDERS, 1):
            for mode in order:
                runs.append(sample_arm(app, evidence / f'{tag}-round{index}-{mode}', width, height, mode, False))
        for mode in MODES:
            runs.append(sample_arm(app, evidence / f'{tag}-queue-{mode}', width, height, mode, True))
    same = ('windowFrame', 'viewport', 'backingViewport', 'backingFormats', 'displayID', 'displayModePixels',
            'displayRefreshHz', 'maximumFramesPerSecond', 'displayScale', 'displayColorSpace')
    first = runs[0]['summary']
    for run in runs:
        summary = run['summary']
        require(summary['adapter'] == first['adapter'] and all(summary['window'][field] == first['window'][field]
                for field in same), 'Runs used different display, window, Flutter output format, or adapter')
    require(all(PROBE.digest(app / path) == digest for path, digest in hashes.items()), 'The measured app changed')
    write_json(evidence / 'summary.json', {'build': build_receipt, 'environment': environment, 'runs': runs,
                                          'measurementDriverSha256': PROBE.digest(HERE / 'run.py')})
    print(evidence / 'summary.json', flush=True)


def size(value):
    if not re.fullmatch(r'[1-9][0-9]{0,3}x[1-9][0-9]{0,3}', value):
        raise argparse.ArgumentTypeError('Expected WIDTHxHEIGHT')
    return tuple(map(int, value.split('x')))


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    commands = parser.add_subparsers(required=True)
    compile_app = commands.add_parser('build')
    compile_app.add_argument('--runtime-root', type=Path, default=ROOT)
    compile_app.add_argument('--flutter-root', type=Path, required=True)
    compile_app.add_argument('--engine-src', type=Path, required=True)
    compile_app.add_argument('--evidence', type=Path, required=True)
    compile_app.add_argument('--enable-edr', action='store_true', help='Opt the signed host into FP16/EDR')
    compile_app.add_argument('--native', action='store_true', help='Build only the native latency diagnostic')
    compile_app.set_defaults(run=build)
    sample = commands.add_parser('measure')
    sample.add_argument('--build', type=Path, required=True, help='build.json from the signed Release build')
    sample.add_argument('--evidence', type=Path, required=True)
    sample.add_argument('--size', action='append', type=size, default=None, metavar='WIDTHxHEIGHT')
    sample.set_defaults(run=measure)
    args = parser.parse_args()
    if args.run == measure and args.size is None:
        args.size = [(1920, 1080)]
    args.run(args)


if __name__ == '__main__':
    main()
