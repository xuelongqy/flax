import 'dart:async';

import 'package:flutter/foundation.dart' show mustCallSuper;

abstract class ProcessorBase<T> {
  final calls = <String>[];
  int _value = 1;

  @mustCallSuper
  int get value => _value;

  @mustCallSuper
  set value(int value) => _value = value;

  @mustCallSuper
  Future<int> get pending => Future.value(_value);

  @mustCallSuper
  FutureOr<int> get mixed => _value;

  @mustCallSuper
  Future<int>? get optional => null;

  @mustCallSuper
  void attach(T value) {
    calls.add('super:$value');
  }

  int normalize(int value) => value + 10;
}

abstract class ProcessorMiddle extends ProcessorBase<int> {
  @override
  int get value => super.value + 10;

  @override
  // Keep this unannotated override to verify the inherited requirement.
  // ignore: unnecessary_overrides
  set value(int value) => super.value = value;

  @override
  void attach(int value) {
    calls.add('middle:before');
    super.attach(value);
    calls.add('middle:after');
  }
}

abstract class Processor extends ProcessorMiddle {
  int calculate(int value);
}

abstract class DirectProcessor {
  @mustCallSuper
  int get value => 1;

  @mustCallSuper
  set value(int value) {}

  @mustCallSuper
  void attach(int value) {}
}

abstract class InterfaceProcessor implements DirectProcessor {
  @override
  int get value => 2;

  @override
  set value(int value) {}

  @override
  void attach(int value) {}
}

mixin ProcessorMixin on ProcessorBase<int> {
  @override
  int get value => super.value + 20;

  @override
  // Keep this unannotated override to verify the inherited requirement.
  // ignore: unnecessary_overrides
  set value(int value) => super.value = value;

  @override
  void attach(int value) {
    calls.add('mixin:$value');
    super.attach(value);
  }
}

abstract class MixedProcessor extends ProcessorBase<int> with ProcessorMixin {}
