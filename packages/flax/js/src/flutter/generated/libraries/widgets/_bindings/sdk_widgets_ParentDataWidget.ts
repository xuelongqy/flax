// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_ProxyWidget';
import type * as upstream2 from '@flax/dart/core/_bindings/flutter_Type';
import '@flax/dart/core/_bindings/flutter_Type';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_ParentDataElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ParentDataElement';
import type * as upstream5 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"renderObject","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"properties","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"joiner"},{"name":"minLevel"}] as const;
const _flaxMemberParameters4 = [{"name":"minLevel"},{"name":"prefixLineOne"},{"name":"prefixOtherLines"},{"name":"wrapWidth"}] as const;
const _flaxMemberParameters5 = [{"name":"name"},{"name":"style"}] as const;
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ParentDataWidget<T extends upstream0.ParentData = upstream0.ParentData> extends _FlaxDartWidget, Omit<upstream1.ProxyWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream1.ProxyWidget>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::ParentDataWidget": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::ProxyWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __ParentDataWidget: unique symbol;
readonly [_flaxDartTypeValue]: ParentDataWidget<T>;

readonly debugTypicalAncestorWidgetClass: upstream2.Type;
readonly debugTypicalAncestorWidgetDescription: string;
readonly child: Widget;
readonly key: upstream3.Key | null;
createElement(): upstream4.ParentDataElement<T>;
debugIsValidRenderObject(renderObject: Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): boolean;
applyParentData(renderObject: Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): void;
debugCanApplyOutOfTurn(): boolean;
toStringShort(): string;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream7.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream7.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream9.DiagnosticsTreeStyle | null | undefined}): upstream8.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream8.DiagnosticsNode>;
}
defineObject("flax.core/sdk_widgets#type:ParentDataWidget", ["debugTypicalAncestorWidgetClass","debugTypicalAncestorWidgetDescription","child","key"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:ParentDataWidget", "object", {"createElement":_flaxMemberParameters0,"debugIsValidRenderObject":_flaxMemberParameters1,"applyParentData":_flaxMemberParameters1,"debugCanApplyOutOfTurn":_flaxMemberParameters0,"toStringShort":_flaxMemberParameters0,"debugFillProperties":_flaxMemberParameters2,"toStringShallow":_flaxMemberParameters3,"toStringDeep":_flaxMemberParameters4,"toDiagnosticsNode":_flaxMemberParameters5,"debugDescribeChildren":_flaxMemberParameters0}, {}), []);
export const ParentDataWidget: object & _FlaxInstanceType<ParentDataWidget<upstream0.ParentData>> & _FlaxDartType<ParentDataWidget<upstream0.ParentData>, readonly ["class", "flax.core/sdk_widgets#type:ParentDataWidget", readonly [readonly ["class", "flax.core/sdk_rendering#type:ParentData", readonly [], false]], false]> & _FlaxDartTypeCases<_FlaxSignature0> = _flaxBindInstanceType<ParentDataWidget<upstream0.ParentData>, object>({}, "flax.core/sdk_widgets#type:ParentDataWidget", ["flax.core/sdk_widgets#type:ProxyWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as object & _FlaxInstanceType<ParentDataWidget<upstream0.ParentData>> & _FlaxDartType<ParentDataWidget<upstream0.ParentData>, readonly ["class", "flax.core/sdk_widgets#type:ParentDataWidget", readonly [readonly ["class", "flax.core/sdk_rendering#type:ParentData", readonly [], false]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
_flaxDefineDartTypes(ParentDataWidget, "flax.core/sdk_widgets#type:ParentDataWidget", {"category":"object","constructors":{}});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "debugTypicalAncestorWidgetClass" | "debugTypicalAncestorWidgetDescription" | "child" | "key" | "createElement" | "debugIsValidRenderObject" | "applyParentData" | "debugCanApplyOutOfTurn" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/framework.dart::ParentDataWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::ProxyWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.ParentData] ? {readonly prototype: ParentDataWidget<_Selected0>;} & _FlaxInstanceType<ParentDataWidget<_Selected0>> & _FlaxDartType<ParentDataWidget<_Selected0>> : never : never; }
