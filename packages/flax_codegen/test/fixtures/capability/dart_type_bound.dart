class BigValues extends Iterable<BigInt> {
  BigValues();

  @override
  Iterator<BigInt> get iterator => <BigInt>[].iterator;
}

class Bound<T extends Iterable<BigInt>> {
  Bound();

  String get typeName => '$T';
}

abstract class Uses {
  Bound<BigValues> typed();
}
