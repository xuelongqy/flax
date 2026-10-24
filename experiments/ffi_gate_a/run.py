#!/usr/bin/env python3
"""Build and run the same ABI-2 native fixture on maintained V8/Hermes."""
import argparse
import hashlib
import json
import os
from pathlib import Path
import plistlib
import re
import selectors
import shutil
import subprocess
import tempfile
import time


def attach_sources(project, sources=None):
    """Change only the disposable Runner target, checking its Xcode structure."""
    text = project.read_text()
    data = json.loads(subprocess.check_output(
        ["plutil", "-convert", "json", "-o", "-", str(project)]))
    objects = data["objects"]
    runners = [o for o in objects.values()
               if o.get("isa") == "PBXNativeTarget" and o.get("name") == "Runner"]
    if len(runners) != 1:
        raise RuntimeError("Expected one Runner target")
    runner = runners[0]
    phases = [p for p in runner["buildPhases"]
              if objects[p]["isa"] == "PBXSourcesBuildPhase"]
    if len(phases) != 1:
        raise RuntimeError("Expected one Runner sources phase")
    for name, kind in sources or [("bridge.cpp", "sourcecode.cpp.cpp"),
                                 ("provider.c", "sourcecode.c.c")]:
        ref = hashlib.sha256((name + "/ref").encode()).hexdigest()[:24].upper()
        build = hashlib.sha256((name + "/build").encode()).hexdigest()[:24].upper()
        if ref in objects or build in objects:
            raise RuntimeError("Gate A project ID already exists")
        text = text.replace("/* End PBXFileReference section */",
            f'\t\t{ref} = {{isa = PBXFileReference; lastKnownFileType = {kind}; '
            f'path = "../native/{name}"; sourceTree = SOURCE_ROOT; }};\n'
            '/* End PBXFileReference section */')
        text = text.replace("/* End PBXBuildFile section */",
            f'\t\t{build} = {{isa = PBXBuildFile; fileRef = {ref}; }};\n'
            '/* End PBXBuildFile section */')
        pattern = rf'({phases[0]} /\* Sources \*/ = \{{.*?files = \(\n)'
        text, count = re.subn(pattern, rf'\g<1>\t\t\t\t{build},\n', text,
                             count=1, flags=re.S)
        if count != 1:
            raise RuntimeError("Runner sources section changed")
    configurations = objects[runner["buildConfigurationList"]]["buildConfigurations"]
    for identity in configurations:
        settings = objects[identity]["buildSettings"]
        if "OTHER_LDFLAGS" in settings or "HEADER_SEARCH_PATHS" in settings:
            raise RuntimeError("Unexpected Runner linker/header settings")
        pattern = rf'({identity} /\* [^\n]+ \*/ = \{{.*?buildSettings = \{{\n)'
        settings_text = ('\t\t\t\tOTHER_LDFLAGS = ("$(inherited)", "-Wl,-export_dynamic");\n'
            '\t\t\t\tHEADER_SEARCH_PATHS = ("$(inherited)", "$(PROJECT_DIR)/../native/include");\n')
        text, count = re.subn(pattern, lambda m: m[1] + settings_text,
                             text, count=1, flags=re.S)
        if count != 1:
            raise RuntimeError("Runner build configuration changed")
    text = re.sub(r"IPHONEOS_DEPLOYMENT_TARGET = [^;]+;",
                  "IPHONEOS_DEPLOYMENT_TARGET = 16.3;", text)
    text = re.sub(r"MACOSX_DEPLOYMENT_TARGET = [^;]+;",
                  "MACOSX_DEPLOYMENT_TARGET = 15.0;", text)
    project.write_text(text)


def run(command, cwd, env, log):
    print("Running:", " ".join(map(str, command)), flush=True)
    with log.open("w") as output:
        result = subprocess.run(list(map(str, command)), cwd=cwd, env=env,
                                stdout=output, stderr=subprocess.STDOUT)
    if result.returncode:
        raise RuntimeError(f"Command failed ({log}):\n{log.read_text()[-7000:]}")


