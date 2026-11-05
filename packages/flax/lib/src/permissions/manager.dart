part of '../../permissions.dart';

/// Shared trusted installation and consent records for one storage backend.
/// Host code calls approveInstallation only after showing the static manifest.
final class FlaxPermissionManager {
  factory FlaxPermissionManager({
    FlaxSecureStorage? storage,
    FlaxNativePermissionAdapter? native,
    List<FlaxPermissionProvider> providers = const [],
    Iterable<FlaxPermissionDefinition> definitions = const [],
  }) {
    final backend = storage ?? FlaxSecureStorageRegistry.current;
    if (backend == null) {
      throw const FlaxSecureStorageException(
        FlaxSecureStorageFailure.unavailable,
      );
    }
    final existing = _managers[backend];
    if (existing != null && !existing._released) {
      existing._checkOpen();
      if (native != null && !identical(native, existing.native)) {
        throw StateError('One permission manager must own a storage backend');
      }
      existing.registerProviders(providers);
      existing.registerDefinitions(definitions);
      return existing;
    }
    final manager = FlaxPermissionManager._(backend, native);
    try {
      manager.registerProviders(providers);
      manager.registerDefinitions(definitions);
    } catch (_) {
      FlaxSecureStorageRegistry.users--;
      rethrow;
    }
    _managers[backend] = manager;
    return manager;
  }

  FlaxPermissionManager._(this.storage, this.native) {
    FlaxSecureStorageRegistry.users++;
    for (final definition in FlaxPermissionDefinitions.all) {
      _providers[definition.id] = FlaxPermissionProvider(
        definition,
        requiresNative:
            definition.authorization == FlaxPermissionAuthorization.runtime ||
            definition.id == 'flax.motion',
        scope: _standardPermissionScope(definition.id),
      );
    }
  }

  static final _managers = Expando<FlaxPermissionManager>();
  static const _hostOwner = 'flax.host.installations';
  final FlaxSecureStorage storage;
  final FlaxNativePermissionAdapter? native;
  final _providers = <String, FlaxPermissionProvider>{};
  final _owners = <String, _PermissionOwner>{};
  final _native = <String, Map<String, _NativePermissionObservation>>{};
  _NativePermissionFlight? _nativeRequest;
  int _nativeOrder = 0;
  Map<String, Object?>? _index;
  Future<void> _installationQueue = Future.value();
  bool _closed = false;
  bool _released = false;
  Future<void>? _closing;

  List<FlaxPermissionDefinition> get definitions => List.unmodifiable(
    _providers.values.map((provider) => provider.definition),
  );

  void registerDefinitions(Iterable<FlaxPermissionDefinition> definitions) {
    for (final definition in definitions) {
      final previous = _providers[definition.id];
      if (previous != null) {
        if (!_sameDefinition(previous.definition, definition)) {
          throw StateError('Conflicting permission: ${definition.id}');
        }
      } else {
        registerProviders([FlaxPermissionProvider(definition)]);
      }
    }
  }

  void registerProviders(Iterable<FlaxPermissionProvider> providers) {
    _checkOpen();
    for (final provider in providers) {
      final definition = provider.definition;
      if (!_permissionId(definition.id) ||
          definition.title.trim().isEmpty ||
          definition.version < 1 ||
          provider.version < 1) {
        throw ArgumentError('Invalid permission definition');
      }
      final previous = _providers[definition.id];
      if (previous != null) {
        if (!_sameDefinition(previous.definition, definition)) {
          throw StateError('Conflicting permission: ${definition.id}');
        }
        if (identical(previous, provider)) continue;
        if (_owners.isNotEmpty) {
          throw StateError('Cannot replace active permission scope semantics');
        }
      } else if (definition.id.startsWith('flax.')) {
        throw ArgumentError('The flax.* permission namespace is reserved');
      }
      _providers[definition.id] = provider;
    }
  }

  FlaxPermissionProvider provider(String id) {
    final provider = _providers[id];
    if (provider == null) {
      throw ArgumentError.value(id, 'id', 'Unknown permission');
    }
    return provider;
  }

