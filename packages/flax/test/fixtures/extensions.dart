import 'dart:async';

import 'package:flax/bindings.dart';
import 'package:flutter/widgets.dart';

extension StringX on String {
  String repeat(int count) => this * count;
  bool get isBlank => trim().isEmpty;
  static int reads = 0;
  static int get revision => ++reads;
  static String echo(String value) => value;
}

extension ListX<T> on List<T> {
  T get firstValue => first;
  set firstValue(T value) => this[0] = value;
  R mapFirst<R>(R Function(T) callback) => callback(first);
  Future<T> later() async => first;
  T operator [](int index) => elementAt(index);
}

extension IntListX on List<int> {
  set firstValue(int value) => this[0] = value;
}

extension NullableX on String? {
  bool get missing => this == null;
}

extension ContextX on BuildContext {
  bool get isMounted => mounted;
  BuildContext get same => this;
  BuildContext through(BuildContext Function(BuildContext) callback) =>
      callback(this);
  Future<BuildContext> later(Future<BuildContext> Function() callback) =>
      callback();
  Stream<BuildContext> get events => Stream.value(this);
  Widget label(String value) => Text(value);
}

extension WidgetX on Widget {
  Widget get same => this;
  Widget through(Widget Function(Widget) callback) => callback(this);
}

extension PreferredX on PreferredSizeWidget {
  double get height => preferredSize.height;
  PreferredSizeWidget get same => this;
}

extension StateX on State {
  bool get isMounted => mounted;
  State get same => this;
  State through(State Function(State) callback) => callback(this);
  FutureOr<State?> throughMaybe(
    FutureOr<State?> Function(FutureOr<State?>) callback, {
    bool empty = false,
  }) => callback(empty ? null : this);
  Future<State?> throughLater(
    Future<State?> Function(Future<State?>) callback,
  ) => callback(Future.value(this));
  Stream<State?> throughStream(
    Stream<State?> Function(Stream<State?>) callback,
  ) => callback(Stream.value(this));
  (State, List<State?>) throughRecord(
    (State, List<State?>) Function((State, List<State?>)) callback,
  ) => callback((this, [this, null]));
  State Function(State) reader() =>
      (value) => value;
  void Function(void Function(State)) visitor() =>
      (callback) => callback(this);
}

extension RouteX on Route<Object?> {
  bool get isInstalled => navigator != null;
}

extension PageX on Page<Object?> {
  String? get label => name;
}

bool stateIsMounted(State value) => value.mounted;
bool optionalStateIsMounted({State? value}) => value?.mounted ?? false;
int countMountedStates(List<State> values) =>
    values.where((value) => value.mounted).length;
Widget columnWidgets(List<Widget> children) =>
    Column(mainAxisSize: MainAxisSize.min, children: children);
Widget columnWidgetGroups(List<List<Widget?>?>? children) => columnWidgets([
  for (final group in children ?? <List<Widget?>?>[])
    ...?group?.whereType<Widget>(),
]);
Future<Widget> futureColumnWidgets(Future<List<Widget>> children) async =>
    columnWidgets(await children);

State? globalState;
Widget? globalWidget;
BuildContext? globalContext;
int globalContextReads = 0;
BuildContext? get currentContext {
  globalContextReads++;
  return globalContext;
}

class ExtensionValues {
  ExtensionValues();
  State? nativeState;
  static State? sharedState;
  static Widget? sharedWidget;
  Widget? _selectedWidget;
  int widgetReads = 0;
  int widgetWrites = 0;
  bool rejectWidgetAfterStore = false;
  Widget? get selectedWidget {
    widgetReads++;
    return _selectedWidget;
  }

  set selectedWidget(Widget? value) {
    _selectedWidget = value;
    widgetWrites++;
    if (rejectWidgetAfterStore) {
      throw StateError('Stored Widget before throwing');
    }
  }

  State state() => nativeState!;
  State Function(State)? retainedStateCallback;
  void keepStateCallback(State Function(State) callback) =>
      retainedStateCallback = callback;
  bool matchesState(State value) => identical(nativeState, value);
  static bool stateMounted(State value) => value.mounted;
  Widget column(List<Widget> children) => columnWidgets(children);
  final Widget widget = const Text('Native extension Widget');
  final PreferredSizeWidget preferred = const PreferredSize(
    preferredSize: Size(20, 40),
    child: SizedBox(),
  );
  final List<int> numbers = [1, 2];
  final List<String> words = ['a', 'b'];
  List<Widget> get widgets => [widget, preferred];
}

class ExtensionRoute extends PageRouteBuilder<Object?> {
  ExtensionRoute() : super(pageBuilder: (_, _, _) => const SizedBox());
}

class ExtensionPage extends Page<Object?> {
  const ExtensionPage({required super.name});

  @override
  Route<Object?> createRoute(BuildContext context) => PageRouteBuilder(
    settings: this,
    pageBuilder: (_, _, _) => const SizedBox(),
  );
}

FlaxPageRoute adaptExtensionPage(ExtensionPage page) =>
    _ExtensionPageRoute(page);

class _ExtensionPageRoute extends FlaxPageRoute {
  _ExtensionPageRoute(ExtensionPage page) : super(page: page);

  @override
  Widget buildPage(
    BuildContext context,
    Animation<double> animation,
    Animation<double> secondaryAnimation,
  ) => const SizedBox();

  @override
  Duration get transitionDuration => Duration.zero;
  @override
  Color? get barrierColor => null;
  @override
  String? get barrierLabel => null;
  @override
  bool get maintainState => true;
}

class ExtensionAnchor extends StatefulWidget {
  const ExtensionAnchor({
    required this.onState,
    required this.child,
    super.key,
  });
  final void Function(State) onState;
  final Widget child;
  @override
  State<ExtensionAnchor> createState() => _ExtensionAnchorState();
}

class _ExtensionAnchorState extends State<ExtensionAnchor> {
  @override
  void initState() {
    super.initState();
    widget.onState(this);
  }

  @override
  Widget build(BuildContext context) => widget.child;
}
