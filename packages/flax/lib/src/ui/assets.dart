part of '../../bindings.dart';

class _SessionAssetScope extends InheritedWidget {
  _SessionAssetScope({required this.session, required Widget child})
    : super(
        child: _FontResourceScope(
          resources: session._fontResources,
          child: DefaultAssetBundle(bundle: session.assetBundle, child: child),
        ),
      );

  final _Session session;

  @override
  bool updateShouldNotify(_SessionAssetScope oldWidget) =>
      !identical(session, oldWidget.session);
}

extension _SessionAssets on _Session {
  Widget scopeAssets(Widget child) =>
      _SessionAssetScope(session: this, child: child);

  bool needsAssetScope(BuildContext context) =>
      context.mounted &&
      !identical(
        context.getInheritedWidgetOfExactType<_SessionAssetScope>()?.session,
        this,
      );
}
