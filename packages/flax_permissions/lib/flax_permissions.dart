/// Optional read-only adapter for the host App's OS permission prerequisites.
library;

import 'package:flax/permissions.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/services.dart';
import 'package:permission_handler/permission_handler.dart';

/// This adapter never calls request(), openAppSettings() or Bluetooth serviceStatus.
/// Rich native scopes need a capability-specific adapter that can prove the range.
final class FlaxPermissionHandlerAdapter
    implements FlaxNativePermissionAdapter {
  const FlaxPermissionHandlerAdapter();

  @override
  Future<FlaxNativePermissionStatus> query(
    String permission,
    Object scope,
  ) async {
    final platform = defaultTargetPlatform;
    if (kIsWeb ||
        platform != TargetPlatform.android && platform != TargetPlatform.iOS) {
      return const FlaxNativePermissionStatus(
        state: FlaxPermissionState.unavailable,
        reason: 'nativePlatformUnsupported',
      );
    }
    final apple = platform == TargetPlatform.iOS;
    if (!apple && permission == 'flax.motion') {
      return const FlaxNativePermissionStatus.notRequired();
    }
    final native = switch (permission) {
      'flax.camera' => Permission.camera,
      'flax.microphone' => Permission.microphone,
      'flax.speech.recognition' => Permission.speech,
      'flax.location' => Permission.locationWhenInUse,
      'flax.location.background' => Permission.locationAlways,
      'flax.motion' when apple => Permission.sensors,
      'flax.activity' =>
        apple ? Permission.sensors : Permission.activityRecognition,
      'flax.photos.read' => Permission.photos,
      'flax.photos.add' when apple => Permission.photosAddOnly,
      'flax.audio.library.read' =>
        apple ? Permission.mediaLibrary : Permission.audio,
      'flax.contacts.read' || 'flax.contacts.write' => Permission.contacts,
      'flax.calendar.read' => Permission.calendarFullAccess,
      'flax.calendar.write' => Permission.calendarWriteOnly,
      'flax.reminders.read' ||
      'flax.reminders.write' when apple => Permission.reminders,
      'flax.network.local' when !apple => Permission.accessLocalNetwork,
      'flax.bluetooth.scan' =>
        apple ? Permission.bluetooth : Permission.bluetoothScan,
      'flax.bluetooth.connect' =>
        apple ? Permission.bluetooth : Permission.bluetoothConnect,
      'flax.bluetooth.advertise' =>
        apple ? Permission.bluetooth : Permission.bluetoothAdvertise,
      'flax.notifications' => Permission.notification,
      _ => null,
    };
    if (native == null) {
      return const FlaxNativePermissionStatus(
        state: FlaxPermissionState.unavailable,
        reason: 'nativeCapabilityUnsupported',
      );
    }
    try {
      final status = await native.status;
      var service = FlaxPermissionServiceStatus.notApplicable;
      if (permission == 'flax.location' ||
          permission == 'flax.location.background') {
        final state = await Permission.location.serviceStatus;
        service = state.isEnabled
            ? FlaxPermissionServiceStatus.enabled
            : state.isDisabled
            ? FlaxPermissionServiceStatus.disabled
            : FlaxPermissionServiceStatus.unknown;
      }
      if (status.isGranted) {
        return FlaxNativePermissionStatus(
          state: FlaxPermissionState.granted,
          serviceStatus: service,
        );
      }
      if (status.isLimited || status.isProvisional) {
        // A generic status cannot identify the host's exact selected resources.
        return FlaxNativePermissionStatus(
          state: FlaxPermissionState.limited,
          reason: 'hostScopeUnknown',
          serviceStatus: service,
        );
      }
      return FlaxNativePermissionStatus(
        state: FlaxPermissionState.denied,
        reason: status.isRestricted
            ? 'hostRestricted'
            : 'hostPermissionRequired',
        serviceStatus: service,
      );
    } on MissingPluginException {
      return const FlaxNativePermissionStatus(
        state: FlaxPermissionState.unavailable,
        reason: 'nativeAdapterUnavailable',
      );
    } on PlatformException {
      return const FlaxNativePermissionStatus(
        state: FlaxPermissionState.unavailable,
        reason: 'hostMisconfigured',
      );
    }
  }
}
