part of '../../bindings.dart';

enum _SessionStatus { open, closing, closed }

final _bindingContextKey = Object();

class _BindingContext {
  _BindingContext(
    this.moduleId,
    Iterable<String> dependencies, {
    this.dartProviders = const {},
    this.dartViews = const {},
  }) : dependencies = Set<String>.unmodifiable(dependencies);
  final String moduleId;
  String get namespace => moduleId.split('/').first;
  final Set<String> dependencies;
  final Map<Type, String> dartProviders;
  final Map<Type, FlaxTypeRef> dartViews;
  bool get hasDartSelection => dartProviders.isNotEmpty || dartViews.isNotEmpty;
  T run<T>(T Function() action) => identical(_bindingContext, this)
      ? action()
      : runZoned(action, zoneValues: {_bindingContextKey: this});
}

_BindingContext? get _bindingContext =>
    Zone.current[_bindingContextKey] as _BindingContext?;

// Erased nested values need the origin even when a lazy view is reused later.
bool _usesBindingContext(FlaxTypeRef type) =>
    type.kind == 'any' ||
    (type.item != null && _usesBindingContext(type.item!)) ||
    (type.key != null && _usesBindingContext(type.key!)) ||
    (type.record?.fields.any((field) => _usesBindingContext(field.type)) ??
        false) ||
    (type.callback != null && _usesBindingContext(type.callback!.result));

String _bindingViewKey(String id, bool usesContext) =>
    usesContext && _bindingContext != null
    ? '$id@${_bindingContext!.moduleId}'
    : id;

typedef _BindingOperation = FlaxJsValue Function(
  int receiver,
  List<FlaxJsValue> arguments,
);

class _Session {
  _Session(
    this.runtime,
    this.registry,
    this.onError, {
    this.namespace,
    required this.assetBundle,
    this.modulesPrepared = false,
    FlaxSandbox? sandbox,
  }) {
    this.sandbox = sandbox == null ? null : _SessionSandbox(this, sandbox);
  }
  late final _SessionSandbox? sandbox;
  bool _closingSandbox = false;
  Future<String>? _homePath;
  final bool modulesPrepared;
  final String? namespace;
  final AssetBundle assetBundle;
  _BindingContext? _contextForBinding(String id) {
    final selected = _specializedContexts[id];
    if (selected != null) return selected;
    final module = _bindingOwner(id);
    if (module != null) {
      return _bindingContexts.putIfAbsent(
        module.moduleId,
        () => _BindingContext(module.moduleId, module.dependencyModules),
      );
    }
    return _specializedContexts[id] ?? _genericObjectBindings[id]?.context;
  }

  final _bindingContexts = <String, _BindingContext>{};

  T _inBindingContext<T>(String id, T Function() action) {
    final context = _contextForBinding(id);
    // Built-in page content has no generated module and keeps the caller's context.
    return context == null ? action() : context.run(action);
  }

  void _registerBindingHostFunction(String name, FlaxJsHostFunction callback) {
    runtime.registerHostFunction(name, (receiver, arguments) {
      _BindingContext? context;
      if (arguments.length > 1 && arguments[1] is FlaxJsString) {
        context = _contextForBinding((arguments[1] as FlaxJsString).value);
      }
      if (context == null &&
          arguments.length > 2 &&
          arguments[2] is FlaxJsNumber) {
        context =
            _objects[(arguments[2] as FlaxJsNumber).value.toInt()]?.context;
      }
      if (name == '__flaxCreateStreamIterator' &&
          arguments.length > 1 &&
          arguments[1] is FlaxJsNumber) {
        context =
            _streamReferences[(arguments[1] as FlaxJsNumber).value.toInt()]
                ?.context ??
            context;
      }
      if (context == null &&
          name == '__flaxStreamIterator' &&
          arguments.length > 1 &&
          arguments[1] is FlaxJsNumber) {
        context = _streamIterators[(arguments[1] as FlaxJsNumber).value.toInt()]
            ?.reference
            .context;
      }
      return context == null
          ? callback(receiver, arguments)
          : context.run(() => callback(receiver, arguments));
    });
  }

  void registerOperations() {
    registerDartTypes();
    _registerBindingHostFunction('__flaxResolveOperation', (_, args) {
      _checkCall(args, 5);
      if (args.length != 5 && args.length != 6 ||
          args.skip(2).take(3).any((value) => value is! FlaxJsString)) {
        throw ArgumentError('Invalid binding operation');
      }
      final type = (args[1] as FlaxJsString).value;
      final category = (args[2] as FlaxJsString).value;
      final operation = (args[3] as FlaxJsString).value;
      final name = (args[4] as FlaxJsString).value;
      final layout = args.length == 6 ? _CallLayout.read(args[5]) : null;
      final key = (category, type, operation, name, layout?.key);
      final id = _operationIds.putIfAbsent(key, () {
        final invoke = switch (category) {
          'top' => _topLevelOperation(type, operation, name, layout),
          'static' => _staticOperation(type, operation, name, layout),
          'object' => _objectOperation(type, operation, name, layout),
          'reference' => _dartReferenceOperation(type, operation, name),
          'stream' => _streamOperation(type, operation, name, layout),
          'state' => _stateOperation(type, operation, name, layout),
          'context' => _contextOperation(type, operation, name, layout),
          _ => throw ArgumentError('Unknown binding category'),
        };
        final id = _operations.length;
        _operations.add((
          category,
          _specializedContexts[name] ?? _bindingContext,
          invoke,
        ));
        return id;
      });
      return FlaxJsNumber(id.toDouble());
    });
    runtime.registerHostFunction('__flaxInvokeOperation', (_, args) {
      if (!active) throw StateError('Closed Flax session');
      checkpoint();
      if (args.length < 2 ||
          args
              .take(2)
              .any(
                (value) =>
                    value is! FlaxJsNumber ||
                    !value.value.isFinite ||
                    value.value != value.value.truncateToDouble() ||
                    value.value < 0,
              )) {
        throw ArgumentError('Invalid binding operation receiver');
      }
      final id = (args[0] as FlaxJsNumber).value.toInt();
      if (id >= _operations.length) {
        throw ArgumentError('Unknown binding operation');
      }
      final (category, context, invoke) = _operations[id];
      final receiver = (args[1] as FlaxJsNumber).value.toInt();
      final origin = context?.hasDartSelection == true
          ? context
          : category == 'stream'
          ? _streamReferences[receiver]?.context ?? context
          : context ??
                (category == 'object' ? _objects[receiver]?.context : null);
      return bindingCall(
        () => origin == null
            ? invoke(receiver, args.sublist(2))
            : origin.run(() => invoke(receiver, args.sublist(2))),
      );
    });
  }

