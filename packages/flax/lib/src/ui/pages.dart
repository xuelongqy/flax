part of '../../bindings.dart';

final _pageContentBinding = FlaxWidgetBinding('flax:page-content', {
  '': [
    const FlaxParameter('name', FlaxTypeRef('String'), required: true),
    const FlaxParameter(
      'key',
      FlaxTypeRef('object', id: 'flax.core/flutter#type:Key', nullable: true),
      required: false,
    ),
    const FlaxParameter(
      'arguments',
      FlaxTypeRef('data', nullable: true),
      required: false,
    ),
  ],
}, _PageContentHost.new);

class _PageContentHost extends FlaxWidgetHost {
  _PageContentHost(super.node);
  @override
  Widget buildNative(Map<String, Object?> values) => _PageBody(
    key: ValueKey((node._session, values['name'])),
    session: node._session,
    name: values['name'] as String,
    arguments: values['arguments'],
  );
}

class _NamedPageRoot extends StatelessWidget {
  const _NamedPageRoot({
    super.key,
    required this.session,
    required this.name,
    this.arguments,
  });
  final FlaxSession session;
  final String name;
  final Object? arguments;
  @override
  Widget build(BuildContext context) {
    try {
      final route = ModalRoute.of(context);
      final loaded = session._load(
        allowClosing: session._session?.ownsPageRoute(route) ?? false,
      );
      return _PageBody(session: loaded, name: name, arguments: arguments);
    } catch (error, stack) {
      if (session._session case final current?) {
        current.report(error, stack);
      } else if (session.onError case final report?) {
        report(error, stack);
      } else {
        FlutterError.reportError(
          FlutterErrorDetails(exception: error, stack: stack, library: 'flax'),
        );
      }
      return _errorWidget(error);
    }
  }
}

class _PageBody extends StatefulWidget {
  const _PageBody({
    super.key,
    required this.session,
    required this.name,
    this.arguments,
  });
  final _Session session;
  final String name;
  final Object? arguments;
  @override
  State<_PageBody> createState() => _PageBodyState();
}

class _PageBodyState extends State<_PageBody> {
  _Value? _content;
  FlaxJsObject? _instance;
  FlaxJsFunction? _update;
  Object? _arguments;
  bool _hasArguments = false;
  Object? _error;
  int _hotGeneration = 0;

  @override
  void initState() {
    super.initState();
    widget.session.retainMount();
    _hotGeneration = widget.session.hotPageGeneration(widget.name);
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    final session = widget.session;
    try {
      session.holdPageRoute(ModalRoute.of(context));
      _applyArguments();
    } catch (error, stack) {
      _error = error;
      session.report(error, stack);
    }
  }

  @override
  void didUpdateWidget(covariant _PageBody oldWidget) {
    super.didUpdateWidget(oldWidget);
    _applyArguments();
  }

  void _applyArguments() {
    final session = widget.session;
    FlaxJsValue? encoded;
    try {
      final next = _copyNavigationData(widget.arguments);
      if (_hasArguments && _sameNavigationData(_arguments, next)) return;
      encoded = session.encodeData(next);
      if (_instance == null) {
        _replacePage(encoded);
      } else {
        _releaseJs(_update!.call([encoded]));
      }
      _arguments = next;
      _hasArguments = true;
      _error = null;
    } catch (error, stack) {
      _error = error;
      session.report(error, stack);
    } finally {
      if (encoded != null) _releaseJs(encoded);
      session.checkpoint();
    }
  }

  void _replacePage(FlaxJsValue encoded, {bool retire = false}) {
    final session = widget.session;
    final result = session.helper('createPage').call([
      FlaxJsString(widget.name),
      encoded,
    ]);
    if (result is! FlaxJsObject) {
      _releaseJs(result);
      throw StateError('Invalid page instance');
    }
    _Value? content;
    FlaxJsFunction? update;
    try {
      content = _property(
        result,
        'widget',
        (value) => session.decode(value, const FlaxTypeRef('widget')),
      );
      update = result.getProperty('update') as FlaxJsFunction;
    } catch (_) {
      content?.release();
      update?.release();
      session.disposePage(result);
      result.release();
      rethrow;
    }

    final previousContent = _content;
    final previousUpdate = _update;
    final previousInstance = _instance;
    _content = content;
    _update = update;
    _instance = result;
    if (previousInstance == null) return;
    void releasePrevious() {
      previousContent?.release();
      previousUpdate?.release();
      session.disposePage(previousInstance);
      previousInstance.release();
    }

    if (retire) {
      session.retireHot(releasePrevious);
    } else {
      releasePrevious();
    }
  }

