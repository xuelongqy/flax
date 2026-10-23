#!/usr/bin/env python3
"""Refresh complete mobile engines in the paired worktree without modifying the base."""
import argparse
import ast
import hashlib
import json
import os
from pathlib import Path
import re
import subprocess


def run(command, **kwargs):
    return subprocess.run(command, check=True, **kwargs)


def digest(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--base', type=Path, required=True)
    parser.add_argument('--prototype', type=Path, required=True)
    parser.add_argument('--output', type=Path, required=True)
    parser.add_argument('--target', choices=['ios-simulator-arm64', 'ios-device-arm64', 'android-arm64'], required=True)
    parser.add_argument('--mode', choices=['debug', 'release'], default='debug')
    parser.add_argument('--hermes-build', type=Path)
    args = parser.parse_args()
    ios = args.target.startswith('ios-')
    simulator = args.target == 'ios-simulator-arm64'
    if ios and args.mode != ('debug' if simulator else 'release'):
        parser.error('iOS requires simulator debug or device release/AOT')
    if args.hermes_build and not ios:
        parser.error('--hermes-build is only valid for iOS')
    base, prototype = args.base.resolve(), args.prototype.resolve()
    if base == prototype:
        parser.error('--prototype must be a separate engine worktree')
    name = (f'flax_ios_{args.mode}_{"sim_" if simulator else ""}arm64'
            if ios else f'flax_android_{args.mode}_arm64')
    original = base / 'engine/src/out' / name
    output = prototype / 'engine/src/out' / name
    evidence = args.output.resolve() / name
    evidence.mkdir(parents=True, exist_ok=True)

    # Borrow dependency checkouts, never engine-owned sources or writable build outputs.
    entries = ast.literal_eval((base / '.gclient_entries').read_text().split('=', 1)[1])
    dependencies = {key.split(':', 1)[0] for key in entries if key.startswith('engine/src/')}
    dependencies.add('engine/src/flutter/prebuilts/SDKs')
    for relative in sorted(dependencies, key=len):
        source, destination = base / relative, prototype / relative
        if source.exists() and not destination.exists():
            destination.parent.mkdir(parents=True, exist_ok=True)
            destination.symlink_to(source, target_is_directory=source.is_dir())
    package_config = Path('engine/src/flutter/.dart_tool/package_config.json')
    (prototype / package_config).parent.mkdir(parents=True, exist_ok=True)
    (prototype / package_config).write_text(
        (base / package_config).read_text().replace(base.as_uri() + '/', prototype.as_uri() + '/'))
    if not output.exists():
        # Match cloned objects once; later reverts must retain their new timestamps.
        tracked = run(['git', 'ls-files', '-z', 'engine/src'], cwd=prototype,
                      capture_output=True).stdout.decode().split('\0')
        for relative in filter(None, tracked):
            source, destination = base / relative, prototype / relative
            if source.is_file() and destination.is_file() and source.read_bytes() == destination.read_bytes():
                stat = source.stat()
                os.utime(destination, ns=(stat.st_atime_ns, stat.st_mtime_ns))
        output.parent.mkdir(parents=True, exist_ok=True)
        # APFS clones preserve independent writable files while sharing unchanged blocks.
        run(['cp', '-cRp', str(original), str(output)])
    configuration = output / 'args.gn'
    text = configuration.read_text()
    if ios:
        sdk_key = 'ios_simulator_sdk_path' if simulator else 'ios_device_sdk_path'
        sdk = re.search(rf'{sdk_key} = "([^"]+)"', text)
        assert sdk, f'Expected {sdk_key} in args.gn'
        if not Path(sdk[1]).is_dir():
            installed = run(['xcrun', '--sdk', 'iphonesimulator' if simulator else 'iphoneos',
                             '--show-sdk-path'], capture_output=True, text=True).stdout.strip()
            assert Path(installed).is_dir(), 'Installed Apple SDK is unavailable'
            text = text[:sdk.start(1)] + installed + text[sdk.end(1):]
    if args.hermes_build:
        text, count = re.subn(r'flax_hermes_build = "[^"]+"',
                             'flax_hermes_build = ' + json.dumps(str(args.hermes_build.resolve())), text)
        assert count == 1, 'Expected one Hermes producer in args.gn'
    if text != configuration.read_text():
        configuration.write_text(text)
    env = os.environ.copy()
    env['PATH'] = '/opt/homebrew/opt/python@3.11/libexec/bin:' + env['PATH'] + ':' + str(base / '.local/depot_tools')
    env['DEPOT_TOOLS_UPDATE'] = '0'
    env['VPYTHON_BYPASS'] = 'manually managed python not supported by chrome operations'
    gn = prototype / 'engine/src/flutter/third_party/gn/gn'
    run([str(gn), 'gen', str(output), '--root=' + str(prototype / 'engine/src')], env=env)
    for path in output.rglob('*.ninja'):
        source = path.read_text()
        if '-fstack-protector-all' in source and '-Wno-error=ignored-attributes' not in source:
            path.write_text(source.replace('-fstack-protector-all',
                                           '-fstack-protector-all -Wno-error=ignored-attributes'))
    run(['ninja', '-C', str(output), '-j', '4', 'flutter'], env=env)
    product = output / ('Flutter.framework/Flutter' if ios else 'libflutter.so')
    clang = prototype / 'engine/src/flutter/buildtools/mac-arm64/clang/bin'
    nm = ['nm', '-gU', str(product)] if ios else [str(clang / 'llvm-nm'), '-gD', '--defined-only', str(product)]
    symbols = {line.split()[-1].removeprefix('_') for line in
               run(nm, capture_output=True, text=True).stdout.splitlines() if line.split()}
    required = {'flax_canvas_dispatch', 'flax_canvas_version'}
    assert required.issubset(symbols), required - symbols
    selected = args.output.resolve() / 'engine-src/out' / name
    if selected.is_symlink() and selected.resolve() != output:
        selected.unlink()
    if selected.exists() and not selected.is_symlink():
        run(['/usr/bin/trash', str(selected)])
    if not selected.exists():
        selected.symlink_to(output, target_is_directory=True)
    source_link = args.output.resolve() / 'engine-src/flutter'
    if source_link.is_symlink() and source_link.resolve() != prototype / 'engine/src/flutter':
        source_link.unlink()
    if not source_link.exists():
        source_link.symlink_to(prototype / 'engine/src/flutter', target_is_directory=True)
    sources = ['engine/src/flutter/flax/native/src/' + file for file in
               ['runtime.cpp', 'canvas_decoder.inc']]
    sources += ['engine/src/flutter/' + name for name in [
        'shell/platform/android/android_exports.lst',
        'flax/native/include/flax/canvas.h',
        'flax/native/hermes_engine.cpp',
        'lib/ui/window/platform_configuration.h',
        'impeller/compiler/shader_lib/impeller/blending.glsl',
        'impeller/compiler/shader_lib/impeller/dithering.glsl',
        'impeller/display_list/canvas.cc',
        'impeller/display_list/aiks_context.cc',
        'impeller/display_list/dl_dispatcher.cc',
        'impeller/entity/inline_pass_context.cc',
        'impeller/entity/inline_pass_context.h',
        'impeller/entity/entity_pass_clip_stack.cc',
        'impeller/entity/entity_pass_clip_stack.h',
        'impeller/entity/contents/content_context.cc',
        'impeller/entity/contents/content_context.h',
        'impeller/entity/contents/contents.cc',
        'impeller/entity/contents/filters/blend_filter_contents.cc',
        'impeller/entity/contents/filters/color_matrix_filter_contents.cc',
        'impeller/entity/contents/filters/gaussian_blur_filter_contents.cc',
        'impeller/entity/shaders/filters/gaussian.frag',
        'impeller/entity/contents/tiled_texture_contents.cc',
        'impeller/entity/render_target_cache.cc',
        'impeller/renderer/render_target.cc',
        'shell/common/snapshot_controller_impeller.cc',
        'shell/common/snapshot_pixel_format.h',
    ]]
    receipt = {
        'target': args.target, 'mode': args.mode, 'base': str(original),
        'prototype': str(prototype), 'build': str(output),
        'product': str(product), 'productSha256': digest(product),
        'gnArgsSha256': digest(configuration),
        'canvasExports': sorted(required),
        'sources': {name: digest(prototype / name) for name in sources},
        'patchedSdkSha256': digest(output / 'flutter_patched_sdk/platform_strong.dill'),
    }
    (evidence / 'build.json').write_text(json.dumps(receipt, indent=2) + '\n')
    print(f'Built isolated {name} with Canvas and current font/VM dependencies')


if __name__ == '__main__':
    main()