  FlaxJsValue bindingCall(FlaxJsValue Function() invoke) {
    try {
      return invoke();
    } catch (error, stack) {
      final exception = exceptionResult(error, stack);
      try {
        return holdHostResult(helper('failedCall').call([exception]));
      } finally {
        _releaseJs(exception);
      }
    }
  }

  _DartErrorReference? originalDartError(FlaxJsValue value) {
    if (value is! FlaxJsObject) return null;
    final id = helper('tryObjectHandle').call([value]);
    final error = id is FlaxJsNumber ? _dartErrors[id.value.toInt()] : null;
    return error != null && !error.released ? error : null;
  }

  void throwCallFailure(FlaxJsValue value) {
    if (value is! FlaxJsObject) return;
    final failure = helper('callFailure').call([value]);
    if (failure is! FlaxJsObject) return;
    try {
      _DartErrorReference? original;
      try {
        original = _property(failure, 'error', originalDartError);
      } catch (_) {
        // Even an unbridgeable rejection retains its safe text diagnostics.
      }
      if (original != null) {
        Error.throwWithStackTrace(original.error, original.stack);
      }
      final message = _textProperty(failure, 'message');
      final stack = _property(
        failure,
        'stack',
        (v) => v is FlaxJsString ? v.value : '',
      );
      throw FlaxJsException(message, jsStack: stack);
    } finally {
      failure.release();
    }
  }

  final _hostInstallations = <_HostInstallation>[];
  _ModuleInstallation? _moduleInstallation;
  // These entries are installed after plugins or by the application UI bundle.
  final _hostGlobals = <String>{
    '__flaxBindings',
    '__flaxHotCommit',
    '__flaxHotStage',
    '__flaxMount',
    '__flaxInvalidate',
    '__flaxAssetBundle',
    '__flaxHomePath',
    '__flaxRegisterFont',
  };
  final _hostTasks = ListQueue<(_HostContext, void Function())>();
  bool _hostClosing = false;
  final FlaxJsRuntime runtime;
  final FlaxBindingRegistry registry;
  late final _typeBindings = <String, FlaxTypeBinding>{...registry._types};
  final _materializedTypes = <FlaxTypeBinding>[];
  // Candidate lists never retain values; new generic bindings invalidate them.
  final _objectCandidates = <String, (int, List<FlaxObjectBinding>)>{};
  late final _functionBindings = <String, FlaxFunctionBinding>{
    ...registry._functions,
  };
  FlaxFunctionBinding? _functionBinding(String id) {
    final existing = _functionBindings[id];
    if (existing != null) return existing;
    final group = registry._constantGroups[id];
    if (group == null) return null;
    return _functionBindings[id] = FlaxFunctionBinding.constant(
      id,
      group.type,
      group.values[id],
    );
  }

  late final dartTypes = FlaxDartTypes._(this);
  FlaxTypeBinding? _typeBinding(String? id) =>
      id == null ? null : _typeBindings[id] ?? dartTypes.materialize(id);
  final _specializedContexts = <String, _BindingContext?>{};
  final _specializedOwners = <String, String>{};
  FlaxInstanceMethod? _genericMethod(String type, String name) =>
      _genericMethods[(type, name)] ??
      _genericMethods[(_specializedOwners[type] ?? type, name)];
  final _genericMethods = <(String, String), FlaxInstanceMethod>{};
  FlaxBindingModule? _bindingOwner(String id) =>
      registry._bindingOwners[id] ??
      registry._bindingOwners[_specializedOwners[id]];
  final void Function(Object, StackTrace)? onError;
  _SessionStatus _status = _SessionStatus.open;
  bool get active => _status != _SessionStatus.closed;
  bool get closing => _status != _SessionStatus.open;
  int _mounts = 0;
  final _closed = Completer<void>();
  final _fonts = <(String, String), FlaxFont>{};
  final _fontResources = _FontResources();
  final _componentStates = <int, FlaxComponentStateBase>{};
  final _componentDescriptions = <int, WeakReference<_ComponentDescription>>{};
  final _references = _WeakReferences<_BridgeReference>();
  final _widgetCleanups = <_WidgetCleanup>{};
  final _componentSessionId = _nextComponentSession++;
  final _componentTypes = <int, _ComponentType>{};
  int _nextComponentState = 1;
  final _states = <int, _StateReference>{};
  final _nativeStateFactories = <Set<int>>[];
  final _stateIds = Expando<Map<String, int>>();
  final _operations = <(String, _BindingContext?, _BindingOperation)>[];
  final _operationIds = <(String, String, String, String, String?), int>{};
  final _collectionBindings = <String, FlaxObjectBinding>{};
  final _genericObjectBindings =
      <String, ({FlaxObjectBinding binding, _BindingContext? context})>{};
  final _proxyLayouts = <(FlaxObjectBinding, int, List<(_CallLayout?, int)>)>[];
  final _objects = <int, _ObjectReference>{};
  final _objectIds = _IdentityIndex<_ObjectReference>();
  final _streamReferences = <int, _StreamReference>{};
  final _streamViews = _IdentityIndex<Map<String, _StreamReference>>();
  final _streamSubscriptions =
      _WeakReferences<_TrackedStreamSubscription<Object?>>();
  final _streamIterators = _WeakValueMap<int, _TrackedStreamIterator>();
  int _nextStreamIterator = 1;
  final _asyncIterableSources =
      _WeakValueMap<int, _AsyncIterableStreamSource>();
  final _dartErrors = _WeakValueMap<int, _DartErrorReference>();
  final _dartErrorIds = _IdentityIndex<_DartErrorReference>();
  final _collectionViews = _IdentityIndex<Map<String, _CollectionReference>>();
  // Repeated method tear-offs are equal, but not necessarily identical. Preserve
  // Dart listener removal semantics while keeping each conversion signature separate.
  final _functionViews = _FunctionIndex();
  final _contextIds = Expando<_ContextReference>();
  int _nextObject = 1;
  int _nextState = 1;
  final _hostResults = <FlaxJsObject>[];
  final _pending = _WeakValueMap<int, _PendingFuture>();
  // Completed values are real queued work until the next JS checkpoint.
  final _readyFutures = <int, _PendingFuture>{};
  int _nextFuture = 1;
  final _promises = _WeakValueMap<int, _PendingPromise>();
  int _nextPromise = 1;
  bool _checkpointScheduled = false;
  bool _checkpointRunning = false;
  bool _checkpointJobsPending = false;
  bool _loadingInStages = false;
  FlaxJsFunction? _objectKeys;
  FlaxJsFunction? _arrayCheck;
  _Value? _root;
  _Value? _hotRoot;
  Set<String>? _hotPages;
  int _hotRootGeneration = 0;
  final _hotPageGenerations = <String, int>{};
  int _nextToken = 1;
  int? _frame;
  final _subscriptions = <int, _MountedProperty>{};
  final _dirty = <_NodeState, Set<String>>{};
  final _helpers = <String, FlaxJsFunction>{};
  late final _argumentKeyReader = _loadHelper('argumentKeys');
  late final _argumentSnapshotReader = _loadHelper('readArguments');
  late final _typedReferenceReader = _loadHelper('typedReference');
  late final _widgetInfoReader = _loadHelper('widgetInfo');
  late final _widgetBatchReader = _loadHelper('readWidgetBatch');
  late final _callbackReferenceReader = _loadHelper('callbackReference');
  late final _memoFunctionReader = _loadHelper('functionWithMemo');
  late final _argumentReferenceReader = _loadHelper('argumentReference');
  bool _argumentReferencesEnabled = false;
  bool _callbackMemoEnabled = false;
  bool _widgetBatchEnabled = false;
  int _widgetBatchDepth = 0;
  void Function(List<FlaxJsValue>)? _widgetBatchReceiver;
  void Function(List<FlaxJsValue>)? _argumentSnapshotReceiver;
  final _enums = <String, FlaxJsObject>{};
  final _contexts = <int, _ContextReference>{};

