import 'package:flax/bindings.dart';
import 'package:flutter/widgets.dart';
export 'package:flutter/widgets.dart';

void _defaultPop(bool didPop, Object? result) {}

abstract class BaseScreen<T> extends Page<T> {
  const BaseScreen({
    super.key,
    super.name,
    super.arguments,
    super.onPopInvoked = _defaultPop,
  });
}

class ScreenSpec<T> extends BaseScreen<T> {
  const ScreenSpec({
    required this.content,
    super.key,
    super.name,
    super.arguments,
    super.onPopInvoked,
  });
  final Widget content;
  @override
  Route<T> createRoute(BuildContext context) => throw UnimplementedError();
}

FlaxPageRoute adaptScreen(ScreenSpec<Object?> page) => _ScreenRoute(page);

class _ScreenRoute extends FlaxPageRoute {
  _ScreenRoute(ScreenSpec<Object?> page) : super(page: page);
  @override
  Widget buildPage(
    BuildContext context,
    Animation<double> animation,
    Animation<double> secondaryAnimation,
  ) => (settings as ScreenSpec<Object?>).content;
  @override
  Duration get transitionDuration => Duration.zero;
  @override
  Color? get barrierColor => null;
  @override
  String? get barrierLabel => null;
  @override
  bool get maintainState => true;
}
