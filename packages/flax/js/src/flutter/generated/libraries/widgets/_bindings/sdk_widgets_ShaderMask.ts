// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_SingleChildRenderObjectWidget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_SingleChildRenderObjectWidget';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_RenderObjectWidget';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream3 from '@flax/dart/ui/_bindings/sdk_dart_ui_Shader';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Shader';
import type * as upstream4 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream5 from '@flax/dart/ui/_bindings/sdk_dart_ui_BlendMode';
import '@flax/dart/ui/_bindings/sdk_dart_ui_BlendMode';
import type * as upstream6 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderShaderMask';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderShaderMask';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/sdk_widgets_SingleChildRenderObjectElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_SingleChildRenderObjectElement';
import type * as upstream9 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream13 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream14 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
const _flaxMemberParameters0 = [{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"}] as const;
const _flaxMemberParameters1 = [{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"},{"name":"renderObject","required":true,"positional":true}] as const;
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ShaderMask extends _FlaxDartWidget, Omit<upstream0.SingleChildRenderObjectWidget, _flaxOwnMembers0>, Omit<upstream1.RenderObjectWidget, _flaxOwnMembers0 | keyof upstream0.SingleChildRenderObjectWidget>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.SingleChildRenderObjectWidget | keyof upstream1.RenderObjectWidget>, Readonly<{ "__flaxBound:package:flutter/src/widgets/basic.dart::ShaderMask": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::SingleChildRenderObjectWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::RenderObjectWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __ShaderMask: unique symbol;
readonly [_flaxDartTypeValue]: ShaderMask;

readonly shaderCallback: ((bounds: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>) => upstream3.Shader);
readonly blendMode: upstream5.BlendMode;
readonly child: Widget | null;
readonly key: upstream2.Key | null;
createRenderObject(context: upstream7.BuildContext): upstream6.RenderShaderMask;
updateRenderObject(context: upstream7.BuildContext, renderObject: Readonly<{ "__flaxBound:package:flutter/src/rendering/proxy_box.dart::RenderShaderMask": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/proxy_box.dart::RenderProxyBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObjectWithChildMixin": readonly [upstream14.RenderBox] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/proxy_box.dart::RenderProxyBoxMixin": readonly [upstream14.RenderBox] }>): void;
createElement(): upstream8.SingleChildRenderObjectElement;
didUnmountRenderObject(renderObject: Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): void;
toStringShort(): string;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream11.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream11.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream13.DiagnosticsTreeStyle | null | undefined}): upstream12.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream12.DiagnosticsNode>;
}
defineObject("flax.core/sdk_widgets#type:ShaderMask", ["shaderCallback","blendMode","child","key"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:ShaderMask", "object", {"createRenderObject":_flaxMemberParameters0,"updateRenderObject":_flaxMemberParameters1}, {}), [], undefined, "flax.core/sdk_widgets#type:SingleChildRenderObjectWidget");
export function _ShaderMaskFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; shaderCallback: ((bounds: upstream4.Rect) => Readonly<{ "__flaxBound:dart:ui::Shader": readonly [] }>); blendMode?: upstream5.BlendMode | undefined; child?: Widget | null | undefined }): ShaderMask {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:ShaderMask", "", [{"name":"key"},{"name":"shaderCallback","required":true},{"name":"blendMode"},{"name":"child"}], [], options) as ShaderMask;
}
export const ShaderMask: typeof _ShaderMaskFactory & _FlaxInstanceType<ShaderMask> & _FlaxDartType<ShaderMask, readonly ["class", "flax.core/sdk_widgets#type:ShaderMask", readonly [], false]> = _flaxBindInstanceType<ShaderMask, typeof _ShaderMaskFactory>(_ShaderMaskFactory, "flax.core/sdk_widgets#type:ShaderMask", ["flax.core/sdk_widgets#type:SingleChildRenderObjectWidget","flax.core/sdk_widgets#type:RenderObjectWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _ShaderMaskFactory & _FlaxInstanceType<ShaderMask> & _FlaxDartType<ShaderMask, readonly ["class", "flax.core/sdk_widgets#type:ShaderMask", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "shaderCallback" | "blendMode" | "child" | "key" | "createRenderObject" | "updateRenderObject" | "createElement" | "didUnmountRenderObject" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/basic.dart::ShaderMask" | "__flaxBound:package:flutter/src/widgets/framework.dart::SingleChildRenderObjectWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::RenderObjectWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
