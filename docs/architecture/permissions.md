# Module permissions

Core implements manifest declarations, trusted installation approval, module consent,
synchronous binding guards and revocable resources. These checks are independent of the
[data sandbox](sandbox.md). Unmarked ordinary bindings retain their behavior. Untrusted
modules require both boundaries. Native widget navigation and host widget tree isolation
remain deferred; this is not an operating-system process sandbox.

The [capability catalog](../proposals/permissions.md) contains 47 definitions. A
definition does not install a camera, health, contacts or other device API. Current
service integration covers Fetch, WebSocket, remote ESM, Wasm, Clipboard and selected
documents. Other providers register their actual APIs and scope semantics explicitly.

## Declaration and installation

Business packages declare localized purpose and optional scope in `flax.json`:

```json
{
  "id": "example.notes",
  "version": "1.0.0",
  "entry": "main.js",
  "defaultLocale": "en",
  "permissions": {
    "flax.network": {
      "purpose": { "en": "Load notes", "zh": "加载笔记" },
      "origins": ["https://api.example.com"]
    },
    "flax.documents.open": {
      "purpose": { "en": "Read a selected document" },
      "mode": "read"
    }
  }
}
```

`prepareApplication`/`prepareModuleApplication` copy `package.json.flax.defaultLocale`
and `flax.permissions` into this manifest. Build and runtime validate declarations.
Custom scope is plain JSON and is validated by its registered provider. Missing network
origins means unrestricted declared destinations; an empty list means none. HTTP, HTTPS,
WS and WSS origins stay distinct. Remote module origins are independent of business
network origins. Neither permission grants arbitrary native sockets or operating-system
local-network authorization. Images retain the existing network image behavior, so this
is not a global networking or LAN firewall.

The host shows the declaration, translated purpose and target range before approving:

```dart
final manager = FlaxPermissionManager(
  storage: hostSecureStorage,
  native: hostNativePermissionAdapter,
);
final approved = await manager.approveInstallation(
  manifest: loaded.manifest!.permissions!,
  sourceIdentity: trustedPublisherIdentity,
);
final policy = FlaxPermissionPolicy(
  application: approved,
  allow: {'flax.network', 'flax.documents.open'},
  onRequest: showTrustedModuleConsent,
  locale: 'zh-Hans-CN',
  account: signedInAccountId,
);
final session = FlaxSession.application(
  application: loaded,
  permissions: policy,
  createRuntime: FlaxEngine.createRuntime,
  bindings: bindings,
);
```

The source identity comes from the host, not a publisher string inside the package. Core
does not add signature verification. The secure installation index issues a fresh owner
for each installation; sessions and pages never serve as persistent identities.
`openApplication` reuses only approved source identities. Downloading or unpacking a
package does not approve it. Source replacement requires uninstalling first.

All owning `FlaxView` factories accept `permissions`; borrowed views inherit their
Session. Trusted source-string hosts may explicitly supply `permissionManifest` and an
approved policy. A normal single JS file has no approved declaration and cannot obtain
controlled permissions. No legacy implicit permission grant is retained.

## Query, request and checks

```javascript
const state = await permissions.query('example.orders.read');
if (state.state === 'prompt' || state.state === 'denied') {
  const decision = await permissions.request('example.orders.read');
}
```

Both APIs accept `{scope}`. Results contain `permission`, `state`, `requested`,
`serviceStatus`, optional `scope` and `reason`. States are `prompt`, `granted`,
`limited`, `denied`, `unavailable` and `unknown`. `requested` records module requests,
not the host's OS permission history. Query never prompts or writes consent history.

Install permissions, including network and Clipboard, need no extra module dialog.
Request cannot restore a missing installation approval. Runtime permissions first
require a safely queried native prerequisite and then the host consent callback. Module
requests never call OS request APIs or open settings. An ambiguous native limited scope
cannot become a full grant. Service status is separate from permission.

Session startup refreshes native snapshots before business ESM runs. A single private
Flutter lifecycle observer per manager invalidates once on foreground changes, cancels
background consent, and refreshes each live Session context. Context refresh starts all
of its declared targets even if one query fails; errors belong to that still-open
Session, and obsolete lifecycle errors are discarded. Closing the final Session removes
the observer. A host that changes OS permissions directly can call
`manager.invalidateNative()` and `await manager.refresh()`.

