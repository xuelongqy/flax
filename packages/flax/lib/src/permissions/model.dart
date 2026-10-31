part of '../../permissions.dart';

enum FlaxPermissionState {
  prompt,
  granted,
  limited,
  denied,
  unavailable,
  unknown,
}

enum FlaxPermissionServiceStatus { enabled, disabled, notApplicable, unknown }

enum FlaxPermissionDecision { allow, deny, cancel }

/// Scope semantics belong to a trusted capability provider, never generic JSON.
abstract interface class FlaxPermissionScopeRules {
  Object normalize(Object? scope);
  bool covers(Object approved, Object requested);
  Object? intersect(Object first, Object second);
  Object combine(Object approved, Object requested);
}

/// Permissions with no resource range accept only absent or empty scope.
final class FlaxBooleanPermissionScope implements FlaxPermissionScopeRules {
  const FlaxBooleanPermissionScope();

  @override
  Object normalize(Object? scope) {
    if (scope != null && (scope is! Map || scope.isNotEmpty)) {
      throw ArgumentError('This permission does not accept a scope');
    }
    return const <String, Object?>{};
  }

  @override
  bool covers(Object approved, Object requested) => true;
  @override
  Object intersect(Object first, Object second) => const <String, Object?>{};
  @override
  Object combine(Object approved, Object requested) => requested;
}

/// An omitted origins list is unrestricted; an empty list allows no targets.
final class FlaxOriginPermissionScope implements FlaxPermissionScopeRules {
  const FlaxOriginPermissionScope({this.webSocket = false});
  final bool webSocket;

  @override
  Object normalize(Object? scope) {
    if (scope == null) return const <String, Object?>{};
    if (scope is! Map || scope.keys.any((key) => key != 'origins')) {
      throw ArgumentError('Expected an origins scope');
    }
    if (!scope.containsKey('origins')) return const <String, Object?>{};
    if (scope['origins'] is! List) {
      throw ArgumentError('origins must be a list of absolute origins');
    }
    final origins = <String>{};
    for (final value in scope['origins'] as List) {
      if (value is! String) throw ArgumentError('Invalid origin');
      final uri = Uri.tryParse(value);
      if (uri == null ||
          !(webSocket ? {'http', 'https', 'ws', 'wss'} : {'http', 'https'})
              .contains(uri.scheme) ||
          !uri.hasAuthority ||
          uri.host.isEmpty ||
          uri.userInfo.isNotEmpty ||
          uri.hasQuery ||
          uri.hasFragment ||
          (uri.path.isNotEmpty && uri.path != '/') ||
          (uri.hasPort && (uri.port < 1 || uri.port > 65535))) {
        throw ArgumentError('Expected an HTTP(S) or WebSocket origin');
      }
      origins.add(origin(uri));
    }
    return Map<String, Object?>.unmodifiable({
      'origins': List<String>.unmodifiable(origins.toList()..sort()),
    });
  }

  static String origin(Uri uri) {
    final defaultPort = {'https', 'wss'}.contains(uri.scheme) ? 443 : 80;
    final port = uri.hasPort ? uri.port : defaultPort;
    return Uri(
      scheme: uri.scheme,
      host: uri.host.toLowerCase(),
      port: port == defaultPort ? null : port,
    ).toString();
  }

  Set<String>? _origins(Object value) =>
      ((value as Map)['origins'] as List?)?.cast<String>().toSet();

  @override
  bool covers(Object approved, Object requested) {
    final allowed = _origins(approved);
    final needed = _origins(requested);
    return allowed == null || needed != null && allowed.containsAll(needed);
  }

  @override
  Object? intersect(Object first, Object second) {
    final a = _origins(first), b = _origins(second);
    if (a == null) return second;
    if (b == null) return first;
    final result = a.intersection(b);
    if (result.isEmpty) return null;
    return normalize({'origins': result.toList()});
  }

  @override
  Object combine(Object approved, Object requested) {
    final a = _origins(approved), b = _origins(requested);
    if (a == null || b == null) return const <String, Object?>{};
    return normalize({
      'origins': {...a, ...b}.toList(),
    });
  }
}

typedef FlaxPermissionOperationScope = Object? Function(
  String operation,
  Object? receiver,
  Map<String, Object?> arguments,
);

