import 'dart:async';

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
  AsyncCallbacks(this.transform, {this.optional});
  final Future<int> Function(int) transform;
  final Future<int>? Function()? optional;
  final List<Future<int> Function(int)> callbacks = [];
  final Map<String, Future<int> Function(int)> mapping = {};

  Future<int> apply(int value) => transform(value);
  Future<int>? applyOptional() => optional?.call();
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

abstract interface class ScopedSink<T> {
  void add(T value);
}

class ScopedTransformer<T> {
  const ScopedTransformer.fromHandler(
    void Function(T value, ScopedSink<T> sink) handler,
  );
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
  Object unboundValue() => DateTime(2000);
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
  Future<int>? get absent => null;
  Future<int>? get present => Future.value(7);
  static Future<int>? get staticAbsent => null;
  Future<int>? missing() => null;
  Future<int?> get nullableResult => Future.value(null);
  Future<void> get nothing => Future.value();
  Future<int> get failure => Future.error(StateError('deferred failure'));
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
