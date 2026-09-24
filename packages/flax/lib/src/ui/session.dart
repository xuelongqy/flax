part of '../../bindings.dart';

enum _SessionStatus { open, closing, closed }

class _Session {
  _Session(this.runtime, this.registry, this.onError, {this.namespace});
  final String? namespace;
  final _hostInstallations = <_HostInstallation>[];
  _ModuleInstallation? _moduleInstallation;
  // These entries are installed after plugins or by the application UI bundle.
  final _hostGlobals = <String>{
    '__flaxBindings',
    '__flaxMount',
    '__flaxInvalidate',
  };
  final _hostTasks = ListQueue<(_HostContext, void Function())>();
  bool _hostClosing = false;
  final FlaxJsRuntime runtime;
  final FlaxBindingRegistry registry;
  final void Function(Object, StackTrace)? onError;
  _SessionStatus _status = _SessionStatus.open;
  bool get active => _status != _SessionStatus.closed;
  bool get closing => _status != _SessionStatus.open;
  int _mounts = 0;
  int _routeCount = 0;
  final _heldRoutes = <ModalRoute<Object?>>{};
  final _closed = Completer<void>();
  final _componentStates = <int, FlaxComponentStateBase>{};
  final _componentDescriptions = <int, WeakReference<_ComponentDescription>>{};
  final _configurations = <_WidgetConfiguration>{};
  final _componentSessionId = _nextComponentSession++;
  final _componentTypes = <int, _ComponentType>{};
  int _nextComponentState = 1;
  final _states = <int, _StateReference>{};
  final _stateIds = Expando<int>();
  final _objects = <int, _ObjectReference>{};
  final _objectIds = Map<Object, _ObjectReference>.identity();
  final _streamReferences = <int, _StreamReference>{};
  final _streamViews = Map<Object, Map<String, _StreamReference>>.identity();
  final _streamSubscriptions = <_TrackedStreamSubscription<Object?>>{};
  final _streamIterators = <int, _TrackedStreamIterator>{};
  int _nextStreamIterator = 1;
  final _asyncIterableSources = <int, _AsyncIterableStreamSource>{};
  final _dartErrors = <int, _DartErrorReference>{};
  final _dartErrorIds = Map<Object, _DartErrorReference>.identity();
  final _collectionViews =
      Map<Object, Map<String, _CollectionReference>>.identity();
  // Repeated method tear-offs are equal, but not necessarily identical. Preserve
  // Dart listener removal semantics while keeping each conversion signature separate.
  final _functionViews = <Object, Map<String, _FunctionReference>>{};
  Map<BuildContext, _ContextReference>? _functionContexts;
  final _callbackHandles = <_CallbackHandle>{};
  int _nextObject = 1;
  int _nextState = 1;
  final _hostResults = <FlaxJsObject>[];
  final _unmountedResults = <_Value>{};
  final _pending = <int, _PendingFuture>{};
  int _nextFuture = 1;
  final _promises = <int, _PendingPromise>{};
  int _nextPromise = 1;
  bool _checkpointScheduled = false;
  bool _checkpointRunning = false;
  FlaxJsFunction? _objectKeys;
  FlaxJsFunction? _arrayCheck;
  _Value? _root;
  int _nextToken = 1;
  int? _frame;
  final _subscriptions = <int, _MountedProperty>{};
  final _dirty = <_NodeState, Set<String>>{};
  final _helpers = <String, FlaxJsFunction>{};
  final _enums = <String, FlaxJsObject>{};
  final _contexts = <int, _ContextReference>{};
  int _nextContext = 1;

  void requireOpen() {
    if (closing) throw StateError('The Flax session is closing');
  }

  // Retention is also allowed while closing: accepted Routes may rebuild content.
  void retainMount() {
    if (!active) throw StateError('Closed Flax session');
    _mounts++;
  }

  void releaseMount() {
    if (_mounts == 0) throw StateError('No mounted resource to release');
    _mounts--;
    _tryClose();
  }

