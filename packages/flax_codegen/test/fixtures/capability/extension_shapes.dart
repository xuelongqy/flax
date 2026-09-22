// ignore_for_file: unused_element

import 'dart:async';

extension StringA on String {
  bool get isBlank => trim().isEmpty;
  int size() => length;
  String repeat(int count) => this * count;
  static String get version => '1';
  static int parse(String value) => int.parse(value);
  String operator [](int index) => substring(index, index + 1);
  String operator +(String other) => '$this:$other';
}

extension StringB on String {
  int size() => length + 10;
}

extension ListX<T> on List<T> {
  T get firstValue => first;
  set firstValue(T value) => this[0] = value;
  T operator [](int index) => elementAt(index);
  void operator []=(int index, T value) => this[index] = value;
  R mapFirst<R>(R Function(T) transform) => transform(first);
  Future<T> delayed() async => first;
  FutureOr<T> immediate() => first;
  (T, {int length}) describe() => (first, length: length);
}

extension NullableX on String? {
  bool get missing => this == null;
}

extension NumberX on int {
  int operator -() => -this;
  int operator -(int other) => this - other;
}

extension _PrivateX on String {
  int size() => length;
}

extension on String {
  int anonymousSize() => length;
}

typedef TextMapper = String Function(String);

enum ExtensionMode { first, second }

extension RecordX on (int, {String label}) {
  String apply(TextMapper transform) => transform('${this.$1}:${this.label}');
  Future<int> wait(Future<int> value) async => this.$1 + await value;
  FutureOr<int> maybe(FutureOr<int> value) => value;
}

extension ModeX on ExtensionMode {
  int get ordinal => index;
}

extension BoundX<T extends num> on List<T> {
  T get firstNumber => first;
  R convert<R extends num>(R Function(T) transform) => transform(first);
}

extension ShadowX<T> on List<T> {
  R choose<R>(R receiver, {String label = 'value'}) => receiver;
  // A member scope may shadow the extension's parameter.
  // ignore: avoid_shadowing_type_parameters
  T shadow<T>(T value) => value;
}

extension CollisionX on String {
  int get size => length;
  int getSize() => length;
}

extension RecursiveX<T extends Comparable<T>> on List<T> {
  T get value => first;
}

extension RawFunctionX on Function {
  int get value => 1;
}
