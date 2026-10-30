// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_SliverLayoutDimensions';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SliverLayoutDimensions';
import type * as upstream3 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import type * as upstream4 from '@flax/flutter/painting/_bindings/flutter_EdgeInsets';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsets';
import type * as upstream5 from '@flax/flutter/painting/_bindings/flutter_Axis';
import '@flax/flutter/painting/_bindings/flutter_Axis';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/flutter_ScrollController';
import '@flax/flutter/widgets/_bindings/flutter_ScrollController';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import type * as upstream8 from '@flax/flutter/rendering/_bindings/sdk_rendering_ScrollCacheExtent';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ScrollCacheExtent';
import type * as upstream9 from '@flax/flutter/gestures/_bindings/flutter_DragStartBehavior';
import '@flax/flutter/gestures/_bindings/flutter_DragStartBehavior';
import type * as upstream10 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollViewKeyboardDismissBehavior';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollViewKeyboardDismissBehavior';
import type * as upstream11 from '@flax/dart/ui/_bindings/flutter_Clip';
import '@flax/dart/ui/_bindings/flutter_Clip';
import type * as upstream12 from '@flax/flutter/widgets/_bindings/sdk_widgets_DragBoundaryDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_DragBoundaryDelegate';
import type * as upstream13 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream14 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream15 from '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
import type * as upstream16 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream17 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import type * as upstream18 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream19 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream20 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream21 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream22 from '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import { _flaxMemberParameters4 } from "@flax/material-ui/_bindings/material.__module";
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ReorderableListView extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{ "__flaxBound:package:material_ui/src/reorderable_list.dart::ReorderableListView": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __ReorderableListView: unique symbol;
readonly [_flaxDartTypeValue]: ReorderableListView;

readonly itemBuilder: ((context: upstream14.BuildContext, index: number) => Widget);
readonly itemCount: number;
readonly onReorder: ((oldIndex: number, newIndex: number) => void) | null;
readonly onReorderItem: ((oldIndex: number, newIndex: number) => void) | null;
readonly onReorderStart: ((index: number) => void) | null;
readonly onReorderEnd: ((index: number) => void) | null;
readonly proxyDecorator: ((child: Widget, index: number, animation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>) => Widget) | null;
readonly buildDefaultDragHandles: boolean;
readonly padding: upstream4.EdgeInsets | null;
readonly header: Widget | null;
readonly footer: Widget | null;
readonly scrollDirection: upstream5.Axis;
readonly reverse: boolean;
readonly scrollController: upstream6.ScrollController | null;
readonly primary: boolean | null;
readonly physics: upstream7.ScrollPhysics | null;
readonly shrinkWrap: boolean;
readonly anchor: number;
readonly cacheExtent: number | null;
readonly scrollCacheExtent: upstream8.ScrollCacheExtent | null;
readonly dragStartBehavior: upstream9.DragStartBehavior;
readonly keyboardDismissBehavior: upstream10.ScrollViewKeyboardDismissBehavior | null;
readonly restorationId: string | null;
readonly clipBehavior: upstream11.Clip;
readonly itemExtent: number | null;
readonly itemExtentBuilder: ((index: number, dimensions: Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverLayoutDimensions": readonly [] }>) => number | null) | null;
readonly prototypeItem: Widget | null;
readonly autoScrollerVelocityScalar: number | null;
readonly dragBoundaryProvider: ((context: upstream14.BuildContext) => upstream12.DragBoundaryDelegate<upstream13.Rect> | null) | null;
readonly mouseCursor: upstream15.MouseCursor | null;
readonly key: upstream1.Key | null;
createState(): upstream16.State<ReorderableListView>;
createElement(): upstream17.StatefulElement;
toStringShort(): string;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream19.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream19.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream21.DiagnosticsTreeStyle | null | undefined}): upstream20.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream20.DiagnosticsNode>;
}
defineObject("flax.material/material#type:ReorderableListView", ["itemBuilder","itemCount","onReorder","onReorderItem","onReorderStart","onReorderEnd","proxyDecorator","buildDefaultDragHandles","padding","header","footer","scrollDirection","reverse","scrollController","primary","physics","shrinkWrap","anchor","cacheExtent","scrollCacheExtent","dragStartBehavior","keyboardDismissBehavior","restorationId","clipBehavior","itemExtent","itemExtentBuilder","prototypeItem","autoScrollerVelocityScalar","dragBoundaryProvider","mouseCursor","key"], [], _flaxBindingMethods("flax.material/material#type:ReorderableListView", "object", {"createState":_flaxMemberParameters4,"createElement":_flaxMemberParameters4}, {}), [], undefined, "flax.core/sdk_widgets#type:Widget");
export function _ReorderableListViewFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; children: DartListInput<Widget, Widget>; onReorder?: ((oldIndex: number, newIndex: number) => void) | null | undefined; onReorderItem?: ((oldIndex: number, newIndex: number) => void) | null | undefined; onReorderStart?: ((index: number) => void) | null | undefined; onReorderEnd?: ((index: number) => void) | null | undefined; itemExtent?: number | null | undefined; itemExtentBuilder?: ((index: number, dimensions: upstream2.SliverLayoutDimensions) => number | null) | null | undefined; prototypeItem?: Widget | null | undefined; proxyDecorator?: ((child: Widget, index: number, animation: upstream3.Animation<number>) => Widget) | null | undefined; buildDefaultDragHandles?: boolean | undefined; padding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; header?: Widget | null | undefined; footer?: Widget | null | undefined; scrollDirection?: upstream5.Axis | undefined; reverse?: boolean | undefined; scrollController?: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_controller.dart::ScrollController": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> | null | undefined; primary?: boolean | null | undefined; physics?: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [] }> | null | undefined; shrinkWrap?: boolean | undefined; anchor?: number | undefined; cacheExtent?: number | null | undefined; scrollCacheExtent?: Readonly<{ "__flaxBound:package:flutter/src/rendering/viewport.dart::ScrollCacheExtent": readonly [] }> | null | undefined; dragStartBehavior?: upstream9.DragStartBehavior | undefined; keyboardDismissBehavior?: upstream10.ScrollViewKeyboardDismissBehavior | null | undefined; restorationId?: string | null | undefined; clipBehavior?: upstream11.Clip | undefined; autoScrollerVelocityScalar?: number | null | undefined; dragBoundaryProvider?: ((context: upstream14.BuildContext) => Readonly<{ "__flaxBound:package:flutter/src/widgets/drag_boundary.dart::DragBoundaryDelegate": readonly [upstream13.Rect] }> | null) | null | undefined; mouseCursor?: Readonly<{ "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined }): ReorderableListView {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:ReorderableListView", "", [{"name":"key"},{"name":"children","required":true},{"name":"onReorder"},{"name":"onReorderItem"},{"name":"onReorderStart"},{"name":"onReorderEnd"},{"name":"itemExtent"},{"name":"itemExtentBuilder"},{"name":"prototypeItem"},{"name":"proxyDecorator"},{"name":"buildDefaultDragHandles"},{"name":"padding"},{"name":"header"},{"name":"footer"},{"name":"scrollDirection"},{"name":"reverse"},{"name":"scrollController"},{"name":"primary"},{"name":"physics"},{"name":"shrinkWrap"},{"name":"anchor"},{"name":"cacheExtent"},{"name":"scrollCacheExtent"},{"name":"dragStartBehavior"},{"name":"keyboardDismissBehavior"},{"name":"restorationId"},{"name":"clipBehavior"},{"name":"autoScrollerVelocityScalar"},{"name":"dragBoundaryProvider"},{"name":"mouseCursor"}], [], options) as ReorderableListView;
}
export declare namespace _ReorderableListViewFactory { const __flaxJsx: { readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof _ReorderableListViewFactory>[0]>), "children"> & { children: (globalThis.NonNullable<globalThis.Parameters<typeof _ReorderableListViewFactory>[0]>)["children"] | Widget }; readonly slot: "children"; readonly many: true; }; }
export namespace _ReorderableListViewFactory {
export function builder(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; itemBuilder: ((context: upstream14.BuildContext, index: number) => Widget); itemCount: number; onReorder?: ((oldIndex: number, newIndex: number) => void) | null | undefined; onReorderItem?: ((oldIndex: number, newIndex: number) => void) | null | undefined; onReorderStart?: ((index: number) => void) | null | undefined; onReorderEnd?: ((index: number) => void) | null | undefined; itemExtent?: number | null | undefined; itemExtentBuilder?: ((index: number, dimensions: upstream2.SliverLayoutDimensions) => number | null) | null | undefined; prototypeItem?: Widget | null | undefined; proxyDecorator?: ((child: Widget, index: number, animation: upstream3.Animation<number>) => Widget) | null | undefined; buildDefaultDragHandles?: boolean | undefined; padding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; header?: Widget | null | undefined; footer?: Widget | null | undefined; scrollDirection?: upstream5.Axis | undefined; reverse?: boolean | undefined; scrollController?: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_controller.dart::ScrollController": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> | null | undefined; primary?: boolean | null | undefined; physics?: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [] }> | null | undefined; shrinkWrap?: boolean | undefined; anchor?: number | undefined; cacheExtent?: number | null | undefined; scrollCacheExtent?: Readonly<{ "__flaxBound:package:flutter/src/rendering/viewport.dart::ScrollCacheExtent": readonly [] }> | null | undefined; dragStartBehavior?: upstream9.DragStartBehavior | undefined; keyboardDismissBehavior?: upstream10.ScrollViewKeyboardDismissBehavior | null | undefined; restorationId?: string | null | undefined; clipBehavior?: upstream11.Clip | undefined; autoScrollerVelocityScalar?: number | null | undefined; dragBoundaryProvider?: ((context: upstream14.BuildContext) => Readonly<{ "__flaxBound:package:flutter/src/widgets/drag_boundary.dart::DragBoundaryDelegate": readonly [upstream13.Rect] }> | null) | null | undefined; mouseCursor?: Readonly<{ "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined }): ReorderableListView {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:ReorderableListView", "builder", [{"name":"key"},{"name":"itemBuilder","required":true},{"name":"itemCount","required":true},{"name":"onReorder"},{"name":"onReorderItem"},{"name":"onReorderStart"},{"name":"onReorderEnd"},{"name":"itemExtent"},{"name":"itemExtentBuilder"},{"name":"prototypeItem"},{"name":"proxyDecorator"},{"name":"buildDefaultDragHandles"},{"name":"padding"},{"name":"header"},{"name":"footer"},{"name":"scrollDirection"},{"name":"reverse"},{"name":"scrollController"},{"name":"primary"},{"name":"physics"},{"name":"shrinkWrap"},{"name":"anchor"},{"name":"cacheExtent"},{"name":"scrollCacheExtent"},{"name":"dragStartBehavior"},{"name":"keyboardDismissBehavior"},{"name":"restorationId"},{"name":"clipBehavior"},{"name":"autoScrollerVelocityScalar"},{"name":"dragBoundaryProvider"},{"name":"mouseCursor"}], [], options) as ReorderableListView;
}
export declare namespace builder { const __flaxJsx: { readonly props: (globalThis.NonNullable<globalThis.Parameters<typeof builder>[0]>); readonly slot: null; readonly many: false; }; }
}
export const ReorderableListView: typeof _ReorderableListViewFactory & _FlaxInstanceType<ReorderableListView> & _FlaxDartType<ReorderableListView, readonly ["class", "flax.material/material#type:ReorderableListView", readonly [], false]> = _flaxBindInstanceType<ReorderableListView, typeof _ReorderableListViewFactory>(_ReorderableListViewFactory, "flax.material/material#type:ReorderableListView", ["flax.core/components#type:StatefulWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _ReorderableListViewFactory & _FlaxInstanceType<ReorderableListView> & _FlaxDartType<ReorderableListView, readonly ["class", "flax.material/material#type:ReorderableListView", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "itemBuilder" | "itemCount" | "onReorder" | "onReorderItem" | "onReorderStart" | "onReorderEnd" | "proxyDecorator" | "buildDefaultDragHandles" | "padding" | "header" | "footer" | "scrollDirection" | "reverse" | "scrollController" | "primary" | "physics" | "shrinkWrap" | "anchor" | "cacheExtent" | "scrollCacheExtent" | "dragStartBehavior" | "keyboardDismissBehavior" | "restorationId" | "clipBehavior" | "itemExtent" | "itemExtentBuilder" | "prototypeItem" | "autoScrollerVelocityScalar" | "dragBoundaryProvider" | "mouseCursor" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:material_ui/src/reorderable_list.dart::ReorderableListView" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
