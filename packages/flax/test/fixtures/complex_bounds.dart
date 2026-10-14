import 'package:flutter/foundation.dart' show mustCallSuper;

final class ComparableValue implements Comparable<ComparableValue> {
  ComparableValue(this.value);
  final String value;
  @override
  int compareTo(ComparableValue other) => value.compareTo(other.value);
}

class RecursiveBox<T extends Comparable<T>> {
  RecursiveBox(this.value);
  final T value;
  String get typeName => '$T';
  List<T> values() => [value];
}

class RecursiveFactory<T> {
  RecursiveFactory._(this.value);
  final T value;
  static RecursiveFactory<T> create<T extends Comparable<T>>(
    T Function() create,
  ) => RecursiveFactory._(create());
}

RecursiveFactory<String> keepFactory(RecursiveFactory<String> value) => value;

class ComplexMethods<X> {
  @mustCallSuper
  List<T> recursive<T extends Comparable<T>>(T value) => [value];
  @mustCallSuper
  Future<List<T>> later<T extends Comparable<T>>(T value) async => [value];
  U narrowed<U extends X>(U value) => value;
  U Function<U extends X>(U) capturedCallback() =>
      <U extends X>(U value) => value;
  T Function<T extends Comparable<T>>(T) recursiveCallback() =>
      <T extends Comparable<T>>(T value) => recursive<T>(value).single;
  static T staticEcho<T extends Comparable<T>>(T value) => value;
}

class ClosedMethods extends ComplexMethods<String> {}

final class Left implements Comparable<Right> {
  @override
  int compareTo(Right other) => 0;
}

final class Right implements Comparable<Left> {
  @override
  int compareTo(Left other) => 0;
}

String mutual<A extends Comparable<B>, B extends Comparable<A>>(A a, B b) =>
    '$A/$B';

T recursiveTop<T extends Comparable<T>>(T value) => value;

extension RecursiveValues<T extends Comparable<T>> on List<T> {
  T get firstValue => first;
  U choose<U extends T>(U value) => value;
}

String visitRecursive(T Function<T extends Comparable<T>>(T) callback) =>
    callback<String>('callback');

T Function<T extends Comparable<T>>(T) returnRecursive() =>
    <T extends Comparable<T>>(T value) => value;

T Function<T extends U>(T) Function<U extends Comparable<U>>(U)
nestedRecursive() =>
    <U extends Comparable<U>>(U seed) =>
        <T extends U>(T value) => value;

List<String> callRecursive(ComplexMethods<String> owner, String value) =>
    owner.recursive<String>(value);
Future<List<String>> callLater(ComplexMethods<String> owner, String value) =>
    owner.later<String>(value);
String callNarrowed(ComplexMethods<String> owner, String value) =>
    owner.narrowed<String>(value);
