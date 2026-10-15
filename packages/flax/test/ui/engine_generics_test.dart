import 'package:flax/flax.dart';
import 'package:flutter_test/flutter_test.dart';

Type typeOf<T>() => T;
Type recursiveFunctionType<X>() =>
    typeOf<T Function<T extends Comparable<T>>(T)>();
Type capturedFunctionType<X>() => typeOf<T Function<T extends X>(T)>();
late FlaxJsRuntime runtime;
Function bind(Function factory, List<Type> types) =>
    runtime.instantiateDartClosure(factory, types);
List<Object?> parts(Type type) => runtime.dartTypeParts(type);
List<Type> typeArguments(Type type) => (parts(type)[4] as List).cast<Type>();
Map<String, Object?> describe(Type type) {
  final value = parts(type);
  return {
    'name': value[0],
    'nullable': value[1],
    'library': value[2],
    'declaration': value[3],
    'arguments': [
      for (final child in (value[4] as List).cast<Type>()) describe(child),
    ],
  };
}

@pragma('vm:entry-point')
T echo<T>(T value) => value;
@pragma('vm:entry-point')
List<T> wrap<T>(T value) => [value];
@pragma('vm:entry-point')
List<T> empty<T>() => [];
@pragma('vm:entry-point')
T number<T extends num>(T value) => value;
@pragma('vm:entry-point')
({A first, B second}) dependent<A extends num, B extends A>(A a, B b) =>
    (first: a, second: b);
@pragma('vm:entry-point')
({A first, B second}) forward<A extends B, B extends num>(A a, B b) =>
    (first: a, second: b);
@pragma('vm:entry-point')
T comparable<T extends Comparable<T>>(T value) => value;
@pragma('vm:entry-point')
List<T> named<T>(T value, {T? other, String label = 'kept'}) => [value, ?other];
@pragma('vm:entry-point')
T callback<T>(T value, T Function(T) action) => action(value);
@pragma('vm:entry-point')
Future<List<T>> future<T>(T value) async => [value];
@pragma('vm:entry-point')
Stream<T> stream<T>(T value) async* {
  yield value;
}

@pragma('vm:entry-point')
Box<T> makeBox<T>(T value) => Box(value);

class Box<T> {
  Box(this.value);
  final T value;
}

class RuntimeTypeOverride {
  int reads = 0;
  @override
  Type get runtimeType {
    reads++;
    return String;
  }
}

class Money {
  const Money(this.amount);
  final int amount;
}

class Parent {
  @pragma('vm:entry-point')
  List<T> wrap<T>(T value) => [value];
  @pragma('vm:entry-point')
  Future<List<T>> later<T>(T value) async => wrap<T>(value);
}

class Child extends Parent {
  @override
  List<T> wrap<T>(T value) => [...super.wrap<T>(value), value];
}

class GenericParent<X> {
  @pragma('vm:entry-point')
  List<Map<X, T>> pair<T>(X key, T value) => [
    <X, T>{key: value},
  ];
}

class GenericChild<X> extends GenericParent<X> {
  @override
  List<Map<X, T>> pair<T>(X key, T value) => super.pair<T>(key, value);
}

class Left implements Comparable<Right> {
  @override
  int compareTo(Right other) => 0;
}

class Right implements Comparable<Left> {
  @override
  int compareTo(Left other) => 0;
}

@pragma('vm:entry-point')
String mutual<A extends Comparable<B>, B extends Comparable<A>>() => '$A/$B';

