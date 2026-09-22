import 'dart:async';

import 'package:flutter/foundation.dart'
    show ValueChanged, ValueGetter, mustCallSuper;

class Box<T> {
  Box(T? value) : _value = value;
  final T? _value;
  int reads = 0;
  T? get value {
    reads++;
    return _value;
  }
}

class VoidBox extends Box<void> {
  VoidBox() : super(null);
  void get explicitValue {
    reads++;
  }

  void get failure {
    reads++;
    throw StateError('getter failure');
  }
}

class IndirectVoidBox extends VoidBox {}

class CoreValueConsumer {
  CoreValueConsumer(this.date, this.uri, this.buffer);
  final DateTime date;
  final Uri uri;
  final StringBuffer buffer;
}

typedef CodegenOnChanged = void Function(int value);
typedef CodegenNames = List<String>;
typedef CodegenAttributes = Map<String, String>;
typedef CodegenTransform = CodegenNames Function(CodegenNames values);
typedef CodegenMapper<T> = T Function(T value);
typedef CodegenItems<T> = List<T>;
typedef CodegenGenericMapper = T Function<T>(T value);
typedef CodegenConverter<T> = T Function<U extends T>(U value);
typedef CodegenAsyncMapper<T> = Future<T> Function(T value);
typedef CodegenAsyncGenericMapper = Future<T> Function<T>(T value);
typedef CodegenNullableMapper = T? Function<T extends num>(T? value);
typedef NestedAsyncMapper<T> = Future<FutureOr<T>> Function(T value);

T _aliasIdentity<T>(T value) => value;
Future<T> _aliasAsyncIdentity<T>(T value) async => value;

class CodegenGenericAliasConsumer {
  final CodegenItems<CodegenGenericMapper> callbacks = [_aliasIdentity];

  CodegenGenericMapper get identity => _aliasIdentity;
  CodegenAsyncGenericMapper get asyncIdentity => _aliasAsyncIdentity;
  CodegenMapper<int> get increment =>
      (value) => value + 1;
  CodegenNullableMapper get nullableIdentity =>
      <T extends num>(T? value) => value;

  int map(CodegenMapper<int> callback, int value) => callback(value);
  int generic(CodegenGenericMapper callback, int value) => callback<int>(value);
  double genericDouble(CodegenGenericMapper callback, double value) =>
      callback<double>(value);
  int? genericNullable(CodegenGenericMapper callback, int? value) =>
      callback<int?>(value);
  bool broadNumberIsDouble(CodegenGenericMapper callback) =>
      callback<Object?>(1) is double;
  int inline(T Function<T>(T value) callback, int value) =>
      callback<int>(value);
  Token genericToken(CodegenGenericMapper callback, Token value) =>
      callback<Token>(value);
  num convert(CodegenConverter<num> callback, int value) =>
      callback<int>(value);
  CodegenItems<int> collection(
    CodegenMapper<CodegenItems<int>> callback,
    CodegenItems<int> values,
  ) => callback(values);
  int stored(int index, int value) => callbacks[index]<int>(value);
  Future<int> later(CodegenAsyncMapper<int> callback, int value) =>
      callback(value);
  Future<int> genericLater(CodegenAsyncGenericMapper callback, int value) =>
      callback<int>(value);
  Future<int> inlineLater(Future<T> Function<T>(T value) callback, int value) =>
      callback<int>(value);
  Future<int?> nullableLater(CodegenAsyncGenericMapper callback, int? value) =>
      callback<int?>(value);
  num? nullable(CodegenNullableMapper callback) => callback<int>(null);
  double? nullableDouble(CodegenNullableMapper callback, double? value) =>
      callback<double>(value);
  int foundation(ValueChanged<int> changed, ValueGetter<int> getter) {
    final value = getter();
    changed(value);
    return value;
  }
}

class CodegenAliasConsumer {
  CodegenAliasConsumer(this.onChanged, this.names, this.attributes);

  final CodegenOnChanged onChanged;
  final CodegenNames names;
  final CodegenAttributes attributes;

  void notify(int value) => onChanged(value);
  CodegenNames transform(CodegenTransform callback) => callback(names);
}

// Independent names exercise reference, collection, generic and proxy generation.
abstract class Token {
  factory Token(int value) = _Token;
  int get value;
}

class _Token implements Token {
  _Token(this.value);
  @override
  final int value;
  @override
  bool operator ==(Object other) => other is Token && other.value == value;
  @override
  int get hashCode => value.hashCode;
}

class RecordInterop {
  RecordInterop();

  (int, String) echo((int, String) value) => value;

