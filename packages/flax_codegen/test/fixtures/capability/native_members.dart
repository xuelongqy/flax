import 'package:flutter/foundation.dart';

class NativeMemberBase {
  NativeMemberBase();

  int _value = 2;

  @nonVirtual
  int get nativeValue => _value;

  @nonVirtual
  set nativeValue(int value) => _value = value;

  @nonVirtual
  int nativeCall(int value, {int multiplier = 2}) =>
      transform(value) * multiplier;

  @mustCallSuper
  int transform(int value) => value + _value;
}

class NativeMemberChild extends NativeMemberBase {
  @override
  int transform(int value) => super.transform(value) + 1;
}
