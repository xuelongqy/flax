#!/usr/bin/env python3
"""Compile the prototype worktree and relink separate debug/release engines."""
import argparse
import hashlib
import json
from pathlib import Path
import plistlib
import shlex
import subprocess
import sys


def run(command, **kwargs):
    return subprocess.run(command, check=True, **kwargs)


def build_renderer(original, prototype, evidence, commands):
    """Rebuild changed engine sources and embedded Metal libraries in isolation."""
    replacements, generated, executed = {}, {}, []
    renderer = evidence / 'renderer'

    def execute(command):
        executed.append(command)
        run(command, cwd=original)

    def generated_path(name):
        path = renderer / name
        path.parent.mkdir(parents=True, exist_ok=True)
        generated[name] = path
        return str(path)

    # Only shaders that include the changed shared blend or dither functions.
    for line in commands:
        if '--metal-desktop' not in line or ' impellerc ' not in line:
            continue
        parts = shlex.split(line)
        depfile = next(x.split('=', 1)[1] for x in parts if x.startswith('--depfile='))
        dependencies = (original / depfile).read_text()
        if not any(name in dependencies for name in
                   ['impeller/blending.glsl', 'impeller/dithering.glsl']):
            continue
        command = [str(original / 'impellerc'),
                   '--include=' + str(prototype / 'engine/src/flutter/impeller/compiler/shader_lib')]
        for item in parts[parts.index('impellerc') + 1:]:
            key, sep, value = item.partition('=')
            if key in ['--depfile', '--sl', '--spirv', '--reflection-json',
                       '--reflection-header', '--reflection-cc']:
                item = key + '=' + generated_path(value)
            command.append(item)
        execute(command)

    for line in commands:
        if ' metal_library.py ' not in line and '/metal_library.py ' not in line:
            continue
        parts = shlex.split(line)
        sources = [parts[i + 1] for i, x in enumerate(parts) if x == '--source']
        if not any(x in generated for x in sources):
            continue
        command = [sys.executable, parts[1]]
        i = 2
        while i < len(parts):
            key = parts[i]
            if key not in ['--source', '--output', '--depfile']:
                command.append(key)
                i += 1
                continue
            value = parts[i + 1]
            if key == '--source':
                value = str(generated.get(value, original / value))
            else:
                value = generated_path(value if not Path(value).is_absolute()
                                       else str(Path(value).relative_to(original)))
            command.extend([key, value])
            i += 2
        execute(command)

    for line in commands:
        if '/xxd.py ' not in line:
            continue
        parts = shlex.split(line)
        source = parts[parts.index('--source') + 1]
        if source not in generated:
            continue
        command = [sys.executable, parts[1]]
        for i in range(2, len(parts), 2):
            key, value = parts[i:i + 2]
            if key == '--source':
                value = str(generated[value])
            elif key in ['--output-header', '--output-source']:
                value = generated_path(value)
            command.extend([key, value])
        execute(command)

    changed_cpp = {
        '../../flutter/impeller/entity/entity_pass_clip_stack.cc',
        '../../flutter/impeller/entity/inline_pass_context.cc',
        '../../flutter/impeller/display_list/canvas.cc',
        '../../flutter/impeller/display_list/aiks_context.cc',
        '../../flutter/impeller/entity/contents/content_context.cc',
        '../../flutter/impeller/entity/contents/contents.cc',
        '../../flutter/flax/native/src/joint_gc.cc',
        '../../flutter/impeller/entity/contents/tiled_texture_contents.cc',
        '../../flutter/impeller/entity/contents/filters/blend_filter_contents.cc',
        '../../flutter/impeller/entity/contents/filters/gaussian_blur_filter_contents.cc',
        '../../flutter/impeller/display_list/dl_dispatcher.cc',
        '../../flutter/impeller/renderer/render_target.cc',
        '../../flutter/impeller/entity/render_target_cache.cc',
        '../../flutter/shell/common/snapshot_controller_impeller.cc',
    }
    for line in commands:
        if ' -c ' not in line:
            continue
        command = shlex.split(line)
        source = command[command.index('-c') + 1]
        if source in generated:
            source = str(generated[source])
        elif source in changed_cpp:
            source = str(prototype / 'engine/src' / source.removeprefix('../../'))
        else:
            continue
        old_object = command[command.index('-o') + 1]
        output = renderer / old_object
        output.parent.mkdir(parents=True, exist_ok=True)
        command[command.index('-c') + 1] = source
        command[command.index('-o') + 1] = str(output)
        command[command.index('-MF') + 1] = str(output) + '.d'
        command.insert(1, '-I' + str(renderer / 'gen'))
        command.insert(1, '-I' + str(prototype / 'engine/src/flutter'))
        command.insert(1, '-I' + str(prototype / 'engine/src'))
        execute(command)
        replacements[old_object] = output
    if not replacements:
        raise ValueError('No isolated renderer objects were compiled')
    return replacements, executed


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--base', type=Path, required=True)
    parser.add_argument('--prototype', type=Path, required=True)
    parser.add_argument('--output', type=Path, required=True)
    parser.add_argument('--mode', choices=['debug', 'release'], required=True)
    args = parser.parse_args()
    original = args.base.resolve() / 'engine/src/out' / f'flax_mac_{args.mode}'
    source = args.prototype.resolve() / 'engine/src/flutter/flax/native/src'
    evidence = args.output.resolve() / args.mode
    evidence.mkdir(parents=True, exist_ok=True)
    targets = ['FlutterMacOS.framework/Versions/A/FlutterMacOS']
    if args.mode == 'debug':
        targets.insert(0, 'flutter_tester')
    commands = run(['ninja', '-C', str(original), '-t', 'commands', *targets],
                   capture_output=True, text=True).stdout.splitlines()
    selected = [shlex.split(line) for line in commands
                if ' -c ' in line and '/flax/native/src/runtime.cpp' in line]
    if len(selected) != 1:
        raise ValueError('Expected exactly one maintained runtime compile command')
    compile_command = selected[0]
    old_object = compile_command[compile_command.index('-o') + 1]
    prototype_object = evidence / 'runtime.o'
    compile_command[compile_command.index('-c') + 1] = str(source / 'runtime.cpp')
    compile_command[compile_command.index('-o') + 1] = str(prototype_object)
    compile_command[compile_command.index('-MF') + 1] = str(evidence / 'runtime.d')
    compile_command.insert(1, '-I' + str(args.prototype.resolve() / 'engine/src'))
    run(compile_command, cwd=original)

    output = args.output.resolve() / 'engine-src/out' / f'flax_mac_{args.mode}_arm64'
    output.mkdir(parents=True, exist_ok=True)
    for child in original.iterdir():
        if child.name in {'flutter_tester', 'FlutterMacOS.framework', 'FlutterMacOS.xcframework'}:
            continue
        destination = output / child.name
        if not destination.exists() and not destination.is_symlink():
            destination.symlink_to(child, target_is_directory=child.is_dir())

    replacements, renderer_commands = build_renderer(
        original, args.prototype.resolve(), evidence, commands)
    replacements[old_object] = prototype_object
    products, link_commands = {}, {}
    required_symbols = {'_flax_canvas_dispatch', '_flax_canvas_version',
                        '_flax_canvas_prototype_draw', '_flax_canvas_prototype_pending'}
    for target in targets:
        tester = target == 'flutter_tester'
        name = 'tester' if tester else 'framework'
        binary = './flutter_tester' if tester else './libFlutterMacOS.dylib'
        rules = []
        for ninja in (original / 'obj/flutter/shell').rglob('*.ninja'):
            rules.extend(line for line in ninja.read_text().splitlines()
                         if line.startswith('build ') and binary in line.split(':', 1)[0].split()[1:])
        if len(rules) != 1:
            raise ValueError(f'Expected one link rule for {binary}')
        inputs = rules[0].split(' |', 1)[0].split(':', 1)[1].split()[1:]
        if inputs.count(old_object) != 1:
            raise ValueError(f'Maintained runtime object missing from {binary}')
        for old in replacements:
            if inputs.count(old) != 1:
                raise ValueError(f'Expected one link input for {old} in {binary}')
        filelist = evidence / f'objects-{name}.rsp'
        filelist.write_text('\n'.join(str(replacements.get(item, (original / item).resolve()))
                                      for item in inputs) + '\n')
        links = [line for line in commands if 'clang++ ' in line and ' -o ' + binary in line]
        if len(links) != 1:
            raise ValueError(f'Expected one maintained linker command for {binary}')
        command = links[0]
        if not tester:
            command = command.split('then ', 1)[1].split(' &&', 1)[0]
            framework = output / 'FlutterMacOS.framework'
            if framework.is_symlink():
                framework.unlink()
            # Refresh resources and SDK libraries as well as the executable.
            run(['ditto', str(original / framework.name), str(framework)])
        product = output / target
        link = shlex.split(command)
        link[link.index('-o') + 1] = str(product)
        link = ['-Wl,-filelist,' + str(filelist) if item.startswith('-Wl,-filelist,')
                else item for item in link]
        link = ['-Wl,-object_path_lto,' + str(evidence / f'lto-{name}.o')
                if item.startswith('-Wl,-object_path_lto,') else item for item in link]
        if '-exported_symbols_list' in link:
            symbols = evidence / f'exports-{name}.sym'
            exports = 'exported_test_symbols_mac.sym' if tester else 'exported_symbols_mac.sym'
            symbols.write_text((args.prototype / 'engine/src/flutter/common' / exports).read_text())
            link[link.index('-exported_symbols_list') + 2] = str(symbols)
        run(link, cwd=original)
        run(['codesign', '--force', '--sign', '-', str(product if tester else framework)])
        exported = {line.split()[-1] for line in
                    run(['nm', '-gU', str(product)], capture_output=True, text=True).stdout.splitlines()
                    if line.split()}
        if not required_symbols.issubset(exported):
            raise ValueError(f'Missing Canvas exports in {product}: {required_symbols - exported}')
        products[name] = {'path': str(product),
                          'sha256': hashlib.sha256(product.read_bytes()).hexdigest(),
                          'canvasExports': sorted(required_symbols)}
        link_commands[name] = link
        if tester:
            continue
        # Flutter application builds consume the XCFramework, not its sibling.
        xcframework = output / 'FlutterMacOS.xcframework'
        if xcframework.is_symlink():
            xcframework.unlink()
        run(['ditto', str(original / xcframework.name), str(xcframework)])
        manifest = plistlib.loads((xcframework / 'Info.plist').read_bytes())
        slices = [item for item in manifest['AvailableLibraries']
                  if item['SupportedPlatform'] == 'macos'
                  and 'arm64' in item['SupportedArchitectures']]
        if len(slices) != 1:
            raise ValueError('Expected exactly one macOS arm64 framework slice')
        selected = xcframework / slices[0]['LibraryIdentifier'] / slices[0]['LibraryPath']
        run(['ditto', str(framework), str(selected)])
        packaged = selected / 'Versions/A/FlutterMacOS'
        if packaged.read_bytes() != product.read_bytes():
            raise ValueError('XCFramework does not contain the prototype binary')
        run(['codesign', '--verify', '--strict', str(selected)])
        products['xcframework'] = {'path': str(packaged),
                                  'sha256': hashlib.sha256(packaged.read_bytes()).hexdigest()}
    primary = 'tester' if args.mode == 'debug' else 'framework'
    receipt = {
        'mode': args.mode,
        'base': str(args.base.resolve()),
        'prototype': str(args.prototype.resolve()),
        'prototypeCommit': run(['git', 'rev-parse', 'HEAD'], cwd=args.prototype,
                               capture_output=True, text=True).stdout.strip(),
        'sources': {name: hashlib.sha256((source / name).read_bytes()).hexdigest()
                    for name in ['runtime.cpp', 'canvas_prototype.inc', 'canvas_decoder.inc',
                                 '../include/flax/canvas.h']},
        'compile': compile_command, 'rendererCommands': renderer_commands,
        'rendererSources': {name: hashlib.sha256((args.prototype / name).read_bytes()).hexdigest()
                            for name in [
                                'engine/src/flutter/impeller/entity/entity_pass_clip_stack.cc',
                                'engine/src/flutter/impeller/entity/entity_pass_clip_stack.h',
                                'engine/src/flutter/impeller/entity/inline_pass_context.cc',
                                'engine/src/flutter/impeller/entity/inline_pass_context.h',
                                'engine/src/flutter/impeller/display_list/canvas.cc',
                                'engine/src/flutter/impeller/display_list/aiks_context.cc',
                                'engine/src/flutter/impeller/entity/contents/content_context.cc',
                                'engine/src/flutter/impeller/entity/contents/content_context.h',
                                'engine/src/flutter/impeller/entity/contents/contents.cc',
                                'engine/src/flutter/flax/native/src/joint_gc.cc',
                                'engine/src/flutter/impeller/compiler/shader_lib/impeller/blending.glsl',
                                'engine/src/flutter/impeller/compiler/shader_lib/impeller/dithering.glsl',
                                'engine/src/flutter/impeller/entity/contents/tiled_texture_contents.cc',
                                'engine/src/flutter/impeller/entity/contents/filters/blend_filter_contents.cc',
                                'engine/src/flutter/impeller/entity/contents/filters/gaussian_blur_filter_contents.cc',
                                'engine/src/flutter/impeller/display_list/dl_dispatcher.cc',
                                'engine/src/flutter/impeller/renderer/render_target.cc',
                                'engine/src/flutter/impeller/entity/render_target_cache.cc',
                                'engine/src/flutter/shell/common/snapshot_controller_impeller.cc',
                                'engine/src/flutter/shell/common/snapshot_pixel_format.h']},
        'link': link_commands[primary],
        'linkCommands': link_commands,
        'products': products,
        'engineSource': str(args.output.resolve() / 'engine-src'),
        'product': products[primary]['path'],
        'productSha256': products[primary]['sha256'],
    }
    (evidence / 'build.json').write_text(json.dumps(receipt, indent=2) + '\n')
    print(f'Built isolated {args.mode} engine products: {list(products)}')


if __name__ == '__main__':
    main()