  ({int id, String name}) echoNamed(({int id, String name}) value) => value;

  (int, {bool enabled, String name}) echoMixed(
    (int, {bool enabled, String name}) value,
  ) => value;

  (int?, String?)? echoNullable((int?, String?)? value) => value;

  ((int, String), {Token token}) nested(((int, String), {Token token}) value) =>
      value;

  bool sameToken((Token, int) value, Token token) => identical(value.$1, token);

  List<(int, String)> echoList(List<(int, String)> values) => values;

  Future<(int, String)> later((int, String) value) async => value;

  (int, String) apply(
    (int, String) Function((int, String)) callback,
    (int, String) value,
  ) => callback(value);
}

class Store<T extends Token> {
  Store(this.value);
  T value;
  List<T> items = [];
  Map<String, List<T>> groups = {};
  T echo(T input) => input;
  U select<U extends Token>(U input) => input;
}

class Collections {
  Collections() {
    lastNumbers = WeakReference(numbers);
  }
  static WeakReference<List<int>>? lastNumbers;
  List<int> numbers = [1, 2];
  Map<String, int?> counts = {'empty': null};
  Object get broadNumbers => numbers;
  Object get broadCounts => counts;
  List<int>? get nullableNumbers => numbers;
  List<Object?> graph = [];
  List<int> get fixed => List<int>.filled(2, 0);
  List<int> get frozen => List<int>.unmodifiable(numbers);
  Map<Token, String> labels = {};
  Set<int> unique = {1, 2};
  Object get broadUnique => unique;
  Iterable<int> get uniqueIterable => unique;
  Map<Iterable<int>, Set<int>> get iterableSetConflict => {unique: unique};
  Map<Set<int>, Iterable<int>> get setIterableConflict => {unique: unique};
  Map<List<int>, Iterable<int>> get compatibleListIterable => {
    numbers: numbers,
  };
  Map<Iterable<Object?>, Set<Object?>> get cyclicIterableSetConflict {
    final values = <Object?>{};
    values.add(values);
    return {values: values};
  }

  Map<Set<Object?>, Iterable<Object?>> get cyclicSetIterableConflict {
    final values = <Object?>{};
    values.add(values);
    return {values: values};
  }

  Set<int> get frozenSet => Set.unmodifiable(unique);
  Iterable<int> get iterable => unique.where((value) => value > 0);
  List<int> accept(List<int> values) => values;
  List<int> defaults({List<int> values = const [7, 8]}) => values;
  Map<String, List<int>> nested(Map<String, List<int>> values) => values;
  Iterable<int> acceptIterable(Iterable<int> values) => values;
  Set<int> acceptSet(Set<int> values) => values;
}

abstract class DeferredProperty<T> {
  T resolve(Set<Mode> states);

  static DeferredProperty<T> resolveWith<T>(T Function(Set<Mode>) callback) =>
      _ResolvedDeferredProperty<T>(callback);
}

class _ResolvedDeferredProperty<T> implements DeferredProperty<T> {
  _ResolvedDeferredProperty(this.callback);
  final T Function(Set<Mode>) callback;

  @override
  T resolve(Set<Mode> states) => callback(states);
}

class DeferredConsumer {
  DeferredConsumer({required this.token, required this.number});
  final DeferredProperty<Token?> token;
  final DeferredProperty<num?> number;
}

abstract class SharedDeferredProperty<T> {
  static final Map<Type, Object> _instances = {};

  static SharedDeferredProperty<T> resolveWith<T>(T Function() callback) =>
      _instances.putIfAbsent(T, () => _SharedDeferredProperty<T>(callback))
          as SharedDeferredProperty<T>;

  static void reset() => _instances.clear();

  T resolve();
}

class _SharedDeferredProperty<T> implements SharedDeferredProperty<T> {
  _SharedDeferredProperty(this.callback);
  final T Function() callback;

  @override
  T resolve() => callback();
}

class SharedDeferredConsumer {
  SharedDeferredConsumer(this.value);
  final SharedDeferredProperty<Token?> value;
}

abstract class Evaluator {
  Evaluator(int initial) {
    initialResult = evaluate(initial);
  }
  late final int initialResult;
  int evaluate(int value);
  int twice(int value) => evaluate(value) * 2;
}

abstract class ConstructorSuperEvaluator {
  ConstructorSuperEvaluator(int initial) {
    initialResult = evaluate(initial);
  }

  late final int initialResult;

  int evaluate(int value) => value * 2;
}

class EvaluatorConsumer {
  int run(Evaluator evaluator, int value) => evaluator.twice(value);

