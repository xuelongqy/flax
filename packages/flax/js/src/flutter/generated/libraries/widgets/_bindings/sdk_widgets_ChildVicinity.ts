// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Comparable';
import '@flax/dart/core/_bindings/flutter_Comparable';
const _flaxMemberParameters0 = [{"name":"other","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ChildVicinity extends Omit<upstream0.Comparable<ChildVicinity>, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/widgets/two_dimensional_viewport.dart::ChildVicinity": readonly [] }>, Readonly<{ "__flaxBound:dart:core::Comparable": readonly [ChildVicinity] }> { readonly __ChildVicinity: unique symbol;
readonly [_flaxDartTypeValue]: ChildVicinity;

}
defineObject("flax.core/sdk_widgets#type:ChildVicinity", ["xIndex","yIndex"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:ChildVicinity", "object", {"compareTo":_flaxMemberParameters0,"toString":_flaxMemberParameters1}, {}), []);
const _ChildVicinityProxy = {type: "flax.core/sdk_widgets#type:ChildVicinity", parameters: [{"name":"xIndex","required":true,"positional":false},{"name":"yIndex","required":true,"positional":false}], constructors: {"":[{"name":"xIndex","required":true,"positional":false},{"name":"yIndex","required":true,"positional":false}]}, methods: {"compareTo":_flaxMemberParameters0,"toString":_flaxMemberParameters1}, getters: ["xIndex","yIndex"], setters: [], contextMembers: [], superMembers: ["get:xIndex","get:yIndex","compareTo","toString"]} as const;
export interface ChildVicinity {
readonly [_flaxDartTypeValue]: ChildVicinity;

compareTo(other: Readonly<{ "__flaxBound:package:flutter/src/widgets/two_dimensional_viewport.dart::ChildVicinity": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [ChildVicinity] }>): number;
toString(): string;
get xIndex(): number;
get yIndex(): number;
}
export abstract class ChildVicinity extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ChildVicinity>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ChildVicinity;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ChildVicinity", readonly [], false];
constructor(options: {xIndex: number; yIndex: number}) { super(_ChildVicinityProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(ChildVicinity.prototype, _ChildVicinityProxy);
export namespace ChildVicinity { export function implement(args: [options: {xIndex: number; yIndex: number}], implementation: {}): ChildVicinity {
return constructProxy(_ChildVicinityProxy, args, implementation) as ChildVicinity; } }
export namespace ChildVicinity { export declare const invalid: ChildVicinity; }
_flaxDefineStaticGetters(ChildVicinity, "flax.core/sdk_widgets#read:ChildVicinity.", ["invalid"]);
_flaxBindInstanceType<ChildVicinity, typeof ChildVicinity>(ChildVicinity, "flax.core/sdk_widgets#type:ChildVicinity", ["dart:core::Object","flax.core/flutter#type:Comparable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "xIndex" | "yIndex" | "compareTo" | "toString" | "__flaxBound:package:flutter/src/widgets/two_dimensional_viewport.dart::ChildVicinity" | "__flaxBound:dart:core::Comparable";
