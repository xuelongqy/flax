export 'dart:async' show Stream;

final class ListBox<T> {
  ListBox(this.value, {this.history, Function? observer});
  final T value;
  final List<Future<T>>? history;
}

final class MapBox<T> {
  MapBox(this.value);
  final T value;
}

final class NullableBox<T> {
  NullableBox(this.value);
  final T value;
}

final class OptionalBox<T> {
  OptionalBox(this.value);
  T? value;
  T get requiredValue => value as T;
  set requiredValue(T value) => this.value = value;
}

final class NestedUses {
  NestedUses(this.list, this.map, this.nullable, this.optional);
  final ListBox<List<String>> list;
  final MapBox<Map<String, List<int?>>> map;
  final NullableBox<List<String?>?> nullable;
  final OptionalBox<List<String>> optional;
}

final class AmbiguousBox<T> {
  AmbiguousBox(this.value);
  final T value;
}

final class AmbiguousUses {
  AmbiguousUses(this.strings, this.integers);
  final AmbiguousBox<List<String>> strings;
  final AmbiguousBox<List<int>> integers;
}

final class Leaf {
  const Leaf(this.id);
  final int id;
}

final class Envelope<T> {
  Envelope(this.value);
  final T value;
}

final class Bag<T> {
  Bag(this.items);
  Bag.fromSet(Set<T> items) : items = items.toList();
  Bag.fromRecord((List<T>, {T? value}) input) : items = input.$1;
  Bag.fromFuture(Future<List<T>> this.pending) : items = [];
  Bag.fromCallback(List<T> Function() build) : items = build();
  Bag.fromEnvelope(Envelope<List<T>> input) : items = input.value;
  Bag.fromGeneric(void Function<R extends T>(R) visit) : items = [];

  List<T> items;
  Future<List<T>>? pending;
  T first() => items.first;
  List<T> map(T Function(T) callback) => items.map(callback).toList();
}

final class NullableBag<T> {
  NullableBag(this.items);
  List<T?>? items;
  T first() => items!.whereType<T>().first;
}

final class PairBag<K, V> {
  PairBag(this.items);
  Map<K, List<V?>> items;
  V first(K key) => items[key]!.whereType<V>().first;
}

final class CorrelatedBag<T> {
  CorrelatedBag(this.tag, this.items);
  final T tag;
  final List<T> items;
}

final class AmbiguousBag<T> {
  AmbiguousBag(this.items);
  final List<T> items;
}

final class OptionalBag<T> {
  OptionalBag({this.items});
  final List<T>? items;
}

final class PhantomBag<T, U> {
  PhantomBag(this.items);
  final List<T> items;
}

extension type PhantomToken<T>(int value) {}

extension type ItemsToken<T>(List<T> values) {}

final class TokenBag<T> {
  TokenBag(ItemsToken<T> items) : items = items.values;
  final List<T> items;
}

final class PhantomTokenBag<T> {
  PhantomTokenBag(this.token);
  final PhantomToken<T> token;
}

final class DataInputBag<T> {
  DataInputBag(this.items);
  final List<T> items;
}

abstract class BagUses {
  Bag<String> get strings;
  Envelope<List<String>> get envelope;
  NullableBag<String> get nullable;
  PairBag<String, int> get pairs;
  CorrelatedBag<String> get correlated;
  AmbiguousBag<String> get ambiguousStrings;
  AmbiguousBag<int> get ambiguousIntegers;
  OptionalBag<String> get optional;
  PhantomBag<String, int> get phantom;
  TokenBag<String> get token;
  PhantomTokenBag<String> get phantomToken;
  DataInputBag<Object?> get data;
}

enum NestedBagEnum<T> {
  strings<String>(['a']);

  const NestedBagEnum(this.items);
  factory NestedBagEnum.fromItems(List<T> items) => strings as NestedBagEnum<T>;
  final List<T> items;
}

enum CorrelatedBagEnum<T> {
  strings<String>('a', ['a']),
  integers<int>(1, [1]);

  const CorrelatedBagEnum(this.tag, this.items);
  factory CorrelatedBagEnum.fromItems(T tag, List<T> items) {
    if (T == String) return strings as CorrelatedBagEnum<T>;
    if (T == int) return integers as CorrelatedBagEnum<T>;
    throw StateError('Unexpected enum factory target: $T');
  }
  final T tag;
  final List<T> items;
}

final class ExplicitBox<T> {
  ExplicitBox(this.value);
  final T value;
}

final class BoundedBox<T extends num> {
  BoundedBox(this.value);
  final T value;
}

class BoundedIterableBox<T extends Iterable<String>> {
  BoundedIterableBox(this.value);
  T value;
  T echo(T value) => value;
  Future<T> pending(T value) async => value;
  T map(T Function(T) callback) => callback(value);
  T generic(T Function<R extends T>(R) callback) => callback<T>(value);
  R Function<R extends T>(R) get identity => _identity;
  R _identity<R extends T>(R value) => value;
  T select<R extends T>(R value) => value;
  int size() => value.length;
  T? get optional => value;
  (List<T>,) get record => ([value],);
  // Deliberately reuse T to test lexical generic substitution.
  // ignore: avoid_shadowing_type_parameters
  T shadow<T>(T value) => value;
}

final class BoundedIterableUses {
  BoundedIterableUses(this.list, this.set);
  final BoundedIterableBox<List<String>> list;
  final BoundedIterableBox<Set<String>> set;
}

final class MixedBox<T> {
  MixedBox(this.value, {this.record});
  final T value;
  final (List<T>,)? record;
}

final class MixedUses {
  MixedUses(this.text, this.integer, this.list, this.set, this.map);
  final MixedBox<String> text;
  final MixedBox<int> integer;
  final MixedBox<List<String>> list;
  final MixedBox<Set<int>> set;
  final MixedBox<Map<String, List<int?>>> map;
}

final class CallbackBox<T> {
  CallbackBox(this.value, {this.next, this.pending, this.visit});
  final T value;
  final T Function()? next;
  final List<T Function()>? pending;
  final void Function(T)? visit;
}

final class CallbackUses {
  CallbackUses(this.text, this.list);
  final CallbackBox<String> text;
  final CallbackBox<List<String>> list;
}

final class DataObjectBox<T> {
  DataObjectBox(this.value);
  T value;
  T get copied => value;
}

final class DataListBox<T> {
  DataListBox(this.value);
  T value;
  T get copied => value;
}

final class DataUses {
  DataUses(this.object, this.list);
  final DataObjectBox<Object?> object;
  final DataListBox<List<Object?>> list;
}
