part of '../../bindings.dart';

final _objectFinalizer = Finalizer<WeakReference<_ObjectReference>>(
  (record) => record.target?.release(),
);

/// An ID indexes weak metadata. The engine follows actual Dart and JS owners.
class _ObjectReference {
  _ObjectReference(
    this.session,
    this.id,
    this.binding,
    Object value, {
    this.scoped = false,
  }) : _weakValue = WeakReference(value),
       _borrowedContext = value is BuildContext
           ? session._contextIds[value]
           : null {
    _objectFinalizer.attach(value, WeakReference(this), detach: this);
  }
  final _Session session;
  final int id;
  final FlaxObjectBinding binding;
  final bool scoped;
  final _ContextReference? _borrowedContext;
  late final FlaxObjectMemberView? _nativeMemberView =
      binding.memberView?.call(value) ??
      session.dartTypes.membersFor(binding.id, value);
  Map<FlaxObjectBinding, FlaxObjectMemberView?>? _memberViews;
  FlaxObjectBinding? _signatureBinding;

  FlaxObjectMemberView? memberView(FlaxObjectBinding requested) {
    if (identical(requested, binding)) return _nativeMemberView;
    return (_memberViews ??= {}).putIfAbsent(
      requested,
      () =>
          requested.memberView?.call(value) ??
          session.dartTypes.membersFor(requested.id, value),
    );
  }

  final _BindingContext? context = _bindingContext;
  WeakReference<Object>? _weakValue;
  Object? get _value => _weakValue?.target;
  final listeners = _WeakReferences<_ObjectListener>();
  bool disposing = false;

  Object get value {
    final value = _value ?? (throw StateError('Released Dart object'));
    if (value is State && !value.mounted) {
      throw StateError('Unmounted State');
    }
    if (value is BuildContext) {
      _borrowedContext?.requireActive();
      if (!value.mounted) throw StateError('Unmounted BuildContext');
    }
    return value;
  }

  bool accepts(String type) {
    final expected =
        _objectView(session._typeBinding(type)) ??
        session._genericObjectBindings[type]?.binding;
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
    Map<String, Object?> namedArguments, {
    FlaxCallbackBinding? signature,
  }) {
    if (retired || object.disposing || registrations == 0) return null;
    running++;
    try {
      return callback!.call(
        positionalArguments,
        namedArguments,
        signature: signature,
      );
    } finally {
      running--;
      retire();
    }
  }

