# Sandbox playground

Development-only example shared by a standalone Flutter entrance and the embedded
gallery. It runs two real JS applications with fresh V8 runtimes. The trusted Dart panel
creates `FlaxSandbox` configurations and owns session and localStorage cleanup. The
applications use the existing core bindings and localStorage plugin. The build creates a
real `.flax` archive with a native ESM entry, manifest and file inventory. The host
installs it through `FlaxPackage.install`, loads the directory with the selected runtime
isolation, and passes immutable example arguments to the registered `sandbox` page,
using the surrounding Flutter focus/overlay environment.

## Run

From the repository root, using the maintained Flutter SDK and prepared local engine:

```sh
mkdir -p "$PWD/.local/tmp"
export TMPDIR="$PWD/.local/tmp" TMP="$PWD/.local/tmp" TEMP="$PWD/.local/tmp"
dart run tool/example_run.dart --package=flax_sandbox_example
```

For the combined gallery, run `dart run melos run example:run` and open **Sandbox**.
Both entrances use the shared appearance/FPS shell exactly once. The launcher builds the
application package and its host modules before preparing the Flutter project; no
temporary project or manually copied script is required from the caller.

## Try the boundaries

1. Keep the default different appIds. Edit and save a note in each app, then use **Read
   file**. **Write PNG / Image.file** writes a real PNG through the File binding and
   displays it with the native file image provider.
2. Press **Store +1** in A. Only A changes: both apps use namespace `sandbox-example`
   and key `count`, but each appId has its own persistent storage area.
3. Press **Read host file**, **Write host file**, or **Read other app file**. Sandbox
   mode displays the caught `FLAX_SANDBOX_DENIED` error. The host fixture is outside
   both homes; these buttons never target important application files.
4. Change B's appId to match A, then press **Apply & reload**. Both views now share A's
   files and counter, and storage events update the other view. Restore B's appId or
   change **Apps directory** to compare isolated or fresh areas. Switching back restores
   the saved data. **Bundle A/B** show the installed code directories: matching appIds
   reuse the same `bundle/`, while different appIds have separate bundles. Their
   `.flax-install.json` records contain the same package hash. Reload validates and
   reuses an intact installation.
5. Turn off **Enable sandbox** and reload. Host fixture access now succeeds and the
   views share the ordinary localStorage area. `getHomePath()` reports the ordinary host
   home, while this demo keeps its file writes inside its own fixture directory.

Changing controls edits a draft. Reload unmounts and closes both old sessions, closes
their owned sandbox storage areas, and creates fresh sessions with the new immutable
configuration. A failed reload leaves a visible error and allows configuration repair.
No reload deletes application data. The surrounding gallery owns ordinary host storage;
leaving this page closes only the sandbox storage areas opened by this example.
Lifecycle work is serialized across entrances so reopening cannot race an earlier
storage close. Hosts and tests can await `FlaxSandboxExample.pendingLifecycle` after
unmounting to finish cleanup before tearing down their surrounding storage.

Default application homes are `ApplicationSupport/flax/apps/SHA256(appId)/data`.
Installed code lives directly under the same application's `bundle/`; its installation
record is the sibling `.flax-install.json` at the application root. `downloads` is only
needed for remote loading. The packaged Flutter asset is copied to a temporary input
file while installing, then removed. Installation layout stays the same when the runtime
sandbox switch is off; Session isolation and the selected localStorage area change. The
host fixture lives under `ApplicationSupport/flax/examples/host/`. The apps directory
field changes the parent of application roots, while `getHomePath()` still returns only
the selected app's `data` directory. The sandbox uses real absolute paths; it does not
rewrite relative paths or create a virtual filesystem. Existing data at an older
location is not moved or deleted.

The installer rejects a different package while the old bundle exists. Replacing code
requires closing the application's Sessions and removing its `bundle/` first; keep
`data/` to retain notes and storage. This playground reloads one packaged asset and does
not provide an updater or automatic cache deletion.

## Source and checks

[`lib/flax_sandbox_example.dart`](lib/flax_sandbox_example.dart) contains the trusted
configuration and lifecycle. [`example/js/src/main.ts`](example/js/src/main.ts) contains
the packaged named page and its file, image, storage and boundary calls. The gallery
registers a small example-only Widget binding to enter the trusted panel; that binding
is never registered in the two child applications.

`example/test/application_test.dart` exercises different and matching appIds, real
Image.file decoding, directory changes, persistent data, draft configuration, rejected
host reads/writes, actual package installation/reuse, ordinary mode, a phone-sized
layout and immediate reentry during cleanup. The same workflow runs in
`example/integration_test/app_test.dart` on macOS. Run the owner example checks with
`dart run tool/package.dart integration flax_sandbox_example`; the regular `check:ui`
also includes it. The aggregate tour checks the entrance and its isolation.
