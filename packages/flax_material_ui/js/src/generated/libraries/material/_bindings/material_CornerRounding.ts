// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters4, _flaxMemberParameters81 } from "@flax/material-ui/_bindings/material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CornerRounding extends Readonly<{ "__flaxBound:package:material_ui/src/shapes/corner_rounding.dart::CornerRounding": readonly [] }> { readonly __CornerRounding: unique symbol;
readonly [_flaxDartTypeValue]: CornerRounding;

readonly radius: number;
readonly smoothing: number;
toString(): string;
}
defineObject("flax.material/material#type:CornerRounding", ["radius","smoothing"], [], _flaxBindingMethods("flax.material/material#type:CornerRounding", "object", {"toString":_flaxMemberParameters4}, {}), []);
export function _CornerRoundingFactory(options: { radius?: number | undefined; smoothing?: number | undefined } = {}): CornerRounding {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:CornerRounding", "", [{"name":"radius"},{"name":"smoothing"}], [], options) as CornerRounding;
}
const _CornerRoundingProxy = {type: "flax.material/material#type:CornerRounding", parameters: _flaxMemberParameters81, constructors: {"": _flaxMemberParameters81}, methods: {"toString":_flaxMemberParameters4}, getters: ["radius","smoothing"], setters: [], contextMembers: [], superMembers: ["get:radius","get:smoothing","toString"]} as const;
export interface _CornerRoundingNative extends CornerRounding {
readonly [_flaxDartTypeValue]: _CornerRoundingNative;

toString(): string;
get radius(): number;
get smoothing(): number;
}
export abstract class _CornerRoundingNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CornerRounding>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: CornerRounding;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:CornerRounding", readonly [], false];
constructor(options?: {radius?: number | undefined; smoothing?: number | undefined}) { super(_CornerRoundingProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_CornerRoundingNative.prototype, _CornerRoundingProxy);
export namespace _CornerRoundingFactory { export function implement(args: [options?: {radius?: number | undefined; smoothing?: number | undefined}], implementation: {}): CornerRounding {
return constructProxy(_CornerRoundingProxy, args, implementation) as CornerRounding; } }
const _CornerRoundingBinding = _flaxProxyFactory(_CornerRoundingFactory, _CornerRoundingNative) as unknown as typeof _CornerRoundingFactory & (new(options?: {radius?: number | undefined; smoothing?: number | undefined}) => _CornerRoundingNative);
export namespace _CornerRoundingFactory { export declare const unrounded: CornerRounding; }
_flaxDefineStaticGetters(_CornerRoundingFactory, "flax.material/material#read:CornerRounding.", ["unrounded"]);
export const CornerRounding: typeof _CornerRoundingBinding & _FlaxInstanceType<CornerRounding> & _FlaxDartType<CornerRounding, readonly ["class", "flax.material/material#type:CornerRounding", readonly [], false]> = _flaxBindInstanceType<CornerRounding, typeof _CornerRoundingBinding>(_CornerRoundingBinding, "flax.material/material#type:CornerRounding", ["dart:core::Object"]) as typeof _CornerRoundingBinding & _FlaxInstanceType<CornerRounding> & _FlaxDartType<CornerRounding, readonly ["class", "flax.material/material#type:CornerRounding", readonly [], false]>;
