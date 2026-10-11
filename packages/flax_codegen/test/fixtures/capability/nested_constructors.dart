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
