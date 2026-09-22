typedef Count = int;
typedef Label = String?;
typedef OnChanged = void Function(int value);
typedef Names = List<String>;
typedef NameChain = Names;
typedef Attributes = Map<String, String>;
typedef Transform = Names Function(Names values);
typedef DateAlias = DateTime;

typedef Generic<T> = List<T>;
typedef HigherRank = T Function<T>(T value);
typedef Mapper<T> = T Function(T value);
typedef MapperChain<T> = Mapper<T>;
typedef Converter<T> = T Function<U extends T>(U value);
typedef AsyncMapper<T> = Future<T> Function(T value);
typedef AsyncGenericMapper = Future<T> Function<T>(T value);
typedef NullableItems<T> = List<T?>?;
typedef NullableNumericMapper = T? Function<T extends num>(T? value);
typedef NullableBound<T extends num?> = List<T>;
typedef Dependent<T extends num, U extends T> = Map<T, U>;
// The inner T intentionally shadows the alias parameter to test lexical scopes.
// ignore: avoid_shadowing_type_parameters, avoid_types_as_parameter_names
typedef InnerShadow<T> = T Function(T Function<T>(T value) mapper, T value);
typedef RecursiveBound<T extends List<T>> = T Function(T value);
typedef UnboundBound<T extends DateTime> = T Function(T value);
typedef RecordAlias = (int, int);
typedef NamesInput = String;
typedef DartList = List<String>;
// ignore: camel_case_types
typedef number = int;
typedef AliasHostLifecycle = int;
typedef NonNullable = String;

abstract class AliasHost {
  void render();
}

class AliasConsumer {
  AliasConsumer(this.onChanged, this.names, this.attributes);

  final OnChanged onChanged;
  final Names names;
  final Attributes attributes;

  void notify(int value) => onChanged(value);
  Names transform(Transform callback) => callback(names);
}
