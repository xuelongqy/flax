# flax_secure_storage

Optional host storage for Flax permission and installation records. Core depends only on
`FlaxSecureStorage`; applications may provide their own backend instead. This package
has no JS entry or generated bindings.

The adapter uses a private namespace, authenticated address envelopes and single-record
writes. It never calls the host store's `deleteAll`, silently resets keys, requests
biometric authentication or falls back to plaintext.

```dart
final storage = await FlaxPlatformSecureStorage.open(namespace: 'my-host.flax');
Flax.registerSecureStorage(storage);
final manager = FlaxPermissionManager();
```

Import `package:flax/flax.dart` and this package from trusted host code. There is no JS
entry or implicit platform registration in Core. Custom hosts can instead implement
`package:flax/secure_storage.dart` and avoid this native package entirely.

iOS/macOS use a dedicated Keychain service, no synchronization and
AfterFirstUnlockThisDeviceOnly accessibility. Authentication interaction is forbidden.
macOS uses the Data Protection Keychain, which requires Keychain Sharing and a valid
signed/provisioned application identity. Ad hoc development signatures are insufficient;
missing entitlements report unavailable without falling back to the legacy file-based
Keychain. Configure the host's signing team and Keychain Sharing capability in Xcode.
Android API 23+ uses Android Keystore AES-GCM, authenticated record addresses and
private no-backup files. Writes flush the file and directory around atomic rename. This
does not promise hardware-backed keys on every Android device. Missing keys with
existing records fail instead of resetting storage. Flutter registers the native plugin
normally; Apple distribution signing and any host-specific entitlements remain the
host's job.

## Apple host setup

1. Configure the host application's signing identity and provisioning profile in Xcode.
   The plugin uses the main executable's identity, not an identity belonging to the
   plugin or a Flax module. iOS uses the application's normal signing identity. Prepared
   iOS launchers can select an existing configured team with `FLAX_IOS_TEAM`. Simulator
   acceptance uses that development team and a matching application ID; it does not
   bypass access-group validation.
2. On macOS, add Keychain Sharing to the host target and retain the application's
   private group in every signing configuration, including Release:

   ```xml
   <key>keychain-access-groups</key>
   <array>
     <string>$(AppIdentifierPrefix)$(PRODUCT_BUNDLE_IDENTIFIER)</string>
   </array>
   ```

   Let Xcode expand the prefix and bundle ID and authorize the group in the profile. No
   App Groups or iCloud capability is required. Adding Keychain Sharing does not itself
   share records with another application. Keep the private group first if the host also
   uses shared groups. Initialization obtains the actual group from a non-secret
   Keychain Add and requires an AppIdentifierPrefix followed by the complete host bundle
   ID. Every read, update, write, enumeration and deletion then explicitly uses that
   group. A shared default group is rejected. The host must never authorize another
   application for this private group; its name alone cannot enforce that. Service names
   and namespaces scope records; they do not replace access groups.

   The maintained macOS engine also contains V8 dynamic libraries. Sign these with the
   host identity before sealing `FlutterMacOS.framework`; an ad hoc library cannot
   satisfy the signed host's library validation. Flax's prepared example launchers
   perform this step when `FLAX_MACOS_TEAM` is set. Other host build pipelines must
   preserve it when embedding the maintained engine.

   Keychain Sharing and macOS App Sandbox are separate capabilities. Data Protection
   Keychain works with a correctly signed host in either mode. Core's current rooted
   file backend needs `/dev/fd` access and cannot run under macOS App Sandbox; Flax
   file/UI regression uses Flutter's CI host mode instead. See the
   [filesystem boundary](../../docs/architecture/sandbox.md) before combining them.

3. Await `open()` before creating permission consumers. Apple initialization discovers
   the OS-selected group with a random UUID account and one-byte non-secret value in a
   dedicated probe service. It never searches unspecified groups. After validating the
   group, it removes that service's interrupted probes only within the same group, then
   verifies namespace write access with a reserved readiness record. Cleanup must
   succeed before initialization is cached. An empty read alone can return "not found"
   for an unprovisioned host. Initialization errors remain errors.

`open()` does not guarantee permanent availability. Each operation still reports its own
failure. Missing entitlements (`-34018`) map to `unavailable`; interaction-required or
authentication failures map to `locked`. The original `PlatformException`, including the
OSStatus, is available as the exception's `cause`. Fix signing for `unavailable`; retry
after the host regains access for `locked`. Never treat either as an absent grant. The
adapter never changes process-wide Keychain interaction settings.

Keep bundle ID, access group and namespace stable across ordinary updates. Changing them
can hide earlier records and requires a host-managed recovery decision. There is no
automatic migration from the old file-based Keychain. Module uninstall must use the
permission manager's uninstall flow and owner cleanup; deleting `data` or reinstalling
the host is not a reliable way to clear Keychain authorization. Records are not synced
to iCloud or migrated to another device, and this is not an anti-rollback guarantee.

## Records and lifecycle

Records are limited to 1 MiB. Null reads mean absent only; unavailable, locked,
integrityFailure, ioFailure and unsupported are typed exceptions. The caller must drain
all feature writes for an installation owner before deleteOwner. Separate namespace,
module, owner and key prevent collisions; Core permission data is never stored in a
module's writable data directory. Multi-process coordination, backup identity recovery
and anti-rollback are host responsibilities.

See the [storage contract](../../docs/architecture/secure-storage.md) and
[permission lifecycle](../../docs/architecture/permissions.md). Tests distinguish mocked
channel behavior, actual Keychain IO and native application compilation.
