T echoTop<T>(T value) => value;

class EchoMethods {
  EchoMethods();
  T echo<T>(T value) => value;
  List<T> wrap<T>(T value) => [value];
  T apply<T>(T value, T Function(T) callback) => callback(value);
  T Function<T>(T) identityCallback() =>
      <T>(T value) => value;
  Object? invokeGeneric(Object? value, T Function<T>(T) callback) =>
      callback<Object?>(value);
  Future<T> later<T>(T value) async => value;
  Stream<T> events<T>(T value) async* {
    yield value;
  }

  T? optional<T>([T? value]) => value;
  T? named<T>({T? value}) => value;
  String runtimeTypeName<T>() => '$T';
  static T numeric<T extends num>(T value) => value;
  T closed<T extends List<String>>(T value) => value;
  T recursive<T extends Comparable<T>>(T value) => value;
  U dependent<T extends num, U extends T>(U value) => value;
}

class InheritedMethods extends EchoMethods {}

class MethodBag<T> {
  MethodBag(this.items);
  final List<T> items;
  T first() => items.first;
  U mapFirst<U>(U Function(T) callback) => callback(first());
  // ignore: avoid_shadowing_type_parameters
  T echo<T>(T value) => value;
  U narrowed<U extends T>(U value) => value;
}

abstract class MethodBagUses {
  MethodBag<String> get strings;
}

class ClosedMethods extends MethodBag<String> {
  ClosedMethods() : super(['value']);
}

enum MethodKind {
  value;

  T echo<T>(T value) => value;
}

abstract class MethodFactory<T> {
  static MethodFactory<T> from<T, U>(T Function(U) callback) =>
      throw UnimplementedError();
}

class SharedMethods<T> {
  U choose<U>(T value, U other) => other;
}
