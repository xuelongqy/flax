part of '../../bindings.dart';

/// A returned function is held independently of the collection it came from.
class _FunctionReference extends _ObjectReference {
  _FunctionReference(_Session session, int id, Object value, this.signature)
    : keyHash = value.hashCode,
      super(
        session,
        id,
        FlaxObjectBinding(
          signature.id,
          const [],
          const {},
          constructors: const {},
          create: _noFunctionConstructor,
        ),
        value,
      );
  final FlaxCallbackBinding signature;
  final int keyHash;
  String get _bindingViewKeyForReference =>
      context != null && _usesBindingContext(signature.result)
      ? '${signature.id}@${context!.moduleId}'
      : signature.id;

  @override
  void release() {
    forget();
    session._functionViews.remove(this);
  }
}

Object _noFunctionConstructor(String name, Map<String, Object?> arguments) =>
    throw UnsupportedError('Returned functions cannot be constructed');

extension _FunctionCalls on _Session {
  _FunctionReference? returnedFunction(
    FlaxJsFunction input,
    FlaxCallbackBinding type,
  ) {
    final returned = _property(
      input,
      'kind',
      (value) => value is FlaxJsString && value.value == 'dart-function',
    );
    if (!returned) return null;
    final id = helper('tryObjectHandle').call([input]);
    if (id is! FlaxJsNumber) throw ArgumentError('Invalid Dart function');
    final reference = _objects[id.value.toInt()];
    if (reference is! _FunctionReference || !type.matches(reference.value)) {
      throw ArgumentError('Foreign or incompatible Dart function');
    }
    final source = _callbackSources[reference.value];
    if (source != null && !source.active) {
      throw StateError('Retired JS callback');
    }
    return reference;
  }

  FlaxJsValue functionResult(Object value, FlaxCallbackBinding signature) {
    if (!signature.matches(value)) {
      throw ArgumentError('Incompatible Dart function');
    }
    final viewKey = _bindingViewKey(
      signature.id,
      _usesBindingContext(signature.result),
    );
    var reference = _functionViews.find(value, viewKey);
    final created = reference == null;
    if (reference == null) {
      reference = _FunctionReference(this, _nextObject++, value, signature);
      _objects[reference.id] = reference;
      _functionViews.add(value, reference);
    }
    try {
      return _peerResult(
        helper('function').call([
          FlaxJsString(signature.id),
          FlaxJsNumber(reference.id.toDouble()),
          FlaxJsString(
            jsonEncode([
              for (final parameter in signature.parameters)
                {
                  'name': parameter.name,
                  'required': parameter.required,
                  'positional': parameter.positional,
                },
            ]),
          ),
        ]),
        value,
        origin: value,
      );
    } catch (_) {
      if (created) reference.release();
      rethrow;
    }
  }

