part of '../../bindings.dart';

final _objectFinalizer = Finalizer<WeakReference<_ObjectReference>>(
  (record) => record.target?.release(),
);

/// An ID indexes weak metadata. The engine follows actual Dart and JS owners.
class _ObjectReference {
  _ObjectReference(this.session, this.id, this.binding, Object value)
    : _weakValue = WeakReference(value) {
    _objectFinalizer.attach(value, WeakReference(this), detach: this);
  }
  final _Session session;
  final int id;
  final FlaxObjectBinding binding;
  final _BindingContext? context = _bindingContext;
  WeakReference<Object>? _weakValue;
  Object? get _value => _weakValue?.target;
  final listeners = _WeakReferences<_ObjectListener>();
  bool disposing = false;

  Object get value => _value ?? (throw StateError('Released Dart object'));

  bool accepts(String type) {
    final expected = _objectView(session.registry._types[type]);
    // Each binding view shares the actual session-owned Dart value.
    // Generated matches preserves concrete Dart type and generic checks.
    return expected is FlaxObjectBinding && expected.matches != null
        ? expected.matches!(value)
        : binding.id == type || binding.supertypes.contains(type);
  }

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

  void dispose(FlaxObjectBinding view) {
    final receiver = value;
    view.instanceMethods[view.disposeMethod]!.invoke(receiver, const {});
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
    forget();
    if (receiver != null && identical(session._objectIds[receiver], this)) {
      session._objectIds.remove(receiver);
    }
  }

  void forget() {
    _objectFinalizer.detach(this);
    _weakValue = null;
    session._objects.remove(id);
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
    (_bridgeOwners[wrapped] ??= []).add(this);
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
    _bridgeOwners[wrapped]?.remove(this);
    object.listeners.remove(this);
    callback?.release();
    _function?.release();
  }
}

FlaxObjectBinding? _objectView(FlaxTypeBinding? binding) => switch (binding) {
  FlaxObjectBinding() => binding,
  FlaxWidgetBinding() => binding.objectView,
  _ => null,
};

extension _ObjectCalls on _Session {
  FlaxJsValue _peerResult(FlaxJsValue result, Object value, {Object? origin}) {
    if (result is! FlaxJsObject) {
      throw StateError('Expected a JS binding object');
    }
    try {
      runtime.bindDartPeer(result, value, origin: origin);
      return result;
    } catch (_) {
      result.release();
      rethrow;
    }
  }

