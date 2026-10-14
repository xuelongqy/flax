part of '../../bindings.dart';

extension _DartReferences on _Session {
  (Object, _ObjectReference?) _dartReferenceValue(FlaxJsValue input) {
    if (input is! FlaxJsObject) {
      throw ArgumentError('Expected a Dart reference');
    }
    final enumType = helper('enumType').call([input]);
    if (enumType is FlaxJsString) {
      final name = helper('enumName').call([input]);
      final binding = _typeBinding(enumType.value);
      if (binding is! FlaxEnumBinding || name is! FlaxJsString) {
        throw ArgumentError('Unregistered Dart enum');
      }
      return (
        binding.values[name.value] ??
            (throw ArgumentError('Unknown Dart enum value')),
        null,
      );
    }
    final handle = helper('tryObjectHandle').call([input]);
    if (handle is FlaxJsNumber) {
      final id = handle.value.toInt();
      final context = _contexts[id];
      if (context != null) return (context.requireActive(), null);
      final object = _objects[id];
      if (object != null) {
        final value = object.value;
        if (value is Function && _callbackSources[value]?.active == false) {
          throw StateError('Retired JS callback');
        }
        return (value, object);
      }
      final stream = _streamReferences[id];
      if (stream != null && stream.value != null && stream.source != null) {
        return (stream.source!, null);
      }
      final error = _dartErrors[id];
      if (error != null && !error.released) return (error.error, null);
      throw StateError('Released Dart reference');
    }
    final nativeState = helper('stateHandle').call([input, const FlaxJsNull()]);
    if (nativeState is FlaxJsNumber) {
      return (
        _states[nativeState.value.toInt()]?.mounted ??
            (throw StateError('Unmounted or foreign State')),
        null,
      );
    }
    final component = helper('tryComponentStateId').call([input]);
    if (component is FlaxJsNumber) {
      final state = _componentStates[component.value.toInt()];
      if (state != null && state.mounted) return (state, null);
      throw StateError('Unmounted or foreign component State');
    }
    throw ArgumentError('Expected a live Dart reference from this session');
  }

  _BindingOperation _dartReferenceOperation(
    String type,
    String operation,
    String name,
  ) {
    final target = _typeBinding(type);
    if (name.isNotEmpty ||
        !(operation == 'type' && type.isEmpty ||
            (operation == 'cast' || operation == 'is') && target != null)) {
      throw ArgumentError('Unknown Dart reference operation');
    }
    return (id, args) {
      if (id != 0 || args.length != 1 || args.single is! FlaxJsObject) {
        throw ArgumentError('Invalid Dart reference arguments');
      }
      final input = args.single as FlaxJsObject;
      if (operation == 'is') {
        try {
          final (value, _) = _dartReferenceValue(input);
          final matches =
              _objectView(target)?.matches?.call(value) == true ||
              target is FlaxContextBinding &&
                  target.matches?.call(value) == true ||
              target is FlaxStateBinding &&
                  target.matches?.call(value) == true ||
              target is FlaxStreamTypeBinding && target.matches(value) ||
              target is FlaxWidgetBinding &&
                  target.matches?.call(value) == true ||
              target is FlaxWidgetInterfaceBinding && target.matches(value) ||
              target is FlaxEnumBinding &&
                  target.values.values.any((v) => identical(v, value));
          return FlaxJsBoolean(matches);
        } on ArgumentError {
          return const FlaxJsBoolean(false);
        } on StateError {
          return const FlaxJsBoolean(false);
        }
      }
      final (value, source) = _dartReferenceValue(input);
      if (value is State && !value.mounted) throw StateError('Unmounted State');
      if (value is BuildContext) {
        final context = _contextIds[value];
        if (context != null) {
          context.requireActive();
        } else if (!value.mounted) {
          throw StateError('Unmounted BuildContext');
        }
      }
      if (operation == 'type') {
        return FlaxJsString(dartTypes.instanceType(value).toString());
      }
      final object = _objectView(target);
      if (object != null && object.matches?.call(value) == true) {
        final selected = _objectBinding(value, type);
        if (source != null &&
            (helper('hasObjectView').call([
              input,
              FlaxJsString(selected.id),
            ]) as FlaxJsBoolean).value) {
          return holdHostResult(input.retain());
        }
        if (source?.scoped == true) {
          // New views share the callback lease instead of creating a lasting ID.
          return holdHostResult(
            _peerResult(
              helper('object').call([
                FlaxJsString(selected.id),
                FlaxJsNumber(source!.id.toDouble()),
              ]),
              value,
            ),
          );
        }
        return holdHostResult(
          objectResult(value, FlaxTypeRef('object', id: type)),
        );
      }
      if (source?.scoped == true) {
        throw ArgumentError(
          'A scoped reference requires an object binding view',
        );
      }
      if (target is FlaxContextBinding && target.matches?.call(value) == true) {
        return holdHostResult(contextResult(value as BuildContext, type));
      }
      if (target is FlaxStateBinding && target.matches?.call(value) == true) {
        // A live JS State retains its private fields and lifecycle methods.
        if (value is FlaxComponentStateBase &&
            registry._componentStateTypes.contains(type)) {
          return holdHostResult(input.retain());
        }
        return holdHostResult(
          stateResult(value as State, FlaxTypeRef('state', id: type)),
        );
      }
      if (target is FlaxStreamTypeBinding && target.matches(value)) {
        return holdHostResult(streamResult(value, target.view));
      }
      if (value is Widget &&
          (target is FlaxWidgetBinding && target.matches?.call(value) == true ||
              target is FlaxWidgetInterfaceBinding && target.matches(value))) {
        return holdHostResult(widgetResult(value));
      }
      if (target is FlaxEnumBinding &&
          target.values.values.any((entry) => identical(entry, value))) {
        return holdHostResult(
          memberResult(value, FlaxTypeRef('enum', id: type)),
        );
      }
      throw ArgumentError('Incompatible Dart type: $type');
    };
  }
}
