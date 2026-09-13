part of '../../bindings.dart';

/// Context ownership shared by generated properties and application components.
mixin _ContextOwner {
  bool _active = true;
  final _contexts = Map<BuildContext, _ContextReference>.identity();

  void _closeContexts() {
    _active = false;
    for (final reference in _contexts.values.toList()) {
      reference.close();
    }
  }
}

/// A matching token, not a Dart class. It must not retain the session or JS handles.
class _ComponentType implements Type {
  _ComponentType(this.sessionId, this.id, this.name, this.stateful);
  final int sessionId;
  final int id;
  final String name;
  final bool stateful;

  @override
  String toString() => '$name@$sessionId:$id';
}

int _nextComponentSession = 1;

class _ComponentDescription extends _Resource {
  _ComponentDescription(
    this.session,
    this.id,
    this.type,
    this.stateful,
    this.input,
    this.key,
  );
  final _Session session;
  final int id;
  final _ComponentType type;
  final bool stateful;
  final FlaxJsObject input;
  final Key? key;
  WeakReference<Widget>? _widget;
  Widget get widget {
    final existing = _widget?.target;
    if (existing != null) return existing;
    final result = stateful
        ? _ComponentStateful(this, key: key)
        : _ComponentStateless(this, key: key);
    _widget = WeakReference(result);
    return result;
  }

  @override
  void close() {
    if (identical(session._componentDescriptions[id]?.target, this)) {
      session._componentDescriptions.remove(id);
    }
    input.release();
  }
}

class _ComponentStateless extends StatelessWidget {
  const _ComponentStateless(this.description, {super.key});
  final _ComponentDescription description;
  @override
  Type get runtimeType => description.type;
  @override
  StatelessElement createElement() => _ComponentElement(this);
  @override
  Widget build(BuildContext context) =>
      (context as _ComponentElement).scope.build(context);
}

class _ComponentElement extends StatelessElement {
  _ComponentElement(_ComponentStateless super.widget);
  late final _ComponentMount scope;

  @override
  void mount(Element? parent, Object? newSlot) {
    scope = _ComponentMount((widget as _ComponentStateless).description);
    super.mount(parent, newSlot);
  }

  @override
  void update(covariant _ComponentStateless newWidget) {
    scope.update(newWidget.description);
    super.update(newWidget);
  }

  @override
  void deactivate() {
    scope._active = false;
    super.deactivate();
  }

  @override
  void activate() {
    super.activate();
    scope._active = true;
  }

  @override
  void unmount() {
    try {
      super.unmount();
    } finally {
      scope.close();
    }
  }
}

class _ComponentStateful extends StatefulWidget {
  const _ComponentStateful(this.description, {super.key});
  final _ComponentDescription description;
  @override
  Type get runtimeType => description.type;
  // The Flutter createState boundary is where a fresh JS State must be created.
  @override
  StatefulElement createElement() => _ComponentStatefulElement(this);
  @override
  // ignore: no_logic_in_create_state
  State<StatefulWidget> createState() => _ComponentState(description);
}

/// A throwing user dispose must not abort unmounting the rest of the session.
class _ComponentStatefulElement extends StatefulElement {
  _ComponentStatefulElement(_ComponentStateful super.widget);
  @override
  void unmount() {
    final owner = state as _ComponentState;
    try {
      super.unmount();
    } catch (error, stack) {
      owner.scope.session.report(error, stack);
    } finally {
      owner.scope.session._componentStates.remove(owner.id);
      owner.scope.close();
    }
  }
}

/// Flutter creates and owns this State; generated overrides dispatch to JS.
class _ComponentState extends State<StatefulWidget> with FlaxStateProxy {
  _ComponentState(_ComponentDescription description)
    : scope = _ComponentMount(description) {
    id = scope.session._nextComponentState++;
    if (scope.session.active) scope.session._componentStates[id] = this;
    try {
      if (!scope._retained) throw StateError('Closed Flax session');
      scope.state = scope.session.helper('createComponentState').call([
        description.input,
        FlaxJsNumber(id.toDouble()),
      ]) as FlaxJsObject;
    } catch (error, stack) {
      failure = error;
      scope.session.report(error, stack);
    }
  }
  final _ComponentMount scope;
  late final int id;
  Object? failure;
  String? _hook;
  bool _calledSuper = false;
  List<Object?> _hookArguments = const [];

  @override
  Object? flaxInvoke(
    String method,
    List<Object?> arguments, {
    bool requiresSuper = false,
  }) => scope.run(() => _invoke(method, arguments, requiresSuper));

