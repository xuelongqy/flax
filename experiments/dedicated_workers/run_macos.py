"""Build and measure the real Worker application with a matching local engine."""
import argparse
import json
import os
from pathlib import Path
import plistlib
import re
import shutil
import subprocess


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--flutter-root', type=Path, required=True)
    parser.add_argument('--mode', choices=['debug', 'release'], default='release')
    parser.add_argument('--output', type=Path, required=True)
    args = parser.parse_args()
    root = Path(__file__).resolve().parents[2]
    sdk = args.flutter_root.resolve()
    output = root / '.local/worker-macos'
    app = output / 'app'
    temporary = root / '.local/tmp'
    temporary.mkdir(exist_ok=True)
    output.mkdir(exist_ok=True)
    env = dict(os.environ, TMPDIR=str(temporary), TMP=str(temporary),
               TEMP=str(temporary), PATH=str(sdk / 'bin') + ':' + os.environ['PATH'])

    def run(command, name, cwd=root):
        print('> ' + name, flush=True)
        with (output / (name + '.log')).open('w') as log:
            subprocess.run([str(c) for c in command], cwd=cwd, env=env,
                           stdout=log, stderr=subprocess.STDOUT, check=True,
                           timeout=180 if name == 'application' else 900)

    flutter = sdk / 'bin/flutter'
    if not (app / 'macos').exists():
        run([flutter, 'create', '--no-pub', '--platforms=macos',
             '--project-name=flax_worker_benchmark', app], 'create')
    stage = output / 'stage.dart'
    stage.write_text("import 'dart:io';\n"
                     f"import '{(root / 'tool/src/package_verification.dart').as_uri()}';\n"
                     f"void main() => copyDartPackages(Directory({json.dumps(str(root))}), "
                     f"Directory({json.dumps(str(output / 'packages'))}), ['flax', 'flax_example_support']);\n")
    run([sdk / 'bin/dart', f'--packages={root}/.dart_tool/package_config.json', stage], 'stage')
    (app / 'pubspec.yaml').write_text('''name: flax_worker_benchmark
publish_to: none
environment:
  sdk: ^3.13.2
dependencies:
  flutter:
    sdk: flutter
  flax:
    path: ../packages/flax
  flax_example_support:
    path: ../packages/flax_example_support
flutter:
  assets:
    - assets/benchmark.js
    - assets/modules/
''')
    assets = app / 'assets'
    assets.mkdir(exist_ok=True)
    shutil.copytree(root / '.local/ui-module-inventory/modules', assets / 'modules',
                    dirs_exist_ok=True)
    # Reuse the maintained API cases after timing to validate both JIT and AOT.
    tests = (root / 'packages/flax/test/ui/workers_test.dart').read_text()
    cases = re.findall(r"test\(\s*'([^']+)',\s*\(\) => script\(\s*r\"\"\"(.*?)\"\"\"", tests, re.S)
    expected = {
        'Core structuredClone preserves platform values and transfer atomicity',
        'Worker clones Blob File Wasm modules and resizable backing stores',
        'Worker modules and Fetch resolve live parent and Worker Blob URLs',
        'Worker global prototypes and streaming Wasm use the real host',
        'Nested Workers transfer buffers and retire their descendants',
    }
    assert len(cases) == 5 and {name for name, _ in cases} == expected, 'Worker AOT cases changed'
    checks = '\n'.join(f'await (async()=>{{{source}\n}})(); passed.push({json.dumps(name)});'
                       for name, source in cases)
    probe = '''const benchmarkDone=globalThis.__flaxWorkerBenchmarkDone;
globalThis.__flaxWorkerBenchmarkDone=async function(result){
  try { const data=JSON.parse(result), passed=[];
''' + checks + '''
    data.apiChecks=passed; benchmarkDone(JSON.stringify(data));
  } catch(error) { benchmarkDone(String(error.stack||error)); }
};
'''
    (assets / 'benchmark.js').write_text(probe + (root / 'experiments/dedicated_workers/benchmark.js').read_text())
    shutil.copyfile(root / 'experiments/dedicated_workers/app.dart', app / 'lib/main.dart')
    for mode in ['DebugProfile', 'Release']:
        path = app / f'macos/Runner/{mode}.entitlements'
        entries = plistlib.loads(path.read_bytes())
        entries['com.apple.security.app-sandbox'] = False
        entries['com.apple.security.cs.allow-jit'] = True
        path.write_bytes(plistlib.dumps(entries))
    stage.write_text(f"import '{(root / 'tool/src/example_engine.dart').as_uri()}';\n"
                     f"void main() => selectExampleEngine({json.dumps(str(root))}, {json.dumps(str(app))}, 'v8');\n")
    run([sdk / 'bin/dart', f'--packages={root}/.dart_tool/package_config.json', stage], 'select-engine')
    run([flutter, 'pub', 'get', '--offline'], 'pub', cwd=app)
    run([sdk / 'bin/dart', 'analyze', 'lib/main.dart'], 'analyze', cwd=app)
    engine = f'flax_mac_{args.mode}_arm64'
    run([flutter, f'--local-engine-src-path={sdk}/engine/src',
         f'--local-engine={engine}', f'--local-engine-host={engine}',
         'build', 'macos', f'--{args.mode}', '--no-pub'], 'build', cwd=app)
    product = app / f'build/macos/Build/Products/{args.mode.title()}/flax_worker_benchmark.app'
    run([product / 'Contents/MacOS/flax_worker_benchmark'], 'application')
    records = [json.loads(line.split('WORKER_RESULT ', 1)[1]) for line in
               (output / 'application.log').read_text().splitlines() if 'WORKER_RESULT ' in line]
    assert len(records) == 1, 'Expected exactly one benchmark result'
    assert records[0]['system']['mode'].lower() == args.mode
    assert set(records[0]['apiChecks']) == expected, 'Incomplete Worker AOT checks'
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(json.dumps(records[0], indent=2) + '\n')
    print(json.dumps(records[0], indent=2))


if __name__ == '__main__':
    main()
