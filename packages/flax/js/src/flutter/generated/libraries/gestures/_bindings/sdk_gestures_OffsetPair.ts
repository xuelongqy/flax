// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"other","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface OffsetPair extends Readonly<{ "__flaxBound:package:flutter/src/gestures/recognizer.dart::OffsetPair": readonly [] }> { readonly __OffsetPair: unique symbol;
readonly [_flaxDartTypeValue]: OffsetPair;

}
defineObject("flax.core/sdk_gestures#type:OffsetPair", ["local","global"], [], _flaxBindingMethods("flax.core/sdk_gestures#type:OffsetPair", "object", {"toString":_flaxMemberParameters0,"operatorAdd":_flaxMemberParameters1,"operatorSubtract":_flaxMemberParameters1}, {}), []);
const _OffsetPairProxy = {type: "flax.core/sdk_gestures#type:OffsetPair", parameters: [{"name":"local","required":true,"positional":false},{"name":"global","required":true,"positional":false}], constructors: {"":[{"name":"local","required":true,"positional":false},{"name":"global","required":true,"positional":false}]}, methods: {"toString":_flaxMemberParameters0,"operatorAdd":_flaxMemberParameters1,"operatorSubtract":_flaxMemberParameters1}, getters: ["local","global"], setters: [], contextMembers: [], superMembers: ["get:local","get:global","toString","operatorAdd","operatorSubtract"]} as const;
export interface OffsetPair {
readonly [_flaxDartTypeValue]: OffsetPair;

toString(): string;
operatorAdd(other: Readonly<{ "__flaxBound:package:flutter/src/gestures/recognizer.dart::OffsetPair": readonly [] }>): OffsetPair;
operatorSubtract(other: Readonly<{ "__flaxBound:package:flutter/src/gestures/recognizer.dart::OffsetPair": readonly [] }>): OffsetPair;
get local(): upstream0.Offset;
get global(): upstream0.Offset;
}
export abstract class OffsetPair extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<OffsetPair>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: OffsetPair;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:OffsetPair", readonly [], false];
constructor(options: {local: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; global: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>}) { super(_OffsetPairProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(OffsetPair.prototype, _OffsetPairProxy);
export namespace OffsetPair { export function implement(args: [options: {local: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; global: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>}], implementation: {}): OffsetPair {
return constructProxy(_OffsetPairProxy, args, implementation) as OffsetPair; } }
export namespace OffsetPair { export declare const zero: OffsetPair; }
_flaxDefineStaticGetters(OffsetPair, "flax.core/sdk_gestures#read:OffsetPair.", ["zero"]);
_flaxBindInstanceType<OffsetPair, typeof OffsetPair>(OffsetPair, "flax.core/sdk_gestures#type:OffsetPair", ["dart:core::Object"]);
