// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Comparable';
import '@flax/dart/core/_bindings/flutter_Comparable';
import { _flaxMemberParameters61, _flaxMemberParameters2, _flaxMemberParameters62 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ChildVicinity extends Omit<upstream0.Comparable<ChildVicinity>, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/widgets/two_dimensional_viewport.dart::ChildVicinity": readonly [] }>, Readonly<{ "__flaxBound:dart:core::Comparable": readonly [ChildVicinity] }> { readonly __ChildVicinity: unique symbol;
readonly [_flaxDartTypeValue]: ChildVicinity;

readonly xIndex: number;
readonly yIndex: number;
compareTo(other: Readonly<{ "__flaxBound:package:flutter/src/widgets/two_dimensional_viewport.dart::ChildVicinity": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [ChildVicinity] }>): number;
toString(): string;
}
defineObject("flax.core/sdk_widgets#type:ChildVicinity", ["xIndex","yIndex"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:ChildVicinity", "object", {"compareTo":_flaxMemberParameters61,"toString":_flaxMemberParameters2}, {}), []);
export function _ChildVicinityFactory(options: { xIndex: number; yIndex: number }): ChildVicinity {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:ChildVicinity", "", [{"name":"xIndex","required":true},{"name":"yIndex","required":true}], [], options) as ChildVicinity;
}
const _ChildVicinityProxy = {type: "flax.core/sdk_widgets#type:ChildVicinity", parameters: _flaxMemberParameters62, constructors: {"": _flaxMemberParameters62}, methods: {"compareTo":_flaxMemberParameters61,"toString":_flaxMemberParameters2}, getters: ["xIndex","yIndex"], setters: [], contextMembers: [], superMembers: ["get:xIndex","get:yIndex","compareTo","toString"]} as const;
export interface _ChildVicinityNative extends ChildVicinity {
readonly [_flaxDartTypeValue]: _ChildVicinityNative;

compareTo(other: Readonly<{ "__flaxBound:package:flutter/src/widgets/two_dimensional_viewport.dart::ChildVicinity": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [ChildVicinity] }>): number;
toString(): string;
get xIndex(): number;
get yIndex(): number;
}
export abstract class _ChildVicinityNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ChildVicinity>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ChildVicinity;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ChildVicinity", readonly [], false];
constructor(options: {xIndex: number; yIndex: number}) { super(_ChildVicinityProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_ChildVicinityNative.prototype, _ChildVicinityProxy);
export namespace _ChildVicinityFactory { export function implement(args: [options: {xIndex: number; yIndex: number}], implementation: {}): ChildVicinity {
return constructProxy(_ChildVicinityProxy, args, implementation) as ChildVicinity; } }
const _ChildVicinityBinding = _flaxProxyFactory(_ChildVicinityFactory, _ChildVicinityNative) as unknown as typeof _ChildVicinityFactory & (new(options: {xIndex: number; yIndex: number}) => _ChildVicinityNative);
export namespace _ChildVicinityFactory { export declare const invalid: ChildVicinity; }
_flaxDefineStaticGetters(_ChildVicinityFactory, "flax.core/sdk_widgets#read:ChildVicinity.", ["invalid"]);
export const ChildVicinity: typeof _ChildVicinityBinding & _FlaxInstanceType<ChildVicinity> & _FlaxDartType<ChildVicinity, readonly ["class", "flax.core/sdk_widgets#type:ChildVicinity", readonly [], false]> = _flaxBindInstanceType<ChildVicinity, typeof _ChildVicinityBinding>(_ChildVicinityBinding, "flax.core/sdk_widgets#type:ChildVicinity", ["dart:core::Object","flax.core/flutter#type:Comparable"]) as typeof _ChildVicinityBinding & _FlaxInstanceType<ChildVicinity> & _FlaxDartType<ChildVicinity, readonly ["class", "flax.core/sdk_widgets#type:ChildVicinity", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "xIndex" | "yIndex" | "compareTo" | "toString" | "__flaxBound:package:flutter/src/widgets/two_dimensional_viewport.dart::ChildVicinity" | "__flaxBound:dart:core::Comparable";
