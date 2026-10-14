import 'package:flax/bindings.dart';
import 'package:material_ui/material_ui.dart';

/// Uses Flutter's current Page settings and the library's standard transitions.
FlaxPageRoute<T> createMaterialPageRoute<T>(MaterialPage<T> page) =>
    _MaterialPageRoute<T>(page);

class _MaterialPageRoute<T> extends FlaxPageRoute<T>
    with MaterialRouteTransitionMixin<T> {
  _MaterialPageRoute(MaterialPage<T> page) : super(page: page);
  MaterialPage<T> get _page => settings as MaterialPage<T>;
  @override
  Widget buildContent(BuildContext context) => _page.child;
  @override
  bool get maintainState => _page.maintainState;
  @override
  bool get fullscreenDialog => _page.fullscreenDialog;
}
