# Application data sandbox

`FlaxView` and `FlaxSession` accept an immutable `FlaxSandbox`. Omitting it keeps
ordinary trusted host behavior. The sandbox isolates the provided filesystem and asset
APIs, application localStorage, and direct JavaScript FFI. Business/network permissions
and navigation isolation are deferred. In particular, sandboxing data does **not**
prevent native Flutter widgets from navigating the host application.

The [runnable sandbox playground](../../packages/flax_sandbox_example/README.md)
compares two appIds, File/Image.file access, localStorage and boundary failures. Its
trusted configuration panel recreates the sessions after sandbox settings change. It
installs a real `.flax` package for each app ID, displays the resulting bundle path, and
passes example arguments through the existing named-page contract. Reloading reuses the
validated content directory while retaining application data.

## Configuration and identity

Prepare the configuration after initializing Flutter, before creating a Session:

```dart
final sandbox = await FlaxSandbox.create(appId: 'com.example.reader');
final session = FlaxSession(
  sandbox: sandbox,
  createRuntime: FlaxEngine.createRuntime,
  source: source,
  bindings: FlaxBindingRegistry([]),
);
```

The normal application/module startup and plugin installation contracts still apply.
`FlaxApplication` loaders retain their sandbox configuration; `FlaxSession.application`
inherits it unless the host explicitly supplies another. Borrowed Views use their
Session's configuration.

The default application root is `ApplicationSupport/flax/apps/sha256(appId)`.
`sandbox.applicationPath` exposes that host-managed root; `sandbox.homePath` and JS
`getHomePath()` expose only its `data` child:

```text
<ApplicationSupport>/flax/apps/<sha256(appId)>/
  .flax-install.json         Archive hash and completion record
  bundle/                    Installed code, manifest and resources
  downloads/                 Application and remote-module download cache
  data/                      The only File/Directory sandbox root
    local_storage/           This application's Hive CE files
```

The full UTF-8 app ID determines the stable, single directory component. A custom
`appsDirectory` replaces `ApplicationSupport/flax/apps`, so the final writable home is
`<appsDirectory>/<sha256(appId)>/data`. Known application roots cannot overlap,
including their host-managed siblings. Application/data directories cannot be symlinks.
`appId` identifies persistent application storage; `namespace` remains an optional
plugin sub-area inside that application's store. A Session owns runtime state and active
resources, rather than a separate persistent identity.

Creating a sandbox prepares only the application root and `data`; `bundle` appears when
Flax installs a package, and `downloads` appears when its loaders download artifacts.
Built-in assets, source strings and externally prepared directories are used in place,
so their application root may have no `bundle`. Installed files sit directly in
`bundle`; the archive SHA-256 is stored in the sibling `.flax-install.json` at the
application root. The bundle contains only package files. Direct
`FlaxPackage.install(..., sandbox: sandbox)` uses the same layout. Explicit
`installationDirectory` and `cacheDirectory` still select host-managed locations; the
former appends `bundle` when a sandbox is supplied. Ordinary loaders without a sandbox
retain their shared installation/cache locations.

An unchanged package is verified and reused. Different content is rejected without
overwriting an existing bundle. To replace it, the host closes all affected Sessions,
removes only `bundle`, installs the new package and creates a freshly loaded
application. The existing `data` directory remains intact. Discard the previous
FlaxApplication and AssetBundle when changing their installed directory; they retain
source/resource caches.

File access cannot reach the application root, `bundle` or `downloads`; code and assets
use the selected read-only AssetBundle/module loader. To clear data or uninstall, the
host first closes all affected Sessions, shuts down that application's localStorage and
waits for outstanding loads/IO. It can then delete `homePath` to clear data or
`applicationPath` to remove the whole managed application. Prepare a new sandbox before
starting again after deleting its directories. Externally supplied resources and custom
installation/cache locations remain the host's responsibility. Changing this layout or
`appsDirectory` never migrates or deletes an older location automatically.

JavaScript uses real absolute paths:

```javascript
import { getHomePath } from '@flax/core';
import { File } from '@flax/dart/io';

const home = await getHomePath();
const note = File(`${home}/note.txt`);
await note.writeAsString('hello');
console.log(await note.readAsString());
```

`getHomePath()` returns the sandbox home in isolated mode and the host's canonical
ApplicationSupport directory in ordinary mode. The ordinary lookup merges concurrent
requests and caches successful results per Session. It does not restrict ordinary File
operations.

## Binding guards

Only marked operations receive a guard. Unmarked operations use the existing binding
path. The descriptor retains a Dart function reference; JS cannot replace the Session
configuration or select a different policy. The policy registry uses exact Dart Type
keys, without a separate capability name. Missing or incorrectly registered policies
fail closed with a configuration error.

Providers configure upstream declarations in YAML:

