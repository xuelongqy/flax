// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_Shadow';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Shadow';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream3 from '@flax/dart/ui/_bindings/sdk_dart_ui_BlurStyle';
import '@flax/dart/ui/_bindings/sdk_dart_ui_BlurStyle';
import type * as upstream4 from '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
const _flaxMemberParameters0 = [{"name":"factor","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"blurRadius","required":false,"positional":false},{"name":"blurStyle","required":false,"positional":false},{"name":"color","required":false,"positional":false},{"name":"offset","required":false,"positional":false},{"name":"spreadRadius","required":false,"positional":false}] as const;
const _flaxMemberParameters2 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface BoxShadow extends Omit<upstream0.Shadow, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [] }>, Readonly<{ "__flaxBound:dart:ui::Shadow": readonly [] }> { readonly __BoxShadow: unique symbol;
readonly [_flaxDartTypeValue]: BoxShadow;

}
defineObject("flax.core/sdk_painting#type:BoxShadow", ["color","offset","blurRadius","blurSigma","spreadRadius","blurStyle"], [], _flaxBindingMethods("flax.core/sdk_painting#type:BoxShadow", "object", {"scale":_flaxMemberParameters0,"copyWith":_flaxMemberParameters1}, {}), [], undefined, "flax.core/sdk_dart_ui#type:Shadow");
const _BoxShadowProxy = {type: "flax.core/sdk_painting#type:BoxShadow", parameters: [{"name":"color","required":false,"positional":false},{"name":"offset","required":false,"positional":false},{"name":"blurRadius","required":false,"positional":false},{"name":"spreadRadius","required":false,"positional":false},{"name":"blurStyle","required":false,"positional":false}], constructors: {"":[{"name":"color","required":false,"positional":false},{"name":"offset","required":false,"positional":false},{"name":"blurRadius","required":false,"positional":false},{"name":"spreadRadius","required":false,"positional":false},{"name":"blurStyle","required":false,"positional":false}]}, methods: {"toPaint":_flaxMemberParameters2,"scale":_flaxMemberParameters0,"toString":_flaxMemberParameters2,"copyWith":_flaxMemberParameters1}, getters: ["spreadRadius","blurStyle","color","offset","blurRadius","blurSigma"], setters: [], contextMembers: [], superMembers: ["get:spreadRadius","get:blurStyle","get:color","get:offset","get:blurRadius","get:blurSigma","toPaint","scale","toString","copyWith"]} as const;
export interface BoxShadow {
readonly [_flaxDartTypeValue]: BoxShadow;

toPaint(): upstream4.Paint;
scale(factor: number): BoxShadow;
toString(): string;
copyWith(options?: {color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; offset?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; blurRadius?: number | null | undefined; spreadRadius?: number | null | undefined; blurStyle?: upstream3.BlurStyle | null | undefined}): BoxShadow;
get spreadRadius(): number;
get blurStyle(): upstream3.BlurStyle;
get color(): upstream1.Color;
get offset(): upstream2.Offset;
get blurRadius(): number;
get blurSigma(): number;
}
export abstract class BoxShadow extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<BoxShadow>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: BoxShadow;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:BoxShadow", readonly [], false];
constructor(options?: {color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | undefined; offset?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | undefined; blurRadius?: number | undefined; spreadRadius?: number | undefined; blurStyle?: upstream3.BlurStyle | undefined}) { super(_BoxShadowProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(BoxShadow.prototype, _BoxShadowProxy);
export namespace BoxShadow { export function implement(args: [options?: {color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | undefined; offset?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | undefined; blurRadius?: number | undefined; spreadRadius?: number | undefined; blurStyle?: upstream3.BlurStyle | undefined}], implementation: {}): BoxShadow {
return constructProxy(_BoxShadowProxy, args, implementation) as BoxShadow; } }
export namespace BoxShadow { export function lerp(a: Readonly<{ "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::Shadow": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::Shadow": readonly [] }> | null, t: number): BoxShadow | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_painting#function:BoxShadow.lerp", [a, b, t]);
return _flaxResult as BoxShadow | null;
} }
export namespace BoxShadow { export function lerpList(a: DartListInput<BoxShadow, Readonly<{ "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::Shadow": readonly [] }>> | null, b: DartListInput<BoxShadow, Readonly<{ "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::Shadow": readonly [] }>> | null, t: number): DartList<BoxShadow> | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_painting#function:BoxShadow.lerpList", [a, b, t]);
return _flaxResult as DartList<BoxShadow> | null;
} }
_flaxBindInstanceType<BoxShadow, typeof BoxShadow>(BoxShadow, "flax.core/sdk_painting#type:BoxShadow", ["flax.core/sdk_dart_ui#type:Shadow","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "color" | "offset" | "blurRadius" | "blurSigma" | "spreadRadius" | "blurStyle" | "toPaint" | "scale" | "toString" | "copyWith" | "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow" | "__flaxBound:dart:ui::Shadow";
