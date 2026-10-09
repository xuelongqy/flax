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
        handle = resource.binding == null
            ? null
            : WeakReference(resource.binding!);
      case _ComponentDescription():
        handle = WeakReference(resource.input);
        componentSession = WeakReference(resource.session);
        componentId = resource.id;
      case _ObjectBorrow():
        handle = WeakReference(resource.wrapper);
      case _Callback():
        callback = WeakReference(resource._handle);
      case FlaxPageLease():
        children = [
          for (final source in resource._sources.values)
            source._detachedCleanup,
        ];
        handle = WeakReference(resource._descriptor);
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
  WeakReference<FlaxJsObject>? handle;
  WeakReference<_CallbackHandle>? callback;
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
      final value = handle?.target;
      if (value != null && !value.isReleased) value.release();
      callback?.target?.release();
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

// The session can close a pending finalizer's lease even after its Widget and
// configuration record were collected. Only detached metadata is indexed here.
class _WidgetCleanup {
  _WidgetCleanup(_Session session, _Resource resource)
    : session = WeakReference(session),
      resource = resource._detachedCleanup {
    resource.retain();
    session._widgetCleanups.add(this);
  }
  final WeakReference<_Session> session;
  final _ResourceCleanup resource;
  bool released = false;

  void release() {
    if (released) return;
    released = true;
    session.target?._widgetCleanups.remove(this);
    resource.release();
  }
}

class _WidgetConfiguration extends _BridgeReference {
  _WidgetConfiguration(super.session, _Resource resource)
    : resource = resource,
      cleanup = _WidgetCleanup(session, resource);
  final _WidgetCleanup cleanup;
  // A closed configuration remains an identity sentinel, without its resources.
  _Resource? resource;