  Object? _invoke(String method, List<Object?> arguments, bool requiresSuper) {
    final previousDescription = method == 'didUpdateWidget'
        ? scope.description
        : null;
    previousDescription?.retain();
    if (method == 'activate') scope._active = true;
    if (method == 'deactivate') scope._active = false;
    if (method == 'build') {
      return failure != null
          ? _errorWidget(failure!)
          : scope.build(arguments.single as BuildContext);
    }
    final previousHook = _hook;
    final previousSuper = _calledSuper;
    final previousArguments = _hookArguments;
    _hook = method;
    _calledSuper = false;
    _hookArguments = arguments;
    try {
      if (method == 'didUpdateWidget') {
        scope.update((widget as _ComponentStateful).description);
      }
      if (scope.state == null) {
        // No user State exists after a failed createState. Keep the error host valid.
        return flaxSuper(method, arguments);
      }
      final result = scope.invoke(method, arguments);
      _releaseJs(result);
      if (requiresSuper && !_calledSuper) {
        throw StateError('$method must call super.$method()');
      }
      return null;
    } catch (error, stack) {
      if (method == 'dispose') rethrow;
      // Let Flutter finish attaching, updating or deactivating the Element so
      // normal unmount can release its entire subtree. Never replay user hooks.
      if (method == 'initState') failure = error;
      scope.session.report(error, stack);
      return null;
    } finally {
      _hook = previousHook;
      _calledSuper = previousSuper;
      _hookArguments = previousArguments;
      previousDescription?.release();
      if (method == 'deactivate') scope._active = false;
      if (method == 'dispose') {
        scope.session._componentStates.remove(id);
        scope.close();
      }
    }
  }

  FlaxJsValue call(String operation, List<FlaxJsValue> arguments) =>
      scope.run(() => _call(operation, arguments));

  FlaxJsValue _call(String operation, List<FlaxJsValue> arguments) {
    if (operation == 'mounted') return FlaxJsBoolean(mounted);
    if (!mounted) throw StateError('Component State is not mounted');
    if (operation == 'context') {
      return scope.session.componentContext(context, scope);
    }
    if (operation == 'setState') {
      if (arguments.length != 1 || arguments.single is! FlaxJsFunction) {
        throw ArgumentError('Expected a setState callback');
      }
      setState(() {
        _releaseJs(scope.session.helper('invokeSynchronous').call(arguments));
      });
      return const FlaxJsUndefined();
    }
    if (operation.startsWith('super:')) {
      final method = operation.substring(6);
      if (_hook != method || arguments.length != _hookArguments.length) {
        throw StateError(
          'super.$method requires the active lifecycle callback',
        );
      }
      final decoded = <_Value>[];
      try {
        // Lifecycle Widget arguments refer to their original JS configurations.
        for (final argument in arguments) {
          decoded.add(scope.session.decodeComponent(argument));
        }
        flaxSuper(method, decoded.map((v) => v.data).toList());
        _calledSuper = true;
        return const FlaxJsUndefined();
      } finally {
        for (final value in decoded.reversed) {
          value.release();
        }
      }
    }
    throw ArgumentError('Unknown component operation: $operation');
  }
}

/// One result and Context scope per actual component Element, never per JS function.
class _ComponentMount with _ContextOwner {
  _ComponentMount(this.description) {
    if (session.active && !description.released) {
      description.retain();
      session.retainMount();
      _retained = true;
    }
  }
  bool _retained = false;
  _ComponentDescription description;
  _Session get session => description.session;
  FlaxJsObject? state;
  _Value? result;
  bool _closed = false;
  int _running = 0;

  void update(_ComponentDescription next) {
    if (identical(description, next)) return;
    next.retain();
    final previous = description;
    description = next;
    try {
      if (state != null) {
        _releaseJs(
          session.helper('updateComponentState').call([state!, next.input]),
        );
      }
    } finally {
      previous.release();
    }
  }

  FlaxJsValue invoke(String method, List<Object?> values) {
    if (_closed) throw StateError('Unmounted component');
    if (!_retained) throw StateError('Closed Flax session');
    session.checkpoint();
    final arguments = <FlaxJsValue>[
      state ?? description.input,
      FlaxJsString(method),
    ];
    _running++;
    try {
      for (var i = 0; i < values.length; i++) {
        final value = values[i];
        final encoded = value is BuildContext
            ? session.componentContext(value, this)
            : value is _ComponentStateful
            ? value.description.input
            : throw ArgumentError('Unsupported component callback argument');
        arguments.add(encoded);
      }
      return session.helper('invokeComponent').call(arguments);
    } finally {
      _running--;
      if (_closed && _running == 0) _release();
      session.checkpoint();
    }
  }

  Widget build(BuildContext context) => run(() => _build(context));

  Widget _build(BuildContext context) {
    try {
      final value = invoke('build', [context]);
      late _Value next;
      try {
        next = session.decode(value, const FlaxTypeRef('widget'));
      } finally {
        _releaseJs(value);
      }
      final previous = result;
      result = next;
      previous?.release();
      return next.data as Widget;
    } catch (error, stack) {
      session.report(error, stack);
      return result?.data as Widget? ?? _errorWidget(error);
    }
  }