  static bool _sameDefinition(
    FlaxPermissionDefinition a,
    FlaxPermissionDefinition b,
  ) =>
      a.id == b.id &&
      a.authorization == b.authorization &&
      a.title == b.title &&
      a.version == b.version;

  String _declarationDigest(
    FlaxPermissionManifest manifest,
    String id,
    Object scope,
  ) => _permissionDigest({
    'purpose': manifest.permissions[id]!.purpose,
    'scope': scope,
    'authorization': provider(id).definition.authorization.name,
    'definitionVersion': provider(id).definition.version,
    'providerVersion': provider(id).version,
  });

  Future<T> _install<T>(Future<T> Function() action) {
    _checkOpen();
    final result = _installationQueue.then((_) => action());
    _installationQueue = result.then<void>((_) {}, onError: (Object _) {});
    return result;
  }

  Future<Map<String, Object?>> _installations() async {
    if (_index case final existing?) return existing;
    final record = await _read('flax.installations', _hostOwner, 'state');
    if (record == null) return _index = <String, Object?>{};
    if (record['format'] != 1 || record['applications'] is! Map) {
      throw const FlaxSecureStorageException(
        FlaxSecureStorageFailure.integrityFailure,
      );
    }
    return _index = (record['applications'] as Map).cast<String, Object?>();
  }

  Future<void> _saveIndex(Map<String, Object?> index) async {
    try {
      await _write('flax.installations', _hostOwner, 'state', {
        'format': 1,
        'applications': index,
      });
      _index = index;
    } catch (_) {
      // An interrupted durable write may have committed; read it before retrying.
      _index = null;
      rethrow;
    }
  }

  /// Explicit host approval; no application code or OS permission request runs.
  Future<FlaxPermissionApplication> approveInstallation({
    required FlaxPermissionManifest manifest,
    required String sourceIdentity,
  }) => _install(() async {
    if (sourceIdentity.isEmpty) throw ArgumentError('Empty trusted source');
    final declarations = <String, Object?>{};
    for (final entry in manifest.permissions.entries) {
      final rules = provider(entry.key).scope;
      final scope = _permissionData(rules.normalize(entry.value.scope))!;
      declarations[entry.key] = {
        'digest': _declarationDigest(manifest, entry.key, scope),
        'scope': scope,
        'purpose': entry.value.purpose,
      };
    }
    final index = Map<String, Object?>.of(await _installations());
    final previous = index[manifest.appId] as Map?;
    if (previous != null && previous['source'] != sourceIdentity) {
      throw StateError(
        'Application source changed; uninstall before replacing',
      );
    }
    if (previous?['phase'] == 'retiring') {
      throw StateError(
        'Finish uninstall before reusing the application directory',
      );
    }
    final ownerId =
        previous?['owner'] as String? ??
        '${_permissionDigest(manifest.appId)}:${base64UrlEncode(List<int>.generate(24, (_) => Random.secure().nextInt(256)))}';
    if (previous == null) {
      index[manifest.appId] = {
        'source': sourceIdentity,
        'owner': ownerId,
        'phase': 'installing',
      };
      await _saveIndex(index);
    }
    final owner = _owners[ownerId] ??= _PermissionOwner(
      ownerId,
      manifest.appId,
      sourceIdentity,
    );
    await _load(owner);
    final generation = ++owner.generation;
    owner.cancelConsent();
    owner.invalidate();
    final revision = owner.record['revision'];
    final next = _clone(owner.record);
    final oldDeclarations = next['declarations'] as Map;
    for (final entry in declarations.entries) {
      final previous = oldDeclarations[entry.key] as Map?;
      final declaration = entry.value as Map<String, Object?>;
      if (previous?['digest'] == declaration['digest']) {
        for (final key in ['revoked', 'approvedScope']) {
          if (previous!.containsKey(key)) declaration[key] = previous[key];
        }
      }
    }
    final accounts = next['accounts'] as Map;
    for (final decisions in accounts.values.cast<Map<Object?, Object?>>()) {
      decisions.removeWhere(
        (id, _) =>
            !declarations.containsKey(id) ||
            (oldDeclarations[id] as Map?)?['digest'] !=
                (declarations[id] as Map)['digest'],
      );
    }
    next['declarations'] = declarations;
    next['defaultLocale'] = manifest.defaultLocale;
    next['name'] = manifest.name;
    next['revision'] = (next['revision'] as int) + 1;
    var cancelled = true;
    await _commit(
      owner,
      () async {
        await _save(owner, next);
      },
      isCurrent: () =>
          owner.generation == generation &&
          owner.record['revision'] == revision &&
          !owner.retiring &&
          !_closed,
      publish: () {
        owner.record = next;
        owner.failed = false;
        cancelled = false;
      },
    );
    if (cancelled) {
      throw StateError('Installation approval changed while saving');
    }
    index[manifest.appId] = {
      'source': sourceIdentity,
      'owner': ownerId,
      'phase': 'active',
    };
    await _saveIndex(index);
    return FlaxPermissionApplication._(this, owner, manifest);
  });

