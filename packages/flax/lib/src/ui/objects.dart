part of '../../bindings.dart';

/// The record retains the Dart instance, never permission to dispose it.
class _ObjectReference {
  _ObjectReference(this.session, this.id, this.binding, this._value);
  final _Session session;
  final int id;
  final FlaxObjectBinding binding;
  Object? _value;
  final listeners = <_ObjectListener>[];
  bool disposing = false;

  Object get value => _value ?? (throw StateError('Released Dart object'));

  bool accepts(String type) =>
      binding.id == type || binding.supertypes.contains(type);

  void removeListeners() {
    for (final listener in listeners.toList()) {
      while (listener.registrations > 0) {
        try {
          listener.remove.invoke(value, {
            listener.remove.parameters.single.name: listener.wrapped,
          });
        } catch (error, stack) {
          session.report(error, stack);
        }
        listener.registrations--;
      }
      listener.retire();
    }
  }

  void dispose() {
    final receiver = value;
    binding.instanceMethods[binding.disposeMethod]!.invoke(receiver, const {});
    // The user chose disposal. Do not guess whether Flutter still uses the object.
    disposing = true;
    for (final listener in listeners.toList()) {
      listener.registrations = 0;
      listener.retire();
    }
    release();
    _releaseJs(
      session.helper('releaseObject').call([FlaxJsNumber(id.toDouble())]),
    );
  }

  void release() {
    final receiver = _value;
    _value = null;
    session._objects.remove(id);
    if (receiver != null && identical(session._objectIds[receiver], this)) {
      session._objectIds.remove(receiver);
    }
  }
}

class _ScopedObjectLease {
  _ScopedObjectLease(this.session, this.reference);

  final _Session session;
  final _ObjectReference reference;
  bool released = false;

  void release() {
    if (released) return;
    released = true;
    reference.release();
    _releaseJs(
      session.helper('releaseObject').call([
        FlaxJsNumber(reference.id.toDouble()),
      ]),
    );
  }
}

class _ObjectBorrow extends _Resource {
  _ObjectBorrow(this.object, this.wrapper);
  final _ObjectReference object;
  final FlaxJsObject wrapper;
  @override
  void validate() {
    object.value;
  }

  @override
  void close() => wrapper.release();
}

class _ObjectListener implements FlaxCallback {
  _ObjectListener(
    this.object,
    this.addName,
    this.remove,
    this._function,
    this.callback,
    Object? native,
  ) {
    wrapped = callback == null ? native! : callback!.signature.wrap(this);
  }
  final _ObjectReference object;
  final String addName;
  final FlaxInstanceMethod remove;
  final FlaxJsFunction? _function;
  FlaxJsFunction get function => _function ?? callback!.function;
  final _Callback? callback;
  late final Object wrapped;
  int registrations = 0;
  int running = 0;
  bool retired = false;

  @override
  Object? call(
    List<Object?> positionalArguments,
    Map<String, Object?> namedArguments,
  ) {
    if (retired || object.disposing || registrations == 0) return null;
    running++;
    try {
      return callback!.call(positionalArguments, namedArguments);
    } finally {
      running--;
      retire();
    }
  }

  void retire() {
    if (retired || registrations != 0 || running != 0) return;
    retired = true;
    object.listeners.remove(this);
    callback?.release();
    _function?.release();
  }
}

extension _ObjectCalls on _Session {
  FlaxObjectBinding _objectBinding(Object value, String type) {
    FlaxObjectBinding? selected;
    for (final candidate
        in registry._types.values.whereType<FlaxObjectBinding>()) {
      if (candidate.matches?.call(value) != true) continue;
      if (candidate.id != type && !candidate.supertypes.contains(type)) {
        continue;
      }
      if (selected == null || candidate.supertypes.contains(selected.id)) {
        selected = candidate;
      }
    }
    selected ??= registry._types[type] as FlaxObjectBinding?;
    if (selected == null || selected.matches?.call(value) == false) {
      throw ArgumentError('Unsupported returned Dart object');
    }
    return selected;
  }

