// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/flutter_BorderSide';
import '@flax/flutter/painting/_bindings/flutter_BorderSide';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream4 from '@flax/flutter/painting/_bindings/flutter_BorderStyle';
import '@flax/flutter/painting/_bindings/flutter_BorderStyle';
import type * as upstream5 from '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream10 from '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import '@flax/flutter/widgets/_bindings/flutter_WidgetState';
const _flaxMemberParameters0 = [{"name":"states","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"color","required":false,"positional":false},{"name":"strokeAlign","required":false,"positional":false},{"name":"style","required":false,"positional":false},{"name":"width","required":false,"positional":false}] as const;
const _flaxMemberParameters2 = [{"name":"t","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [] as const;
const _flaxMemberParameters4 = [{"name":"properties","required":true,"positional":true}] as const;
const _flaxMemberParameters5 = [{"name":"name","required":false,"positional":false},{"name":"style","required":false,"positional":false}] as const;
const _flaxMemberParameters6 = [{"name":"minLevel","required":false,"positional":false}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface WidgetStateBorderSide extends Omit<upstream0.BorderSide, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.BorderSide>, Omit<upstream2.WidgetStateProperty<upstream0.BorderSide | null>, _flaxOwnMembers0 | keyof upstream0.BorderSide | keyof upstream1.Diagnosticable>, Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateBorderSide": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream0.BorderSide | null] }> { readonly __WidgetStateBorderSide: unique symbol;
readonly [_flaxDartTypeValue]: WidgetStateBorderSide;

}
defineObject("flax.core/sdk_widgets#type:WidgetStateBorderSide", ["color","width","style","strokeAlign","strokeInset","strokeOutset","strokeOffset"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:WidgetStateBorderSide", "object", {"resolve":_flaxMemberParameters0}, {}), [], undefined, "flax.core/flutter#type:BorderSide");
const _WidgetStateBorderSideProxy = {type: "flax.core/sdk_widgets#type:WidgetStateBorderSide", parameters: [], constructors: {"":[]}, methods: {"copyWith":_flaxMemberParameters1,"scale":_flaxMemberParameters2,"toPaint":_flaxMemberParameters3,"toStringShort":_flaxMemberParameters3,"debugFillProperties":_flaxMemberParameters4,"toDiagnosticsNode":_flaxMemberParameters5,"toString":_flaxMemberParameters6,"resolve":_flaxMemberParameters0}, getters: ["color","width","style","strokeAlign","strokeInset","strokeOutset","strokeOffset"], setters: [], contextMembers: [], superMembers: ["get:color","get:width","get:style","get:strokeAlign","get:strokeInset","get:strokeOutset","get:strokeOffset","copyWith","scale","toPaint","toStringShort","debugFillProperties","toDiagnosticsNode","toString"]} as const;
export interface WidgetStateBorderSide {
readonly [_flaxDartTypeValue]: WidgetStateBorderSide;

copyWith(options?: {color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; width?: number | null | undefined; style?: upstream4.BorderStyle | null | undefined; strokeAlign?: number | null | undefined}): upstream0.BorderSide;
scale(t: number): upstream0.BorderSide;
toPaint(): upstream5.Paint;
toStringShort(): string;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream8.DiagnosticsTreeStyle | null | undefined}): upstream7.DiagnosticsNode;
toString(options?: {minLevel?: upstream9.DiagnosticLevel | undefined}): string;
get color(): upstream3.Color;
get width(): number;
get style(): upstream4.BorderStyle;
get strokeAlign(): number;
get strokeInset(): number;
get strokeOutset(): number;
get strokeOffset(): number;
}
export abstract class WidgetStateBorderSide extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<WidgetStateBorderSide>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: WidgetStateBorderSide;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:WidgetStateBorderSide", readonly [], false];
constructor() { super(_WidgetStateBorderSideProxy, Array.from(arguments)); }
abstract resolve(states: DartSetInput<upstream10.WidgetState, upstream10.WidgetState>): upstream0.BorderSide | null;
}
_flaxDefineProxyBase(WidgetStateBorderSide.prototype, _WidgetStateBorderSideProxy);
export namespace WidgetStateBorderSide { export function implement(args: [], implementation: {resolve: ((states: DartSet<upstream10.WidgetState>) => Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null)}): WidgetStateBorderSide {
return constructProxy(_WidgetStateBorderSideProxy, args, implementation) as WidgetStateBorderSide; } }
export namespace WidgetStateBorderSide { export function lerp(a: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream0.BorderSide | null] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream0.BorderSide | null] }> | null, t: number): upstream2.WidgetStateProperty<upstream0.BorderSide | null> | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:WidgetStateBorderSide.lerp", [a, b, t]);
return _flaxResult as upstream2.WidgetStateProperty<upstream0.BorderSide | null> | null;
} }
_flaxBindInstanceType<WidgetStateBorderSide, typeof WidgetStateBorderSide>(WidgetStateBorderSide, "flax.core/sdk_widgets#type:WidgetStateBorderSide", ["flax.core/flutter#type:BorderSide","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable","flax.core/flutter#type:WidgetStateProperty"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "color" | "width" | "style" | "strokeAlign" | "strokeInset" | "strokeOutset" | "strokeOffset" | "copyWith" | "scale" | "toPaint" | "toStringShort" | "debugFillProperties" | "toDiagnosticsNode" | "toString" | "resolve" | "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateBorderSide" | "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable" | "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty";