  /// Loads only previously approved identities; ordinary installation files are ignored.
  Future<FlaxPermissionApplication?> openApplication({
    required String appId,
    required String sourceIdentity,
  }) => _install(() async {
    final item = (await _installations())[appId] as Map?;
    if (item == null) return null;
    if (item['source'] != sourceIdentity || item['phase'] != 'active') {
      throw StateError('Application identity is unapproved or retiring');
    }
    final ownerId = item['owner'] as String;
    final owner = _owners[ownerId] ??= _PermissionOwner(
      ownerId,
      appId,
      sourceIdentity,
    );
    await _load(owner, requiredRecord: true);
    return FlaxPermissionApplication._(this, owner, _manifest(owner));
  });

  Future<List<String>> installedApplications() => _install(
    () async => List<String>.unmodifiable((await _installations()).keys),
  );

  FlaxPermissionManifest _manifest(_PermissionOwner owner) {
    final record = owner.record;
    return FlaxPermissionManifest(
      appId: owner.appId,
      name: record['name'] as String?,
      defaultLocale: record['defaultLocale'] as String? ?? 'en',
      permissions: {
        for (final entry in (record['declarations'] as Map).entries)
          entry.key as String: FlaxPermissionDeclaration(
            purpose: ((entry.value as Map)['purpose'] as Map)
                .cast<String, String>(),
            scope: (entry.value as Map)['scope'],
          ),
      },
    );
  }

  Future<void> _load(
    _PermissionOwner owner, {
    bool requiredRecord = false,
  }) async {
    if (owner.loaded) {
      if (owner.failed) {
        throw const FlaxSecureStorageException(
          FlaxSecureStorageFailure.ioFailure,
        );
      }
      return;
    }
    final value = await _read('flax.permissions', owner.id, 'state');
    if (value == null && requiredRecord) {
      throw const FlaxSecureStorageException(
        FlaxSecureStorageFailure.integrityFailure,
      );
    }
    if (value != null &&
        (value['format'] != 1 ||
            value['owner'] != owner.id ||
            value['appId'] != owner.appId ||
            value['source'] != owner.source ||
            value['declarations'] is! Map ||
            value['accounts'] is! Map ||
            value['revision'] is! int)) {
      throw const FlaxSecureStorageException(
        FlaxSecureStorageFailure.integrityFailure,
      );
    }
    owner.record =
        value ??
        {
          'format': 1,
          'owner': owner.id,
          'appId': owner.appId,
          'source': owner.source,
          'revision': 0,
          'declarations': <String, Object?>{},
          'accounts': <String, Object?>{},
        };
    final pending = await _read('flax.permissions', owner.id, 'pending');
    if (pending != null) {
      if (pending['format'] != 1 || pending['owner'] != owner.id) {
        throw const FlaxSecureStorageException(
          FlaxSecureStorageFailure.integrityFailure,
        );
      }
      // A process ended before its write was confirmed. Never revive that grant.
      for (final declaration
          in (owner.record['declarations'] as Map).values
              .cast<Map<Object?, Object?>>()) {
        declaration['revoked'] = true;
      }
      (owner.record['accounts'] as Map).clear();
      owner.record['revision'] = (owner.record['revision'] as int) + 1;
      try {
        await _save(owner, owner.record);
        await storage.delete(
          module: 'flax.permissions',
          owner: owner.id,
          key: 'pending',
        );
      } catch (error, stack) {
        _fail(owner, error, stack);
        rethrow;
      }
    }
    owner.loaded = true;
  }

