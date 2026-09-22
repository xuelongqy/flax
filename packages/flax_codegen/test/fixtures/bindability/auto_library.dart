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
