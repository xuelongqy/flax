part of '../../bindings.dart';

/// Install on the Navigator used by generated Route-producing functions.
/// Each observer belongs to one Navigator; it can serve multiple Flax sessions.
class FlaxNavigatorObserver extends NavigatorObserver {
  _TopLevelRouteCall? _call;

  @override
  void didPush(Route<dynamic> route, Route<dynamic>? previousRoute) {
    _call?.accept(route);
  }
}

class _TopLevelRouteCall {
  _TopLevelRouteCall(this.session, this.lease);
  final _Session session;
  final FlaxRouteLease lease;
  int accepted = 0;
  int _remaining = 0;
  Object? error;

  void accept(Route<dynamic> route) {
    if (route is! TransitionRoute<Object?>) {
      error = StateError('Route functions require a TransitionRoute');
      return;
    }
    accepted++;
    _remaining++;
    lease._transfer();
    if (route is ModalRoute<Object?>) session._heldRoutes.add(route);
    void finish() {
      if (route is ModalRoute<Object?>) session._heldRoutes.remove(route);
      if (--_remaining == 0) lease.routeDisposed();
    }

    unawaited(
      route.completed.then(
        (_) => finish(),
        onError: (Object e, StackTrace s) {
          session.report(e, s);
          finish();
        },
      ),
    );
  }

  Object? invoke(
    FlaxNavigatorObserver observer,
    FlaxFunctionBinding function,
    Map<String, Object?> values,
  ) {
    final previous = observer._call;
    observer._call = this;
    try {
      final result = function.invoke(values);
      if (error != null) throw error!;
      if (accepted != 1) {
        throw StateError(
          'Route functions must synchronously push exactly one Route',
        );
      }
      return result;
    } finally {
      observer._call = previous;
    }
  }
}

/// Generated Routes release at dispose; observed Routes release at completed.
/// A call owns the initial lease; a successfully handed-off Route owns another.
class FlaxRouteLease extends _Resource {
  FlaxRouteLease._(this._session, this._sources);
  final _Session _session;
  final Map<String, _Source> _sources;
  void Function()? onDiscard;
  bool _transferred = false;
  bool _disposed = false;

  // The lease already owns the generated typed closure. Returning it preserves
  // its exact signature and Widget interface without adding an Element.
  T builder<T extends Function>(String name) =>
      _sources[name]!.initial.data as T;

  void _transfer() {
    if (_transferred) return;
    _transferred = true;
    retain();
    _session.retainRoute();
  }

  /// Called at native Route disposal or observed transition completion.
  void routeDisposed() {
    if (_disposed) return;
    _disposed = true;
    if (_transferred) {
      release();
    }
    if (_transferred) _session.releaseRoute();
  }

  @override
  void close() {
    for (final source in _sources.values) {
      source.release();
    }
    if (!_disposed) onDiscard?.call();
  }
}

class _StateReference {
  _StateReference(State state, this.type) : target = WeakReference(state);
  final WeakReference<State> target;
  final String type;
  State? get mounted {
    final state = target.target;
    return state != null && state.mounted ? state : null;
  }
}

extension _Navigation on _Session {
  _Value decodeRoute(
    FlaxJsObject descriptor,
    FlaxRouteBinding definition,
    String ctor,
  ) {
    if (closing) throw StateError('The Flax session is closing');
    final parameters = definition.constructors[ctor];
    if (parameters == null) {
      throw ArgumentError('Unsupported Route constructor');
    }
    final sources = _inBindingContext(
      definition.id,
      () => _arguments(
        descriptor,
        parameters,
        allowBindings: false,
        uiCallbacks: [
          for (final parameter in parameters)
            if (parameter.type.kind == 'callback' &&
                parameter.type.callback!.result.kind == 'widget')
              parameter.name,
        ],
      ),
    );
    final lease = FlaxRouteLease._(this, sources);
    try {
      final route = definition.create(
        ctor,
        sources.map((name, source) => MapEntry(name, source.initial.data)),
        lease,
      );
      return _Value(route, [lease]);
    } catch (_) {
      lease.release();
      rethrow;
    }
  }

  FlaxJsValue stateResult(State state, FlaxTypeRef type) {
    if (!state.mounted) throw StateError('Unmounted State');
    _states.removeWhere((_, ref) => ref.mounted == null);
    final id = _stateIds[state] ??= _nextState++;
    _states[id] = _StateReference(state, type.id!);
    // Wrappers do not own the Flutter State or need a native reference cache.
    return helper('state')
        .call([FlaxJsString(type.id!), FlaxJsNumber(id.toDouble())]);
  }
}