  Evaluator identity(Evaluator evaluator) => evaluator;
}

abstract class RequiredSuper {
  RequiredSuper();

  @mustCallSuper
  void refresh() {}
}

class RequiredSuperConsumer {
  int run(RequiredSuper value) {
    value.refresh();
    return 1;
  }
}

abstract class AsyncRequiredSuper {
  AsyncRequiredSuper();

  @mustCallSuper
  Future<int> load(int value) async => value * 2;

  @mustCallSuper
  FutureOr<int> normalize(int value) => value + 1;
}

class AsyncRequiredSuperConsumer {
  Future<int> load(AsyncRequiredSuper value, int input) => value.load(input);

  Future<int> normalize(AsyncRequiredSuper value, int input) async =>
      await value.normalize(input);
}

abstract interface class Selector {
  Token choose(Token value);
}

abstract final class Unimplementable {
  int read();
}

abstract class AsyncContract {
  Future<int> read();
}

class AsyncCallbacks {
  AsyncCallbacks(this.transform, {this.optional, this.nestedTransform});
  final Future<int> Function(int) transform;
  final Future<int>? Function()? optional;
  final Future<Future<int>> Function()? nestedTransform;
  final List<Future<int> Function(int)> callbacks = [];
  final Map<String, Future<int> Function(int)> mapping = {};

  Future<int> apply(int value) => transform(value);
  Future<int>? applyOptional() => optional?.call();
  Future<int> applyNested() => nestedTransform!().then((inner) => inner);
  Future<int> Function(int) echo(Future<int> Function(int) callback) =>
      callback;
  Future<void> runVoid(Future<void> Function() callback) => callback();
  Future<int?> runNullable(Future<int?> Function() callback) => callback();
  Future<Mode> runMode(Future<Mode> Function(Mode) callback, Mode value) =>
      callback(value);
  Future<int Function()> runCallback(
    Future<int Function()> Function() callback,
  ) => callback();
  Future<Future<int> Function()> runAsyncCallback(
    Future<Future<int> Function()> Function() callback,
  ) => callback();
  Future<Token?> runToken(
    Future<Token?> Function(Token) callback,
    Token value,
  ) => callback(value);
  Future<List<int>> runList(
    Future<List<int>> Function(List<int>) callback,
    List<int> value,
  ) => callback(value);
  Future<Object?> runData(
    Future<Object?> Function(Object?) callback,
    Object? value,
  ) => callback(value);

  Future<Future<int>> nestedValue(int value) =>
      Future<Future<int>>.syncValue(Future<int>.value(value));

  Future<FutureOr<int>> nestedFutureOrValue(int value) =>
      Future<FutureOr<int>>.syncValue(value);

  FutureOr<Future<int>> futureOrNestedValue(int value) =>
      Future<Future<int>>.syncValue(Future<int>.value(value));

  Future<int> runNested(Future<Future<int>> Function() callback) =>
      callback().then((inner) => inner);

  Future<int> runNestedFutureOr(Future<FutureOr<int>> Function() callback) =>
      callback().then((value) => value);

  bool futureOrNestedUsesFutureBranch(
    FutureOr<Future<int>> Function() callback,
  ) => callback() is Future<Future<int>>;

  Future<List<int>> runNestedList(
    Future<List<Future<int>>> Function() callback,
  ) async => Future.wait(await callback());

  Future<Map<String, int>> runNestedMap(
    Future<Map<String, FutureOr<int>>> Function() callback,
  ) async {
    final values = await callback();
    final result = <String, int>{};
    for (final entry in values.entries) {
      result[entry.key] = await Future<int>.value(entry.value);
    }
    return result;
  }

  Future<(int, {String value})> runNestedRecord(
    Future<(Future<int>, {FutureOr<String> value})> Function() callback,
  ) async {
    final value = await callback();
    return (await value.$1, value: await Future<String>.value(value.value));
  }

  Future<int?> runNullableNested(Future<Future<int?>?>? Function() callback) {
    final outer = callback();
    if (outer == null) return Future<int?>.value();
    return outer.then((inner) => inner ?? Future<int?>.value());
  }

  Future<int> runNestedAlias(NestedAsyncMapper<int> callback, int value) =>
      callback(value).then((next) => next);
}

class UnsupportedAsyncCallbacks {
  void futureParameter(void Function(Future<int>) callback) {}
  void futureCollection(void Function(List<Future<int>>) callback) {}
  void nested(Future<Future<int>> Function() callback) {}
  void nestedList(Future<List<Future<int>>> Function() callback) {}
  void nestedMap(Future<Map<String, Future<int>>> Function() callback) {}
  void deeplyNested(
    Future<List<Map<String, List<Future<int>>>>> Function() callback,
  ) {}
  void futureOr(FutureOr<int> Function() callback) {}
}

