part of '../../bindings.dart';

/// The owning host outlives its native Builder/LayoutBuilder child Element.
class _ContextReference {
  _ContextReference(
    this.session,
    this.owner,
    this.type,
    this.id,
    this.context,
    this.proxy,
  );
  final _Session session;
  final _ContextOwner owner;
  final String type;
  final int id;
  BuildContext? context;
  final FlaxJsObject proxy;

  BuildContext requireActive() {
    final value = context;
    if (value == null || !value.mounted || !owner._active) {
      throw StateError('Inactive or unmounted BuildContext');
    }
    return value;
  }

  void close() {
    final previous = context;
    if (previous == null) return;
    context = null;
    owner._contexts.remove(previous);
    session._contexts.remove(id);
    try {
      if (session.active) {
        _releaseJs(
          session.helper('releaseContext').call([FlaxJsNumber(id.toDouble())]),
        );
      }
    } catch (error, stack) {
      session.report(error, stack);
    } finally {
      proxy.release();
    }
  }
}

extension _MemberCalls on _Session {
  void sweepContexts() {
    final count = _contexts.length < 64 ? _contexts.length : 64;
    for (var i = 0; i < count; i++) {
      final id = _contexts.keys.first;
      final reference = _contexts.remove(id)!;
      if (reference.context?.mounted == true) {
        // Rotate live entries without retaining an iterator across frame changes.
        _contexts[id] = reference;
      } else {
        reference.close();
      }
    }
  }

  FlaxJsFunction helper(String name) => _helpers.putIfAbsent(name, () {
    final helpers = runtime.getGlobal('__flaxBindings');
    try {
      if (helpers is! FlaxJsObject ||
          _property(
            helpers,
            'version',
            (v) => v is! FlaxJsNumber || v.value != flaxBindingVersion,
          )) {
        throw ArgumentError('Incompatible JS binding helpers');
      }
      final function = helpers.getProperty(name);
      if (function is! FlaxJsFunction) {
        _releaseJs(function);
        throw ArgumentError('Missing binding helper: $name');
      }
      return function;
    } finally {
      _releaseJs(helpers);
    }
  });

  void _checkCall(List<FlaxJsValue> args, int minimum) {
    if (!active) throw StateError('Closed Flax session');
    if (args.length < minimum ||
        args[0] is! FlaxJsNumber ||
        (args[0] as FlaxJsNumber).value != flaxBindingVersion ||
        args[1] is! FlaxJsString) {
      throw ArgumentError('Invalid or incompatible Dart member call');
    }
    // A synchronous Dart member may request close before returning to JS.
    checkpoint();
  }

  _ContextReference _context(FlaxJsValue value, String type) {
    if (value is! FlaxJsNumber ||
        !value.value.isFinite ||
        value.value.truncateToDouble() != value.value) {
      throw ArgumentError('Invalid BuildContext handle');
    }
    final reference = _contexts[value.value.toInt()];
    if (reference == null || reference.type != type) {
      throw ArgumentError('Foreign or unmounted BuildContext');
    }
    return reference;
  }

