part of '../../bindings.dart';

/// One JS application, independent of the routes displaying it.
class FlaxSession {
  FlaxSession({
    required this.createRuntime,
    required this.source,
    required this.bindings,
    this.sourceUrl = 'flax:app',
    this.namespace,
    this.onError,
    AssetBundle? assetBundle,
    List<FlaxPlugin>? plugins,
  }) : plugins = _pluginSnapshot(plugins ?? Flax._plugins),
       assetBundle = assetBundle ?? FlaxPrefixedAssetBundle(),
       _moduleAssets = Flax.moduleAssets {
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
  }) : this(
         createRuntime: createRuntime,
         bindings: bindings,
         source: application.source,
         sourceUrl: application.sourceUrl,
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
  final FlaxBindingRegistry bindings;
  final void Function(Object, StackTrace)? onError;
  _Session? _session;
  bool _rootMounted = false;
  Object? _loadError;
  Future<void>? _closeFuture;

  _Session _load({void Function(Object, StackTrace)? report}) {
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
        session.load(
          source,
          sourceUrl,
          plugins: plugins,
          moduleAssets: _moduleAssets,
        );
      }
      return _session!;
    } catch (error) {
      _loadError = error;
      rethrow;
    }
  }

  Widget _mount(void Function(Object, StackTrace)? report) {
    if (_rootMounted) {
      throw StateError('The application root is already mounted');
    }
    final session = _load(report: report);
    if (session._root == null) {
      throw StateError('The script did not call runApp');
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
  Future<void> close() =>
      _closeFuture ??= _session?.requestClose() ?? Future<void>.value();

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
    required this.bindings,
    this.sourceUrl = 'flax:app',
    this.namespace,
    this.onError,
    this.plugins,
    this.assetBundle,
  }) : _input = null,
       loadingBuilder = null,
       errorBuilder = null,
       _session = null,
       _pageName = null,
       _arguments = null;

  /// Reads flax.json and its entry from a business-root bundle.
  /// Without [assetBundle], selects [prefix] inside the inherited Flutter bundle.
  factory FlaxView.bundle({
    Key? key,
    required FlaxJsRuntime Function() createRuntime,
    required FlaxBindingRegistry bindings,
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
    required FlaxBindingRegistry bindings,
    required Directory directory,
    String? namespace,
    void Function(Object, StackTrace)? onError,
    List<FlaxPlugin>? plugins,
    WidgetBuilder? loadingBuilder,
    Widget Function(BuildContext, Object, StackTrace)? errorBuilder,
  }) => FlaxView._application(
    key: key,
    createRuntime: createRuntime,
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
    required FlaxBindingRegistry bindings,
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
    required FlaxBindingRegistry bindings,
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
    required FlaxBindingRegistry bindings,
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
    required this.bindings,
    required this._input,
    this.assetBundle,
    this.namespace,
    this.onError,
    this.plugins,
    this.loadingBuilder,
    this.errorBuilder,
  }) : source = null,
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
       createRuntime = null,
       source = null,
       bindings = null,
       plugins = null,
       namespace = null,
       assetBundle = null,
       sourceUrl = null,
       onError = null;

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
  final FlaxBindingRegistry? bindings;
  final FlaxSession? _session;
  final String? _pageName;
  final Object? _arguments;
  final void Function(Object, StackTrace)? onError;

  @override
  Widget build(BuildContext context) {
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
  });
  final FlaxView configuration;
  final AssetBundle assetBundle;
  @override
  State<_SessionRoot> createState() => _SessionRootState();
}

class _SessionRootState extends State<_SessionRoot> {
  late final FlaxSession _session;
  late Widget _root;
  bool _attached = false;
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
          source: configuration.source!,
          sourceUrl: configuration.sourceUrl!,
          bindings: configuration.bindings!,
          plugins: configuration.plugins,
          namespace: configuration.namespace,
          assetBundle:
              configuration.assetBundle ??
              FlaxPrefixedAssetBundle(bundle: widget.assetBundle),
        );
    try {
      _root = _session._mount(configuration._session == null ? _report : null);
      _attached = true;
      _hotGeneration = _session._session!._hotRootGeneration;
    } catch (error, stack) {
      _root = _errorWidget(error);
      _report(error, stack);
    }
  }

  @override
  Widget build(BuildContext context) =>
      _session._session?.scopeAssets(_root) ?? _root;

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
        ),
        _DirectoryInput(:final path) => FlaxApplication.directory(
          Directory(path),
        ),
        _PackageInput(:final path, :final installationDirectory) =>
          FlaxApplication.package(
            File(path),
            installationDirectory: installationDirectory == null
                ? null
                : Directory(installationDirectory),
          ),
        _FileInput(:final path) => FlaxApplication.file(
          File(path),
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
        ),
      };
      if (mounted) setState(() => _application = application);
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
    return FlaxView(
      createRuntime: configuration.createRuntime!,
      bindings: configuration.bindings!,
      source: application.source,
      sourceUrl: application.sourceUrl,
      assetBundle: application.assetBundle,
      namespace: configuration.namespace,
      plugins: configuration.plugins,
      onError: configuration.onError,
    );
  }
}