abstract class GenericContract {
  T read<T extends Token>(T input);
  U choose<T extends Token, U extends T>(T first, U second);
  T numeric<T extends num>(T input);
  Future<T> later<T extends Token>(T input);
  int optional([int value = 5]);
  String named(int value, {required String label, int? count});
}

T _genericIdentity<T extends Token>(T value) => value;

class GenericFunctionCollections {
  final List<T Function<T extends Token>(T)> callbacks = [_genericIdentity];
  final Map<String, T Function<T extends Token>(T)> mapping = {
    'identity': _genericIdentity,
  };

  List<T Function<T extends Token>(T)> echo(
    List<T Function<T extends Token>(T)> values,
  ) => values;
}

class HiddenGenericBound {}

abstract class UnboundGenericContract {
  T unbound<T extends HiddenGenericBound>(T input);
}

abstract class RecursiveGenericContract {
  T recursive<T extends Comparable<T>>(T input);
}

abstract class AccessorContract {
  int get value;
}

class Functions {
  Functions(this.transform);
  Functions.fail(this.transform) {
    retained = transform;
    throw StateError('failed construction');
  }
  static Token Function(Token)? retained;
  static void retainAndThrow(Token Function(Token) callback) {
    retained = callback;
    throw StateError('failed registration');
  }

  static Token callRetained(Token value) => retained!(value);
  static void clearRetained() => retained = null;
  Token Function(Token)? transform;
  void clear() => transform = null;
  Token apply(Token value) => transform!(value);
}

class Derived<T extends Token> extends Store<T> {
  Derived(super.value);
}

abstract class ComparableToken<T> {
  int compare(T other);
}

class ComparableLeaf implements ComparableToken<ComparableLeaf> {
  ComparableLeaf();
  @override
  int compare(ComparableLeaf other) => 0;
}

class Bounded<T extends ComparableToken<T>> {
  Bounded(this.value);
  T value;
}

enum Mode { first, second }

class Base {
  Base();
  Base.named(int initial) {
    inherited = initial;
  }
  static const tag = 'base';
  static String identify() => tag;
  int inherited = 42;
  int ping({int first = 1, int second = 2}) => first + second;
  final _listeners = <void Function()>[];
  int get listeners => _listeners.length;
  bool get finished => _finished;
  bool _finished = false;
  void watch(void Function() callback) => _listeners.add(callback);
  void unwatch(void Function() callback) => _listeners.remove(callback);
  void notify() {
    for (final callback in List.of(_listeners)) {
      callback();
    }
  }

  void finish() {
    _finished = true;
    _listeners.clear();
  }
}

class Child extends Base {
  Child();
  @override
  int ping({int first = 10, int second = 20}) => first + second;
}

// A private fixture stays unbound when the public Core surface expands.
class _UnboundValue {}

class Probe {
  Probe({this.data});
  final Object? data;
  final modes = <Mode>[Mode.first];
  final mapping = <String, Mode>{'a': Mode.first};
  Mode mode = Mode.first;
  Mode? nullableMode;
  static const Mode defaultMode = Mode.first;
  Object? echo(Object? value) => value;
  Object nonNull(Object value) => value;
  Object defaultValue({Object value = Mode.first}) => value;
  Object unsafeNumber() => 9007199254740992;
  Object unboundValue() => _UnboundValue();
  dynamic echoDynamic(dynamic value) => value;
  Object? copy(Object? value) => value;
  static Object? copyStatic(Object? value) => value;
  Future<Object?> copyLater(Object? value) async => value;
  Object? copyCallback(Object? Function(Object?) callback, Object? value) =>
      callback(value);
  Mode echoMode(Mode value) => value;
  Future<Mode> laterMode() async => mode;
  Future<Mode?> laterNull() async => nullableMode;
  bool inspectMode(bool Function(Mode, Mode?) callback) =>
      callback(mode, nullableMode);
  int callReturned(List<int Function()> Function() produce) =>
      produce().single();
  int callMap(Map<String, int Function()> Function() produce) =>
      produce()['a']!();
  List<Map<String, int Function()>> _saved = [];
  static int Function()? retained;
  void save(List<Map<String, int Function()>> Function() produce) {
    _saved = produce();
    retained = _saved.first['a'];
  }

