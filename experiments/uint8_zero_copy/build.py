#!/usr/bin/env python3
"""Relink an isolated tester; never modify the maintained engine checkout."""
import argparse
import concurrent.futures
import hashlib
import json
from pathlib import Path
import shlex
import shutil
import subprocess


def run(arguments, **kwargs):
    return subprocess.run(arguments, check=True, **kwargs)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--flutter", type=Path, required=True)
    parser.add_argument("--output", default="flax_mac_debug")
    args = parser.parse_args()
    root = Path(__file__).resolve().parents[2]
    experiment = root / "experiments/uint8_zero_copy"
    flutter = args.flutter.resolve()
    source = flutter / "engine/src"
    original = source / "out" / args.output
    native = root.parent / "flutter/engine/src/flutter/flax/native"
    dart_source = root / ".local/dart-uint8-source"
    evidence = root / ".local/uint8-zero-copy"
    evidence.mkdir(parents=True, exist_ok=True)
    overlay = evidence / "overlay"
    shutil.copytree(native, overlay, dirs_exist_ok=True)

    paths = ["src/runtime.cpp", "v8-jsi/src/jsi_abi/jsi_abi_v8.cpp"]
    hashes = {p: hashlib.sha256((native / p).read_bytes()).hexdigest()
              for p in paths}
    for path, inc in [(paths[0], "diagnostics.inc"), (paths[1], "v8_diagnostics.inc")]:
        with (overlay / path).open("a") as output:
            output.write(f'\n#include "{experiment / "native" / inc}"\n')
    # Compile the maintained patches, with counters only in this test overlay.
    runtime_source = overlay / paths[0]
    text = runtime_source.read_text()
    text = "#include <atomic>\nstd::atomic<uint64_t> uint8_dart_views{0};\n" + text
    text = text.replace('          delete static_cast<std::shared_ptr<fbjsi::MutableBuffer>*>(peer);',
                        '          uint8_dart_views.fetch_sub(1);\n          delete static_cast<std::shared_ptr<fbjsi::MutableBuffer>*>(peer);')
    text = text.replace('    runtime->js = flax::createEngineRuntime(&runtime->depth);', '    runtime->js = flax::createEngineRuntime(&runtime->depth);\n    runtime->js->global().setProperty(*runtime->js, "__flaxUint8Address",\n      fbjsi::Function::createFromHostFunction(*runtime->js,\n        fbjsi::PropNameID::forAscii(*runtime->js, "__flaxUint8Address"), 1,\n        [](fbjsi::Runtime& js, const fbjsi::Value&, const fbjsi::Value* args, size_t count) {\n          if (count != 1 || !args[0].isObject()) throw fbjsi::JSError(js, "Expected Uint8Array");\n          auto view = flax::readUint8Array(js, args[0].getObject(js));\n          auto* data = view.storage->data();\n          return fbjsi::Value(static_cast<double>(reinterpret_cast<uintptr_t>(data ? data + view.offset : nullptr)));\n        }));')
    text = text.replace('    storage.release();', '    uint8_dart_views.fetch_add(1);\n    storage.release();')
    runtime_source.write_text(text)
    vm_source = dart_source / "runtime/vm/dart_api_impl.cc"
    hashes["dart/vm/dart_api_impl.cc"] = hashlib.sha256(vm_source.read_bytes()).hexdigest()
    vm_overlay = overlay / "dart_api_impl.cc"
    text = vm_source.read_text()
    text = text.replace('void RetireFlaxBuffers(Thread*);', 'void RetireFlaxBuffers(Thread*);\nuint64_t uint8_promotions = 0;')
    text = text.replace('    if (base.ptr()->IsNewObject())\n      return Api::NewError("Uint8List promotion failed");',
                        '    ++uint8_promotions;\n    if (base.ptr()->IsNewObject())\n      return Api::NewError("Uint8List promotion failed");')
    text += '\n' + (experiment / "native/vm_diagnostics.inc").read_text()
    vm_overlay.write_text(text)

    commands = run(["ninja", "-C", str(original), "-t", "commands",
                    "flutter_tester"], capture_output=True, text=True).stdout.splitlines()
    replacements = {}
    compile_commands = []
    for path in paths:
        selected = [shlex.split(c) for c in commands
                    if " -c " in c and "/flax/native/" + path in c]
        if len(selected) != 1:
            raise ValueError(f"Expected exactly one compile command: {path}")
        command = selected[0]
        old_object = command[command.index("-o") + 1]
        output = evidence / (Path(path).stem + ".o")
        replacements[old_object] = str(output)
        command[command.index("-c") + 1] = str(overlay / path)
        command[command.index("-o") + 1] = str(output)
        command[command.index("-MF") + 1] = str(output) + ".d"
        prefix = "-I../../flutter/flax/native/"
        command = ["-I" + str(overlay / x[len(prefix):])
                   if x.startswith(prefix) else x for x in command]
        command = ["-I" + str(dart_source / "runtime/include")
                   if x == "-I../../flutter/third_party/dart/runtime/include" else x
                   for x in command]
        command += ["-I" + str(experiment / "native")]
        compile_commands.append(command)
    selected = [shlex.split(c) for c in commands
                if " -c " in c and "/runtime/vm/dart_api_impl.cc" in c
                and "libdart_jit.dart_api_impl.o" in c]
    if len(selected) != 1:
        raise ValueError("Expected exactly one Dart VM API compile command")
    command = selected[0]
    vm_object = evidence / "libdart_jit.dart_api_impl.o"
    command = ["-I" + str(dart_source / x[len("-I../../flutter/third_party/dart/"):])
               if x.startswith("-I../../flutter/third_party/dart/") and not x.startswith("-I../../flutter/third_party/dart/third_party/") else x
               for x in command]
    command[command.index("-c") + 1] = str(vm_overlay)
    command[command.index("-o") + 1] = str(vm_object)
    command[command.index("-MF") + 1] = str(vm_object) + ".d"
    compile_commands.append(command)
    with concurrent.futures.ThreadPoolExecutor(max_workers=4) as executor:
        futures = [executor.submit(run, c, cwd=original) for c in compile_commands]
        for future in futures:
            future.result()

    archive_path = "obj/flutter/third_party/dart/runtime/libdart_jit.a"
    archive = evidence / "libdart_jit.a"
    shutil.copyfile(original / archive_path, archive)
    ar = source / "flutter/buildtools/mac-arm64/clang/bin/llvm-ar"
    run([str(ar), "r", str(archive), str(vm_object)])
    replacements[archive_path] = str(archive)

    isolated_source = evidence / "engine-src"
    isolated_out = isolated_source / "out/uint8_debug_arm64"
    isolated_out.mkdir(parents=True, exist_ok=True)
    host = isolated_source / "out/flax_mac_debug_arm64"
    if host.is_symlink() and host.resolve() != isolated_out.resolve():
        host.unlink()
    if not host.exists():
        host.symlink_to(isolated_out, target_is_directory=True)
    for child in original.iterdir():
        if child.name == "flutter_tester":
            continue
        target = isolated_out / child.name
        if not target.exists() and not target.is_symlink():
            target.symlink_to(child, target_is_directory=child.is_dir())
    ninja = original / "obj/flutter/shell/testing/flutter_tester.ninja"
    edges = [line for line in ninja.read_text().splitlines()
             if line.startswith("build ./flutter_tester: link ")]
    if len(edges) != 1:
        raise ValueError("Tester link rule changed")
    inputs = edges[0].split(" |", 1)[0].split()[3:]
    if not set(replacements).issubset(inputs):
        raise ValueError("Prototype objects missing from tester link inputs")
    filelist = evidence / "tester.rsp"
    filelist.write_text("\n".join(replacements.get(p, str((original / p).resolve()))
                                  for p in inputs) + "\n")
    symbols = evidence / "tester.sym"
    symbols.write_text((source / "flutter/common/exported_test_symbols_mac.sym")
                       .read_text() + "\n_flax_uint8_*\n")
    link = shlex.split(commands[-1])
    if link[link.index("-o") + 1] != "./flutter_tester":
        raise ValueError("Unexpected final Ninja target")
    link[link.index("-o") + 1] = str(isolated_out / "flutter_tester")
    link[link.index("-exported_symbols_list") + 2] = str(symbols)
    link = ["-Wl,-filelist," + str(filelist) if x.startswith("-Wl,-filelist,") else x
            for x in link]
    run(link, cwd=original)
    run(["codesign", "--force", "--sign", "-", str(isolated_out / "flutter_tester")])
    receipt = {
        "flaxCommit": run(["git", "rev-parse", "HEAD"], cwd=root,
                           capture_output=True, text=True).stdout.strip(),
        "flutterCommit": run(["git", "rev-parse", "HEAD"], cwd=flutter,
                              capture_output=True, text=True).stdout.strip(),
        "originalOutput": str(original), "sourceHashes": hashes,
        "engineSource": str(isolated_source), "engine": "uint8_debug_arm64",
        "hostEngine": "flax_mac_debug_arm64", "compileCommands": compile_commands,
        "linkCommand": link,
    }
    (evidence / "build.json").write_text(json.dumps(receipt, indent=2) + "\n")
    config = {
        "name": "FlaxUint8PrototypeBindings",
        "description": "Experiment-only Uint8List backing-store exports.",
        "output": str(experiment / "diagnostics_bindings.g.dart"),
        "headers": {"entry-points": [str(experiment / "native/api.h")],
                    "include-directives": ["**/uint8_zero_copy/native/api.h"]},
        "compiler-opts": ["-I" + str(native / "include")],
        "preamble": "// Generated from experiments/uint8_zero_copy/native/api.h. Do not edit.\n// ignore_for_file: type=lint\n",
    }
    (evidence / "ffigen.json").write_text(json.dumps(config, indent=2) + "\n")
    print(f"Isolated tester: {isolated_out / 'flutter_tester'}", flush=True)


if __name__ == "__main__":
    try:
        main()
    except subprocess.CalledProcessError as error:
        raise SystemExit(f"Native command failed with exit code {error.returncode}")
