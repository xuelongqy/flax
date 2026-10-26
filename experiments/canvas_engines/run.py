#!/usr/bin/env python3
"""Sign paired applications and run the identical source workload on one iPhone."""
import argparse
import hashlib
import json
import os
import shutil
from pathlib import Path
import subprocess
import time
from urllib.parse import urlparse
from urllib.request import urlopen


def run(command, **kwargs):
    return subprocess.run(command, check=True, text=True, **kwargs)


def digest(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--device', required=True)
    parser.add_argument('--identity', required=True)
    parser.add_argument('--app', type=Path, required=True)
    control = parser.add_mutually_exclusive_group(required=True)
    control.add_argument('--hermes', type=Path)
    control.add_argument('--baseline', type=Path, help='Preserved static V8 SDK control')
    parser.add_argument('--v8', type=Path, required=True)
    parser.add_argument('--v8-library', type=Path, help='Historical dynamic SDK only; omit for static V8')
    parser.add_argument('--output', type=Path, required=True)
    parser.add_argument('--order')
    parser.add_argument('--proof', action='store_true')
    parser.add_argument('--simulator', action='store_true')
    parser.add_argument('--trace', action='store_true')
    parser.add_argument('--start-index', type=int, default=1)
    args = parser.parse_args()
    if args.trace and not args.simulator:
        parser.error('Timeline capture currently requires the iOS simulator VM service')
    output = args.output.resolve()
    output.mkdir(parents=True, exist_ok=True)
    baseline = 'baseline' if args.baseline else 'hermes'
    labels = [baseline, 'v8']
    order = args.order or f'{baseline},v8,v8,{baseline},v8,{baseline},{baseline},v8'
    apps = {}
    provenance = {}
    bundle = 'dev.flax.canvas.enginebench'
    for engine in labels:
        app = output / f'{engine}.app'
        run(['ditto', str(args.app.resolve()), str(app)])
        runner_input = digest(app / 'Runner')
        binary = app / 'Frameworks/Flutter.framework/Flutter'
        run(['cp', str(getattr(args, engine).resolve()), str(binary)])
        notices = binary.parent / 'FlaxV8Notices'
        if notices.exists(): shutil.rmtree(notices)
        if engine == 'baseline' or engine == 'v8' and not args.v8_library:
            shutil.copytree(getattr(args, engine).parent / 'FlaxV8Notices', notices)

        if engine == 'v8' and args.v8_library:
            library = app / 'Frameworks/libv8.dylib'
            run(['cp', str(args.v8_library.resolve()), str(library)])
            run(['codesign', '--force', '--sign', args.identity, '--timestamp=none', str(library)], capture_output=True)
        run(['codesign', '--force', '--sign', args.identity, '--timestamp=none', str(binary.parent)], capture_output=True)
        run(['codesign', '--force', '--sign', args.identity, '--timestamp=none', '--preserve-metadata=entitlements,requirements,flags', str(app)], capture_output=True)
        run(['codesign', '--verify', '--deep', '--strict', str(app)], capture_output=True)
        provenance[engine] = {'framework_input_sha256': digest(getattr(args, engine).resolve()),
            'framework_sha256': digest(binary),
            'aot_sha256': digest(app / 'Frameworks/App.framework/App'),
            'runner_input_sha256': runner_input,
            'runner_signed_sha256': digest(app / 'Runner'),
            'source_assets': {str(x.relative_to(app)): digest(x) for x in sorted((app / 'Frameworks/App.framework/flutter_assets').rglob('*.js'))}}
        kernel = app / 'Frameworks/App.framework/flutter_assets/kernel_blob.bin'
        if kernel.exists():
            provenance[engine]['kernel_sha256'] = digest(kernel)
        if engine in ['baseline', 'v8']:
            if engine == 'v8' and args.v8_library:
                provenance[engine]['v8_library_sha256'] = digest(library)
                provenance[engine]['v8_linkage'] = 'historical-dynamic'
            else:
                # otool's first line is the input path, not a linked library.
                dependencies = '\n'.join(run(['xcrun', 'otool', '-L', str(binary)], capture_output=True).stdout.splitlines()[1:])
                assert 'libv8' not in dependencies and 'hermes' not in dependencies.lower()
                assert not any(app.rglob('libv8*'))
                manifest = getattr(args, engine).parent / 'FlaxV8Notices/sdk-manifest.json'
                sdk = json.loads(manifest.read_text())
                assert sdk['metadata']['linkage'] == 'static' and sdk['metadata']['jit'] is False
                provenance[engine]['v8_linkage'] = 'static'
                provenance[engine]['sdk_manifest_sha256'] = digest(manifest)
                provenance[engine]['sdk_metadata'] = sdk['metadata']
                provenance[engine]['sdk_libraries'] = {
                    p: sdk['files'][p] for p in sdk['libraries']}

        apps[engine] = app
    assert provenance[baseline]['aot_sha256'] == provenance['v8']['aot_sha256']
    assert provenance[baseline]['runner_input_sha256'] == provenance['v8']['runner_input_sha256']
    assert provenance[baseline]['source_assets'] == provenance['v8']['source_assets']
    (output / 'applications.json').write_text(json.dumps(provenance, indent=2) + '\n')
    for trial, engine in enumerate(order.split(','), args.start_index):
        assert engine in apps
        prefix = f'{trial:02d}-{engine}'
        print('Installing', prefix, flush=True)
        if args.simulator:
            run(['xcrun', 'simctl', 'install', args.device, str(apps[engine])], capture_output=True)
        else:
            run(['xcrun', 'devicectl', 'device', 'install', 'app', '--device', args.device, str(apps[engine])], capture_output=True)
        time.sleep(8)
        actual_engine = 'v8' if engine == 'baseline' else engine
        env = {'BENCH_ENGINE': actual_engine}
        if args.trace:
            env['CANVAS_BENCH_TRACE'] = '1'
        if args.proof:
            env['FLAX_VERIFY_V8_JIT' if actual_engine == 'v8' else 'FLAX_VERIFY_HERMES'] = '1'
        log = output / f'{prefix}.log'
        with log.open('w') as handle:
            if args.simulator:
                command = ['xcrun', 'simctl', 'launch', '--console-pty', '--terminate-running-process', args.device, bundle,
                           *(['--endless-trace-buffer'] if args.trace else [])]
                environment = {**os.environ, **{'SIMCTL_CHILD_' + k: v for k, v in env.items()}}
                if args.trace:
                    container = Path(run(['xcrun', 'simctl', 'get_app_container', args.device, bundle, 'data'], capture_output=True).stdout.strip())
                    service = None
                    with subprocess.Popen(command, env=environment, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True) as process:
                        try:
                            for line in process.stdout:
                                handle.write(line)
                                if line.startswith('CANVAS_TRACE_SERVICE '):
                                    service = line.split(' ', 1)[1].strip()
                                    parsed = urlparse(service)
                                    assert parsed.scheme == 'http' and parsed.hostname in ['127.0.0.1', 'localhost', '::1']
                                if line.startswith('CANVAS_TRACE_READY '):
                                    name = line.split(' ', 1)[1].strip()
                                    assert name in ['weave-crisp', 'bloom-soft', 'idle'] and service
                                    with urlopen(service + 'getVMTimeline', timeout=30) as response:
                                        data = response.read()
                                    assert 'traceEvents' in json.loads(data)['result']
                                    (output / f'{prefix}-{name}-trace.json').write_bytes(data)
                                    (container / 'tmp/canvas-engines/trace-continue').touch()
                            assert process.wait(timeout=210) == 0
                        finally:
                            if process.poll() is None:
                                process.kill()
                else:
                    run(command, env=environment, stdout=handle, stderr=subprocess.STDOUT, timeout=210)
            else:
                run(['xcrun', 'devicectl', 'device', 'process', 'launch', '--device', args.device,
                     '--console', '--terminate-existing', '--environment-variables', json.dumps(env), bundle],
                    stdout=handle, stderr=subprocess.STDOUT, timeout=210)
        content = log.read_text()
        assert 'CANVAS_ENGINES_PASSED' in content, content[-4000:]
        if args.proof:
            assert ('FLAX_V8_JITLESS: probe executed without generated machine code' if actual_engine == 'v8'
                    else 'FLAX_HERMES:') in content, content[:2000]
        files = ['result.json', 'weave-crisp.png', 'bloom-soft.png']
        if args.trace and not args.simulator:
            files += ['weave-crisp-trace.json', 'bloom-soft-trace.json', 'idle-trace.json']
        if args.simulator:
            container = run(['xcrun', 'simctl', 'get_app_container', args.device, bundle, 'data'], capture_output=True).stdout.strip()
        for name in files:
            if args.simulator:
                run(['cp', str(Path(container) / 'tmp/canvas-engines' / name), str(output / f'{prefix}-{name}')])
            else:
                run(['xcrun', 'devicectl', 'device', 'copy', 'from', '--device', args.device,
                     '--domain-type', 'appDataContainer', '--domain-identifier', bundle,
                     '--source', f'tmp/canvas-engines/{name}', '--destination', str(output / f'{prefix}-{name}')], capture_output=True)
        result = json.loads((output / f'{prefix}-result.json').read_text())
        assert result['complete'] and result['engine'] == actual_engine
        if args.baseline:
            result['variant'] = engine
            (output / f'{prefix}-result.json').write_text(json.dumps(result, indent=2) + '\n')
        assert len(result['results']) == 2 and all(x['frames'] == 300 for x in result['results'])
        if any(x['thermal'] != 0 or x['lowPower'] for x in result['memory']):
            raise RuntimeError(f'{prefix}: invalid thermal or low-power state; raw receipt retained')
        print('Completed', prefix, 'startup', result['startup'],
              'thermal', sorted({x['thermal'] for x in result['memory']}),
              'lowPower', sorted({x['lowPower'] for x in result['memory']}), flush=True)
    print('Paired runs complete:', output, flush=True)


if __name__ == '__main__':
    main()
