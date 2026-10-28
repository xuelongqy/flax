part of '../../bindings.dart';

class _SessionSandbox implements FlaxSandboxContext {
  _SessionSandbox(_Session session, this.configuration) {
    if (configuration.policies.containsKey(FlaxFilePolicy) ||
        configuration.policies.containsKey(FlaxAssetBundlePolicy)) {
      throw ArgumentError('Built-in isolation policies cannot be replaced');
    }
    _policies.addAll(configuration.policies);
    _policies[FlaxFilePolicy] = FlaxFilePolicy(configuration, scope);
    _policies[FlaxAssetBundlePolicy] = FlaxAssetBundlePolicy(
      session.assetBundle,
      scope,
    );
  }
  final FlaxSandbox configuration;
  final _policies = <Type, Object>{};
  @override
  String get appId => configuration.appId;
  @override
  String get homePath => configuration.homePath;
  @override
  final _SandboxScope scope = _SandboxScope();
  void requireActive() => scope.requireActive();

  @override
  P requirePolicy<P extends Object>() {
    requireActive();
    final policy = _policies[P];
    if (policy is! P) throw StateError('Missing sandbox policy $P');
    return policy;
  }

  Future<void> close() {
    scope._active = false;
    return (_policies[FlaxFilePolicy] as FlaxFilePolicy).close();
  }
}

// Cached native resources retain this small token, never the Session or runtime.
class _SandboxScope implements FlaxSandboxScope {
  bool _active = true;
  @override
  bool get isActive => _active;
  @override
  void requireActive() {
    if (!_active) throw StateError('FlaxSessionClosed');
  }
}

extension _SandboxCalls on _Session {
  Future<String> _getHomePath() {
    requireOpen();
    if (sandbox != null) return Future.value(sandbox!.homePath);
    return _homePath ??= () async {
      try {
        final directory = await getApplicationSupportDirectory();
        await directory.create(recursive: true);
        final path = await directory.resolveSymbolicLinks();
        requireOpen();
        return path;
      } catch (_) {
        _homePath = null;
        rethrow;
      }
    }();
  }

  Object? _sandboxCall(
    String owner,
    String kind,
    String name,
    Object? receiver,
    Map<String, Object?> values,
    Object? Function() action, {
    FlaxTypeRef? resultType,
  }) {
    final context = sandbox;
    if (context == null) return action();
    final original = _specializedOwners[owner] ?? owner;
    var operation = name;
    var guardedKind = kind;
    if (kind == 'construct' && name.startsWith('@implementation')) {
      operation = name == '@implementation'
          ? ''
          : name.substring('@implementation:'.length);
    }
    if (name.startsWith('@super:get:')) {
      guardedKind = 'get';
      operation = name.substring('@super:get:'.length);
    } else if (name.startsWith('@super:set:')) {
      guardedKind = 'set';
      operation = name.substring('@super:set:'.length);
    } else if (name.startsWith('@super:')) {
      operation = name.substring('@super:'.length);
    }
    final rule = _bindingOwner(original)
        ?.sandboxGuards[(original, guardedKind, operation)];
    if (rule == null) return action();
    try {
      context.requireActive();
      final guard = rule.invoke;
      if (guard == null || name.startsWith('@implementation') && rule.replace) {
        throw FlaxSandboxException(
          operation: '$original.$operation',
          message: 'This API is unavailable in a sandbox',
        );
      }
      final result = guard(context, receiver, values);
      if (rule.replace) return result;
      if (result != null) {
        throw StateError('Sandbox check handlers must return void');
      }
      return action();
    } catch (error, stack) {
      if (resultType?.kind == 'future') {
        return Future<Object?>.error(error, stack);
      }
      rethrow;
    }
  }
}
