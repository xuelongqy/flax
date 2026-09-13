part of '../../bindings.dart';

// Flutter's default ErrorWidget requests a very large unconstrained size.
Widget _errorWidget(Object error) => ConstrainedBox(
  constraints: const BoxConstraints(maxWidth: 320, maxHeight: 80),
  child: ErrorWidget(error),
);

/// A descriptor can outlive its parent's snapshot while Flutter retires an Element.
/// Explicit leases keep JS references live until both owners have finished.
abstract class _Resource {
  int _references = 1;
  _ResourceCleanup? _cleanup;
  bool get released => (_cleanup?.references ?? _references) == 0;

  _ResourceCleanup get _detachedCleanup =>
      _cleanup ??= _ResourceCleanup(this, _references);
  void retain() {
    if (released) throw StateError('Released binding resource');
    if (_cleanup case final cleanup?) {
      cleanup.references++;
    } else {
      _references++;
    }
  }

  void release() {
    if (released) throw StateError('Binding resource released twice');
    if (_cleanup case final cleanup?) {
      cleanup.release();
    } else if (--_references == 0) {
      close();
    }
  }

  void validate() {}

  void close();
}

// Only escaped configurations need detached cleanup. The record shares the
// existing reference count, but never stores Widget data or a strong owner.
class _ResourceCleanup {
  _ResourceCleanup(_Resource resource, this.references)
    : owner = WeakReference(resource) {
    switch (resource) {
      case _Value():
        children = [
          for (final child in resource.resources) child._detachedCleanup,
        ];
      case FlaxNode():
        children = [
          for (final source in resource._sources.values)
            source._detachedCleanup,
        ];
      case _Source():
        children = [?resource._initial?._detachedCleanup];
        handle = resource.binding;
      case _ComponentDescription():
        handle = resource.input;
        componentSession = WeakReference(resource.session);
        componentId = resource.id;
      case _ObjectBorrow():
        handle = resource.wrapper;
      case _Callback():
        callback = resource._handle;
        children = [?resource._result?._detachedCleanup];
      case FlaxPageLease():
        children = [
          for (final source in resource._sources.values)
            source._detachedCleanup,
        ];
        handle = resource._descriptor;
      case FlaxRouteLease():
        children = [
          for (final source in resource._sources.values)
            source._detachedCleanup,
        ];
      default:
        throw StateError('Unsupported configuration resource');
    }
  }
  final WeakReference<_Resource> owner;
  int references;
  List<_ResourceCleanup> children = const [];
  FlaxJsObject? handle;
  _CallbackHandle? callback;
  WeakReference<_Session>? componentSession;
  int? componentId;

  void release() {
    if (references == 0) throw StateError('Binding resource released twice');
    if (--references != 0) return;
    if (owner.target case final resource?) {
      resource.close();
    } else {
      for (final child in children.reversed) {
        child.release();
      }
      final value = handle;
      if (value != null && !value.isReleased) value.release();
      callback?.release();
      final descriptions = componentSession?.target?._componentDescriptions;
      if (descriptions?[componentId]?.target == null) {
        descriptions?.remove(componentId);
      }
    }
    children = const [];
    handle = null;
    callback = null;
  }
}

final _widgetConfigurations = Expando<_WidgetConfiguration>();
final _widgetFinalizer = Finalizer<_WidgetConfiguration>(
  (record) => record.release(),
);

class _WidgetConfiguration {
  _WidgetConfiguration(_Session session, _Resource resource)
    : session = WeakReference(session),
      cleanup = resource._detachedCleanup {
    resource.retain();
    session._configurations.add(this);
  }
  final WeakReference<_Session> session;
  final _ResourceCleanup cleanup;
  bool released = false;

  void release() {
    if (released) return;
    released = true;
    session.target?._configurations.remove(this);
    cleanup.release();
  }
}

void _releaseJs(FlaxJsValue value) {
  if (value is FlaxJsObject) value.release();
}

T _property<T>(
  FlaxJsObject object,
  String name,
  T Function(FlaxJsValue) action,
) {
  final value = object.getProperty(name);
  try {
    return action(value);
  } finally {
    _releaseJs(value);
  }
}

String _textProperty(FlaxJsObject object, String name) =>
    _property(object, name, (value) {
      if (value is! FlaxJsString) {
        throw ArgumentError('Expected string field $name');
      }
      return value.value;
    });

class _Value extends _Resource {
  _Value(this.data, [this.resources = const []]);
  final Object? data;
  final List<_Resource> resources;
  void escapeCallbacks() {
    for (final resource in resources) {
      if (resource is _Callback) resource.escaped = true;
      if (resource is _Value) resource.escapeCallbacks();
    }
  }

  @override
  void validate() {
    for (final resource in resources) {
      resource.validate();
    }
  }

  @override
  void close() {
    for (final resource in resources.reversed) {
      resource.release();
    }
  }
}