  @override
  void close() {
    cleanup.release();
    resource = null;
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

class _CallbackHandle extends _BridgeReference {
  _CallbackHandle(super.session, this.function);
  final FlaxJsFunction function;

  @override
  void close() {
    if (!function.isReleased) function.release();
  }
}

class _Callback extends _Resource with _JsInvocation implements FlaxCallback {
  _Callback(
    this.session,
    FlaxJsFunction function,
    this.signature, {
    this.scope = _CallbackScope.member,
    this.owner,
    _BindingContext? bindingContext,
  }) : context = bindingContext ?? _bindingContext,
       _handle = _CallbackHandle(session, function) {
    _handle.attach(this);
  }
  @override
  final _Session session;
  @override
  final _CallbackHandle _handle;
  final _BindingContext? context;
  FlaxJsFunction get function => _handle.function;
  bool escaped = false;
  final FlaxCallbackBinding signature;
  @override
  final _CallbackScope scope;
  @override
  final _NodeState? owner;
  @override
  bool get active =>
      !_handle.retired && session.active && (owner?._active ?? true);

  Object wrap() {
    final closure = signature.wrap(this);
    _callbackSources[closure] = this;
    // The closure owns its facade already. The original JS function must not
    // retain every temporary Dart adaptation of that function.
    return closure;
  }

  /// Revokes a callback whose Dart owner has deterministically released it.
  void retire() {
    _handle.release();
  }

  _Callback mount(_NodeState owner) {
    if (!active) throw StateError('Retired JS callback');
    if (!identical(session, owner.widget.node._session)) {
      throw ArgumentError('Foreign JS callback');
    }
    return _Callback(
      session,
      function.retain() as FlaxJsFunction,
      signature,
      scope: _CallbackScope.ui,
      owner: owner,
      bindingContext: context,
    );
  }

  @override
  Object? call(List<Object?> positional, Map<String, Object?> named) =>
      context == null
      ? invoke(signature, positional, named).$2
      : context!.run(() => invoke(signature, positional, named).$2);

  @override
  FlaxJsObject get receiver => function;

  @override
  void close() {
    if (!escaped) _handle.release();
  }
}

// Both callback directions keep the same conversion and ownership rules.
mixin _JsInvocation {
  _Session get session;
  _BridgeReference get _handle;
  FlaxJsObject get receiver;
  _CallbackScope get scope;
  _NodeState? get owner;
  bool get active;
  (bool, Object?) invoke(
    FlaxCallbackBinding signature,
    List<Object?> positionalArguments,
    Map<String, Object?> namedArguments, {
    int? member,
  }) {
    if (!active) {
      if (signature.result.kind == 'void') return (true, null);
      throw StateError('Retired JS callback');
    }
    final temporary = <FlaxJsObject>[];
    final scoped = <_ScopedObjectLease>[];
    _handle.enter();
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
      final args = <FlaxJsValue>[];
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
      final namedArgs = <FlaxJsValue>[];
      for (final entry in namedArguments.entries) {
        final parameter = named.firstWhere((p) => p.name == entry.key);
        namedArgs
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
      late final FlaxJsValue? value;
      try {
        if (member == null) {
          value = session.helper('invokeCallback').call([
            receiver,
            FlaxJsNumber(positionalArguments.length.toDouble()),
            ...args,
            FlaxJsNumber(namedArguments.length.toDouble()),
            ...namedArgs,
          ]);
        } else {
          if (signature.parameters.any((p) => !p.positional)) {
            final options = session.helper('callbackOptions').call(namedArgs);
            if (options is! FlaxJsObject) {
              throw StateError('Invalid callback options');
            }
            temporary.add(options);
            args.add(options);
          }
          value = session.runtime.invokeProxyMember(receiver, member, args);
        }
      } finally {
        for (final lease in scoped.reversed) {
          lease.release();
        }
        scoped.clear();
      }
      if (value == null) return (false, null);
      try {
        if (scope == _CallbackScope.ui && signature.result.kind == 'route') {
          return (true, _routeResult(signature, value));
        }
        return (true, _memberResult(signature, value));
      } finally {
        _releaseJs(value);
      }
    } catch (error, stack) {
      if (scope == _CallbackScope.member) rethrow;
      session.report(error, stack);
      if (signature.result.kind == 'widget' && signature.result.id == null) {
        return (true, _errorWidget(error));
      }
      if (signature.result.kind == 'list' &&
          !signature.result.nullable &&
          signature.result.item?.kind == 'widget' &&
          signature.result.item?.nullable == false &&
          signature.result.item!.id == null) {
        return (true, List<Widget>.unmodifiable([_errorWidget(error)]));
      }
      if (signature.result.kind != 'void') rethrow;
      return (true, null);
    } finally {
      for (final lease in scoped.reversed) {
        lease.release();
      }
      _handle.leave();
      session.checkpoint();
      for (final value in temporary.reversed) {
        value.release();
      }
    }
  }

  Object? _memberResult(FlaxCallbackBinding signature, FlaxJsValue value) {
    if (signature.result.kind == 'void') return _eventResult(value);
    if (signature.result.kind == 'future') {
      return session.promiseResult(value, signature.result);
    }
    final decoded = session.decode(value, signature.result);
    try {
      decoded.escapeCallbacks();
      session.escapeWidget(decoded.data, signature.result);
      return decoded.data;
    } finally {
      decoded.release();
    }
  }

  Object? _eventResult(FlaxJsValue value) {
    session.observeEvent(value);
    return null;
  }

  Object? _routeResult(FlaxCallbackBinding signature, FlaxJsValue value) {
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
}

class _ProxyHandle extends _BridgeReference {
  _ProxyHandle(super.session, this.receiver);
  final FlaxJsObject receiver;
  @override
  void close() {
    if (!receiver.isReleased) receiver.release();
  }
}

class _ProxyPeer with _JsInvocation implements FlaxProxyPeer {
  _ProxyPeer(this.session, FlaxJsObject receiver, this.binding, this.first)
    : _handle = _ProxyHandle(session, receiver),
      context = _bindingContext {
    _handle.attach(this);
  }
  @override
  final _Session session;
  final FlaxProxyBinding binding;
  final int first;
  @override
  final _ProxyHandle _handle;
  final _BindingContext? context;
  @override
  FlaxJsObject get receiver => _handle.receiver;
  @override
  _CallbackScope get scope => _CallbackScope.member;
  @override
  _NodeState? get owner => null;
  @override
  bool get active => !_handle.retired && session.active;

  @override
  (bool, Object?) call(
    int member,
    List<Object?> positional,
    Map<String, Object?> named,
  ) {
    if (member < 0 || member >= binding.members.length) {
      throw ArgumentError('Unknown proxy member');
    }
    final signature = binding.members[member].signature;
    return context == null
        ? invoke(signature, positional, named, member: first + member)
        : context!.run(
            () => invoke(signature, positional, named, member: first + member),
          );
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
