part of '../../permissions.dart';

/// One Session's authority. Bindings check this synchronous, validated snapshot.
final class FlaxPermissionContext {
  static final _currentKey = Object();
  static FlaxPermissionContext get current {
    final context =
        (Zone.current[_currentKey] as WeakReference<FlaxPermissionContext>?)
            ?.target;
    if (context == null) throw StateError('No active Flax binding context');
    context._requireOpen();
    return context;
  }

  T run<T>(T Function() action) {
    final current =
        (Zone.current[_currentKey] as WeakReference<FlaxPermissionContext>?)
            ?.target;
    if (identical(current, this)) return action();
    return runZoned(action, zoneValues: {_currentKey: WeakReference(this)});
  }

  FlaxPermissionContext({
    this.policy,
    this.manifest,
    Iterable<FlaxPermissionDefinition> definitions = const [],
    Set<String>? availablePermissions,
    bool Function()? canInteract,
    this.onError,
    // Keep the public callback name independent of the private field.
    // ignore: prefer_initializing_formals
  }) : _canInteract = canInteract,
       _available = availablePermissions == null
           ? null
           : Set.unmodifiable(availablePermissions) {
    for (final definition in [
      ...FlaxPermissionDefinitions.all,
      ...definitions,
    ]) {
      final previous = _definitions[definition.id];
      if (previous != null &&
          !FlaxPermissionManager._sameDefinition(previous, definition)) {
        throw StateError('Conflicting permission: ${definition.id}');
      }
      _definitions[definition.id] = definition;
      if (policy != null &&
          !policy!.application.manager._providers.containsKey(definition.id)) {
        policy!.application.manager.registerProviders([
          FlaxPermissionProvider(definition),
        ]);
      }
    }
    if (policy != null) {
      final application = policy!.application;
      application.manager._owned(application);
      if (manifest != null && manifest!.appId != application.appId) {
        throw ArgumentError('Manifest and permission installation differ');
      }
      application._owner.contexts.add(this);
    }
  }

  final FlaxPermissionPolicy? policy;
  final FlaxPermissionManifest? manifest;
  final Set<String>? _available;
  final bool Function()? _canInteract;
  final void Function(Object, StackTrace)? onError;
  Future<void>? _closed;
  final _definitions = <String, FlaxPermissionDefinition>{};
  final _leases = <FlaxPermissionLease>{};
  final _requests = <_PermissionCall>{};
  bool _open = true;
  bool get isOpen => _open;
  bool get canInteract => _canInteract?.call() ?? true;
  FlaxPermissionManager? get manager => policy?.application.manager;
  _PermissionOwner? get _owner => policy?.application._owner;

  FlaxPermissionProvider _provider(String id) {
    final registered = manager?._providers[id];
    if (registered != null) return registered;
    final definition = _definitions[id];
    if (definition == null) {
      throw ArgumentError.value(id, 'id', 'Unknown permission');
    }
    return FlaxPermissionProvider(
      definition,
      scope: _standardPermissionScope(id),
    );
  }

  Object _scope(String id, Object? scope) => _permissionData(
    _provider(id).scope.normalize(scope ?? manifest?.permissions[id]?.scope),
  )!;

  bool _requested(String id) =>
      _owner?.decision(policy?.account, id)['requested'] == true;

  FlaxPermissionResult _result(
    String id,
    FlaxPermissionState state, {
    String? reason,
    Object? scope,
    FlaxPermissionServiceStatus serviceStatus =
        FlaxPermissionServiceStatus.notApplicable,
  }) => FlaxPermissionResult(
    permission: id,
    state: state,
    requested: _requested(id),
    reason: reason,
    scope: scope,
    serviceStatus: serviceStatus,
  );