```yaml
sandbox:
  version: 1
  classes:
    File:
      constructors:
        '':
          policyType: package:flax/sandbox_io.dart#FlaxFilePolicy
          handler: package:flax/sandbox_io.dart#createSandboxFile
          replace: true
        fromRawPath: deny
      instanceMethods:
        readAsString:
          policyType: package:flax/sandbox_io.dart#FlaxFilePolicy
          handler: package:flax/sandbox_io.dart#checkSandboxEntity
        open: deny
```

A check handler returns void and runs before the original operation. A replacement
returns the operation's result and the original operation is skipped. `deny` rejects
without a handler. These rules apply only to sandbox Sessions.

The generator resolves the original Dart declaration and emits guards for constructors,
instance/static methods, getters/setters, operators, top-level functions/accessors, and
extensions. Static facades use their existing function IDs. Generic selection, proxy
super methods, and super accessors retain the guard. A replacement resource constructor
rejects its JS proxy/implementation form. Guarded top-level constants are read through
the bridge, and guarded enum getters are not cached in JS. Inline enum values are not a
resource access boundary.

Policies are concrete, non-generic public types. Handlers are public top-level or static
functions with synchronous bodies: no `async`, `async*` or `sync*`. An asynchronous
target may directly return a restricted backend's Future or Stream. The handler itself
does not await. The fixed prefix is:

| Target                                                  | Prefix                                                           |
| ------------------------------------------------------- | ---------------------------------------------------------------- |
| Constructor, static member, top-level function/accessor | context, policy                                                  |
| Instance method/getter/setter                           | context, policy, receiver                                        |
| Extension                                               | context, policy, then the extension's existing receiver argument |

Subsequent arguments match selected target argument names. A check can omit arguments it
does not inspect. A replacement accepts all selected arguments, preserving omission and
optional/named defaults. Setter values use `value`. Handlers are non-generic; generic
binding conversion remains in the existing typed call machinery.

## Application extensions

An application can register its own policy and annotate its exported operations:

```dart
class NotesPolicy {
  const NotesPolicy();
}

class NoteStore {
  @FlaxSandboxGuard(
    policyType: NotesPolicy,
    handler: createNotes,
    replace: true,
  )
  NoteStore(String path) : file = File(path);
  NoteStore._(this.file);
  final File file;

  @FlaxSandboxGuard(policyType: NotesPolicy, handler: checkNotes)
  Future<String> read() => file.readAsString();
}

NoteStore createNotes(FlaxSandboxContext c, NotesPolicy p, String path) =>
    NoteStore._(c.requirePolicy<FlaxFilePolicy>().file(path));

void checkNotes(FlaxSandboxContext c, NotesPolicy p, NoteStore receiver) {
  c.requirePolicy<FlaxFilePolicy>().requireFile(c.scope, receiver.file);
}

final sandbox = await FlaxSandbox.create(
  appId: 'com.example.notes',
  policies: {NotesPolicy: const NotesPolicy()},
);
```

Import the annotations from flax_annotations and the runtime contracts from flax.
Annotations do not export an API by themselves: use ordinary binding selection or
FlaxExport. Conflicting annotation/YAML rules and unselected YAML targets are errors. If
automatic selection already skipped an unsupported API, its recorded skip reason applies
and no callable or guard is emitted. Regenerate the provider and dependent binding
outputs together.

The returned NoteStore retains a restricted File. Its Future operations therefore
continue to check the real IO boundary. A host NoteStore holding a raw File fails the
receiver check. For a custom resource that is not backed by a restricted File, retain
`c.scope` and check it when accessing the resource, producing stream events, and
completing asynchronous results. `scope` is a small lifetime token; retaining it does
not keep the Session/runtime alive. Replacement handlers must retain the target's
cleanup contract, including paired listener removal and disposal. Prefer replacing
resource construction with a restricted implementation, then checking its ordinary
members. There is no generic resource registry and no ambient current application.

## Files and resources

File and Directory constructors validate absolute paths and return real Dart interface
implementations bound to the current Session's root descriptor. Actual IO traverses from
that descriptor with openat and no-follow flags, rather than validating a string and
later reopening the original path. Both endpoints of copy/rename are checked. Root
deletion/rename is rejected. Symlinks are unsupported, including directory enumeration
and trees moved by directory rename. Raw byte paths, Link, RandomAccessFile, raw
open/openSync/openWrite and watchers are unavailable through the sandbox backend.
FileStat and FileSystemEntity path queries use the same rooted implementation. TLS
certificate/key path APIs read restricted bytes before invoking their byte counterparts.

