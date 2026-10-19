// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_ParentDataWidget';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_MultiChildLayoutParentData';
import '@flax/flutter/rendering/_bindings/sdk_rendering_MultiChildLayoutParentData';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_ProxyWidget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ProxyWidget';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream4 from '@flax/dart/core/_bindings/flutter_Type';
import '@flax/dart/core/_bindings/flutter_Type';
import type * as upstream5 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/sdk_widgets_ParentDataElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ParentDataElement';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
const _flaxMemberParameters0 = [{"name":"renderObject","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [] as const;
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface LayoutId extends _FlaxDartWidget, Omit<upstream0.ParentDataWidget<upstream1.MultiChildLayoutParentData>, _flaxOwnMembers0>, Omit<upstream2.ProxyWidget, _flaxOwnMembers0 | keyof upstream0.ParentDataWidget<upstream1.MultiChildLayoutParentData>>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.ParentDataWidget<upstream1.MultiChildLayoutParentData> | keyof upstream2.ProxyWidget>, Readonly<{ "__flaxBound:package:flutter/src/widgets/basic.dart::LayoutId": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::ParentDataWidget": readonly [upstream1.MultiChildLayoutParentData] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::ProxyWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __LayoutId: unique symbol;
readonly [_flaxDartTypeValue]: LayoutId;

readonly id: {};
readonly debugTypicalAncestorWidgetClass: upstream4.Type;
readonly debugTypicalAncestorWidgetDescription: string;
readonly child: Widget;
readonly key: upstream3.Key | null;
applyParentData(renderObject: Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): void;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
createElement(): upstream7.ParentDataElement<upstream1.MultiChildLayoutParentData>;
debugIsValidRenderObject(renderObject: Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): boolean;
debugCanApplyOutOfTurn(): boolean;
toStringShort(): string;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream8.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream8.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream10.DiagnosticsTreeStyle | null | undefined}): upstream9.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream9.DiagnosticsNode>;
}
defineObject("flax.core/sdk_widgets#type:LayoutId", ["id","debugTypicalAncestorWidgetClass","debugTypicalAncestorWidgetDescription","child","key"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:LayoutId", "object", {"applyParentData":_flaxMemberParameters0,"createElement":_flaxMemberParameters1,"debugIsValidRenderObject":_flaxMemberParameters0,"debugCanApplyOutOfTurn":_flaxMemberParameters1}, {}), [], undefined, "flax.core/sdk_widgets#type:ProxyWidget");
export function _LayoutIdFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; id: {}; child: Widget }): LayoutId {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:LayoutId", "", [{"name":"key"},{"name":"id","required":true},{"name":"child","required":true}], [], options) as LayoutId;
}
export const LayoutId: typeof _LayoutIdFactory & _FlaxInstanceType<LayoutId> & _FlaxDartType<LayoutId, readonly ["class", "flax.core/sdk_widgets#type:LayoutId", readonly [], false]> = _flaxBindInstanceType<LayoutId, typeof _LayoutIdFactory>(_LayoutIdFactory, "flax.core/sdk_widgets#type:LayoutId", ["flax.core/sdk_widgets#type:ParentDataWidget","flax.core/sdk_widgets#type:ProxyWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _LayoutIdFactory & _FlaxInstanceType<LayoutId> & _FlaxDartType<LayoutId, readonly ["class", "flax.core/sdk_widgets#type:LayoutId", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "id" | "debugTypicalAncestorWidgetClass" | "debugTypicalAncestorWidgetDescription" | "child" | "key" | "applyParentData" | "debugFillProperties" | "createElement" | "debugIsValidRenderObject" | "debugCanApplyOutOfTurn" | "toStringShort" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/basic.dart::LayoutId" | "__flaxBound:package:flutter/src/widgets/framework.dart::ParentDataWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::ProxyWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