  @override
  FlaxCallbackBinding genericSignature(
    int member,
    List<Type> types,
    FlaxCallbackBinding Function(FlaxDartTypes) create,
  ) {
    if (retired || callback == null) throw StateError('Retired JS callback');
    return callback!.genericSignature(member, types, create);
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
  Map<String, FlaxDeferredFactoryBinding> _deferredFactories(FlaxTypeRef type) {
    if (type.deferredFactories.isNotEmpty) return type.deferredFactories;
    if (type.id == null) return const {};
    dartTypes.materialize(type.id!);
    return dartTypes._deferred[type.id] ?? const {};
  }

  FlaxJsValue _peerResult(FlaxJsValue result, Object value, {Object? origin}) {
    if (result is! FlaxJsObject) {
      throw StateError('Expected a JS binding object');
    }
    // Object views must not turn borrowed Flutter owners into strong Dart peers.
    if (value is BuildContext || value is State) return result;
    try {
      runtime.bindDartPeer(result, value, origin: origin);
      return result;
    } catch (_) {
      result.release();
      rethrow;
    }
  }

  bool _isMoreSpecificBinding(FlaxTypeBinding child, FlaxTypeBinding parent) {
    if (child.id == parent.id) return false;
    final ancestors = switch (child) {
      FlaxObjectBinding() => child.supertypes,
      FlaxEnumBinding() => child.supertypes,
      _ => const <String>[],
    };
    final childFamily = _specializedOwners[child.id] ?? child.id;
    final parentFamily = _specializedOwners[parent.id] ?? parent.id;
    // Ancestry names declarations; generic instances have session-local IDs.
    return ancestors.contains(parent.id) ||
        childFamily != parentFamily && ancestors.contains(parentFamily);
  }

  FlaxObjectBinding _objectBinding(Object value, String type) {
    final expected = _objectView(_typeBinding(type));
    if (expected is! FlaxObjectBinding ||
        expected.matches?.call(value) == false) {
      throw ArgumentError('Unsupported returned Dart object');
    }
    final actual = dartTypes.bindingFor(type, value);
    if (actual != null && _objectView(actual) != null) {
      return _objectView(actual)!;
    }
    var selected = expected;
    if (expected.aliasOf != null) return expected;
    for (final binding in _objectSubtypeCandidates(type, expected)) {
      if (binding.matches?.call(value) == true &&
          (selected.id == type || _isMoreSpecificBinding(binding, selected))) {
        selected = binding;
      }
    }
    return selected;
  }

  List<FlaxObjectBinding> _objectSubtypeCandidates(
    String type,
    FlaxObjectBinding expected,
  ) {
    final cached = _objectCandidates[type];
    if (cached != null && cached.$1 == _materializedTypes.length) {
      return cached.$2;
    }
    // Provider and ancestry are metadata; matches must still inspect each value.
    final owner = _bindingOwner(type);
    final providerPrefix = owner != null && owner.moduleId.contains('/')
        ? '${owner.moduleId.split('/').first}/'
        : null;
    bool eligible(FlaxTypeBinding binding) =>
        binding is FlaxObjectBinding &&
        binding.aliasOf == null &&
        (_bindingOwner(binding.id) == owner ||
            providerPrefix != null &&
                _bindingOwner(binding.id)?.moduleId
                        .startsWith(providerPrefix) ==
                    true) &&
        _isMoreSpecificBinding(binding, expected);
    final family = _specializedOwners[expected.id] ?? expected.id;
    final result = <FlaxObjectBinding>[
      for (final module in [componentsBindings, ...registry.modules])
        for (final binding
            in module._objectSubtypes[family] ?? const <FlaxObjectBinding>[])
          if (eligible(binding)) binding,
      for (final binding in _materializedTypes)
        if (eligible(binding)) binding as FlaxObjectBinding,
    ];
    _objectCandidates[type] = (_materializedTypes.length, result);
    return result;
  }

  FlaxObjectBinding _signatureObjectBinding(
    FlaxObjectBinding base,
    FlaxObjectViewBinding view,
  ) {
    final id = _bindingViewKey('${base.id}::${view.id}', true);
    return _genericObjectBindings.putIfAbsent(id, () {
      final members = view.members();
      return (
        context: _bindingContext,
        binding: FlaxObjectBinding(
          id,
          [
            for (final getter in base.getters)
              members.getters[getter.name] ?? getter,
          ],
          {...base.instanceMethods, ...members.instanceMethods},
          setters: [
            for (final setter in base.setters)
              members.setters[setter.name] ?? setter,
          ],
          constructors: const {},
          create: base.create,
          matches: (value) =>
              base.matches?.call(value) != false && view.matches(value),
          disposeMethod: base.disposeMethod,
          listenerPairs: base.listenerPairs,
          collectionView: members.collectionView ?? base.collectionView,
          supertypes: [base.id, ...base.supertypes],
        ),
      );
    }).binding;
  }

  FlaxJsValue scopedObjectResult(
    Object value,
    FlaxTypeRef type,
    List<_ScopedObjectLease> leases,
    List<FlaxJsObject> temporary,
  ) {
    if (value is Record) {
      final result = recordResult(value, const FlaxTypeRef('record'));
      temporary.add(result);
      return result;
    }
    if (type.id == null) throw ArgumentError('Missing scoped object type');
    final base = _objectBinding(value, dartTypes._resolveRef(type).id!);
    final binding = type.objectView == null
        ? base
        : _signatureObjectBinding(base, type.objectView!);
    final reference = _ObjectReference(
      this,
      _nextObject++,
      binding,
      value,
      scoped: true,
    );
    _objects[reference.id] = reference;
    final lease = _ScopedObjectLease(this, reference);
    leases.add(lease);
    try {
      final sharedPrototype =
          _specializedOwners[binding.id] ??
          (type.objectView != null ? base.id : null);
      final wrapper = helper('scopedObject').call([
        FlaxJsString(binding.id),
        FlaxJsNumber(reference.id.toDouble()),
        if (sharedPrototype != null) FlaxJsString(sharedPrototype),
      ]);
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
    if (_deferredFactories(type).isEmpty) return;
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
            !_deferredFactories(type).values
                .any((binding) => binding.id == materializer.value)) {
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
    final binding = _typeBinding(type.id);
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
      final owner = _specializedOwners[type.id] ?? type.id;
      if (deferredType != type.id && deferredType != owner) {
        throw ArgumentError('Incompatible deferred Dart object');
      }
      final materializer = _deferredFactories(type)[factory];
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
                FlaxJsString(owner!),
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
    if (value is Record) {
      return recordResult(value, const FlaxTypeRef('record'));
    }
    if (value is String || value is bool || value is num) {
      final binding = _typeBinding(type.id);
      if (binding is! FlaxObjectBinding ||
          binding.matches?.call(value) != true) {
        throw ArgumentError('Incompatible primitive result');
      }
      return anyResult(value);
    }
    if (value is BuildContext &&
        (_contextIds[value] == null || _contextIds[value]!.retired)) {
      contextResult(value, registry._contextType.id).release();
    }
    final selected = _objectBinding(value, dartTypes._resolveRef(type).id!);
    final view = type.objectView;
    if (view != null && !view.matches(value)) {
      throw ArgumentError('Incompatible generic Dart object');
    }
    var object = _objectIds[value];
    if (object != null &&
        value is BuildContext &&
        !identical(object._borrowedContext, _contextIds[value])) {
      object.release();
      _releaseJs(
        helper('releaseObject').call([FlaxJsNumber(object.id.toDouble())]),
      );
      object = null;
    }
    if (object == null) {
      object = _ObjectReference(
        this,
        value is BuildContext ? _contextIds[value]!.id : _nextObject++,
        selected,
        value,
      );
      _objects[object.id] = object;
      _objectIds[value] = object;
    }
    if (!object.accepts(type.id!)) {
      throw ArgumentError('Incompatible Dart object');
    }
    object.value;
    final remembered = object._signatureBinding;
    final binding = view != null
        ? _signatureObjectBinding(selected, view)
        : remembered?.supertypes.first == selected.id
        ? remembered!
        : selected;
    if (view != null) object._signatureBinding ??= binding;
    final sharedPrototype =
        _specializedOwners[binding.id] ??
        (_genericObjectBindings.containsKey(binding.id) ? selected.id : null);
    return _peerResult(
      helper(sharedPrototype == null ? 'object' : 'objectView').call([
        FlaxJsString(binding.id),
        FlaxJsNumber(object.id.toDouble()),
        if (sharedPrototype != null) FlaxJsString(sharedPrototype),
      ]),
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
      if (args.length != 3 && args.length != 4 ||
          args[2] is! FlaxJsObject ||
          args.length == 4 && args[3] is! FlaxJsObject) {
        throw ArgumentError('Invalid proxy layout');
      }
      final binding = _objectView(
        _typeBinding((args[1] as FlaxJsString).value),
      );
      if (binding is! FlaxObjectBinding || binding.proxy == null) {
        throw ArgumentError('Unknown proxy type');
      }
      final source = args[2] as FlaxJsObject;
      final length = source.getProperty('length');
      late final int count;
      try {
        if (length is! FlaxJsNumber ||
            !length.value.isFinite ||
            length.value < 0 ||
            length.value != length.value.truncateToDouble()) {
          throw ArgumentError('Invalid proxy member count');
        }
        count = length.value.toInt();
      } finally {
        _releaseJs(length);
      }
      final rows = <String, (int, List<FlaxJsValue>)>{};
      final temporary = <FlaxJsObject>[];
      final callLayouts = <(_CallLayout?, int)>[];
      try {
        for (var index = 0; index < count; index++) {
          final row = source.getProperty('$index');
          if (row is! FlaxJsObject) throw ArgumentError('Invalid proxy member');
          temporary.add(row);
          final values = <FlaxJsValue>[];
          for (var i = 0; i < 6; i++) {
            final value = row.getProperty('$i');
            values.add(value);
            if (value is FlaxJsObject) temporary.add(value);
          }
          final name = values[0];
          final kind = values[1];
          if (name is! FlaxJsString ||
              kind is! FlaxJsNumber ||
              kind.value < 0 ||
              kind.value > 2 ||
              kind.value != kind.value.truncateToDouble() ||
              rows.containsKey('${kind.value.toInt()}:${name.value}')) {
            throw ArgumentError('Invalid or duplicate proxy member');
          }
          final parameters = args.length == 4
              ? (args[3] as FlaxJsObject).getProperty('$index')
              : const FlaxJsUndefined();
          if (parameters is FlaxJsObject) temporary.add(parameters);
          values.add(parameters);
          rows['${kind.value.toInt()}:${name.value}'] = (index, values);
        }
        for (final member in binding.proxy!.members) {
          final current = member.signature.parameters;
          final source = rows.remove('${member.kind}:${member.name}');
          final values = source?.$2;
          final layout = values == null || values[6] is FlaxJsUndefined
              ? null
              : _CallLayout.read(values[6]);
          layout?.indices(current);
          if (layout != null) {
            final before = layout.parameters
                .where((p) => p.positional)
                .toList();
            final after = current.where((p) => p.positional).toList();
            if (before.length > after.length ||
                layout.parameters.any(
                  (p) =>
                      !p.positional &&
                      !current.any((q) => !q.positional && q.name == p.name),
                )) {
              throw ArgumentError('Incompatible proxy parameter layout');
            }
          }
          callLayouts.add((layout, source?.$1 ?? -1));
          final parameters =
              layout?.parameters ??
              [
                for (final p in current)
                  (
                    name: p.name,
                    required: p.required,
                    positional: p.positional,
                  ),
              ];
          final minimum = parameters
              .where((p) => p.positional && p.required)
              .length;
          final maximum =
              parameters.where((p) => p.positional).length +
              (parameters.any((p) => !p.positional) ? 1 : 0) +
              (member.hasCallContext ? 1 : 0);
          if (values == null) {
            if (!member.hasSuper) {
              throw ArgumentError(
                'New abstract proxy member requires regenerating the JS binding: ${member.name}',
              );
            }
          } else {
            if (values[2] is! FlaxJsNumber ||
                (values[2] as FlaxJsNumber).value != minimum ||
                values[3] is! FlaxJsNumber ||
                (values[3] as FlaxJsNumber).value != maximum ||
                values[5] is! FlaxJsBoolean ||
                (values[5] as FlaxJsBoolean).value != member.hasSuper ||
                values[4] is! FlaxJsUndefined &&
                    (values[4] is! FlaxJsFunction || !member.hasSuper)) {
              throw ArgumentError('Proxy layout does not match its binding');
            }
          }
        }
        if (rows.isNotEmpty) {
          throw ArgumentError(
            'Removed proxy member requires regenerating the JS binding',
          );
        }
        final first = runtime.registerProxyMembers(source);
        final token = _proxyLayouts.length;
        _proxyLayouts.add((binding, first, callLayouts));
        return FlaxJsNumber(token.toDouble());
      } finally {
        for (final value in temporary.reversed) {
          value.release();
        }
      }
    });
    _registerBindingHostFunction('__flaxCreateObject', (_, args) {
      _checkCall(args, 3);
      if (args.length != 3 || args[2] is! FlaxJsObject) {
        throw ArgumentError('Invalid object constructor');
      }
      final declaration = _typeBinding((args[1] as FlaxJsString).value);
      final binding = _objectView(declaration);
      if (binding is! FlaxObjectBinding) {
        throw ArgumentError('Unknown object type');
      }
      final descriptor = args[2] as FlaxJsObject;
      final ctor = _textProperty(descriptor, 'ctor');
      final parameters = binding.constructors[ctor];
      if (parameters == null) throw ArgumentError('Unknown object constructor');
      final navigation =
          binding.id == 'flax.core/flutter#type:Route' ||
          binding.id == 'flax.core/flutter#type:Page' ||
          binding.supertypes.any(
            (id) =>
                id == 'flax.core/flutter#type:Route' ||
                id == 'flax.core/flutter#type:Page',
          );
      final sources = _arguments(
        descriptor,
        parameters,
        allowBindings: false,
        callbackScope: navigation ? _CallbackScope.ui : _CallbackScope.member,
      );
      _ProxyPeer? peer;
      var createdPeer = false;
      try {
        if (ctor == '@implementation' || ctor.startsWith('@implementation:')) {
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
              prepared.$3,
            );
          } finally {
            _releaseJs(receiver);
          }
        }
        for (final source in sources.values) {
          source.initial.escapeCallbacks();
          escapeWidget(source.initial.data, source.type);
        }
        return bindingCall(() {
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
                  () => _ComponentType(
                    _componentSessionId,
                    key,
                    binding.id,
                    false,
                  ),
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
        });
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
    _CallLayout? layout,
  ) {
    final binding =
        _objectView(_typeBinding(type)) ??
        _genericObjectBindings[type]?.binding ??
        _collectionBindings[type];
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
    final collectionName = name == '@collection:toArray' ? 'toArray' : name;
    final nativeGetter = binding.getters
        .where((g) => g.name == name)
        .firstOrNull;
    final nativeMethod =
        _genericMethod(type, name) ??
        binding.instanceMethods[_collectionBindings.containsKey(type)
            ? collectionName
            : name];
    final collection =
        binding.collectionView == null ||
            (operation == 'get' && nativeGetter != null) ||
            (operation == 'call' && nativeMethod != null) ||
            operation == 'set'
        ? null
        : _collectionBinding(binding.collectionView!);
    final baseGetter =
        nativeGetter ??
        collection?.getters.where((g) => g.name == name).firstOrNull;
    final baseSetter = binding.setters.where((s) => s.name == name).firstOrNull;
    final baseMethod =
        nativeMethod ?? collection?.instanceMethods[collectionName];
    final collectionMethod = nativeMethod == null && baseMethod != null;
    if (!(operation == 'get' && baseGetter != null ||
        operation == 'set' && baseSetter != null ||
        operation == 'call' && baseMethod != null)) {
      throw ArgumentError('Unknown object operation');
    }
    final specialize =
        binding.memberViewOperations.contains('$operation:$name') ||
        dartTypes.hasGenericClass(binding.id);
    // Shared super adapters dispatch on the actual proxy, never an ancestor slot.
    final proxyType = name.startsWith('@super:')
        ? (_genericObjectBindings.containsKey(binding.id)
              ? binding.supertypes.first
              : binding.id)
        : null;
    final proxyOwner = _specializedOwners[proxyType] ?? proxyType;
    return _withCallLayout(
      layout,
      baseMethod?.parameters ?? const [],
      (id, args) {
        final object = _objects[id];
        if (object == null || !object.accepts(type)) {
          throw ArgumentError('Foreign or disposed Dart object');
        }
        if (proxyOwner != null &&
            proxyOwner !=
                (_specializedOwners[object.binding.id] ?? object.binding.id)) {
          throw ArgumentError('Foreign Dart proxy super receiver');
        }
        final receiver = object.value;
        var getter = baseGetter;
        var setter = baseSetter;
        var method = baseMethod;
        FlaxObjectMemberView? view;
        if (specialize || collectionMethod) {
          view = object.memberView(binding);
          if (view != null) {
            getter = view.getters[name] ?? getter;
            setter = view.setters[name] ?? setter;
            method = collectionMethod && view.collectionView != null
                ? _collectionBinding(view.collectionView!)
                      .instanceMethods[collectionName]
                : view.instanceMethods[name] ?? method;
          }
        }
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
        if (method.startsRoute) requireOpen();
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
                (l) =>
                    l.addName == addName && l.function.strictEquals(function),
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
                view?.instanceMethods[binding.listenerPairs[addName]] ??
                    binding.instanceMethods[binding.listenerPairs[addName]]!,
                native == null ? null : function.retain() as FlaxJsFunction,
                native != null && source == null
                    ? null
                    : _Callback(
                        this,
                        (source?.function ?? function).retain()
                            as FlaxJsFunction,
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
        if (method.requiresTypeArguments) FlaxDartTypes.requireArguments();
        final input = _callArguments(
          args,
          method.parameters,
          0,
          argumentKind: 'object',
        );
        try {
          input.escape(this);
          final invoke = method.invoke;
          final result = invoke(receiver, input.values);
          return holdHostResult(memberResult(result, method.result));
        } finally {
          input.release();
        }
      },
      requireLayout:
          _bindingOwner(type)?.requiredCapabilities.contains('call-layouts') ==
          true,
    );
  }
}
