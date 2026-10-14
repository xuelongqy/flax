class Dependent<T extends num, U extends T> {
  Dependent(this.first, this.second);
  final T first;
  final U second;
  String get typeName => '$T/$U';
}

class Forward<T extends U, U extends num> {
  Forward(this.first, this.second);
  final T first;
  final U second;
}

class NullableDependent<T extends num?, U extends T> {
  NullableDependent(this.first, this.second);
  final T first;
  final U second;
}

class Nested<T extends List<U>, U extends num> {
  Nested(this.items, this.value);
  final T items;
  final U value;
}

class BoundMethods {
  BoundMethods();
  U instance<T extends num, U extends T>(U value) => value;
  static U dependent<T extends num, U extends T>(U value) => value;
}

U dependentFunction<T extends num, U extends T>(U value) => value;

abstract class Uses {
  Dependent<num, int> get integers;
}
