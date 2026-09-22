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
}

abstract class WidgetCollectionProperty {
  List<Widget> get children;
}

class RequiredUriBox extends StatelessWidget {
  const RequiredUriBox({super.key, required this.uri});
  final Uri uri;
  @override
  Widget build(BuildContext context) => const SizedBox();
}
