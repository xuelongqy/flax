import 'package:flax/bindings.dart';
import 'package:material_ui/material_ui.dart';

/// Uses Flutter's current Page settings and the library's standard transitions.
FlaxPageRoute createMaterialPageRoute(MaterialPage<Object?> page) =>
    _MaterialPageRoute(page);

class _MaterialPageRoute extends FlaxPageRoute
    with MaterialRouteTransitionMixin<Object?> {
  _MaterialPageRoute(MaterialPage<Object?> page) : super(page: page);
  MaterialPage<Object?> get _page => settings as MaterialPage<Object?>;
  @override
  Widget buildContent(BuildContext context) => _page.child;
  @override
  bool get maintainState => _page.maintainState;
  @override
  bool get fullscreenDialog => _page.fullscreenDialog;
}
