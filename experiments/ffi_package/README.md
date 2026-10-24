# Optional npm FFI package experiment

This isolates the package boundary proposed in the
[FFI design](../../docs/architecture/ffi-proposal.md#optional-installation-and-native-packaging).
It reuses the unchanged [shared JSI fixture](../ffi_full/README.md) and its engine
overlays. It does not add a production capability, public package format or build
command to Flax. Package names below are local, private experiment names.

The same JS package now also exports basic `DynamicLibrary`,
`dlopen(path, definitions)`, `dlopen(null, definitions)`, ArrayBuffer/Uint8Array memory
helpers and a named `Buffer` export plus Buffer memory helpers backed by pure-JS npm
`buffer` for the separate [runtime-signature experiment](../ffi_dlopen/README.md). That
experiment has its own shared libffi engine overlay and internal installer. Native
allocations use ordinary library free/release functions. Addresses are raw `bigint`; the
caller retains JS byte storage explicitly. There is no adoption or pointer-close API;
the fixed-provider host and historical receipts below do not install or test the new
loader. Buffer-only imports from `@flax/ffi` do not select the native loader; the
constructor remains identical to the `buffer` and `node:buffer` compatibility entries.

## Package boundary

`packages/ffi` is the developer-facing `@flax/ffi` JS/TS package. `packages/fixture` is
a native library's npm package: named JS exports, TS declarations and a native
descriptor. The runner copies the canonical shared fixture C sources into its staged npm
archive before packing; there is no second maintained provider implementation. Neither
npm archive contains Dart code or a Pub manifest. Provider exports retain the original
JSI function objects, with no extra JS wrapper on each call.

`internal` is a Flax-owned host/build adapter. The application uses this one fixed Pub
dependency and one fixed entry point throughout all cases; selecting another JS import
does not edit Pub dependencies or Xcode/Gradle projects. Generated internal Dart glue
resolves only one C descriptor registry through `@Native`. All ordinary calls take
`JS -> common V8/Hermes JSI frontend -> C function pointer`. The Dart positive control
checks that dispatch instrumentation is active.

The production developer experience is npm installation and imports in an already
configured Flax application. This fixture implements the missing build step in
`prepare.mjs`; ordinary `@flax/build`, real Session module delivery and production Pub
dependency discovery are not wired to it yet.

## Automatic native packaging

The runner creates real npm tarballs and installs them offline with install scripts
disabled. The bundler inspects **emitted** esbuild inputs rather than scanning all
installed packages. Only retained providers contribute native inputs. Descriptor
validation rejects package path traversal, symlink escapes, invalid identities and
unsupported descriptor shapes before replacing the prior generated inputs.

Preparation writes hashed native inputs and a C descriptor registry into the private
adapter. Its build hook verifies those hashes and uses Flutter code assets to compile
and embed the provider: Apple framework or Android `.so`. The registry directly
references the provider getter, keeping it reachable under release symbol stripping.
Flutter owns framework layout, runtime asset resolution and signing. There are no
package-specific Xcode source entries, linker flags, CMake targets or Gradle changes.

One application and its existing build directory are reused for these transitions:

1. **Used:** installed package and retained import select a native provider.
2. **Unused:** installed packages without imports select no provider.
3. **Tree-shaken:** an unused named import is eliminated and selects no provider.
4. **Absent:** npm packages are removed and the application still runs without FFI.

The initial incremental check found that Flutter could leave an old provider framework
in its native-asset staging directory and application bundle after the last import was
removed. Preparation now removes only the experiment-owned provider asset names from the
host's build outputs when selection becomes empty. It preserves other libraries and
compiler caches. The test checks this reconciliation as well as final packaged binaries;
an empty hook result alone is insufficient evidence of size optionality. Production
tooling should reconcile a recorded native-output ownership inventory.

## Run

Use the existing isolated engines from `ffi_full`. The worktree needs its normal esbuild
development dependency available to Node. All temporary applications, tarballs and
compiler files stay on the workspace volume and are removed after each run.

```sh
export TMPDIR="$PWD/.local/tmp"
export TMP="$TMPDIR" TEMP="$TMPDIR"
mkdir -p "$TMPDIR"
node --test experiments/ffi_package/prepare.test.mjs
python3 experiments/ffi_package/run.py \
  --flutter-root /Volumes/MAC_HOME/Develop/Flutter/flutter \
  --engine-output /Volumes/MAC_HOME/Develop/Flutter/flax/.local/ffi-full-engine-v2 \
  --scratch-root "$TMPDIR" --target macos
```

For Hermes, replace the last target with
`--target ios-simulator --simulator <BOOTED_UDID>`. For Android V8, use
`--target android --android-device <SERIAL>`. `--target macos --release` verifies AOT.
`--target ios-device --release` is an **unsigned build-only** check; it does not install
or execute on a phone. Use `--cases used absent` for the smaller release packaging pair.

Per-target logs and receipts go to `.local/ffi-package/<target>-<mode>/`. Each receipt
records archive contents, native plans, packaged provider bytes, engine identity and
execution results. Six JS assertions cover scalar calls, pointer aliases, callback
reentry, use after close, exact C cleanup and thread affinity. The internal host checks
native retirement, zero remaining resource counts after VM destruction and zero Dart
business dispatches. Native projects are checked against their original hashes.

## Verified results

The [receipt](results.json) records 16 successful builds and 14 successful executions
from identical experiment source snapshots and identical npm archives. The two iOS
device release cases are build-only. Each debug target reuses one build directory for
all four cases; release uses the used/absent pair.

| Configuration              | Used provider binary | Without a retained import | Result                          |
| -------------------------- | -------------------: | ------------------------: | ------------------------------- |
| macOS V8 debug             |         66,768 bytes |                   0 bytes | All four cases executed         |
| macOS V8 release/AOT       |         66,528 bytes |                   0 bytes | Used/absent executed            |
| iOS simulator Hermes debug |         66,768 bytes |                   0 bytes | All four cases executed         |
| Android arm64 V8 debug     |          7,744 bytes |                   0 bytes | All four cases executed         |
| iOS arm64 release/AOT      |         66,816 bytes |                   0 bytes | Used/absent built, not executed |

These are packaged provider **binary** bytes, excluding framework metadata. They are not
whole-application size savings. All executed used-provider cases pass six JS assertions,
zero Dart business dispatches and zero native resource counts after VM destruction. Each
case verifies the embedded engine and unchanged native projects.

## Limits

This uses the shared fixture's single-provider descriptor and installer. It is not a
general C header generator, ABI or arbitrary-library loader. Package source layouts and
output names are deliberately bounded to this fixture. Prebuilt third-party binaries,
multiple providers, multi-application inventories and production Session integration
need separate implementation and acceptance.

An unselected application has no provider code asset and does not install the JS FFI
module. Its experimental Flutter engine still contains the shared fixture's native FFI
frontend and owner machinery. Provider byte counts do not measure or promise zero total
FFI overhead. Nothing here introduces native code through JS hot reload or a downloaded
application bundle.