  FlaxJsValue scopedObjectResult(
    Object value,
    FlaxTypeRef type,
    List<_ScopedObjectLease> leases,
    List<FlaxJsObject> temporary,
  ) {
    if (type.id == null) throw ArgumentError('Missing scoped object type');
    final binding = _objectBinding(value, type.id!);
    final reference = _ObjectReference(this, _nextObject++, binding, value);
    _objects[reference.id] = reference;
    final lease = _ScopedObjectLease(this, reference);
    leases.add(lease);
    try {
      final wrapper = helper(
        'scopedObject',
      ).call([FlaxJsString(binding.id), FlaxJsNumber(reference.id.toDouble())]);
      if (wrapper is FlaxJsObject) temporary.add(wrapper);
      return wrapper;
    } catch (_) {
      leases.removeLast();
      reference.release();
      rethrow;
    }
  }

  void validateDeferredObject(FlaxJsObject input, FlaxTypeRef type) {
    if (type.deferredFactories.isEmpty) return;
    final info = helper('deferredObject').call([input]);
    if (info is FlaxJsNull) return;
    if (info is! FlaxJsObject) {
      _releaseJs(info);
      throw ArgumentError('Invalid deferred Dart object');
    }
    try {
      final materializer = info.getProperty('materializer');
      try {
        if (materializer is! FlaxJsString ||
            !type.deferredFactories.values.any(
              (binding) => binding.id == materializer.value,
            )) {
          throw ArgumentError('Deferred Dart object type mismatch');
        }
      } finally {
        _releaseJs(materializer);
      }
    } finally {
      info.release();
    }
  }

  _ObjectReference objectReference(
    FlaxJsValue input,
    String type, {
    int? knownHandle,
  }) {
    if (input is! FlaxJsObject) {
      throw ArgumentError('Expected a Dart object reference');
    }
    final handle = knownHandle == null
        ? helper('tryObjectHandle').call([input])
        : null;
    final id =
        knownHandle ??
        (handle is FlaxJsNumber
            ? handle.value.toInt()
            : throw ArgumentError('Invalid object handle'));
    final object = _objects[id];
    if (object == null || !object.accepts(type)) {
      throw ArgumentError('Foreign, disposed, or incompatible Dart object');
    }
    object.value;
    return object;
  }

  _ObjectReference materializeDeferredObject(
    FlaxJsObject input,
    FlaxTypeRef type,
  ) {
    final binding = registry._types[type.id];
    if (binding is! FlaxObjectBinding) {
      throw ArgumentError('Unknown deferred Dart object type');
    }
    final info = helper('deferredObject').call([input]);
    if (info is FlaxJsNull) {
      throw ArgumentError('Expected a Dart object reference');
    }
    if (info is! FlaxJsObject) {
      _releaseJs(info);
      throw ArgumentError('Invalid deferred Dart object');
    }
    try {
      final deferredType = _textProperty(info, 'type');
      final factory = _textProperty(info, 'factory');
      if (deferredType != type.id) {
        throw ArgumentError('Incompatible deferred Dart object');
      }
      final materializer = type.deferredFactories[factory];
      if (materializer == null) {
        throw ArgumentError(
          'No concrete type is available for deferred factory',
        );
      }
      final locked = info.getProperty('materializer');
      try {
        if (locked is FlaxJsString && locked.value != materializer.id) {
          throw ArgumentError('Deferred Dart object type mismatch');
        }
        if (locked is! FlaxJsNull && locked is! FlaxJsString) {
          throw ArgumentError('Invalid deferred Dart object state');
        }
      } finally {
        _releaseJs(locked);
      }
      final descriptor = info.getProperty('descriptor');
      if (descriptor is! FlaxJsObject) {
        _releaseJs(descriptor);
        throw ArgumentError('Invalid deferred factory descriptor');
      }
      try {
        final sources = _arguments(
          descriptor,
          materializer.parameters,
          allowBindings: false,
        );
        try {
          for (final source in sources.values) {
            source.initial.escapeCallbacks();
            escapeWidget(source.initial.data);
          }
          final value = materializer.create(
            sources.map((name, source) => MapEntry(name, source.initial.data)),
          );
          if (binding.matches?.call(value) == false) {
            throw ArgumentError(
              'Deferred factory returned an incompatible object',
            );
          }
          var object = _objectIds[value];
          final created = object == null;
          object ??= _ObjectReference(this, _nextObject++, binding, value);
          if (!object.accepts(type.id!)) {
            throw ArgumentError(
              'Deferred factory returned an incompatible object',
            );
          }
          if (created) {
            _objects[object.id] = object;
            _objectIds[value] = object;
          }
          try {
            _releaseJs(
              helper('materializeDeferred').call([
                input,
                FlaxJsString(binding.id),
                FlaxJsNumber(object.id.toDouble()),
                FlaxJsString(materializer.id),
              ]),
            );
          } catch (_) {
            if (created) object.release();
            rethrow;
          }
          return object;
        } finally {
          for (final source in sources.values.toList().reversed) {
            source.release();
          }
        }
      } finally {
        descriptor.release();
      }
    } finally {
      info.release();
    }
  }

