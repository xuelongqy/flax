import 'package:flutter/foundation.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter/material.dart' show Brightness, Theme;

export 'package:flutter/widgets.dart' show BuildContext, Widget;

bool isDark(BuildContext context) =>
    Theme.of(context).brightness == Brightness.dark;
bool contextMounted(BuildContext context) => context.mounted;
bool optionalContext({BuildContext? context}) => context?.mounted ?? false;
int mountedContexts(List<BuildContext> contexts) =>
    contexts.where((context) => context.mounted).length;
bool Function(BuildContext) contextReader() =>
    (context) => context.mounted;

final class ContextBox {
  ContextBox(this.origin, {this.optional});

  BuildContext origin;
  BuildContext? optional;
  static BuildContext? _selected;
  static set selected(BuildContext? value) => _selected = value;
  static bool get selectedMounted => _selected?.mounted ?? false;
  static bool isMounted(BuildContext context) => context.mounted;
  bool get mounted => origin.mounted;
  bool get optionalMounted => optional?.mounted ?? false;
  bool matches(BuildContext context) => identical(origin, context);
}

class ContextTile extends StatelessWidget {
  const ContextTile({super.key, required this.origin});
  final BuildContext origin;
  @override
  Widget build(BuildContext context) => Text('Context ${origin.mounted}');
}

BuildContext? _selectedContext;
set selectedContext(BuildContext? value) => _selectedContext = value;
bool get selectedContextMounted => _selectedContext?.mounted ?? false;

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
  bool maintainState = true,
  VoidCallback? before,
}) {
  before?.call();
  final result = Navigator.of(origin, rootNavigator: root).push<Object?>(
    PageRouteBuilder<Object?>(
      maintainState: maintainState,
      pageBuilder: (context, _, _) => content(context),
    ),
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

class BuilderBox {
  BuilderBox([WidgetBuilder? builder]) : _builder = builder;
  WidgetBuilder? _builder;

  void configure(WidgetBuilder? builder) => _builder = builder;
  Widget wrap() => wrapBuilder(_builder);
  static Widget wrapStatic(WidgetBuilder builder) => wrapBuilder(builder);
}

Widget wrapBuilder([WidgetBuilder? builder]) =>
    Builder(builder: builder ?? (_) => const SizedBox.shrink());
Widget Function(WidgetBuilder) builderWrapper() =>
    (builder) => wrapBuilder(builder);

Widget badBuilder(Widget Function(BuildContext, int) builder) =>
    Builder(builder: (context) => builder(context, 1));
Widget nullableBuilder(Widget? Function(BuildContext) builder) =>
    Builder(builder: (context) => builder(context) ?? const SizedBox.shrink());
Widget asyncBuilder(Future<Widget> Function(BuildContext) builder) =>
    const SizedBox.shrink();

Widget invokeBuilder(BuildContext origin, WidgetBuilder builder) =>
    builder(origin);

BuildContext? _builderContext;
void saveBuilderContext(BuildContext origin) => _builderContext = origin;
Widget invokeStaleBuilder(WidgetBuilder builder) {
  try {
    return builder(_builderContext!);
  } finally {
    _builderContext = null;
  }
}

Widget namedBuilder(Widget Function({required BuildContext context}) builder) =>
    Builder(builder: (context) => builder(context: context));
Widget optionalContextBuilder(Widget Function([BuildContext?]) builder) =>
    Builder(builder: (context) => builder(context));
Widget nestedBuilders(List<WidgetBuilder> builder) =>
    Builder(builder: builder.single);
Widget interfaceBuilder(PreferredSizeWidget Function(BuildContext) builder) =>
    Builder(builder: builder);
