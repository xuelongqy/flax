part of '../../bindings.dart';

// A layout belongs to an operation, never to a business object or callback.
class _CallLayout {
  _CallLayout(this.parameters);
  factory _CallLayout.read(FlaxJsValue value) {
    if (value is! FlaxJsObject) throw ArgumentError('Invalid call layout');
    final length = value.getProperty('length');
    late final int count;
    try {
      if (length is! FlaxJsNumber ||
          !length.value.isFinite ||
          length.value < 0 ||
          length.value != length.value.truncateToDouble()) {
        throw ArgumentError('Invalid call layout length');
      }
      count = length.value.toInt();
    } finally {
      _releaseJs(length);
    }
    final parameters = <({String name, bool required, bool positional})>[];
    final names = <String>{};
    for (var i = 0; i < count; i++) {
      final row = value.getProperty('$i');
      if (row is! FlaxJsObject) throw ArgumentError('Invalid call parameter');
      final fields = <FlaxJsValue>[];
      try {
        for (final name in const ['name', 'required', 'positional']) {
          fields.add(row.getProperty(name));
        }
        final [name, required, positional] = fields;
        if (name is! FlaxJsString ||
            name.value.isEmpty ||
            !names.add(name.value) ||
            required is! FlaxJsUndefined && required is! FlaxJsBoolean ||
            positional is! FlaxJsUndefined && positional is! FlaxJsBoolean) {
          throw ArgumentError('Invalid call parameter');
        }
        parameters.add((
          name: name.value,
          required: required is FlaxJsBoolean && required.value,
          positional: positional is FlaxJsBoolean && positional.value,
        ));
      } finally {
        for (final field in fields) {
          _releaseJs(field);
        }
        row.release();
      }
    }
    return _CallLayout(parameters);
  }
  final List<({String name, bool required, bool positional})> parameters;
  String get key => jsonEncode(
    parameters.map((p) => [p.name, p.required, p.positional]).toList(),
  );

  List<int> indices(List<FlaxParameter> target) {
    final result = List<int>.filled(target.length, -1);
    final positional = parameters.where((p) => p.positional).length;
    var position = 0;
    for (final (index, source) in parameters.indexed) {
      final slot = source.positional
          ? position++
          : target.indexWhere((p) => p.name == source.name, positional);
      if (slot < 0 ||
          slot >= target.length ||
          result[slot] >= 0 ||
          target[slot].required && !source.required) {
        throw ArgumentError(
          'Incompatible binding parameter layout; regenerate the JS binding',
        );
      }
      result[slot] = index;
    }
    if (target.indexed.any(
      (entry) => entry.$2.required && result[entry.$1] < 0,
    )) {
      throw ArgumentError(
        'Incompatible binding parameter layout; regenerate the JS binding',
      );
    }
    return result;
  }
}

_BindingOperation _withCallLayout(
  _CallLayout? layout,
  List<FlaxParameter> parameters,
  _BindingOperation invoke, {
  bool requireLayout = false,
}) {
  if (layout == null) {
    if (requireLayout && parameters.any((p) => !p.required)) {
      throw ArgumentError(
        'Missing binding parameter layout; regenerate the JS binding once',
      );
    }
    return invoke;
  }
  final indices = layout.indices(parameters);
  // Identical layouts and appended optional parameters need no argument copy.
  final unchanged = indices.indexed.every(
    (entry) =>
        entry.$2 == entry.$1 ||
        entry.$1 >= layout.parameters.length && entry.$2 == -1,
  );
  if (unchanged && indices.length == layout.parameters.length) return invoke;
  return (id, args) {
    if (args.length > layout.parameters.length) {
      throw ArgumentError('Too many call arguments');
    }
    return invoke(
      id,
      unchanged
          ? args
          : [
              for (final i in indices)
                i >= 0 && i < args.length ? args[i] : const FlaxJsUndefined(),
            ],
    );
  };
}

/// Borrow the actual Element without keeping it mounted or manufacturing a host.
class _ContextReference extends _BridgeReference {
  _ContextReference(
    super.session,
    _ContextOwner? owner,
    this.type,
    this.id,
    BuildContext context,
  ) : _context = WeakReference(context),
      _owner = owner == null ? null : WeakReference(owner) {
    attach(context);
  }
  final String type;
  final int id;
  WeakReference<BuildContext>? _context;
  WeakReference<_ContextOwner>? _owner;
  bool _notifyJs = true;
  BuildContext? get context => _context?.target;

