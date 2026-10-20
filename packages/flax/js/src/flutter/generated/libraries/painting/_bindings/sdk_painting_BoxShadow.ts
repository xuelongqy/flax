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
import { _flaxMemberParameters24, _flaxMemberParameters25, _flaxMemberParameters26, _flaxMemberParameters2 } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface BoxShadow extends Omit<upstream0.Shadow, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [] }>, Readonly<{ "__flaxBound:dart:ui::Shadow": readonly [] }> { readonly __BoxShadow: unique symbol;
readonly [_flaxDartTypeValue]: BoxShadow;

readonly color: upstream1.Color;
readonly offset: upstream2.Offset;
readonly blurRadius: number;
readonly blurSigma: number;
readonly spreadRadius: number;
readonly blurStyle: upstream3.BlurStyle;
toPaint(): upstream4.Paint;
scale(factor: number): BoxShadow;
toString(): string;
copyWith(options?: {blurRadius?: number | null | undefined; blurStyle?: upstream3.BlurStyle | null | undefined; color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; offset?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; spreadRadius?: number | null | undefined}): BoxShadow;
}
defineObject("flax.core/sdk_painting#type:BoxShadow", ["color","offset","blurRadius","blurSigma","spreadRadius","blurStyle"], [], _flaxBindingMethods("flax.core/sdk_painting#type:BoxShadow", "object", {"scale":_flaxMemberParameters24,"copyWith":_flaxMemberParameters25}, {}), [], undefined, "flax.core/sdk_dart_ui#type:Shadow");
export function _BoxShadowFactory(options: { color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | undefined; offset?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | undefined; blurRadius?: number | undefined; spreadRadius?: number | undefined; blurStyle?: upstream3.BlurStyle | undefined } = {}): BoxShadow {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_painting#type:BoxShadow", "", [{"name":"color"},{"name":"offset"},{"name":"blurRadius"},{"name":"spreadRadius"},{"name":"blurStyle"}], [], options) as BoxShadow;
}
const _BoxShadowProxy = {type: "flax.core/sdk_painting#type:BoxShadow", parameters: _flaxMemberParameters26, constructors: {"": _flaxMemberParameters26}, methods: {"toPaint":_flaxMemberParameters2,"scale":_flaxMemberParameters24,"toString":_flaxMemberParameters2,"copyWith":_flaxMemberParameters25}, getters: ["spreadRadius","blurStyle","color","offset","blurRadius","blurSigma"], setters: [], contextMembers: [], superMembers: ["get:spreadRadius","get:blurStyle","get:color","get:offset","get:blurRadius","get:blurSigma","toPaint","scale","toString","copyWith"]} as const;
export interface _BoxShadowNative extends BoxShadow {
readonly [_flaxDartTypeValue]: _BoxShadowNative;

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
export abstract class _BoxShadowNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<BoxShadow>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: BoxShadow;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:BoxShadow", readonly [], false];
constructor(options?: {color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | undefined; offset?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | undefined; blurRadius?: number | undefined; spreadRadius?: number | undefined; blurStyle?: upstream3.BlurStyle | undefined}) { super(_BoxShadowProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_BoxShadowNative.prototype, _BoxShadowProxy);
export namespace _BoxShadowFactory { export function implement(args: [options?: {color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | undefined; offset?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | undefined; blurRadius?: number | undefined; spreadRadius?: number | undefined; blurStyle?: upstream3.BlurStyle | undefined}], implementation: {}): BoxShadow {
return constructProxy(_BoxShadowProxy, args, implementation) as BoxShadow; } }
const _BoxShadowBinding = _flaxProxyFactory(_BoxShadowFactory, _BoxShadowNative) as unknown as typeof _BoxShadowFactory & (new(options?: {color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | undefined; offset?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | undefined; blurRadius?: number | undefined; spreadRadius?: number | undefined; blurStyle?: upstream3.BlurStyle | undefined}) => _BoxShadowNative);
export namespace _BoxShadowFactory { export function lerp(a: Readonly<{ "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::Shadow": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::Shadow": readonly [] }> | null, t: number): BoxShadow | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_painting#function:BoxShadow.lerp", [a, b, t]);
return _flaxResult as BoxShadow | null;
} }
export namespace _BoxShadowFactory { export function lerpList(a: DartListInput<BoxShadow, Readonly<{ "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::Shadow": readonly [] }>> | null, b: DartListInput<BoxShadow, Readonly<{ "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::Shadow": readonly [] }>> | null, t: number): DartList<BoxShadow> | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_painting#function:BoxShadow.lerpList", [a, b, t]);
return _flaxResult as DartList<BoxShadow> | null;
} }
export const BoxShadow: typeof _BoxShadowBinding & _FlaxInstanceType<BoxShadow> & _FlaxDartType<BoxShadow, readonly ["class", "flax.core/sdk_painting#type:BoxShadow", readonly [], false]> = _flaxBindInstanceType<BoxShadow, typeof _BoxShadowBinding>(_BoxShadowBinding, "flax.core/sdk_painting#type:BoxShadow", ["flax.core/sdk_dart_ui#type:Shadow","dart:core::Object"]) as typeof _BoxShadowBinding & _FlaxInstanceType<BoxShadow> & _FlaxDartType<BoxShadow, readonly ["class", "flax.core/sdk_painting#type:BoxShadow", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "color" | "offset" | "blurRadius" | "blurSigma" | "spreadRadius" | "blurStyle" | "toPaint" | "scale" | "toString" | "copyWith" | "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow" | "__flaxBound:dart:ui::Shadow";