  FlaxJsValue objectResult(Object value, FlaxTypeRef type) {
    if (value is String || value is bool || value is num) {
      final binding = registry._types[type.id];
      if (binding is! FlaxObjectBinding ||
          binding.matches?.call(value) != true) {
        throw ArgumentError('Incompatible primitive result');
      }
      return anyResult(value);
    }
    var object = _objectIds[value];
    if (object == null) {
      final selected = _objectBinding(value, type.id!);
      object = _ObjectReference(this, _nextObject++, selected, value);
      _objects[object.id] = object;
      _objectIds[value] = object;
    }
    if (!object.accepts(type.id!)) {
      throw ArgumentError('Incompatible Dart object');
    }
    object.value;
    return helper('object').call([
      FlaxJsString(object.binding.id),
      FlaxJsNumber(object.id.toDouble()),
    ]);
  }

  void sweepObjects() {
    final expired = helper('sweepObjects').call(const []) as FlaxJsObject;
    try {
      final length = _property(
        expired,
        'length',
        (v) => (v as FlaxJsNumber).value.toInt(),
      );
      for (var i = 0; i < length; i++) {
        final id = _property(
          expired,
          '$i',
          (v) => (v as FlaxJsNumber).value.toInt(),
        );
        final object = _objects[id];
        // An explicit listener registration remains until removal or session close.
        if (object != null && object.listeners.isEmpty) {
          object.release();
        } else {
          final stream = _streamReferences[id];
          if (stream != null) {
            stream.release();
          } else {
            _dartErrors[id]?.release();
          }
        }
      }
    } finally {
      expired.release();
    }
  }

  Map<String, _Value> objectArguments(
    List<FlaxJsValue> args,
    List<FlaxParameter> parameters,
  ) {
    if (args.length > parameters.length) {
      throw ArgumentError('Too many object arguments');
    }
    final values = <String, _Value>{};
    try {
      for (var i = 0; i < parameters.length; i++) {
        final p = parameters[i];
        final input = i < args.length ? args[i] : const FlaxJsUndefined();
        if (input is FlaxJsUndefined) {
          if (p.required) {
            throw ArgumentError('Missing object argument: ${p.name}');
          }
          if (!p.omitWhenAbsent) values[p.name] = _Value(p.defaultValue);
        } else {
          values[p.name] = decode(input, p.type);
        }
      }
      return values;
    } catch (_) {
      for (final value in values.values) {
        value.release();
      }
      rethrow;
    }
  }

