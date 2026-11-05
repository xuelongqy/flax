/// Optional host OS permission adapter and trusted module consent UI.
library;

import 'dart:async';

import 'package:flax/permissions.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart';
import 'package:permission_handler/permission_handler.dart';

export 'src/dialog.dart';

/// Queries by default; native requests require the host's explicit opt-in.
/// Rich native scopes need a capability-specific adapter that can prove the range.
final class FlaxPermissionHandlerAdapter
    implements FlaxNativePermissionRequester {
  const FlaxPermissionHandlerAdapter({this.requestOnDemand = false});

  final bool requestOnDemand;
  static Future<void> _queue = Future<void>.value();

  static Permission? _permission(String permission, TargetPlatform platform) {
    final apple = platform == TargetPlatform.iOS;
    return switch (permission) {
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
  }

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
    final native = _permission(permission, platform);
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
        canRequest:
            requestOnDemand &&
            status.isDenied &&
            permission != 'flax.location.background' &&
            (service == FlaxPermissionServiceStatus.notApplicable ||
                service == FlaxPermissionServiceStatus.enabled),
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

  @override
  Future<void> request(FlaxNativePermissionRequest request) {
    final result = _queue.then((_) async {
      if (!requestOnDemand) return;
      while (!request.isCancelled) {
        await _waitForForeground(request);
        if (request.isCancelled) return;
        final status = await query(request.permission, request.scope);
        if (request.isCancelled) return;
        final lifecycle = WidgetsBinding.instance.lifecycleState;
        // Status queries can outlive the foreground state that admitted them.
        if (lifecycle != null && lifecycle != AppLifecycleState.resumed) {
          continue;
        }
        if (status.canRequest) {
          final native = _permission(
            request.permission,
            defaultTargetPlatform,
          )!;
          // Keep the queue occupied until the actual platform Future has settled.
          await [native].request();
        } else if (status.state != FlaxPermissionState.granted) {
          return;
        }
        await _waitForForeground(request);
        return;
      }
    });
    _queue = result.then<void>((_) {}, onError: (Object _) {});
    return result;
  }
}

Future<void> _waitForForeground(FlaxNativePermissionRequest request) async {
  final binding = WidgetsBinding.instance;
  while (!request.isCancelled &&
      binding.lifecycleState != null &&
      binding.lifecycleState != AppLifecycleState.resumed) {
    final observer = _ForegroundWait();
    binding.addObserver(observer);
    try {
      await Future.any([observer.resumed.future, request.whenCancelled]);
    } finally {
      binding.removeObserver(observer);
    }
  }
}

final class _ForegroundWait with WidgetsBindingObserver {
  final resumed = Completer<void>();
  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    if (state == AppLifecycleState.resumed && !resumed.isCompleted) {
      resumed.complete();
    }
  }
}