  Future<Map<String, Object?>?> _read(
    String module,
    String owner,
    String key,
  ) async {
    final bytes = await storage.read(module: module, owner: owner, key: key);
    if (bytes == null) return null;
    try {
      return (jsonDecode(utf8.decode(bytes)) as Map).cast<String, Object?>();
    } catch (error) {
      throw FlaxSecureStorageException(
        FlaxSecureStorageFailure.integrityFailure,
        cause: error,
      );
    }
  }

  Future<void> _write(String module, String owner, String key, Object value) =>
      storage.write(
        module: module,
        owner: owner,
        key: key,
        value: Uint8List.fromList(utf8.encode(jsonEncode(value))),
      );

  Future<void> _save(_PermissionOwner owner, Map<String, Object?> record) =>
      _write('flax.permissions', owner.id, 'state', record);

  void _fail(
    _PermissionOwner owner,
    Object error,
    StackTrace stack, {
    bool notify = true,
  }) {
    if (!owner.failed) {
      owner.failed = true;
      owner.generation++;
    }
    // Consent receives the final storage error after marker recovery has finished.
    owner.invalidate(preserveConsent: true);
    if (!notify) return;
    final pending = owner.consent;
    if (pending != null && !pending.done.isCompleted) {
      pending.errorDelivered = true;
      pending.done.completeError(error, stack);
    }
    owner.cancelConsent();
  }

  Future<void> _commit(
    _PermissionOwner owner,
    Future<void> Function() action, {
    bool Function()? isCurrent,
    void Function()? publish,
  }) => owner.serialize(() async {
    var deletionAttempted = false;
    var markerRecoveryAttempted = false;
    Future<void> markPending() => _write(
      'flax.permissions',
      owner.id,
      'pending',
      {'format': 1, 'owner': owner.id},
    );
    Future<void> deletePending() {
      deletionAttempted = true;
      markerRecoveryAttempted = false;
      return storage.delete(
        module: 'flax.permissions',
        owner: owner.id,
        key: 'pending',
      );
    }

    Future<void> correct({bool rearm = false}) async {
      if (rearm) {
        markerRecoveryAttempted = true;
        await markPending();
      }
      await _save(owner, _clone(owner.record));
      await deletePending();
    }

    try {
      if (isCurrent?.call() == false) return;
      await markPending();
      await action();
      if (isCurrent?.call() == false) {
        await correct();
        return;
      }
      await deletePending();
      if (isCurrent?.call() == false) {
        await correct(rearm: true);
        return;
      }
      publish?.call();
    } catch (error, stack) {
      _fail(owner, error, stack, notify: false);
      Object failure = error;
      if (deletionAttempted && !markerRecoveryAttempted) {
        markerRecoveryAttempted = true;
        try {
          await markPending();
        } catch (recovery) {
          failure = FlaxSecureStorageException(
            FlaxSecureStorageFailure.ioFailure,
            cause: (original: error, recovery: recovery),
          );
        }
      }
      _fail(owner, failure, stack);
      Error.throwWithStackTrace(failure, stack);
    }
  });

  static Map<String, Object?> _clone(Map<String, Object?> value) =>
      (jsonDecode(jsonEncode(value)) as Map).cast<String, Object?>();