enum _CallbackScope { member, ui }

// The generated Dart closure already owns its callback. This weak-key association
// identifies it when a Dart collection later becomes a Widget parameter.
final _callbackSources = Expando<_Callback>();

// The finalization token must not retain its callback owner or mounted State.
final _callbackFinalizer = Finalizer<_CallbackHandle>(
  (handle) => handle.release(),
);

class _CallbackHandle {
  _CallbackHandle(_Session owner, this.function)
    : session = WeakReference(owner) {
    owner._callbackHandles.add(this);
  }
  final WeakReference<_Session> session;
  final FlaxJsFunction function;
  int running = 0;
  bool retired = false;
  bool released = false;

  void release() {
    retired = true;
    if (running != 0 || released) return;
    released = true;
    session.target?._callbackHandles.remove(this);
    if (!function.isReleased) function.release();
  }
}

class _Callback extends _Resource implements FlaxCallback {
  _Callback(
    this.session,
    FlaxJsFunction function,
    this.signature, {
    this.scope = _CallbackScope.member,
    this.owner,
  }) : _handle = _CallbackHandle(session, function) {
    _callbackFinalizer.attach(this, _handle, detach: this);
  }
  final _Session session;
  final _CallbackHandle _handle;
  FlaxJsFunction get function => _handle.function;
  bool escaped = false;
  final FlaxCallbackBinding signature;
  final _CallbackScope scope;
  final _NodeState? owner;
  _Value? _result;
  bool get active =>
      !_handle.retired && session.active && (owner?._active ?? true);

  Object wrap() {
    final closure = signature.wrap(this);
    _callbackSources[closure] = this;
    return closure;
  }

  /// Revokes a callback whose Dart owner has deterministically released it.
  void retire() {
    _callbackFinalizer.detach(this);
    _handle.release();
  }

  _Callback mount(
    _NodeState owner,
    _Callback? previous, {
    bool nested = false,
  }) {
    if (!active) throw StateError('Retired JS callback');
    if (!identical(session, owner.widget.node._session)) {
      throw ArgumentError('Foreign JS callback');
    }
    final mountedSignature = nested && signature.result.kind == 'widget'
        ? FlaxCallbackBinding(
            signature.parameters,
            signature.result,
            signature.wrap,
            id: signature.id,
            invoke: signature.invoke,
            matches: signature.matches,
            independentWidgetResult: true,
          )
        : signature;
    final next = _Callback(
      session,
      function.retain() as FlaxJsFunction,
      mountedSignature,
      scope: _CallbackScope.ui,
      owner: owner,
    );
    // A replacement builder can fail before producing its first valid result.
    if (signature.result.kind == 'widget' &&
        !mountedSignature.independentWidgetResult) {
      next._result = previous?._result;
      next._result?.retain();
    }
    return next;
  }

  @override
  Object? call(
    List<Object?> positionalArguments,
    Map<String, Object?> namedArguments,
  ) {
    if (!active) {
      if (signature.result.kind == 'void') return null;
      throw StateError('Retired JS callback');
    }
    final temporary = <FlaxJsObject>[];
    final scoped = <_ScopedObjectLease>[];
    _handle.running++;
    try {
      final positional = signature.parameters
          .where((p) => p.positional)
          .toList();
      final named = signature.parameters.where((p) => !p.positional).toList();
      final requiredPositional = positional.where((p) => p.required).length;
      if (positionalArguments.length < requiredPositional ||
          positionalArguments.length > positional.length ||
          namedArguments.keys.any(
            (name) => !named.any((p) => p.name == name),
          ) ||
          named.any((p) => p.required && !namedArguments.containsKey(p.name))) {
        throw ArgumentError('Invalid callback arity');
      }
      final args = <FlaxJsValue>[
        function,
        FlaxJsNumber(positionalArguments.length.toDouble()),
      ];
      for (var i = 0; i < positionalArguments.length; i++) {
        args.add(
          positional[i].scoped
              ? session.scopedObjectResult(
                  positionalArguments[i]!,
                  positional[i].type,
                  scoped,
                  temporary,
                )
              : session.encodeArgument(
                  positionalArguments[i],
                  positional[i].encode,
                  owner,
                  temporary,
                  positional[i].encode.kind == 'error' &&
                          i + 1 < positionalArguments.length &&
                          positionalArguments[i + 1] is StackTrace
                      ? positionalArguments[i + 1] as StackTrace
                      : null,
                ),
        );
      }
      args.add(FlaxJsNumber(namedArguments.length.toDouble()));
      for (final entry in namedArguments.entries) {
        final parameter = named.firstWhere((p) => p.name == entry.key);
        args
          ..add(FlaxJsString(entry.key))
          ..add(
            parameter.scoped
                ? session.scopedObjectResult(
                    entry.value!,
                    parameter.type,
                    scoped,
                    temporary,
                  )
                : session.encodeArgument(
                    entry.value,
                    parameter.encode,
                    owner,
                    temporary,
                  ),
          );
      }
      late final FlaxJsValue value;
      try {
        value = session.helper('invokeCallback').call(args);
      } finally {
        for (final lease in scoped.reversed) {
          lease.release();
        }
        scoped.clear();
      }
      try {
        if (scope == _CallbackScope.member) return _memberResult(value);
        return switch (signature.result.kind) {
          'void' => _eventResult(value),
          'widget' => _builderResult(value),
          'route' => _routeResult(value),
          _ => _memberResult(value),
        };
      } finally {
        _releaseJs(value);
      }
    } catch (error, stack) {
      if (scope == _CallbackScope.member) rethrow;
      session.report(error, stack);
      if (signature.result.kind == 'widget') {
        return !signature.independentWidgetResult && _result != null
            ? _result!.data
            : _errorWidget(error);
      }
      if (signature.result.kind != 'void') rethrow;
      return null;
    } finally {
      for (final lease in scoped.reversed) {
        lease.release();
      }
      _handle.running--;
      if (_handle.retired) _handle.release();
      session.checkpoint();
      for (final value in temporary.reversed) {
        value.release();
      }
    }
  }