  FlaxPermissionResult? _precheck(String id, Object target) {
    _requireOpen();
    final declaration = manifest?.permissions[id];
    if (declaration == null) {
      return _result(id, FlaxPermissionState.denied, reason: 'notDeclared');
    }
    final configuration = policy;
    if (configuration == null) {
      return _result(id, FlaxPermissionState.denied, reason: 'notApproved');
    }
    if (!configuration.allow.contains(id)) {
      return _result(id, FlaxPermissionState.denied, reason: 'hostDenied');
    }
    if (_available != null && !_available.contains(id)) {
      return _result(
        id,
        FlaxPermissionState.unavailable,
        reason: 'providerMissing',
      );
    }
    final owner = _owner!;
    if (owner.retiring || manager!._closed) {
      return _result(
        id,
        FlaxPermissionState.unavailable,
        reason: 'installationUnavailable',
      );
    }
    if (owner.failed) {
      return _result(
        id,
        FlaxPermissionState.unavailable,
        reason: 'secureStorageUnavailable',
      );
    }
    final approved = (owner.record['declarations'] as Map)[id] as Map?;
    final rules = _provider(id).scope;
    final declaredScope = rules.normalize(declaration.scope);
    if (approved == null ||
        approved['revoked'] == true ||
        approved['digest'] !=
            manager!._declarationDigest(manifest!, id, declaredScope)) {
      return _result(id, FlaxPermissionState.denied, reason: 'notApproved');
    }
    if (!rules.covers(declaredScope, target)) {
      return _result(
        id,
        FlaxPermissionState.denied,
        reason: 'declaredScopeInsufficient',
      );
    }
    return null;
  }

  FlaxNativePermissionStatus _nativeStatus(String id, Object target) =>
      manager!._nativeStatus(id, target);

  FlaxPermissionResult? _hostCheck(
    String id,
    Object target, {
    bool requireFull = false,
  }) {
    final status = _nativeStatus(id, target);
    final state = status.state;
    if (state == FlaxPermissionState.unavailable ||
        state == FlaxPermissionState.unknown) {
      return _result(
        id,
        state,
        reason: status.reason ?? 'hostPermissionUnknown',
        serviceStatus: status.serviceStatus,
      );
    }
    if (state != FlaxPermissionState.granted &&
        state != FlaxPermissionState.limited) {
      return _result(
        id,
        FlaxPermissionState.denied,
        reason: status.reason ?? 'hostPermissionRequired',
        serviceStatus: status.serviceStatus,
      );
    }
    if (state == FlaxPermissionState.limited && status.scope == null) {
      return _result(
        id,
        FlaxPermissionState.unknown,
        reason: 'hostScopeUnknown',
        serviceStatus: status.serviceStatus,
      );
    }
    if (requireFull &&
        status.scope != null &&
        !_provider(id).scope
            .covers(_provider(id).scope.normalize(status.scope), target)) {
      return _result(
        id,
        FlaxPermissionState.denied,
        reason: 'hostScopeInsufficient',
        serviceStatus: status.serviceStatus,
      );
    }
    return null;
  }

  FlaxPermissionResult _state(String id, Object target) {
    final blocked = _precheck(id, target) ?? _hostCheck(id, target);
    if (blocked != null) return blocked;
    final owner = _owner!;
    final provider = _provider(id);
    final declaration = (owner.record['declarations'] as Map)[id] as Map;
    final decision = owner.decision(policy!.account, id);
    final native = _nativeStatus(id, target);
    Object? approved =
        provider.definition.authorization == FlaxPermissionAuthorization.install
        ? declaration['approvedScope'] ?? declaration['scope']
        : decision['approvedScope'];
    if (decision['revoked'] == true &&
        provider.definition.authorization ==
            FlaxPermissionAuthorization.runtime) {
      approved = null;
    }
    Object? effective = approved == null
        ? null
        : provider.scope.intersect(
            provider.scope.normalize(approved),
            provider.scope.normalize(declaration['scope']),
          );
    if (effective != null && native.scope != null) {
      effective = provider.scope.intersect(
        effective,
        provider.scope.normalize(native.scope),
      );
    }
    if (effective != null && provider.scope.covers(effective, target)) {
      return _result(
        id,
        FlaxPermissionState.granted,
        scope: effective,
        serviceStatus: native.serviceStatus,
      );
    }
    if (decision['revoked'] == true ||
        decision['lastDecision'] == 'deny' &&
            jsonEncode(decision['lastTarget']) == jsonEncode(target)) {
      return _result(
        id,
        FlaxPermissionState.denied,
        reason: 'moduleDenied',
        scope: effective,
        serviceStatus: native.serviceStatus,
      );
    }
    return _result(
      id,
      effective == null
          ? FlaxPermissionState.prompt
          : FlaxPermissionState.limited,
      scope: effective,
      serviceStatus: native.serviceStatus,
    );
  }

  Future<FlaxPermissionResult> query(String id, {Object? scope}) async {
    _requireOpen();
    final target = _scope(id, scope);
    final blocked = _precheck(id, target);
    if (blocked != null) return blocked;
    await manager!._refreshNative(id, target);
    _requireOpen();
    return _state(id, target);
  }

  Future<void> refresh() async {
    _requireOpen();
    await Future.wait([
      for (final id in manifest?.permissions.keys ?? const <String>[])
        query(id),
    ]);
  }