  void aliasesCollected() {
    // The JS sweep already removed every alias; do not cross the bridge again.
    _notifyJs = false;
    release();
  }

  FlaxJsObject get proxy {
    if (retired) throw StateError('Retired Context reference');
    return _session.target!.helper('context').call([
      FlaxJsString(type),
      FlaxJsNumber(id.toDouble()),
    ]) as FlaxJsObject;
  }

  BuildContext requireActive() {
    final value = context;
    if (retired ||
        value == null ||
        !value.mounted ||
        _owner?.target?._active == false) {
      throw StateError('Inactive or unmounted BuildContext');
    }
    return value;
  }

  @override
  void close() {
    _context = null;
    _owner?.target?._contexts.remove(this);
    final session = _session.target;
    session?._contexts.remove(id);
    if (_notifyJs && session?.active == true) {
      try {
        _releaseJs(
          session!.helper('releaseContext').call([FlaxJsNumber(id.toDouble())]),
        );
      } catch (error, stack) {
        session!.report(error, stack);
      }
    }
  }
}

// Binding code may mutate or retain the raw Map without owning conversion leases.
class _CallArguments {
  _CallArguments(this.parameters);
  final List<FlaxParameter> parameters;
  final values = <String, Object?>{};
  List<_Value?>? _decoded;

  void add(int index, _Value value) {
    (_decoded ??= List<_Value?>.filled(parameters.length, null))[index] = value;
    values[parameters[index].name] = value.data;
  }

  void escape(_Session session) {
    final decoded = _decoded;
    if (decoded == null) return;
    for (var i = 0; i < decoded.length; i++) {
      final value = decoded[i];
      if (value == null) continue;
      value.escapeCallbacks();
      session.escapeWidget(value.data, parameters[i].type);
    }
  }

  Object? original(String name) {
    for (var i = 0; i < parameters.length; i++) {
      if (parameters[i].name == name) return _decoded?[i]?.data;
    }
    return null;
  }

