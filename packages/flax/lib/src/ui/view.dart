part of '../../bindings.dart';

/// One JS application, independent of the routes displaying it.
class FlaxSession {
  FlaxSession({
    required this.createRuntime,
    required this.source,
    required this.bindings,
    this.sourceUrl = 'flax:app',
    this.entryUri,
    this.loadModule,
    Map<String, Uri> imports = const {},
    this.sandbox = false,
    List<String> requiredCapabilities = const [],
    this.namespace,
    this.onError,
    AssetBundle? assetBundle,
    List<FlaxPlugin>? plugins,
  }) : plugins = _pluginSnapshot(plugins ?? Flax._plugins),
       imports = Map.unmodifiable(imports),
       _requiredCapabilities = List.unmodifiable([
         'esm',
         ...requiredCapabilities,
       ]),
       assetBundle = assetBundle ?? FlaxPrefixedAssetBundle(),
       _moduleAssets = Flax.moduleAssets {
    if (sandbox) {
      throw UnsupportedError('Flax sandbox is reserved and not implemented');
    }
    if (namespace != null && namespace!.isEmpty) {
      throw ArgumentError.value(namespace, 'namespace', 'Must not be empty');
    }
  }

  /// Builds an explicit Session from any application loaded by FlaxApplication.
  FlaxSession.application({
    required FlaxApplication application,
    required FlaxJsRuntime Function() createRuntime,
    required FlaxBindingRegistry bindings,
    String? namespace,
    void Function(Object, StackTrace)? onError,
    List<FlaxPlugin>? plugins,
    bool sandbox = false,
  }) : this(
         createRuntime: createRuntime,
         bindings: bindings,
         source: application.source,
         sourceUrl: application.sourceUrl,
         entryUri: application.entryUri,
         loadModule: application.loadModule,
         imports: application.imports,
         requiredCapabilities:
             application.manifest?.requiredCapabilities ?? const [],
         sandbox: sandbox,
         assetBundle: application.assetBundle,
         namespace: namespace,
         onError: onError,
         plugins: plugins,
       );

  final String? namespace;

  /// The stable resource source shared by this session's UI and business code.
  /// Defaults to assets/flax inside Flutter's rootBundle.
  final AssetBundle assetBundle;
  final List<FlaxPlugin> plugins;
  final FlaxModuleAssets? _moduleAssets;
  final FlaxJsRuntime Function() createRuntime;
  final String source;
  final String sourceUrl;
  final Uri? entryUri;
  final FlaxModuleSourceLoader? loadModule;
  final Map<String, Uri> imports;
  final bool sandbox;
  final List<String> _requiredCapabilities;
  final FlaxBindingRegistry bindings;
  final void Function(Object, StackTrace)? onError;
  _Session? _session;
  bool _rootMounted = false;
  Object? _loadError;
  Future<void>? _closeFuture;
  Future<void>? _ready;
  bool _loaded = false;

  /// Loads and evaluates the ESM entry, including top-level await.
  /// Closing the session cancels this operation without waiting for user Promises.
  Future<void> get ready {
    if (_closeFuture != null) throw StateError('Closed Flax session');
    if (_ready case final ready?) return ready;
    if (_preparation case final pending?) return _ready ??= pending;
    _load();
    return _ready ??= Future<void>.value();
  }

  Future<void>? _preparation;
  Completer<void>? _cancelPreparation;
  bool _preparing = false;
  static Future<void>? _startupQueue;

  /// Retained for the measurement harness; normal owning Views prepare automatically.
  Future<void> prepareForExperiment({void Function(String, int)? onStep}) =>
      _prepare(onStep: onStep);

  Future<void> _prepare({void Function(String, int)? onStep}) {
    if (_session != null) return ready;
    if (_preparation case final existing?) return existing;
    final previous = _startupQueue;
    final finished = Completer<void>();
    _startupQueue = finished.future;
    _cancelPreparation = Completer<void>();
    return _preparation = _prepareSession(previous, finished, onStep);
  }