  /// Revokes this module only. Native host permissions remain unchanged.
  Future<void> revoke(
    FlaxPermissionApplication application,
    String id, {
    String? account,
    Object? scope,
  }) {
    final owner = _owned(application);
    final rules = provider(id).scope;
    final narrowed = scope == null ? null : rules.normalize(scope);
    final declaration = (owner.record['declarations'] as Map)[id] as Map?;
    if (declaration == null) throw ArgumentError('Undeclared permission');
    if (narrowed != null &&
        !rules.covers(declaration['scope'] as Object, narrowed)) {
      throw ArgumentError('Scope exceeds the approved declaration');
    }
    final install =
        provider(id).definition.authorization ==
        FlaxPermissionAuthorization.install;
    final decision = install ? declaration : owner.decision(account, id);
    final previous = install
        ? declaration['approvedScope'] ?? declaration['scope']
        : decision['approvedScope'];
    if (narrowed != null &&
        (decision['revoked'] == true ||
            previous == null ||
            !rules.covers(previous as Object, narrowed))) {
      throw ArgumentError('Revocation cannot expand the current approval');
    }
    owner.generation++;
    owner.cancelConsent();
    if (install) {
      if (narrowed == null) {
        declaration['revoked'] = true;
      } else {
        declaration['approvedScope'] = _permissionData(narrowed);
      }
    } else {
      final decision = owner.decision(account, id, create: true);
      decision['approvedScope'] = _permissionData(narrowed);
      decision['revoked'] = narrowed == null;
    }
    owner.invalidate(id: id);
    owner.record['revision'] = (owner.record['revision'] as int) + 1;
    return _commit(owner, () => _save(owner, _clone(owner.record)));
  }

  /// Restores a declared installation approval after trusted host confirmation.
  /// This never grants runtime consent; those permissions still need request().
  Future<void> approvePermission(
    FlaxPermissionApplication application,
    String id, {
    Object? scope,
  }) {
    final owner = _owned(application);
    final entry = provider(id);
    final install =
        entry.definition.authorization == FlaxPermissionAuthorization.install;
    if (!install && scope != null) {
      throw ArgumentError('Runtime scopes are approved through module consent');
    }
    final declaration = (owner.record['declarations'] as Map)[id] as Map?;
    if (declaration == null) throw ArgumentError('Undeclared permission');
    final target = _permissionData(
      entry.scope.normalize(scope ?? declaration['scope']),
    )!;
    if (!entry.scope.covers(declaration['scope'] as Object, target)) {
      throw ArgumentError('Scope exceeds the approved declaration');
    }
    final generation = ++owner.generation;
    owner.cancelConsent();
    owner.invalidate(id: id);
    Map<String, Object?>? candidate;
    Object? revision;
    bool current() =>
        !owner.retiring &&
        !_closed &&
        owner.generation == generation &&
        (candidate == null || owner.record['revision'] == revision);
    return _commit(
      owner,
      () async {
        if (!current()) return;
        revision = owner.record['revision'];
        final next = _clone(owner.record);
        final item = (next['declarations'] as Map)[id] as Map;
        item['revoked'] = false;
        if (install) item['approvedScope'] = target;
        next['revision'] = (next['revision'] as int) + 1;
        candidate = next;
        await _save(owner, next);
      },
      isCurrent: current,
      publish: () {
        if (candidate != null) {
          owner.record = candidate!;
          owner.failed = false;
        }
      },
    );
  }

  /// Retry the current fail-closed record, never reload a stale saved approval.
  Future<void> retryWrites(FlaxPermissionApplication application) {
    final owner = _owned(application);
    final generation = owner.generation;
    Object? revision;
    return _commit(
      owner,
      () async {
        revision = owner.record['revision'];
        await _save(owner, _clone(owner.record));
      },
      isCurrent: () =>
          !owner.retiring &&
          !_closed &&
          owner.generation == generation &&
          (revision == null || owner.record['revision'] == revision),
      publish: () {
        owner.failed = false;
      },
    );
  }

  /// Delete secure records before removing the ordinary application directory.
  /// The host must also stop non-permission consumers of this installation owner.
  Future<void> uninstall(
    String appId, {
    required Future<void> Function() removeFiles,
  }) => _install(() async {
    final index = Map<String, Object?>.of(await _installations());
    final item = index[appId] as Map?;
    if (item == null) return;
    final ownerId = item['owner'] as String;
    final owner = _owners[ownerId];
    if (owner != null) {
      owner.retiring = true;
      owner.generation++;
      owner.cancelConsent();
      owner.invalidate();
      for (final context in owner.contexts.toList()) {
        context.close();
      }
    }
    index[appId] = {...item, 'phase': 'retiring'};
    await _saveIndex(index);
    if (owner != null) await owner.queue;
    await storage.deleteOwner(owner: ownerId);
    await removeFiles();
    index.remove(appId);
    await _saveIndex(index);
    _owners.remove(ownerId);
  });