  void registerFunctions() {
    _registerBindingHostFunction('__flaxFunction', (_, args) {
      _checkCall(args, 3);
      if (args[2] is! FlaxJsNumber) {
        throw ArgumentError('Invalid Dart function');
      }
      final reference = _objects[(args[2] as FlaxJsNumber).value.toInt()];
      if (reference is! _FunctionReference ||
          reference.signature.id != (args[1] as FlaxJsString).value) {
        throw StateError('Foreign or released Dart function');
      }
      final function = reference.value;
      final source = _callbackSources[function];
      if (source != null && !source.active) {
        throw StateError('Retired JS callback');
      }
      final signature = reference.signature;
      _checkCall(args, 5);
      if (args[3] is! FlaxJsNumber) {
        throw ArgumentError('Invalid Dart function');
      }
      final positionalCount = (args[3] as FlaxJsNumber).value.toInt();
      if (positionalCount < 0 || args.length < 5 + positionalCount) {
        throw ArgumentError('Invalid Dart function arity');
      }
      final namedCountIndex = 4 + positionalCount;
      if (args[namedCountIndex] is! FlaxJsNumber) {
        throw ArgumentError('Invalid Dart function arguments');
      }
      final namedCount = (args[namedCountIndex] as FlaxJsNumber).value.toInt();
      if (namedCount < 0 ||
          args.length != namedCountIndex + 1 + namedCount * 2) {
        throw ArgumentError('Invalid Dart function arity');
      }
      final values = <_Value>[];
      final valueTypes = <FlaxTypeRef>[];
      final positionalValues = <Object?>[];
      final namedValues = <String, Object?>{};
      try {
        final positional = signature.parameters
            .where((p) => p.positional)
            .toList();
        final named = signature.parameters.where((p) => !p.positional).toList();
        final requiredPositional = positional.where((p) => p.required).length;
        if (positionalCount < requiredPositional ||
            positionalCount > positional.length) {
          throw ArgumentError('Invalid Dart function arity');
        }
        _Value decodeParameter(
          FlaxJsValue input,
          FlaxCallbackParameter parameter,
        ) {
          final type = parameter.type;
          if (type.kind == 'context' && input is! FlaxJsNull) {
            final handle = helper('contextHandle')
                .call([input, FlaxJsString(type.id!)]);
            final context = _context(handle, type.id!);
            final value = context.requireActive();
            return _Value(value);
          }
          return decode(input, type);
        }

        for (var i = 0; i < positionalCount; i++) {
          final value = decodeParameter(args[4 + i], positional[i]);
          values.add(value);
          valueTypes.add(positional[i].type);
          positionalValues.add(value.data);
        }
        for (var i = 0; i < namedCount; i++) {
          final nameValue = args[namedCountIndex + 1 + i * 2];
          if (nameValue is! FlaxJsString ||
              namedValues.containsKey(nameValue.value)) {
            throw ArgumentError('Invalid named Dart function arguments');
          }
          final parameter = named
              .where((p) => p.name == nameValue.value)
              .firstOrNull;
          if (parameter == null) {
            throw ArgumentError('Unknown named Dart function argument');
          }
          final value = decodeParameter(
            args[namedCountIndex + 2 + i * 2],
            parameter,
          );
          values.add(value);
          valueTypes.add(parameter.type);
          namedValues[nameValue.value] = value.data;
        }
        if (named.any((p) => p.required && !namedValues.containsKey(p.name))) {
          throw ArgumentError('Missing required named Dart function argument');
        }
        for (var i = 0; i < values.length; i++) {
          values[i].escapeCallbacks();
          escapeWidget(values[i].data, valueTypes[i]);
        }
        final result = signature.invoke(
          function,
          positionalValues,
          namedValues,
        );
        return holdHostResult(memberResult(result, signature.result));
      } finally {
        for (final value in values.reversed) {
          value.release();
        }
      }
    });
  }
}

/// The JS wrapper holds the original Widget. Its configuration owns its resources.
class _WidgetReference extends _ObjectReference {
  _WidgetReference(_Session session, int id, Widget widget)
    : super(
        session,
        id,
        const FlaxObjectBinding(
          'flax:dart-widget',
          [],
          {},
          constructors: {},
          create: _noFunctionConstructor,
        ),
        widget,
      );
}