  void requireOpen() {
    if (closing) throw StateError('The Flax session is closing');
  }

  // Mounted content may finish cleanup while the session is closing.
  void retainMount() {
    if (!active) throw StateError('Closed Flax session');
    _mounts++;
  }

  void releaseMount() {
    if (_mounts == 0) throw StateError('No mounted resource to release');
    _mounts--;
    _tryClose();
  }

  FlaxModuleLoader? _moduleLoader;

  void initialize({
    required List<FlaxPlugin> plugins,
    required FlaxModuleAssets? moduleAssets,
    required List<String> requiredCapabilities,
  }) {
    try {
      _checkCapabilities(requiredCapabilities);
      for (final _ in _prepareSteps(plugins, moduleAssets)) {}
    } catch (_) {
      _dispose();
      rethrow;
    }
  }

  // Only initialization owns the startup queue; application await never does.
  Future<void> initializeStaged({
    required List<FlaxPlugin> plugins,
    required FlaxModuleAssets? moduleAssets,
    required List<String> requiredCapabilities,
    void Function(String, int)? onStep,
    bool Function()? cancelled,
  }) async {
    _loadingInStages = true;
    final steps = _prepareSteps(plugins, moduleAssets).iterator;
    final budget = Stopwatch()..start();
    try {
      _checkCapabilities(requiredCapabilities);
      while (true) {
        if (cancelled?.call() == true) throw StateError('Closed Flax session');
        requireOpen();
        final step = Stopwatch()..start();
        if (!steps.moveNext()) break;
        onStep?.call(steps.current, step.elapsedMicroseconds);
        if (budget.elapsedMicroseconds >= 4000) {
          await WidgetsBinding.instance.endOfFrame;
          await Future<void>.delayed(Duration.zero);
          budget.reset();
        }
      }
    } catch (_) {
      if (active) _dispose();
      rethrow;
    } finally {
      _loadingInStages = false;
    }
  }

  void _checkCapabilities(List<String> required) {
    final capabilities = runtime is FlaxJsModuleRuntime
        ? (runtime as FlaxJsModuleRuntime).moduleCapabilities
        : 0;
    const bits = {
      'esm': 1,
      'json-modules': 2,
      'wasm-modules': 4,
      'wasm-source-imports': 8,
    };
    for (final name in required) {
      final bit = bits[name];
      if (bit == null || capabilities & bit == 0) {
        throw UnsupportedError('Missing native module capability: $name');
      }
    }
  }

  FutureOr<void> loadEntry(
    FlaxModuleSource entry, {
    required FlaxModuleSourceLoader loadSource,
    required Map<String, Uri> imports,
  }) {
    try {
      final loader = _moduleLoader = FlaxModuleLoader(
        runtime: runtime,
        loadSource: loadSource,
        imports: imports,
        onError: report,
        hostModule: (specifier) => _moduleInstallation?.namespace(specifier),
      );
      final pending = loader.start(entry);
      if (pending is Future<void>) {
        return () async {
          try {
            await pending;
            requireOpen();
            _finishLoading();
          } catch (_) {
            _dispose();
            rethrow;
          }
        }();
      }
      // A synchronous host call may close after the entry created its root.
      if (!active) throw StateError('Closed Flax session');
      _finishLoading();
      return null;
    } catch (_) {
      _dispose();
      rethrow;
    }
  }