  void retainRoute() {
    if (!active) throw StateError('Closed Flax session');
    _routeCount++;
  }

  // Call only after releasing the Route's callbacks, snapshots and previews.
  void releaseRoute() {
    if (_routeCount == 0) throw StateError('No Route resource to release');
    _routeCount--;
    _tryClose();
  }

  bool ownsPageRoute(ModalRoute<Object?>? route) => _heldRoutes.contains(route);

  void holdPageRoute(ModalRoute<Object?>? route) {
    if (ownsPageRoute(route)) return;
    requireOpen();
    if (route == null) return;
    _heldRoutes.add(route);
    retainRoute();
    unawaited(
      route.completed.then((_) {
        _heldRoutes.remove(route);
        releaseRoute();
      }),
    );
  }

  void load(
    String source,
    String sourceUrl, {
    required List<FlaxPlugin> plugins,
    required FlaxModuleAssets? moduleAssets,
  }) {
    try {
      _objectKeys = runtime.evaluate('Object.keys') as FlaxJsFunction;
      _arrayCheck = runtime.evaluate('Array.isArray') as FlaxJsFunction;
      registerMembers();
      registerComponents();
      registerObjects();
      registerStreams();
      registerFunctions();
      registerAsync();
      installModules(moduleAssets, plugins);
      installHost(plugins);
      runtime.registerHostFunction('__flaxInvalidate', (_, args) {
        if (args.length != 1 || args.single is! FlaxJsNumber) {
          throw ArgumentError('Invalid binding notification');
        }
        invalidate((args.single as FlaxJsNumber).value.toInt());
        return const FlaxJsUndefined();
      });
      runtime.registerHostFunction('__flaxMount', (_, args) {
        if (_root != null) throw StateError('A root is already mounted');
        if (args.length != 2 ||
            args[1] is! FlaxJsNumber ||
            (args[1] as FlaxJsNumber).value != flaxBindingVersion) {
          throw ArgumentError('Incompatible JS binding protocol');
        }
        _root = decode(args[0], const FlaxTypeRef('widget'));
        return const FlaxJsUndefined();
      });
      _releaseJs(runtime.evaluate(source, sourceUrl: sourceUrl));
      final pages = helper('finishRegistration').call(const []) as FlaxJsNumber;
      if (_root == null && pages.value == 0) {
        throw StateError('The script must call runApp or registerPage');
      }
      checkpoint();
    } catch (_) {
      _dispose();
      rethrow;
    }
  }

  void report(Object error, StackTrace stack) {
    final callback = onError;
    if (callback == null) {
      FlutterError.reportError(
        FlutterErrorDetails(exception: error, stack: stack, library: 'flax'),
      );
    } else {
      try {
        callback(error, stack);
      } catch (error, stack) {
        FlutterError.reportError(
          FlutterErrorDetails(
            exception: error,
            stack: stack,
            library: 'flax error callback',
          ),
        );
      }
    }
  }

  void invalidate(int token) {
    if (!active) return;
    final property = _subscriptions[token];
    if (property == null || !property.owner._active) return;
    _dirty.putIfAbsent(property.owner, () => {}).add(property.name);
    _frame ??= SchedulerBinding.instance.scheduleFrameCallback((_) {
      _frame = null;
      final updates = Map<_NodeState, Set<String>>.from(_dirty);
      _dirty.clear();
      for (final entry in updates.entries) {
        if (active && entry.key.mounted && entry.key._active) {
          entry.key.refresh(entry.value);
        }
      }
    });
  }

  List<String> keys(FlaxJsObject object) {
    final result = _objectKeys!.call([object]) as FlaxJsObject;
    try {
      final length = _property(
        result,
        'length',
        (value) => (value as FlaxJsNumber).value.toInt(),
      );
      return [for (var i = 0; i < length; i++) _textProperty(result, '$i')];
    } finally {
      result.release();
    }
  }