  void release() {
    final decoded = _decoded;
    if (decoded == null) return;
    for (var i = decoded.length - 1; i >= 0; i--) {
      decoded[i]?.release();
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
        reference.release();
      }
    }
  }

  FlaxJsFunction helper(String name) =>
      _helpers[name] ??
      _loadHelper(name) ??
      (throw ArgumentError('Missing binding helper: $name'));

  FlaxJsFunction? _loadHelper(String name) {
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
      if (function is FlaxJsUndefined) return null;
      if (function is! FlaxJsFunction) {
        _releaseJs(function);
        throw ArgumentError('Missing binding helper: $name');
      }
      return _helpers[name] = function;
    } finally {
      _releaseJs(helpers);
    }
  }

  void _checkCall(
    List<FlaxJsValue> args,
    int minimum, {
    bool numericReceiver = false,
  }) {
    if (!active) throw StateError('Closed Flax session');
    if (args.length < minimum ||
        args[0] is! FlaxJsNumber ||
        (args[0] as FlaxJsNumber).value != flaxBindingVersion ||
        (numericReceiver
            ? args[1] is! FlaxJsNumber
            : args[1] is! FlaxJsString)) {
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

  _BindingOperation _topLevelOperation(
    String type,
    String operation,
    String name,
    _CallLayout? layout,
  ) {
    final requireLayout =
        _bindingOwner(type)?.requiredCapabilities.contains('call-layouts') ==
        true;
    final definition = _functionBinding(type);
    if (definition == null || operation != 'call' || name.isNotEmpty) {
      throw ArgumentError('Unknown top-level function');
    }
    return _withCallLayout(layout, definition.parameters, (id, args) {
      if (id != 0) throw ArgumentError('Top-level functions have no receiver');
      if (definition.requiresTypeArguments) FlaxDartTypes.requireArguments();
      final route = definition.route;
      if (route != null) requireOpen();
      final input = _callArguments(
        args,
        definition.parameters,
        0,
        uiCallbacks: route?.builders ?? const [],
      );
      try {
        input.escape(this);
        final result = callFontAwareFunction(
          definition.id,
          input.values,
          () => _sandboxCall(
            type,
            'call',
            '',
            null,
            input.values,
            () => definition.invoke(input.values),
            resultType: definition.result,
          ),
        );
        return holdHostResult(memberResult(result, definition.result));
      } finally {
        input.release();
        checkpoint();
      }
    }, requireLayout: requireLayout);
  }

  _BindingOperation _staticOperation(
    String type,
    String operation,
    String name,
    _CallLayout? layout,
  ) {
    final requireLayout =
        _bindingOwner(type)?.requiredCapabilities.contains('call-layouts') ==
        true;
    final method = _typeBinding(type)?.methods[name];
    if (method == null || operation != 'call') {
      throw ArgumentError('Unknown static method');
    }
    return _withCallLayout(layout, method.parameters, (id, args) {
      if (id != 0) throw ArgumentError('Static methods have no receiver');
      if (args.length > method.parameters.length) {
        throw ArgumentError('Too many method arguments');
      }
      final input = _callArguments(args, method.parameters, 0);
      try {
        input.escape(this);
        final result = _sandboxCall(
          type,
          'call',
          name,
          null,
          input.values,
          () => method.invoke(input.values),
          resultType: method.result,
        );
        return holdHostResult(memberResult(result, method.result));
      } finally {
        checkpoint();
        input.release();
      }
    }, requireLayout: requireLayout);
  }

  _CallArguments _callArguments(
    List<FlaxJsValue> args,
    List<FlaxParameter> parameters,
    int offset, {
    List<String> uiCallbacks = const [],
    String argumentKind = 'function',
  }) {
    if (args.length > parameters.length + offset) {
      throw ArgumentError('Too many $argumentKind arguments');
    }
    final input = _CallArguments(parameters);
    try {
      for (var i = 0; i < parameters.length; i++) {
        final p = parameters[i];
        final arg = i + offset < args.length
            ? args[i + offset]
            : const FlaxJsUndefined();
        if (arg is FlaxJsUndefined) {
          if (p.required) {
            throw ArgumentError('Missing $argumentKind argument: ${p.name}');
          }
          if (!p.omitWhenAbsent) input.add(i, _Value(p.defaultValue));
        } else if (p.type.kind == 'context' && arg is FlaxJsNumber) {
          input.add(i, _Value(_context(arg, p.type.id!).requireActive()));
        } else {
          input.add(
            i,
            decode(
              arg,
              p.type,
              callbackScope: uiCallbacks.contains(p.name)
                  ? _CallbackScope.ui
                  : _CallbackScope.member,
            ),
          );
        }
      }
      return input;
    } catch (_) {
      input.release();
      rethrow;
    }
  }

  FlaxJsValue holdHostResult(FlaxJsValue value) {
    if (value is FlaxJsObject) _hostResults.add(value);
    checkpoint();
    return value;
  }

  FlaxJsValue memberResult(Object? value, FlaxTypeRef type) {
    type = dartTypes._resolveRef(type);
    if (type.kind == 'void') return const FlaxJsUndefined();
    if (type.kind == 'error') {
      return errorResult(value!, StackTrace.current);
    }
    if (value == null && type.nullable) return const FlaxJsNull();
    if (FlaxBufferType.byDartName[type.kind] case final bufferType?) {
      if (FlaxBufferType.of(value) != bufferType) {
        throw ArgumentError('Expected a ${type.kind} result');
      }
      return runtime.createSharedBuffer(value!);
    }
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
    if (type.kind == 'function') {
      if (value is! Function) throw ArgumentError('Expected a Dart function');
      final signature = dartTypes
          .resolve(dartTypes.instanceType(value))
          .callback;
      if (signature == null) {
        throw UnsupportedError('No concrete Dart function signature');
      }
      return functionResult(value, signature);
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
    if (type.kind == 'record') return recordResult(value!, type);
    if (type.kind == 'data') {
      if (value == null && !type.nullable) {
        throw ArgumentError('Unexpected null for data');
      }
      return encodeData(value);
    }
    if (type.kind == 'widget') {
      checkWidgetType(value as Widget, type);
      if (_objectView(_typeBinding(type.id)) != null) {
        return objectResult(
          value,
          FlaxTypeRef('object', id: type.id, objectView: type.objectView),
        );
      }
      return widgetResult(value);
    }
    if (type.kind == 'context') {
      if (value is! BuildContext) {
        throw ArgumentError('Expected a BuildContext result');
      }
      return contextResult(value, type.id!);
    }
    if (type.kind == 'state') return stateResult(value as State, type);
    if (type.kind == 'object') {
      if (value is Enum) {
        final binding = _typeBinding(type.id);
        if (binding is! FlaxObjectBinding ||
            binding.matches?.call(value) != true) {
          throw ArgumentError('Incompatible Dart enum interface');
        }
        return anyResult(value);
      }
      return objectResult(value!, type);
    }
    return scalarResult(value, type);
  }

  FlaxJsObject recordResult(Object value, FlaxTypeRef type) {
    if (value is! Record) throw ArgumentError('Expected a Dart Record result');
    final actualType = dartTypes.instanceType(value);
    if (type.record == null) {
      type = dartTypes.recordOutputView(actualType);
    }
    final binding = type.record!;
    final fields = runtime.dartRecordFields(value);
    if (fields.length != binding.fields.length) {
      throw ArgumentError('Invalid Record layout');
    }
    final input = dartTypes.recordInputView(type, actualType);
    final signature = input.record!.signature;
    dartTypes._records[signature] = input;
    final output =
        helper('emptyRecord').call([FlaxJsString(signature)]) as FlaxJsObject;
    try {
      _releaseJs(
        // Runtime types retain concrete Elements; the selected field view borrows Contexts.
        helper('recordDartType')
            .call([output, dartTypes.handle(actualType, view: input)]),
      );
      for (final (index, field) in binding.fields.indexed) {
        FlaxJsValue? encoded;
        try {
          encoded = memberResult(fields[index], field.type);
          output.setProperty(field.name, encoded);
        } catch (error) {
          throw ArgumentError('Record field ${field.name}: $error');
        } finally {
          if (encoded != null) _releaseJs(encoded);
        }
      }
      return output;
    } catch (_) {
      output.release();
      rethrow;
    }
  }

  _BindingOperation _contextOperation(
    String type,
    String operation,
    String name,
    _CallLayout? layout,
  ) {
    final requireLayout =
        _bindingOwner(type)?.requiredCapabilities.contains('call-layouts') ==
        true;
    final binding = _typeBinding(type);
    if (binding is! FlaxContextBinding) {
      throw ArgumentError('Unknown context operation');
    }
    if (operation == 'call') {
      final method =
          _genericMethod(type, name) ?? binding.instanceMethods[name];
      if (method == null) throw ArgumentError('Unknown Context method');
      return _withCallLayout(
        layout,
        method.parameters,
        (id, args) => _invokeInstanceMethod(
          _context(FlaxJsNumber(id.toDouble()), type).requireActive(),
          method,
          args,
          owner: type,
          name: name,
        ),
        requireLayout: requireLayout,
      );
    }
    if (operation != 'get') throw ArgumentError('Unknown context operation');
    final getter = binding.getters.where((g) => g.name == name).firstOrNull;
    if (getter == null) throw ArgumentError('Unknown Context getter');
    return (id, args) {
      if (args.isNotEmpty) throw ArgumentError('Invalid Context getter');
      final reference = _context(FlaxJsNumber(id.toDouble()), type);
      if (name == 'mounted') {
        return FlaxJsBoolean(reference.context?.mounted ?? false);
      }
      return holdHostResult(
        memberResult(
          _sandboxCall(
            type,
            'get',
            name,
            reference.requireActive(),
            const {},
            () => getter.read(reference.requireActive()),
            resultType: getter.type,
          ),
          getter.type,
        ),
      );
    };
  }

  _BindingOperation _stateOperation(
    String type,
    String operation,
    String name,
    _CallLayout? layout,
  ) {
    final requireLayout =
        _bindingOwner(type)?.requiredCapabilities.contains('call-layouts') ==
        true;
    final binding = _typeBinding(type);
    if (binding is! FlaxStateBinding) throw ArgumentError('Unknown State type');
    if (operation == 'get') {
      final getter = binding.getters.where((g) => g.name == name).firstOrNull;
      if (getter == null) throw ArgumentError('Unknown State getter');
      return (id, args) {
        if (args.isNotEmpty) throw ArgumentError('Invalid State getter');
        final ref = _states[id];
        if (ref != null &&
            ref.type != type &&
            _specializedOwners[ref.type] != type) {
          throw ArgumentError('Foreign State');
        }
        final state = ref?.mounted;
        if (name == 'mounted') return FlaxJsBoolean(state != null);
        if (state == null) throw StateError('Unmounted State');
        final actual = _typeBinding(ref!.type) as FlaxStateBinding;
        final selected = actual.getters.singleWhere((g) => g.name == name);
        return holdHostResult(
          memberResult(
            _sandboxCall(
              type,
              'get',
              name,
              state,
              const {},
              () => selected.read(state),
              resultType: selected.type,
            ),
            selected.type,
          ),
        );
      };
    }
    final method = _genericMethod(type, name) ?? binding.instanceMethods[name];
    if (operation != 'call' || method == null) {
      throw ArgumentError('Unknown State method');
    }
    return _withCallLayout(layout, method.parameters, (id, args) {
      final ref = _states[id];
      final state = ref?.mounted;
      if (state == null ||
          ref!.type != type && _specializedOwners[ref.type] != type) {
        throw StateError('Foreign or unmounted State');
      }
      final actual = _typeBinding(ref.type) as FlaxStateBinding;
      final selected =
          _genericMethod(type, name) ?? actual.instanceMethods[name]!;
      return _invokeInstanceMethod(
        state,
        selected,
        args,
        owner: type,
        name: name,
      );
    }, requireLayout: requireLayout);
  }

  FlaxJsValue _invokeInstanceMethod(
    Object receiver,
    FlaxInstanceMethod method,
    List<FlaxJsValue> args, {
    required String owner,
    required String name,
  }) {
    if (method.requiresTypeArguments) FlaxDartTypes.requireArguments();
    if (method.startsRoute) requireOpen();
    _CallArguments? input;
    try {
      input = _callArguments(
        args,
        method.parameters,
        0,
        argumentKind: 'method',
      );
      input.escape(this);
      return holdHostResult(
        memberResult(
          _sandboxCall(
            owner,
            'call',
            name,
            receiver,
            input.values,
            () => method.invoke(receiver, input!.values),
            resultType: method.result,
          ),
          method.result,
        ),
      );
    } finally {
      input?.release();
      checkpoint();
    }
  }

  String enumName(Object value, FlaxTypeRef type) {
    final definition = _typeBinding(type.id);
    if (definition is! FlaxEnumBinding) {
      throw ArgumentError('Unregistered enum: ${type.id}');
    }
    return definition.values.entries.firstWhere((e) => e.value == value).key;
  }

  FlaxJsObject enumResult(Object value, FlaxTypeRef type) {
    final name = enumName(value, type);
    final id = _specializedOwners[type.id] ?? type.id!;
    final cached = _enums.putIfAbsent(
      '$id\n$name',
      () =>
          helper('enumValue').call([FlaxJsString(id), FlaxJsString(name)])
              as FlaxJsObject,
    );
    // Return an independent handle; callers release results, not the cache.
    return cached.retain();
  }

  FlaxJsValue scalarResult(Object? value, FlaxTypeRef type) {
    if (type.kind == 'never' && !(value == null && type.nullable)) {
      throw ArgumentError('Never has no values');
    }
    if (type.kind == 'void') return const FlaxJsUndefined();
    if (value == null && type.nullable) return const FlaxJsNull();
    if ((type.kind == 'String' || type.kind == 'scalar') && value is String) {
      return FlaxJsString(value);
    }
    if (type.kind == 'bool' && value is bool) return FlaxJsBoolean(value);
    if (type.kind == 'BigInt' && value is BigInt) return FlaxJsBigInt(value);
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

  FlaxJsObject contextResult(
    BuildContext value,
    String type, {
    _ContextOwner? owner,
    bool allowUnmounted = false,
  }) {
    if ((!allowUnmounted && !value.mounted) ||
        (!allowUnmounted && owner?._active == false)) {
      throw StateError('Inactive or unmounted BuildContext');
    }
    var reference = _contextIds[value];
    if (reference == null || reference.retired) {
      reference = _ContextReference(this, owner, type, _nextObject++, value);
      _contextIds[value] = reference;
      _contexts[reference.id] = reference;
    } else if (reference.type != type) {
      throw ArgumentError('Incompatible Context type');
    }
    if (owner != null) {
      reference._owner ??= WeakReference(owner);
      if (identical(reference._owner!.target, owner)) {
        owner._contexts.add(reference);
      }
    }
    return reference.proxy;
  }

  /// Contexts borrow native Elements; other references use the shared object path.
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
    if (value == null) return memberResult(value, type);
    if (type.kind == 'context') {
      if (value is! BuildContext) throw ArgumentError('Expected BuildContext');
      final proxy = contextResult(value, type.id!, owner: owner);
      temporary.add(proxy);
      return proxy;
    }
    final result = memberResult(value, type);
    if (result is FlaxJsObject) temporary.add(result);
    return result;
  }
}