  @override
  void reassemble() {
    super.reassemble();
    final generation = widget.session.hotPageGeneration(widget.name);
    if (generation == _hotGeneration || !_hasArguments) return;
    _hotGeneration = generation;
    FlaxJsValue? encoded;
    try {
      encoded = widget.session.encodeData(_arguments);
      _replacePage(encoded, retire: true);
      _error = null;
    } catch (error, stack) {
      _error ??= error;
      widget.session.report(error, stack);
    } finally {
      if (encoded != null) _releaseJs(encoded);
      widget.session.checkpoint();
    }
  }

  @override
  Widget build(BuildContext context) =>
      _content?.data as Widget? ??
      _errorWidget(_error ?? StateError('Page initialization failed'));

  @override
  void dispose() {
    _content?.release();
    _update?.release();
    final instance = _instance;
    if (instance != null) {
      // Flutter has already unmounted this State's descendants. Controllers can detach first.
      widget.session.disposePage(instance);
      instance.release();
    }
    widget.session.releaseMount();
    super.dispose();
  }
}

/// Implemented by generated Page subclasses, never by application JS.
abstract interface class FlaxPageConfiguration {
  FlaxPageLease get flaxPageLease;
}

/// Shared ownership for a Page descriptor and its constructor resources.
class FlaxPageLease extends _Resource {
  FlaxPageLease._(this._session, this._sources, this._descriptor);
  final _Session _session;
  final Map<String, _Source> _sources;
  final FlaxJsObject _descriptor;

  @override
  void close() {
    for (final source in _sources.values) {
      source.release();
    }
    _descriptor.release();
  }
}

/// Engine-independent lifecycle base for a library's standard Page Route adapter.
/// Flutter updates settings before changedInternalState, so a Route always owns
/// the callbacks for its current configuration, including during exit transitions.
abstract class FlaxPageRoute<T> extends PageRoute<T> {
  FlaxPageRoute({required Page<T> page}) : super(settings: page);
  FlaxPageLease? _lease;

  void _adoptPage() {
    final next = (settings as FlaxPageConfiguration).flaxPageLease;
    if (identical(next, _lease)) return;
    final previous = _lease;
    if (previous == null) next._session.requireOpen();
    next.retain();
    next._session.retainRoute();
    _lease = next;
    if (previous != null) {
      previous.release();
      previous._session.releaseRoute();
    }
  }

  @override
  void install() {
    _adoptPage();
    super.install();
  }

  @override
  void changedInternalState() {
    if (_lease != null) _adoptPage();
    super.changedInternalState();
  }

  @override
  void dispose() {
    try {
      super.dispose();
    } finally {
      final lease = _lease;
      _lease = null;
      if (lease != null) {
        lease.release();
        lease._session.releaseRoute();
      }
    }
  }
}

extension _PageDecoding on _Session {
  _Value decodePage(
    FlaxJsObject descriptor,
    FlaxPageBinding definition,
    String ctor,
  ) {
    final parameters = definition.constructors[ctor];
    if (parameters == null) throw ArgumentError('Unsupported Page constructor');
    final sources = _inBindingContext(
      definition.id,
      () => _arguments(
        descriptor,
        parameters,
        allowBindings: false,
        callbackScope: _CallbackScope.ui,
      ),
    );
    final lease = FlaxPageLease._(this, sources, descriptor.retain());
    try {
      final page = definition.create(
        ctor,
        sources.map((name, source) => MapEntry(name, source.initial.data)),
        lease,
      );
      return _Value(page, [lease]);
    } catch (_) {
      lease.release();
      rethrow;
    }
  }
}

extension _PageCleanup on _Session {
  void disposePage(FlaxJsObject instance) {
    try {
      _property(instance, 'dispose', (callback) {
        if (callback is! FlaxJsFunction) {
          throw StateError('Missing page cleanup');
        }
        _releaseJs(callback.call(const []));
      });
    } catch (error, stack) {
      report(error, stack);
    } finally {
      checkpoint();
    }
  }
}