  T run<T>(T Function() action) {
    if (_closed) throw StateError('Unmounted component');
    _running++;
    try {
      return action();
    } finally {
      _running--;
      if (_closed && _running == 0) _release();
    }
  }

  void close() {
    if (_closed) return;
    _closed = true;
    if (_running == 0) _release();
  }

  void _release() {
    _closeContexts();
    result?.release();
    result = null;
    final value = state;
    if (value != null) {
      try {
        _releaseJs(session.helper('releaseComponentState').call([value]));
      } finally {
        value.release();
        state = null;
      }
    }
    if (_retained) {
      description.release();
      session.releaseMount();
      _retained = false;
    }
  }
}

extension _ComponentCalls on _Session {
  _ComponentType readComponentType(FlaxJsObject info) {
    final id = _property(
      info,
      'type',
      (v) => (v as FlaxJsNumber).value.toInt(),
    );
    return _componentTypes.putIfAbsent(
      id,
      () => _ComponentType(
        _componentSessionId,
        id,
        _textProperty(info, 'name'),
        _property(info, 'stateful', (v) => (v as FlaxJsBoolean).value),
      ),
    );
  }

  Type componentType(FlaxJsFunction constructor) {
    final info = helper('componentType').call([constructor]) as FlaxJsObject;
    try {
      return readComponentType(info);
    } finally {
      info.release();
    }
  }

  _Value decodeComponent(FlaxJsValue input) {
    if (input is! FlaxJsObject) throw ArgumentError('Expected a component');
    final info = helper('component').call([input]) as FlaxJsObject;
    try {
      final id = _property(
        info,
        'id',
        (v) => (v as FlaxJsNumber).value.toInt(),
      );
      final existing = _componentDescriptions[id]?.target;
      if (existing != null && !existing.released) {
        existing.retain();
        return _Value(existing.widget, [existing]);
      }
      final type = readComponentType(info);
      final key = _property(info, 'key', (v) {
        if (v is FlaxJsNull) return null;
        final decoded = decode(
          v,
          const FlaxTypeRef(
            'object',
            id: 'flax.core/flutter#type:Key',
          ),
        );
        try {
          return decoded.data as Key;
        } finally {
          decoded.release();
        }
      });
      final description = _ComponentDescription(
        this,
        id,
        type,
        type.stateful,
        input.retain(),
        key,
      );
      _componentDescriptions[id] = WeakReference(description);
      return _Value(description.widget, [description]);
    } finally {
      info.release();
    }
  }

  FlaxJsObject componentContext(BuildContext context, _ContextOwner owner) {
    // State.context remains available during dispose; its Element is already unmounted.
    return owner._contexts.putIfAbsent(context, () {
      final type = registry._types.values
          .whereType<FlaxContextBinding>()
          .single;
      final id = _nextContext++;
      final proxy = helper('context').call([
        FlaxJsString(type.id),
        FlaxJsNumber(id.toDouble()),
      ]) as FlaxJsObject;
      final reference = _ContextReference(
        this,
        owner,
        type.id,
        id,
        context,
        proxy,
      );
      _contexts[id] = reference;
      return reference;
    }).proxy;
  }

  void registerComponents() {
    runtime.registerHostFunction('__flaxAncestor', (_, args) {
      _checkCall(args, 4);
      if (args.length != 4 || args[3] is! FlaxJsNumber) {
        throw ArgumentError('Invalid ancestor query');
      }
      final reference = _context(args[2], (args[1] as FlaxJsString).value);
      final context = reference.requireActive();
      final id = (args[3] as FlaxJsNumber).value;
      if (!id.isFinite || id <= 0 || id.truncateToDouble() != id) {
        throw ArgumentError('Invalid component type');
      }
      FlaxJsValue result = const FlaxJsNull();
      context.visitAncestorElements((ancestor) {
        final widget = ancestor.widget;
        final description = switch (widget) {
          _ComponentStateful() => widget.description,
          _ComponentStateless() => widget.description,
          _ => null,
        };
        if (description != null &&
            identical(description.session, this) &&
            description.type.id == id) {
          result = description.input.retain();
          return false;
        }
        return true;
      });
      return holdHostResult(result);
    });
    runtime.registerHostFunction('__flaxComponent', (_, args) {
      if (!active ||
          args.length < 3 ||
          args[0] is! FlaxJsNumber ||
          (args[0] as FlaxJsNumber).value != flaxBindingVersion ||
          args[1] is! FlaxJsNumber ||
          args[2] is! FlaxJsString) {
        throw ArgumentError('Invalid component call');
      }
      final state = _componentStates[(args[1] as FlaxJsNumber).value.toInt()];
      if (state == null) {
        throw StateError('Disposed or foreign component State');
      }
      checkpoint();
      try {
        return state.call((args[2] as FlaxJsString).value, args.sublist(3));
      } finally {
        checkpoint();
      }
    });
  }
}
