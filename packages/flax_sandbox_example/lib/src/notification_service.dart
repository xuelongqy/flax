part of '../permissions_example.dart';

final class _ExampleNotifications {
  static const channel = MethodChannel('dev.flax.example.notifications');
  static final status = ValueNotifier('Not checked');
  static final activity = ValueNotifier<List<String>>(const []);
  static Future<void>? _requesting;
  static var _event = 0;

  static void log(String message) {
    activity.value = [
      ...activity.value.skip(activity.value.length >= 5 ? 1 : 0),
      '${++_event}. $message',
    ];
  }

  static Future<FlaxNativePermissionStatus> query() async {
    FlaxNativePermissionStatus value;
    try {
      value = !Platform.isMacOS
          ? const FlaxNativePermissionStatus(
              state: FlaxPermissionState.unavailable,
              reason: 'exampleMacOSOnly',
            )
          : switch (await channel.invokeMethod<String>('query')) {
              'authorized' => const FlaxNativePermissionStatus(
                state: FlaxPermissionState.granted,
              ),
              'notDetermined' => const FlaxNativePermissionStatus(
                state: FlaxPermissionState.denied,
                reason: 'hostPermissionRequired',
                canRequest: true,
              ),
              'denied' => const FlaxNativePermissionStatus(
                state: FlaxPermissionState.denied,
                reason: 'hostPermissionRequired',
              ),
              'provisional' => const FlaxNativePermissionStatus(
                state: FlaxPermissionState.limited,
                reason: 'hostScopeUnknown',
              ),
              _ => const FlaxNativePermissionStatus(
                state: FlaxPermissionState.unknown,
                reason: 'hostStatusUnknown',
              ),
            };
    } on MissingPluginException {
      value = const FlaxNativePermissionStatus(
        state: FlaxPermissionState.unavailable,
        reason: 'nativeAdapterUnavailable',
      );
    } on PlatformException {
      value = const FlaxNativePermissionStatus(
        state: FlaxPermissionState.unavailable,
        reason: 'hostMisconfigured',
      );
    }
    status.value = value.canRequest
        ? 'not determined · system request available'
        : value.state == FlaxPermissionState.denied &&
              value.reason == 'hostPermissionRequired'
        ? 'denied · change permission in macOS notification settings'
        : [value.state.name, ?value.reason].join(' · ');
    return value;
  }

  static Future<void> requestHost({
    FlaxNativePermissionRequest? request,
  }) async {
    while (true) {
      await _foreground(request);
      if (request?.isCancelled ?? false) return;
      final active = _requesting;
      if (active != null) {
        await active;
        break;
      }
      final current = await query();
      if (request?.isCancelled ?? false) return;
      final lifecycle = WidgetsBinding.instance.lifecycleState;
      if (lifecycle != null && lifecycle != AppLifecycleState.resumed) {
        continue;
      }
      if (!current.canRequest) break;
      final pending = _requesting ??= _requestNative();
      try {
        // An already-started OS dialog must retain its real Future on cancellation.
        await pending;
      } finally {
        if (identical(_requesting, pending)) _requesting = null;
      }
      break;
    }
    await _foreground(request);
  }

  static Future<void> _requestNative() async {
    log('macOS notification authorization requested');
    await channel.invokeMethod<void>('request');
    final result = await query();
    log('macOS notification authorization settled: ${result.state.name}');
  }

  static Future<void> send(String module) async {
    if (!Platform.isMacOS) {
      throw UnsupportedError('The example notification API requires macOS');
    }
    await channel.invokeMethod<void>('send', {'module': module});
    log('$module: notification submitted to macOS');
  }

  static Future<void> clear(String module) async {
    if (!Platform.isMacOS) return;
    try {
      await channel.invokeMethod<void>('clear', {'module': module});
    } on MissingPluginException {
      // Widget tests and hosts without the native example have no notifications.
    }
  }

  static Future<void> _foreground(FlaxNativePermissionRequest? request) async {
    final binding = WidgetsBinding.instance;
    while (!(request?.isCancelled ?? false) &&
        binding.lifecycleState != null &&
        binding.lifecycleState != AppLifecycleState.resumed) {
      final observer = _NotificationForeground();
      binding.addObserver(observer);
      try {
        await Future.any([
          observer.resumed.future,
          if (request != null) request.whenCancelled,
        ]);
      } finally {
        binding.removeObserver(observer);
      }
    }
  }
}

final class _ExampleNativePermissions implements FlaxNativePermissionRequester {
  const _ExampleNativePermissions();
  static const _mobile = FlaxPermissionHandlerAdapter(requestOnDemand: true);

  @override
  Future<FlaxNativePermissionStatus> query(String permission, Object scope) =>
      permission == 'flax.notifications'
      ? _ExampleNotifications.query()
      : _mobile.query(permission, scope);

  @override
  Future<void> request(FlaxNativePermissionRequest request) =>
      request.permission == 'flax.notifications'
      ? _ExampleNotifications.requestHost(request: request)
      : _mobile.request(request);
}

final class _NotificationForeground with WidgetsBindingObserver {
  final resumed = Completer<void>();
  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    if (state == AppLifecycleState.resumed && !resumed.isCompleted) {
      resumed.complete();
    }
  }
}
