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
    List<FlaxPlugin>? plugins,
  }) : plugins = _pluginSnapshot(plugins ?? Flax._plugins),
       _moduleAssets = Flax.moduleAssets {
    if (namespace != null && namespace!.isEmpty) {
      throw ArgumentError.value(namespace, 'namespace', 'Must not be empty');
    }
  }
  final String? namespace;
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

  _Session _load({
    void Function(Object, StackTrace)? report,
    bool allowClosing = false,
  }) {
    if (_closeFuture != null && !allowClosing) {
      throw StateError('Closed Flax session');
    }
    if (_loadError != null) throw StateError('The Flax session failed to load');
    try {
      if (_session == null) {
        final session = _Session(
          createRuntime(),
          _bindingsWithPlugins(bindings, plugins),
          report ?? onError,
          namespace: namespace,
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

  /// Stops new navigation and completes after all mounted pages and routes retire.
  /// The host must remove its routes; closing never modifies a Navigator's stack.
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
  }) : _session = null,
       _pageName = null,
       _arguments = null;

  const FlaxView.session({super.key, required FlaxSession session})
    // Keep the borrowed session private; the public input is named session.
    // ignore: prefer_initializing_formals
    : _session = session,
      createRuntime = null,
      source = null,
      bindings = null,
      plugins = null,
      namespace = null,
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
  }) // These public inputs initialize private configuration fields.
    // ignore: prefer_initializing_formals
    : _session = session,
       _pageName = name,
       // ignore: prefer_initializing_formals
       _arguments = arguments,
       createRuntime = null,
       source = null,
       bindings = null,
       plugins = null,
       namespace = null,
       sourceUrl = null,
       onError = null;

  final List<FlaxPlugin>? plugins;
  final String? namespace;
  final FlaxJsRuntime Function()? createRuntime;
  final String? source;
  final String? sourceUrl;
  final FlaxBindingRegistry? bindings;
  final FlaxSession? _session;
  final String? _pageName;
  final Object? _arguments;
  final void Function(Object, StackTrace)? onError;

  @override
  Widget build(BuildContext context) => _pageName != null
      ? _NamedPageRoot(
          key: ValueKey((_session, _pageName)),
          session: _session!,
          name: _pageName,
          arguments: _arguments,
        )
      : _SessionRoot(
          key: ValueKey(
            _session ?? (createRuntime, source, sourceUrl, bindings, namespace),
          ),
          configuration: this,
        );
}

class _SessionRoot extends StatefulWidget {
  const _SessionRoot({super.key, required this.configuration});
  final FlaxView configuration;
  @override
  State<_SessionRoot> createState() => _SessionRootState();
}

class _SessionRootState extends State<_SessionRoot> {
  late final FlaxSession _session;
  late Widget _root;
  bool _attached = false;

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
        );
    try {
      _root = _session._mount(configuration._session == null ? _report : null);
      _attached = true;
    } catch (error, stack) {
      _root = _errorWidget(error);
      _report(error, stack);
    }
  }

  @override
  Widget build(BuildContext context) => _root;

  @override
  void dispose() {
    if (_attached) _session._unmount();
    if (widget.configuration._session == null) unawaited(_session.close());
    super.dispose();
  }
}