  Future<void> _prepareSession(
    Future<void>? previous,
    Completer<void> finished,
    void Function(String, int)? onStep,
  ) async {
    _preparing = true;
    FlaxJsRuntime? pendingRuntime;
    try {
      // Serialize creation/adoption; a worker must not hold another View's heap.
      if (previous != null) await previous;
      if (_closeFuture != null) throw StateError('Closed Flax session');
      if (_session != null) return;
      await WidgetsBinding.instance.endOfFrame;
      final declarations = Stopwatch()..start();
      final step = Stopwatch()..start();
      for (final module in _defaultBindingModules) {
        if (_closeFuture != null) throw StateError('Closed Flax session');
        if (module.uiProtocol != flaxBindingVersion) {
          throw ArgumentError('Incompatible binding module ${module.name}');
        }
        onStep?.call('declarations:${module.name}', step.elapsedMicroseconds);
        if (declarations.elapsedMicroseconds >= 4000) {
          await WidgetsBinding.instance.endOfFrame;
          await Future<void>.delayed(Duration.zero);
          declarations.reset();
        }
        step.reset();
      }
      final registry = _bindingsWithPlugins(bindings, plugins);
      final assets = _moduleAssets;
      final runtime = createRuntime();
      pendingRuntime = runtime;
      var prepared = false;
      if (runtime is FlaxJsSourcePreparer && assets != null) {
        try {
          prepared = await (runtime as FlaxJsSourcePreparer).prepareSources(
            assets._startupSources(registry, plugins),
            entry: FlaxJsSource('', sourceUrl: sourceUrl),
            cancelled: _cancelPreparation!.future,
          );
        } on FlaxJsException {
          // Native restores a pristine context after a pure-JS failure. Keep the
          // factory's runtime object and run Dart-dependent initialization on UI.
          if (_closeFuture != null) throw StateError('Closed Flax session');
        }
      }
      if (_closeFuture != null) throw StateError('Closed Flax session');
      final session = _Session(
        runtime,
        registry,
        onError,
        namespace: namespace,
        assetBundle: assetBundle,
        modulesPrepared: prepared,
      );
      _session = session;
      pendingRuntime = null;
      await session.initializeStaged(
        plugins: plugins,
        moduleAssets: assets,
        requiredCapabilities: _requiredCapabilities,
        onStep: onStep,
        cancelled: () => _closeFuture != null,
      );
      _preparing = false;
      if (identical(_startupQueue, finished.future)) _startupQueue = null;
      finished.complete();
      await _loadEntry(session);
      _loaded = true;
    } catch (error) {
      _loadError = error;
      pendingRuntime?.dispose();
      rethrow;
    } finally {
      _preparing = false;
      if (!finished.isCompleted) {
        if (identical(_startupQueue, finished.future)) _startupQueue = null;
        finished.complete();
      }
    }
  }

  _Session _load({void Function(Object, StackTrace)? report}) {
    if (_preparing) throw StateError('Flax session is still preparing');
    if (_closeFuture != null) {
      throw StateError('Closed Flax session');
    }
    if (_loadError != null) throw StateError('The Flax session failed to load');
    try {
      if (_session == null) {
        final registry = _bindingsWithPlugins(bindings, plugins);
        final session = _Session(
          createRuntime(),
          registry,
          report ?? onError,
          namespace: namespace,
          assetBundle: assetBundle,
        );
        _session = session;
        session.initialize(
          plugins: plugins,
          moduleAssets: _moduleAssets,
          requiredCapabilities: _requiredCapabilities,
        );
        final pending = _loadEntry(session);
        if (pending is Future<void>) {
          _ready = pending.then(
            (_) {
              _loaded = true;
            },
            onError: (Object error, StackTrace stack) {
              _loadError = error;
              Error.throwWithStackTrace(error, stack);
            },
          );
        } else {
          _loaded = true;
        }
      }
      return _session!;
    } catch (error) {
      _loadError = error;
      rethrow;
    }
  }

  FutureOr<void> _loadEntry(_Session session) => session.loadEntry(
    FlaxModuleSource(
      uri:
          entryUri ??
          (Uri.tryParse(sourceUrl)?.hasScheme == true
              ? Uri.parse(sourceUrl)
              : Uri(scheme: 'flax', path: sourceUrl)),
      kind: FlaxModuleKind.javascript,
      bytes: utf8.encode(source),
    ),
    loadSource: loadModule ?? FlaxApplication.loadRemoteModule,
    imports: imports,
  );

