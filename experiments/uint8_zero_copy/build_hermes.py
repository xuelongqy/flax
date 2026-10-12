#!/usr/bin/env python3
"""Build a separate Hermes tester from pinned objects; leave both checkouts intact."""
import concurrent.futures
import json
from pathlib import Path
import shlex
import shutil
import subprocess


def run(command, **kwargs):
    return subprocess.run(command, check=True, **kwargs)


def main():
    root = Path(__file__).resolve().parents[2]
    experiment = root / "experiments/uint8_zero_copy"
    evidence = root / ".local/uint8-zero-copy"
    receipt = json.loads((evidence / "build.json").read_text())
    original = Path(receipt["originalOutput"])
    source = original.parents[1]
    checkout = source.parents[1]
    lock = json.loads((source / "flutter/flax/source.lock.json").read_text())["hermes"]
    cache = checkout / ".local/flax-hermes-final"
    hermes = cache / ("hermes-" + lock["revision"])
    host = cache / "host-tools"
    output = evidence / "hermes"
    output.mkdir(exist_ok=True)
    native = root.parent / "flutter/engine/src/flutter/flax/native"
    includes = [hermes / "public", hermes / "API", hermes / "API/jsi"]

    patched = output / "source"
    sdk_sources = ["API/hermes/hermes.cpp", "lib/VM/JSLib/ArrayBuffer.cpp",
                   "lib/VM/JSArrayBuffer.cpp"]
    for name in sdk_sources:
        target = patched / name
        target.parent.mkdir(parents=True, exist_ok=True)
        shutil.copyfile(hermes / name, target)
    run(["patch", "-p1", "--input", str(native.parent / "patches/hermes/hermes-shared-buffers.patch")], cwd=patched)
    commands = run(["ninja", "-C", str(host), "-t", "commands",
                    "hermes/lib/libhermesvm_a.a"], capture_output=True,
                   text=True).stdout.splitlines()
    commands = [shlex.split(c) for c in commands if " -c " in c]
    sdk_commands = []
    sdk_objects = []
    for name in sdk_sources:
        selected = [c for c in commands
                    if c[c.index("-c") + 1] == str(hermes / name)]
        if len(selected) != 1:
            raise ValueError(f"Expected one pinned Hermes compile command: {name}")
        command = selected[0]
        obj = output / (Path(name).name + ".o")
        command[command.index("-c") + 1] = str(patched / name)
        command[command.index("-o") + 1] = str(obj)
        command[command.index("-MF") + 1] = str(obj) + ".d"
        command += ["-I" + str((hermes / name).parent)]
        sdk_commands.append(command)
        sdk_objects.append(str(obj))

    template = receipt["compileCommands"][0]
    compile_commands = []
    replacements = {}
    for name, inc in [("src/runtime.cpp", "diagnostics.inc"),
                      ("hermes_engine.cpp", "hermes_diagnostics.inc")]:
        overlay = output / Path(name).name
        text = (native / name).read_text()
        if name == "src/runtime.cpp":
            text = "#include <atomic>\nstd::atomic<uint64_t> uint8_dart_views{0};\n" + text
            text = text.replace('          delete static_cast<std::shared_ptr<fbjsi::MutableBuffer>*>(peer);',
                                '          uint8_dart_views.fetch_sub(1);\n          delete static_cast<std::shared_ptr<fbjsi::MutableBuffer>*>(peer);')
            text = text.replace('    runtime->js = flax::createEngineRuntime(&runtime->depth);', '    runtime->js = flax::createEngineRuntime(&runtime->depth);\n    runtime->js->global().setProperty(*runtime->js, "__flaxUint8Address",\n      fbjsi::Function::createFromHostFunction(*runtime->js,\n        fbjsi::PropNameID::forAscii(*runtime->js, "__flaxUint8Address"), 1,\n        [](fbjsi::Runtime& js, const fbjsi::Value&, const fbjsi::Value* args, size_t count) {\n          if (count != 1 || !args[0].isObject()) throw fbjsi::JSError(js, "Expected Uint8Array");\n          auto view = flax::readUint8Array(js, args[0].getObject(js));\n          auto* data = view.storage->data();\n          return fbjsi::Value(static_cast<double>(reinterpret_cast<uintptr_t>(data ? data + view.offset : nullptr)));\n        }));')
            text = text.replace('    storage.release();', '    uint8_dart_views.fetch_add(1);\n    storage.release();')
        overlay.write_text(text + f'\n#include "{experiment / "native" / inc}"\n')
        command = ["-DFLAX_ENGINE_ID=1" if c == "-DFLAX_ENGINE_ID=2" else c
                   for c in template]
        obj = output / (overlay.stem + ".o")
        command[command.index("-c") + 1] = str(overlay)
        command[command.index("-o") + 1] = str(obj)
        command[command.index("-MF") + 1] = str(obj) + ".d"
        command += ["-I" + str(p) for p in includes]
        command += ['-DFLAX_HERMES_REVISION="' + lock["revision"] + '"']
        compile_commands.append(command)
        replacements[name] = str(obj)
    with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
        futures = [pool.submit(run, c, cwd=host) for c in sdk_commands]
        futures += [pool.submit(run, c, cwd=original) for c in compile_commands]
        for future in futures:
            future.result()
    archive = output / "libhermesvm_a.a"
    shutil.copyfile(host / "hermes/lib/libhermesvm_a.a", archive)
    ar = source / "flutter/buildtools/mac-arm64/clang/bin/llvm-ar"
    run([str(ar), "r", str(archive), *sdk_objects])

    inputs = (evidence / "tester.rsp").read_text().splitlines()
    v8_objects = {c[c.index("-o") + 1] for c in receipt["compileCommands"]}
    inputs = [p for p in inputs if "/flax/native/" not in p
              and p not in v8_objects]
    inputs += list(replacements.values())
    inputs += [str(archive), str(host / "hermes/jsi/libjsi.a"),
               str(host / "hermes/external/boost/boost_1_86_0/libs/context/libboost_context.a")]
    filelist = output / "tester.rsp"
    filelist.write_text("\n".join(inputs) + "\n")
    isolated = evidence / "engine-src/out/uint8_hermes_debug_arm64"
    isolated.mkdir(exist_ok=True)
    for child in original.iterdir():
        if child.name == "flutter_tester":
            continue
        target = isolated / child.name
        if not target.exists() and not target.is_symlink():
            target.symlink_to(child, target_is_directory=child.is_dir())
    host_alias = isolated.parent / "uint8_hermes_host_debug_arm64"
    if not host_alias.exists():
        host_alias.symlink_to(isolated, target_is_directory=True)
    link = ["-Wl,-filelist," + str(filelist) if c.startswith("-Wl,-filelist,") else c
            for c in receipt["linkCommand"] if ".dylib" not in c]
    tester = isolated / "flutter_tester"
    link[link.index("-o") + 1] = str(tester)
    run(link, cwd=original)
    run(["codesign", "--force", "--sign", "-", str(tester)])
    (output / "build.json").write_text(json.dumps({
        "revision": lock["revision"], "version": lock["version"],
        "hermesSource": str(hermes), "hostBuild": str(host),
        "sdkCompileCommands": sdk_commands, "compileCommands": compile_commands,
        "linkCommand": link, "tester": str(tester),
    }, indent=2) + "\n")
    print(f"Isolated Hermes tester: {tester}", flush=True)


if __name__ == "__main__":
    main()