  int invokeSaved() => _saved.first['a']!();
  void clearSaved() {
    _saved = [];
    retained = null;
  }
}

class DeferredValues {
  DeferredValues();
  final Object _streamFailure = StateError('stream boom');
  final StackTrace _streamFailureStack = StackTrace.current;
  Future<int>? get absent => null;
  Future<int>? get present => Future.value(7);
  static Future<int>? get staticAbsent => null;
  Future<int>? missing() => null;
  Future<int?> get nullableResult => Future.value(null);
  Future<void> get nothing => Future.value();
  Future<int> get failure => Future.error(StateError('deferred failure'));
  Stream<int> get ticks => Stream<int>.fromIterable(const [1, 2, 3]);
  Stream<String> get labels => Stream<String>.fromIterable(const ['a', 'b']);
  Stream<int> get failingTicks =>
      Stream<int>.error(_streamFailure, _streamFailureStack);
  Future<List<String>> collectLabels(Stream<String> values) => values.toList();
  Future<int> awaitInt(Future<int> value) => value;
  Future<int> awaitIntOr(FutureOr<int> value) => Future<int>.value(value);
  Future<List<int>> awaitInts(List<Future<int>> values) => Future.wait(values);
  bool matchesFailure(Object error, Object stackTrace) =>
      identical(error, _streamFailure) &&
      identical(stackTrace, _streamFailureStack);
  final List<Future<int>?> futures = [null, Future.value(9)];
  final List<List<int> Function(List<int>)> transforms = [
    (v) => [...v, 5],
  ];
  List<List<int Function()>> get sharedCallbacks => [callbacks, callbacks];
  List<Object?> get untypedCallbacks => callbacks;
  Map<String, List<int Function()>> get groupedCallbacks => {
    'first': callbacks,
    'second': callbacks,
  };
  final Map<String, int Function()> mapping = {'a': () => 21};
  List<List<int> Function(List<int>)> passTransforms(
    List<List<int> Function(List<int>)> values,
  ) => values;
  bool same(int Function() callback) => identical(callback, callbacks.first);
  List<Token Function(Token)> get tokens => [(value) => value];
  List<Mode Function(Mode)> get modes => [(value) => value];
  static void _notify() {
    notifications++;
  }

  final void Function() listener = _notify;
  static int notifications = 0;
  List<void Function()> get listeners => [listener];
  static int _toInt(num value) => value.toInt();
  final int Function(num) _numeric = _toInt;
  int Function(int) get integerView => _numeric;
  int Function(double) get doubleView => _numeric;
  int Function() get direct => callbacks.first;
  static int Function() get staticFunction =>
      () => 12;
  Future<int Function()> get laterFunction => Future.value(callbacks.first);

  final List<int Function()> callbacks = [() => 42];
  List<int Function()> echo(List<int Function()> values) => values;
}

class UnsupportedFunctionResults {
  int Function([int value]) get optional =>
      ([int value = 7]) => value;
  int Function([int first, int second]) get optionalPair =>
      ([int first = 7, int second = 9]) => first * 10 + second;
  String Function(int value, {required String label, int? count}) get named =>
      (int value, {required String label, int? count}) =>
          '$value:$label:${count ?? -1}';
  T Function<T extends Token>(T) get generic =>
      <T extends Token>(T value) => value;
  Future<T> Function<T extends Token>(T) get genericAsync =>
      <T extends Token>(T value) async => value;
  Future<int> Function() get asynchronous =>
      () async => 1;
}

abstract class PropertyParent<T extends Token> {
  PropertyParent(T initial) {
    value = initial;
    observed = value;
  }
  late final T observed;
  T get value;
  set value(T next);
  int get inherited;
}

abstract class PropertyChild extends PropertyParent<Token> {
  PropertyChild(super.initial);
  @override
  int get inherited => 47;
}

abstract interface class PropertyPort {
  int get readOnly;
  set writeOnly(int value);
  Token? get token;
  set token(Token? value);
  Mode get mode;
  set mode(Mode value);
  List<Token> get items;
  set items(List<Token> value);
  Map<String, List<Token>> get groups;
  set groups(Map<String, List<Token>> value);
  Token Function(Token) get transform;
  set transform(Token Function(Token) value);
}

abstract interface class FieldContract {
  int value = 0;
}

abstract class FailingProperty {
  FailingProperty() {
    value;
    throw StateError('parent construction failed');
  }
  int get value;
}

abstract class FutureProperty {
  Future<int> get value;
}

abstract class PrivateProperty {
  // Deliberately invalid public proxy contract.
  // ignore: unused_element
  int get _value;
}
