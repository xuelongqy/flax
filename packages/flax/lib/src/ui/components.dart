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
  State<StatefulWidget> createState() => _createComponentState(description);
}

/// A throwing user dispose must not abort unmounting the rest of the session.
class _ComponentStatefulElement extends StatefulElement {
  _ComponentStatefulElement(_ComponentStateful super.widget);
  @override
  void unmount() {
    final owner = state as FlaxComponentStateBase;
    try {
      super.unmount();
    } catch (error, stack) {
      owner._scope.session.report(error, stack);
    } finally {
      owner._scope.session._componentStates.remove(owner.id);
      owner._scope.close();
    }
  }
}

class _ComponentStateSeed {
  const _ComponentStateSeed({
    required this.scope,
    required this.id,
    required this.state,
    required this.variantId,
    this.failure,
  });

  final _ComponentMount scope;
  final int id;
  final FlaxJsObject? state;
  final String? variantId;
  final Object? failure;
}

State<StatefulWidget> _createComponentState(_ComponentDescription description) {
  final scope = _ComponentMount(description);
  final id = scope.session._nextComponentState++;
  FlaxJsObject? state;
  String? variantId;
  Object? failure;
  try {
    if (!scope._retained) throw StateError('Closed Flax session');
    final created = scope.session.helper('createComponentState').call([
      description.input,
      FlaxJsNumber(id.toDouble()),
    ]);
    if (created is! FlaxJsObject) {
      throw StateError('Invalid component State creation result');
    }
    try {
      state = _property(created, 'state', (value) {
        if (value is! FlaxJsObject) throw StateError('Invalid component State');
        return value.retain();
      });
      variantId = _property(created, 'variant', (value) {
        if (value is FlaxJsNull) return null;
        if (value is! FlaxJsString || value.value.isEmpty) {
          throw StateError('Invalid component State variant');
        }
        return value.value;
      });
    } finally {
      created.release();
    }
  } catch (error, stack) {
    failure = error;
    scope.session.report(error, stack);
  }

  var seed = _ComponentStateSeed(
    scope: scope,
    id: id,
    state: state,
    variantId: variantId,
    failure: failure,
  );
  if (failure == null && variantId != null) {
    final variant = scope.session.registry._stateVariants[variantId];
    if (variant != null) return variant.create(seed);
    failure = StateError('Unknown component State variant: $variantId');
    scope.session.report(failure, StackTrace.current);
    seed = _ComponentStateSeed(
      scope: scope,
      id: id,
      state: state,
      variantId: variantId,
      failure: failure,
    );
  }
  return _DefaultComponentState(seed);
}

/// Stable generator/runtime contract for a Flutter-owned component State.
abstract class FlaxComponentStateBase extends State<StatefulWidget> {
  FlaxComponentStateBase(Object value) {
    final seed = value as _ComponentStateSeed;
    _scope = seed.scope;
    id = seed.id;
    variantId = seed.variantId;
    failure = seed.failure;
    _scope.state = seed.state;
    if (_scope.session.active) _scope.session._componentStates[id] = this;
  }

  late final _ComponentMount _scope;
  late final int id;
  late final String? variantId;
  Object? failure;
  String? _hook;
  bool _calledSuper = false;
  List<Object?> _hookArguments = const [];

  Object? flaxInvoke(
    String method,
    List<Object?> arguments, {
    bool requiresSuper = false,
  }) => _scope.run(() => _invoke(method, arguments, requiresSuper));

  Object? _invoke(String method, List<Object?> arguments, bool requiresSuper) {
    final previousDescription = method == 'didUpdateWidget'
        ? _scope.description
        : null;
    previousDescription?.retain();
    if (method == 'activate') _scope._active = true;
    if (method == 'deactivate') _scope._active = false;
    final previousHook = _hook;
    final previousSuper = _calledSuper;
    final previousArguments = _hookArguments;
    _hook = method;
    _calledSuper = false;
    _hookArguments = arguments;
    try {
      if (method == 'didUpdateWidget') {
        _scope.update((widget as _ComponentStateful).description);
      }
      if (method == 'build') {
        return failure != null
            ? _errorWidget(failure!)
            : _scope.build(arguments.single as BuildContext);
      }
      if (_scope.state == null) {
        return flaxSuper(method, arguments);
      }
      final result = _scope.invoke(method, arguments);
      _releaseJs(result);
      if (requiresSuper && !_calledSuper) {
        throw StateError('$method must call super.$method()');
      }
      return null;
    } catch (error, stack) {
      if (method == 'dispose') rethrow;
      if (method == 'initState') failure = error;
      _scope.session.report(error, stack);
      return null;
    } finally {
      _hook = previousHook;
      _calledSuper = previousSuper;
      _hookArguments = previousArguments;
      previousDescription?.release();
      if (method == 'deactivate') _scope._active = false;
      if (method == 'dispose') {
        _scope.session._componentStates.remove(id);
        _scope.close();
      }
    }
  }

