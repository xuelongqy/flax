import 'package:flutter/widgets.dart';
export 'package:flutter/widgets.dart';

class ProbeBase<T> extends State<StatefulWidget> {
  int get count => 4;
  Future<T?> echo(T? value, {bool fail = false}) async {
    if (fail) throw StateError('probe failed');
    return value;
  }

  Future<U?> choose<U>(U? value) async => value;
  Future<BuildContext> unsupported() async => context;
  @override
  Widget build(BuildContext context) => const SizedBox();
}

class Probe extends ProbeBase<Object?> {}

class FixtureRoute<T> extends PageRoute<T> {
  FixtureRoute({required this.content, super.settings});
  final WidgetBuilder content;
  @override
  bool get maintainState => true;
  @override
  Color? get barrierColor => null;
  @override
  String? get barrierLabel => null;
  @override
  Duration get transitionDuration => Duration.zero;
  @override
  Widget buildPage(
    BuildContext context,
    Animation<double> animation,
    Animation<double> secondaryAnimation,
  ) => content(context);
}
