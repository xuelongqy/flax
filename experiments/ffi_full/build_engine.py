#!/usr/bin/env python3
"""Relink isolated engines with one shared FFI experiment; never overwrite an SDK."""
import argparse
import copy
import hashlib
import json
import os
from pathlib import Path
import re
import shlex
import shutil
import subprocess
import zipfile


def run(command, **kwargs):
    return subprocess.run(list(map(str, command)), check=True, **kwargs)


def available_sdk(command, cwd):
    if "-isysroot" not in command: return command
    old = command[command.index("-isysroot") + 1]
    if (cwd / old).exists(): return command
    name = "iphonesimulator" if "iPhoneSimulator" in old else "iphoneos" if "iPhoneOS" in old else "macosx"
    current = subprocess.check_output(["xcrun", "--sdk", name, "--show-sdk-path"], text=True).strip()
    return [c.replace(old, current) for c in command]


def build(checkout, output_root, name, sanitize=False, extension_source=None,
          includes=(), libraries=(), adapter_transform=None, cpp_transforms=None, platform_builder=None):
    source = checkout / "engine/src"
    original = (source / "out" / name).resolve()
    experiment = Path(__file__).resolve().parent
    output = output_root / name
    output.mkdir(parents=True, exist_ok=True)
    args = (original / "args.gn").read_text()
    revision = re.search(r'engine_version = "([a-f0-9]+)"', args)[1]
    # These macOS objects were rebuilt at this revision without rewriting args.gn.
    if "mac_" in name:
        revision = "183508ece44ae312a7339bd2ede245e16cf485f3"
    if name == "flax_ios_release_arm64":
        revision = "baa88711239"
    snapshot = output / "native"
    extension = output / "extension"
    shutil.copytree(extension_source or experiment / "native", extension, dirs_exist_ok=True)
    files = subprocess.check_output(["git", "ls-tree", "-r", "--name-only", revision,
        "engine/src/flutter/flax/native"], cwd=checkout, text=True).splitlines()
    for file in files:
        relative = Path(file).relative_to("engine/src/flutter/flax/native")
        if relative.suffix not in (".h", ".cpp"):
            continue
        target = snapshot / relative
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_bytes(subprocess.check_output(["git", "show", f"{revision}:{file}"],
                                                   cwd=checkout))
    runtime = snapshot / "src/runtime.cpp"
    code = runtime.read_text()
    code = ('struct FlaxRuntime;\nbool flaxFfiExperimentInstalled(FlaxRuntime*);\n'
            'void flaxFfiExperimentShutdown(FlaxRuntime*);\n' + code)
    code = code.replace('      runtime->disposing = true;',
        '      if (flaxFfiExperimentInstalled(runtime))\n'
        '        throw BridgeError(FLAX_STATE_ERROR, "FFI retirement is incomplete");\n'
        '      runtime->disposing = true;')
    code = code.replace('  flax::shutdownJointHeap();',
        '  for (auto* runtime : live) flaxFfiExperimentShutdown(runtime);\n'
        '  flax::shutdownJointHeap();')
    runtime.write_text(code + '\n#include "' + str(extension / "runtime.inc") + '"\n')
    mac = "mac_" in name
    android = "android" in name
    target = ("FlutterMacOS.framework/Versions/A/FlutterMacOS" if mac else
              "libflutter.so" if android else "Flutter.framework/Flutter")
    lines = subprocess.check_output(["ninja", "-C", original, "-t", "commands", target],
                                    text=True).splitlines()
    compiles = [shlex.split(c) for c in lines
                if " -c " in c and "/flax/native/src/runtime.cpp" in c]
    if len(compiles) != 1:
        raise ValueError("Expected one runtime compile command")
    compile_command = compiles[0]
    old_object = compile_command[compile_command.index("-o") + 1]
    obj = output / "ffi-runtime.o"
    compile_command[compile_command.index("-c") + 1] = str(runtime)
    compile_command[compile_command.index("-o") + 1] = str(obj)
    if "-MF" in compile_command:
        compile_command[compile_command.index("-MF") + 1] = str(obj) + ".d"
    compile_command += ["-DFLAX_FFI_TESTING=1", "-I" + str(snapshot), "-I" + str(snapshot / "include"),
                        "-I" + str(extension)]
    compile_command += ["-I" + str(p) for p in includes]
    compile_command = [c.replace("-I../../flutter/flax/native", "-I" + str(snapshot))
                       for c in compile_command]
    compile_command = available_sdk(compile_command, original)
    if sanitize:
        compile_command[0] = subprocess.check_output(["xcrun", "--find", "clang++"], text=True).strip()
        compile_command = ["-D_FORTIFY_SOURCE=0" if c == "-D_FORTIFY_SOURCE=2" else c for c in compile_command]
        compile_command += ["-fsanitize=address,undefined", "-fno-omit-frame-pointer"]
    run(compile_command, cwd=original)
    adapter_name = "hermes_engine.cpp" if "ios" in name else "v8-jsi/src/jsi_abi/jsi_abi_v8.cpp"
    adapter = snapshot / adapter_name
    adapter_code = adapter.read_text()
    if adapter_transform is not None:
        adapter_code = adapter_transform(adapter_code, "ios" in name, extension)
    adapter.write_text(adapter_code + '\n#include "' + str(extension /
        ("collect_hermes.inc" if "ios" in name else "collect_v8.inc")) + '"\n')
    adapter_commands = [shlex.split(c) for c in lines if " -c " in c and "/" + adapter_name + " " in c]
    if len(adapter_commands) != 1: raise ValueError("Expected one GC adapter compile command")
    adapter_command = adapter_commands[0]
    old_adapter = adapter_command[adapter_command.index("-o") + 1]
    adapter_obj = output / "ffi-adapter.o"
    adapter_command[adapter_command.index("-c") + 1] = str(adapter)
    adapter_command[adapter_command.index("-o") + 1] = str(adapter_obj)
    if "-MF" in adapter_command:
        adapter_command[adapter_command.index("-MF") + 1] = str(adapter_obj) + ".d"
    adapter_command = [c.replace("-I../../flutter/flax/native", "-I" + str(snapshot)) for c in adapter_command]
    adapter_command += ["-I" + str(snapshot / "src")]
    adapter_command = available_sdk(adapter_command, original)
    if sanitize:
        adapter_command[0] = subprocess.check_output(["xcrun", "--find", "clang++"], text=True).strip()
        adapter_command = ["-D_FORTIFY_SOURCE=0" if c == "-D_FORTIFY_SOURCE=2" else c for c in adapter_command]
        adapter_command += ["-fsanitize=address,undefined", "-fno-omit-frame-pointer"]
    run(adapter_command, cwd=original)
    links = [c for c in lines if " -shared " in c and
             (" -o ./libFlutterMacOS.dylib" in c or " -o ./libFlutter.dylib" in c or
              " -o ./libflutter.so" in c)]
    if len(links) != 1:
        raise ValueError("Expected one framework link command")
    link_text = links[0].split("then ", 1)[1] if links[0].startswith("if ") else links[0]
    link = shlex.split(link_text.split(" && ", 1)[0])
    link = available_sdk(link, original)
    link += list(map(str, libraries))
    if sanitize:
        link[0] = subprocess.check_output(["xcrun", "--find", "clang++"], text=True).strip()
        link += ["-fsanitize=address,undefined"]
    binary_name = "./libFlutterMacOS.dylib" if mac else "./libflutter.so" if android else "./libFlutter.dylib"
    ninja_file = next(f for f in original.rglob("*.ninja") if any(
        c.startswith("build " + binary_name) and ": solink " in c for c in f.read_text().splitlines()))
    ninja_lines = ninja_file.read_text().splitlines()
    line = next(c for c in ninja_lines if c.startswith("build " + binary_name) and ": solink " in c)
    inputs = shlex.split(line.split(": solink ", 1)[1].split(" |", 1)[0])
    if inputs.count(old_object) != 1:
        raise ValueError("Runtime object must occur exactly once")
    replacements = {old_object: str(obj), old_adapter: str(adapter_obj)}
    additional_sources = {}
    for suffix, transform in (cpp_transforms or {}).items():
        commands = [shlex.split(c) for c in lines if " -c " in c and ("/" + suffix + " ") in c]
        commands = [c for c in commands if c[c.index("-o") + 1] in inputs]
        if len(commands) != 1: raise ValueError("Expected one linked compiler input: " + suffix)
        command = commands[0]
        old = command[command.index("-o") + 1]
        source_path = (original / command[command.index("-c") + 1]).resolve()
        compiled_source = output / ("ffi-" + source_path.name)
        compiled_source.write_text(transform(source_path.read_text()))
        compiled_object = compiled_source.with_suffix(".o")
        command[command.index("-c") + 1] = str(compiled_source)
        command[command.index("-o") + 1] = str(compiled_object)
        command[command.index("-MF") + 1] = str(compiled_object) + ".d"
        run(available_sdk(command, original), cwd=original)
        replacements[old] = str(compiled_object)
        additional_sources[suffix] = hashlib.sha256(compiled_source.read_bytes()).hexdigest()
    platform = None
    if platform_builder is not None:
        extra, platform = platform_builder(checkout, original, output, revision, inputs, lines)
        replacements.update(extra)
    filelist = output / "ffi.rsp"
    object_inputs = [replacements.get(p, str((original / p).resolve())) for p in inputs]
    if android:
        variables = {}
        for entry in ninja_lines[ninja_lines.index(line) + 1:]:
            if not entry.startswith("  "): break
            key, value = entry.strip().split(" =", 1)
            variables[key] = value.strip()
        toolchain = (original / "toolchain.ninja").read_text()
        content = re.search(r"  rspfile_content = (.*)", toolchain[toolchain.index("rule solink\n"):])[1]
        for key, value in {"in": shlex.join(object_inputs), **variables}.items():
            content = content.replace("${" + key + "}", value)
        content = content.replace("${solibs}", "")
        if "${" in content: raise ValueError("Unresolved Android response-file variable")
        filelist.write_text(content + "\n")
    else:
        filelist.write_text("\n".join(object_inputs) + "\n")
    if android:
        sdk = output_root / "engine-src/out" / ("ffi_" + name)
        sdk.mkdir(parents=True, exist_ok=True)
        for child in original.iterdir():
            if child.name in ("libflutter.so", "lib.stripped", "flutter.jar"): continue
            alias = sdk / child.name
            if not alias.exists() and not alias.is_symlink(): alias.symlink_to(child, target_is_directory=child.is_dir())
        exports = output / "exports.lst"
        exports.write_text((source / "flutter/shell/platform/android/android_exports.lst").read_text().replace(
            "  global:", "  global:\n    flax_ffi_experiment_*;"))
        link[link.index("-o") + 1] = str(sdk / "libflutter.so")
        link = ["@" + str(filelist) if c.startswith("@") else
                "-Wl,--version-script=" + str(exports) if c.startswith("-Wl,--version-script=") else c for c in link]
        run(link, cwd=original)
        (sdk / "lib.stripped").mkdir(exist_ok=True)
        run([source / "flutter/buildtools/mac-arm64/clang/bin/llvm-strip", "--strip-unneeded",
             "-o", sdk / "lib.stripped/libflutter.so", sdk / "libflutter.so"])
        for name in ["flutter.jar", "arm64_v8a_debug.jar"]:
            jar = sdk / name
            if jar.is_symlink(): jar.unlink()
            with zipfile.ZipFile(original / name) as before, zipfile.ZipFile(jar, "w") as after:
                for entry in before.infolist():
                    with after.open(copy.copy(entry), "w") as destination:
                        if entry.filename == "lib/arm64-v8a/libflutter.so":
                            with (sdk / "libflutter.so").open("rb") as binary: shutil.copyfileobj(binary, destination)
                        else:
                            with before.open(entry) as data: shutil.copyfileobj(data, destination)
        (output / "build.json").write_text(json.dumps({"revision": revision, "compile": compile_command,
            "link": link, "isolatedOutput": str(sdk), "extensionSha256": hashlib.sha256(
                (extension / "runtime.inc").read_bytes()).hexdigest()}, indent=2) + "\n")
        print("Built:", sdk, flush=True)
        return
    framework = "FlutterMacOS.framework" if mac else "Flutter.framework"
    sdk = output_root / "engine-src/out" / ("ffi_" + name)
    sdk.mkdir(parents=True, exist_ok=True)
    if mac and not name.endswith("arm64"):
        alias = sdk.parent / (sdk.name + "_arm64")
        if not alias.exists(): alias.symlink_to(sdk, target_is_directory=True)
    for child in original.iterdir():
        if child.name == framework:
            continue
        alias = sdk / child.name
        if not alias.exists() and not alias.is_symlink():
            alias.symlink_to(child, target_is_directory=child.is_dir())
    if platform is not None:
        patched_sdk = sdk / 'flutter_patched_sdk'
        if patched_sdk.is_symlink(): patched_sdk.unlink()
        elif patched_sdk.exists(): shutil.rmtree(patched_sdk)
        shutil.copytree(platform, patched_sdk)
    destination = sdk / framework
    if destination.exists():
        shutil.rmtree(destination)
    shutil.copytree(original / framework, destination, symlinks=True)
    binary = sdk / target
    link[link.index("-o") + 1] = str(binary)
    link = ["-Wl,-filelist," + str(filelist) if c.startswith("-Wl,-filelist,") else
            "-Wl,-object_path_lto," + str(output / "ffi-lto.o")
            if c.startswith("-Wl,-object_path_lto,") else c for c in link]
    run(link, cwd=original)
    run(["codesign", "--force", "--sign", "-", destination])
    if mac and cpp_transforms and name.endswith('debug'):
        tester_lines = subprocess.check_output(
            ['ninja', '-C', original, '-t', 'commands', 'flutter_tester'], text=True).splitlines()
        tester = available_sdk(shlex.split(tester_lines[-1]), original)
        tester_ninja = (original / 'obj/flutter/shell/testing/flutter_tester.ninja').read_text()
        tester_input = next(line for line in tester_ninja.splitlines()
                            if line.startswith('build ./flutter_tester: link '))
        tester_objects = shlex.split(tester_input.split(': link ', 1)[1].split(' |', 1)[0])
        tester_rsp = output / 'tester.rsp'
        tester_rsp.write_text('\n'.join(replacements.get(p, str((original / p).resolve()))
                                        for p in tester_objects) + '\n')
        tester_path = sdk / 'flutter_tester'
        if tester_path.is_symlink(): tester_path.unlink()
        tester[tester.index('-o') + 1] = str(tester_path)
        tester = ['-Wl,-filelist,' + str(tester_rsp) if part.startswith('-Wl,-filelist,')
                  else part for part in tester]
        tester += list(map(str, libraries))
        run(tester, cwd=original)
        run(['codesign', '--force', '--sign', '-', tester_path])
    # Flutter prefers the XCFramework when both packaging forms are present.
    xcname = "FlutterMacOS.xcframework" if mac else "Flutter.xcframework"
    if (original / xcname).exists():
        xc = sdk / xcname
        if xc.is_symlink(): xc.unlink()
        elif xc.exists(): shutil.rmtree(xc)
        xc.mkdir()
        shutil.copyfile(original / xcname / "Info.plist", xc / "Info.plist")
        for slice in (original / xcname).iterdir():
            if not slice.is_dir(): continue
            (xc / slice.name).mkdir()
            for child in slice.iterdir():
                if child.name == framework:
                    shutil.copytree(destination, xc / slice.name / child.name, symlinks=True)
                else:
                    (xc / slice.name / child.name).symlink_to(child,
                        target_is_directory=child.is_dir())
    receipt = {"revision": revision, "originalOutput": str(original),
               "isolatedOutput": str(sdk), "compile": compile_command, "link": link,
               "extensionSha256": hashlib.sha256(
                   (extension / "runtime.inc").read_bytes()).hexdigest()}
    receipt["additionalSources"] = additional_sources
    receipt["linkedLibraries"] = {str(p): hashlib.sha256(Path(p).read_bytes()).hexdigest()
                                  for p in libraries}
    (output / "build.json").write_text(json.dumps(receipt, indent=2) + "\n")
    print("Built:", sdk, flush=True)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--flutter-root", type=Path, required=True)
    parser.add_argument("--output", type=Path, required=True)
    parser.add_argument("--sanitize", action="store_true")
    parser.add_argument("targets", nargs="+")
    options = parser.parse_args()
    options.output.mkdir(parents=True, exist_ok=True)
    temp = options.output / "tmp"
    temp.mkdir(exist_ok=True)
    os.environ.update(TMPDIR=str(temp), TMP=str(temp), TEMP=str(temp))
    for name in options.targets:
        build(options.flutter_root.resolve(), options.output.resolve(), name, options.sanitize)