extension _WidgetReferences on _Session {
  // Promote before entering Dart: the callee may keep the Widget even if it throws.
  // Native wrappers need no inspection; each escaped Flax child owns its resources.
  void escapeWidget(Object? value, [FlaxTypeRef? type]) {
    if (type != null) {
      if (value == null || !type.containsWidget) return;
      if (type.kind != 'widget') {
        final visited = HashMap<Object, Set<FlaxTypeRef>>.identity();
        void visit(Object? current, FlaxTypeRef ref) {
          if (current == null || !ref.containsWidget) return;
          if (ref.kind == 'widget') {
            escapeWidget(current);
            return;
          }
          if (ref.kind == 'futureOr') {
            if (current is! Future) visit(current, ref.item!);
            return;
          }
          // Shared containers can expose different Widget positions per view.
          if (!visited
              .putIfAbsent(current, () => HashSet.identity())
              .add(ref)) {
            return;
          }
          switch (ref.kind) {
            case 'record':
              for (final field in ref.record!.fields) {
                visit(field.read(current), field.type);
              }
            case 'map':
              for (final entry in (current as Map).entries) {
                visit(entry.key, ref.key!);
                visit(entry.value, ref.item!);
              }
            case 'list' || 'set':
              for (final item in current as Iterable) {
                visit(item, ref.item!);
              }
            case 'iterable':
              _checkFiniteWidgetIterable(current, ref);
              // JS inputs are materialized; native lazy Iterables stay lazy.
              if (current is List || current is Set) {
                for (final item in current as Iterable) {
                  visit(item, ref.item!);
                }
              }
          }
        }

        visit(value, type);
        return;
      }
    }
    if (value is! Widget) return;
    final existing = _widgetConfigurations[value];
    if (existing != null) {
      if (existing.released) throw StateError('Closed Widget configuration');
      if (!identical(existing._session.target, this)) {
        throw ArgumentError('Foreign Widget configuration');
      }
      return;
    }
    final resource = widgetResource(value);
    if (resource == null) return;
    if (!active || resource.released) {
      throw StateError('Closed Widget configuration');
    }
    resource.validate();
    final record = _WidgetConfiguration(this, resource);
    _widgetConfigurations[value] = record;
    record.attach(value);
  }

  void checkWidgetType(Widget widget, FlaxTypeRef type) {
    if (type.id == null) return;
    final contract = registry._types[type.id];
    final accepts = switch (contract) {
      FlaxWidgetInterfaceBinding() => contract.matches(widget),
      FlaxWidgetBinding(matches: final matches?) => matches(widget),
      FlaxObjectBinding(matches: final matches?) => matches(widget),
      _ => false,
    };
    if (!accepts) {
      throw ArgumentError('Widget does not implement ${type.id}');
    }
  }

  List<Widget?> widgetSnapshot(Iterable<Object?> values, FlaxTypeRef type) =>
      type.collection?.snapshot?.call(values) ??
      (type.item!.nullable
          ? List<Widget?>.unmodifiable(values.cast<Widget?>())
          : List<Widget>.unmodifiable(values.cast<Widget>()));

  _Value checkWidgetValue(_Value value, FlaxTypeRef type) {
    try {
      checkWidgetType(value.data as Widget, type);
      return value;
    } catch (_) {
      value.release();
      rethrow;
    }
  }

  _Resource? widgetResource(Widget widget) => switch (widget) {
    FlaxWidgetHost() => widget.node,
    _ComponentStateful() => widget.description,
    _ComponentStateless() => widget.description,
    _ => null,
  };

  _Value retainWidget(Widget widget) {
    final resource = widgetResource(widget);
    resource?.retain();
    return _Value(widget, [?resource]);
  }

  FlaxJsValue widgetResult(Widget widget) {
    var reference = _objectIds[widget];
    final created = reference == null;
    if (reference == null) {
      escapeWidget(widget);
      reference = _WidgetReference(this, _nextObject++, widget);
      _objects[reference.id] = reference;
      _objectIds[widget] = reference;
    }
    if (reference.value is! Widget) {
      throw ArgumentError('Incompatible Widget reference');
    }
    reference.value;
    try {
      return _peerResult(
        reference is _WidgetReference
            ? helper('dartWidget').call([FlaxJsNumber(reference.id.toDouble())])
            : helper('object').call([
                FlaxJsString(reference.binding.id),
                FlaxJsNumber(reference.id.toDouble()),
              ]),
        widget,
        origin: widget,
      );
    } catch (_) {
      if (created) reference.release();
      rethrow;
    }
  }

  _Value? decodeDartWidget(FlaxJsObject input) {
    final id = helper('tryObjectHandle').call([input]);
    if (id is! FlaxJsNumber) return null;
    final reference = _objects[id.value.toInt()];
    if (reference == null || reference.value is! Widget) {
      throw ArgumentError('Expected a Dart Widget');
    }
    _releaseJs(helper('freezeWidget').call([input]));
    return _Value(reference.value, [_ObjectBorrow(reference, input.retain())]);
  }
}