  Future<FlaxPermissionResult> request(String id, {Object? scope}) async {
    _requireOpen();
    final generation = _owner?.generation;
    var target = _scope(id, scope);
    final precheck = _precheck(id, target);
    if (precheck != null) return precheck;
    final owner = _owner!;
    final previous = owner.decision(policy!.account, id)['approvedScope'];
    if (previous != null && !_provider(id).scope.covers(previous, target)) {
      target = _scope(id, _provider(id).scope.combine(previous, target));
    }
    final revision = owner.record['revision'];
    final call = _PermissionCall();
    _requests.add(call);
    FlaxPermissionResult interrupted() {
      final blocked = _precheck(id, _scope(id, scope));
      if (blocked != null) return blocked;
      if (owner.decision(policy!.account, id)['revoked'] == true) {
        return _result(id, FlaxPermissionState.denied, reason: 'moduleDenied');
      }
      return _result(
        id,
        FlaxPermissionState.unavailable,
        reason: 'requestCancelled',
      );
    }

    try {
      await call.wait(manager!._refreshNative(id, target));
      _requireOpen();
      if (owner.generation != generation || call.cancelled) {
        return interrupted();
      }
      if (owner.record['revision'] != revision) {
        return _state(id, _scope(id, scope));
      }
      final current = _state(id, target);
      if (current.state == FlaxPermissionState.granted) return current;
      var blocked = _precheck(id, target);
      if (blocked != null) return blocked;
      blocked = _hostCheck(id, target, requireFull: true);
      if (blocked != null &&
          manager!.native is FlaxNativePermissionRequester &&
          _nativeStatus(id, target).canRequest) {
        if (!canInteract) {
          return _result(
            id,
            FlaxPermissionState.unavailable,
            reason: 'interactionRequired',
          );
        }
        final active = manager!._nativeRequest;
        if (active != null &&
            (active.request.isCancelled ||
                active.request.permission != id ||
                jsonEncode(active.request.scope) != jsonEncode(target))) {
          return _result(id, FlaxPermissionState.unavailable, reason: 'busy');
        }
        final flight = active ?? manager!._startNativeRequest(id, target);
        final waiter = Completer<void>();
        flight.waiters.add(waiter);
        call.detachNative = () => flight.remove(waiter);
        try {
          await call.wait(waiter.future);
          _requireOpen();
          if (owner.generation != generation ||
              call.cancelled ||
              flight.request.isCancelled) {
            return interrupted();
          }
        } finally {
          call.detachNative = null;
          flight.remove(waiter);
        }
        // A query started before native work settled cannot establish its result.
        await call.wait(
          flight.refreshed ??= manager!._refreshNative(id, target, force: true),
        );
        _requireOpen();
        if (owner.generation != generation || call.cancelled) {
          return interrupted();
        }
        blocked =
            _precheck(id, target) ?? _hostCheck(id, target, requireFull: true);
      }
      if (blocked != null) return blocked;
      final refreshed = _state(id, _scope(id, scope));
      if (refreshed.state == FlaxPermissionState.granted ||
          _provider(id).definition.authorization ==
              FlaxPermissionAuthorization.install) {
        return refreshed;
      }
      final callback = policy!.onRequest;
      if (!canInteract) {
        return _result(
          id,
          FlaxPermissionState.unavailable,
          reason: 'interactionRequired',
        );
      }
      if (callback == null) {
        return _result(
          id,
          FlaxPermissionState.unavailable,
          reason: 'moduleConsentUnavailable',
        );
      }
      final key = _permissionDigest([
        policy!.account,
        id,
        manifest!.permissions[id]!.purpose,
        (owner.record['declarations'] as Map)[id],
        target,
      ]);
      var pending = owner.consent;
      if (pending != null && pending.key != key) {
        return _result(id, FlaxPermissionState.unavailable, reason: 'busy');
      }
      if (pending == null) {
        final request = FlaxPermissionRequest._(
          appId: manifest!.appId,
          applicationName: manifest!.name ?? manifest!.appId,
          definition: _provider(id).definition,
          purpose: manifest!.purpose(id, policy!.locale),
          locale: policy!.locale,
          scope: target,
          approvedScope: previous == null ? null : _permissionData(previous),
        );
        pending = _PermissionConsent(id, key, request, owner.generation);
        owner.consent = pending;
        pending.waiters.add(this);
        call.consent = pending;
        unawaited(_consent(pending, callback));
      } else {
        pending.waiters.add(this);
        call.consent = pending;
      }
      try {
        await call.wait(pending.done.future);
        _requireOpen();
        if (call.cancelled) return interrupted();
        return _state(id, _scope(id, scope));
      } finally {
        pending.waiters.remove(this);
      }
    } finally {
      _requests.remove(call);
    }
  }