  /// Refresh safely queryable OS state after foregrounding or host settings changes.
  Future<void> refresh() async {
    _checkOpen();
    await Future.wait([
      for (final owner in _owners.values)
        for (final context in owner.contexts.toList()) context.refresh(),
    ]);
  }

  /// Invalidate before asynchronous foreground refresh; stale OS grants cannot win.
  void invalidateNative() {
    for (final owner in _owners.values) {
      final consent = owner.consent;
      if (consent != null && _needsNative(consent.id)) owner.cancelConsent();
    }
    for (final observations in _native.values) {
      for (final entry in observations.entries.toList()) {
        observations[entry.key] = _NativePermissionObservation(
          entry.value.target,
          ++_nativeOrder,
        );
      }
    }
  }

  void cancelRequests() {
    for (final owner in _owners.values) {
      owner.cancelConsent();
    }
  }

  _NativePermissionObservation? _nativeObservation(String id, Object target) {
    final rules = provider(id).scope;
    _NativePermissionObservation? latest;
    for (final entry
        in _native[id]?.values ?? const <_NativePermissionObservation>[]) {
      if ((latest == null || entry.order > latest.order) &&
          rules.covers(entry.target, target)) {
        latest = entry;
      }
    }
    return latest;
  }

  FlaxNativePermissionStatus _nativeStatus(String id, Object target) {
    if (!_needsNative(id)) {
      return const FlaxNativePermissionStatus.notRequired();
    }
    return _nativeObservation(id, target)?.status ??
        const FlaxNativePermissionStatus(state: FlaxPermissionState.unknown);
  }

  Future<FlaxNativePermissionStatus> _refreshNative(
    String id,
    Object scope, {
    bool force = false,
    void Function()? onFailure,
  }) {
    // Native-free targets must not allocate cache keys, generations or flights.
    if (!_needsNative(id)) {
      return Future.value(const FlaxNativePermissionStatus.notRequired());
    }
    _checkOpen();
    final rules = provider(id).scope;
    final target = _permissionData(rules.normalize(scope))!;
    final key = jsonEncode(target);
    final observations = _native.putIfAbsent(id, () => {});
    final previous = observations[key];
    final pending = previous?.pending;
    if (!force && pending != null) {
      if (onFailure != null) previous!.failureObservers.add(onFailure);
      return pending;
    }
    final observation = _NativePermissionObservation(target, ++_nativeOrder);
    if (onFailure != null) observation.failureObservers.add(onFailure);
    observations[key] = observation;
    bool current() => !_closed && identical(observations[key], observation);

    Future<FlaxNativePermissionStatus> query() async {
      FlaxNativePermissionStatus status;
      try {
        final response =
            await native?.query(id, target) ??
            const FlaxNativePermissionStatus(
              state: FlaxPermissionState.unavailable,
              reason: 'nativeAdapterUnavailable',
            );
        status = FlaxNativePermissionStatus(
          state: response.state,
          scope: response.scope == null
              ? null
              : _permissionData(rules.normalize(response.scope)),
          reason: response.reason,
          serviceStatus: response.serviceStatus,
          canRequest: response.canRequest,
        );
      } catch (_) {
        // Capture failure ownership before restrictions can retire its callers.
        for (final notify in observation.failureObservers) {
          notify();
        }
        if (current()) {
          observation.status = const FlaxNativePermissionStatus(
            state: FlaxPermissionState.unknown,
          );
          _restrictNative(id, observation);
        }
        rethrow;
      }
      if (!current()) return _nativeStatus(id, target);
      observation.status = status;
      _restrictNative(id, observation);
      return status;
    }

    final future = query();
    observation.pending = future;
    void clear() {
      observation.failureObservers.clear();
      // An old result/error cannot remove the replacement flight for this target.
      if (identical(observations[key], observation)) observation.pending = null;
    }

    unawaited(
      future.then<void>(
        (_) => clear(),
        onError: (Object _, StackTrace _) => clear(),
      ),
    );
    return future;
  }

