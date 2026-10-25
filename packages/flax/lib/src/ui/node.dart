part of '../../bindings.dart';

/// Immutable constructor input owned by the host. Generated code only consumes it.
class FlaxNode extends _Resource {
  FlaxNode._(this._session, this.definition, this.ctor, this._sources);
  final _Session _session;
  final FlaxWidgetBinding definition;
  final String ctor;
  final Map<String, _Source> _sources;
  Widget? _validatedWidget;
  Key? get key => _sources['key']?.initial.data as Key?;
  @override
  void close() {
    _validatedWidget = null;
    for (final source in _sources.values) {
      source.release();
    }
  }
}

/// Reactive Widget descriptions subclass this host, preserving Flutter's type/key
/// matching while sharing the state, scheduling, and reference implementation.
abstract class FlaxWidgetHost extends StatefulWidget {
  FlaxWidgetHost(this.node) : super(key: node.key);
  final FlaxNode node;

  Widget buildNative(Map<String, Object?> values);
  @override
  State<FlaxWidgetHost> createState() => _NodeState();
}

class _MountedProperty {
  _MountedProperty(
    this.owner,
    this.name,
    this.source, [
    _MountedProperty? previous,
  ]) {
    source.retain();
    try {
      value = prepare(source.seed(), previous?._value);
      if (source.binding != null) {
        token = source.session._nextToken++;
        source.session._subscriptions[token!] = this;
        _unsubscribe = source.observe(token!);
      }
    } catch (_) {
      source.session._subscriptions.remove(token);
      _value?.release();
      source.release();
      rethrow;
    }
  }
  final _NodeState owner;
  final String name;
  final _Source source;
  _Value? _value;
  _Value get value => _value!;
  set value(_Value next) => _value = next;
  int? token;
  FlaxJsFunction? _unsubscribe;
  bool _closed = false;

  _Value prepare(_Value next, [_Value? previous]) {
    try {
      next.validate();
    } catch (_) {
      next.release();
      rethrow;
    }
    if (next.data case final List<Page<Object?>> input) {
      final List<Page<Object?>> pages;
      try {
        pages = List<Page<Object?>>.unmodifiable(input);
      } catch (_) {
        next.release();
        rethrow;
      }
      next = _Value(pages, [next]);
      final keys = <LocalKey>{};
      for (final page in pages) {
        if (page.key != null && !keys.add(page.key!)) {
          next.release();
          throw ArgumentError('Duplicate Page key: ${page.key}');
        }
      }
      if (!source.session.closing) {
        return next;
      }
      final old =
          (previous ?? _value)?.data as List<Page<Object?>>? ?? const [];
      // Closing may update or remove accepted Pages, but cannot add another
      // instance of an unkeyed Page that merely matches an existing type.
      final remaining = List<Page<Object?>>.of(old);
      for (final page in pages) {
        final index = remaining.indexWhere(page.canUpdate);
        if (index < 0) {
          next.release();
          throw StateError('The Flax session is closing');
        }
        remaining.removeAt(index);
      }
    }
    if (next.data == null || !source.type.containsCallback) {
      return next;
    }
    if (source.type.kind != 'callback') return _prepareNestedCallbacks(next);
    try {
      final callback = _callbackSources[next.data!];
      if (callback == null) {
        next.retain();
        return next;
      }
      final mounted = callback.mount(owner);
      return _Value(mounted.wrap(), [mounted]);
    } finally {
      next.release();
    }
  }

  _Value _prepareNestedCallbacks(_Value input) {
    final types = Map<Object, FlaxTypeRef>.identity();
    final parents = Map<Object, Set<Object>>.identity();
    final affected = Set<Object>.identity();
    final mounted = <_Callback>[];
    final copies = Map<Object, Object>.identity();

    void inspect(Object? value, FlaxTypeRef type, [Object? parent]) {
      if (value == null) return;
      if (type.kind == 'callback') {
        if (_callbackSources[value] != null && parent != null) {
          affected.add(parent);
        }
        return;
      }
      if (value is! Iterable && value is! Map) return;
      final owners = parents.putIfAbsent(value, () => Set<Object>.identity());
      if (parent != null) owners.add(parent);
      if (!type.containsCallback || types.containsKey(value)) return;
      types[value] = type;
      if (value is Iterable && value is! Map) {
        for (final item in value) {
          inspect(item, type.item!, value);
        }
      } else {
        for (final entry in (value as Map).entries) {
          inspect(entry.key, type.key!, value);
          inspect(entry.value, type.item!, value);
        }
      }
    }

    Object? adapt(Object? value, FlaxTypeRef type) {
      if (value == null) return null;
      if (type.kind == 'callback') {
        final source = _callbackSources[value];
        if (source == null) return value;
        final callback = source.mount(owner);
        mounted.add(callback);
        return callback.wrap();
      }
      if (!affected.contains(value)) return value;
      if (copies[value] case final copy?) return copy;
      final selected = types[value]!;
      final copy = selected.collection!.create();
      copies[value] = copy;
      if (copy is Iterable && copy is! Map) {
        for (final item in value as Iterable) {
          if (copy is Set) {
            copy.add(adapt(item, selected.item!));
          } else {
            (copy as List).add(adapt(item, selected.item!));
          }
        }
      } else {
        for (final entry in (value as Map).entries) {
          (copy as Map)[adapt(entry.key, selected.key!)] = adapt(
            entry.value,
            selected.item!,
          );
        }
      }
      return copy;
    }

    try {
      inspect(input.data, source.type);
      if (affected.isEmpty) return input;
      // Propagate to ancestors once, including cycles. Native-only branches retain
      // their original containers; shared callback containers are copied only once.
      final pending = affected.toList();
      for (var i = 0; i < pending.length; i++) {
        for (final parent in parents[pending[i]]!) {
          if (affected.add(parent)) pending.add(parent);
        }
      }
      return _Value(adapt(input.data, source.type), [input, ...mounted]);
    } catch (_) {
      for (final callback in mounted.reversed) {
        callback.release();
      }
      input.release();
      rethrow;
    }
  }

