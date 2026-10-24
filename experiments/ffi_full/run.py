#!/usr/bin/env python3
"""Run the full FFI experiment in disposable applications and isolated engines."""
import argparse
import importlib.util
import hashlib
import json
import os
from pathlib import Path
import plistlib
import re
import shutil
import subprocess
import tempfile
import zipfile


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--flutter-root", type=Path, required=True)
    parser.add_argument("--engine-output", type=Path, required=True)
    parser.add_argument("--scratch-root", type=Path, required=True)
    parser.add_argument("--simulator", required=True)
    parser.add_argument("--engine", choices=["v8", "hermes", "both"], default="both")
    parser.add_argument("--target", action="append", choices=["macos", "ios-simulator", "ios-device", "android"])
    parser.add_argument("--release", action="store_true")
    parser.add_argument("--ios-device")
    parser.add_argument("--team")
    parser.add_argument("--android-device")
    parser.add_argument("--adb", type=Path, default=Path("/Volumes/MAC_HOME/Android/sdk/platform-tools/adb"))
    parser.add_argument("--asan-runtime", type=Path)
    parser.add_argument("--build-only", action="store_true")
    args = parser.parse_args()
    if args.target and "ios-device" in args.target and (not args.release or (not args.build_only and (not args.ios_device or not args.team))):
        parser.error("ios-device requires --release, --ios-device and --team")
    if args.release and args.target and any(t in args.target for t in ("ios-simulator", "android")):
        parser.error("The available simulator and Android experiments use debug engines")
    root = Path(__file__).resolve().parents[2]
    experiment = Path(__file__).resolve().parent
    inputs = [experiment / "probe.dart", experiment / "probe.js", *sorted((experiment / "native").glob("*"))]
    snapshot = {p: p.read_bytes() for p in inputs if p.is_file()}
    source_hashes = {str(p.relative_to(experiment)): hashlib.sha256(data).hexdigest() for p, data in snapshot.items()}
    spec = importlib.util.spec_from_file_location("gate_a", root / "experiments/ffi_gate_a/run.py")
    gate = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(gate)
    output = root / ".local/ffi-full"
    output.mkdir(parents=True, exist_ok=True)
    args.scratch_root.mkdir(parents=True, exist_ok=True)
    scratch = Path(tempfile.mkdtemp(prefix="flax-ffi-full-", dir=args.scratch_root))
    env = dict(os.environ, TMPDIR=str(scratch), TMP=str(scratch), TEMP=str(scratch))
    app = scratch / "app"
    flutter = args.flutter_root / "bin/flutter"
    source = args.engine_output / "engine-src"
    mode = "release" if args.release else "debug"
    host = "ffi_flax_mac_" + mode + "_arm64"
    results = {}
    try:
        gate.run([flutter, "create", "--no-pub", "--platforms=macos,ios,android", "--org=dev.flax",
                  "--project-name=flax_ffi_full", app], root, env, output / "create.log")
        (app / "pubspec.yaml").write_text('''name: flax_ffi_full
publish_to: none
version: 1.0.0+1
environment:
  sdk: ^3.13.5
dependencies:
  flutter:
    sdk: flutter
  ffi: 2.2.0
dev_dependencies:
  flutter_lints: 6.0.0
''')
        shutil.rmtree(app / "test")
        (app / "lib/main.dart").write_bytes(snapshot[experiment / "probe.dart"])
        shutil.copyfile(root / "experiments/ffi_gate_a/probe.dart", app / "lib/gate_a_probe.dart")
        (app / "lib/probe_script.g.dart").write_text(
            "const probeScript = r'''" + snapshot[experiment / "probe.js"].decode() + "''';\n")
        for name in ["native_calls.dart", "runtime_bindings.g.dart"]:
            shutil.copyfile(root / "packages/flax/lib/src/native" / name, app / "lib" / name)
        (app / "native").mkdir()
        for p, data in snapshot.items():
            if p.parent == experiment / "native": (app / "native" / p.name).write_bytes(data)
        include = app / "native/include/flax"
        include.mkdir(parents=True)
        shutil.copyfile(root / "packages/flax/native/include/flax/runtime.h", include / "runtime.h")
        for platform in ["macos", "ios"]:
            gate.attach_sources(app / platform / "Runner.xcodeproj/project.pbxproj",
                                [("provider.c", "sourcecode.c.c")])
            project = app / platform / "Runner.xcodeproj/project.pbxproj"
            project.write_text(project.read_text().replace('"-Wl,-export_dynamic"',
                '"-Wl,-export_dynamic", "-Wl,-u,_flax_ffi_fixture_provider", "-Wl,-u,_flax_ffi_fixture_add"'))
        if args.asan_runtime:
            project = app / "macos/Runner.xcodeproj/project.pbxproj"
            text = project.read_text().replace('"-Wl,-export_dynamic"', '"-Wl,-export_dynamic", "-fsanitize=address,undefined"')
            text = text.replace("buildSettings = {", 'buildSettings = {\nOTHER_CFLAGS = ("$(inherited)", "-fsanitize=address,undefined");')
            project.write_text(text)
        if args.team:
            project = app / "ios/Runner.xcodeproj/project.pbxproj"
            project.write_text(project.read_text().replace("buildSettings = {", "buildSettings = {\nDEVELOPMENT_TEAM = " + args.team + ";"))
        gradle = app / "android/app/build.gradle.kts"
        gradle.write_text(gradle.read_text().replace("android {", '''android {
    externalNativeBuild { cmake { path = file("../../native/CMakeLists.txt") } }
''', 1))
        (app / "native/CMakeLists.txt").write_text('''cmake_minimum_required(VERSION 3.10)
project(flax_ffi_fixture C)
add_library(flax_ffi_fixture SHARED provider.c)
target_include_directories(flax_ffi_fixture PRIVATE include)
target_compile_features(flax_ffi_fixture PRIVATE c_std_17)
target_link_options(flax_ffi_fixture PRIVATE "-Wl,-z,max-page-size=16384")
''')
        gate.run([flutter, "pub", "get", "--offline"], app, env, output / "pub-get.log")
        gate.run([args.flutter_root / "bin/dart", "format", "lib/main.dart"], app, env,
                 output / "format.log")
        gate.run([args.flutter_root / "bin/dart", "analyze", "--fatal-infos", "lib/main.dart"],
                 app, env, output / "analyze.log")
        targets = args.target or (["macos", "ios-simulator"] if args.engine == "both" else
                                  ["macos" if args.engine == "v8" else "ios-simulator"])
        for platform in targets:
            ios = platform.startswith("ios")
            android = platform == "android"
            engine = "hermes" if ios else "v8"
            label = platform + "-" + mode + ("-asan" if args.asan_runtime else "")
            target = ("ffi_flax_ios_debug_sim_arm64" if platform == "ios-simulator" else
                      "ffi_flax_ios_release_arm64" if ios else "ffi_flax_android_debug_arm64" if android else
                      "ffi_flax_mac_" + mode + "_arm64")
            engine_name = target.removeprefix("ffi_")
            if platform == "macos": engine_name = engine_name.removesuffix("_arm64")
            build_receipt = json.loads((args.engine_output / engine_name / "build.json").read_text())
            if build_receipt["extensionSha256"] != source_hashes["native/runtime.inc"]:
                raise RuntimeError("Isolated engine extension is stale; rebuild it before running")
            command = [flutter, f"--local-engine-src-path={source}", f"--local-engine={target}",
                       f"--local-engine-host={host}", "build", "ios" if ios else "apk" if android else "macos",
                       "--" + mode, "--no-pub"]
            if platform == "ios-simulator": command.extend(["--simulator", "--no-codesign"])
            if platform == "ios-device" and args.build_only: command.append("--no-codesign")
            if android: command.extend(["--target-platform=android-arm64"])
            gate.run(command, app, env, output / f"{label}-build.log")
            if platform == "ios-simulator":
                bundle = app / "build/ios/iphonesimulator/Runner.app"
                identity = plistlib.loads((bundle / "Info.plist").read_bytes())["CFBundleIdentifier"]
                gate.run(["xcrun", "simctl", "install", args.simulator, bundle], app, env,
                         output / "hermes-install.log")
                try:
                    result = gate.launch(["xcrun", "simctl", "launch", "--console-pty",
                        "--terminate-running-process", args.simulator, identity], env,
                        output / f"{label}-run.log", "FLAX_FFI_FULL_RESULT ")
                finally:
                    subprocess.run(["xcrun", "simctl", "terminate", args.simulator, identity],
                                   stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
                    subprocess.run(["xcrun", "simctl", "uninstall", args.simulator, identity],
                                   stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
                binary = source / "out" / target / "Flutter.framework/Flutter"
                packaged = bundle / "Frameworks/Flutter.framework/Flutter"
            elif platform == "ios-device":
                bundle = app / "build/ios/iphoneos/Runner.app"
                identity = plistlib.loads((bundle / "Info.plist").read_bytes())["CFBundleIdentifier"]
                # Launch only a relocated app with no Dart/JS source files beside it.
                relocated = scratch / "relocated/Runner.app"
                relocated.parent.mkdir()
                shutil.copytree(bundle, relocated)
                if list(relocated.rglob("*.dart")) or list(relocated.rglob("*.js")):
                    raise RuntimeError("Device release contains source files")
                symbols = subprocess.check_output(["xcrun", "nm", "-gU", relocated / "Runner"], text=True)
                for symbol in ["_flax_ffi_fixture_provider", "_flax_ffi_fixture_add"]:
                    if symbol not in symbols: raise RuntimeError("Release stripped provider entry: " + symbol)
                if args.build_only:
                    result = {"built": True, "executed": False, "engine": engine,
                              "providerSymbolsPreserved": True}
                else:
                    gate.run(["xcrun", "devicectl", "device", "install", "app", "--device", args.ios_device,
                              relocated], app, env, output / "device-install.log")
                    try:
                        result = gate.launch(["xcrun", "devicectl", "device", "process", "launch", "--console",
                            "--terminate-existing", "--device", args.ios_device, identity], env,
                            output / "device-run.log", "FLAX_FFI_FULL_RESULT ")
                    finally:
                        subprocess.run(["xcrun", "devicectl", "device", "uninstall", "app", "--device", args.ios_device, identity],
                                       stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
                binary = source / "out" / target / "Flutter.framework/Flutter"
                packaged = relocated / "Frameworks/Flutter.framework/Flutter"
                result["relocatedWithoutSources"] = True
            elif android:
                if not args.android_device: raise RuntimeError("--android-device is required")
                adb = [args.adb, "-s", args.android_device]
                apk = app / "build/app/outputs/flutter-apk" / ("app-" + mode + ".apk")
                gate.run([*adb, "install", "-r", apk], app, env, output / "android-install.log")
                try:
                    gate.run([*adb, "shell", "am", "start", "-W", "-n", "dev.flax.flax_ffi_full/.MainActivity"],
                             app, env, output / "android-start.log")
                    pid = subprocess.check_output([*map(str, adb), "shell", "pidof", "dev.flax.flax_ffi_full"], text=True).strip()
                    if not pid.isdecimal(): raise RuntimeError("Expected one Android probe process")
                    result = gate.launch([*adb, "logcat", "--pid=" + pid, "-v", "brief"], env,
                                         output / "android-run.log", "FLAX_FFI_FULL_RESULT ")
                finally:
                    subprocess.run([*map(str, adb), "uninstall", "dev.flax.flax_ffi_full"], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
                with zipfile.ZipFile(apk) as package:
                    packaged = scratch / "packaged-libflutter.so"
                    packaged.write_bytes(package.read("lib/arm64-v8a/libflutter.so"))
                binary = source / "out" / target / "lib.stripped/libflutter.so"
            else:
                bundles = list((app / ("build/macos/Build/Products/" + mode.capitalize())).glob("*.app"))
                if len(bundles) != 1: raise RuntimeError("Expected one application")
                launch_env = dict(env)
                if args.asan_runtime:
                    launch_env.update(DYLD_INSERT_LIBRARIES=str(args.asan_runtime),
                                      ASAN_OPTIONS="detect_leaks=0:abort_on_error=1",
                                      UBSAN_OPTIONS="halt_on_error=1:print_stacktrace=1")
                result = gate.launch([bundles[0] / "Contents/MacOS/flax_ffi_full"], launch_env,
                                     output / f"{label}-run.log", "FLAX_FFI_FULL_RESULT ")
                binary = source / "out" / target / "FlutterMacOS.framework/Versions/A/FlutterMacOS"
                packaged = bundles[0] / "Contents/Frameworks/FlutterMacOS.framework/Versions/A/FlutterMacOS"
            (output / f"{label}-result.json").write_text(json.dumps(result, indent=2) + "\n")
            if (not result.get("passed") and not (args.build_only and result.get("built"))) or result.get("engine") != engine:
                raise RuntimeError(f"{engine} failed: {result}")
            if args.asan_runtime: result["sanitizers"] = ["address", "undefined"]
            if android:
                result["engineSha256"] = gate.digest(binary)
                result["packagedEngineSha256"] = gate.digest(packaged)
                readelf = args.flutter_root / "engine/src/flutter/buildtools/mac-arm64/clang/bin/llvm-readelf"
                def build_id(path):
                    notes = subprocess.check_output([readelf, "--notes", path], text=True)
                    return re.search(r"Build ID: ([a-f0-9]+)", notes)[1]
                result["engineBuildId"] = build_id(binary)
                if result["engineBuildId"] != build_id(packaged): raise RuntimeError("Packaged Android engine differs")
            else:
                result["engineUuids"] = gate.binary_uuids(binary)
                if result["engineUuids"] != gate.binary_uuids(packaged):
                    raise RuntimeError("Packaged engine does not match isolated engine")
            results[label] = result
            (output / f"{label}-receipt.json").write_text(json.dumps({"result": result,
                "engineRevision": build_receipt["revision"], "engineTarget": target,
                "sourceSha256": source_hashes}, indent=2) + "\n")
            print(json.dumps({label: result}, indent=2), flush=True)
        (output / "receipt.json").write_text(json.dumps({"results": results}, indent=2) + "\n")
    finally:
        shutil.rmtree(scratch)


if __name__ == "__main__":
    main()