  _NativePermissionFlight _startNativeRequest(String id, Object target) {
    final flight = _NativePermissionFlight(
      FlaxNativePermissionRequest._(id, target),
    );
    _nativeRequest = flight;
    // Register callers before host code can observe cancellation or complete.
    scheduleMicrotask(() async {
      try {
        if (!flight.request.isCancelled) {
          await (native as FlaxNativePermissionRequester).request(
            flight.request,
          );
        }
        for (final waiter in flight.waiters) {
          if (!waiter.isCompleted) waiter.complete();
        }
      } catch (error, stack) {
        for (final waiter in flight.waiters) {
          if (!waiter.isCompleted) waiter.completeError(error, stack);
        }
      } finally {
        flight.settled = true;
        // Cancelled callers cannot free this slot while OS work is still active.
        if (identical(_nativeRequest, flight)) _nativeRequest = null;
      }
    });
    return flight;
  }

  void _restrictNative(String id, _NativePermissionObservation observation) {
    final rules = provider(id).scope;
    Object? allowedBy(_NativePermissionObservation entry) {
      final status = entry.status;
      if (status.state == FlaxPermissionState.granted && status.scope == null) {
        return entry.target;
      }
      if ((status.state == FlaxPermissionState.granted ||
              status.state == FlaxPermissionState.limited) &&
          status.scope != null) {
        return rules.intersect(entry.target, status.scope!);
      }
      return null;
    }

    final allowed = allowedBy(observation);
    if (allowed != null && rules.covers(allowed, observation.target)) return;
    bool restricted(Object target) {
      final overlap = rules.intersect(observation.target, target);
      return overlap != null &&
          (allowed == null || !rules.covers(allowed, overlap));
    }

    final observations = _native[id]!;
    observations.removeWhere(
      (_, other) => other.order < observation.order && restricted(other.target),
    );
    bool restrictedResource(Object target) {
      if (!restricted(target)) return false;
      final latest = _nativeObservation(id, target);
      if (latest != null && latest.order > observation.order) {
        final currentRange = allowedBy(latest);
        if (currentRange != null && rules.covers(currentRange, target)) {
          return false;
        }
      }
      return true;
    }

    for (final owner in _owners.values) {
      for (final context in owner.contexts.toList()) {
        for (final lease in context._leases.toList()) {
          if (lease.permission == id && restrictedResource(lease.scope)) {
            lease._invalidate();
          }
        }
      }
      final consent = owner.consent;
      if (consent != null &&
          consent.id == id &&
          restrictedResource(consent.request.scope)) {
        owner.cancelConsent(id);
      }
    }
  }

  bool _needsNative(String id) => provider(id).requiresNative;

  _PermissionOwner _owned(FlaxPermissionApplication application) {
    _checkOpen();
    if (!identical(application.manager, this) || application._owner.retiring) {
      throw StateError('Application installation is unavailable');
    }
    return application._owner;
  }

  void _checkOpen() {
    if (_closed) throw StateError('Permission manager is closed');
  }

  Future<void> close() {
    if (_closing case final pending?) return pending;
    final done = Completer<void>();
    _closing = done.future;
    _close().then(done.complete, onError: done.completeError);
    return done.future;
  }

  Future<void> _close() async {
    _closed = true;
    for (final owner in _owners.values) {
      owner.generation++;
      owner.cancelConsent();
      for (final context in owner.contexts.toList()) {
        context.close();
      }
    }
    await _installationQueue;
    await Future.wait(_owners.values.map((owner) => owner.queue));
    FlaxSecureStorageRegistry.users--;
    _released = true;
  }
}