  Widget _mount() {
    if (_rootMounted) {
      throw StateError('The application root is already mounted');
    }
    final session = _session;
    if (!_loaded || session == null) {
      throw StateError('Await FlaxSession.ready before mounting modules');
    }
    if (session._root == null) {
      throw StateError('The application did not call runApp');
    }
    session._root!.validate();
    session.retainMount();
    _rootMounted = true;
    return session._root!.data as Widget;
  }

  void _unmount() {
    _rootMounted = false;
    _session!.releaseMount();
  }

  /// Stops new content and drains mounted JS content and active bridge calls.
  /// Remaining callbacks are revoked on completion; Flutter still owns its routes.
  Future<void> close() {
    if (_closeFuture case final closing?) return closing;
    final cancellation = _cancelPreparation;
    if (cancellation != null && !cancellation.isCompleted) {
      cancellation.complete();
    }
    final closing = _session?.requestClose();
    if (!_preparing) {
      return _closeFuture = closing ?? Future<void>.value();
    }
    return _closeFuture = () async {
      // Preparation restores UI ownership before runtime disposal.
      try {
        await _preparation;
      } catch (_) {
        // The loading caller owns the failure; close still releases its resources.
      }
      await closing;
    }();
  }

  /// The type used by Flutter matching and find.byType for this JS class.
  /// Borrows [constructor]; does not initialize the session or construct a Widget.
  Type componentType(FlaxJsFunction constructor) {
    final session = _session;
    if (session == null || !session.active) {
      throw StateError('Component queries require an initialized live session');
    }
    return session.componentType(constructor);
  }
}

/// Embeds an application root without inserting a Navigator.
class FlaxView extends StatelessWidget {
  const FlaxView({
    super.key,
    required this.createRuntime,
    required this.source,
    this.bindings,
    this.sourceUrl = 'flax:app',
    this.entryUri,
    this.loadModule,
    this.imports = const {},
    this.sandbox = false,
    this.loadingBuilder,
    this.errorBuilder,
    this.namespace,
    this.onError,
    this.plugins,
    this.assetBundle,
  }) : _input = null,
       _session = null,
       _pageName = null,
       _arguments = null;

  /// Reads flax.json and its entry from a business-root bundle.
  /// Without [assetBundle], selects [prefix] inside the inherited Flutter bundle.
  factory FlaxView.bundle({
    Key? key,
    required FlaxJsRuntime Function() createRuntime,
    bool sandbox = false,
    Map<String, Uri> imports = const {},
    FlaxModuleSourceLoader? loadModule,
    FlaxBindingRegistry? bindings,
    AssetBundle? assetBundle,
    String prefix = 'assets/flax',
    String? namespace,
    void Function(Object, StackTrace)? onError,
    List<FlaxPlugin>? plugins,
    WidgetBuilder? loadingBuilder,
    Widget Function(BuildContext, Object, StackTrace)? errorBuilder,
  }) {
    if (assetBundle != null && prefix != 'assets/flax') {
      throw ArgumentError('prefix only applies when assetBundle is omitted');
    }
    return FlaxView._application(
      key: key,
      createRuntime: createRuntime,
      sandbox: sandbox,
      imports: imports,
      loadModule: loadModule,
      bindings: bindings,
      assetBundle: assetBundle,
      namespace: namespace,
      onError: onError,
      plugins: plugins,
      loadingBuilder: loadingBuilder,
      errorBuilder: errorBuilder,
      input: _BundleInput(prefix),
    );
  }

  /// Loads a prepared application directory without copying its resources.
  factory FlaxView.directory({
    Key? key,
    required FlaxJsRuntime Function() createRuntime,
    bool sandbox = false,
    Map<String, Uri> imports = const {},
    FlaxModuleSourceLoader? loadModule,
    FlaxBindingRegistry? bindings,
    required Directory directory,
    String? namespace,
    void Function(Object, StackTrace)? onError,
    List<FlaxPlugin>? plugins,
    WidgetBuilder? loadingBuilder,
    Widget Function(BuildContext, Object, StackTrace)? errorBuilder,
  }) => FlaxView._application(
    key: key,
    createRuntime: createRuntime,
    sandbox: sandbox,
    imports: imports,
    loadModule: loadModule,
    bindings: bindings,
    assetBundle: null,
    namespace: namespace,
    onError: onError,
    plugins: plugins,
    loadingBuilder: loadingBuilder,
    errorBuilder: errorBuilder,
    input: _DirectoryInput(directory.absolute.path),
  );

