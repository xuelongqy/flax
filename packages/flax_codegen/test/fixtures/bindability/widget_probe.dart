import 'package:flutter/widgets.dart';
export 'package:flutter/widgets.dart' show Widget;

class ProbeBox extends StatelessWidget {
  const ProbeBox({super.key, this.label, this.secret});
  final String? label;
  final Uri? secret;
  String get title => label ?? '';
  void poke() {}
  @override
  Widget build(BuildContext context) => const SizedBox();
}

class Wall {
  Wall({this.buildAll, this.ok});
  final void Function(List<Widget> children)? buildAll;
  final int? ok;
}

class WidgetWrites {
  set builder(void Function(List<Widget> children) value) {}
}

class SetWidgetCallbackWall {
  SetWidgetCallbackWall(this.callback);
  final void Function(Set<Widget>) callback;
}

class MapWidgetCallbackWall {
  MapWidgetCallbackWall(this.callback);
  final void Function(Map<String, Widget>) callback;
}

class FutureWidgetListCallbackWall {
  FutureWidgetListCallbackWall(this.callback);
  final Future<List<Widget>> Function() callback;
}

class NullableWidgetListCallbackWall {
  NullableWidgetListCallbackWall(this.callback);
  final void Function(List<Widget?>) callback;
}

abstract class WidgetProperty {
  Widget get child;
  set child(Widget value);
}

abstract class WidgetCollectionProperty {
  List<Widget> get children;
  set children(List<Widget> value);
}

abstract class ContextProperty {
  BuildContext? get context;
  set context(BuildContext? value);
}

abstract class StateProperty {
  State? get state;
  set state(State? value);
}

abstract class WidgetRecordProperty {
  ({Widget? child, BuildContext? context, State? state}) get value;
  set value(({Widget? child, BuildContext? context, State? state}) value);
}

abstract class FutureRecordProperty {
  ({Widget? child, Future<int> pending}) get value;
}

abstract class StreamRecordProperty {
  set value(({Widget? child, Stream<int> events}) value);
}

class RequiredUriBox extends StatelessWidget {
  const RequiredUriBox({super.key, required this.uri});
  final Uri uri;
  @override
  Widget build(BuildContext context) => const SizedBox();
}

class IterableWidgetCallbackWall {
  IterableWidgetCallbackWall(this.callback);
  final Iterable<Widget> Function() callback;
}
