import 'dart:async';
import 'dart:collection';

import 'package:flutter/widgets.dart';
import 'package:flutter/foundation.dart'
    show internal, protected, visibleForTesting;

typedef LabelBuilder = String Function(int value);

enum AutoMode { compact, expanded }

const autoLimit = 4;
int autoMutable = 1;

String autoGreeting(String name) => 'Hello $name';

class AutoStore<T> {
  AutoStore(this.value);
  final T value;
}

class AutoStoreUser {
  AutoStoreUser(this.store);
  final AutoStore<String> store;
}

class ConflictedStore<T> {
  ConflictedStore(this.value);
  final T value;
}

class ConflictedStoreUser {
  ConflictedStoreUser(this.text, this.number);
  final ConflictedStore<String> text;
  final ConflictedStore<int> number;
}

abstract class AutoProperty<T> {
  T resolve();

  static AutoProperty<T> resolveWith<T>(T Function() callback) =>
      _AutoProperty<T>(callback);
}

class _AutoProperty<T> implements AutoProperty<T> {
  _AutoProperty(this.callback);

  final T Function() callback;

  @override
  T resolve() => callback();
}

class AutoPropertyConsumer {
  AutoPropertyConsumer(this.text, this.count);

  final AutoProperty<String> text;
  final AutoProperty<int> count;
}

abstract class AutoInvalidDeferred<T> {
  static AutoInvalidDeferred<T> create<T>(
    T Function() callback,
    Function unsupported,
  ) => throw UnimplementedError();
}

abstract class AutoPreferred implements Widget {
  double get extent;
}

class AutoTile extends StatelessWidget implements AutoPreferred {
  const AutoTile({super.key, this.extent = 24});

  @override
  final double extent;

  @override
  Widget build(BuildContext context) => SizedBox(height: extent);
}

class AutoList extends StatelessWidget {
  const AutoList({super.key, required this.itemBuilder});

  final Widget Function(BuildContext context, int index) itemBuilder;

  @override
  Widget build(BuildContext context) => itemBuilder(context, 0);
}

class AutoCallbackShapes extends StatelessWidget {
  const AutoCallbackShapes({
    super.key,
    required this.emptyBuilder,
    required this.indexBuilder,
    required this.nullableBuilder,
    required this.contextBuilder,
    required this.childrenBuilder,
    required this.indexChildrenBuilder,
  });

  final Widget Function() emptyBuilder;
  final Widget Function(int index) indexBuilder;
  final Widget? Function(bool enabled) nullableBuilder;
  final Widget Function(BuildContext context, int index) contextBuilder;
  final List<Widget> Function() childrenBuilder;
  final List<Widget> Function(int index) indexChildrenBuilder;

  @override
  Widget build(BuildContext context) => emptyBuilder();
}

class AutoObjectWidgetFactory {
  AutoObjectWidgetFactory(this.builder);

  final Widget Function(int index) builder;
}

class AutoDeferredWidgetCallbacks extends StatelessWidget {
  const AutoDeferredWidgetCallbacks({
    super.key,
    this.nullableList,
    this.nullableItems,
    this.iterableWidgets,
    this.setWidgets,
    this.mapWidgets,
    this.futureWidget,
    this.futureOrWidget,
    this.streamWidget,
    this.futureWidgets,
    this.streamWidgets,
  });

  final List<Widget>? Function()? nullableList;
  final List<Widget?> Function()? nullableItems;
  final Iterable<Widget> Function()? iterableWidgets;
  final Set<Widget> Function()? setWidgets;
  final Map<String, Widget> Function()? mapWidgets;
  final Future<Widget> Function()? futureWidget;
  final FutureOr<Widget> Function()? futureOrWidget;
  final Stream<Widget> Function()? streamWidget;
  final Future<List<Widget>> Function()? futureWidgets;
  final Stream<List<Widget>> Function()? streamWidgets;

  @override
  Widget build(BuildContext context) => const SizedBox();
}

class AutoSet extends SetBase<String> {
  final _values = <String>{};

  @override
  bool add(String value) => _values.add(value);
  @override
  bool contains(Object? element) => _values.contains(element);
  @override
  String? lookup(Object? element) => _values.lookup(element);
  @override
  bool remove(Object? value) => _values.remove(value);
  @override
  Iterator<String> get iterator => _values.iterator;
  @override
  int get length => _values.length;
  @override
  Set<String> toSet() => _values.toSet();
}

@internal
class AutoInternal {
  AutoInternal();
}

AutoInternal createInternal() => AutoInternal();

class AutoVisible {
  AutoVisible();

  String get label => 'public';

  @visibleForTesting
  String get testingLabel => 'test';

  @protected
  void protectedAction() {}
}