  void close() {
    if (_closed) return;
    _closed = true;
    source.session._subscriptions.remove(token);
    final unsubscribe = _unsubscribe;
    if (unsubscribe != null) {
      try {
        if (source.session.active) _releaseJs(unsubscribe.call(const []));
      } catch (error, stack) {
        source.session.report(error, stack);
      } finally {
        unsubscribe.release();
      }
    }
    value.release();
    source.release();
  }
}

class _NodeState extends State<FlaxWidgetHost> with _ContextOwner {
  _Session? _retainedSession;
  FlaxNode? _node;
  FlaxWidgetHost? _host;
  Map<String, _MountedProperty> _properties = {};
  Widget _built = const SizedBox.shrink();

  @override
  void initState() {
    super.initState();
    final session = widget.node._session;
    if (!session.active) {
      final error = StateError('Closed Flax session');
      session.report(error, StackTrace.current);
      _built = _errorWidget(error);
      return;
    }
    session.retainMount();
    _retainedSession = session;
    _adopt(widget);
  }

  @override
  void didUpdateWidget(covariant FlaxWidgetHost oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (!identical(oldWidget.node, widget.node)) _adopt(widget);
  }

  void _adopt(FlaxWidgetHost host) {
    final tracing = Flax.traceForExperiment;
    tracing?.call('dart:mount-config', true);
    try {
      final node = host.node;
      final next = <String, _MountedProperty>{};
      late Widget built;
      try {
        if (!node._session.active) throw StateError('Closed Flax session');
        for (final entry in node._sources.entries) {
          final old = _properties[entry.key];
          if (old != null && old.source.sameBinding(entry.value)) {
            entry.value.discardPreview();
            next[entry.key] = old;
          } else {
            next[entry.key] = _MountedProperty(
              this,
              entry.key,
              entry.value,
              old,
            );
          }
        }
        for (final property in next.values) {
          property.value.validate();
        }
        // Static inputs need no mounted callback adaptation or refreshed binding value.
        built =
            node._validatedWidget ??
            node._session._traceNativeWidget(
              host,
              next.map((name, property) => MapEntry(name, property.value.data)),
            );
      } catch (error, stack) {
        for (final property in next.values) {
          if (!identical(_properties[property.name], property)) {
            property.close();
          }
        }
        node._session.report(error, stack);
        if (_node == null) _built = _errorWidget(error);
        return;
      }
      // Commit only after all parameters and the native constructor succeeded.
      node.retain();
      final previousSession = _retainedSession;
      if (!identical(previousSession, node._session)) {
        node._session.retainMount();
        _retainedSession = node._session;
      }
      final oldNode = _node;
      final oldProperties = _properties;
      _node = node;
      _host = host;
      _properties = next;
      _built = built;
      for (final old in oldProperties.values) {
        if (!identical(next[old.name], old)) old.close();
      }
      oldNode?.release();
      if (!identical(previousSession, _retainedSession)) {
        previousSession?.releaseMount();
      }
    } finally {
      tracing?.call('dart:mount-config', false);
    }
  }

  void refresh(Set<String> names) {
    final next = <String, _Value>{};
    late Widget built;
    try {
      for (final name in names) {
        final property = _properties[name];
        if (property?.source.binding != null) {
          next[name] = property!.prepare(property.source.read());
        }
      }
      if (next.isEmpty) return;
      for (final entry in _properties.entries) {
        (next[entry.key] ?? entry.value.value).validate();
      }
      built = _node!._session._traceNativeWidget(
        _host!,
        _properties.map(
          (name, property) =>
              MapEntry(name, (next[name] ?? property.value).data),
        ),
      );
    } catch (error, stack) {
      for (final value in next.values) {
        value.release();
      }
      _node!._session.report(error, stack);
      return;
    }
    final retired = <_Value>[];
    setState(() {
      for (final entry in next.entries) {
        retired.add(_properties[entry.key]!.value);
        _properties[entry.key]!.value = entry.value;
      }
      _built = built;
    });
    for (final value in retired) {
      value.release();
    }
  }

  @override
  Widget build(BuildContext context) => _built;

  @override
  void deactivate() {
    _active = false;
    super.deactivate();
  }

  @override
  void activate() {
    super.activate();
    _active = true;
    for (final property in _properties.values) {
      if (property.token != null) {
        property.source.session.invalidate(property.token!);
      }
    }
  }

  @override
  void dispose() {
    _active = false;
    for (final property in _properties.values) {
      property.close();
    }
    _properties.clear();
    for (final context in _contexts.toList()) {
      context.release();
    }
    _contexts.clear();
    _node?.release();
    _retainedSession?.releaseMount();
    super.dispose();
  }
}

/// Shared identity for native Widget subclasses; mount resources remain separate.
final _flaxWidgetProxyTypes = Expando<Type>();

mixin FlaxWidgetProxy on Widget {
  @override
  Type get runtimeType => _flaxWidgetProxyTypes[this] ?? super.runtimeType;
}
