import 'package:flax/permissions.dart';

/// Copy into a host that already owns native permissions; no Flutter/plugin import.
final class FlaxExistingHostPermissionAdapter
    implements FlaxNativePermissionRequester {
  const FlaxExistingHostPermissionAdapter({
    required this.queryStatus,
    required this.requestPermission,
  });

  final Future<FlaxNativePermissionStatus> Function(String, Object) queryStatus;
  final Future<void> Function(FlaxNativePermissionRequest) requestPermission;

  @override
  Future<FlaxNativePermissionStatus> query(String permission, Object scope) =>
      queryStatus(permission, scope);

  @override
  Future<void> request(FlaxNativePermissionRequest request) =>
      requestPermission(request);
}