  void registerMembers() {
    registerStateMembers();
    runtime.registerHostFunction('__flaxTopLevel', (_, args) {
      _checkCall(args, 2);
      final definition = registry._functions[(args[1] as FlaxJsString).value];
      if (definition == null) throw ArgumentError('Unknown top-level function');
      final route = definition.route;
      if (route != null) requireOpen();
      final values = _callArguments(args, definition.parameters, 2);
      FlaxRouteLease? lease;
      try {
        final inputs = values.map((name, value) => MapEntry(name, value.data));
        Object? result;
        if (route == null) {
          for (final value in values.values) {
            value.escapeCallbacks();
            escapeWidget(value.data);
          }
          result = definition.invoke(inputs);
        } else {
          final navigator = Navigator.of(
            inputs[route.context] as BuildContext,
            rootNavigator: inputs[route.rootNavigator] as bool,
          );
          final observer = navigator.widget.observers
              .whereType<FlaxNavigatorObserver>()
              .where((o) => identical(o.navigator, navigator))
              .firstOrNull;
          if (observer == null) {
            throw StateError(
              'Install FlaxNavigatorObserver in the target Navigator.observers or MaterialApp.navigatorObservers',
            );
          }
          final sources = <String, _Source>{};
          for (final name in route.builders) {
            final value = values[name]!;
            value.retain();
            sources[name] = _Source(
              this,
              definition.parameters.firstWhere((p) => p.name == name).type,
              value,
            );
          }
          lease = FlaxRouteLease._(this, sources);
          for (final name in route.builders) {
            inputs[name] = lease.builder(name);
          }
          for (final entry in values.entries) {
            if (!route.builders.contains(entry.key)) {
              entry.value.escapeCallbacks();
              escapeWidget(entry.value.data);
            }
          }
          result = _TopLevelRouteCall(
            this,
            lease,
          ).invoke(observer, definition, inputs);
        }
        return holdHostResult(memberResult(result, definition.result));
      } finally {
        lease?.release();
        for (final value in values.values.toList().reversed) {
          value.release();
        }
        checkpoint();
      }
    });
    runtime.registerHostFunction('__flaxGet', (_, args) {
      _checkCall(args, 4);
      if (args.length != 4 || args[3] is! FlaxJsString) {
        throw ArgumentError('Invalid getter arguments');
      }
      final type = (args[1] as FlaxJsString).value;
      final binding = registry._types[type];
      if (binding is! FlaxContextBinding) {
        throw ArgumentError('Unknown context type');
      }
      final name = (args[3] as FlaxJsString).value;
      final getter = binding.getters.where((g) => g.name == name).firstOrNull;
      if (getter == null) throw ArgumentError('Unsupported getter: $name');
      final reference = _context(args[2], type);
      final context = name == 'mounted'
          ? reference.context!
          : reference.requireActive();
      return holdHostResult(memberResult(getter.read(context), getter.type));
    });
    runtime.registerHostFunction('__flaxCall', (_, args) {
      _checkCall(args, 3);
      if (args[2] is! FlaxJsString) throw ArgumentError('Invalid method name');
      final type = (args[1] as FlaxJsString).value;
      final name = (args[2] as FlaxJsString).value;
      final method = registry._types[type]?.methods[name];
      if (method == null) {
        throw ArgumentError('Unsupported Dart method: $type.$name');
      }
      if (args.length > method.parameters.length + 3) {
        throw ArgumentError('Too many method arguments');
      }
      final values = _callArguments(args, method.parameters, 3);
      try {
        for (final value in values.values) {
          value.escapeCallbacks();
          escapeWidget(value.data);
        }
        final result = method.invoke(
          values.map((name, value) => MapEntry(name, value.data)),
        );
        return holdHostResult(memberResult(result, method.result));
      } finally {
        checkpoint();
        for (final value in values.values.toList().reversed) {
          value.release();
        }
      }
    });
  }

  Map<String, _Value> _callArguments(
    List<FlaxJsValue> args,
    List<FlaxParameter> parameters,
    int offset,
  ) {
    if (args.length > parameters.length + offset) {
      throw ArgumentError('Too many function arguments');
    }
    final values = <String, _Value>{};
    try {
      for (var i = 0; i < parameters.length; i++) {
        final p = parameters[i];
        final arg = i + offset < args.length
            ? args[i + offset]
            : const FlaxJsUndefined();
        if (arg is FlaxJsUndefined) {
          if (p.required) {
            throw ArgumentError('Missing function argument: ${p.name}');
          }
          if (!p.omitWhenAbsent) values[p.name] = _Value(p.defaultValue);
        } else if (p.type.kind == 'context' && arg is! FlaxJsNull) {
          values[p.name] = _Value(_context(arg, p.type.id!).requireActive());
        } else {
          values[p.name] = decode(arg, p.type);
        }
      }
      return values;
    } catch (_) {
      for (final value in values.values.toList().reversed) {
        value.release();
      }
      rethrow;
    }
  }

  FlaxJsValue holdHostResult(FlaxJsValue value) {
    if (value is FlaxJsObject) _hostResults.add(value);
    checkpoint();
    return value;
  }