  Future<void> _consent(
    _PermissionConsent pending,
    FlaxPermissionRequestHandler callback,
  ) async {
    final owner = _owner!;
    // Pending refresh blocks APIs; actual restriction/invalidation cancels consent.
    bool valid() =>
        !pending.cancelled &&
        !owner.retiring &&
        !owner.failed &&
        owner.generation == pending.generation &&
        pending.waiters.any(
          (waiter) =>
              waiter._open &&
              waiter._precheck(pending.id, pending.request.scope) == null,
        );
    try {
      if (!valid()) return;
      Map<String, Object?>? requestedRecord;
      Object? requestedRevision;
      bool requestCurrent() =>
          valid() &&
          (requestedRecord == null ||
              owner.record['revision'] == requestedRevision);
      await manager!._commit(
        owner,
        () async {
          if (!requestCurrent()) return;
          requestedRevision = owner.record['revision'];
          final next = FlaxPermissionManager._clone(owner.record);
          _decisionIn(next, pending.id)['requested'] = true;
          requestedRecord = next;
          await manager!._save(owner, next);
        },
        isCurrent: requestCurrent,
        publish: () {
          if (requestedRecord != null) {
            owner.record = requestedRecord!;
          }
        },
      );
      if (!valid()) return;
      final decision = await Future.any([
        callback(pending.request),
        pending.request.whenCancelled.then(
          (_) => FlaxPermissionDecision.cancel,
        ),
      ]);
      if (!valid()) return;
      var failedWhileActive = false;
      try {
        await manager!._refreshNative(
          pending.id,
          pending.request.scope,
          onFailure: () => failedWhileActive = valid(),
        );
      } catch (_) {
        // Earlier retirement discards errors; this failure's own restriction does not.
        if (!failedWhileActive && !valid()) return;
        rethrow;
      }
      if (!valid()) return;
      Map<String, Object?>? candidate;
      Object? revision;
      bool decisionCurrent() =>
          valid() &&
          (candidate == null || owner.record['revision'] == revision);
      await manager!._commit(
        owner,
        () async {
          if (!decisionCurrent()) return;
          revision = owner.record['revision'];
          final next = FlaxPermissionManager._clone(owner.record);
          final data = _decisionIn(next, pending.id);
          data['requested'] = true;
          data['lastTarget'] = pending.request.scope;
          data['lastDecision'] = decision.name;
          data['lastRequestedAt'] = DateTime.now().toUtc().toIso8601String();
          if (decision == FlaxPermissionDecision.allow) {
            data['approvedScope'] = pending.request.scope;
            data['revoked'] = false;
          }
          next['revision'] = (next['revision'] as int) + 1;
          candidate = next;
          await manager!._save(owner, next);
        },
        isCurrent: decisionCurrent,
        publish: () {
          if (candidate != null) {
            owner.record = candidate!;
          }
        },
      );
    } catch (error, stack) {
      if (!pending.done.isCompleted) {
        pending.done.completeError(error, stack);
      } else if (!pending.errorDelivered) {
        if (onError != null) {
          onError!(error, stack);
        } else {
          Zone.current.handleUncaughtError(error, stack);
        }
      }
    } finally {
      if (identical(owner.consent, pending)) owner.consent = null;
      if (!pending.done.isCompleted) pending.done.complete();
    }
  }

  Map<String, Object?> _decisionIn(Map<String, Object?> record, String id) {
    final accounts = record['accounts'] as Map;
    final decisions = accounts.putIfAbsent(
      jsonEncode(policy!.account),
      () => <String, Object?>{},
    ) as Map;
    return decisions.putIfAbsent(id, () => <String, Object?>{})
        as Map<String, Object?>;
  }

  /// Synchronous checks preserve the original binding signature.
  void require(String id, {required String operation, Object? scope}) {
    final result = _state(id, _scope(id, scope));
    if (result.state != FlaxPermissionState.granted) {
      throw FlaxPermissionException(
        permission: id,
        operation: operation,
        reason: result.reason ?? result.state.name,
      );
    }
  }

  void requireBinding(
    FlaxPermissionDefinition definition,
    String operation,
    Object? receiver,
    Map<String, Object?> arguments,
  ) {
    final scope = _bindingScope(definition, operation, receiver, arguments);
    require(definition.id, operation: operation, scope: scope);
  }