Native observations retain their normalized query targets. Identical current queries
share one flight. Synchronous admission selects the newest covering query target by
query-start order, including unknown or denied observations; a returned scope alone
cannot establish coverage. Restrictive results and query/normalization failures fence
older intersecting cached or pending targets and affected resources/consent, while
preserving disjoint or newer valid authority. Target-specific full grants do not
invalidate one another, and unrelated observations are never combined into a synthetic
grant. Binding checks remain synchronous and fail closed while their native prerequisite
is unknown. Providers with no native prerequisite bypass native cache and flight
bookkeeping entirely.

Requests with identical owner, account, permission, declaration and target share one
consent flow. A different concurrent request returns `busy`. Closing one waiter does not
cancel another live waiter. The host receives `request.whenCancelled` to dismiss its own
prompt. The host must provide real foreground consent and control prompt abuse; Core
does not prove user gestures from JS. Flutter consent UI is an example integration, not
a guarantee of isolation from unrestricted host widget traversal. Production hosts must
keep their approval controls outside module reach.

## Binding definitions and scope

Definitions are reusable constants in `flax_annotations`:

```dart
const ordersRead = FlaxPermissionDefinition(
  id: 'example.orders.read',
  title: 'Read orders',
  authorization: FlaxPermissionAuthorization.runtime,
);

@FlaxPermissionGuard(ordersRead)
Future<Order> loadOrder(String id) => restrictedOrders.load(id);

@FlaxPermissionGuard(ordersRead)
Stream<Order> watchOrders() => restrictedOrders.watch();
```

Annotations apply to individual constructors, methods, getters, setters, operators,
top-level functions/variables and extension members. Inherited operations retain their
original guards. Repeated annotations require every permission. Generic, super and
implementation dispatch use the same metadata. Class-wide annotations are rejected.

Provider YAML selects the same declaration without editing its source:

```yaml
permissions:
  version: 1
  classes:
    Clipboard:
      methods:
        getData: package:flax/permissions.dart#FlaxPermissionDefinitions.clipboardRead
```

The generated module stores `permissionGuards` keyed by owner, operation kind and member
name. It advertises `permission-guards` in the binding manifest. The existing dispatch
checks these definitions before invoking a sandbox guard or the API. Sandbox checks,
replacements and direct `deny` keep their existing synchronous contract.

Clipboard guards cover the selected `Clipboard` APIs, programmatic paste/copy/cut on
`EditableTextState` and `TextSelectionDelegate`, `SelectableRegionState.copySelection`,
and Clipboard status queries through `ClipboardStatusNotifier`. The selected Core,
Material and Cupertino text selection controls retain the same guards on their Clipboard
handlers. Programmatic paste supports the ordinary native `EditableTextState` and the
audited inherited paste handlers in Empty, Material and Cupertino controls. The backend
checks the retained call lease after reading Clipboard data and before
`userUpdateTextEditingValue`, preserving the current selection, input formatters,
`onChanged` and toolbar behavior. Custom native paste delegates/controls are explicitly
unsupported; their provider must own a backend that checks authority before applying
asynchronous effects.

Constructing a bound `ClipboardStatusNotifier` requires Clipboard read approval and
creates a protected resource with its own lease. Host notifiers returned to JS receive a
per-Session restricted view, including Object and typed ValueListenable projections.
Live aliases share that view; another Session cannot adopt it. Revocation or close
permanently retires the view, detaches its observation and filters pending results
before notifications or cached status change. Native consumers retain only its last
accepted cached status; bound getters and new subscriptions deny after retirement.
Disposing a borrowed view leaves the raw host source and other Sessions' views intact.

Error payloads follow the same resource boundary. Raw notifiers become this Session's
borrowed view before error retention or diagnostics; rejected resources become safe
permission failures. Saved error handles, ordinary Object/typed parameters and callback
or Promise rejection restoration recheck the view's owner and live lease. Ordinary
Error, Exception and Object payloads keep their original identity and StackTrace,
including safe permission errors passed back as ordinary data.

Only `ClipboardStatusNotifier`'s custom `@implementation` construction is unsupported;
ordinary Widget/State implementations and `super` keep their existing contracts. Native
user input and ordinary host Dart paste retain Flutter's behavior. Revocation prevents
late protected publication and editor mutation; already accepted text and already
dispatched native Clipboard writes remain effective.