  void registerObjects() {
    runtime.registerHostFunction('__flaxCreateObject', (_, args) {
      _checkCall(args, 3);
      if (args.length != 3 || args[2] is! FlaxJsObject) {
        throw ArgumentError('Invalid object constructor');
      }
      final binding = registry._types[(args[1] as FlaxJsString).value];
      if (binding is! FlaxObjectBinding) {
        throw ArgumentError('Unknown object type');
      }
      final descriptor = args[2] as FlaxJsObject;
      final ctor = _textProperty(descriptor, 'ctor');
      final parameters = binding.constructors[ctor];
      if (parameters == null) throw ArgumentError('Unknown object constructor');
      final sources = _arguments(descriptor, parameters, allowBindings: false);
      try {
        for (final source in sources.values) {
          source.initial.escapeCallbacks();
          escapeWidget(source.initial.data);
        }
        final value = binding.create(
          ctor,
          sources.map((k, v) => MapEntry(k, v.initial.data)),
        );
        final result = objectResult(
          value,
          FlaxTypeRef('object', id: binding.id),
        );
        return holdHostResult(result);
      } finally {
        for (final source in sources.values) {
          source.release();
        }
      }
    });
    runtime.registerHostFunction('__flaxObject', (_, args) {
      _checkCall(args, 5);
      if (args[2] is! FlaxJsNumber ||
          args[3] is! FlaxJsString ||
          args[4] is! FlaxJsString) {
        throw ArgumentError('Invalid object member call');
      }
      final type = (args[1] as FlaxJsString).value;
      if ((args[3] as FlaxJsString).value == 'static') {
        final binding = registry._types[type];
        final getter = binding is FlaxObjectBinding
            ? binding.staticGetters[(args[4] as FlaxJsString).value]
            : null;
        if (getter == null || args.length != 5) {
          throw ArgumentError('Unknown static getter');
        }
        return holdHostResult(memberResult(getter.read(), getter.type));
      }
      final object = _objects[(args[2] as FlaxJsNumber).value.toInt()];
      if (object == null || object.binding.id != type) {
        throw ArgumentError('Foreign or disposed Dart object');
      }
      final receiver = object.value;
      final binding = object.binding;
      final operation = (args[3] as FlaxJsString).value;
      final name = (args[4] as FlaxJsString).value;
      if (operation == 'get') {
        final getter = binding.getters.where((g) => g.name == name).firstOrNull;
        if (getter == null || args.length != 5) {
          throw ArgumentError('Unknown object getter');
        }
        final value = getter.read(receiver);
        return holdHostResult(
          getter.encode.kind == 'error' && value != null
              ? errorResult(value, StackTrace.current)
              : memberResult(value, getter.type),
        );
      }
      if (operation == 'set') {
        final setter = binding.setters.where((s) => s.name == name).firstOrNull;
        if (setter == null || args.length != 6) {
          throw ArgumentError('Unknown object setter');
        }
        final value = decode(args[5], setter.type);
        try {
          value.escapeCallbacks();
          escapeWidget(value.data);
          setter.write(receiver, value.data);
        } finally {
          value.release();
        }
        return const FlaxJsUndefined();
      }
      final method = binding.instanceMethods[name];
      if (operation != 'call' || method == null) {
        throw ArgumentError('Unknown object method');
      }
      if (name == binding.disposeMethod) {
        if (args.length != 5) {
          throw ArgumentError('Disposal takes no arguments');
        }
        object.dispose();
        return const FlaxJsUndefined();
      }
      final addName = binding.listenerPairs.containsKey(name)
          ? name
          : binding.listenerPairs.entries
                .where((p) => p.value == name)
                .firstOrNull
                ?.key;
      if (addName != null) {
        if (args.length != 6 || args[5] is! FlaxJsFunction) {
          throw ArgumentError('Listeners require one function');
        }
        final function = args[5] as FlaxJsFunction;
        var listener = object.listeners
            .where(
              (l) => l.addName == addName && l.function.strictEquals(function),
            )
            .firstOrNull;
        if (name == addName) {
          if (listener == null) {
            final signature = method.parameters.single.type.callback!;
            final returned = returnedFunction(function, signature);
            final native = returned?.value;
            final source = native == null ? null : _callbackSources[native];
            listener = _ObjectListener(
              object,
              addName,
              binding.instanceMethods[binding.listenerPairs[addName]]!,
              native == null ? null : function.retain() as FlaxJsFunction,
              native != null && source == null
                  ? null
                  : _Callback(
                      this,
                      (source?.function ?? function).retain() as FlaxJsFunction,
                      signature,
                      scope: _CallbackScope.ui,
                    ),
              native,
            );
          }
          if (!object.listeners.contains(listener)) {
            object.listeners.add(listener);
          }
          listener.registrations++;
          try {
            method.invoke(receiver, {
              method.parameters.single.name: listener.wrapped,
            });
          } catch (_) {
            try {
              listener.remove.invoke(receiver, {
                listener.remove.parameters.single.name: listener.wrapped,
              });
            } catch (error, stack) {
              report(error, stack);
            }
            listener.registrations--;
            listener.retire();
            rethrow;
          }
        } else if (listener != null && listener.registrations > 0) {
          method.invoke(receiver, {
            method.parameters.single.name: listener.wrapped,
          });
          listener.registrations--;
          listener.retire();
        }
        return const FlaxJsUndefined();
      }
      if (object is _CollectionReference &&
          method.parameters.any((p) => p.type.containsWidget)) {
        throw UnsupportedError(
          'Inserting or replacing Widgets through collection views is unsupported',
        );
      }
      final values = objectArguments(args.sublist(5), method.parameters);
      try {
        for (final value in values.values) {
          value.escapeCallbacks();
          escapeWidget(value.data);
        }
        final result = method.invoke(
          receiver,
          values.map((k, v) => MapEntry(k, v.data)),
        );
        return holdHostResult(memberResult(result, method.result));
      } finally {
        for (final value in values.values.toList().reversed) {
          value.release();
        }
      }
    });
  }
}
