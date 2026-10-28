import 'dart:collection';
import 'dart:convert';
import 'dart:io';

import 'package:crypto/crypto.dart';
import 'package:path/path.dart' as p;
import 'package:path_provider/path_provider.dart';

/// Immutable application isolation configuration. Sessions own active resources.
final class FlaxSandbox {
  FlaxSandbox._(this.appId, this.applicationPath, this.policies)
    : homePath = p.join(applicationPath, 'data');

  final String appId;

  /// Host-managed application root; only its data child is writable from JS.
  final String applicationPath;
  final String homePath;
  final Map<Type, Object> policies;

  static final _applications = <String, String>{};

  /// Prepares apps/sha256(appId)/data without copying an externally loaded bundle.
  static Future<FlaxSandbox> create({
    required String appId,
    Directory? appsDirectory,
    Map<Type, Object> policies = const {},
  }) async {
    if (appId.isEmpty || utf8.decode(utf8.encode(appId)) != appId) {
      throw ArgumentError.value(
        appId,
        'appId',
        'Expected valid nonempty Unicode',
      );
    }
    if (!(Platform.isMacOS ||
        Platform.isIOS ||
        Platform.isLinux ||
        Platform.isAndroid)) {
      throw UnsupportedError('Flax sandbox requires a POSIX filesystem');
    }
    final parent =
        appsDirectory ??
        Directory(
          p.join((await getApplicationSupportDirectory()).path, 'flax', 'apps'),
        );
    await parent.create(recursive: true);
    final base = await parent.resolveSymbolicLinks();
    final application = p.join(
      base,
      sha256.convert(utf8.encode(appId)).toString(),
    );
    for (final entry in _applications.entries) {
      if (entry.value == appId && p.equals(entry.key, application)) continue;
      if (p.equals(entry.key, application) ||
          p.isWithin(entry.key, application) ||
          p.isWithin(application, entry.key)) {
        throw ArgumentError('Sandbox application roots must not overlap');
      }
    }
    for (final path in [application, p.join(application, 'data')]) {
      final type = FileSystemEntity.typeSync(path, followLinks: false);
      if (type != FileSystemEntityType.notFound &&
          type != FileSystemEntityType.directory) {
        throw const FlaxSandboxException(
          operation: 'sandbox.create',
          message: 'Invalid application directory',
        );
      }
      Directory(path).createSync();
      if (!p.equals(Directory(path).resolveSymbolicLinksSync(), path)) {
        throw const FlaxSandboxException(
          operation: 'sandbox.create',
          message: 'Application directories must not be links',
        );
      }
    }
    _applications[application] = appId;
    return FlaxSandbox._(
      appId,
      application,
      UnmodifiableMapView(Map.of(policies)),
    );
  }
}

abstract interface class FlaxSandboxScope {
  bool get isActive;
  void requireActive();
}

abstract interface class FlaxSandboxContext {
  String get appId;
  String get homePath;
  FlaxSandboxScope get scope;
  P requirePolicy<P extends Object>();
}

/// A deliberate isolation rejection, distinct from ordinary IO and configuration errors.
final class FlaxSandboxException implements Exception {
  const FlaxSandboxException({required this.operation, required this.message});
  final String operation;
  final String message;
  static const deniedCode = 'FLAX_SANDBOX_DENIED';
  String get code => deniedCode;
  @override
  String toString() => '$code: $operation: $message';
}

/// A generated synchronous guard for one selected binding operation.
final class FlaxSandboxBinding {
  const FlaxSandboxBinding(this.invoke, {this.replace = false});
  const FlaxSandboxBinding.deny() : invoke = null, replace = true;
  final Object? Function(FlaxSandboxContext, Object?, Map<String, Object?>)?
  invoke;
  final bool replace;
}