Hosts register custom `FlaxPermissionProvider`s before approving manifests. Boolean
permissions require no scope handler. A scoped provider supplies deterministic
`normalize`, `covers`, `intersect` and `combine` through `FlaxPermissionScopeRules`. Its
optional synchronous `operationScope(operation, receiver, arguments)` derives the actual
target. `requiresNative` enables the host prerequisite query. Increment provider or
definition versions when semantics change; unsupported scope must fail validation.
Definitions from binding modules and host plugins are also registered with the Session.
Declaring a permission with no installed service returns `providerMissing`.

## Futures, Streams and returned objects

Guards never await or prompt. A denied synchronous API throws synchronously; a denied
Future API returns a rejected Promise. Guarded binding Futures retain a resource lease,
check after backend completion and again before JS delivery. They do not publish late
results after revocation. Native Future conversion still uses the existing typed bridge.

Entry guards cannot make an arbitrary returned object safe. A backend must retain a
lease and check every resource operation, every Stream subscription and delivered event.
Use `FlaxPermissionContext.current` only during the binding call and keep the lease,
rather than the entire Session, in the returned resource:

```dart
@FlaxPermissionGuard(ordersRead)
OrderFeed openOrders() => OrderFeed(
  FlaxPermissionContext.current.lease(ordersRead.id, operation: 'orders.open'),
);

class OrderFeed {
  OrderFeed(this.authority);
  final FlaxPermissionLease authority;
  Future<Order> load() => authority.guardFuture(backend.load);
  Stream<Order> watch() => authority.guardStream(backend.watch);
  void close() => authority.close();
}
```

Here `backend` is the host's actual restricted implementation. It must cancel native
work using `onRevoke` and close the lease when finished. A subscription owns its
cleanup; a shared lease is not implicitly closed when one subscription stops. Bytes
already delivered and writes already completed cannot be recalled. Checks use weak
context references; cached resources do not keep a closed Session alive. Leases reject
use from a different Session's binding context.

Guard the final host-authored Dart pipeline, for example
`lease.guardStream(() => backend.watch().map(convert))`. JS Stream operators and their
derived Futures retain borrowed delivery checks, including errors queued before the JS
checkpoint; they never close the resource owner's lease. An arbitrary Dart operator
added by host code after `guardStream` creates a new SDK object and must be guarded
again before export. Revoked iterators cannot expose `current`, while cancellation still
runs cleanup and suppresses protected cancellation errors at JS delivery.

Fetch checks URL origins and the actual Dart `Host` header before opening transports,
including each redirect and cached remote module response. Requests and response-body
delivery retain their authority. WebSocket revocation aborts the connection; its error
event carries `event.error.code` and close follows the WebSocket event model. Remote ESM
and Wasm revoke by closing affected sessions because already evaluated code cannot be
safely unloaded. Custom downloaders must check `request.authorize` before each redirect;
final-response checks alone cannot undo an unauthorized network access.

[Dedicated Workers](dedicated-workers.md) inherit this Session authority through the
root isolate. Module loading and business Fetch retain their separate origin grants;
observed leases remain active until Worker exit. Revocation interrupts affected Workers
and descendants, including after a body has completed. Wasm uses a validated startup
lease and the same constructor/alias guards; a later grant requires a new Worker.

Sandboxed raw HttpClient/Socket/SecureSocket and DNS entry points are denied; their
ordinary trusted-host bindings remain available outside sandbox mode. SecurityContext
path readers continue using the rooted file replacements.

## Selected external File

Install the Dart `FlaxDocumentPlugin` from `package:flax/documents.dart`. The host owns
the picker and returns a `FlaxDocumentBackend`, retaining native URI/security scope. The
plugin requires a sandbox; it returns `File?`, with cancellation represented as null.
TypeScript applications use `import type {} from '@flax/core/documents'` for its
optional globals; the host installs the runtime plugin.

`FlaxSelectedFile` permits asynchronous read/length/exists/metadata, read-only or
readWrite writes, and bounded streaming copy into the current data root. It rejects
directory access, create/delete/rename, timestamps, raw handles/sinks, watch and all
synchronous fallback methods. Native providers may explicitly reject unsupported
metadata. Copy may leave a partial destination on cancellation, as ordinary File copy
can; it does not delete an existing destination to simulate rollback.

