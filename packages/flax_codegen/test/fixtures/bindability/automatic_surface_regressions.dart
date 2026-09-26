final class AutomaticGenericMethods {
  const AutomaticGenericMethods();

  T identity<T>(T value) => value;
  T bounded<T extends num>(T value) => value;
  static T staticIdentity<T>(T value) => value;
  T recursive<T extends Comparable<T>>(T value) => value;
}

class AutomaticGenericParent {
  AutomaticGenericParent();
  T inherited<T>(T value) => value;
}

final class AutomaticGenericChild extends AutomaticGenericParent {}

class AutomaticGenericProxy {
  AutomaticGenericProxy();
  T identity<T>(T value) => value;
}

final class AutomaticNameBoundaries {
  AutomaticNameBoundaries();

  int under_score() => 1;
  int dollar$value() => 2;
  int operator +(int value) => value;
  int get kind => 3;
  int get type => 4;
  int get ctor => 5;
  int get args => 6;

  static int counter = 0;
  static int _writeOnly = 0;
  static set writeOnly(int value) => _writeOnly = value;
  static int readWriteOnly() => _writeOnly;
}