  _Value decode(
    FlaxJsValue value,
    FlaxTypeRef type, {
    _CallbackScope callbackScope = _CallbackScope.member,
    _CollectionConversion? conversion,
  }) {
    if (type.kind == 'data') {
      if (value is FlaxJsNull && !type.nullable) {
        throw ArgumentError('Unexpected null for data');
      }
      return _Value(decodeData(value));
    }
    if (type.kind == 'any') {
      final memo = conversion ?? _CollectionConversion();
      try {
        return decodeAny(value, type, memo);
      } finally {
        if (conversion == null) memo.close();
      }
    }
    if (value is FlaxJsNull) {
      if (!type.nullable) {
        throw ArgumentError('Unexpected null for ${type.kind}');
      }
      return _Value(null);
    }
    if (type.kind == 'void') {
      if (value is FlaxJsUndefined) return _Value(null);
      throw ArgumentError('Expected void, got ${value.runtimeType}');
    }
    if (type.kind == 'future') {
      final result = promiseResult(value, type)!;
      return _Value(type.future?.adapt(result) ?? result);
    }
    if (type.kind == 'futureOr') {
      final thenable =
          value is FlaxJsObject &&
          _property(value, 'then', (then) => then is FlaxJsFunction);
      if (!thenable) {
        return decode(value, type.item!, callbackScope: callbackScope);
      }
      final result = promiseResult(
        value,
        FlaxTypeRef('future', item: type.item),
      )!;
      return _Value(type.future?.adapt(result) ?? result);
    }
    if (type.kind == 'stream') {
      if (value is! FlaxJsObject) {
        throw ArgumentError('Expected a Dart Stream reference');
      }
      return decodeStream(value, type);
    }
    if (type.kind == 'record') {
      if (value is! FlaxJsObject) {
        throw ArgumentError('Expected a Record object');
      }
      final shape = helper('collectionShape').call([value]);
      try {
        if (shape is! FlaxJsString || shape.value != 'record') {
          throw ArgumentError('Expected a Record object');
        }
      } finally {
        _releaseJs(shape);
      }
      final binding = type.record;
      if (binding == null) throw ArgumentError('Missing Record binding');
      final ownKeys = keys(value).toSet();
      final fields = <_Value>[];
      try {
        for (final field in binding.fields) {
          if (!ownKeys.contains(field.name)) {
            throw ArgumentError('Missing Record field ${field.name}');
          }
          try {
            fields.add(
              _property(
                value,
                field.name,
                (input) => decode(
                  input,
                  field.type,
                  callbackScope: callbackScope,
                  conversion: conversion,
                ),
              ),
            );
          } catch (error) {
            throw ArgumentError('Record field ${field.name}: $error');
          }
        }
        return _Value(
          binding.create(
            fields.map((field) => field.data).toList(growable: false),
          ),
          fields,
        );
      } catch (_) {
        for (final field in fields.reversed) {
          field.release();
        }
        rethrow;
      }
    }
    if ((type.kind == 'object' || type.kind == 'state') &&
        value is FlaxJsObject) {
      final componentState = decodeComponentStateReference(value, type);
      if (componentState != null) return componentState;
    }
    if (type.kind == 'object') {
      final binding = registry._types[type.id];
      final primitive = value is FlaxJsString
          ? value.value
          : value is FlaxJsBoolean
          ? value.value
          : value is FlaxJsNumber
          ? value.value
          : null;
      if (primitive != null &&
          binding is FlaxObjectBinding &&
          binding.matches?.call(primitive) == true) {
        return _Value(primitive);
      }
      if (value is! FlaxJsObject) {
        throw ArgumentError('Expected a Dart object reference');
      }
      final handle = helper('tryObjectHandle').call([value]);
      late final _ObjectReference object;
      if (handle is FlaxJsNumber) {
        validateDeferredObject(value, type);
        object = objectReference(
          value,
          type.id!,
          knownHandle: handle.value.toInt(),
        );
      } else {
        if (type.deferredFactories.isEmpty) {
          throw ArgumentError('Expected a Dart object reference');
        }
        object = materializeDeferredObject(value, type);
      }
      return _Value(object.value, [_ObjectBorrow(object, value.retain())]);
    }
    if (type.kind == 'String' && value is FlaxJsString) {
      return _Value(value.value);
    }
    if (type.kind == 'bool' && value is FlaxJsBoolean) {
      return _Value(value.value);
    }
    if (type.kind == 'double' && value is FlaxJsNumber) {
      return _Value(value.value);
    }
    if (type.kind == 'num' && value is FlaxJsNumber) {
      final number = value.value;
      if (number.isFinite &&
          number.abs() <= 9007199254740991 &&
          number.truncateToDouble() == number) {
        return _Value(number.toInt());
      }
      return _Value(number);
    }
    if (type.kind == 'scalar' && value is FlaxJsString) {
      return _Value(value.value);
    }
    if ((type.kind == 'int' || type.kind == 'scalar') &&
        value is FlaxJsNumber) {
      if (!value.value.isFinite ||
          value.value.abs() > 9007199254740991 ||
          value.value.truncateToDouble() != value.value) {
        throw ArgumentError('Expected a safe integer');
      }
      return _Value(value.value.toInt());
    }
    if (type.kind == 'callback' && value is FlaxJsFunction) {
      final signature = type.callback;
      if (signature == null) throw ArgumentError('Missing callback signature');
      final returned = returnedFunction(value, signature);
      if (returned != null) {
        return _Value(returned.value, [
          _ObjectBorrow(returned, value.retain()),
        ]);
      }
      final callback = _Callback(
        this,
        value.retain() as FlaxJsFunction,
        signature,
        scope: callbackScope,
      );
      return _Value(callback.wrap(), [callback]);
    }
    if (value is! FlaxJsObject) {
      throw ArgumentError('Expected ${type.kind}, got ${value.runtimeType}');
    }
    if ({'iterable', 'map', 'set'}.contains(type.kind) ||
        (type.kind == 'list' &&
            !{'widget', 'page'}.contains(type.item!.kind))) {
      final memo = conversion ?? _CollectionConversion();
      try {
        return decodeCollection(value, type, memo);
      } finally {
        if (conversion == null) memo.close();
      }
    }
    if (type.kind == 'list') {
      final isArray = _arrayCheck!.call([value]);
      if (isArray is! FlaxJsBoolean || !isArray.value) {
        if (type.item!.kind == 'widget') {
          final handle = helper('tryObjectHandle').call([value]);
          if (handle is FlaxJsNumber) {
            final reference = _objects[handle.value.toInt()];
            if (reference == null || reference.value is! List<Widget>) {
              throw ArgumentError('Expected a Dart List<Widget>');
            }
            final items = <_Value>[];
            try {
              final widgets = List<Widget>.unmodifiable(
                reference.value as List<Widget>,
              );
              for (final widget in widgets) {
                checkWidgetType(widget, type.item!);
                items.add(retainWidget(widget));
              }
              _checkWidgetKeys(widgets);
              return _Value(widgets, items);
            } catch (_) {
              for (final item in items.reversed) {
                item.release();
              }
              rethrow;
            }
          }
        }
        throw ArgumentError('Expected a JS array');
      }
      final count = _property(
        value,
        'length',
        (length) => (length as FlaxJsNumber).value.toInt(),
      );
      final items = <_Value>[];
      try {
        for (var i = 0; i < count; i++) {
          items.add(_property(value, '$i', (item) => decode(item, type.item!)));
        }
        if (type.item!.kind == 'widget') {
          final widgets = items
              .map((item) => item.data as Widget)
              .toList(growable: false);
          _checkWidgetKeys(widgets);
          return _Value(List<Widget>.unmodifiable(widgets), items);
        }
        if (type.item!.kind == 'page') {
          final pages = items
              .map((item) => item.data as Page<Object?>)
              .toList();
          final keys = <LocalKey>{};
          for (final page in pages) {
            if (page.key != null && !keys.add(page.key!)) {
              throw ArgumentError('Duplicate Page key: ${page.key}');
            }
          }
          return _Value(List<Page<Object?>>.unmodifiable(pages), items);
        }
        throw ArgumentError('Unsupported list element type');
      } catch (_) {
        for (final item in items.reversed) {
          item.release();
        }
        rethrow;
      }
    }
    final kind = _textProperty(value, 'kind');
    if (type.kind == 'widget' && kind == 'dart-widget') {
      return checkWidgetValue(
        decodeDartWidget(value) ?? (throw ArgumentError('Invalid Dart Widget')),
        type,
      );
    }
    if (type.kind == 'widget' && kind == 'component') {
      return checkWidgetValue(decodeComponent(value), type);
    }
    final id = _textProperty(value, 'type');
    final definition = id == _pageContentBinding.id
        ? _pageContentBinding
        : registry._types[id];
    if (type.kind == 'enum' &&
        kind == 'enum' &&
        id == type.id &&
        definition is FlaxEnumBinding) {
      final name = _textProperty(value, 'name');
      if (!definition.values.containsKey(name)) {
        throw ArgumentError('Unknown enum value: $id.$name');
      }
      return _Value(definition.values[name]);
    }
    if (type.kind == 'widget' &&
        kind == 'widget' &&
        definition is FlaxWidgetBinding) {
      final ctor = _textProperty(value, 'ctor');
      final parameters = definition.constructors[ctor];
      if (parameters == null) {
        throw ArgumentError('Unsupported constructor: $id.$ctor');
      }
      final sources = _arguments(
        value,
        parameters,
        allowBindings: !definition.fixedArguments,
      );
      final node = FlaxNode._(this, definition, ctor, sources);
      try {
        final host = definition.createHost(node);
        checkWidgetType(host, type);
        // Validate constructor invariants before accepting the structural snapshot.
        final validated = host.buildNative(
          sources.map((name, source) => MapEntry(name, source.initial.data)),
        );
        if (parameters.every((parameter) => !parameter.type.containsCallback) &&
            sources.values.every((source) => source.binding == null)) {
          node._validatedWidget = validated;
        }
        return _Value(host, [node]);
      } catch (_) {
        node.release();
        rethrow;
      }
    }
    if (type.kind == 'page' &&
        kind == 'value' &&
        definition is FlaxPageBinding &&
        (id == type.id || definition.supertypes.contains(type.id))) {
      return decodePage(value, definition, _textProperty(value, 'ctor'));
    }
    if (type.kind == 'route' &&
        kind == 'value' &&
        definition is FlaxRouteBinding &&
        (id == type.id || definition.supertypes.contains(type.id))) {
      return decodeRoute(value, definition, _textProperty(value, 'ctor'));
    }
    throw ArgumentError(
      'Unknown or incompatible binding: $id (expected ${type.id ?? type.kind})',
    );
  }