  /// Installs a local .flax file and loads its immutable cached directory.
  /// The installation root defaults to ApplicationSupport/flax.
  factory FlaxView.package({
    Key? key,
    required FlaxJsRuntime Function() createRuntime,
    bool sandbox = false,
    Map<String, Uri> imports = const {},
    FlaxModuleSourceLoader? loadModule,
    FlaxBindingRegistry? bindings,
    required File file,
    Directory? installationDirectory,
    String? namespace,
    void Function(Object, StackTrace)? onError,
    List<FlaxPlugin>? plugins,
    WidgetBuilder? loadingBuilder,
    Widget Function(BuildContext, Object, StackTrace)? errorBuilder,
  }) => FlaxView._application(
    key: key,
    createRuntime: createRuntime,
    sandbox: sandbox,
    imports: imports,
    loadModule: loadModule,
    bindings: bindings,
    assetBundle: null,
    namespace: namespace,
    onError: onError,
    plugins: plugins,
    loadingBuilder: loadingBuilder,
    errorBuilder: errorBuilder,
    input: _PackageInput(
      file.absolute.path,
      installationDirectory?.absolute.path,
    ),
  );

  /// Reads one JS file without discovering neighboring metadata or resources.
  /// Resources use [assetBundle], or assets/flax inside the inherited host bundle.
  factory FlaxView.file({
    Key? key,
    required FlaxJsRuntime Function() createRuntime,
    bool sandbox = false,
    Map<String, Uri> imports = const {},
    FlaxModuleSourceLoader? loadModule,
    FlaxBindingRegistry? bindings,
    required File file,
    AssetBundle? assetBundle,
    String? namespace,
    void Function(Object, StackTrace)? onError,
    List<FlaxPlugin>? plugins,
    WidgetBuilder? loadingBuilder,
    Widget Function(BuildContext, Object, StackTrace)? errorBuilder,
  }) => FlaxView._application(
    key: key,
    createRuntime: createRuntime,
    sandbox: sandbox,
    imports: imports,
    loadModule: loadModule,
    bindings: bindings,
    assetBundle: assetBundle,
    namespace: namespace,
    onError: onError,
    plugins: plugins,
    loadingBuilder: loadingBuilder,
    errorBuilder: errorBuilder,
    input: _FileInput(file.absolute.path),
  );

  /// Downloads an explicitly selected JS or .flax format and reuses local loading.
  /// Scripts default to assets/flax inside the host bundle; packages own resources.
  factory FlaxView.network({
    Key? key,
    required FlaxJsRuntime Function() createRuntime,
    bool sandbox = false,
    Map<String, Uri> imports = const {},
    FlaxModuleSourceLoader? loadModule,
    FlaxBindingRegistry? bindings,
    required Uri uri,
    required FlaxRemoteFormat format,
    Map<String, String> headers = const {},
    String? expectedSha256,
    FlaxDownloader? download,
    Directory? cacheDirectory,
    Directory? installationDirectory,
    AssetBundle? assetBundle,
    String? namespace,
    void Function(Object, StackTrace)? onError,
    List<FlaxPlugin>? plugins,
    WidgetBuilder? loadingBuilder,
    Widget Function(BuildContext, Object, StackTrace)? errorBuilder,
  }) {
    if (format == FlaxRemoteFormat.package && assetBundle != null) {
      throw ArgumentError('Package resources come from the package itself');
    }
    final options = FlaxNetworkOptions(
      uri: uri,
      format: format,
      headers: headers,
      expectedSha256: expectedSha256,
      download: download,
      cacheDirectory: cacheDirectory,
      installationDirectory: installationDirectory,
    );
    return FlaxView._application(
      key: key,
      createRuntime: createRuntime,
      sandbox: sandbox,
      imports: imports,
      loadModule: loadModule,
      bindings: bindings,
      assetBundle: assetBundle,
      namespace: namespace,
      onError: onError,
      plugins: plugins,
      loadingBuilder: loadingBuilder,
      errorBuilder: errorBuilder,
      input: _NetworkInput(options),
    );
  }

