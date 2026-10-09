import 'dart:async';

import 'package:flutter/widgets.dart';
export 'package:flutter/widgets.dart'
    show Widget, BuildContext, StatelessWidget, Text, PreferredSizeWidget;

typedef WidgetRecord = ({Widget child, List<Widget?> siblings});
typedef WidgetIterableRecord = (
  Iterable<Widget>, {
  List<Iterable<Widget?>> groups,
  Map<String, Set<Iterable<Widget>>> keyed,
  Iterable<Iterable<Widget>?> nested,
  Iterable<FutureOr<Iterable<Widget>>?> pending,
  Future<Iterable<Widget>> later,
});

class WidgetValues {
  WidgetValues();
  late Future<List<Widget>> Function() load;
  late List<Widget?>? Function() nullable;
  late WidgetRecord Function() record;
  late Set<Widget> Function() set;
  late Map<String, Widget?> Function() map;
  late FutureOr<WidgetRecord?> Function() futureOr;
  late Stream<List<Widget?>> Function() stream;
  late Iterable<Widget> Function() iterable;
  late FutureOr<Iterable<Widget>> Function(BuildContext, String) suggestions;
  late Stream<Iterable<Widget?>> Function() iterableStream;
  late Stream<WidgetIterableRecord> Function() iterableRecords;
  late WidgetIterableRecord nativeIterableRecord;

  Iterable<Widget> Function() keepIterable(
    Iterable<Widget> Function() callback,
  ) => iterable = callback;
  Iterable<Widget?>? Function() keepNullableIterable(
    Iterable<Widget?>? Function() callback,
  ) =>
      () => callback();
  ({Iterable<Widget?> children}) Function() keepIterableRecord(
    ({Iterable<Widget?> children}) Function() callback,
  ) =>
      () => callback();
  Iterable<Text?> Function() keepConcreteIterable(
    Iterable<Text?> Function() callback,
  ) =>
      () => callback();
  Iterable<PreferredSizeWidget?> Function() keepInterfaceIterable(
    Iterable<PreferredSizeWidget?> Function() callback,
  ) =>
      () => callback();
  FutureOr<Iterable<Widget>> Function(BuildContext, String) keepSuggestions(
    FutureOr<Iterable<Widget>> Function(BuildContext, String) callback,
  ) => suggestions = callback;
  Stream<Iterable<Widget?>> Function() keepIterableStream(
    Stream<Iterable<Widget?>> Function() callback,
  ) => iterableStream = callback;
  Stream<WidgetIterableRecord> Function() keepIterableRecords(
    Stream<WidgetIterableRecord> Function() callback,
  ) => iterableRecords = callback;
  Widget firstFromIterable(
    Widget Function(Iterable<Widget>) callback, {
    bool lazy = false,
    bool useSet = false,
  }) => callback(
    lazy
        ? nativeLazy
        : useSet
        ? nativeSet
        : nativeList,
  );

  List<Widget> get nativeList => [const Text('native iterable')];
  Set<Widget> get nativeSet => {const Text('native iterable')};
  Stream<Iterable<Widget?>> get nativeLazyStream => Stream.value(nativeLazy);
  Stream<WidgetIterableRecord> get nativeIterableRecords =>
      Stream.value(nativeIterableRecord);
  int lazyIterations = 0;
  Iterable<Widget> get nativeLazy sync* {
    lazyIterations++;
    yield const Text('native iterable');
  }

  Future<List<Widget>> Function() keepFuture(
    Future<List<Widget>> Function() callback,
  ) {
    load = callback;
    return () => callback();
  }

  List<Widget?>? Function() keepNullable(List<Widget?>? Function() callback) =>
      nullable = callback;
  WidgetRecord Function() keepRecord(WidgetRecord Function() callback) =>
      record = callback;
  Set<Widget> Function() keepSet(Set<Widget> Function() callback) {
    set = callback;
    return () => callback();
  }

  Map<String, Widget?> Function() keepMap(
    Map<String, Widget?> Function() callback,
  ) {
    map = callback;
    return () => callback();
  }

  FutureOr<WidgetRecord?> Function() keepFutureOr(
    FutureOr<WidgetRecord?> Function() callback,
  ) {
    futureOr = callback;
    return () => callback();
  }

  Stream<List<Widget?>> Function() keepStream(
    Stream<List<Widget?>> Function() callback,
  ) {
    stream = callback;
    return () => callback();
  }

  List<Widget?> retained = [];
  Map<String, List<Text?>> Function() keepNested(
    Map<String, List<Text?>> Function() callback,
  ) =>
      () => callback();
  List<Text?> Function() keepConcrete(List<Text?> Function() callback) =>
      () => callback();
  List<PreferredSizeWidget?> Function() keepInterface(
    List<PreferredSizeWidget?> Function() callback,
  ) =>
      () => callback();
  void save(List<Widget?> children, {bool fail = false}) {
    retained = children;
    if (fail) throw StateError('Saved before failure');
  }

  List<Widget?> get nativeNullable => [const Text('native'), null];

  BuildContext? context;
  BuildContext? get current => context;
  BuildContext? echo(BuildContext? value) => value;
  Future<BuildContext?> laterContext(BuildContext? value) async => value;
  static BuildContext? get absent => null;
  static BuildContext? echoStatic(BuildContext? value) => value;
}

BuildContext? echoWidgetContext(BuildContext? value) => value;

typedef ContextRecord = ({BuildContext context, List<BuildContext?> siblings});

class ContextCallbacks {
  ContextCallbacks();
  BuildContext Function()? retained;
  Future<BuildContext> Function()? pending;
  void keep(BuildContext Function() callback) => retained = callback;
  void keepPending(Future<BuildContext> Function() callback) =>
      pending = callback;

  BuildContext choose(BuildContext Function() callback) => callback();
  BuildContext? chooseMany(
    BuildContext? Function(List<BuildContext?>) callback,
    BuildContext context,
  ) => callback([context, null]);
  BuildContext? nullable(BuildContext? Function() callback) => callback();
  ContextRecord record(ContextRecord Function() callback) => callback();
  Future<BuildContext> future(Future<BuildContext> Function() callback) =>
      callback();
  Future<BuildContext?> nullableFuture(
    Future<BuildContext?> Function() callback,
  ) => callback();
  FutureOr<BuildContext> requiredFutureOr(
    FutureOr<BuildContext> Function() callback,
  ) => callback();
  FutureOr<BuildContext?> futureOr(
    FutureOr<BuildContext?> Function() callback,
  ) => callback();
  FutureOr<String?> nullableValue(FutureOr<String?> Function() callback) =>
      callback();
  Future<ContextRecord> futureRecord(
    Future<ContextRecord> Function() callback,
  ) => callback();
  BuildContext Function() returned(BuildContext context) =>
      () => context;
  Future<BuildContext> Function() returnedFuture(BuildContext context) =>
      () async => context;

  Stream<BuildContext?> stream(Stream<BuildContext?> Function() callback) =>
      callback();
}