  FlaxJsValue memberResult(Object? value, FlaxTypeRef type) {
    if (type.kind == 'void') return const FlaxJsUndefined();
    if (type.kind == 'error') {
      return errorResult(value!, StackTrace.current);
    }
    if (value == null && type.nullable) return const FlaxJsNull();
    if (type.kind == 'copy') return copyCollection(value!, type.item!);
    if (type.kind == 'any') {
      if (value == null && !type.nullable) {
        throw ArgumentError('Unexpected null for Object');
      }
      return anyResult(value);
    }
    if ({'iterable', 'list', 'map', 'set'}.contains(type.kind) &&
        value != null) {
      return collectionResult(value, type);
    }
    if (type.kind == 'callback') return functionResult(value!, type.callback!);
    if (type.kind == 'future') {
      return futureResult(value as Future<Object?>, type.item!);
    }
    if (type.kind == 'futureOr') {
      return value is Future<Object?>
          ? futureResult(value, type.item!)
          : memberResult(value, type.item!);
    }
    if (type.kind == 'stream') {
      return streamResult(value!, type);
    }
    if (type.kind == 'data') {
      if (value == null && !type.nullable) {
        throw ArgumentError('Unexpected null for data');
      }
      return encodeData(value);
    }
    if (type.kind == 'widget') {
      checkWidgetType(value as Widget, type);
      return widgetResult(value);
    }
    if (type.kind == 'state') return stateResult(value as State, type);
    if (type.kind == 'object') return objectResult(value!, type);
    return scalarResult(value, type);
  }

  void registerStateMembers() {
    runtime.registerHostFunction('__flaxStateGet', (_, args) {
      _checkCall(args, 4);
      if (args.length != 4 ||
          args[2] is! FlaxJsNumber ||
          args[3] is! FlaxJsString) {
        throw ArgumentError('Invalid State getter');
      }
      final type = (args[1] as FlaxJsString).value;
      final name = (args[3] as FlaxJsString).value;
      final binding = registry._types[type];
      if (binding is! FlaxStateBinding) {
        throw ArgumentError('Unknown State type');
      }
      final getter = binding.getters.where((g) => g.name == name).firstOrNull;
      if (getter == null) throw ArgumentError('Unknown State getter');
      final ref = _states[(args[2] as FlaxJsNumber).value.toInt()];
      if (ref != null && ref.type != type) throw ArgumentError('Foreign State');
      final state = ref?.mounted;
      if (name == 'mounted') return FlaxJsBoolean(state != null);
      if (state == null) throw StateError('Unmounted State');
      return holdHostResult(memberResult(getter.read(state), getter.type));
    });
    runtime.registerHostFunction('__flaxInstance', (_, args) {
      _checkCall(args, 4);
      if (args[2] is! FlaxJsNumber || args[3] is! FlaxJsString) {
        throw ArgumentError('Invalid instance call');
      }
      final type = (args[1] as FlaxJsString).value;
      final ref = _states[(args[2] as FlaxJsNumber).value.toInt()];
      final state = ref?.mounted;
      if (state == null || ref!.type != type) {
        throw StateError('Foreign or unmounted State');
      }
      final binding = registry._types[type];
      if (binding is! FlaxStateBinding) throw ArgumentError('Unknown State');
      final method = binding.instanceMethods[(args[3] as FlaxJsString).value];
      if (method == null || args.length > method.parameters.length + 4) {
        throw ArgumentError('Unsupported instance method');
      }
      if (method.startsRoute) requireOpen();
      final values = <String, _Value>{};
      try {
        for (var i = 0; i < method.parameters.length; i++) {
          final p = method.parameters[i];
          final input = i + 4 < args.length
              ? args[i + 4]
              : const FlaxJsUndefined();
          if (input is FlaxJsUndefined) {
            if (p.required) {
              throw ArgumentError('Missing method argument: ${p.name}');
            }
            if (!p.omitWhenAbsent) values[p.name] = _Value(p.defaultValue);
          } else {
            values[p.name] = p.type.kind == 'context' && input is! FlaxJsNull
                ? _Value(_context(input, p.type.id!).requireActive())
                : decode(input, p.type);
          }
        }
        for (final value in values.values) {
          value.escapeCallbacks();
          escapeWidget(value.data);
        }
        final result = method.invoke(
          state,
          values.map((k, v) => MapEntry(k, v.data)),
        );
        for (final value in values.values) {
          for (final lease in value.resources.whereType<FlaxRouteLease>()) {
            lease._transfer();
          }
        }
        return holdHostResult(memberResult(result, method.result));
      } finally {
        for (final value in values.values.toList().reversed) {
          value.release();
        }
        checkpoint();
      }
    });
  }