  FlaxJsValue call(String operation, List<FlaxJsValue> arguments) =>
      _scope.run(() => _call(operation, arguments));

  FlaxJsValue _call(String operation, List<FlaxJsValue> arguments) {
    if (operation == 'mounted') return FlaxJsBoolean(mounted);
    if (!mounted) throw StateError('Component State is not mounted');
    if (operation == 'context') {
      return _scope.session.componentContext(context, _scope);
    }
    if (operation == 'setState') {
      if (arguments.length != 1 || arguments.single is! FlaxJsFunction) {
        throw ArgumentError('Expected a setState callback');
      }
      setState(() {
        _releaseJs(_scope.session.helper('invokeSynchronous').call(arguments));
      });
      return const FlaxJsUndefined();
    }
    if (operation.startsWith('native:')) {
      return _nativeCall(operation.substring(7), arguments);
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
        for (final argument in arguments) {
          decoded.add(_scope.session.decodeComponent(argument));
        }
        final result = flaxSuper(method, decoded.map((v) => v.data).toList());
        _calledSuper = true;
        return result is Widget
            ? _scope.session.holdHostResult(
                _scope.session.memberResult(
                  result,
                  const FlaxTypeRef('widget'),
                ),
              )
            : const FlaxJsUndefined();
      } finally {
        for (final value in decoded.reversed) {
          value.release();
        }
      }
    }
    throw ArgumentError('Unknown component operation: $operation');
  }

  FlaxJsValue _nativeCall(String member, List<FlaxJsValue> arguments) {
    final id = variantId;
    final variant = id == null
        ? null
        : _scope.session.registry._stateVariants[id];
    if (variant == null) throw StateError('State has no native variant');
    if (member.startsWith('get:')) {
      if (arguments.isNotEmpty) throw ArgumentError('Invalid getter arity');
      final name = member.substring(4);
      final getter = variant.getters
          .where((value) => value.name == name)
          .firstOrNull;
      if (getter == null) {
        throw ArgumentError('Unknown State variant getter: $name');
      }
      return _scope.session.holdHostResult(
        _scope.session.memberResult(getter.read(this), getter.type),
      );
    }
    if (member.startsWith('set:')) {
      if (arguments.length != 1) throw ArgumentError('Invalid setter arity');
      final name = member.substring(4);
      final setter = variant.setters
          .where((value) => value.name == name)
          .firstOrNull;
      if (setter == null) {
        throw ArgumentError('Unknown State variant setter: $name');
      }
      final value = _scope.session.decode(arguments.single, setter.type);
      try {
        setter.write(this, value.data);
        return const FlaxJsUndefined();
      } finally {
        value.release();
      }
    }
    final method = variant.methods[member];
    if (method == null || arguments.length > method.parameters.length) {
      throw ArgumentError('Unknown State variant method: $member');
    }
    final values = <String, _Value>{};
    try {
      for (var i = 0; i < method.parameters.length; i++) {
        final parameter = method.parameters[i];
        final input = i < arguments.length
            ? arguments[i]
            : const FlaxJsUndefined();
        if (input is FlaxJsUndefined) {
          if (parameter.required) {
            throw ArgumentError('Missing method argument: ${parameter.name}');
          }
          if (!parameter.omitWhenAbsent) {
            values[parameter.name] = _Value(parameter.defaultValue);
          }
        } else {
          values[parameter.name] = _scope.session.decode(input, parameter.type);
        }
      }
      final result = method.invoke(
        this,
        values.map((key, value) => MapEntry(key, value.data)),
      );
      return _scope.session.holdHostResult(
        _scope.session.memberResult(result, method.result),
      );
    } finally {
      for (final value in values.values.toList().reversed) {
        value.release();
      }
    }
  }

  /// Dispatches an abstract Dart mixin member to the active JS State.
  Object? flaxInvokeMember(
    String member,
    List<Object?> arguments,
    List<FlaxTypeRef> parameterTypes,
    FlaxTypeRef resultType,
  ) {
    if (arguments.length != parameterTypes.length) {
      throw ArgumentError('Invalid State variant member arity');
    }
    return _scope.run(() {
      final temporary = <FlaxJsObject>[];
      final encoded = <FlaxJsValue>[
        _scope.state ?? (throw StateError('State is not available')),
        FlaxJsString(member),
      ];
      try {
        for (var i = 0; i < arguments.length; i++) {
          encoded.add(
            _scope.session.encodeArgument(
              arguments[i],
              parameterTypes[i],
              _scope,
              temporary,
            ),
          );
        }
        final raw = _scope.session.helper('invokeComponent').call(encoded);
        try {
          final decoded = _scope.session.decode(raw, resultType);
          try {
            decoded.escapeCallbacks();
            return decoded.data;
          } finally {
            decoded.release();
          }
        } finally {
          _releaseJs(raw);
        }
      } finally {
        for (final value in temporary.reversed) {
          value.release();
        }
      }
    });
  }

  /// Generated hosts override this when a Dart mixin has concrete build.
  Widget flaxBuildSuper(BuildContext context) =>
      throw StateError('The selected State variant has no super.build');

  Object? flaxSuper(String method, List<Object?> args);
}

