part of '../../bindings.dart';

// These weak associations describe who may still call JS, not who owns the value.
bool _isNavigationObservers(FlaxTypeRef type) =>
    type.kind == 'list' &&
    type.item?.id == 'flax.core/flutter#type:NavigatorObserver';

final _navigationSessions = Expando<_WeakReferences<_Session>>();
final _navigationObservers = _WeakReferences<FlaxNavigatorObserver>();

/// Install on a host Navigator accepting Flax Routes, Pages or Route functions.
/// Generated Widget observer-list inputs install a private instance as well.
class FlaxNavigatorObserver extends NavigatorObserver {
  FlaxNavigatorObserver() {
    _navigationObservers.add(this);
  }

  _NavigationCall? _call;
  final _routes = <TransitionRoute<Object?>, Set<_Session>>{};

  void _track(Route<dynamic> route) {
    final owners = <_Session>{
      ...?_navigationSessions[route],
      ...?_navigationSessions[route.settings],
    };
    if (owners.isEmpty && !_routes.containsKey(route)) return;
    if (route is! TransitionRoute<Object?>) {
      throw StateError('Flax navigation requires a TransitionRoute');
    }
    final sessions = _routes.putIfAbsent(route, () {
      unawaited(route.completed.then((_) => _routes.remove(route)));
      return <_Session>{};
    });
    for (final session in owners.difference(sessions)) {
      session.holdPageRoute(route);
    }
    for (final session in sessions.difference(owners)) {
      session.releasePageRoute(route);
    }
    _routes[route] = owners;
  }

  // Flutter can replace Page settings without pushing another Route. Refresh
  // before closing so the current configuration, not an obsolete Page, owns it.
  void _refresh() {
    for (final route in _routes.keys.toList()) {
      _track(route);
    }
  }

  @override
  void didPush(Route<dynamic> route, Route<dynamic>? previousRoute) {
    _call?.accept(route);
    _track(route);
  }

  @override
  void didReplace({Route<dynamic>? newRoute, Route<dynamic>? oldRoute}) {
    if (newRoute != null) {
      _call?.accept(newRoute);
      _track(newRoute);
    }
  }
}

FlaxNavigatorObserver _requireNavigationObserver(NavigatorState navigator) =>
    navigator.widget.observers
        .whereType<FlaxNavigatorObserver>()
        .where((observer) => identical(observer.navigator, navigator))
        .firstOrNull ??
    (throw StateError(
      'Install FlaxNavigatorObserver in the target Navigator.observers or app navigatorObservers',
    ));

class _NavigationCall {
  _NavigationCall(this.session);
  final _Session session;
  int accepted = 0;
  Object? error;

  void accept(Route<dynamic> route) {
    if (route is! TransitionRoute<Object?>) {
      error = StateError('Route functions require a TransitionRoute');
      return;
    }
    accepted++;
    session.registerNavigationValue(route);
    session.holdPageRoute(route);
  }

  Object? invoke(
    FlaxNavigatorObserver observer,
    Object? Function() call, {
    Object? route,
  }) {
    // Push/replace pass their first argument here; replacement results stay data.
    if (route is Route && route is! TransitionRoute<Object?>) {
      throw ArgumentError('Flax navigation requires a TransitionRoute');
    }
    final previous = observer._call;
    observer._call = this;
    try {
      final result = call();
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

class _StateReference {
  _StateReference(State state, this.type, {bool pending = false})
    : target = WeakReference(state),
      pendingState = pending ? state : null;
  final WeakReference<State> target;
  final String type;
  State? pendingState;
  bool claimed = false;
  State? get mounted {
    final state = target.target;
    return state != null && state.mounted ? state : null;
  }
}

extension _Navigation on _Session {
  void registerNavigationValue(Object value) {
    if (value is! Route && value is! Page) return;
    final sessions = _navigationSessions[value] ??= _WeakReferences<_Session>();
    if (!sessions.contains(this)) sessions.add(this);
  }

  FlaxJsValue stateResult(State state, FlaxTypeRef type) {
    final binding = dartTypes.bindingFor(
      _specializedOwners[type.id] ?? type.id!,
      state,
    );
    final idType = binding?.id ?? type.id!;
    final pending = !state.mounted;
    if (pending && _nativeStateFactories.isEmpty) {
      throw StateError('Unmounted State');
    }
    _states.removeWhere(
      (_, ref) => ref.mounted == null && ref.pendingState == null,
    );
    final views = _stateIds[state] ??= {};
    final id = views.putIfAbsent(idType, () => _nextState++);
    _states.putIfAbsent(
      id,
      () => _StateReference(state, idType, pending: pending),
    );
    if (pending) _nativeStateFactories.last.add(id);
    // Wrappers do not own the Flutter State or need a native reference cache.
    return helper('state').call([
      FlaxJsString(idType),
      FlaxJsNumber(id.toDouble()),
      FlaxJsString(_specializedOwners[idType] ?? idType),
    ]);
  }
}