  FlaxObjectBinding _objectBinding(Object value, String type) {
    final expected = _objectView(registry._types[type]);
    if (expected is! FlaxObjectBinding ||
        expected.matches?.call(value) == false) {
      throw ArgumentError('Unsupported returned Dart object');
    }
    var selected = expected;
    // Preserve concrete identity within the signature's provider, without
    // exposing a subtype view registered by another provider.
    final owner = registry._bindingOwners[type];
    for (final binding in registry._types.values) {
      if (binding is FlaxObjectBinding &&
          registry._bindingOwners[binding.id] == owner &&
          binding.id != type &&
          binding.supertypes.contains(type) &&
          binding.matches?.call(value) == true &&
          (selected.id == type || binding.supertypes.contains(selected.id))) {
        selected = binding;
      }
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
      _peerResult(wrapper, value);
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
            escapeWidget(source.initial.data, source.type);
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
            // A deferred descriptor is an alias, not the canonical Dart peer.
            runtime.bindDartPeer(input, value);
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
    final selected = _objectBinding(value, type.id!);
    var object = _objectIds[value];
    if (object == null) {
      object = _ObjectReference(this, _nextObject++, selected, value);
      _objects[object.id] = object;
      _objectIds[value] = object;
    }
    if (!object.accepts(type.id!)) {
      throw ArgumentError('Incompatible Dart object');
    }
    object.value;
    return _peerResult(
      helper(
        'object',
      ).call([FlaxJsString(selected.id), FlaxJsNumber(object.id.toDouble())]),
      value,
      origin: value,
    );
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
        // JS aliases alone cannot decide ownership: a Dart business root may
        // retain the actual proxy, including its JS private fields.
        if (object != null && object._value == null) {
          object.release();
        } else {
          final stream = _streamReferences[id];
          if (stream != null && stream.value == null) {
            stream.release();
          } else {
            _contexts[id]?.aliasesCollected();
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
          values[p.name] = p.type.kind == 'context' && input is FlaxJsNumber
              ? _Value(_context(input, p.type.id!).requireActive())
              : decode(input, p.type);
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
    registerOperations();
    runtime.registerHostFunction('__flaxBindPeer', (_, args) {
      if (args.length != 3 ||
          args[0] is! FlaxJsNumber ||
          (args[0] as FlaxJsNumber).value != flaxBindingVersion ||
          args[1] is! FlaxJsObject ||
          args[2] is! FlaxJsObject) {
        throw ArgumentError('Invalid Dart object alias');
      }
      final handle = helper('tryObjectHandle').call([args[1]]);
      final reference = handle is FlaxJsNumber
          ? _objects[handle.value.toInt()]
          : null;
      if (reference == null) {
        throw ArgumentError('Foreign or released Dart object alias');
      }
      final value = reference.value;
      runtime.bindDartPeer(args[2] as FlaxJsObject, value, origin: value);
      return const FlaxJsUndefined();
    });
    _registerBindingHostFunction('__flaxPrepareProxy', (_, args) {
      _checkCall(args, 3);
      if (args.length != 3 || args[2] is! FlaxJsObject) {
        throw ArgumentError('Invalid proxy layout');
      }
      final binding = _objectView(
        registry._types[(args[1] as FlaxJsString).value],
      );
      if (binding is! FlaxObjectBinding || binding.proxy == null) {
        throw ArgumentError('Unknown proxy type');
      }
      final layout = args[2] as FlaxJsObject;
      final length = layout.getProperty('length');
      if (length is! FlaxJsNumber ||
          length.value != binding.proxy!.members.length) {
        throw ArgumentError('Invalid proxy member count');
      }
      for (final (index, member) in binding.proxy!.members.indexed) {
        final row = layout.getProperty('$index');
        if (row is! FlaxJsObject) throw ArgumentError('Invalid proxy member');
        final values = <FlaxJsValue>[];
        try {
          for (var i = 0; i < 6; i++) {
            values.add(row.getProperty('$i'));
          }
          final parameters = member.signature.parameters;
          final minimum = parameters
              .where((p) => p.positional && p.required)
              .length;
          final maximum =
              parameters.where((p) => p.positional).length +
              (parameters.any((p) => !p.positional) ? 1 : 0);
          if (values[0] is! FlaxJsString ||
              (values[0] as FlaxJsString).value != member.name ||
              values[1] is! FlaxJsNumber ||
              (values[1] as FlaxJsNumber).value != member.kind ||
              values[2] is! FlaxJsNumber ||
              (values[2] as FlaxJsNumber).value != minimum ||
              values[3] is! FlaxJsNumber ||
              (values[3] as FlaxJsNumber).value != maximum ||
              values[5] is! FlaxJsBoolean ||
              (values[5] as FlaxJsBoolean).value != member.hasSuper ||
              (values[4] is! FlaxJsUndefined &&
                  (values[4] is! FlaxJsFunction || !member.hasSuper))) {
            throw ArgumentError('Proxy layout does not match its binding');
          }
        } finally {
          for (final value in values) {
            _releaseJs(value);
          }
          row.release();
        }
      }
      final first = runtime.registerProxyMembers(layout);
      final token = _proxyLayouts.length;
      _proxyLayouts.add((binding, first));
      return FlaxJsNumber(token.toDouble());
    });
    _registerBindingHostFunction('__flaxCreateObject', (_, args) {
      _checkCall(args, 3);
      if (args.length != 3 || args[2] is! FlaxJsObject) {
        throw ArgumentError('Invalid object constructor');
      }
      final binding = _objectView(
        registry._types[(args[1] as FlaxJsString).value],
      );
      if (binding is! FlaxObjectBinding) {
        throw ArgumentError('Unknown object type');
      }
      final descriptor = args[2] as FlaxJsObject;
      final ctor = _textProperty(descriptor, 'ctor');
      final parameters = binding.constructors[ctor];
      if (parameters == null) throw ArgumentError('Unknown object constructor');
      final sources = _arguments(descriptor, parameters, allowBindings: false);
      _ProxyPeer? peer;
      var createdPeer = false;
      try {
        if (ctor == '@implementation') {
          final receiver = descriptor.getProperty('receiver');
          final layout = descriptor.getProperty('layout');
          try {
            if (receiver is! FlaxJsObject ||
                layout is! FlaxJsNumber ||
                !layout.value.isFinite ||
                layout.value != layout.value.truncateToDouble() ||
                layout.value < 0 ||
                layout.value >= _proxyLayouts.length) {
              throw ArgumentError('Invalid proxy receiver or layout');
            }
            final prepared = _proxyLayouts[layout.value.toInt()];
            if (!identical(prepared.$1, binding)) {
              throw ArgumentError('Foreign proxy layout');
            }
            peer = _ProxyPeer(
              this,
              receiver.retain(),
              binding.proxy!,
              prepared.$2,
            );
          } finally {
            _releaseJs(receiver);
          }
        }
        for (final source in sources.values) {
          source.initial.escapeCallbacks();
          escapeWidget(source.initial.data, source.type);
        }
        final value = binding.create(ctor, {
          ...sources.map((k, v) => MapEntry(k, v.initial.data)),
          '@peer': ?peer,
        });
        // The peer's native facade already retains its receiver from Dart.
        // Only the returned wrapper (or transferred extends alias) owns the proxy.
        if (value is FlaxWidgetProxy) {
          final identity = descriptor.getProperty('widgetType');
          try {
            if (identity is! FlaxJsUndefined) {
              if (identity is! FlaxJsNumber ||
                  !identity.value.isFinite ||
                  identity.value <= 0 ||
                  identity.value.truncateToDouble() != identity.value) {
                throw ArgumentError('Invalid Widget proxy identity');
              }
              final key = identity.value.toInt();
              final existingType = _componentTypes[key];
              if (existingType != null && existingType.name != binding.id) {
                throw ArgumentError(
                  'Widget proxy identity belongs to another native class',
                );
              }
              _flaxWidgetProxyTypes[value] = _componentTypes.putIfAbsent(
                key,
                () =>
                    _ComponentType(_componentSessionId, key, binding.id, false),
              );
            }
          } finally {
            _releaseJs(identity);
          }
        }
        final result = objectResult(
          value,
          FlaxTypeRef('object', id: binding.id),
        );
        final held = holdHostResult(result);
        createdPeer = true;
        return held;
      } finally {
        if (!createdPeer) peer?._handle.release();
        for (final source in sources.values) {
          source.release();
        }
      }
    });
  }

  _BindingOperation _objectOperation(
    String type,
    String operation,
    String name,
  ) {
    final binding =
        _objectView(registry._types[type]) ?? _collectionBindings[type];
    if (binding == null) throw ArgumentError('Unknown object type');
    if (operation == 'static') {
      final getter = binding.staticGetters[name];
      if (getter == null) throw ArgumentError('Unknown static getter');
      return (id, args) {
        if (id != 0 || args.isNotEmpty) {
          throw ArgumentError('Invalid static getter');
        }
        return holdHostResult(memberResult(getter.read(), getter.type));
      };
    }
    final getter = binding.getters.where((g) => g.name == name).firstOrNull;
    final setter = binding.setters.where((s) => s.name == name).firstOrNull;
    final method = binding.instanceMethods[name];
    if (!(operation == 'get' && getter != null ||
        operation == 'set' && setter != null ||
        operation == 'call' && method != null)) {
      throw ArgumentError('Unknown object operation');
    }
    return (id, args) {
      final object = _objects[id];
      if (object == null || !object.accepts(type)) {
        throw ArgumentError('Foreign or disposed Dart object');
      }
      final receiver = object.value;
      if (operation == 'get') {
        if (getter == null || args.isNotEmpty) {
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
        if (setter == null || args.length != 1) {
          throw ArgumentError('Unknown object setter');
        }
        final value = decode(args[0], setter.type);
        try {
          value.escapeCallbacks();
          escapeWidget(value.data, setter.type);
          setter.write(receiver, value.data);
        } finally {
          value.release();
        }
        return const FlaxJsUndefined();
      }
      if (operation != 'call' || method == null) {
        throw ArgumentError('Unknown object method');
      }
      if (name == binding.disposeMethod) {
        if (args.isNotEmpty) {
          throw ArgumentError('Disposal takes no arguments');
        }
        object.dispose(binding);
        return const FlaxJsUndefined();
      }
      final addName = binding.listenerPairs.containsKey(name)
          ? name
          : binding.listenerPairs.entries
                .where((p) => p.value == name)
                .firstOrNull
                ?.key;
      if (addName != null) {
        if (args.length != 1 || args[0] is! FlaxJsFunction) {
          throw ArgumentError('Listeners require one function');
        }
        final function = args[0] as FlaxJsFunction;
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
      final values = objectArguments(args, method.parameters);
      try {
        for (final parameter in method.parameters) {
          final value = values[parameter.name];
          if (value == null) continue;
          value.escapeCallbacks();
          escapeWidget(value.data, parameter.type);
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
    };
  }
}
