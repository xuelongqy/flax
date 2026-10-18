// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
const _flaxMemberParameters0 = [{"name":"minValue","required":true,"positional":true},{"name":"maxValue","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [] as const;
const _flaxMemberParameters2 = [{"name":"other","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Velocity extends Readonly<{ "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::Velocity": readonly [] }> { readonly __Velocity: unique symbol;
readonly [_flaxDartTypeValue]: Velocity;

}
defineObject("flax.core/sdk_gestures#type:Velocity", ["pixelsPerSecond"], [], _flaxBindingMethods("flax.core/sdk_gestures#type:Velocity", "object", {"clampMagnitude":_flaxMemberParameters0,"toString":_flaxMemberParameters1,"operatorAdd":_flaxMemberParameters2,"operatorSubtract":_flaxMemberParameters2,"operatorNegate":_flaxMemberParameters1}, {}), []);
const _VelocityProxy = {type: "flax.core/sdk_gestures#type:Velocity", parameters: [{"name":"pixelsPerSecond","required":true,"positional":false}], constructors: {"":[{"name":"pixelsPerSecond","required":true,"positional":false}]}, methods: {"clampMagnitude":_flaxMemberParameters0,"toString":_flaxMemberParameters1,"operatorAdd":_flaxMemberParameters2,"operatorSubtract":_flaxMemberParameters2,"operatorNegate":_flaxMemberParameters1}, getters: ["pixelsPerSecond"], setters: [], contextMembers: [], superMembers: ["get:pixelsPerSecond","clampMagnitude","toString","operatorAdd","operatorSubtract","operatorNegate"]} as const;
export interface Velocity {
readonly [_flaxDartTypeValue]: Velocity;

clampMagnitude(minValue: number, maxValue: number): Velocity;
toString(): string;
operatorAdd(other: Readonly<{ "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::Velocity": readonly [] }>): Velocity;
operatorSubtract(other: Readonly<{ "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::Velocity": readonly [] }>): Velocity;
operatorNegate(): Velocity;
get pixelsPerSecond(): upstream0.Offset;
}
export abstract class Velocity extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Velocity>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: Velocity;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:Velocity", readonly [], false];
constructor(options: {pixelsPerSecond: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>}) { super(_VelocityProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(Velocity.prototype, _VelocityProxy);
export namespace Velocity { export function implement(args: [options: {pixelsPerSecond: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>}], implementation: {}): Velocity {
return constructProxy(_VelocityProxy, args, implementation) as Velocity; } }
export namespace Velocity { export declare const zero: Velocity; }
_flaxDefineStaticGetters(Velocity, "flax.core/sdk_gestures#read:Velocity.", ["zero"]);
_flaxBindInstanceType<Velocity, typeof Velocity>(Velocity, "flax.core/sdk_gestures#type:Velocity", ["dart:core::Object"]);