  const FlaxView._application({
    super.key,
    required this.createRuntime,
    this.bindings,
    required this._input,
    this.assetBundle,
    this.namespace,
    this.onError,
    this.plugins,
    this.loadingBuilder,
    this.errorBuilder,
    this.sandbox = false,
    this.imports = const {},
    this.loadModule,
  }) : source = null,
       entryUri = null,
       sourceUrl = null,
       _session = null,
       _pageName = null,
       _arguments = null;

  const FlaxView.session({super.key, required FlaxSession session})
    : _input = null,
      loadingBuilder = null,
      errorBuilder = null,
      // Keep the public parameter named session rather than exposing the field.
      // ignore: prefer_initializing_formals
      _session = session,
      entryUri = null,
      loadModule = null,
      imports = const {},
      sandbox = false,
      createRuntime = null,
      source = null,
      bindings = null,
      plugins = null,
      namespace = null,
      assetBundle = null,
      sourceUrl = null,
      onError = null,
      _pageName = null,
      _arguments = null;

  /// Mount a named factory without mounting the application root.
  const FlaxView.page({
    super.key,
    required FlaxSession session,
    required String name,
    Object? arguments,
  }) : _input = null,
       loadingBuilder = null,
       errorBuilder = null,
       // ignore: prefer_initializing_formals
       _session = session,
       _pageName = name,
       // ignore: prefer_initializing_formals
       _arguments = arguments,
       entryUri = null,
       loadModule = null,
       imports = const {},
       sandbox = false,
       createRuntime = null,
       source = null,
       bindings = null,
       plugins = null,
       namespace = null,
       assetBundle = null,
       sourceUrl = null,
       onError = null;

  final Uri? entryUri;
  final FlaxModuleSourceLoader? loadModule;
  final Map<String, Uri> imports;
  final bool sandbox;

  final _ApplicationInput? _input;

  /// Optional presentation while an automatic entrance is reading or installing.
  final WidgetBuilder? loadingBuilder;

  /// Handles loading failures; runtime failures retain the existing onError path.
  final Widget Function(BuildContext, Object, StackTrace)? errorBuilder;
  final List<FlaxPlugin>? plugins;
  final String? namespace;

  /// Uses an explicit business-root bundle unchanged. Otherwise source/script
  /// entries select assets/flax inside the inherited DefaultAssetBundle.
  /// Borrowed Views always use their Session's bundle.
  final AssetBundle? assetBundle;
  final FlaxJsRuntime Function()? createRuntime;
  final String? source;
  final String? sourceUrl;

  /// Optional application bindings; Core and selected plugins are added at startup.
  final FlaxBindingRegistry? bindings;
  final FlaxSession? _session;
  final String? _pageName;
  final Object? _arguments;
  final void Function(Object, StackTrace)? onError;

  @override
  Widget build(BuildContext context) {
    if (sandbox) {
      throw UnsupportedError('Flax sandbox is reserved and not implemented');
    }
    // An explicit business root can be the same object as the default host bundle.
    final input = _input;
    if (input != null) {
      final usesBundle = switch (input) {
        _BundleInput() || _FileInput() => true,
        _NetworkInput(:final options) =>
          options.format == FlaxRemoteFormat.javascript,
        _ => false,
      };
      final bundle = usesBundle
          ? assetBundle ?? DefaultAssetBundle.of(context)
          : rootBundle;
      return _ApplicationView(
        key: ValueKey((
          input.identity,
          ObjectKey(bundle),
          assetBundle != null,
          createRuntime,
          bindings,
          namespace,
          loadModule,
          imports,
          sandbox,
        )),
        configuration: this,
        inheritedBundle: bundle,
      );
    }
    if (_pageName != null) {
      return _NamedPageRoot(
        key: ValueKey((_session, _pageName)),
        session: _session!,
        name: _pageName,
        arguments: _arguments,
      );
    }
    final bundle =
        _session?.assetBundle ?? assetBundle ?? DefaultAssetBundle.of(context);
    return _SessionRoot(
      key: ValueKey(
        _session ??
            (
              createRuntime,
              source,
              sourceUrl,
              entryUri,
              loadModule,
              imports,
              sandbox,
              bindings,
              namespace,
              ObjectKey(bundle),
              assetBundle != null,
            ),
      ),
      configuration: this,
      assetBundle: bundle,
    );
  }
}