  String enumName(Object value, FlaxTypeRef type) {
    final definition = registry._types[type.id];
    if (definition is! FlaxEnumBinding) {
      throw ArgumentError('Unregistered enum: ${type.id}');
    }
    return definition.values.entries.firstWhere((e) => e.value == value).key;
  }

  FlaxJsObject enumResult(Object value, FlaxTypeRef type) {
    final name = enumName(value, type);
    final cached = _enums.putIfAbsent(
      '${type.id}\n$name',
      () =>
          helper('enumValue').call([FlaxJsString(type.id!), FlaxJsString(name)])
              as FlaxJsObject,
    );
    // Return an independent handle; callers release results, not the cache.
    return cached.retain();
  }

  FlaxJsValue scalarResult(Object? value, FlaxTypeRef type) {
    if (type.kind == 'void') return const FlaxJsUndefined();
    if (value == null && type.nullable) return const FlaxJsNull();
    if ((type.kind == 'String' || type.kind == 'scalar') && value is String) {
      return FlaxJsString(value);
    }
    if (type.kind == 'bool' && value is bool) return FlaxJsBoolean(value);
    if ((type.kind == 'int' ||
            type.kind == 'double' ||
            type.kind == 'num' ||
            type.kind == 'scalar') &&
        value is num) {
      if (type.kind == 'int' &&
          (value is! int || value.abs() > 9007199254740991)) {
        throw ArgumentError('Expected a safe integer result');
      }
      return FlaxJsNumber(value.toDouble());
    }
    if (type.kind == 'enum' && value != null) {
      return enumResult(value, type);
    }
    throw ArgumentError('Unsupported Dart result: ${type.kind}');
  }

  /// Context and Page arguments borrow their owner; other handles are temporary.
  FlaxJsValue encodeArgument(
    Object? value,
    FlaxTypeRef type,
    _ContextOwner? owner,
    List<FlaxJsObject> temporary, [
    StackTrace? errorStack,
  ]) {
    if (type.kind == 'error' && value != null) {
      final result = errorResult(value, errorStack ?? StackTrace.current);
      if (result is FlaxJsObject) temporary.add(result);
      return result;
    }
    if ({
          'list',
          'map',
          'iterable',
          'set',
          'any',
          'callback',
          'future',
          'futureOr',
          'stream',
          'widget',
          'error',
        }.contains(type.kind) &&
        value != null) {
      final result = memberResult(value, type);
      if (result is FlaxJsObject) temporary.add(result);
      return result;
    }
    if (type.kind == 'object' && value != null) {
      final result = objectResult(value, type);
      if (result is FlaxJsObject) temporary.add(result);
      return result;
    }
    if (type.kind == 'data') {
      final result = encodeData(value);
      if (result is FlaxJsObject) temporary.add(result);
      return result;
    }
    if (value == null) return scalarResult(value, type);
    if (type.kind == 'page') {
      if (value is! FlaxPageConfiguration ||
          !identical(value.flaxPageLease._session, this) ||
          value.flaxPageLease.released) {
        throw ArgumentError('Foreign or retired Page');
      }
      return value.flaxPageLease._descriptor;
    }
    if (type.kind == 'context') {
      final borrowed = _functionContexts?[value];
      if (owner == null && borrowed != null && borrowed.type == type.id) {
        borrowed.requireActive();
        return borrowed.proxy;
      }
      if (value is! BuildContext ||
          owner == null ||
          !owner._active ||
          !value.mounted) {
        throw StateError('BuildContext requires an active mounted owner');
      }
      return owner._contexts.putIfAbsent(value, () {
        final id = _nextContext++;
        final proxy = helper('context').call([
          FlaxJsString(type.id!),
          FlaxJsNumber(id.toDouble()),
        ]) as FlaxJsObject;
        final reference = _ContextReference(
          this,
          owner,
          type.id!,
          id,
          value,
          proxy,
        );
        _contexts[id] = reference;
        return reference;
      }).proxy;
    }
    final result = scalarResult(value, type);
    if (result is FlaxJsObject) temporary.add(result);
    return result;
  }
}
