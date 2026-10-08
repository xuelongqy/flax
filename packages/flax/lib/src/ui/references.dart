part of '../../bindings.dart';

// Expando values follow the business owner. Finalizer tokens must not retain a
// JS facade: its conditional edge could otherwise keep the Dart owner alive.
final _bridgeOwners = Expando<List<Object>>();
final _bridgeFinalizer = Finalizer<Object>((token) {
  if (token is _WidgetCleanup) {
    token.release();
  } else {
    (token as WeakReference<_BridgeReference>).target?.release();
  }
});

// Session close enumerates live leases without making the session a GC root.
class _WeakReferences<T extends Object> extends IterableBase<T> {
  final _entries = <WeakReference<T>>[];
  @override
  Iterator<T> get iterator =>
      _entries.map((entry) => entry.target).whereType<T>().iterator;
  void add(T value) {
    _entries.removeWhere((entry) => entry.target == null);
    _entries.add(WeakReference(value));
  }

  void remove(T value) => _entries.removeWhere(
    (entry) => entry.target == null || identical(entry.target, value),
  );
  void clear() => _entries.clear();
}

// Work is retained by a Future, Stream or JS peer, never by its numeric ID.
class _WeakValueMap<K, V extends Object> extends MapBase<K, V> {
  final _entries = <K, WeakReference<V>>{};
  late final _finalizer =
      Finalizer<(K, WeakReference<_WeakValueMap<K, V>>, WeakReference<V>)>((
        token,
      ) {
        final map = token.$2.target;
        if (identical(map?._entries[token.$1], token.$3)) {
          map?._entries.remove(token.$1);
        }
      });
  @override
  V? operator [](Object? key) => _entries[key]?.target;
  @override
  void operator []=(K key, V value) {
    remove(key);
    final weak = WeakReference(value);
    _entries[key] = weak;
    _finalizer.attach(value, (key, WeakReference(this), weak), detach: weak);
  }

  @override
  Iterable<K> get keys => _entries.entries
      .where((entry) => entry.value.target != null)
      .map((entry) => entry.key);
  @override
  V? remove(Object? key) {
    final weak = _entries.remove(key);
    if (weak != null) _finalizer.detach(weak);
    return weak?.target;
  }

  @override
  void clear() {
    for (final weak in _entries.values) {
      _finalizer.detach(weak);
    }
    _entries.clear();
  }
}

// Identity indices need no enumeration: the ID table owns metadata, and this
// native weak-key table preserves identity without retaining business values.
class _IdentityIndex<T extends Object> {
  final _values = Expando<T>();
  T? operator [](Object? key) => key == null ? null : _values[key];
  void operator []=(Object key, T value) => _values[key] = value;
  T putIfAbsent(Object key, T Function() create) => _values[key] ??= create();
  void remove(Object? key) {
    if (key != null) _values[key] = null;
  }
}

// Dart method tear-offs compare equal across evaluations. Expando identity alone
// cannot preserve listener removal, so only this index uses weak equality keys.
class _FunctionIndex {
  final _buckets = <int, List<WeakReference<_FunctionReference>>>{};
  _FunctionReference? find(Object value, String view) {
    final bucket = _buckets[value.hashCode];
    if (bucket == null) return null;
    bucket.removeWhere((entry) => entry.target?._value == null);
    return bucket
        .map((entry) => entry.target)
        .whereType<_FunctionReference>()
        .where(
          (entry) =>
              entry._value == value &&
              entry._bindingViewKeyForReference == view,
        )
        .firstOrNull;
  }

  void add(Object value, _FunctionReference reference) =>
      (_buckets[value.hashCode] ??= []).add(WeakReference(reference));
  void remove(_FunctionReference reference) {
    final bucket = _buckets[reference.keyHash];
    bucket?.removeWhere(
      (entry) => entry.target == null || identical(entry.target, reference),
    );
    if (bucket?.isEmpty ?? false) _buckets.remove(reference.keyHash);
  }
}

abstract class _BridgeReference {
  _BridgeReference(_Session session) : _session = WeakReference(session) {
    session._references.add(this);
  }

  final WeakReference<_Session> _session;
  WeakReference<Object>? _referent;
  bool retired = false;
  bool released = false;
  int _running = 0;

  void attach(Object referent) {
    _referent = WeakReference(referent);
    (_bridgeOwners[referent] ??= []).add(this);
    _bridgeFinalizer.attach(
      referent,
      this is _WidgetConfiguration
          ? (this as _WidgetConfiguration).cleanup
          : WeakReference(this),
      detach: this,
    );
  }

  void enter() {
    if (retired) throw StateError('Retired bridge reference');
    _running++;
  }

  void leave() {
    assert(_running > 0);
    _running--;
    if (retired) release();
  }

  void release() {
    retired = true;
    _bridgeFinalizer.detach(this);
    if (_running != 0 || released) return;
    released = true;
    final referent = _referent?.target;
    if (referent != null) _bridgeOwners[referent]?.remove(this);
    _referent = null;
    _session.target?._references.remove(this);
    close();
  }

  void close();
}