  Iterable<String> _prepareSteps(
    List<FlaxPlugin> plugins,
    FlaxModuleAssets? moduleAssets,
  ) sync* {
    if (runtime is FlaxJsModuleRuntime) {
      (runtime as FlaxJsModuleRuntime).setHostJobHandler(checkpoint);
    }
    final widgetBatch = runtime.getGlobal('__flaxWidgetBatch');
    _widgetBatchEnabled = widgetBatch is! FlaxJsBoolean || widgetBatch.value;
    _releaseJs(widgetBatch);
    final callbackMemo = runtime.getGlobal('__flaxCallbackMemo');
    _callbackMemoEnabled = callbackMemo is! FlaxJsBoolean || callbackMemo.value;
    _releaseJs(callbackMemo);
    final argumentReferences = runtime.getGlobal('__flaxArgumentReferences');
    _argumentReferencesEnabled =
        argumentReferences is! FlaxJsBoolean || argumentReferences.value;
    _releaseJs(argumentReferences);
    runtime.registerHostFunction('__flaxReadWidgetBatch', (_, values) {
      final receive = _widgetBatchReceiver;
      if (receive == null) throw StateError('No Widget batch read in progress');
      receive(values);
      return const FlaxJsUndefined();
    });
    _objectKeys = runtime.evaluate('Object.keys') as FlaxJsFunction;
    _arrayCheck = runtime.evaluate('Array.isArray') as FlaxJsFunction;
    registerComponents();
    registerObjects();
    registerStreams();
    registerFunctions();
    registerAsync();
    runtime.registerHostFunction('__flaxReadArguments', (_, values) {
      final receive = _argumentSnapshotReceiver;
      if (receive == null) throw StateError('No argument read in progress');
      receive(values);
      return const FlaxJsUndefined();
    });
    runtime.registerHostFunction('__flaxHomePath', (_, args) {
      if (args.isNotEmpty) {
        throw ArgumentError('getHomePath takes no arguments');
      }
      return holdHostResult(
        futureResult(_getHomePath(), const FlaxTypeRef('String')),
      );
    });
    runtime.registerHostFunction('__flaxAssetBundle', (_, args) {
      if (args.isNotEmpty || !active) {
        throw StateError('Invalid session asset bundle request');
      }
      return holdHostResult(
        objectResult(
          assetBundle,
          const FlaxTypeRef(
            'object',
            id: 'flax.core/sdk_services#type:AssetBundle',
          ),
        ),
      );
    });
    runtime.registerHostFunction('__flaxRegisterFont', (_, args) {
      if (closing ||
          args.length != 2 ||
          args.any((value) => value is! FlaxJsString)) {
        throw ArgumentError('Invalid module font registration');
      }
      final manifest = (args[0] as FlaxJsString).value;
      final name = (args[1] as FlaxJsString).value;
      final key = (manifest, name);
      var font = _fonts[key];
      if (font == null || font._disposed) {
        _checkFontAsset(manifest);
        if (name.isEmpty) throw ArgumentError('Invalid module font name');
        font = FlaxFont._(assetBundle, manifest, name, _fontResources);
        _fonts[key] = font;
      }
      return holdHostResult(
        objectResult(
          font,
          const FlaxTypeRef('object', id: 'flax.core/flutter#type:FlaxFont'),
        ),
      );
    });
    yield 'binding-hosts';
    yield* installModuleSteps(moduleAssets, plugins);
    installHost(plugins);
    yield 'host-plugins';
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
    runtime.registerHostFunction('__flaxHotStage', (_, args) {
      if (args.length != 2 || args[1] is! FlaxJsString) {
        throw ArgumentError('Invalid hot reload stage');
      }
      _Value? root;
      try {
        if (args[0] is! FlaxJsUndefined) {
          root = decode(args[0], const FlaxTypeRef('widget'))..validate();
        }
        final value = jsonDecode((args[1] as FlaxJsString).value);
        if (value is! List || value.any((item) => item is! String)) {
          throw ArgumentError('Invalid hot reload pages');
        }
        _hotRoot?.release();
        _hotRoot = root;
        root = null;
        _hotPages = value.cast<String>().toSet();
      } finally {
        root?.release();
      }
      return const FlaxJsUndefined();
    });
    runtime.registerHostFunction('__flaxHotCommit', (_, args) {
      if (args.isNotEmpty || _hotPages == null) {
        throw StateError('No staged hot reload');
      }
      final root = _hotRoot;
      _hotRoot = null;
      if (root != null) {
        final previous = _root;
        _root = root;
        _hotRootGeneration++;
        if (previous != null) retireHot(previous.release);
      }
      for (final name in _hotPages!) {
        _hotPageGenerations[name] = (_hotPageGenerations[name] ?? 0) + 1;
      }
      _hotPages = null;
      unawaited(WidgetsBinding.instance.reassembleApplication());
      return const FlaxJsUndefined();
    });
    yield 'application-hosts';
  }

