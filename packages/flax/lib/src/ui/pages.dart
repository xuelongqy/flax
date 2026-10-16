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

class _NamedPageRoot extends StatefulWidget {
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
  State<_NamedPageRoot> createState() => _NamedPageRootState();
}

class _NamedPageRootState extends State<_NamedPageRoot> {
  _Session? _loaded;

  @override
  Widget build(BuildContext context) {
    final session = widget.session;
    try {
      // Rebuilding an existing mount does not admit new content during close.
      final loaded = _loaded ??= session._load();
      return _PageBody(
        session: loaded,
        name: widget.name,
        arguments: widget.arguments,
      );
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
