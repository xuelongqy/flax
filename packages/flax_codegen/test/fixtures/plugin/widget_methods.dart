// ignore_for_file: must_be_immutable, library_private_types_in_public_api
import 'dart:async';

import 'package:flutter/widgets.dart';

export 'dart:async' show FutureOr, Stream;

export 'package:flutter/widgets.dart' show Widget, Key, BuildContext, SizedBox;

enum NativeMode { compact, expanded }

abstract class NativeParent<T> implements Widget {
  T identity(T value);
}

abstract class NativeContract implements NativeParent<Widget> {
  Widget narrow(covariant Widget child);
  Widget Function({required Widget child}) callback(
    Widget Function({required Widget child}) value,
  );
  T recursive<T extends Comparable<T>>(T value);
  String? nullable([String? value]);
  Never fail();
  Widget get child;
  int get count;
  set count(int value);
  void update(int delta);
  bool mounted(BuildContext context);
  Widget decorate(BuildContext context, Widget child);
  List<Widget> children(List<Widget> values);
  int positional(int a, [int b = 3]);
  num widened([int value = 1]);
  String named({
    required String value,
    String? suffix,
    NativeMode mode = NativeMode.compact,
  });
  T choose<T extends Widget>(T value);
  R map<T, R extends Object>(T value, R Function(T) convert);
  Future<Widget> later(Future<Widget> value);
  FutureOr<int> maybe(FutureOr<int> value);
  Stream<int> stream(Stream<int> value);
  (Widget, {Map<String, Set<int>> values}) record(
    (Widget, {Map<String, Set<int>> values}) value,
  );
  int operator [](int index);
  void operator []=(int index, int value);
  int operator -();
}

class NativeTile extends StatelessWidget
    implements NativeContract, NativeAlias {
  NativeTile({super.key});
  @override
  Widget identity(Widget value) => value;
  @override
  Widget narrow(covariant SizedBox child) => child;
  @override
  Widget Function({required Widget child}) callback(
    Widget Function({required Widget child}) value,
  ) => value;
  @override
  T recursive<T extends Comparable<T>>(T value) => value;
  @override
  String? nullable([String? value]) => value;
  @override
  Never fail() => throw StateError('native failure');
  @override
  final _NativeChild child = const _NativeChild();
  @override
  int count = 0;
  @override
  void update(int delta) {
    count += delta;
  }

  @override
  bool mounted(BuildContext context) => context.mounted;
  @override
  Widget decorate(BuildContext context, Widget child) => child;
  @override
  List<Widget> children(List<Widget> values) => values;
  @override
  int positional(int renamed, [int extra = 7]) => renamed + extra;
  @override
  num widened([num value = 1.5]) => value;
  @override
  String named({
    required String value,
    String? suffix,
    NativeMode mode = NativeMode.compact,
  }) => '$value${suffix ?? ''}:${mode.name}';
  @override
  T choose<T extends Widget>(T value) => value;
  @override
  R map<T, R extends Object>(T value, R Function(T) convert) => convert(value);
  @override
  Future<Widget> later(Future<Widget> value) => value;
  @override
  FutureOr<int> maybe(FutureOr<int> value) => value;
  @override
  Stream<int> stream(Stream<int> value) => value;
  @override
  (Widget, {Map<String, Set<int>> values}) record(
    (Widget, {Map<String, Set<int>> values}) value,
  ) => value;
  @override
  int operator [](int index) => count + index;
  @override
  void operator []=(int index, int value) {
    count = value - index;
  }

  @override
  int operator -() => -count;
  @override
  Widget build(BuildContext context) => child;
}

abstract class GenericContract<T> implements Widget {
  T get value;
}

class _PrivateValue {}

abstract class PrivateContract implements Widget {
  _PrivateValue get value;
}

abstract class PrivateDefaultContract implements Widget {
  int read([int value = _default]);
}

const _default = 4;

abstract class NativeAlias implements NativeContract {}

abstract class HostCollision implements Widget {
  Widget get configuration;
}

class JsConsumer {
  static void invoke(BuildContext Function() callback) {}
}

class _NativeChild extends SizedBox {
  const _NativeChild();
}
