"""Update the simulator SDK's Dart fixed entries while preserving its pinned dart:ui."""
import hashlib
import json
from pathlib import Path
import shlex
import subprocess
import sys


def build(checkout, original, output, revision, inputs, lines):
    source = checkout / 'engine/src'
    root = output / 'platform-source'
    ui = root / 'flutter/lib/ui'
    ui.mkdir(parents=True, exist_ok=True)
    names = subprocess.check_output(['git', 'ls-tree', '-r', '--name-only', revision,
        'engine/src/flutter/lib/ui'], cwd=checkout, text=True).splitlines()
    hashes = {}
    for name in names:
        if not name.endswith('.dart'): continue
        target = ui / Path(name).relative_to('engine/src/flutter/lib/ui')
        target.parent.mkdir(parents=True, exist_ok=True)
        data = subprocess.check_output(['git', 'show', f'{revision}:{name}'], cwd=checkout)
        target.write_bytes(data)
        hashes[name] = hashlib.sha256(data).hexdigest()
    third_party = root / 'flutter/third_party'
    third_party.mkdir(parents=True, exist_ok=True)
    dart = third_party / 'dart'
    if not dart.exists(): dart.symlink_to(source / 'flutter/third_party/dart', target_is_directory=True)
    specification = root / 'flutter/lib/snapshot/libraries.json'
    specification.parent.mkdir(parents=True, exist_ok=True)
    specification.write_text((source / 'flutter/lib/snapshot/libraries.json').read_text())
    sdk = output / 'updated-platform'
    sdk.mkdir(exist_ok=True)
    compiler = source / 'out/flax_mac_debug/bootstrap_compile_platform.exe'
    subprocess.run([compiler, '--enable-experiment=generic-metadata', '--nnbd-strong',
        '--target=flutter', '-Ddart.vm.product=false', '-Ddart.isVM=true', 'dart:core',
        '--single-root-scheme=org-dartlang-sdk', '--single-root-base=' + str(root),
        'org-dartlang-sdk:///flutter/lib/snapshot/libraries.json', 'unused-vm-platform.dill',
        sdk / 'platform_strong.dill', sdk / 'vm_outline_strong.dill'], cwd=output, check=True)
    snapshots = [output / 'updated-isolate.bin', output / 'updated-isolate-text.bin']
    generator = original / 'clang_arm64/gen_snapshot'
    subprocess.run([generator, '--snapshot_kind=core', '--enable_mirrors=false',
        '--snapshot_data=' + str(snapshots[0]), '--snapshot_text=' + str(snapshots[1]),
        '--enable_asserts', sdk / 'platform_strong.dill'], cwd=output, check=True)
    objects = {}
    for name, binary, symbol, executable in [
        ('isolate_snapshot.bin', snapshots[0], 'kDartSnapshotData', False),
        ('isolate_snapshot_instructions.bin', snapshots[1], 'kDartSnapshotText', True),
        ('platform_strong.dill', sdk / 'platform_strong.dill', 'kPlatformStrongDill', False),
    ]:
        old, = [path for path in inputs if path.endswith('/snapshot.' + name + '.o')]
        commands = [shlex.split(line) for line in lines if ' -c ' in line]
        command, = [c for c in commands if c[c.index('-o') + 1] == old]
        assembly, obj = output / (name + '.S'), output / (name + '.o')
        args = [sys.executable, source / 'flutter/third_party/dart/runtime/tools/bin_to_assembly.py',
            '--input', binary, '--output', assembly, '--symbol_name', symbol, '--target_os', 'ios', '--incbin']
        if executable: args.append('--executable')
        if symbol == 'kPlatformStrongDill': args += ['--size_symbol_name', 'kPlatformStrongDillSize', '--target_arch', 'arm64']
        subprocess.run(args, cwd=output, check=True)
        command[command.index('-c') + 1] = str(assembly)
        command[command.index('-o') + 1] = str(obj)
        command[command.index('-MF') + 1] = str(obj) + '.d'
        subprocess.run(command, cwd=original, check=True)
        objects[old] = str(obj)
    receipt = {'uiRevision': revision, 'uiSources': hashes,
        'compilerSha256': hashlib.sha256(compiler.read_bytes()).hexdigest(),
        'generatorSha256': hashlib.sha256(generator.read_bytes()).hexdigest(),
        'platformSha256': hashlib.sha256((sdk / 'platform_strong.dill').read_bytes()).hexdigest()}
    (output / 'platform.json').write_text(json.dumps(receipt, indent=2) + '\n')
    return objects, sdk
