// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_SingleChildRenderObjectWidget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_SingleChildRenderObjectWidget';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_RenderObjectWidget';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream3 from '@flax/flutter/painting/_bindings/flutter_BorderRadiusGeometry';
import '@flax/flutter/painting/_bindings/flutter_BorderRadiusGeometry';
import type * as upstream4 from '@flax/flutter/rendering/_bindings/sdk_rendering_CustomClipper';
import '@flax/flutter/rendering/_bindings/sdk_rendering_CustomClipper';
import type * as upstream5 from '@flax/dart/ui/_bindings/sdk_dart_ui_RRect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_RRect';
import type * as upstream6 from '@flax/dart/ui/_bindings/flutter_Clip';
import '@flax/dart/ui/_bindings/flutter_Clip';
import type * as upstream7 from '@flax/flutter/rendering/_bindings/sdk_rendering_ClipOverlapBehavior';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ClipOverlapBehavior';
import type * as upstream8 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderSliverClipRRect';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderSliverClipRRect';
import type * as upstream9 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream11 from '@flax/flutter/widgets/_bindings/sdk_widgets_SingleChildRenderObjectElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_SingleChildRenderObjectElement';
import type * as upstream12 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import type * as upstream13 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream14 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream15 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream16 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderSliver';
import { _flaxMemberParameters0, _flaxMemberParameters1 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SliverClipRRect extends _FlaxDartWidget, Omit<upstream0.SingleChildRenderObjectWidget, _flaxOwnMembers0>, Omit<upstream1.RenderObjectWidget, _flaxOwnMembers0 | keyof upstream0.SingleChildRenderObjectWidget>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.SingleChildRenderObjectWidget | keyof upstream1.RenderObjectWidget>, Readonly<{ "__flaxBound:package:flutter/src/widgets/sliver_clip.dart::SliverClipRRect": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::SingleChildRenderObjectWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::RenderObjectWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __SliverClipRRect: unique symbol;
readonly [_flaxDartTypeValue]: SliverClipRRect;

readonly borderRadius: upstream3.BorderRadiusGeometry;
readonly clipper: upstream4.CustomClipper<upstream5.RRect> | null;
readonly clipBehavior: upstream6.Clip;
readonly clipOverlap: upstream7.ClipOverlapBehavior;
readonly child: Widget | null;
readonly key: upstream2.Key | null;
createRenderObject(context: upstream9.BuildContext): upstream8.RenderSliverClipRRect;
updateRenderObject(context: upstream9.BuildContext, renderObject: Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver_clip.dart::RenderSliverClipRRect": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver_clip.dart::_RenderSliverCustomClip": readonly [upstream5.RRect] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/proxy_sliver.dart::RenderProxySliver": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver.dart::RenderSliver": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObjectWithChildMixin": readonly [upstream16.RenderSliver] }>): void;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
createElement(): upstream11.SingleChildRenderObjectElement;
didUnmountRenderObject(renderObject: Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): void;
toStringShort(): string;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream13.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream13.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream15.DiagnosticsTreeStyle | null | undefined}): upstream14.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream14.DiagnosticsNode>;
}
defineObject("flax.core/sdk_widgets#type:SliverClipRRect", ["borderRadius","clipper","clipBehavior","clipOverlap","child","key"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:SliverClipRRect", "object", {"createRenderObject":_flaxMemberParameters0,"updateRenderObject":_flaxMemberParameters1}, {}), [], undefined, "flax.core/sdk_widgets#type:SingleChildRenderObjectWidget");
export function _SliverClipRRectFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; sliver: Widget; borderRadius?: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }> | undefined; clipper?: Readonly<{ "__flaxBound:package:flutter/src/rendering/proxy_box.dart::CustomClipper": readonly [upstream5.RRect] }> & Readonly<{ "__flaxBound:package:listen/src/listen.dart::Listenable": readonly [] }> | null | undefined; clipBehavior?: upstream6.Clip | undefined; clipOverlap?: upstream7.ClipOverlapBehavior | undefined }): SliverClipRRect {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:SliverClipRRect", "", [{"name":"key"},{"name":"sliver","required":true},{"name":"borderRadius"},{"name":"clipper"},{"name":"clipBehavior"},{"name":"clipOverlap"}], [], options) as SliverClipRRect;
}
export declare namespace _SliverClipRRectFactory { const __flaxJsx: { readonly props: (globalThis.NonNullable<globalThis.Parameters<typeof _SliverClipRRectFactory>[0]>); readonly slot: null; readonly many: false; }; }
export const SliverClipRRect: typeof _SliverClipRRectFactory & _FlaxInstanceType<SliverClipRRect> & _FlaxDartType<SliverClipRRect, readonly ["class", "flax.core/sdk_widgets#type:SliverClipRRect", readonly [], false]> = _flaxBindInstanceType<SliverClipRRect, typeof _SliverClipRRectFactory>(_SliverClipRRectFactory, "flax.core/sdk_widgets#type:SliverClipRRect", ["flax.core/sdk_widgets#type:SingleChildRenderObjectWidget","flax.core/sdk_widgets#type:RenderObjectWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _SliverClipRRectFactory & _FlaxInstanceType<SliverClipRRect> & _FlaxDartType<SliverClipRRect, readonly ["class", "flax.core/sdk_widgets#type:SliverClipRRect", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "borderRadius" | "clipper" | "clipBehavior" | "clipOverlap" | "child" | "key" | "createRenderObject" | "updateRenderObject" | "debugFillProperties" | "createElement" | "didUnmountRenderObject" | "toStringShort" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/sliver_clip.dart::SliverClipRRect" | "__flaxBound:package:flutter/src/widgets/framework.dart::SingleChildRenderObjectWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::RenderObjectWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
