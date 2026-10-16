import 'package:flutter/widgets.dart';
export 'package:flutter/widgets.dart';

void _privateCallback() {}

class OmissionRoute extends PageRoute<Object?> {
  OmissionRoute.named({
    this.a = const [1],
    this.b = const [2],
    this.c = const [3],
    this.d = const [4],
    this.e = const [5],
    this.callback = _privateCallback,
  });
  final List<int>? a, b, c, d, e;
  final VoidCallback? callback;
  @override
  Widget buildPage(
    BuildContext context,
    Animation<double> animation,
    Animation<double> secondaryAnimation,
  ) => const SizedBox();
  @override
  bool get maintainState => true;
  @override
  Color? get barrierColor => null;
  @override
  String? get barrierLabel => null;
  @override
  Duration get transitionDuration => Duration.zero;
}

abstract class _OmissionPageBase extends Page<Object?> {
  const _OmissionPageBase({
    this.a = const [1],
    this.b = const [2],
    this.c = const [3],
    this.d = const [4],
    this.e = const [5],
    this.callback = _privateCallback,
  });
  final List<int>? a, b, c, d, e;
  final VoidCallback? callback;
}

class OmissionPage extends _OmissionPageBase {
  const OmissionPage.named({
    super.a,
    super.b,
    super.c,
    super.d,
    super.e,
    super.callback,
  });
  @override
  Route<Object?> createRoute(BuildContext context) => _OmissionPageRoute(this);
}

class _OmissionPageRoute extends PageRoute<Object?> {
  _OmissionPageRoute(OmissionPage page) : super(settings: page);
  @override
  Widget buildPage(
    BuildContext context,
    Animation<double> animation,
    Animation<double> secondaryAnimation,
  ) => const SizedBox();
  @override
  bool get maintainState => true;
  @override
  Color? get barrierColor => null;
  @override
  String? get barrierLabel => null;
  @override
  Duration get transitionDuration => Duration.zero;
}
