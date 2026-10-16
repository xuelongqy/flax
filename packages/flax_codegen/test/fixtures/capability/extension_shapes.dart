// ignore_for_file: unused_element

import 'dart:async';

extension StringA on String {
  bool get isBlank => trim().isEmpty;
  int size() => length;
  String repeat(int count) => this * count;
  static String get version => '1';
  static int count = 0;
  static int parse(String value) => int.parse(value);
  String operator [](int index) => substring(index, index + 1);
  String operator +(String other) => '$this:$other';
}

extension StringB on String {
  int size() => length + 10;
}

extension ListX<T> on List<T> {
  List<T> Function<R>(R) get captured =>
      <R>(R value) => this;
  T Function<S extends R>(S) Function<R extends T>(R) get nested =>
      <R extends T>(R value) =>
          <S extends R>(S child) => child;
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

extension SetterCollisionX on List<int> {
  set firstValue(int value) => this[0] = value;
  void setFirstValue(int value) => this[0] = value;
}

extension WeakMap on String {
  static int get prototype => 1;
  static int get caller => 2;
}

extension RecursiveX<T extends Comparable<T>> on List<T> {
  T get value => first;
}

extension RawFunctionX on Function {
  int get value => 1;
}

extension StaticX on String {
  static int count = 0;
  static int _tracked = 0;
  static int get tracked => _tracked;
  static set tracked(num value) {
    if (value < 0) throw RangeError.value(value);
    _tracked = value.toInt();
  }

  static int? optional;
  static List<int> values = [];
  static int Function(int)? callback;
  static Future<int>? future;
  static Stream<int>? events;
  static late int pending;
  static set writeOnly(int value) => count = value;
  static const constant = 1;
  static final frozen = 2;
  static late final int once;
  static int _hidden = 0;
  static Type reflected = int;
  int get instanceValue => length + _hidden++;
}

extension StaticCollisionX on String {
  static int count = 0;
  static void setCount(int value) {}
}
