# flax_permissions

Optional `permission_handler` adapter for the host App's existing OS permissions. It
only queries native state. Module consent is handled by Core and never invokes native
permission requests or system settings.

The host must configure its native project and obtain OS permissions before a module can
request the matching capability. Unsupported or ambiguous native scopes remain
unavailable or unknown rather than becoming a module grant.

```dart
final manager = FlaxPermissionManager(
  storage: hostSecureStorage,
  native: const FlaxPermissionHandlerAdapter(),
);
```

Import `package:flax/permissions.dart` and this package from trusted Dart code.
Configure the host's Android manifest and iOS usage descriptions/build macros as
required by permission_handler 13.0.2. Obtaining OS authorization remains a separate
host operation. Never call OS request from the module consent callback to bypass the
prerequisite.

Its Android plugin requires host `compileSdk = 37`. This is a build prerequisite,
independent of the host's target/minimum SDK and module consent. The maintained example
launcher applies it to prepared Android projects; hosts using their own projects set it
in their app's Gradle configuration.

The adapter covers supported camera, microphone, speech, location, sensors/activity,
photos/media, contacts, calendar/reminders, Bluetooth and notifications status queries
on iOS/Android. Unsupported capabilities/platforms return unavailable. Local-network
status is queried only on Android. The locked iOS plugin has no native local-network
query strategy, so iOS returns `nativeCapabilityUnsupported` without calling the plugin;
a capability-specific host adapter is required for that prerequisite. Calendar reads use
the library's full-access group; more precise platform rights need a custom native
adapter. Limited/provisional status provides no invented resource scope, so Core reports
unknown until a capability-specific provider can prove the exact range. Android speech
checks the native microphone prerequisite through the library's speech group. Android
photo insertion and pre-Android-13 media access depend on the host's API implementation
and OS version; a host adapter must establish whether legacy storage rights or no OS
permission is required. This adapter never assumes insertion is safe on every Android
version, and its photo-read group only covers the library's media group. Location
service status is queried separately. Bluetooth service status is deliberately not
queried because that may initialize a service with additional platform effects.

Session lifecycle refresh is supplied by Core. See the
[permission contract](../../docs/architecture/permissions.md) for host refresh, consent,
state definitions and resource ownership. This package does not implement the 47 catalog
device APIs, permission dialogs or application authorization storage.