The opaque `flax-document:` path identifies this particular grant; `File(path)` cannot
recreate it. `FlaxLocalDocumentBackend.open` pins a regular local file and rejects known
application areas, default private support roots and additional protected paths. Exact
protected files are also checked by file identity. Hosts must protect aliases and any
other native sharing/URI providers; never return their permission ledger or secrets. The
desktop local-path helper is not an Android content-URI or iOS bookmark adapter.

Sandbox `Image.file`, FileImage, ResizeImage and resizeIfNeeded select a restricted
provider. Cache keys differ per app, Session and grant. Authorization is checked before
cache lookup, decode and each frame delivery; writes evict that grant's keys and refresh
live consumers. Revocation evicts only its caches and closes resources. Trusted Flutter
code consuming selected Files directly uses `FlaxSelectedFileImage`, not a raw
FileImage. Already displayed pixels cannot be erased retroactively.

## Management and persistence

The [secure storage contract](secure-storage.md) has no production memory/plain-file
fallback. Module decisions live under `flax.permissions`; the separate
`flax.installations` host owner stores installation identity and uninstall state.
Ordinary code updates preserve consent and revocations. Declaration purpose, scope or
semantics changes invalidate only the affected approval. Accounts have separate runtime
decisions; switching an account recreates Session policy.

`revoke` immediately blocks access and invalidates resources before writing the new
record. Narrowing cannot expand previous approval. `approvePermission` restores a
declaration only after host confirmation; runtime consent remains separate.
`retryWrites` persists the current fail-closed state instead of rereading an old grant.
Errors keep the owner unavailable until recovery succeeds. A durable pending marker
surrounds record commits; an interrupted process requires fresh host approval rather
than restoring an unconfirmed grant. Storage inability to persist a revocation must be
reported; the host cannot claim cross-restart revocation until retry or secure deletion
succeeds.

A new module decision is published only after the durable commit sequence and a final
synchronous lifecycle check. Closing before publication removes that context's
participation; if no valid waiter remains, Core corrects the staged record inside the
same owner queue. Closing after publication preserves confirmed consent. Session close
drains already-started writes and corrections. Before `uninstall`, the host unmounts
views, awaits session close, and stops other feature consumers using the installation.
`uninstall` retires the owner, cancels consent/resources, marks the host index, drains
writes, deletes secure owner records and finally calls the required host `removeFiles`
callback. Interrupted removal remains marked for retry; the callback must be safe to
repeat. Reinstallation issues a new owner. Multi-isolate/process managers require
additional host coordination.

A remaining pending marker triggers conservative recovery; it is not a transaction with
Session lifecycle. Completed correction is durable. Abrupt termination between physical
marker deletion and cancellation correction, or storage refusing that correction, can
require host recovery before persistent revocation can be promised.

JS catches ordinary `Error`s with `name: FlaxPermissionError`,
`code: FLAX_PERMISSION_DENIED`, `permission`, `operation` and `reason`. Storage failures
remain failures, not absent records or user denials. The runnable
[permission playground](../../packages/flax_sandbox_example/README.md) covers approval,
configuration/reload, shared business consent, Future/Stream revocation and selected
File.

## Verification

Use the maintained engine and repository-local temporary directory from
[contributing](../../CONTRIBUTING.md#checks). Focused checks are available through
`tool/ui_test.dart --package=flax --file=test/ui/permissions_test.dart`, the two
optional packages' `test/ui/` suites, and `flax_codegen/test/permissions_test.dart`. The
permission suite covers declaration rejection, ESM error details, shared consent, late
Future and Stream results, selected File delivery, Host/redirect checks and body
revocation. The File delivery regression fails if its final authorization check is
removed.

`flax_sandbox_example/example/integration_test/app_test.dart` exercises native storage,
owner cleanup, module dialogs, shared API access, revocation, reload and uninstall.
Native acceptance is verified on iOS arm64 simulator and Android arm64 emulator; the
mobile run also executes the existing rooted filesystem regression suite. macOS passes
the three native scenarios with Data Protection Keychain in a signed/provisioned host
with Keychain Sharing. The engine audit verifies real signing, hardened runtime and
library validation. macOS file/UI checks use Flutter's CI host mode because the current
descriptor-portal backend does not support macOS App Sandbox; the Flax data sandbox
remains enabled. Native Keychain and module-consent checks also pass with the host App
Sandbox enabled. Android acceptance uses a 16 KiB-page emulator. These checks do not
claim physical-device, power-loss, multi-process or host widget-tree certification.