final class FlaxPermissionProvider {
  const FlaxPermissionProvider(
    this.definition, {
    this.scope = const FlaxBooleanPermissionScope(),
    this.operationScope,
    this.requiresNative = false,
    this.version = 1,
  });

  final FlaxPermissionDefinition definition;
  final FlaxPermissionScopeRules scope;
  final FlaxPermissionOperationScope? operationScope;
  final bool requiresNative;

  /// Version of this host's scope semantics, independent of binding metadata.
  final int version;
}

final class FlaxDocumentPermissionScope implements FlaxPermissionScopeRules {
  const FlaxDocumentPermissionScope();
  @override
  Object normalize(Object? scope) {
    if (scope != null &&
        (scope is! Map || scope.keys.any((key) => key != 'mode'))) {
      throw ArgumentError('Documents accept only read or readWrite mode');
    }
    final mode = (scope as Map?)?['mode'] ?? 'read';
    if (mode != 'read' && mode != 'readWrite') {
      throw ArgumentError('Invalid document mode');
    }
    return Map<String, Object?>.unmodifiable({'mode': mode});
  }

  @override
  bool covers(Object approved, Object requested) =>
      (approved as Map)['mode'] == 'readWrite' ||
      (requested as Map)['mode'] == 'read';
  @override
  Object intersect(Object first, Object second) =>
      covers(first, second) ? second : first;
  @override
  Object combine(Object first, Object second) =>
      covers(first, second) ? first : second;
}

final class FlaxPermissionDeclaration {
  FlaxPermissionDeclaration({
    required Map<String, String> purpose,
    Object? scope,
  }) : purpose = Map.unmodifiable(purpose),
       scope = _permissionData(scope);

  final Map<String, String> purpose;
  final Object? scope;
}

/// A static manifest subset. Hosts still explicitly approve its trusted source.
final class FlaxPermissionManifest {
  FlaxPermissionManifest({
    required this.appId,
    required this.defaultLocale,
    required Map<String, FlaxPermissionDeclaration> permissions,
    this.name,
  }) : permissions = Map.unmodifiable(permissions) {
    if (appId.isEmpty ||
        utf8.decode(utf8.encode(appId)) != appId ||
        !_localePattern.hasMatch(defaultLocale)) {
      throw const FormatException(
        'Invalid application identity or defaultLocale',
      );
    }
    for (final entry in this.permissions.entries) {
      if (!_permissionId(entry.key) ||
          entry.value.purpose.isEmpty ||
          entry.value.purpose[defaultLocale]?.trim().isNotEmpty != true ||
          entry.value.purpose.entries.any(
            (entry) =>
                !_localePattern.hasMatch(entry.key) ||
                entry.value.trim().isEmpty,
          )) {
        throw const FormatException('Invalid permission or translated purpose');
      }
    }
  }

  static final _localePattern = RegExp(r'^[A-Za-z]{2,8}(-[A-Za-z0-9]{1,8})*$');
  final String appId;
  final String? name;
  final String defaultLocale;
  final Map<String, FlaxPermissionDeclaration> permissions;

  factory FlaxPermissionManifest.fromJson(Map<String, dynamic> json) {
    final entries = json['permissions'];
    if (entries == null) {
      return FlaxPermissionManifest(
        appId: json['id'] as String,
        defaultLocale: json['defaultLocale'] as String? ?? 'en',
        permissions: const {},
        name: json['name'] is String ? json['name'] as String : null,
      );
    }
    if (entries is! Map || json['defaultLocale'] is! String) {
      throw const FormatException('Permissions require a defaultLocale');
    }
    final declarations = <String, FlaxPermissionDeclaration>{};
    for (final entry in entries.entries) {
      if (entry.key is! String || entry.value is! Map) {
        throw const FormatException('Invalid permission declaration');
      }
      final data = (entry.value as Map).cast<String, Object?>();
      final purpose = data['purpose'];
      if (purpose is! Map ||
          purpose.keys.any((key) => key is! String) ||
          purpose.values.any((value) => value is! String)) {
        throw const FormatException('Permission purpose must be a locale map');
      }
      declarations[entry.key as String] = FlaxPermissionDeclaration(
        purpose: purpose.cast<String, String>(),
        scope: {
          for (final item in data.entries)
            if (item.key != 'purpose') item.key: item.value,
        },
      );
    }
    return FlaxPermissionManifest(
      appId: json['id'] as String,
      name: json['name'] is String ? json['name'] as String : null,
      defaultLocale: json['defaultLocale'] as String,
      permissions: declarations,
    );
  }

