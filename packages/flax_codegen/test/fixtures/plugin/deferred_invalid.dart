abstract class PairProperty<A, B> {
  static PairProperty<T, T> resolveWith<T>(T Function() callback) =>
      throw UnimplementedError();
}

class PairConsumer {
  PairConsumer(this.value);
  final PairProperty<String, int> value;
}

abstract class ExtraProperty<T> {
  static ExtraProperty<T> resolveWith<T, U>(T Function(U) callback) =>
      throw UnimplementedError();
}

class ExtraConsumer {
  ExtraConsumer(this.value);
  final ExtraProperty<String> value;
}

abstract class CollectionProperty<T> {
  static CollectionProperty<T> fromValues<T>(List<T> values) =>
      throw UnimplementedError();
}

class CollectionConsumer {
  CollectionConsumer(this.value);
  final CollectionProperty<String> value;
}

abstract class WrongFactory<T> {
  static CollectionProperty<T> create<T>(T Function() callback) =>
      throw UnimplementedError();
}

class WrongConsumer {
  WrongConsumer(this.value);
  final WrongFactory<String> value;
}

abstract class AsyncProperty<T> {
  static Future<AsyncProperty<T>> resolveWith<T>(T Function() callback) async =>
      throw UnimplementedError();
}

abstract class BoundContract<T> {}

class ValidBound implements BoundContract<ValidBound> {}

class InvalidBound implements BoundContract<String> {}

abstract class BoundedProperty<T> {
  static BoundedProperty<T> resolveWith<T extends BoundContract<T>>(
    T Function() callback,
  ) => throw UnimplementedError();
}

class ValidBoundConsumer {
  ValidBoundConsumer(this.value);
  final BoundedProperty<ValidBound> value;
}

class InvalidBoundConsumer {
  InvalidBoundConsumer(this.value);
  final BoundedProperty<InvalidBound> value;
}

abstract class NumericProperty<T> {
  static NumericProperty<T> resolveWith<T extends num>(T Function() callback) =>
      throw UnimplementedError();
}

class NumericConsumer {
  NumericConsumer(this.value);
  final NumericProperty<int> value;
}

class NullableNumericConsumer {
  NullableNumericConsumer(this.value);
  final NumericProperty<double?> value;
}

class StringNumericConsumer {
  StringNumericConsumer(this.value);
  final NumericProperty<String> value;
}

abstract class NullableNumericProperty<T> {
  static NullableNumericProperty<T> resolveWith<T extends num?>(
    T Function() callback,
  ) => throw UnimplementedError();
}

class NullableBoundConsumer {
  NullableBoundConsumer(this.value);
  final NullableNumericProperty<double?> value;
}
