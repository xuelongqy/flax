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

  late final _bodyBinding = FlaxWidgetBinding(
    'flax:route-body',
    {},
    (node) => _RouteBody(node, this),
  );

  WidgetBuilder builder(String name) {
    final source = _sources[name]!;
    return (context) {
      source.initial.retain();
      final input = _Source(_session, source.type, source.initial);
      final node = FlaxNode._(_session, _bodyBinding, '', {'builder': input});
      // The Route owns the descriptor until the content's first mount, after which
      // that host owns its own lease. This also handles content rebuilt offstage.
      return _bodyBinding.createHost(node);
    };
  }

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
    for (final node in _previews.toList()) {
      node.release();
    }
    _previews.clear();
    if (_transferred) _session.releaseRoute();
  }

  final _previews = <FlaxNode>{};

  @override
  void close() {
    for (final source in _sources.values) {
      source.release();
    }
    if (!_disposed) onDiscard?.call();
  }
}

class _RouteBody extends FlaxWidgetHost {
  _RouteBody(super.node, this.lease) {
    lease._previews.add(node);
  }
  final FlaxRouteLease lease;
  @override
  Widget buildNative(Map<String, Object?> values) =>
      Builder(builder: values['builder'] as WidgetBuilder);
  @override
  State<FlaxWidgetHost> createState() => _RouteBodyState();
}

class _RouteBodyState extends _NodeState {
  void _accept(_RouteBody body) {
    if (body.lease._previews.remove(body.node)) body.node.release();
  }

  @override
  void initState() {
    super.initState();
    _accept(widget as _RouteBody);
  }

  @override
  void didUpdateWidget(covariant FlaxWidgetHost oldWidget) {
    super.didUpdateWidget(oldWidget);
    _accept(widget as _RouteBody);
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
    final sources = _arguments(descriptor, parameters, allowBindings: false);
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
