// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
import { _flaxMemberParameters0, _flaxMemberParameters161, _flaxMemberParameters162 } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Shadow extends Readonly<{ "__flaxBound:dart:ui::Shadow": readonly [] }> { readonly __Shadow: unique symbol;
readonly [_flaxDartTypeValue]: Shadow;

readonly color: upstream0.Color;
readonly offset: upstream1.Offset;
readonly blurRadius: number;
readonly blurSigma: number;
toPaint(): upstream2.Paint;
scale(factor: number): Shadow;
toString(): string;
}
defineObject("flax.core/sdk_dart_ui#type:Shadow", ["color","offset","blurRadius","blurSigma"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:Shadow", "object", {"toPaint":_flaxMemberParameters0,"scale":_flaxMemberParameters161,"toString":_flaxMemberParameters0}, {}), []);
export function _ShadowFactory(options: { color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | undefined; offset?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | undefined; blurRadius?: number | undefined } = {}): Shadow {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:Shadow", "", [{"name":"color"},{"name":"offset"},{"name":"blurRadius"}], [], options) as Shadow;
}
const _ShadowProxy = {type: "flax.core/sdk_dart_ui#type:Shadow", parameters: _flaxMemberParameters162, constructors: {"": _flaxMemberParameters162}, methods: {"toPaint":_flaxMemberParameters0,"scale":_flaxMemberParameters161,"toString":_flaxMemberParameters0}, getters: ["color","offset","blurRadius","blurSigma"], setters: [], contextMembers: [], superMembers: ["get:color","get:offset","get:blurRadius","get:blurSigma","toPaint","scale","toString"]} as const;
export interface _ShadowNative extends Shadow {
readonly [_flaxDartTypeValue]: _ShadowNative;

toPaint(): upstream2.Paint;
scale(factor: number): Shadow;
toString(): string;
get color(): upstream0.Color;
get offset(): upstream1.Offset;
get blurRadius(): number;
get blurSigma(): number;
}
export abstract class _ShadowNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Shadow>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: Shadow;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:Shadow", readonly [], false];
constructor(options?: {color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | undefined; offset?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | undefined; blurRadius?: number | undefined}) { super(_ShadowProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_ShadowNative.prototype, _ShadowProxy);
export namespace _ShadowFactory { export function implement(args: [options?: {color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | undefined; offset?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | undefined; blurRadius?: number | undefined}], implementation: {}): Shadow {
return constructProxy(_ShadowProxy, args, implementation) as Shadow; } }
const _ShadowBinding = _flaxProxyFactory(_ShadowFactory, _ShadowNative) as unknown as typeof _ShadowFactory & (new(options?: {color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | undefined; offset?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | undefined; blurRadius?: number | undefined}) => _ShadowNative);
export namespace _ShadowFactory { export function convertRadiusToSigma(radius: number): number {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_dart_ui#function:Shadow.convertRadiusToSigma", [radius]);
return _flaxResult as number;
} }
export namespace _ShadowFactory { export function lerp(a: Readonly<{ "__flaxBound:dart:ui::Shadow": readonly [] }> | null, b: Readonly<{ "__flaxBound:dart:ui::Shadow": readonly [] }> | null, t: number): Shadow | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_dart_ui#function:Shadow.lerp", [a, b, t]);
return _flaxResult as Shadow | null;
} }
export namespace _ShadowFactory { export function lerpList(a: DartListInput<Shadow, Readonly<{ "__flaxBound:dart:ui::Shadow": readonly [] }>> | null, b: DartListInput<Shadow, Readonly<{ "__flaxBound:dart:ui::Shadow": readonly [] }>> | null, t: number): DartList<Shadow> | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_dart_ui#function:Shadow.lerpList", [a, b, t]);
return _flaxResult as DartList<Shadow> | null;
} }
export const Shadow: typeof _ShadowBinding & _FlaxInstanceType<Shadow> & _FlaxDartType<Shadow, readonly ["class", "flax.core/sdk_dart_ui#type:Shadow", readonly [], false]> = _flaxBindInstanceType<Shadow, typeof _ShadowBinding>(_ShadowBinding, "flax.core/sdk_dart_ui#type:Shadow", ["dart:core::Object"]) as typeof _ShadowBinding & _FlaxInstanceType<Shadow> & _FlaxDartType<Shadow, readonly ["class", "flax.core/sdk_dart_ui#type:Shadow", readonly [], false]>;