Future<Map<String, Object?>> runChecks() async {
  final passed = <String>[];
  void check(String name, bool value) {
    if (!value) throw StateError(name);
    passed.add(name);
  }

  void rejects(String name, Object? Function() action) {
    try {
      action();
    } catch (error) {
      if (error is TypeError ||
          error is ArgumentError ||
          error is NoSuchMethodError) {
        passed.add(name);
        return;
      }
      rethrow;
    }
    throw StateError('Expected rejection: $name');
  }

  final origin = <Map<String, List<Money?>>>{};
  final originT = typeArguments(origin.runtimeType).single;
  check(
    'native-origin unknown nested argument',
    originT == Map<String, List<Money?>>,
  );
  final d = describe(originT);
  check(
    'recursive real type graph',
    d['declaration'] == 'Map' &&
        ((d['arguments'] as List)[1]['arguments'][0]['nullable'] == true),
  );
  check(
    'same wrap produces real nested List',
    Function.apply(bind(wrap, [originT]), [
      <String, List<Money?>>{
        'm': [const Money(5), null],
      },
    ]) is List<Map<String, List<Money?>>>,
  );
  check(
    'same empty produces real nested List',
    Function.apply(bind(empty, [originT]), [])
        is List<Map<String, List<Money?>>>,
  );
  check(
    'nominal object identity',
    identical(
      Function.apply(bind(echo, [Money]), [const Money(2)]),
      const Money(2),
    ),
  );
  check(
    'explicit num not inferred int',
    Function.apply(bind(wrap, [num]), [1]) is List<num> &&
        Function.apply(bind(wrap, [num]), [1]) is! List<int>,
  );
  check(
    'nullable type argument',
    Function.apply(bind(wrap, [typeOf<Money?>()]), [null]) is List<Money?>,
  );
  rejects(
    'nonnullable null',
    () => Function.apply(bind(wrap, [Money]), [null]),
  );
  rejects('wrong value type', () => Function.apply(bind(wrap, [Money]), [1]));
  check('generic bound valid', Function.apply(bind(number, [int]), [2]) == 2);
  rejects('generic bound invalid', () => bind(number, [String]));
  check(
    'dependent bound valid',
    Function.apply(bind(dependent, [num, int]), [1.5, 2])
        is ({num first, int second}),
  );
  rejects('dependent bound invalid', () => bind(dependent, [int, double]));
  check(
    'forward bound valid',
    Function.apply(bind(forward, [int, num]), [1, 2.5])
        is ({int first, num second}),
  );
  check(
    'recursive bound valid',
    Function.apply(bind(comparable, [String]), ['x']) == 'x',
  );
  check(
    'mutually recursive bound valid',
    Function.apply(bind(mutual, [Left, Right]), []) == 'Left/Right',
  );
  check(
    'named args and omitted defaults',
    (Function.apply(
          bind(named, [String]),
          ['x'],
          {#other: 'y'},
        ) as List<String>).join() ==
        'xy',
  );
  check(
    'real typed callback',
    Function.apply(bind(callback, [String]), ['x', (String v) => '$v!']) ==
        'x!',
  );
  check(
    'function type argument',
    Function.apply(bind(wrap, [typeOf<int Function(String)>()]), [
      (String v) => v.length,
    ]) is List<int Function(String)>,
  );
  check(
    'record type argument',
    Function.apply(bind(wrap, [typeOf<({Money value, int count})>()]), [
      (value: const Money(3), count: 1),
    ]) is List<({Money value, int count})>,
  );
  check(
    'generic object construction',
    Function.apply(bind(makeBox, [originT]), [<String, List<Money?>>{}])
        is Box<Map<String, List<Money?>>>,
  );
  check(
    'virtual receiver and super',
    (Function.apply(bind(Child().wrap, [String]), [
          'x',
        ]) as List<String>).length ==
        2,
  );
  check(
    'Future real selected T',
    await Function.apply(bind(future, [originT]), [<String, List<Money?>>{}])
        is List<Map<String, List<Money?>>>,
  );
  check(
    'Stream real selected T',
    Function.apply(bind(stream, [originT]), [<String, List<Money?>>{}])
        is Stream<Map<String, List<Money?>>>,
  );
  rejects('wrong type argument count', () => bind(wrap, [String, int]));
  rejects('non generic function rejected', () => bind((int x) => x, [int]));
  rejects(
    'already instantiated closure rejected',
    () => bind(bind(wrap, [String]), [int]),
  );
  rejects(
    'missing required argument',
    () => Function.apply(bind(wrap, [String]), []),
  );
  rejects(
    'extra argument',
    () => Function.apply(bind(wrap, [String]), ['a', 'b']),
  );
  final owner = GenericChild<String>();
  check(
    'owner and method generic scopes preserved',
    Function.apply(bind(owner.pair, [int]), ['key', 3])
        is List<Map<String, int>>,
  );
  Type composed = Money;
  for (var depth = 0; depth < 16; depth++) {
    composed = Function.apply(
      bind(<T>() => typeOf<List<T>>(), [composed]),
      [],
    ) as Type;
  }
  final fresh = Function.apply(bind(empty, [composed]), [])!;
  check(
    'runtime composed depth-16 type without a closed literal',
    typeArguments(fresh.runtimeType).single == composed,
  );
  return {'passed': passed.length, 'cases': passed, 'origin': d};
}

void main() {
  setUp(() => runtime = FlaxEngine.createRuntime());
  tearDown(() => runtime.dispose());
  testWidgets('nested generic function bounds terminate and preserve Never', (
    _,
  ) async {
    expect(
      recursiveFunctionType<String>(),
      typeOf<T Function<T extends Comparable<T>>(T)>(),
    );
    expect(
      capturedFunctionType<String>(),
      typeOf<T Function<T extends String>(T)>(),
    );
    expect(
      capturedFunctionType<Never>(),
      typeOf<Never Function<T extends Never>(Never)>(),
    );
  });
  testWidgets('every Core type template has a valid VM argument layout', (
    _,
  ) async {
    for (final template in flutterBindings.dartTypes) {
      expect(parts(template.type), hasLength(7), reason: template.id);
    }
  });
  testWidgets('real generic instantiation, bounds and nested types', (
    tester,
  ) async {
    final result = await tester.runAsync(runChecks);
    expect(result!['passed'], 31);
  });
  testWidgets('structural types and instantiated superclass arguments', (
    _,
  ) async {
    final misleading = RuntimeTypeOverride();
    expect(runtime.dartInstanceType(misleading), RuntimeTypeOverride);
    expect(misleading.reads, 0);
    for (final (type, name) in [
      (typeOf<dynamic>(), 'dynamic'),
      (typeOf<void>(), 'void'),
      (typeOf<Never>(), 'Never'),
      (typeOf<Null>(), 'Null'),
    ]) {
      final info = parts(type);
      expect(info[2], 'dart:core');
      expect(info[3], name);
      expect(info[4], isEmpty);
      expect(info[6], isEmpty);
    }
    final function = parts(
      typeOf<int Function(String, {required bool flag})>(),
    );
    expect(function[3], 'Function');
    expect(function[4], [String, bool, int]);
    expect(function[5], [
      1,
      1,
      ['flag'],
      [true],
    ]);
    final record = parts(typeOf<(String, {Money value})>());
    expect(record[3], 'Record');
    expect(record[4], [String, Money]);
    expect(record[5], ['value']);
    expect(
      parts(runtime.nullableDartType(typeOf<int Function(String)>()))[1],
      isTrue,
    );
    expect(parts(runtime.nullableDartType(typeOf<(int, String)>()))[1], isTrue);
    final parent = (parts(typeOf<GenericChild<String>>())[6] as List)
        .singleWhere((t) => parts(t as Type)[3] == 'GenericParent');
    expect(typeArguments(parent as Type), [String]);
  });

  testWidgets('shared Record construction validates layouts and field types', (
    _,
  ) async {
    final target = typeOf<({String cargo, int quantity})>();
    final value = runtime.newDartRecord(target, const [], [
      'box',
      3,
    ]) as ({String cargo, int quantity});
    expect(value.cargo, 'box');
    expect(value.quantity, 3);
    expect(runtime.dartRecordFields(value), ['box', 3]);
    expect(runtime.newDartRecord(typeOf<()>(), const [], const []), ());
    final nullable =
        runtime.newDartRecord(typeOf<(int?,)>(), const [], [null]) as (int?,);
    expect(nullable.$1, isNull);
    for (final fields in [
      <Object?>['box'],
      ['box', 3.5],
      [null, 3],
    ]) {
      expect(
        () => runtime.newDartRecord(target, const [], fields),
        throwsArgumentError,
      );
    }
    for (final names in [
      <String>['b', 'a'],
      ['a', 'a'],
      ['_private'],
      ['bad-name'],
      ['hashCode'],
      ['if'],
    ]) {
      expect(
        () => runtime.newDartRecord(null, names, [for (final _ in names) 1]),
        throwsArgumentError,
      );
    }
    for (var count = 1; count <= 20; count++) {
      final names = [for (var i = 0; i < count; i++) 'field$i']..sort();
      final fields = [for (var i = 0; i < count; i++) i];
      final value = runtime.newDartRecord(null, names, fields);
      expect(runtime.dartRecordFields(value), fields);
      expect(parts(runtime.dartInstanceType(value))[5], names);
      expect(
        value.hashCode,
        runtime.newDartRecord(null, names, fields).hashCode,
      );
    }
  });
}
