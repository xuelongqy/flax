typedef PublicAlias<T extends num> = T Function(T value);

int topLevelMutable = 1;
const int topLevelConst = 2;
int get computedValue => topLevelMutable * 2;
set computedValue(int value) => topLevelMutable = value ~/ 2;
int publicFunction({int value = 1}) => value;
// Underscores intentionally exercise declaration discovery and JS name validation.
// ignore: non_constant_identifier_names
int under_score_function(int under_score_value) => under_score_value;
int dollar$value(int dollar$value) => dollar$value;
int hiddenFunction() => -1;

class Parent {
  int inheritedMethod(String value) => value.length;
  int get inheritedGetter => 7;
}

class Child extends Parent {
  Child({this.under_score = 0});
  // ignore: non_constant_identifier_names
  final int under_score;
  int operator +(int other) => under_score + other;
}

mixin PublicMixin {
  int mixinMethod() => 1;
}

enum Enhanced {
  one(1),
  two(2);

  const Enhanced(this.code);
  final int code;
  int twice() => code * 2;
}

extension PublicExtension on String {
  int countWords() => trim().isEmpty ? 0 : trim().split(' ').length;
  static int helper() => 3;
}

extension type PublicExtensionType(int value) {
  int doubled() => value * 2;
}

class CircularA {
  const CircularA(this.other);
  final CircularB? other;
}

class CircularB {
  const CircularB(this.other);
  final CircularA? other;
}

class HiddenClass {}
