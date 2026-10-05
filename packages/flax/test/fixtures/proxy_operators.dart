class NumberBox {
  NumberBox(this.value);
  final int value;
  int operator +(int other) => value + other;
  int operator -(int other) => value - other;
  int operator -() => -value;
  int operator *(int other) => value * other;
  double operator /(int other) => value / other;
  int operator ~/(int other) => value ~/ other;
  int operator %(int other) => value % other;
  bool operator <(int other) => value < other;
  bool operator >(int other) => value > other;
  bool operator <=(int other) => value <= other;
  bool operator >=(int other) => value >= other;
  int operator &(int other) => value & other;
  int operator |(int other) => value | other;
  int operator ^(int other) => value ^ other;
  int operator <<(int other) => value << other;
  int operator >>(int other) => value >> other;
  int operator >>>(int other) => value >>> other;
  int operator ~() => ~value;
  int operator [](int index) => value + index;
  int? lastWrite;
  void operator []=(int index, int input) => lastWrite = index + input;
  @override
  bool operator ==(Object other) => other is NumberBox && other.value == value;
  @override
  int get hashCode => value.hashCode;
  @override
  String toString() => 'NumberBox($value)';
}

abstract class AbstractAdder {
  int operator +(int other);
}

class OperatorCollision {
  OperatorCollision();
  int operator +(int other) => other;
  int operatorAdd(int other) => other;
}

class GenericAdder<T extends num> {
  GenericAdder(this.value);
  final T value;
  T operator +(T other) => (value + other) as T;
  T operator -() => -value as T;
}

class DataOperator {
  DataOperator();
  Object? operator +(Object? other) => other;
}

class DataOperatorChild extends DataOperator {}

class CallbackOperator {
  CallbackOperator();
  int operator +(void Function(int) callback) {
    callback(1);
    return 2;
  }
}

class NumericOperator {
  NumericOperator();
  num operator +(num other) => other + 1;
}

mixin DoubleOperator on NumericOperator {
  @override
  double operator +(num other) => other.toDouble() + 2;
}

class MixedOperator extends NumericOperator with DoubleOperator {}

class ExcludedOperand {
  ExcludedOperand();
}

class ExcludedOperatorConsumer {
  ExcludedOperatorConsumer();
  int operator +(ExcludedOperand other) => 1;
}

class ExcludedInheritedConsumer extends ExcludedOperatorConsumer {}
