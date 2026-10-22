// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters4, _flaxMemberParameters255 } from "@flax/material-ui/_bindings/material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RangeLabels extends Readonly<{ "__flaxBound:package:material_ui/src/range_slider_parts.dart::RangeLabels": readonly [] }> { readonly __RangeLabels: unique symbol;
readonly [_flaxDartTypeValue]: RangeLabels;

readonly start: string;
readonly end: string;
toString(): string;
}
defineObject("flax.material/material#type:RangeLabels", ["start","end"], [], _flaxBindingMethods("flax.material/material#type:RangeLabels", "object", {"toString":_flaxMemberParameters4}, {}), []);
export function _RangeLabelsFactory(start: string, end: string): RangeLabels {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:RangeLabels", "", [{"name":"start","required":true,"positional":true},{"name":"end","required":true,"positional":true}], [start, end], {}) as RangeLabels;
}
const _RangeLabelsProxy = {type: "flax.material/material#type:RangeLabels", parameters: _flaxMemberParameters255, constructors: {"": _flaxMemberParameters255}, methods: {"toString":_flaxMemberParameters4}, getters: ["start","end"], setters: [], contextMembers: [], superMembers: ["get:start","get:end","toString"]} as const;
export interface _RangeLabelsNative extends RangeLabels {
readonly [_flaxDartTypeValue]: _RangeLabelsNative;

toString(): string;
get start(): string;
get end(): string;
}
export abstract class _RangeLabelsNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RangeLabels>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: RangeLabels;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:RangeLabels", readonly [], false];
constructor(start: string, end: string) { super(_RangeLabelsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_RangeLabelsNative.prototype, _RangeLabelsProxy);
export namespace _RangeLabelsFactory { export function implement(args: [start: string, end: string], implementation: {}): RangeLabels {
return constructProxy(_RangeLabelsProxy, args, implementation) as RangeLabels; } }
const _RangeLabelsBinding = _flaxProxyFactory(_RangeLabelsFactory, _RangeLabelsNative) as unknown as typeof _RangeLabelsFactory & (new(start: string, end: string) => _RangeLabelsNative);
export const RangeLabels: typeof _RangeLabelsBinding & _FlaxInstanceType<RangeLabels> & _FlaxDartType<RangeLabels, readonly ["class", "flax.material/material#type:RangeLabels", readonly [], false]> = _flaxBindInstanceType<RangeLabels, typeof _RangeLabelsBinding>(_RangeLabelsBinding, "flax.material/material#type:RangeLabels", ["dart:core::Object"]) as typeof _RangeLabelsBinding & _FlaxInstanceType<RangeLabels> & _FlaxDartType<RangeLabels, readonly ["class", "flax.material/material#type:RangeLabels", readonly [], false]>;
