# flax_permissions

Optional `permission_handler` bridge for the host App's OS permissions, plus reusable
trusted module consent UI. Core's permission contracts stay usable from plain Dart,
without native permission plugins, through `package:flax/permissions.dart`.

The bridge only queries by default. Enable on-demand native requests explicitly:

```dart
final manager = FlaxPermissionManager(
  storage: hostSecureStorage,
  native: const FlaxPermissionHandlerAdapter(requestOnDemand: true),
);
final policy = FlaxPermissionPolicy(
  application: approvedApplication,
  allow: approvedApplication.manifest.permissions.keys.toSet(),
  onRequest: (request) => showFlaxPermissionDialog(
    context: trustedHostContext,
    request: request,
  ),
);
```

Import `package:flax/permissions.dart` and this package from trusted Dart code.
Configure the host's Android manifest and iOS usage descriptions/build macros as
required by permission_handler 13.0.2 **before enabling requests**. Android requires
host `compileSdk = 37`, independent of target/minimum SDK and module consent. A safe
request attempt cannot validate every native project configuration; some missing
platform configuration can terminate the host rather than return a Dart status. Dynamic
modules cannot install native plugins or provide the host's OS usage-description text.

With the opt-in enabled, an explicit `permissions.request` validates the declaration,
installation, host allow list and installed provider, then queries the host
prerequisite. If the bridge advertises a supported request attempt, Core invokes it and
freshly queries the actual target after it settles. Only then does it obtain or reuse
this module's own consent. An OS grant never approves a module; native denial/failure
never creates module request history. `query` and binding guards never prompt. Keep the
default constructor when the host acquires native permissions through its own flow
first.

## Custom host services and UI

Hosts can implement `FlaxNativePermissionRequester` using only Core, with no dependency
on this optional package or permission_handler. The
[existing-service adapter](example/existing_host.dart) forwards to injected query and
request functions. Run its Core-only integration example from the repository root:

```sh
mkdir -p "$PWD/.local/tmp"
export TMPDIR="$PWD/.local/tmp" TMP="$PWD/.local/tmp" TEMP="$PWD/.local/tmp"
dart test packages/flax_permissions/test/custom_host_test.dart
```

Use it with the host's actual service and one reusable module callback:

```dart
final native = FlaxExistingHostPermissionAdapter(
  queryStatus: permissionService.query,
  requestPermission: permissionService.request,
);
final manager = FlaxPermissionManager(storage: hostSecureStorage, native: native);
final policy = FlaxPermissionPolicy(
  application: approvedApplication,
  allow: approvedIds,
  onRequest: showTrustedModuleConsent,
);
```

The injected query must remain prompt-free. Its `FlaxNativePermissionStatus.canRequest`
defaults to false; set it only when the service supports a safe attempt for that
normalized target. It promises neither a popup nor a grant. The request receives
`permission`, immutable normalized `scope`, `isCancelled` and `whenCancelled`. Dismiss
host rationale on cancellation, retain any already-started native Future until it
actually settles, and wait for foreground before returning while a caller remains. Core
ignores request return values as authority and queries again.

`showFlaxPermissionDialog` shows application name, permission title, translated purpose,
requested scope and previous scope. Supply its optional `builder` to replace the
content, or replace `onRequest` entirely. Default content requires a Flutter SDK
Material host. Other UI libraries supply matching dialog widgets through `builder` and
their localized `barrierLabel`; the sandbox example does this for `material_ui`. The
helper captures caller themes across the root Navigator and keeps keyboard focus inside
the dialog. A builder can capture `request` and complete its route with
`FlaxPermissionDecision.allow`, `deny` or `cancel`. Barrier/back dismissal is cancel.
Cancellation removes only this helper's captured route; cancelled or unmounted requests
do not open new UI. Keep approval controls outside module reach: this helper does not
isolate widgets, navigation or processes.

## Lifetime and platform limits

Core shares equal native targets across module owners within one manager. Different
targets are `busy` while native work is active. Module/account/installation consent
stays separate. Closing one caller preserves peers; retiring every caller cancels host
rationale and releases caller waits, while the physical native slot remains occupied
until its Future settles. A cancelled flight cannot be rejoined.

The bridge serializes request operations across its instances/managers in this Dart
isolate. It waits for foreground before queued work starts, rechecks cancellation and
status after that wait, and checks lifecycle again after the asynchronous status query.
It skips redundant OS requests and waits for resumed/null lifecycle after native
completion. Cancellation ends that foreground wait and removes its observer. Core still
invalidates native observations and cancels module consent on background transitions.
Hosts coordinate other native request sources and additional isolates/processes
themselves.

Mappings preserve supported camera, microphone, speech, foreground location,
sensors/activity, photos/media, contacts, calendar/reminders, Bluetooth and
notifications on iOS/Android. Unsupported platforms/capabilities return unavailable.
Restricted, permanently denied, unknown, service-disabled and ambiguous
limited/provisional statuses are not automatically requested. Android `denied` cannot
distinguish first use from permanent denial: an eligible attempt can return immediately
without OS UI. The bridge never opens settings or escalates foreground location
implicitly.

Background location remains **query-only** in this bridge. Its prerequisite and
potential settings flow need a capability-specific host requester. Local-network
status/request mapping is Android-only; the locked iOS plugin has no native query
strategy. Calendar reads use the library's full-access group. More precise rights need a
custom adapter. Limited/provisional status supplies no invented resource scope, so Core
reports unknown until a provider can prove the range. Android speech uses the native
microphone prerequisite through the library's speech group. Android photo insertion and
media access before Android 13 depend on the host API and OS; this bridge does not infer
legacy storage rights or universal insertion safety. Location service status is queried
separately. Bluetooth service status is deliberately not queried because it may
initialize a service with additional platform effects.

This package implements neither the catalog's device APIs nor application authorization
storage. The example's on-demand opt-in does not add a camera/device binding. See the
[permission contract](../../docs/architecture/permissions.md) for scoped observations,
resource ownership and persistence. Deterministic mock-channel/lifecycle tests exercise
the bridge but do not certify real mobile OS dialogs or every native configuration.