  FlaxPermissionLease bindingLease(
    FlaxPermissionDefinition definition,
    String operation,
    Object? receiver,
    Map<String, Object?> arguments,
  ) => lease(
    definition.id,
    operation: operation,
    scope: _bindingScope(definition, operation, receiver, arguments),
  );

  Object? _bindingScope(
    FlaxPermissionDefinition definition,
    String operation,
    Object? receiver,
    Map<String, Object?> arguments,
  ) {
    final provider = _provider(definition.id);
    if (!FlaxPermissionManager._sameDefinition(
      provider.definition,
      definition,
    )) {
      throw StateError('Conflicting permission definition: ${definition.id}');
    }
    return provider.operationScope?.call(operation, receiver, arguments);
  }

  FlaxPermissionLease lease(
    String id, {
    required String operation,
    Object? scope,
  }) {
    final target = _scope(id, scope);
    require(id, operation: operation, scope: target);
    final lease = FlaxPermissionLease._(this, id, operation, target);
    _leases.add(lease);
    return lease;
  }

  FlaxPermissionLease network(Uri uri, {bool module = false}) {
    final id = module ? 'flax.module.remote' : 'flax.network';
    if (!(module ? {'http', 'https'} : {'http', 'https', 'ws', 'wss'}).contains(
          uri.scheme,
        ) ||
        !uri.hasAuthority ||
        uri.host.isEmpty ||
        uri.userInfo.isNotEmpty) {
      throw ArgumentError('Invalid network URL');
    }
    return lease(
      id,
      operation: module ? 'module.load' : 'network.open',
      scope: {
        'origins': [FlaxOriginPermissionScope.origin(uri)],
      },
    );
  }

  /// Headers are checked where Dart opens the transport, not only in the JS API.
  static void checkHostHeader(Uri uri, String value) {
    final header = Uri.tryParse('${uri.scheme}://$value');
    if (value.trim() != value ||
        header == null ||
        header.userInfo.isNotEmpty ||
        header.path.isNotEmpty ||
        header.hasQuery ||
        header.hasFragment ||
        FlaxOriginPermissionScope.origin(header) !=
            FlaxOriginPermissionScope.origin(uri)) {
      throw const FlaxPermissionException(
        permission: 'flax.network',
        operation: 'network.headers',
        reason: 'hostHeaderMismatch',
      );
    }
  }

  void _invalidate([String? id]) {
    for (final lease in _leases.toList()) {
      if (id == null || lease.permission == id) lease._invalidate();
    }
  }

  void _requireOpen() {
    if (!_open) throw StateError('FlaxSessionClosed');
  }

  void _cancelRequests({_PermissionConsent? except}) {
    for (final call in _requests.toList()) {
      if (except == null || !identical(call.consent, except)) call.cancel();
    }
  }

  Future<void> close() {
    if (!_open) return _closed!;
    _open = false;
    _closed = _owner?.queue ?? Future<void>.value();
    _cancelRequests();
    _invalidate();
    final owner = _owner;
    owner?.contexts.remove(this);
    final pending = owner?.consent;
    if (pending != null) {
      pending.waiters.remove(this);
      if (pending.waiters.isEmpty) owner!.cancelConsent();
    }
    return _closed!;
  }
}

/// A revocable authority for one resource. It never extends a Session lifetime.
final class FlaxPermissionLease {
  FlaxPermissionLease._(
    FlaxPermissionContext context,
    this.permission,
    this.operation,
    this.scope,
  ) : _owner = WeakReference(context);
  final WeakReference<FlaxPermissionContext> _owner;
  final String permission, operation;
  final Object scope;
  final _callbacks = <void Function()>{};
  final _pendingCalls = <void Function()>{};
  late final _delivery = FlaxPermissionDelivery(
    requireActive,
    <T>(Stream<T> stream) =>
        guardStream(() => stream, isBroadcast: stream.isBroadcast),
  );
  bool _active = true;
  bool get isActive => _active && _owner.target?.isOpen == true;
  String? get appId => _owner.target?.manifest?.appId;
  bool belongsTo(FlaxPermissionContext context) =>
      identical(_owner.target, context);