// A query target proves applicability; a returned scope alone does not.
final class _NativePermissionObservation {
  _NativePermissionObservation(this.target, this.order);
  final Object target;
  final int order;
  FlaxNativePermissionStatus status = const FlaxNativePermissionStatus(
    state: FlaxPermissionState.unknown,
    reason: 'hostPermissionRefreshing',
  );
  Future<FlaxNativePermissionStatus>? pending;
  final failureObservers = <void Function()>[];
}

final class _NativePermissionFlight {
  _NativePermissionFlight(this.request);
  final FlaxNativePermissionRequest request;
  final waiters = <Completer<void>>{};
  Future<FlaxNativePermissionStatus>? refreshed;
  bool settled = false;

  void remove(Completer<void> waiter) {
    waiters.remove(waiter);
    if (!waiter.isCompleted) waiter.complete();
    if (waiters.isEmpty && !settled && !request.isCancelled) {
      request._cancelled.complete();
    }
  }
}

// One caller can retire while its shared native/query/consent work continues.
final class _PermissionCall {
  bool cancelled = false;
  _PermissionConsent? consent;
  void Function()? detachNative;
  Completer<void>? _waiting;

  Future<void> wait<T>(Future<T> source) {
    final done = Completer<void>();
    _waiting = done;
    unawaited(
      source.then<void>(
        (_) {
          if (!done.isCompleted) done.complete();
        },
        onError: (Object error, StackTrace stack) {
          if (!done.isCompleted) done.completeError(error, stack);
        },
      ),
    );
    if (cancelled && !done.isCompleted) done.complete();
    return done.future.whenComplete(() => _waiting = null);
  }

  void cancel() {
    if (cancelled) return;
    cancelled = true;
    detachNative?.call();
    final waiting = _waiting;
    if (waiting != null && !waiting.isCompleted) waiting.complete();
  }
}

/// Host-issued proof of the currently approved installation, not a JS credential.
final class FlaxPermissionApplication {
  FlaxPermissionApplication._(this.manager, this._owner, this.manifest);
  final FlaxPermissionManager manager;
  final _PermissionOwner _owner;
  final FlaxPermissionManifest manifest;
  String get appId => _owner.appId;
  String get owner => _owner.id;
}

final class _PermissionOwner {
  _PermissionOwner(this.id, this.appId, this.source);
  final String id, appId, source;
  var record = <String, Object?>{};
  bool loaded = false, retiring = false, failed = false;
  int generation = 0;
  Future<void> queue = Future.value();
  final contexts = <FlaxPermissionContext>{};
  _PermissionConsent? consent;

  Future<T> serialize<T>(Future<T> Function() action) {
    final result = queue.then((_) => action());
    queue = result.then<void>((_) {}, onError: (Object _) {});
    return result;
  }

  Map<String, Object?> decision(
    String? account,
    String id, {
    bool create = false,
  }) {
    final key = jsonEncode(account);
    final accounts = record['accounts'] as Map;
    if (create) {
      final decisions =
          accounts.putIfAbsent(key, () => <String, Object?>{}) as Map;
      return decisions.putIfAbsent(id, () => <String, Object?>{})
          as Map<String, Object?>;
    }
    return ((accounts[key] as Map?)?[id] as Map?)?.cast<String, Object?>() ??
        {};
  }

  void invalidate({String? id, bool preserveConsent = false}) {
    for (final context in contexts.toList()) {
      context._cancelRequests(except: preserveConsent ? consent : null);
      context._invalidate(id);
    }
  }

  void cancelConsent([String? id]) {
    final pending = consent;
    if (pending == null || id != null && pending.id != id) return;
    pending.cancel();
    consent = null;
  }
}

final class _PermissionConsent {
  _PermissionConsent(this.id, this.key, this.request, this.generation);
  final String id, key;
  final FlaxPermissionRequest request;
  final int generation;
  final waiters = <FlaxPermissionContext>{};
  final done = Completer<void>();
  bool cancelled = false;
  bool errorDelivered = false;
  void cancel() {
    cancelled = true;
    if (!request._cancelled.isCompleted) request._cancelled.complete();
    if (!done.isCompleted) done.complete();
  }
}