Future<File>, parent/absolute/URI conversions and Directory.list results preserve the
restricted implementation. Lazy reads recheck lifetime on subscription. Session close
retires the token, stops file readers and directory enumeration (including paused
streams), waits for active IO, and releases its own descriptors. Directory.list reads
entries incrementally, yielding to the event loop every 32 entries; async rename uses
that traversal to validate directory contents before moving. Synchronous variants remain
synchronous. Closing does not delete persistent application data or retire another
Session using the same application home.

The selected Session AssetBundle is the read-only resource boundary. rootBundle and
DefaultAssetBundle.of resolve to that selection; direct bundle operations reject other
instances. AssetImage, ExactAssetImage and Image.asset pin the selected bundle.
FileImage/Image.file accept the current restricted File and keep Flutter's native
provider/cache. Image provider operations check resource-bearing receivers and keys;
opaque ResizeImage keys must be obtained in the current Session. Native resource
constructor replacements do not create user-overridable IO proxies.

Source, file and network-JavaScript entries default to ESM, with top-level await. Each
module shares its Session's policies. Directory bundles and local ESM resource reads
also use rooted byte reads. File/directory application loaders reject overlapping data
and code/resource roots; the host must keep custom AssetBundles read-only.
ImmutableBuffer.fromFilePath is denied; fromAsset uses the selected bundle. Native
platform messaging, global messenger access and selected shared native entry points are
denied where they would bypass scoped resource APIs. This includes the global
channelBuffers getter, ChannelBuffers construction/message operations and legacy
onPlatformMessage getters/setters on PlatformDispatcher and SingletonFlutterWindow.
Those paths can invoke or replace existing host channel listeners without constructing a
MethodChannel. An application's own Dart bindings/plugins remain trusted: their new host
IO APIs must declare appropriate checks or replacements.

## Storage and FFI

Initialize localStorage separately for each application before installing its plugin:

```dart
await FlaxLocalStoragePlugin.initialize(sandbox: sandbox);
// Install const FlaxLocalStoragePlugin() in that application's Session.
await FlaxLocalStoragePlugin.flush(sandbox: sandbox);
// After closing all attached Sessions:
await FlaxLocalStoragePlugin.shutdown(sandbox: sandbox);
```

The box lives under home/local_storage, and its name includes a digest of its canonical
application directory. Different apps can use identical namespaces without sharing
records or storage events. Same-app Sessions can share the initialized store.
Initialization rejects linked storage directories/files, and sandbox stores use an
independent Hive adapter registry. App-controlled records cannot invoke the host's
custom deserializers. Built-in HiveList records are rejected before reading their length
or elements, because they resolve objects through global Hive. No call changes Hive's
global directory or closes its boxes.

A sandbox requires a fresh runtime. Before source preparation or application execution,
Flax disables the maintained runtime's direct FFI installer and rejects preinstalled FFI
globals. ffiInstall and ffiAsset are denied at the host boundary. This restriction
applies to JS FFI, not trusted Dart implementation code or the Canvas plugin.

## Errors and limits

Dart rejects deliberate isolation violations with FlaxSandboxException. JS receives an
Error named FlaxSandboxError with code FLAX_SANDBOX_DENIED and an operation field.
Synchronous APIs throw; Future APIs reject their Promise. Ordinary filesystem errors and
missing policy configuration remain distinguishable. Widget guards execute during native
materialization; those failures use the existing View/Session error reporting path.

```javascript
try {
  await File(`${await getHomePath()}/note.txt`).open();
} catch (error) {
  if (error?.code === 'FLAX_SANDBOX_DENIED') {
    console.log(error.operation);
  } else {
    throw error;
  }
}
```

This is a host API boundary inside one process, not an OS process sandbox. Rooted
backends use POSIX and require a working file-descriptor portal; unavailable descriptor
IO fails closed without a fallback to path checks. macOS is the validated target; mobile
devices need separate acceptance runs. Permission prompts, network/module origin
restrictions, Wasm permission switches, quotas, and complete native Flutter
navigation/ancestor isolation are outside the current implementation. See the Chinese
[design proposal](../proposals/sandbox.md) for deferred work.

## Verification

Use the maintained Flutter SDK and repository-local temporary directory described in
[contributing](../../CONTRIBUTING.md#checks). The workspace gate includes rooted IO
regressions, typed guard generation and manifest round-trips, and localStorage
persistence/adapter isolation, including malicious built-in HiveLists. The maintained V8
gates exercise real JS calls, PNG decoding through Image.file after the original home
path is replaced by a symlink, selected AssetBundles, ESM boundaries and cancellation,
per-application storage, and Canvas with direct JS FFI disabled:

```sh
dart run melos run check
dart run melos run check:runtime
dart run melos run check:runtime:v8
dart run melos run check:ui:v8
```

The UI gate includes package examples and the aggregate application. This is automated
macOS arm64 acceptance; it does not establish mobile filesystem support, manual visual
acceptance, or complete isolation of native Flutter widgets.