class _SessionRoot extends StatefulWidget {
  const _SessionRoot({
    super.key,
    required this.configuration,
    required this.assetBundle,
    this.application,
  });
  final FlaxApplication? application;
  final FlaxView configuration;
  final AssetBundle assetBundle;
  @override
  State<_SessionRoot> createState() => _SessionRootState();
}

class _SessionRootState extends State<_SessionRoot> {
  late final FlaxSession _session;
  Widget _root = const SizedBox.shrink();
  bool _attached = false;
  bool _preparationComplete = false;
  int _hotGeneration = 0;

  void _report(Object error, StackTrace stack) {
    final callback = widget.configuration.onError ?? _session.onError;
    if (callback != null) {
      callback(error, stack);
    } else {
      FlutterError.reportError(
        FlutterErrorDetails(exception: error, stack: stack, library: 'flax'),
      );
    }
  }

  @override
  void initState() {
    super.initState();
    final configuration = widget.configuration;
    _session =
        configuration._session ??
        FlaxSession(
          createRuntime: configuration.createRuntime!,
          source: widget.application?.source ?? configuration.source!,
          sourceUrl: widget.application?.sourceUrl ?? configuration.sourceUrl!,
          entryUri: widget.application?.entryUri ?? configuration.entryUri,
          loadModule:
              widget.application?.loadModule ?? configuration.loadModule,
          imports: widget.application?.imports ?? configuration.imports,
          requiredCapabilities:
              widget.application?.manifest?.requiredCapabilities ?? const [],
          sandbox: configuration.sandbox,
          bindings: configuration.bindings ?? FlaxBindingRegistry([]),
          onError: configuration.onError,
          plugins: configuration.plugins,
          namespace: configuration.namespace,
          assetBundle:
              widget.application?.assetBundle ??
              configuration.assetBundle ??
              FlaxPrefixedAssetBundle(bundle: widget.assetBundle),
        );
    if (configuration._session == null ||
        _session._preparation != null && !_session._loaded) {
      unawaited(_prepare());
    } else {
      _mount();
    }
  }

  Future<void> _prepare() async {
    try {
      await _session._prepare();
    } catch (error, stack) {
      if (!mounted) return;
      setState(() {
        _preparationComplete = true;
        _root =
            widget.configuration.errorBuilder?.call(context, error, stack) ??
            _errorWidget(error);
      });
      _report(error, stack);
      return;
    }
    if (mounted) setState(_mount);
  }

  void _mount() {
    try {
      _session._load(
        report: widget.configuration._session == null ? _report : null,
      );
      if (!_session._loaded) {
        unawaited(_prepare());
        return;
      }
      _preparationComplete = true;
      _root = _session._mount();
      _attached = true;
      _hotGeneration = _session._session!._hotRootGeneration;
    } catch (error, stack) {
      _preparationComplete = true;
      _root = _errorWidget(error);
      _report(error, stack);
    }
  }

  @override
  Widget build(BuildContext context) {
    if (!_preparationComplete) {
      return widget.configuration.loadingBuilder?.call(context) ?? _root;
    }
    return _session._session?.scopeAssets(_root) ?? _root;
  }

  @override
  void reassemble() {
    super.reassemble();
    if (!_attached) return;
    final current = _session._session;
    if (current == null || current._hotRootGeneration == _hotGeneration) return;
    final root = current._root;
    if (root == null) return;
    _root = root.data as Widget;
    _hotGeneration = current._hotRootGeneration;
  }

  @override
  void dispose() {
    if (_attached) _session._unmount();
    if (widget.configuration._session == null) unawaited(_session.close());
    super.dispose();
  }
}

sealed class _ApplicationInput {
  const _ApplicationInput();
  Object get identity;
}