def launch(command, env, log, marker="FLAX_FFI_GATE_A_RESULT "):
    process = subprocess.Popen(list(map(str, command)), env=env,
                               stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
    selector = selectors.DefaultSelector()
    selector.register(process.stdout, selectors.EVENT_READ)
    captured = bytearray()
    deadline = time.monotonic() + 90
    try:
        while time.monotonic() < deadline:
            for key, _ in selector.select(timeout=1):
                chunk = os.read(key.fileobj.fileno(), 65536)
                if not chunk:
                    raise RuntimeError("Application exited before the result")
                captured.extend(chunk)
                for line in captured.decode(errors="replace").splitlines():
                    if marker in line:
                        try:
                            return json.loads(line.split(marker, 1)[1])
                        except json.JSONDecodeError:
                            pass  # The next read can complete a partial stdout line.
        raise RuntimeError("Application produced no result within 90 seconds")
    finally:
        selector.close()
        if process.poll() is None:
            process.terminate()
            try:
                process.wait(timeout=5)
            except subprocess.TimeoutExpired:
                process.kill()
                process.wait()
        process.stdout.close()
        log.write_bytes(captured)


def digest(file):
    with file.open("rb") as source:
        return hashlib.file_digest(source, "sha256").hexdigest()


def binary_uuids(file):
    text = subprocess.check_output(["xcrun", "dwarfdump", "--uuid", str(file)], text=True)
    identities = re.findall(r"UUID: ([\w-]+) \(([^)]+)\)", text)
    if not identities:
        raise RuntimeError(f"Missing Mach-O UUID: {file}")
    return {architecture: identity for identity, architecture in identities}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--flutter-root", type=Path, required=True)
    parser.add_argument("--scratch-root", type=Path, required=True)
    parser.add_argument("--engine", choices=["v8", "hermes", "both"], default="both")
    parser.add_argument("--simulator", help="Existing booted arm64 simulator UUID")
    args = parser.parse_args()
    if args.engine != "v8" and not args.simulator:
        parser.error("--simulator is required for Hermes")
    root = Path(__file__).resolve().parents[2]
    experiment = Path(__file__).resolve().parent
    flutter = args.flutter_root.resolve() / "bin/flutter"
    engine_source = args.flutter_root.resolve() / "engine/src"
    output = root / ".local/ffi-gate-a"
    output.mkdir(parents=True, exist_ok=True)
    (output / "receipt.json").unlink(missing_ok=True)
    args.scratch_root.mkdir(parents=True, exist_ok=True)
    scratch = Path(tempfile.mkdtemp(prefix="flax-ffi-gate-a-", dir=args.scratch_root))
    app = scratch / "app"
    env = dict(os.environ, TMPDIR=str(scratch), TMP=str(scratch), TEMP=str(scratch))
    results = {}
    try:
        run([flutter, "create", "--no-pub", "--platforms=macos,ios", "--org=dev.flax",
             "--project-name=flax_ffi_gate_a", app], root, env, output / "create.log")
        (app / "pubspec.yaml").write_text('''name: flax_ffi_gate_a
publish_to: none
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
        shutil.copyfile(experiment / "probe.dart", app / "lib/main.dart")
        for name in ["native_calls.dart", "runtime_bindings.g.dart"]:
            shutil.copyfile(root / "packages/flax/lib/src/native" / name, app / "lib" / name)
        shutil.copytree(experiment / "native", app / "native")
        include = app / "native/include/flax"
        include.mkdir(parents=True)
        shutil.copyfile(root / "packages/flax/native/include/flax/runtime.h", include / "runtime.h")
        for platform in ["macos", "ios"]:
            attach_sources(app / platform / "Runner.xcodeproj/project.pbxproj")
        (app / "analysis_options.yaml").write_text('''include: package:flutter_lints/flutter.yaml
analyzer:
  language:
    strict-casts: true
    strict-inference: true
    strict-raw-types: true
''')
        run([flutter, "pub", "get", "--offline"], app, env, output / "pub-get.log")
        run([args.flutter_root / "bin/dart", "analyze", "--fatal-infos", "lib/main.dart"],
            app, env, output / "analyze.log")
        engines = ["v8", "hermes"] if args.engine == "both" else [args.engine]
        for engine in engines:
            ios = engine == "hermes"
            target = "flax_ios_debug_sim_arm64" if ios else "flax_mac_debug_arm64"
            flags = [f"--local-engine-src-path={engine_source}", f"--local-engine={target}",
                     "--local-engine-host=flax_mac_debug_arm64"]
            command = [flutter, *flags, "build", "ios" if ios else "macos", "--debug", "--no-pub"]
            if ios:
                command.extend(["--simulator", "--no-codesign"])
            run(command, app, env, output / f"{engine}-build.log")
            if ios:
                bundle = app / "build/ios/iphonesimulator/Runner.app"
                identifier = plistlib.loads((bundle / "Info.plist").read_bytes())["CFBundleIdentifier"]
                run(["xcrun", "simctl", "install", args.simulator, bundle], app, env,
                    output / "hermes-install.log")
                try:
                    result = launch(["xcrun", "simctl", "launch", "--console-pty",
                        "--terminate-running-process", args.simulator, identifier], env,
                        output / "hermes-run.log")
                finally:
                    subprocess.run(["xcrun", "simctl", "terminate", args.simulator, identifier],
                                   stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
                    subprocess.run(["xcrun", "simctl", "uninstall", args.simulator, identifier],
                                   stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
                binary = engine_source / "out" / target / "Flutter.framework/Flutter"
                packaged_binary = bundle / "Frameworks/Flutter.framework/Flutter"
            else:
                bundles = list((app / "build/macos/Build/Products/Debug").glob("*.app"))
                if len(bundles) != 1:
                    raise RuntimeError("Expected one macOS application")
                result = launch([bundles[0] / "Contents/MacOS/flax_ffi_gate_a"], env,
                                output / "v8-run.log")
                binary = engine_source / "out" / target / "FlutterMacOS.framework/Versions/A/FlutterMacOS"
                packaged_binary = bundles[0] / "Contents/Frameworks/FlutterMacOS.framework/Versions/A/FlutterMacOS"
            (output / f"{engine}-result.json").write_text(json.dumps(result, indent=2) + "\n")
            if not result.get("passed") or result.get("engine") != engine:
                raise RuntimeError(f"{engine} probe failed: {result}")
            result["engineBinarySha256"] = digest(binary)
            result["engineBinaryUuids"] = binary_uuids(binary)
            if binary_uuids(packaged_binary) != result["engineBinaryUuids"]:
                raise RuntimeError("Packaged engine differs from the selected engine")
            result["engineArgs"] = (engine_source / "out" / target / "args.gn").read_text()
            results[engine] = result
            print(json.dumps({engine: {key: value for key, value in result.items()
                if key not in {"engineArgs", "engineBinarySha256"}}}, indent=2), flush=True)
        receipt = {"scope": "Gate A; ABI 2 only; no production module extension",
                   "results": results,
                   "sourceSha256": {str(p.relative_to(experiment)): digest(p)
                       for p in [experiment / "probe.dart", experiment / "native/bridge.cpp",
                                 experiment / "native/provider.c", experiment / "native/provider.h"]}}
        (output / "receipt.json").write_text(json.dumps(receipt, indent=2) + "\n")
        print(f"Receipt: {output / 'receipt.json'}", flush=True)
    finally:
        shutil.rmtree(scratch)


if __name__ == "__main__":
    main()