  void requireActive() {
    final context = _owner.target;
    if (context == null || !context.isOpen) {
      throw StateError('FlaxSessionClosed');
    }
    final caller =
        (Zone.current[FlaxPermissionContext._currentKey]
                as WeakReference<FlaxPermissionContext>?)
            ?.target;
    if (caller != null && !identical(caller, context)) {
      throw FlaxPermissionException(
        permission: permission,
        operation: operation,
        reason: 'foreignResource',
      );
    }
    if (!_active) {
      throw FlaxPermissionException(
        permission: permission,
        operation: operation,
        reason: 'revoked',
      );
    }
    context.require(permission, operation: operation, scope: scope);
  }

  void Function() onRevoke(void Function() callback) {
    if (!isActive) {
      callback();
      return () {};
    }
    _callbacks.add(callback);
    return () => _callbacks.remove(callback);
  }

  void _invalidate() {
    if (!_active) return;
    _active = false;
    _cancelCalls();
    _owner.target?._leases.remove(this);
    final callbacks = _callbacks.toList();
    _callbacks.clear();
    for (final callback in callbacks) {
      try {
        callback();
      } catch (error, stack) {
        Zone.current.handleUncaughtError(error, stack);
      }
    }
  }

  /// Release an already-finished resource without treating it as a revocation.
  void close() {
    _active = false;
    _cancelCalls();
    _callbacks.clear();
    _owner.target?._leases.remove(this);
  }

  /// Cancel this resource's authority without changing the module's saved decision.
  void cancel() => _invalidate();

  void _cancelCalls() {
    final pending = _pendingCalls.toList();
    _pendingCalls.clear();
    for (final cancel in pending) {
      cancel();
    }
  }

  /// The owner still closes its lease when the resource or one-shot call finishes.
  Future<T> guardFuture<T>(Future<T> Function() action) {
    try {
      requireActive();
    } catch (error, stack) {
      final future = Future<T>.error(error, stack);
      FlaxPermissionDelivery.attach(future, [_delivery]);
      return future;
    }
    final cancelled = Completer<T>();
    void cancel() {
      try {
        requireActive();
      } catch (error, stack) {
        cancelled.completeError(error, stack);
      }
    }

    _pendingCalls.add(cancel);
    final source = Future<T>.sync(action);
    final future = Future.any<T>([source, cancelled.future])
        .then<T>(
          (value) {
            requireActive();
            return value;
          },
          onError: (Object error, StackTrace stack) {
            requireActive();
            Error.throwWithStackTrace(error, stack);
          },
        )
        .whenComplete(() {
          // Completed reads must not stay attached to a long-lived resource lease.
          _pendingCalls.remove(cancel);
        });
    FlaxPermissionDelivery.inherit(source, future);
    FlaxPermissionDelivery.attach(future, [_delivery]);
    return future;
  }

  Stream<T> guardStream<T>(
    Stream<T> Function() create, {
    bool isBroadcast = false,
  }) {
    final stream =
        Stream<T>.multi((controller) {
              StreamSubscription<T>? subscription;
              void Function()? removeRevoke;
              var ended = false;
              Future<void> stop() async {
                ended = true;
                removeRevoke?.call();
                await subscription?.cancel();
              }

              try {
                requireActive();
                subscription = create().listen(
                  (value) {
                    if (ended) return;
                    try {
                      requireActive();
                      controller.addSync(value);
                    } catch (error, stack) {
                      ended = true;
                      controller.addErrorSync(error, stack);
                      controller.closeSync();
                      unawaited(stop());
                    }
                  },
                  onError: (Object error, StackTrace stack) {
                    if (!ended) controller.addErrorSync(error, stack);
                  },
                  onDone: () {
                    if (ended) return;
                    ended = true;
                    removeRevoke?.call();
                    controller.closeSync();
                  },
                );
                removeRevoke = onRevoke(() {
                  if (ended) return;
                  ended = true;
                  try {
                    requireActive();
                  } catch (error, stack) {
                    controller.addErrorSync(error, stack);
                  }
                  controller.closeSync();
                  unawaited(stop());
                });
                if (ended) removeRevoke();
                controller.onPause = () => subscription?.pause();
                controller.onResume = () => subscription?.resume();
                controller.onCancel = stop;
              } catch (error, stack) {
                controller.addErrorSync(error, stack);
                controller.closeSync();
              }
            }, isBroadcast: isBroadcast)
            .map((value) {
              // Check again after any pause/buffering in the downstream subscription.
              requireActive();
              return value;
            })
            .handleError((Object error, StackTrace stack) {
              requireActive();
              Error.throwWithStackTrace(error, stack);
            });
    FlaxPermissionDelivery.attach(stream, [_delivery]);
    return stream;
  }
}