class _BundleInput extends _ApplicationInput {
  const _BundleInput(this.prefix);
  final String prefix;
  @override
  Object get identity => (runtimeType, prefix);
}

class _DirectoryInput extends _ApplicationInput {
  const _DirectoryInput(this.path);
  final String path;
  @override
  Object get identity => (runtimeType, path);
}

class _PackageInput extends _ApplicationInput {
  const _PackageInput(this.path, this.installationDirectory);
  final String path;
  final String? installationDirectory;
  @override
  Object get identity => (runtimeType, path, installationDirectory);
}

class _FileInput extends _ApplicationInput {
  const _FileInput(this.path);
  final String path;
  @override
  Object get identity => (runtimeType, path);
}

class _NetworkInput extends _ApplicationInput {
  const _NetworkInput(this.options);
  final FlaxNetworkOptions options;
  @override
  Object get identity => (runtimeType, options.identity);
}

class _ApplicationView extends StatefulWidget {
  const _ApplicationView({
    super.key,
    required this.configuration,
    required this.inheritedBundle,
  });
  final FlaxView configuration;
  final AssetBundle inheritedBundle;
  @override
  State<_ApplicationView> createState() => _ApplicationViewState();
}

class _ApplicationViewState extends State<_ApplicationView> {
  final _cancelled = Completer<void>();
  FlaxApplication? _application;
  Object? _error;
  StackTrace? _stack;

  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    final configuration = widget.configuration;
    final input = configuration._input!;
    try {
      final application = await switch (input) {
        _BundleInput(:final prefix) => FlaxApplication.bundle(
          configuration.assetBundle ??
              FlaxPrefixedAssetBundle(
                bundle: widget.inheritedBundle,
                prefix: prefix,
              ),
          imports: configuration.imports,
          loadModule: configuration.loadModule,
          sandbox: configuration.sandbox,
        ),
        _DirectoryInput(:final path) => FlaxApplication.directory(
          Directory(path),
          imports: configuration.imports,
          loadModule: configuration.loadModule,
          sandbox: configuration.sandbox,
        ),
        _PackageInput(:final path, :final installationDirectory) =>
          FlaxApplication.package(
            File(path),
            installationDirectory: installationDirectory == null
                ? null
                : Directory(installationDirectory),
            imports: configuration.imports,
            loadModule: configuration.loadModule,
            sandbox: configuration.sandbox,
          ),
        _FileInput(:final path) => FlaxApplication.file(
          File(path),
          imports: configuration.imports,
          loadModule: configuration.loadModule,
          sandbox: configuration.sandbox,
          assetBundle:
              configuration.assetBundle ??
              FlaxPrefixedAssetBundle(bundle: widget.inheritedBundle),
        ),
        _NetworkInput(:final options) => FlaxApplication.network(
          uri: options.uri,
          format: options.format,
          headers: options.headers,
          expectedSha256: options.expectedSha256,
          download: options.download,
          cacheDirectory: options.cacheDirectory,
          installationDirectory: options.installationDirectory,
          assetBundle: options.format == FlaxRemoteFormat.javascript
              ? configuration.assetBundle ??
                    FlaxPrefixedAssetBundle(bundle: widget.inheritedBundle)
              : null,
          cancelled: _cancelled.future,
          imports: configuration.imports,
          loadModule: configuration.loadModule,
          sandbox: configuration.sandbox,
        ),
      };
      if (!mounted) return;
      setState(() => _application = application);
    } catch (error, stack) {
      if (!mounted) return;
      setState(() {
        _error = error;
        _stack = stack;
      });
      if (widget.configuration.onError case final callback?) {
        callback(error, stack);
      } else {
        FlutterError.reportError(
          FlutterErrorDetails(exception: error, stack: stack, library: 'flax'),
        );
      }
    }
  }

  @override
  void dispose() {
    _cancelled.complete();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final configuration = widget.configuration;
    if (_error case final error?) {
      return configuration.errorBuilder?.call(context, error, _stack!) ??
          _errorWidget(error);
    }
    final application = _application;
    if (application == null) {
      return configuration.loadingBuilder?.call(context) ??
          const SizedBox.shrink();
    }
    return _SessionRoot(
      configuration: configuration,
      assetBundle: application.assetBundle,
      application: application,
    );
  }
}
