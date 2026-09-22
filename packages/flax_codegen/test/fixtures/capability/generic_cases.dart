class GenericBox<T> {
  GenericBox(this.value);
  T value;
  T echo(T input) => input;
}

class StringBoxPage {
  StringBoxPage(this.title);
  final GenericBox<String> title;
}

class IntBoxPage {
  IntBoxPage(this.count);
  final GenericBox<int> count;
}

class GenericBoxPage<T> {
  GenericBoxPage(this.value);
  final GenericBox<T> value;
}

class NestedBoxPage {
  NestedBoxPage(this.values);
  final GenericBox<List<String>> values;
}

class NumericBox<T extends num> {
  NumericBox(this.value);
  T value;
  T echo(T input) => input;
}

class DependentBox<T extends num, U extends T> {
  DependentBox(this.first, this.second);
  final T first;
  final U second;
  U choose(T ignored, U value) => value;
}

class ComparableLeaf implements Comparable<ComparableLeaf> {
  const ComparableLeaf(this.value);
  final int value;

  @override
  int compareTo(ComparableLeaf other) => value.compareTo(other.value);
}

class RecursiveBox<T extends Comparable<T>> {
  RecursiveBox(this.value);
  final T value;
  T echo(T input) => input;
}

class GenericMethods {
  GenericMethods();
  T identity<T extends num>(T value) => value;
  static T staticIdentity<T extends num>(T value) => value;
}

T genericFunction<T extends num>(T value) => value;

Comparable<ComparableLeaf> unboundComparable(
  Comparable<ComparableLeaf> value,
) => value;

abstract interface class RecursiveBase<T> {}

class BaseLeaf implements RecursiveBase<BaseLeaf> {
  BaseLeaf();
}

class BaseBox<T extends RecursiveBase<T>> {
  BaseBox(this.value);
  final T value;
}

class NumberComparable implements Comparable<num> {
  NumberComparable();
  @override
  int compareTo(num other) => 0;
}

class RelatedBox<T extends num, U extends Comparable<T>> {
  RelatedBox(this.value);
  final U value;
}

class BoundMethods {
  BoundMethods();
  T echo<T extends Comparable<T>>(T value) => value;
}

T recursiveFunction<T extends Comparable<T>>(T value) => value;
typedef BoundItems<T extends Comparable<T>> = List<T>;
typedef BoundCallback<T extends Comparable<T>> = T? Function((T, {T? value}));

class BoundCombinations<T extends Comparable<T>> {
  BoundCombinations(this.value);
  final T value;
  (T, {T? value}) record((T, {T? value}) input) => input;
  T? callback(BoundCallback<T> fn) => fn((value, value: null));
}

extension RecursiveValues<T extends Comparable<T>> on List<T> {
  T get firstValue => first;
}

typedef CallbackBoundItems<T extends void Function(Comparable<int>)> = List<T>;
