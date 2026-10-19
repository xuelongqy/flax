// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_MultiChildRenderObjectWidget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_MultiChildRenderObjectWidget';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_RenderObjectWidget';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream3 from '@flax/flutter/painting/_bindings/sdk_painting_AxisDirection';
import '@flax/flutter/painting/_bindings/sdk_painting_AxisDirection';
import type * as upstream4 from '@flax/flutter/rendering/_bindings/sdk_rendering_ViewportOffset';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ViewportOffset';
import type * as upstream5 from '@flax/flutter/rendering/_bindings/sdk_rendering_CacheExtentStyle';
import '@flax/flutter/rendering/_bindings/sdk_rendering_CacheExtentStyle';
import type * as upstream6 from '@flax/flutter/rendering/_bindings/sdk_rendering_ScrollCacheExtent';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ScrollCacheExtent';
import type * as upstream7 from '@flax/flutter/rendering/_bindings/sdk_rendering_SliverPaintOrder';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SliverPaintOrder';
import type * as upstream8 from '@flax/dart/ui/_bindings/flutter_Clip';
import '@flax/dart/ui/_bindings/flutter_Clip';
import type * as upstream9 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream10 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderViewport';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderViewport';
import type * as upstream11 from '@flax/flutter/widgets/_bindings/sdk_widgets_MultiChildRenderObjectElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_MultiChildRenderObjectElement';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream13 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import type * as upstream14 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream15 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream16 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream17 from '@flax/flutter/rendering/_bindings/sdk_rendering_SliverPhysicalContainerParentData';
import type * as upstream18 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderSliver';
const _flaxMemberParameters0 = [{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"}] as const;
const _flaxMemberParameters1 = [{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"},{"name":"renderObject","required":true,"positional":true}] as const;
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Viewport extends _FlaxDartWidget, Omit<upstream0.MultiChildRenderObjectWidget, _flaxOwnMembers0>, Omit<upstream1.RenderObjectWidget, _flaxOwnMembers0 | keyof upstream0.MultiChildRenderObjectWidget>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.MultiChildRenderObjectWidget | keyof upstream1.RenderObjectWidget>, Readonly<{ "__flaxBound:package:flutter/src/widgets/viewport.dart::Viewport": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::MultiChildRenderObjectWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::RenderObjectWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __Viewport: unique symbol;
readonly [_flaxDartTypeValue]: Viewport;

readonly axisDirection: upstream3.AxisDirection;
readonly crossAxisDirection: upstream3.AxisDirection | null;
readonly anchor: number;
readonly offset: upstream4.ViewportOffset;
readonly center: upstream2.Key | null;
readonly cacheExtent: number | null;
readonly cacheExtentStyle: upstream5.CacheExtentStyle;
readonly scrollCacheExtent: upstream6.ScrollCacheExtent | null;
readonly paintOrder: upstream7.SliverPaintOrder;
readonly clipBehavior: upstream8.Clip;
readonly children: DartList<Widget>;
readonly key: upstream2.Key | null;
createRenderObject(context: upstream9.BuildContext): upstream10.RenderViewport;
updateRenderObject(context: upstream9.BuildContext, renderObject: Readonly<{ "__flaxBound:package:flutter/src/rendering/viewport.dart::RenderViewport": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/viewport.dart::RenderViewportBase": readonly [upstream17.SliverPhysicalContainerParentData] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/viewport.dart::RenderAbstractViewport": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::ContainerRenderObjectMixin": readonly [upstream18.RenderSliver, upstream17.SliverPhysicalContainerParentData] }>): void;
createElement(): upstream11.MultiChildRenderObjectElement;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
didUnmountRenderObject(renderObject: Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): void;
toStringShort(): string;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream14.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream14.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream16.DiagnosticsTreeStyle | null | undefined}): upstream15.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream15.DiagnosticsNode>;
}
defineObject("flax.core/sdk_widgets#type:Viewport", ["axisDirection","crossAxisDirection","anchor","offset","center","cacheExtent","cacheExtentStyle","scrollCacheExtent","paintOrder","clipBehavior","children","key"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:Viewport", "object", {"createRenderObject":_flaxMemberParameters0,"updateRenderObject":_flaxMemberParameters1}, {}), [], undefined, "flax.core/sdk_widgets#type:MultiChildRenderObjectWidget");
export function _ViewportFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; axisDirection?: upstream3.AxisDirection | undefined; crossAxisDirection?: upstream3.AxisDirection | null | undefined; anchor?: number | undefined; offset: Readonly<{ "__flaxBound:package:flutter/src/rendering/viewport_offset.dart::ViewportOffset": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }>; center?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; cacheExtent?: number | null | undefined; cacheExtentStyle?: upstream5.CacheExtentStyle | undefined; scrollCacheExtent?: Readonly<{ "__flaxBound:package:flutter/src/rendering/viewport.dart::ScrollCacheExtent": readonly [] }> | null | undefined; paintOrder?: upstream7.SliverPaintOrder | undefined; clipBehavior?: upstream8.Clip | undefined; slivers?: DartListInput<Widget, Widget> | undefined }): Viewport {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:Viewport", "", [{"name":"key"},{"name":"axisDirection"},{"name":"crossAxisDirection"},{"name":"anchor"},{"name":"offset","required":true},{"name":"center"},{"name":"cacheExtent"},{"name":"cacheExtentStyle"},{"name":"scrollCacheExtent"},{"name":"paintOrder"},{"name":"clipBehavior"},{"name":"slivers"}], [], options) as Viewport;
}
export namespace _ViewportFactory { export function getDefaultCrossAxisDirection(context: upstream9.BuildContext, axisDirection: upstream3.AxisDirection): upstream3.AxisDirection {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:Viewport.getDefaultCrossAxisDirection", [contextHandle(context, "flax.core/flutter#type:BuildContext"), axisDirection]);
return _flaxResult as upstream3.AxisDirection;
} }
export const Viewport: typeof _ViewportFactory & _FlaxInstanceType<Viewport> & _FlaxDartType<Viewport, readonly ["class", "flax.core/sdk_widgets#type:Viewport", readonly [], false]> = _flaxBindInstanceType<Viewport, typeof _ViewportFactory>(_ViewportFactory, "flax.core/sdk_widgets#type:Viewport", ["flax.core/sdk_widgets#type:MultiChildRenderObjectWidget","flax.core/sdk_widgets#type:RenderObjectWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _ViewportFactory & _FlaxInstanceType<Viewport> & _FlaxDartType<Viewport, readonly ["class", "flax.core/sdk_widgets#type:Viewport", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "axisDirection" | "crossAxisDirection" | "anchor" | "offset" | "center" | "cacheExtent" | "cacheExtentStyle" | "scrollCacheExtent" | "paintOrder" | "clipBehavior" | "children" | "key" | "createRenderObject" | "updateRenderObject" | "createElement" | "debugFillProperties" | "didUnmountRenderObject" | "toStringShort" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/viewport.dart::Viewport" | "__flaxBound:package:flutter/src/widgets/framework.dart::MultiChildRenderObjectWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::RenderObjectWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