  Map<String, _Source> _arguments(
    FlaxJsObject descriptor,
    List<FlaxParameter> parameters, {
    required bool allowBindings,
    _CallbackScope callbackScope = _CallbackScope.member,
  }) => _property(descriptor, 'args', (args) {
    if (args is! FlaxJsObject) {
      throw ArgumentError('Descriptor args must be an object');
    }
    final expected = parameters.map((param) => param.name).toSet();
    for (final name in keys(args)) {
      if (!expected.contains(name)) {
        throw ArgumentError('Unsupported argument: $name');
      }
    }
    final sources = <String, _Source>{};
    try {
      for (final parameter in parameters) {
        if (parameter.omitWhenAbsent &&
            _property(
              args,
              parameter.name,
              (value) => value is FlaxJsUndefined,
            )) {
          continue;
        }
        sources[parameter.name] = _property(args, parameter.name, (value) {
          if (value is FlaxJsUndefined) {
            if (parameter.required) {
              throw ArgumentError(
                'Missing required argument: ${parameter.name}',
              );
            }
            return _Source(
              this,
              parameter.type,
              _Value(parameter.defaultValue),
            );
          }
          final bound =
              value is FlaxJsObject &&
              _property(
                value,
                'kind',
                (kind) => kind is FlaxJsString && kind.value == 'binding',
              );
          if (bound) {
            if (!allowBindings || parameter.name == 'key') {
              throw ArgumentError(
                'This argument is fixed; bind the containing Widget parameter instead',
              );
            }
            final object = value;
            final initial = _property(object, 'read', (reader) {
              if (reader is! FlaxJsFunction) {
                throw ArgumentError('Invalid binding reader');
              }
              final result = reader.call(const []);
              try {
                return decode(
                  result,
                  parameter.type,
                  callbackScope: callbackScope,
                );
              } finally {
                _releaseJs(result);
              }
            });
            try {
              return _Source(this, parameter.type, initial, object.retain());
            } catch (_) {
              initial.release();
              rethrow;
            }
          }
          return _Source(
            this,
            parameter.type,
            decode(value, parameter.type, callbackScope: callbackScope),
          );
        });
      }
      return sources;
    } catch (_) {
      for (final source in sources.values) {
        source.release();
      }
      rethrow;
    }
  });

