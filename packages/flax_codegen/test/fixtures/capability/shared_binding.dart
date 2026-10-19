import 'package:flutter/widgets.dart';

typedef ClosedCallback = num Function(num value);

class SharedBase {
  @override
  bool operator ==(covariant SharedBase other) => identical(this, other);
  @override
  int get hashCode => identityHashCode(this);
  num value = 1;
  num get narrowed => value;
  set narrowed(covariant num value) => this.value = value;
  @mustCallSuper
  num scale(num input) => input + value;
  num narrow(covariant num input) => input;
  int defaulted([int amount = 1]) => amount;
  int omitted({int amount = 1}) => amount;
  @mustCallSuper
  num guarded(num input) => scale(input);
  @mustCallSuper
  Future<num> guardedAsync(num input) async => scale(input);
  num operator +(num input) => scale(input);
}

class SharedChild extends SharedBase {
  @override
  num get value => super.value + 1;
  @override
  set value(num value) => super.value = value * 2;
  @override
  double get narrowed => value.toDouble();
  @override
  set narrowed(double value) => this.value = value;
  @override
  num scale(num input) => super.scale(input) + 10;
  @override
  double narrow(double input) => input + 0.5;
  @override
  int defaulted([int amount = 2]) => amount;
  @override
  int omitted({int amount = 2}) => amount;
}

mixin SharedScale on SharedChild {
  @override
  num scale(num input) => super.scale(input) + 100;
}

class SharedLeaf extends SharedChild with SharedScale {}

class CallbackFirst {
  ClosedCallback get callback =>
      (value) => value + 1;
}

class CallbackSecond {
  ClosedCallback get callback =>
      (value) => value + 2;
}

class Captured<T> {
  T Function(T value) get callback =>
      (value) => value;
  List<T> Function<R>(R value, T context) get nested =>
      <R>(R value, T context) => [context];
}

class OtherCaptured<T> {
  T Function(T value) get callback =>
      (value) => value;
}

class SharedRestricted extends SharedBase {}

class SharedGeneric<T> extends SharedBase {
  T? held;
  T echo(T value) => value;
}

class FixedFactory<T> {
  FixedFactory(this.value, {this.label = 'fixed'});
  T value;
  final String label;
  List<int> get values => [1, 2];
  (String, int) get record => (label, 2);
  Future<int> get future => Future.value(2);
  FixedDeferred<int> get deferred => FixedDeferred(2);
  int sum(List<int> values, {int offset = 3}) =>
      values.fold(offset, (a, b) => a + b);
  T choose(T input, {bool enabled = true}) => enabled ? input : value;
  String call(String Function({required String text}) callback) =>
      callback(text: label);
}

class FixedDeferred<T> {
  FixedDeferred(this.value);
  final T value;
  static FixedDeferred<T> resolveWith<T>(T Function() callback) =>
      FixedDeferred(callback());
}

class SharedWidgetBase extends StatelessWidget {
  const SharedWidgetBase({super.key});

  num get value => 1;
  num get narrowed => value;
  @mustCallSuper
  num scale(num input) => input + value;
  num narrow(covariant num input) => input;
  int defaulted({int amount = 1}) => amount;
  num callWith(num Function(num) callback) => callback(value);

  @override
  Widget build(BuildContext context) => const SizedBox();
}

class SharedWidgetChild extends SharedWidgetBase {
  const SharedWidgetChild({super.key});

  @override
  num get value => 2;
  @override
  double get narrowed => value.toDouble();
  @override
  num scale(num input) => super.scale(input) + 10;
  @override
  double narrow(double input) => input + 0.5;
  @override
  int defaulted({int amount = 2}) => amount;
}

class SharedWidgetLeaf extends SharedWidgetChild {
  const SharedWidgetLeaf({super.key});

  @override
  num scale(num input) => super.scale(input) + 100;
}

class SharedRestrictedWidget extends SharedWidgetBase {
  const SharedRestrictedWidget({super.key});
}
