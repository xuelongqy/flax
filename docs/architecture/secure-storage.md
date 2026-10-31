# Host secure storage

`package:flax/secure_storage.dart` is a host-only, dependency-free byte storage
contract. Core has no Keychain, Keystore or permission_handler dependency. The optional
`flax_secure_storage` package implements the same interface; hosts may use their own
backend without installing it. No storage object, registration method or key is bound to
JS. Application data, localStorage, downloads and bundles keep their own stores.

## Contract and addresses

`FlaxSecureStorage` exposes `read`, `write`, `delete` and `deleteOwner`. Every record
has `module`, `owner` and `key`. The storage instance fixes its private namespace. Reads
return a copied byte buffer; null means only absent. Successful writes/deletes must be
durable and atomic for one record. Consumers define their own encoding and versions.
DeleteOwner affects only that owner's records in this namespace, never host-wide data.

Use `Flax.registerSecureStorage(backend)` before creating consumers, or pass a backend
explicitly to `FlaxPermissionManager`. Registration cannot replace a backend while Flax
consumers are active. There is no implicit in-memory or plain-file production fallback.

Core reserves `flax.*` module names. Permission decisions use the trusted installation
owner, not a JS-supplied appId, page, Session or namespace. The installation registry
uses a separate host owner so interrupted uninstall can be resumed. Hosts coordinate
other feature consumers before `deleteOwner`; the storage interface is not a transaction
manager or a substitute for feature-specific identity checks.

`FlaxSecureStorageException.reason` distinguishes unavailable, locked, integrityFailure,
ioFailure and unsupported. A locked/corrupt record must never become null or an empty
grant ledger. Error messages contain no values. Consumers fail closed and surface
durability errors; they never silently reset keys or migrate stale grants into approval.

## Optional native adapter

```dart
import 'package:flax/flax.dart';
import 'package:flax_secure_storage/flax_secure_storage.dart';

final storage = await FlaxPlatformSecureStorage.open(namespace: 'my-host.flax');
Flax.registerSecureStorage(storage);
final manager = FlaxPermissionManager();
```

Each instance serializes operations. Addresses are hashed and the encrypted/protected
envelope binds namespace, module, owner and key. Owner deletion selects its hashed
address prefix even when an owned payload is corrupt. Records are limited to 1 MiB. The
package never calls deleteAll, prompts for authentication or switches to plaintext.

Apple platforms scope the private Keychain service by host bundle ID and namespace, with
`AfterFirstUnlockThisDeviceOnly`, no synchronization and an authentication context that
forbids UI. macOS explicitly uses the Data Protection Keychain; the legacy file-based
Keychain can activate ACL dialogs despite this context. This follows
[Apple's Data Protection Keychain guidance](https://developer.apple.com/documentation/security/ksecusedataprotectionkeychain).
The host must enable Keychain Sharing and provide a valid signed/provisioned application
identity. Ad hoc signatures cannot supply these restricted entitlements. There is no
legacy-Keychain fallback or migration. Distribution/signing and host entitlements remain
the host's responsibility. Missing entitlements, keychain lock and corruption are
errors. Native Keychain policy, rather than a Dart cipher, protects values.

Apple initialization obtains its actual access group from a successful non-secret Add
with a random UUID account in a separate probe service. It validates the OS-returned
AppIdentifierPrefix and complete host bundle ID, then explicitly fixes that group on
every read, update, add, enumeration and deletion. It does not infer the prefix from a
Team ID or search unspecified groups. Probe cleanup uses only the exact returned group
and dedicated service, including interrupted UUID probes. Namespace readiness is then
checked by adding and deleting a reserved non-secret record in that fixed group. An
empty query alone cannot establish write availability. Each later operation must still
handle loss of access. Failed initialization is retryable and does not install a usable
backend.

Access belongs to the host's signed main executable. Its private group must be the OS
default during initialization; a shared default is rejected. The host must not share
that private group with another application: checking its name cannot prove this host
policy. Bundle ID and namespace scope the service but do not grant access. Keep signing
group, bundle ID and namespace stable across updates; changing them needs explicit host
recovery. See the optional package's
[Apple host setup](../../packages/flax_secure_storage/README.md#apple-host-setup) for
entitlements and error handling. No App Groups, iCloud or per-module provisioning
profiles are required. Keychain Sharing configures storage access for the host and is
separate from the module permission declarations and runtime consent.

Android uses a non-exportable 256-bit AES-GCM key in Android Keystore. Values live in a
private no-backup directory; address is authenticated as AAD. Files use private modes,
temporary write, file fsync, atomic rename and directory fsync before success. Existing
records with a missing/invalid key fail instead of regenerating a key and resetting
permissions. This does not claim every Android device provides hardware-backed keys. The
adapter requires Android API 23 or newer and has no user-authentication prompt.

New native dependencies belong only in this optional package. Core's interface can also
back an authenticated host database, native broker or existing secret service. Such a
backend must provide the same durability/error contract and prevent sandbox File,
AssetBundle, file chooser, sharing and host bindings from exposing its contents.

## Limits and recovery

This is protection against Flax module access, not a defense against a compromised host,
rooted device or hostile native code. JS FFI/platform channels remain sandbox-denied.
Anti-rollback across host backups, cloud identity restoration and multi-process writes
need explicit host coordination; a single-record API does not imply those guarantees.

Core permission commits use a separate pending marker and keep new decisions private
until marker cleanup and final synchronous lifecycle validation succeed. A remaining
marker after interruption makes Core invalidate approvals and persist the conservative
result before clearing it. Cancellation before publication is corrected inside the same
owner queue; a completed close drains that correction. The marker is not an atomic
transaction with Session lifecycle: abrupt termination after its physical deletion or an
unsuccessful correction can require explicit host recovery. If the backend cannot write
a revocation, the current process disables the owner but the host must retry or reliably
remove records before promising persistence across restart. Installation indexes keep
interrupted uninstall recoverable. Keychain records are not removed merely by deleting
the ordinary app data directory.

## Verification

The channel-level suite checks binary snapshots, address integrity, owner cleanup and
retry after unavailable initialization. Native application checks exercise actual
Keychain/Keystore IO, module/owner separation and permission consent/revocation on macOS
arm64, iOS arm64 simulator and Android arm64 emulator. An unprovisioned macOS host is
separately verified to reject `open()` with `unavailable` and OSStatus -34018. These
checks do not certify physical devices, power-loss behavior or distribution signing. See
[permission verification](permissions.md#verification) and the
[Apple host setup](../../packages/flax_secure_storage/README.md#apple-host-setup).
