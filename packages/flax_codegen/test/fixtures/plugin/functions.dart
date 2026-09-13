import 'package:flutter/foundation.dart';
import 'package:flutter/widgets.dart';

export 'package:flutter/widgets.dart' show BuildContext, Widget;

int invokeTopLevel(int value) => value + 1;

enum FunctionMode { first, second }

class FunctionToken {
  const FunctionToken(this.value);
  final int value;
}

const _fallback = FunctionToken(7);
int _increment(int value) => value + 1;

int addValues(int left, [int right = 2]) => left + right;
int withDefaults({
  FunctionToken token = _fallback,
  int Function(int) transform = _increment,
}) => transform(token.value);
T echoToken<T extends FunctionToken>(T value) => value;
Object? exchange(Object? value) => value;
Object? copyData(Object? value) => value;
FunctionMode toggleMode(FunctionMode value) =>
    value == FunctionMode.first ? FunctionMode.second : FunctionMode.first;
List<int> mapNumbers(List<int> values, int Function(int) transform) =>
    values.map(transform).toList();
int Function(int) multiplyBy(int factor) =>
    (value) => factor * value;
Future<int?> finishLater({bool fail = false, bool empty = false}) async {
  if (fail) throw StateError('fixture failure');
  return empty ? null : 17;
}

Future<void> finishVoid() async {}
Future<int> callAsync(int value, Future<int> Function(int) callback) =>
    callback(value);
Widget nativeTile() => const SizedBox(width: 17, height: 19);

Future<Object?> openFixturePanel({
  required BuildContext origin,
  required WidgetBuilder content,
  bool root = false,
  bool failAfterPush = false,
  VoidCallback? before,
}) {
  before?.call();
  final result = Navigator.of(origin, rootNavigator: root).push<Object?>(
    PageRouteBuilder<Object?>(pageBuilder: (context, _, _) => content(context)),
  );
  if (failAfterPush) throw StateError('after push');
  return result;
}

int callNamedCallback(int Function({required int value}) transform) =>
    transform(value: 1);
void callDebugPrinter(DebugPrintCallback callback) =>
    callback('fixture', wrapWidth: 80);
Future<Object?> invalidRoute({
  required BuildContext origin,
  required WidgetBuilder content,
  bool root = false,
}) async => null;

Future<Object?>? nullableRoute({
  required BuildContext origin,
  required WidgetBuilder content,
  bool root = false,
}) => null;

Widget wrapContent(Widget value) => Center(child: value);
Widget mapContent(Widget value, Widget Function(Widget) transform) =>
    transform(value);