  String purpose(String permission, String locale) {
    final translations = permissions[permission]!.purpose;
    final normalized = locale.replaceAll('_', '-').toLowerCase();
    final available = {
      for (final key in translations.keys) key.toLowerCase(): key,
    };
    final parts = normalized.split('-');
    final script = parts.where((part) => part.length == 4).firstOrNull;
    for (final candidate in [
      normalized,
      if (script != null) '${parts.first}-$script',
      parts.first,
      defaultLocale.toLowerCase(),
    ]) {
      final key = available[candidate];
      if (key != null) return translations[key]!;
    }
    return translations[defaultLocale]!;
  }
}

final class FlaxPermissionResult {
  const FlaxPermissionResult({
    required this.permission,
    required this.state,
    required this.requested,
    this.reason,
    this.scope,
    this.serviceStatus = FlaxPermissionServiceStatus.notApplicable,
  });

  final String permission;
  final FlaxPermissionState state;
  final bool requested;
  final String? reason;
  final Object? scope;
  final FlaxPermissionServiceStatus serviceStatus;

  Map<String, Object?> toJson() => {
    'permission': permission,
    'state': state.name,
    'requested': requested,
    if (reason != null) 'reason': reason,
    if (scope != null) 'scope': scope,
    'serviceStatus': serviceStatus.name,
  };
}

/// An asynchronous host query result, separate from a module's own decision.
final class FlaxNativePermissionStatus {
  const FlaxNativePermissionStatus({
    required this.state,
    this.scope,
    this.reason,
    this.serviceStatus = FlaxPermissionServiceStatus.notApplicable,
  });
  const FlaxNativePermissionStatus.notRequired()
    : state = FlaxPermissionState.granted,
      scope = null,
      reason = null,
      serviceStatus = FlaxPermissionServiceStatus.notApplicable;

  final FlaxPermissionState state;
  final Object? scope;
  final String? reason;
  final FlaxPermissionServiceStatus serviceStatus;
}

abstract interface class FlaxNativePermissionAdapter {
  /// Must not prompt, request OS permissions or open system settings.
  Future<FlaxNativePermissionStatus> query(String permission, Object scope);
}

typedef FlaxPermissionRequestHandler = Future<FlaxPermissionDecision> Function(
  FlaxPermissionRequest request,
);

final class FlaxPermissionRequest {
  FlaxPermissionRequest._({
    required this.appId,
    required this.applicationName,
    required this.definition,
    required this.purpose,
    required this.locale,
    required this.scope,
    required this.approvedScope,
  });
  final String appId;
  final String applicationName;
  final FlaxPermissionDefinition definition;
  final String purpose;
  final String locale;
  final Object scope;
  final Object? approvedScope;
  final _cancelled = Completer<void>();
  Future<void> get whenCancelled => _cancelled.future;
}

/// One trusted host policy. It narrows declarations and cannot create approval.
final class FlaxPermissionPolicy {
  FlaxPermissionPolicy({
    required this.application,
    required Set<String> allow,
    this.onRequest,
    this.locale = 'en',
    this.account,
  }) : allow = Set.unmodifiable(allow);

  final FlaxPermissionApplication application;
  final Set<String> allow;
  final FlaxPermissionRequestHandler? onRequest;
  final String locale;
  final String? account;
}

final class FlaxPermissionException implements Exception {
  const FlaxPermissionException({
    required this.permission,
    required this.operation,
    required this.reason,
  });
  static const deniedCode = 'FLAX_PERMISSION_DENIED';
  String get code => deniedCode;
  final String permission;
  final String operation;
  final String reason;
  Map<String, Object?> toJson() => {
    'name': 'FlaxPermissionError',
    'code': code,
    'permission': permission,
    'operation': operation,
    'reason': reason,
    'message': toString(),
  };
  @override
  String toString() => '$code: $permission: $operation: $reason';
}
