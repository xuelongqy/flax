// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters2, _flaxMemberParameters233 } from "@flax/material-ui/_bindings/material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RangeValues extends Readonly<{ "__flaxBound:package:material_ui/src/range_slider_parts.dart::RangeValues": readonly [] }> { readonly __RangeValues: unique symbol;
readonly [_flaxDartTypeValue]: RangeValues;

readonly start: number;
readonly end: number;
toString(): string;
}
defineObject("flax.material/material#type:RangeValues", ["start","end"], [], _flaxBindingMethods("flax.material/material#type:RangeValues", "object", {"toString":_flaxMemberParameters2}, {}), []);
export function _RangeValuesFactory(start: number, end: number): RangeValues {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:RangeValues", "", [{"name":"start","required":true,"positional":true},{"name":"end","required":true,"positional":true}], [start, end], {}) as RangeValues;
}
const _RangeValuesProxy = {type: "flax.material/material#type:RangeValues", parameters: _flaxMemberParameters233, constructors: {"": _flaxMemberParameters233}, methods: {"toString":_flaxMemberParameters2}, getters: ["start","end"], setters: [], contextMembers: [], superMembers: ["get:start","get:end","toString"]} as const;
export interface _RangeValuesNative extends RangeValues {
readonly [_flaxDartTypeValue]: _RangeValuesNative;

toString(): string;
get start(): number;
get end(): number;
}
export abstract class _RangeValuesNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RangeValues>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: RangeValues;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:RangeValues", readonly [], false];
constructor(start: number, end: number) { super(_RangeValuesProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_RangeValuesNative.prototype, _RangeValuesProxy);
export namespace _RangeValuesFactory { export function implement(args: [start: number, end: number], implementation: {}): RangeValues {
return constructProxy(_RangeValuesProxy, args, implementation) as RangeValues; } }
const _RangeValuesBinding = _flaxProxyFactory(_RangeValuesFactory, _RangeValuesNative) as unknown as typeof _RangeValuesFactory & (new(start: number, end: number) => _RangeValuesNative);
export const RangeValues: typeof _RangeValuesBinding & _FlaxInstanceType<RangeValues> & _FlaxDartType<RangeValues, readonly ["class", "flax.material/material#type:RangeValues", readonly [], false]> = _flaxBindInstanceType<RangeValues, typeof _RangeValuesBinding>(_RangeValuesBinding, "flax.material/material#type:RangeValues", ["dart:core::Object"]) as typeof _RangeValuesBinding & _FlaxInstanceType<RangeValues> & _FlaxDartType<RangeValues, readonly ["class", "flax.material/material#type:RangeValues", readonly [], false]>;