  void _finishLoading() {
    // Keep checkpoint helpers in the fixed Session handle set.
    helper('releaseContext');
    helper('sweepObjects');
    final pages = helper('finishRegistration').call(const []) as FlaxJsNumber;
    if (_root == null && pages.value == 0) {
      throw StateError('The application must call runApp or registerPage');
    }
    _loadingInStages = false;
    checkpoint();
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

  int hotPageGeneration(String name) => _hotPageGenerations[name] ?? 0;

  void retireHot(void Function() release) {
    retainMount();
    SchedulerBinding.instance.addPostFrameCallback((_) {
      try {
        release();
      } catch (error, stack) {
        report(error, stack);
      } finally {
        releaseMount();
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

  (bool, Set<String>) _argumentKeys(FlaxJsObject object) {
    final reader = _argumentKeyReader;
    if (reader == null) return (false, keys(object).toSet());
    final result = reader.call([object]);
    if (result is! FlaxJsObject) {
      throw ArgumentError('Invalid argument keys');
    }
    try {
      final length = _property(result, 'length', (value) {
        if (value is! FlaxJsNumber ||
            !value.value.isFinite ||
            value.value < 1 ||
            value.value != value.value.truncateToDouble()) {
          throw ArgumentError('Invalid argument keys length');
        }
        return value.value.toInt();
      });
      final own = _property(result, '0', (value) {
        if (value is! FlaxJsBoolean) {
          throw ArgumentError('Invalid argument snapshot');
        }
        return value.value;
      });
      return (
        own,
        {for (var i = 1; i < length; i++) _textProperty(result, '$i')},
      );
    } finally {
      result.release();
    }
  }

  bool _readArgumentSnapshot(
    FlaxJsObject args,
    void Function(Map<String, FlaxJsValue>) read,
  ) {
    final reader = _argumentSnapshotReader;
    if (reader == null) return false;
    final previous = _argumentSnapshotReceiver;
    var received = false;
    (Object, StackTrace)? failure;
    _argumentSnapshotReceiver = (values) {
      try {
        if (received) throw ArgumentError('Repeated argument snapshot');
        received = true;
        final snapshot = _argumentValues(values, 0);
        read(snapshot);
      } catch (error, stack) {
        // Rethrow on Dart's original stack, without a second JS exception wrapper.
        failure ??= (error, stack);
      }
    };
    try {
      final result = reader.call([args]);
      try {
        if (failure case final error?) {
          Error.throwWithStackTrace(error.$1, error.$2);
        }
        if (result is! FlaxJsBoolean || result.value != received) {
          throw ArgumentError('Invalid argument snapshot result');
        }
        return result.value;
      } finally {
        _releaseJs(result);
      }
    } finally {
      _argumentSnapshotReceiver = previous;
    }
  }

  Map<String, FlaxJsValue> _argumentValues(
    List<FlaxJsValue> values,
    int start,
  ) {
    if ((values.length - start).isOdd) {
      throw ArgumentError('Invalid argument snapshot');
    }
    final snapshot = <String, FlaxJsValue>{};
    for (var i = start; i < values.length; i += 2) {
      final name = values[i];
      if (name is! FlaxJsString || snapshot.containsKey(name.value)) {
        throw ArgumentError('Invalid argument snapshot key');
      }
      snapshot[name.value] = values[i + 1];
    }
    return snapshot;
  }

  _Value decode(
    FlaxJsValue value,
    FlaxTypeRef type, {
    _CallbackScope callbackScope = _CallbackScope.member,
    _CollectionConversion? conversion,
    FlaxJsValue? knownReference,
  }) {
    type = dartTypes._resolveRef(type);
    if (value is _WidgetBatchValue) {
      return _decodeWidgetBatchValue(value, type, callbackScope, conversion);
    }
    if (type.kind == 'data') {
      if (value is FlaxJsNull && !type.nullable) {
        throw ArgumentError('Unexpected null for data');
      }
      return _Value(decodeData(value));
    }
    if (type.kind == 'any' || type.kind == 'void') {
      if (type.kind == 'void' && value is FlaxJsUndefined) return _Value(null);
      final memo = conversion ?? _CollectionConversion();
      try {
        return decodeAny(
          value,
          type.kind == 'void' ? const FlaxTypeRef('any', nullable: true) : type,
          memo,
        );
      } finally {
        if (conversion == null) memo.close();
      }
    }
    if (value is FlaxJsNull) {
      if (!type.nullable) {
        if (type.kind == 'futureOr') {
          return decode(
            value,
            type.item!,
            callbackScope: callbackScope,
            conversion: conversion,
          );
        }
        throw ArgumentError('Unexpected null for ${type.kind}');
      }
      return _Value(null);
    }
    if (FlaxBufferType.byDartName[type.kind] case final bufferType?) {
      if (value is! FlaxJsObject) {
        throw ArgumentError('Expected native ${type.kind} data');
      }
      return _Value(runtime.readSharedBuffer(value, bufferType));
    }
    if (type.kind == 'BigInt' && value is FlaxJsBigInt) {
      return _Value(value.value);
    }
    if (type.kind == 'context') {
      final handle = helper('contextHandle')
          .call([value, FlaxJsString(type.id!)]);
      return _Value(_context(handle, type.id!).requireActive());
    }
    if (type.kind == 'never') throw ArgumentError('Never has no values');
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
      if (shape is! FlaxJsString || shape.value != 'record') {
        throw ArgumentError('Expected a Record object');
      }
      var binding = type.record;
      if (binding == null) {
        final signature = helper('recordType').call([value]);
        if (signature is FlaxJsString) {
          binding = dartTypes._records[signature.value]?.record;
        }
      }
      final ownKeys = keys(value).toSet();
      final layout =
          binding?.fields ?? dartTypes.recordFields(ownKeys.toList());
      final fields = <_Value>[];
      try {
        for (final field in layout) {
          if (!ownKeys.contains(field.name)) {
            throw ArgumentError('Missing Record field ${field.name}');
          }
          try {
            final decoded = _property(
              value,
              field.name,
              (input) => decode(
                input,
                field.type,
                callbackScope: callbackScope,
                conversion: conversion,
              ),
            );
            fields.add(decoded);
          } catch (error) {
            throw ArgumentError('Record field ${field.name}: $error');
          }
        }
        return _Value(
          dartTypes.newRecord(
            binding,
            layout,
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
    String? widgetId, widgetConstructor;
    if (type.kind == 'widget' && value is FlaxJsObject) {
      if (_widgetBatchEnabled && _widgetBatchDepth == 0) {
        final batch = _readWidgetBatch(value, type, callbackScope, conversion);
        if (batch != null) return batch;
      }
      final info = knownReference is FlaxJsNumber
          ? knownReference
          : _widgetInfoReader?.call([value]);
      if (info is FlaxJsString) {
        final separator = info.value.indexOf('\u0000');
        if (separator <= 0 ||
            info.value.indexOf('\u0000', separator + 1) != -1) {
          throw ArgumentError('Invalid Widget metadata');
        }
        widgetId = info.value.substring(0, separator);
        widgetConstructor = info.value.substring(separator + 1);
      } else if (info is FlaxJsNumber) {
        if (!info.value.isFinite ||
            info.value <= 0 ||
            info.value.truncateToDouble() != info.value) {
          throw ArgumentError('Invalid Dart Widget handle');
        }
        return checkWidgetValue(
          decodeDartWidget(value, knownHandle: info.value.toInt())!,
          type,
        );
      } else if (info == null) {
        final reference = decodeDartWidget(value);
        if (reference != null) return checkWidgetValue(reference, type);
      } else if (info is! FlaxJsNull) {
        _releaseJs(info);
        throw ArgumentError('Invalid Widget metadata');
      }
    }
    final identity =
        value is FlaxJsObject &&
            (type.kind == 'object' ||
                type.kind == 'state' ||
                type.kind == 'enum')
        ? knownReference ?? _typedReferenceReader?.call([value])
        : null;
    if (identity != null &&
        identity is! FlaxJsNull &&
        identity is! FlaxJsNumber &&
        identity is! FlaxJsString) {
      _releaseJs(identity);
      throw ArgumentError('Invalid typed reference');
    }
    if ((type.kind == 'object' || type.kind == 'state') &&
        value is FlaxJsObject) {
      final componentState = decodeComponentStateReference(
        value,
        type,
        knownId: identity == null
            ? null
            : identity is FlaxJsNumber && identity.value < 0
            ? FlaxJsNumber(-identity.value)
            : const FlaxJsNull(),
      );
      if (componentState != null) return componentState;
      if (type.kind == 'state') {
        final id = helper('stateHandle').call([value, FlaxJsString(type.id!)]);
        final reference = id is FlaxJsNumber ? _states[id.value.toInt()] : null;
        final expected = _typeBinding(type.id);
        if (reference == null || expected is! FlaxStateBinding) {
          throw ArgumentError('Invalid or foreign State');
        }
        final state = reference.mounted;
        if (state == null) throw StateError('Unmounted State');
        if (expected.matches?.call(state) == false) {
          throw ArgumentError('Incompatible State');
        }
        return _Value(state);
      }
    }
    if ((type.kind == 'enum' || type.kind == 'object') &&
        value is FlaxJsObject) {
      final enumType = identity ?? helper('enumType').call([value]);
      if (enumType is FlaxJsString) {
        final definition = _typeBinding(enumType.value);
        final name = helper('enumName').call([value]);
        if (definition is! FlaxEnumBinding ||
            name is! FlaxJsString ||
            !definition.values.containsKey(name.value)) {
          throw ArgumentError('Unregistered Dart enum');
        }
        final entry = definition.values[name.value]!;
        final expected = _typeBinding(type.id);
        final compatible = type.kind == 'enum'
            ? expected is FlaxEnumBinding &&
                  expected.values.values.any((value) => identical(value, entry))
            : expected is FlaxObjectBinding &&
                  expected.matches?.call(entry) == true;
        if (!compatible) throw ArgumentError('Incompatible Dart enum');
        return _Value(entry);
      }
      if (type.kind == 'enum') {
        throw ArgumentError('Expected a genuine Dart enum');
      }
    }
    if (type.kind == 'object') {
      final binding = _typeBinding(type.id);
      if (binding is FlaxObjectBinding &&
          binding.nativeInput == 'Uri' &&
          value is FlaxJsString) {
        return _Value(Uri.parse(value.value));
      }
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
      final handle = identity ?? helper('tryObjectHandle').call([value]);
      late final _ObjectReference object;
      if (handle is FlaxJsNumber) {
        validateDeferredObject(value, type);
        object = objectReference(
          value,
          type.id!,
          knownHandle: handle.value.toInt(),
        );
      } else {
        if (binding is FlaxObjectBinding) {
          if (binding.nativeInput == 'DateTime') {
            final milliseconds = helper('nativeDateMilliseconds').call([value]);
            return _Value(
              DateTime.fromMillisecondsSinceEpoch(
                (milliseconds as FlaxJsNumber).value.toInt(),
              ),
            );
          }
          if (binding.nativeInput == 'Uri') {
            final text = helper('nativeUriText').call([value]);
            return _Value(Uri.parse((text as FlaxJsString).value));
          }
          if (binding.nativeInput == 'RegExp' ||
              binding.nativeInput == 'Pattern') {
            final result = helper('nativeRegExp').call([value]) as FlaxJsObject;
            try {
              return _Value(
                RegExp(
                  _textProperty(result, '0'),
                  multiLine: _property(
                    result,
                    '1',
                    (v) => (v as FlaxJsBoolean).value,
                  ),
                  caseSensitive: _property(
                    result,
                    '2',
                    (v) => (v as FlaxJsBoolean).value,
                  ),
                  unicode: _property(
                    result,
                    '3',
                    (v) => (v as FlaxJsBoolean).value,
                  ),
                  dotAll: _property(
                    result,
                    '4',
                    (v) => (v as FlaxJsBoolean).value,
                  ),
                ),
              );
            } finally {
              result.release();
            }
          }
        }
        if (_deferredFactories(type).isEmpty) {
          throw ArgumentError('Expected a Dart object reference');
        }
        object = materializeDeferredObject(value, type);
      }
      final native = object.value;
      if (type.objectView?.matches(native) == false) {
        throw ArgumentError('Incompatible generic Dart object');
      }
      return _Value(native, [_ObjectBorrow(object, value.retain())]);
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
    if (type.kind == 'function') {
      if (value is FlaxJsFunction) {
        final returned = returnedFunction(value, null);
        if (returned != null) {
          return borrowFunction(returned, value);
        }
      }
      throw ArgumentError(
        'Expected an actual Dart function; JS functions need a typed callback signature',
      );
    }
    if (type.kind == 'callback' && value is FlaxJsFunction) {
      final signature = type.callback;
      if (signature == null) throw ArgumentError('Missing callback signature');
      final memoKey =
          '$_componentSessionId:${_bindingContext?.moduleId}:${signature.id}';
      final combined =
          _callbackMemoEnabled &&
          _callbackReferenceReader != null &&
          _memoFunctionReader != null;
      if (combined) {
        final identity = _callbackReferenceReader.call([
          value,
          if (callbackScope == _CallbackScope.member) FlaxJsString(memoKey),
        ]);
        if (identity is FlaxJsNumber &&
            identity.value.isFinite &&
            identity.value != 0 &&
            identity.value.truncateToDouble() == identity.value) {
          final reference = _functionReference(
            identity.value.abs().toInt(),
            signature,
            ignoreRetired: identity.value < 0,
          );
          if (reference != null) return borrowFunction(reference, value);
        } else if (identity is! FlaxJsNull) {
          _releaseJs(identity);
          throw ArgumentError('Invalid callback reference');
        }
      } else {
        final returned = returnedFunction(value, signature);
        if (returned != null) return borrowFunction(returned, value);
      }
      if (!combined && callbackScope == _CallbackScope.member) {
        final cached = helper('callbackMemo')
            .call([value, FlaxJsString(memoKey)]);
        try {
          if (cached is FlaxJsFunction) {
            final reference = returnedFunction(
              cached,
              signature,
              ignoreRetired: true,
            );
            if (reference != null) {
              return borrowFunction(reference, cached);
            }
          }
        } finally {
          if (cached is FlaxJsObject) cached.release();
        }
      }
      final callback = _Callback(
        this,
        value.retain() as FlaxJsFunction,
        signature,
        scope: callbackScope,
      );
      try {
        final closure = callback.wrap();
        if (callbackScope == _CallbackScope.member) {
          final canonical = functionResult(
            closure,
            signature,
            memoInput: combined ? value : null,
            memoKey: memoKey,
          );
          try {
            if (!combined) {
              helper('callbackMemo')
                  .call([value, FlaxJsString(memoKey), canonical]);
            }
          } finally {
            if (canonical is FlaxJsObject) canonical.release();
          }
        }
        return _Value(closure, [callback]);
      } catch (_) {
        callback.release();
        rethrow;
      }
    }
    if (value is! FlaxJsObject) {
      throw ArgumentError('Expected ${type.kind}, got ${value.runtimeType}');
    }
    if ({'iterable', 'map', 'set'}.contains(type.kind) ||
        (type.kind == 'list' && type.item!.kind != 'widget')) {
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
            if (reference == null ||
                reference.value is! List<Widget?> ||
                (!type.item!.nullable && reference.value is! List<Widget>)) {
              throw ArgumentError('Expected a compatible Dart Widget list');
            }
            final items = <_Value>[];
            try {
              final widgets = widgetSnapshot(
                reference.value as List<Widget?>,
                type,
              );
              for (final widget in widgets) {
                if (widget == null) continue;
                checkWidgetType(widget, type.item!);
                items.add(retainWidget(widget));
              }
              _checkWidgetKeys(widgets.whereType<Widget>());
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
          final widgets = widgetSnapshot(items.map((item) => item.data), type);
          _checkWidgetKeys(widgets.whereType<Widget>());
          return _Value(widgets, items);
        }
        throw ArgumentError('Unsupported list element type');
      } catch (_) {
        for (final item in items.reversed) {
          item.release();
        }
        rethrow;
      }
    }
    final kind = widgetId == null ? _textProperty(value, 'kind') : 'widget';
    if (type.kind == 'widget' && kind == 'dart-widget') {
      return checkWidgetValue(
        decodeDartWidget(value) ?? (throw ArgumentError('Invalid Dart Widget')),
        type,
      );
    }
    if (type.kind == 'widget' && kind == 'component') {
      return checkWidgetValue(decodeComponent(value), type);
    }
    final id = widgetId ?? _textProperty(value, 'type');
    final definition = id == _pageContentBinding.id
        ? _pageContentBinding
        : _typeBinding(id);
    if (type.kind == 'widget' &&
        kind == 'widget' &&
        definition is FlaxWidgetBinding) {
      final ctor = widgetConstructor ?? _textProperty(value, 'ctor');
      final parameters = definition.constructors[ctor];
      if (parameters == null) {
        throw ArgumentError('Unsupported constructor: $id.$ctor');
      }
      final sources = _inBindingContext(
        definition.id,
        () => _arguments(value, parameters, allowBindings: true),
      );
      return _createWidget(definition, ctor, parameters, sources, type);
    }
    throw ArgumentError(
      'Unknown or incompatible binding: $id (expected ${type.id ?? type.kind})',
    );
  }

  _Value _createWidget(
    FlaxWidgetBinding definition,
    String ctor,
    List<FlaxParameter> parameters,
    Map<String, _Source> sources,
    FlaxTypeRef type,
  ) {
    final node = FlaxNode._(this, definition, ctor, sources);
    try {
      final host = definition.createHost(node);

      // Validate constructor invariants before accepting the structural snapshot.
      final validated = _traceNativeWidget(
        host,
        sources.map((name, source) => MapEntry(name, source.initial.data)),
      );
      if (_typeBinding(type.id) is FlaxWidgetBinding) {
        checkWidgetType(validated, type);
        // A concrete signature receives the immutable native configuration.
        // Its weak lease keeps constructor callbacks and children alive.
        final record = _WidgetConfiguration(this, node);
        _widgetConfigurations[validated] = record;
        record.attach(validated);
        return _Value(validated, [node]);
      }
      checkWidgetType(host, type);
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

  Map<String, _Source> _arguments(
    FlaxJsObject descriptor,
    List<FlaxParameter> parameters, {
    required bool allowBindings,
    _CallbackScope callbackScope = _CallbackScope.member,
    List<String> uiCallbacks = const [],
  }) {
    final tracing = Flax.traceForExperiment;
    tracing?.call('dart:arguments', true);
    try {
      return _property(descriptor, 'args', (args) {
        if (args is! FlaxJsObject) {
          throw ArgumentError('Descriptor args must be an object');
        }

        Map<String, _Source>? batched;
        try {
          if (_readArgumentSnapshot(
            args,
            (values) => batched = _convertArguments(
              args,
              values,
              parameters,
              allowBindings: allowBindings,
              callbackScope: callbackScope,
              uiCallbacks: uiCallbacks,
            ),
          )) {
            return batched!;
          }
          return _convertArguments(
            args,
            null,
            parameters,
            allowBindings: allowBindings,
            callbackScope: callbackScope,
            uiCallbacks: uiCallbacks,
          );
        } catch (_) {
          if (batched case final values?) {
            for (final source in values.values) {
              source.release();
            }
          }
          rethrow;
        }
      });
    } finally {
      tracing?.call('dart:arguments', false);
    }
  }

  Map<String, _Source> _convertArguments(
    FlaxJsObject? args,
    Map<String, FlaxJsValue>? batch,
    List<FlaxParameter> parameters, {
    required bool allowBindings,
    _CallbackScope callbackScope = _CallbackScope.member,
    List<String> uiCallbacks = const [],
  }) {
    final (snapshot, provided) = batch == null
        ? _argumentKeys(args!)
        : (true, batch.keys);
    final expected = parameters.map((param) => param.name).toSet();
    for (final name in provided) {
      if (!expected.contains(name)) {
        throw ArgumentError('Unsupported argument: $name');
      }
    }
    final sources = <String, _Source>{};
    try {
      for (final parameter in parameters) {
        final scope = uiCallbacks.contains(parameter.name)
            ? _CallbackScope.ui
            : callbackScope;
        _Source? read(FlaxJsValue value) {
          if (value is FlaxJsUndefined) {
            if (parameter.omitWhenAbsent) return null;
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
          FlaxJsValue? reference;
          if (_argumentReferencesEnabled &&
              value is FlaxJsObject &&
              (parameter.type.kind == 'object' ||
                  parameter.type.kind == 'state' ||
                  parameter.type.kind == 'enum')) {
            reference = _argumentReferenceReader?.call([value]);
            if (reference != null &&
                reference is! FlaxJsNull &&
                reference is! FlaxJsNumber &&
                reference is! FlaxJsString &&
                !(reference is FlaxJsBoolean && reference.value)) {
              _releaseJs(reference);
              throw ArgumentError('Invalid argument reference');
            }
          }
          final bound = reference != null
              ? reference is FlaxJsBoolean
              : value is FlaxJsObject &&
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
            final object = value as FlaxJsObject;
            final initial = _property(object, 'read', (reader) {
              if (reader is! FlaxJsFunction) {
                throw ArgumentError('Invalid binding reader');
              }
              final result = helper('readBindingSnapshot').call([reader]);
              try {
                return decode(result, parameter.type, callbackScope: scope);
              } finally {
                _releaseJs(result);
              }
            });
            try {
              return _Source(
                this,
                parameter.type,
                initial,
                binding: object.retain(),
              );
            } catch (_) {
              initial.release();
              rethrow;
            }
          }
          return _Source(
            this,
            parameter.type,
            decode(
              value,
              parameter.type,
              callbackScope: scope,
              knownReference: reference,
            ),
          );
        }

        final source = batch != null
            ? read(batch[parameter.name] ?? const FlaxJsUndefined())
            : snapshot && !provided.contains(parameter.name)
            ? read(const FlaxJsUndefined())
            : _property(args!, parameter.name, read);
        if (source != null) sources[parameter.name] = source;
      }
      return sources;
    } catch (_) {
      for (final source in sources.values) {
        source.release();
      }
      rethrow;
    }
  }

  Future<void> requestClose() {
    if (!_closingSandbox && sandbox != null) {
      _closingSandbox = true;
      _nativeRetirements++;
      sandbox!.close().then(
        (_) {
          _nativeRetirements--;
          _tryClose();
        },
        onError: (Object error, StackTrace stack) {
          report(error, stack);
          _nativeRetirements--;
          _tryClose();
        },
      );
    }
    if (_loadingInStages) {
      _status = _SessionStatus.closing;
      return _closed.future;
    }
    if (!closing) {
      _status = _SessionStatus.closing;
      _moduleLoader?.close();
      // Close hooks may reenter; defer disposal until every hook has returned.
      checkpoint();
      cancelFutures();
      cancelPromises();
      cancelStreamSubscriptions();
      cancelStreamIterators();
      cancelAsyncIterableSources();
      closeHost();
      closeModules();
    }
    _tryClose();
    return _closed.future;
  }

  void _tryClose() {
    if (closing &&
        _mounts == 0 &&
        _nativeRetirements == 0 &&
        _hostTasks.isEmpty &&
        !_checkpointScheduled &&
        !_checkpointRunning &&
        !_checkpointJobsPending) {
      _dispose();
    }
  }

  int _nativeRetirements = 0;

  void _dispose() {
    if (!active) return;
    _moduleLoader?.close();
    _moduleLoader = null;
    cancelPromises();
    cancelStreamIterators();
    cancelAsyncIterableSources();
    disposeHost();
    disposeModules();
    for (final font in _fonts.values) {
      font.dispose();
    }
    if (_fonts.isNotEmpty) SchedulerBinding.instance.scheduleFrame();
    _fonts.clear();
    _fontResources.release();
    _status = _SessionStatus.closed;
    if (_frame != null) {
      SchedulerBinding.instance.cancelFrameCallbackWithId(_frame!);
    }
    _frame = null;
    _dirty.clear();
    _subscriptions.clear();
    _hotRoot?.release();
    _hotRoot = null;
    _hotPages = null;
    _root?.release();
    _root = null;
    for (final context in _contexts.values.toList()) {
      context.release();
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
    for (final reference in _references.toList()) {
      reference.release();
    }
    for (final cleanup in _widgetCleanups.toList()) {
      cleanup.release();
    }
    _componentDescriptions.clear();
    for (final helper in _helpers.values) {
      helper.release();
    }
    _helpers.clear();
    for (final value in _enums.values) {
      value.release();
    }
    _enums.clear();
    _operations.clear();
    _operationIds.clear();
    _proxyLayouts.clear();
    _collectionBindings.clear();
    _genericObjectBindings.clear();
    dartTypes.close();
    _typeBindings.clear();
    _materializedTypes.clear();
    _objectCandidates.clear();
    _functionBindings.clear();
    _specializedContexts.clear();
    _specializedOwners.clear();
    _genericMethods.clear();
    _objectKeys?.release();
    _arrayCheck?.release();
    for (final result in _hostResults) {
      result.release();
    }
    _hostResults.clear();
    _states.clear();
    _componentTypes.clear();
    _pending.clear();
    _readyFutures.clear();
    _promises.clear();
    runtime.dispose();
    final closingFiles = sandbox?.close();
    if (closingFiles == null) {
      if (!_closed.isCompleted) _closed.complete();
    } else {
      closingFiles.then(
        (_) {
          if (!_closed.isCompleted) _closed.complete();
        },
        onError: (Object error, StackTrace stack) {
          if (!_closed.isCompleted) _closed.completeError(error, stack);
        },
      );
    }
  }
}

void _checkWidgetKeys(Iterable<Widget> widgets) {
  final keys = <Key>{};
  for (final widget in widgets) {
    if (widget.key != null && !keys.add(widget.key!)) {
      throw ArgumentError('Duplicate sibling key: ${widget.key}');
    }
  }
}
