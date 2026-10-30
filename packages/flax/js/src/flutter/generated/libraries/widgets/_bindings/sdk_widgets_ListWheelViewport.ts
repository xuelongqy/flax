// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_RenderObjectWidget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RenderObjectWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_ViewportOffset';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ViewportOffset';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_ListWheelChildDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ListWheelChildDelegate';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_Clip';
import '@flax/dart/ui/_bindings/flutter_Clip';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/sdk_widgets_ListWheelElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ListWheelElement';
import type * as upstream6 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderListWheelViewport';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderListWheelViewport';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream8 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream13 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import type * as upstream14 from '@flax/flutter/rendering/_bindings/sdk_rendering_ListWheelParentData';
import { _flaxMemberParameters2, _flaxMemberParameters0, _flaxMemberParameters1 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ListWheelViewport extends _FlaxDartWidget, Omit<upstream0.RenderObjectWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.RenderObjectWidget>, Readonly<{ "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelViewport": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::RenderObjectWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __ListWheelViewport: unique symbol;
readonly [_flaxDartTypeValue]: ListWheelViewport;

readonly diameterRatio: number;
readonly perspective: number;
readonly offAxisFraction: number;
readonly useMagnifier: boolean;
readonly magnification: number;
readonly overAndUnderCenterOpacity: number;
readonly itemExtent: number;
readonly squeeze: number;
readonly renderChildrenOutsideViewport: boolean;
readonly offset: upstream2.ViewportOffset;
readonly childDelegate: upstream3.ListWheelChildDelegate;
readonly clipBehavior: upstream4.Clip;
readonly key: upstream1.Key | null;
createElement(): upstream5.ListWheelElement;
createRenderObject(context: upstream7.BuildContext): upstream6.RenderListWheelViewport;
updateRenderObject(context: upstream7.BuildContext, renderObject: Readonly<{ "__flaxBound:package:flutter/src/rendering/list_wheel_viewport.dart::RenderListWheelViewport": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/viewport.dart::RenderAbstractViewport": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::ContainerRenderObjectMixin": readonly [upstream13.RenderBox, upstream14.ListWheelParentData] }>): void;
didUnmountRenderObject(renderObject: Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): void;
toStringShort(): string;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream10.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream10.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream12.DiagnosticsTreeStyle | null | undefined}): upstream11.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream11.DiagnosticsNode>;
}
defineObject("flax.core/sdk_widgets#type:ListWheelViewport", ["diameterRatio","perspective","offAxisFraction","useMagnifier","magnification","overAndUnderCenterOpacity","itemExtent","squeeze","renderChildrenOutsideViewport","offset","childDelegate","clipBehavior","key"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:ListWheelViewport", "object", {"createElement":_flaxMemberParameters2,"createRenderObject":_flaxMemberParameters0,"updateRenderObject":_flaxMemberParameters1}, {}), [], undefined, "flax.core/sdk_widgets#type:RenderObjectWidget");
export function _ListWheelViewportFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; diameterRatio?: number | undefined; perspective?: number | undefined; offAxisFraction?: number | undefined; useMagnifier?: boolean | undefined; magnification?: number | undefined; overAndUnderCenterOpacity?: number | undefined; itemExtent: number; squeeze?: number | undefined; renderChildrenOutsideViewport?: boolean | undefined; offset: Readonly<{ "__flaxBound:package:flutter/src/rendering/viewport_offset.dart::ViewportOffset": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }>; childDelegate: Readonly<{ "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelChildDelegate": readonly [] }>; clipBehavior?: upstream4.Clip | undefined }): ListWheelViewport {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:ListWheelViewport", "", [{"name":"key"},{"name":"diameterRatio"},{"name":"perspective"},{"name":"offAxisFraction"},{"name":"useMagnifier"},{"name":"magnification"},{"name":"overAndUnderCenterOpacity"},{"name":"itemExtent","required":true},{"name":"squeeze"},{"name":"renderChildrenOutsideViewport"},{"name":"offset","required":true},{"name":"childDelegate","required":true},{"name":"clipBehavior"}], [], options) as ListWheelViewport;
}
export declare namespace _ListWheelViewportFactory { const __flaxJsx: { readonly props: (globalThis.NonNullable<globalThis.Parameters<typeof _ListWheelViewportFactory>[0]>); readonly slot: null; readonly many: false; }; }
export const ListWheelViewport: typeof _ListWheelViewportFactory & _FlaxInstanceType<ListWheelViewport> & _FlaxDartType<ListWheelViewport, readonly ["class", "flax.core/sdk_widgets#type:ListWheelViewport", readonly [], false]> = _flaxBindInstanceType<ListWheelViewport, typeof _ListWheelViewportFactory>(_ListWheelViewportFactory, "flax.core/sdk_widgets#type:ListWheelViewport", ["flax.core/sdk_widgets#type:RenderObjectWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _ListWheelViewportFactory & _FlaxInstanceType<ListWheelViewport> & _FlaxDartType<ListWheelViewport, readonly ["class", "flax.core/sdk_widgets#type:ListWheelViewport", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "diameterRatio" | "perspective" | "offAxisFraction" | "useMagnifier" | "magnification" | "overAndUnderCenterOpacity" | "itemExtent" | "squeeze" | "renderChildrenOutsideViewport" | "offset" | "childDelegate" | "clipBehavior" | "key" | "createElement" | "createRenderObject" | "updateRenderObject" | "didUnmountRenderObject" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelViewport" | "__flaxBound:package:flutter/src/widgets/framework.dart::RenderObjectWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