/// Last in every generated State composition so direct super enters Dart mixins.
mixin FlaxStateProxy on FlaxComponentStateBase {
  @override
  // ignore: must_call_super
  void initState() => flaxInvoke('initState', const [], requiresSuper: true);

  @override
  // ignore: must_call_super
  void didChangeDependencies() =>
      flaxInvoke('didChangeDependencies', const [], requiresSuper: true);

  @override
  // ignore: must_call_super
  void didUpdateWidget(StatefulWidget oldWidget) =>
      flaxInvoke('didUpdateWidget', [oldWidget], requiresSuper: true);

  @override
  // ignore: must_call_super
  void deactivate() => flaxInvoke('deactivate', const [], requiresSuper: true);

  @override
  // ignore: must_call_super
  void activate() => flaxInvoke('activate', const [], requiresSuper: true);

  @override
  // ignore: must_call_super
  void dispose() => flaxInvoke('dispose', const [], requiresSuper: true);

  @override
  // ignore: must_call_super
  void reassemble() => flaxInvoke('reassemble', const [], requiresSuper: true);

  @override
  Widget build(BuildContext context) =>
      flaxInvoke('build', [context]) as Widget;

  @override
  Object? flaxSuper(String method, List<Object?> args) {
    switch (method) {
      case 'initState':
        if (args.isNotEmpty) throw ArgumentError('Invalid super arity');
        super.initState();
        return null;
      case 'didChangeDependencies':
        if (args.isNotEmpty) throw ArgumentError('Invalid super arity');
        super.didChangeDependencies();
        return null;
      case 'didUpdateWidget':
        if (args.length != 1) throw ArgumentError('Invalid super arity');
        super.didUpdateWidget(args.single as StatefulWidget);
        return null;
      case 'deactivate':
        if (args.isNotEmpty) throw ArgumentError('Invalid super arity');
        super.deactivate();
        return null;
      case 'activate':
        if (args.isNotEmpty) throw ArgumentError('Invalid super arity');
        super.activate();
        return null;
      case 'dispose':
        if (args.isNotEmpty) throw ArgumentError('Invalid super arity');
        super.dispose();
        return null;
      case 'reassemble':
        if (args.isNotEmpty) throw ArgumentError('Invalid super arity');
        super.reassemble();
        return null;
      case 'build':
        if (args.length != 1) throw ArgumentError('Invalid super arity');
        return flaxBuildSuper(args.single as BuildContext);
      default:
        throw ArgumentError('Unselected super method: $method');
    }
  }
}

class _DefaultComponentState extends FlaxComponentStateBase
    with FlaxStateProxy {
  _DefaultComponentState(super.seed);
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
  _Value? decodeComponentStateReference(FlaxJsObject input, FlaxTypeRef type) {
    final target = type.id;
    if (target == null) return null;
    final rawId = helper('tryComponentStateId').call([input]);
    try {
      if (rawId is FlaxJsNull) return null;
      if (rawId is! FlaxJsNumber ||
          !rawId.value.isFinite ||
          rawId.value <= 0 ||
          rawId.value.truncateToDouble() != rawId.value) {
        throw ArgumentError('Invalid component State reference');
      }
      final state = _componentStates[rawId.value.toInt()];
      if (state == null) {
        throw ArgumentError('Foreign or disposed component State');
      }
      if (registry._componentStateTypes.contains(target)) {
        return _Value(state);
      }
      final variantId = state.variantId;
      final variant = variantId == null
          ? null
          : registry._stateVariants[variantId];
      final binding = registry._types[target];
      if (variant == null ||
          !variant.interfaces.contains(target) ||
          binding is! FlaxObjectBinding ||
          binding.matches?.call(state) != true) {
        throw ArgumentError('Component State does not implement ${type.id}');
      }
      return _Value(state);
    } finally {
      _releaseJs(rawId);
    }
  }

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
          const FlaxTypeRef('object', id: 'flax.core/flutter#type:Key'),
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
