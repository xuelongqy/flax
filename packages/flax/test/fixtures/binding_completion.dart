import 'package:flutter/widgets.dart';

import 'dart:async';

import 'package:flutter/foundation.dart';
export 'package:flutter/widgets.dart' show Widget, Text;

const _defaultWidget = Text('default');

final _completionAsyncValues = <WeakReference<Object>>[];
void resetCompletionAsyncValues() => _completionAsyncValues.clear();
int get liveCompletionAsyncValues =>
    _completionAsyncValues.where((entry) => entry.target != null).length;
List<String> get liveCompletionAsyncTypes => [
  for (final entry in _completionAsyncValues)
    if (entry.target case final target?) target.runtimeType.toString(),
];

class CompletionFuture<T> extends SynchronousFuture<T> {
  CompletionFuture(super.value) {
    _completionAsyncValues.add(WeakReference(this));
  }
  Future<T> observe() => then<T>((value) => value);
  T echo(T result) => result;
}

class CompletionStream<T> extends StreamView<T> {
  CompletionStream(super.stream) {
    _completionAsyncValues.add(WeakReference(this));
  }
}

const _defaultSet = {1, 2};
Widget defaultWidget([Widget value = _defaultWidget]) => value;
bool defaultSet({Set<int> value = _defaultSet}) =>
    identical(value, _defaultSet);
int voidInput(void value) => 7;
int completionOptions(int options, {int amount = 2}) => options + amount;
int voidCallback(int Function(void) callback) => callback(null);
int Function(void) returnedVoidCallback() =>
    (Object? value) => value == null ? 1 : 2;

class VoidMethods {
  int apply(void value) => 7;
}

abstract class GenericCell<T> implements Widget {
  T get value;
}

class _CompletionCell<T> extends StatelessWidget implements GenericCell<T> {
  const _CompletionCell(this.value);
  @override
  final T value;
  @override
  Widget build(BuildContext context) => Text('$value');
}

GenericCell<String> completionCell() => const _CompletionCell('cell');

class MultiProxy<T> {
  MultiProxy.left(T arguments) : value = arguments;
  MultiProxy.right({required this.value});
  // Exercise legal positional names that collide with generated proxy fields.
  // ignore: no_leading_underscores_for_local_identifiers
  MultiProxy.hidden(T _flaxPeer) : value = _flaxPeer;
  final T value;
  T transform(T input) => input;
  T call(T input) => transform(input);
}

abstract class GetterProxy {
  GetterProxy();
  int get value;
  int written = 0;
  set value(int next) => written = next;
  int read() => value;
}

abstract class SetterProxy {
  SetterProxy();
  int get value => 7;
  set value(int next);
  void write(int next) => value = next;
}

Function nativeFunction() =>
    (int value, {bool loud = false}) => loud ? 'LOUD:$value' : 'soft:$value';
Function echoFunction(Function value) => value;
Function nativeGenericFunction() =>
    <T>(T value) => value;
Map<int Function(int), String> callbackMap() => {};

extension type CompletionMeters(int value) {
  int plus(int amount) => value + amount;
  static String get unit => 'meters';
}

mixin CompletionLabel {
  String decorate(String value) => '[$value]';
}

class CompletionDecorated with CompletionLabel {
  CompletionDecorated();
  String nativeDecorate(String value) => value;
  CompletionBox<T> box<T>(CompletionBox<T> Function(String) callback) =>
      callback('boxed');
}

class CompletionBox<T> {
  CompletionBox(this.value);
  final T value;
  String get typeName => '$T';
  void visit(void Function(CompletionBox<T>) callback) => callback(this);
  void visitScoped(void Function(CompletionBox<T>) callback) => callback(this);
}

T completionEcho<T>(T value) => value;
Record completionRecord() => (7, label: 'seven', enabled: true);
Record completionWrongRecord() => ('wrong',);
List<Widget> completionWidgets() => [];
Map<String, Widget> completionWidgetMap() => {};
Set<Widget> completionWidgetSet() => {};
Iterable<Widget>? _heldWidgets;
void keepCompletionWidgets(Iterable<Widget> Function() factory) =>
    _heldWidgets = factory();
Widget readCompletionWidget() => _heldWidgets!.first;
void clearCompletionWidgets() => _heldWidgets = null;
int firstCompletionNumber(Iterable<int> Function() factory) => factory().first;
bool sameCompletionIterables(List<Iterable<int>> values) =>
    identical(values[0], values[1]);

class CompletionWidget extends StatelessWidget {
  const CompletionWidget(this.value, {super.key});
  final String value;
  String label(String value) => value;
  @override
  Widget build(BuildContext context) => Text(label(value));
}

Future<int> completionTicker(int Function(void) callback) =>
    TickerFuture.complete().then(callback);
Iterable<Widget>? get heldCompletionWidgets => _heldWidgets;

WeakReference<Object>? _weakCompletionCallback;
void rememberCompletionCallback(int Function(int) callback) =>
    _weakCompletionCallback = WeakReference(callback);
bool completionCallbackAlive() => _weakCompletionCallback?.target != null;