  Object? _memberResult(FlaxJsValue value) {
    if (signature.result.kind == 'void') return _eventResult(value);
    if (signature.result.kind == 'future') {
      return session.promiseResult(value, signature.result);
    }
    final decoded = session.decode(value, signature.result);
    try {
      decoded.escapeCallbacks();
      session.escapeWidget(decoded.data);
      return decoded.data;
    } finally {
      decoded.release();
    }
  }

  Object? _eventResult(FlaxJsValue value) {
    session.observeEvent(value);
    return null;
  }

  Widget? _builderResult(FlaxJsValue value) {
    if (owner == null) {
      throw StateError('Widget callbacks require a mounted owner');
    }
    final decoded = session.decode(value, signature.result);
    if (signature.independentWidgetResult) {
      if (decoded.data == null) {
        decoded.release();
        return null;
      }
      session._unmountedResults.add(decoded);
      return _IndependentResult(session, decoded);
    }
    final previous = _result;
    _result = decoded;
    _cleanup?.children = [decoded._detachedCleanup];
    previous?.release();
    return decoded.data as Widget?;
  }

  Object? _routeResult(FlaxJsValue value) {
    final decoded = session.decode(value, signature.result);
    try {
      for (final lease in decoded.resources.whereType<FlaxRouteLease>()) {
        lease._transfer();
      }
      return decoded.data;
    } finally {
      decoded.release();
    }
  }

  @override
  void close() {
    _result?.release();
    _result = null;
    if (!escaped) {
      _callbackFinalizer.detach(this);
      _handle.release();
    }
  }
}

class _Source extends _Resource {
  _Source(this.session, this.type, _Value initial, [this.binding])
    : _initial = initial;
  final _Session session;
  final FlaxTypeRef type;
  _Value? _initial;
  _Value get initial => _initial!;
  final FlaxJsObject? binding;
  bool sameBinding(_Source other) =>
      binding != null &&
      other.binding != null &&
      identical(session, other.session) &&
      type == other.type &&
      binding!.strictEquals(other.binding!);

  _Value seed() {
    if (binding == null) {
      initial.retain();
      return initial;
    }
    final preview = _initial;
    _initial = null;
    _cleanup?.children = const [];
    // Validation may precede source completion or a later mount. Read again so
    // the first rendered value matches the observer's current dependency state.
    final _Value current;
    try {
      current = read();
    } catch (error, stack) {
      if (preview == null) rethrow;
      // Keep the last valid value and still subscribe so later writes can recover.
      session.report(error, stack);
      return preview;
    }
    preview?.release();
    return current;
  }

  void discardPreview() {
    if (binding != null) {
      _initial?.release();
      _initial = null;
      _cleanup?.children = const [];
    }
  }

  _Value read() {
    if (binding == null) {
      initial.retain();
      return initial;
    }
    return _property(binding!, 'read', (read) {
      if (read is! FlaxJsFunction) {
        throw ArgumentError('Invalid binding reader');
      }
      final value = read.call(const []);
      try {
        return session.decode(value, type);
      } finally {
        _releaseJs(value);
      }
    });
  }

  FlaxJsFunction observe(int token) =>
      _property(binding!, 'observe', (observe) {
        if (observe is! FlaxJsFunction) {
          throw ArgumentError('Invalid binding observer');
        }
        final unsubscribe = observe.call([FlaxJsNumber(token.toDouble())]);
        if (unsubscribe is! FlaxJsFunction) {
          _releaseJs(unsubscribe);
          throw ArgumentError(
            'Binding observe must return an unsubscribe function',
          );
        }
        return unsubscribe;
      });

  @override
  void close() {
    _initial?.release();
    binding?.release();
  }
}