  Future<void> requestClose() {
    if (!closing) {
      _status = _SessionStatus.closing;
      cancelFutures();
      cancelPromises();
      cancelStreamSubscriptions();
      cancelStreamIterators();
      cancelAsyncIterableSources();
      closeHost();
      closeModules();
      checkpoint();
    }
    _tryClose();
    return _closed.future;
  }

  void _tryClose() {
    if (closing &&
        _mounts == 0 &&
        _routeCount == 0 &&
        _unmountedResults.isEmpty &&
        _hostTasks.isEmpty &&
        !_checkpointScheduled &&
        !_checkpointRunning) {
      _dispose();
    }
  }

  void _dispose() {
    if (!active) return;
    cancelPromises();
    cancelStreamIterators();
    cancelAsyncIterableSources();
    disposeHost();
    disposeModules();
    _status = _SessionStatus.closed;
    if (_frame != null) {
      SchedulerBinding.instance.cancelFrameCallbackWithId(_frame!);
    }
    _frame = null;
    _dirty.clear();
    _subscriptions.clear();
    _root?.release();
    _root = null;
    for (final context in _contexts.values.toList()) {
      context.close();
    }
    for (final object in _objects.values.toList().reversed) {
      try {
        object.removeListeners();
        object.release();
      } catch (error, stack) {
        report(error, stack);
      }
    }
    for (final stream in _streamReferences.values.toList().reversed) {
      stream.release();
    }
    for (final error in _dartErrors.values.toList().reversed) {
      error.release();
    }
    for (final configuration in _configurations.toList()) {
      configuration.release();
    }
    _componentDescriptions.clear();
    for (final handle in _callbackHandles.toList()) {
      handle.release();
    }
    for (final helper in _helpers.values) {
      helper.release();
    }
    _helpers.clear();
    for (final value in _enums.values) {
      value.release();
    }
    _enums.clear();
    _objectKeys?.release();
    _arrayCheck?.release();
    for (final result in _hostResults) {
      result.release();
    }
    _hostResults.clear();
    _states.clear();
    _componentTypes.clear();
    _pending.clear();
    _promises.clear();
    runtime.dispose();
    if (!_closed.isCompleted) _closed.complete();
  }
}

void _checkWidgetKeys(List<Widget> widgets) {
  final keys = <Key>{};
  for (final widget in widgets) {
    if (widget.key != null && !keys.add(widget.key!)) {
      throw ArgumentError('Duplicate sibling key: ${widget.key}');
    }
  }
}
