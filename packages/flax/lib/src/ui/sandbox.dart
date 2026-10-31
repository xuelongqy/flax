part of '../../bindings.dart';

class _SessionSandbox implements FlaxSandboxContext {
  _SessionSandbox(_Session session, this.configuration) {
    if (configuration.policies.containsKey(FlaxFilePolicy) ||
        configuration.policies.containsKey(FlaxAssetBundlePolicy)) {
      throw ArgumentError('Built-in isolation policies cannot be replaced');
    }
    _policies.addAll(configuration.policies);
    _policies[FlaxFilePolicy] = FlaxFilePolicy(
      configuration,
      scope,
      permissions: session.permissions,
    );
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
    final original = _specializedOwners[owner] ?? owner;
    var operation =
        (_genericMethods[(owner, name)] ?? _genericMethods[(original, name)])
            ?.name ??
        name;
    var guardedKind = kind;
    if (kind == 'construct' && operation.startsWith('@implementation')) {
      operation = operation == '@implementation'
          ? ''
          : operation.substring('@implementation:'.length);
    }
    if (operation.startsWith('@super:get:')) {
      guardedKind = 'get';
      operation = operation.substring('@super:get:'.length);
    } else if (operation.startsWith('@super:set:')) {
      guardedKind = 'set';
      operation = operation.substring('@super:set:'.length);
    } else if (operation.startsWith('@super:')) {
      operation = operation.substring('@super:'.length);
    }
    final module = _bindingOwner(original);
    final permissionRules =
        module?.permissionGuards[(original, guardedKind, operation)];
    final rule = context == null
        ? null
        : module?.sandboxGuards[(original, guardedKind, operation)];
    final delivery = FlaxPermissionDelivery.of(receiver);
    Set<FlaxPermissionDelivery>? constructorChecks;
    if (kind == 'construct') {
      for (final value in values.values) {
        final argument = FlaxPermissionDelivery.of(value);
        if (argument != null) {
          (constructorChecks ??= {}).addAll(argument.checks);
        }
      }
    }
    final cleanup =
        (receiver is StreamSubscription<Object?> ||
            receiver is StreamIterator<Object?>) &&
        guardedKind == 'call' &&
        operation == 'cancel';
    final clipboard = _clipboardOperation(
      original,
      guardedKind,
      operation,
      receiver,
    );
    if (rule == null &&
        permissionRules == null &&
        receiver is! FlaxSelectedFile &&
        delivery == null &&
        constructorChecks == null &&
        !clipboard) {
      return action();
    }
    final leases = <FlaxPermissionLease>[];
    try {
      if (!cleanup && delivery != null) {
        for (final check in delivery.checks) {
          check.requireActive();
        }
      }
      for (final check
          in constructorChecks ?? const <FlaxPermissionDelivery>{}) {
        check.requireActive();
      }
      for (final definition
          in permissionRules ?? const <FlaxPermissionDefinition>[]) {
        if (resultType?.kind == 'future' || resultType?.kind == 'futureOr') {
          leases.add(
            permissions.bindingLease(
              definition,
              '$original.$operation',
              receiver,
              values,
            ),
          );
        } else {
          permissions.requireBinding(
            definition,
            '$original.$operation',
            receiver,
            values,
          );
        }
      }
      Object? invoke() {
        Object? call() => clipboard
            ? _callClipboard(
                original,
                guardedKind,
                operation,
                name,
                receiver,
                values,
                leases,
                action,
              )
            : action();
        if (rule == null) return call();
        context!.requireActive();
        final guard = rule.invoke;
        if (guard == null ||
            name.startsWith('@implementation') && rule.replace) {
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
        return call();
      }

      var result = invoke();
      FlaxPermissionDelivery.inherit(receiver, result, errorsOnly: cleanup);
      if (constructorChecks != null) {
        FlaxPermissionDelivery.attach(result, constructorChecks);
      }
      if (leases.isNotEmpty && result is Future<Object?>) {
        var guarded = result;
        for (final lease in leases) {
          final source = guarded;
          guarded = lease.guardFuture(() => source);
        }
        _permissionFutures[guarded] = leases;
        result = guarded;
      } else {
        for (final lease in leases) {
          lease.close();
        }
      }
      if (result is Future<Object?> && receiver is FlaxSelectedFile) {
        _selectedFileFutures[result] = receiver;
      }
      return result;
    } catch (error, stack) {
      for (final lease in leases) {
        lease.close();
      }
      if (resultType?.kind == 'future') {
        final future = Future<Object?>.error(error, stack);
        FlaxPermissionDelivery.inherit(receiver, future, errorsOnly: cleanup);
        return future;
      }
      rethrow;
    }
  }
}
