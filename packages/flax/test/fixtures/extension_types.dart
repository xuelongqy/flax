import 'package:flutter/widgets.dart';

extension type WidgetBox(Widget value) {}

extension type MaybeWidget(Widget? value) {}

extension type MaybeCount(int? value) {}

extension type ContextBox(BuildContext value) {}

extension type StateBox(State value) {}

extension type PreferredBox(PreferredSizeWidget value) {}

extension type GenericBox<T>(T value) {}

extension type WidgetGroup(List<WidgetBox?> value) {}

extension type WidgetInfo(({WidgetBox child, ContextBox context}) value) {}

extension type FutureWidget(Future<WidgetBox> value) {}

extension type WidgetStream(Stream<WidgetBox?> value) {}

extension type WidgetCallback(WidgetBox Function(ContextBox) value) {}

extension type RouteBox(Route<Object?> value) {}

extension type PageBox(Page<Object?> value) {}

extension type ReflectiveBox(Type value) {}

// Route/Page callbacks retain their explicit ownership boundary.
extension type PageFutureCallback(Future<PageBox> Function() value) {}

WidgetBox echoWidgetBox(WidgetBox value) => value;
MaybeWidget echoMaybeWidget(MaybeWidget value) => value;
MaybeCount echoMaybeCount(MaybeCount value) => value;
ContextBox echoContextBox(ContextBox value) => value;
StateBox echoStateBox(StateBox value) => value;
PreferredBox echoPreferredBox(PreferredBox value) => value;
WidgetBox? optionalWidgetBox({WidgetBox? value}) => value;
WidgetGroup echoWidgetGroup(WidgetGroup value) => value;
WidgetInfo echoWidgetInfo(WidgetInfo value) => value;
FutureWidget echoFutureWidget(FutureWidget value) => value;
WidgetStream echoWidgetStream(WidgetStream value) => value;
WidgetStream widgetEvents(WidgetBox? value) =>
    WidgetStream(Stream.fromIterable([value, null]));
Future<WidgetGroup> collectWidgetEvents(WidgetStream value) async =>
    WidgetGroup(await value.value.toList());
WidgetBox buildWidgetBox(WidgetCallback callback, ContextBox context) =>
    callback.value(context);
WidgetCallback keepWidgetCallback(WidgetCallback callback) => callback;
GenericBox<WidgetBox> echoGenericWidgetBox(GenericBox<WidgetBox> value) =>
    value;
bool routeBoxInstalled(RouteBox value) => value.value.navigator != null;
String? pageBoxName(PageBox value) => value.value.name;
PageBox unownedPageBox() => throw StateError('No Page result conversion');
