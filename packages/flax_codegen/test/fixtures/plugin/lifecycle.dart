import 'package:flutter/foundation.dart' show mustCallSuper;

abstract class ProcessorBase<T> {
  final calls = <String>[];
  @mustCallSuper
  void attach(T value) {
    calls.add('super:$value');
  }

  int normalize(int value) => value + 10;
}

abstract class ProcessorMiddle extends ProcessorBase<int> {
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
  void attach(int value) {}
}

abstract class InterfaceProcessor implements DirectProcessor {
  @override
  void attach(int value) {}
}

mixin ProcessorMixin on ProcessorBase<int> {
  @override
  void attach(int value) {
    calls.add('mixin:$value');
    super.attach(value);
  }
}

abstract class MixedProcessor extends ProcessorBase<int> with ProcessorMixin {}
